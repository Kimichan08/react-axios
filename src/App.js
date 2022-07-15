import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import About from './About';
import { Link, NavLink } from 'react-router-dom';
import Detail from './Detail';
import Student from './Student';
import AddStudent from './AddStudent'

function App() {
  return (
    <div className="App">

      {/* <Link to="/" >Home</Link>
      <Link to="about" >About</Link> */}

      <NavLink to="/" style={({ isActive }) => ({
        color: isActive ? 'red' : '#000',
        background: isActive ? 'yellow' : ''
      })}>Trang chủ</NavLink>
      <NavLink to="about" style={({ isActive }) => ({
        color: isActive ? 'red' : '#000',
        background: isActive ? 'yellow' : ''
      })}>About</NavLink>
      <NavLink to="student" style={({ isActive }) => ({
        color: isActive ? 'red' : '#000',
        background: isActive ? 'yellow' : ''
      })}>Quản lý sinh viên</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="detail/:dcm" element={<Detail />} />
        <Route path="student" element={<Student />} />
        <Route path="add-student" element={<AddStudent />} />

      </Routes>
    </div>
  );
}

export default App;
