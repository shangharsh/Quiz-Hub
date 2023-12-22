import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
const App = () => {

  return (
    <BrowserRouter>
    <div style={{backgroundImage: 'url(./ques1.png)',
    height: '95vh'
    }}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
