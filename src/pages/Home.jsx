import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import Categories from '../Data/Categories'
import { MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

const Home = ({name, setName, fetchQuestions}) => {

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () =>{
    if(!category || !difficulty || !name ){
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
    }
  }

  return (
    <div className='d-flex justify-content-around'>
        <section className='text-center w-25'>
        <img width={300} height={200} src="https://images.unsplash.com/photo-1499377193864-82682aefed04?q=5
        80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D}" alt="Quiz Image" />
        </section>
        <section className='w-25'>

          <div className='fs-4 text-center mb-3'>Quiz Settings</div>

          {error && <ErrorMessage>please fill all the fields.</ErrorMessage>}

          <TextField 
          className='mb-3' 
          label='Enter Name' 
          variant='outlined' 
          fullWidth
          onChange={(e)=>setName(e.target.value)}          
          ></TextField>

          <TextField 
          className='mb-3' 
          select 
          label='Select Category' 
          variant='outlined' 
          fullWidth
          onChange={(e)=> setCategory(e.target.value)}
          value={category}
          >
          {Categories.map((item)=> (
                <MenuItem value={item.value} key={item.category}>
                {item.category}
                </MenuItem>
              ))}
          </TextField>

          <TextField 
          className='mb-3' 
          label='Select Difficulty' 
          select 
          variant='outlined' 
          fullWidth
          onChange={(e)=> setDifficulty(e.target.value)}
          value={difficulty}
          >
            <MenuItem value='easy' key='Easy'>
              Easy
            </MenuItem>
            <MenuItem value='medium' key='Medium'>
              Medium
            </MenuItem>
            <MenuItem value='hard' key='Hard'>
              Hard
            </MenuItem>
          </TextField>

          <Button fullWidth variant='contained' color='primary' size='large' onClick={handleSubmit}>Start Quiz</Button>
        </section>
    </div>
  )
}

export default Home