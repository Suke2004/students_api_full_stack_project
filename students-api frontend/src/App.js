import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewStudent from './components/NewStudent/NewStudent';
import GetStudentById from './components/GetStudentById/GetStudentById';
import GetAllStudents from './components/GetAllStudents/GetAllStudents';
import DeleteStudentById from './components/DeleteStudentById/DeleteStudentById';
import DeleteAllStudents from './components/DeleteAllStudents/DeleteAllStudents';
import UpdateStudentById from './components/UpdateStudentById/UpdateStudentById';

function App() {
  return (
    <Router>
      <div>
        <h1>Student Management</h1>
        <nav>
          <button><Link to="/new-student">New Student</Link></button>
          <button><Link to="/get-by-id">Get by ID</Link></button>
          <button><Link to="/get-all">Get All Students</Link></button>
          <button><Link to="/delete-by-id">Delete by ID</Link></button>
          <button><Link to="/delete-all">Delete All Students</Link></button>
          <button><Link to="/update-by-id">Update Student by ID</Link></button>
        </nav>

        <Routes>
          <Route path="/new-student" element={<NewStudent />} />
          <Route path="/get-by-id" element={<GetStudentById />} />
          <Route path="/get-all" element={<GetAllStudents />} />
          <Route path="/delete-by-id" element={<DeleteStudentById />} />
          <Route path="/delete-all" element={<DeleteAllStudents />} />
          <Route path="/update-by-id" element={<UpdateStudentById />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;