import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ListGroup } from 'react-bootstrap';

const Question = ({curQues, setCurQues, questions, options, correct, score, setScore, setQuestions}) => {

    const [selceted, setSelected] = useState();
    const [error, setError] = useState();

  return (
    // <div className='w-50'>
    //     <h3 className='text-center'> Question {curQues + 1} </h3>
    //     <Card>
    //         <Card.Header className='text-center'>{questions[curQues].question}</Card.Header>
    //         <Card.Body>
    //             {/* <Card.Title>Special title treatment</Card.Title> */}
    //             <Card.Text>
    //                 With supporting text below as a natural lead-in to additional content.
    //             </Card.Text>
    //             <Button variant="primary" size='large'>Go somewhere</Button>
    //         </Card.Body>
    //     </Card>
    // </div>
    <div className='w-50'>
        <h3 className='text-center'> Question 1 </h3>
        <Card>
            <Card.Header className='text-center'> Question Here</Card.Header>
            <Card.Body>
            {error && <ErrorMessage>please choose any of these options.</ErrorMessage>}
            <ListGroup horizontal className='text-center d-flex justify-content-between align-items-center mb-2'>
                <ListGroup.Item className='w-50 me-2 rounded'>Option 1</ListGroup.Item>
                <ListGroup.Item className='w-50 ms-2 border-1 rounded'>Option 2</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal className='text-center d-flex justify-content-between align-items-center mb-2'>
                <ListGroup.Item className='w-50 me-2 rounded'>Option 3</ListGroup.Item>
                <ListGroup.Item className='w-50 ms-2 border-1 rounded'>Option 4</ListGroup.Item>
            </ListGroup>
                {/* <ul className='w-100 list-group'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <li class="list-group-item w-50 me-1">Option 1</li>
                        <li class="list-group-item w-50 border-1">Option 2</li>
                    </div>    
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <li class="list-group-item w-50 me-1">Option 3</li>
                        <li class="list-group-item w-50 border-1">Option 4</li>
                    </div>    
                </ul> */}
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