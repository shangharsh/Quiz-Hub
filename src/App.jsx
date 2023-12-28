import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { useState } from 'react';
import axios from 'axios';
const App = () => {

  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category='', difficulty='') =>{
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      setQuestions(data.results);
  };

  return (
    <BrowserRouter>
    <div style={{backgroundImage: 'url(./ques1.png)',
    height: '95vh'
    }}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
        <Route path='/quiz' element={<Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} />}/>
        <Route path='/result' element={<Result name={name} score={score}/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
