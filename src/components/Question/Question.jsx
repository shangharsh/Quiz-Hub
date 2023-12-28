import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ListGroup } from 'react-bootstrap';

const Question = ({curQues, setCurQues, questions, options, correct, score, setScore, setQuestions}) => {

    const [selected, setSelected] = useState();
    const [error, setError] = useState();
    
    const handleSelect = () =>{
        if(selected === i && selected === correct) {
            return 'select'
        }
    }

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
                    <button onClick={()=>{}} key={option} className={`singleOption ${selected && handleSelect(option)}`} disabled={selected}> {option} </button>
                )
            })}
                <div className='text-center d-flex justify-content-between'>
                    <Button variant="danger" className='w-50 me-2 text-uppercase'>Quit</Button>
                    <Button variant="primary" className='w-50 ms-2 text-uppercase'>Next Question</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Question;