import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Result = ({name, score}) => {

  const navigate = useNavigate();

  useEffect(()=>{
    if(!name){
      navigate('/');
    }
  },[name, navigate])
  return (
    <>
      <div className='d-flex flex-column justify-content-center h-50 text-center'>
        <span className='d-block fs-3 mt-5 mb-3'>Final Score: {score}</span>
          <Button variant='contained' color='primary' size='lg' className='align-self-center'><Link to='/' className='text-decoration-none text-white'>Back To HomePage</Link></Button>
      </div>
    </>
  )
}

export default Result