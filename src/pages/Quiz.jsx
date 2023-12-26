import React, { useEffect } from 'react'

const Quiz = ({name, questions, setQuestions, score, setScore}) => {

  useEffect(()=>{
    console.log(questions);
  },[questions]);

  return (
    <div>Quiz</div>
  )
}

export default Quiz