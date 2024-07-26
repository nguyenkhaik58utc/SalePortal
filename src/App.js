
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Router/Layout/Layout';
import Home from './Router/Home/Home';
import Blogs from './Router/Blogs/Blogs';
import Contact from './Router/Contact/Contact';
import NoPage from './Router/NoPage/NoPage';
import MyContext from './Router/MyContext';

function App() {
  const mycontextValue = {
    value1 : "Jesse Hall",
    value2 : "Jesse Hall 2"
  }
  return (
    <MyContext.Provider value={mycontextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>)
}
export default App;
