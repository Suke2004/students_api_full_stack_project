import React, { useState } from 'react';
import axios from 'axios';

function GetStudentById() {
  const [age, setAge] = useState('');
  const [student, setStudent] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await axios.get(`http://localhost:8082/api/students/${age}`);
      setStudent(response.data);
    } catch (error) {
      console.error('Error fetching student:', error);
      alert('Error fetching student');
    }
  };

  return (
    <div>
      <h2>Get Student by Age</h2>
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleFetch}>Fetch</button>
      {student && (
        <div>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
        </div>
      )}
    </div>
  );
}

export default GetStudentById;