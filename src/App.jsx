import './App.css';
import Home from '../components/home';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Courses from '../components/courses';
import Blog from '../components/blog';
import About from '../components/about';
import Review from '../components/review';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/registerForm';

import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/review' element={<Review />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/registrarse' element={<RegisterForm />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
