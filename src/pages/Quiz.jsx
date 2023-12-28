import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Question from '../components/Question/Question';
import { useNavigate } from 'react-router-dom';

const Quiz = ({name, questions, setQuestions, score, setScore}) => {
  const [options, setOptions] = useState();
  const [curQues, setCurQues] = useState(0);
  
  const navigate = useNavigate();
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[curQues]?.correct_answer,
          ...questions[curQues]?.incorrect_answers,   
        ])
    );
    if(!name){
    navigate('/');
  }
  }, [questions, curQues]);
  
  const handleShuffle = (optionItems) => {
    return optionItems.sort(() => Math.random() - 0.5);
  };
  
  return (
    <div>
      <div className='text-center'>
      <span className='subtitle text-center border border-primary p-2 rounded'>Welcome, {name}</span>
      </div>
      {questions?(
        <>
        <div className='d-flex justify-content-center align-items-center mt-3 flex-column'>
          <div className='w-50 d-flex justify-content-between align-items-center'>
            <p>Category: {questions[curQues].category}</p>
            <p>Score: {score}</p>
          </div>
          
        <Question 
          curQues={curQues} 
          setCurQues={setCurQues}
          questions={questions}
          options={options}
          correct={questions[curQues]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          />
        </div>
        </>
      ):( 
      <div className='text-center'>
        <CircularProgress 
        className='mt-1'/>
      </div> 
      )}
    </div>
  );
};

export default Quiz;