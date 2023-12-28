import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css'
import { Link, useNavigate } from 'react-router-dom';

const Question = ({curQues, setCurQues, questions, options, correct, score, setScore}) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState();

    const navigate = useNavigate();
    
    const handleSelect = (option) =>{
        if(selected === option && selected === correct) {
            return 'select'
        } else if(selected === option && selected !== correct){
            return 'wrong'
        } else if(option === correct){
            return 'select'
        }
    }

    const handleCheck = (option) =>{
        setSelected(option);
        if ( option === correct) setScore(score + 1);
        setError(false);
    }

    const handleQuit = () =>{

    }

    const handleNext = () =>{
        if(curQues > 8){
            navigate('/result');
        } else if(selected){
            setCurQues(curQues + 1);
            setSelected();
        } else {
            setError('Please Select an Option.')
        }
    };

  return (
    <div className='w-50'>
        <h3 className='text-center'> Question {curQues + 1} </h3>
        <Card>
            <Card.Header className='text-center'> {questions[curQues].question} </Card.Header>
            <Card.Body>
            {error && <ErrorMessage>please choose any of these options.</ErrorMessage>}
            {options &&
            options.map((option)=>{
                return (
                    <button onClick={()=>handleCheck(option)} key={option} className={`singleOption ${selected && handleSelect(option)}`} disabled={selected}> {option} </button>
                )
            })}
                <div className='text-center d-flex justify-content-between'>
                    <Button variant="danger" className='w-50 me-2 text-uppercase' size='lg' onClick={handleQuit}><Link className='text-decoration-none text-white' to='/'>Quit</Link></Button>
                    <Button variant="primary" className='w-50 ms-2 text-uppercase' size='lg' onClick={handleNext}>Next Question</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Question;