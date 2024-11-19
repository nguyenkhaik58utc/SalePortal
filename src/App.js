
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Question from './Exam/Question/Question';
import ExamList from './Exam/Exam';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/exam" element={<ExamList />} />
        <Route path="/exam/question" element={<Question />} />
      </Routes>
    </BrowserRouter>)
}
export default App;
