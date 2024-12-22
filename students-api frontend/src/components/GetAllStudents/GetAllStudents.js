import React, { useState } from 'react';
import axios from 'axios';

function GetAllStudents() {
  const [students, setStudents] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/students/');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      alert('Error fetching students');
    }
  };

  return (
    <div>
      <h2>Get All Students</h2>
      <button onClick={handleFetch}>Fetch All</button>
      {students.length > 0 && (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.email} - {student.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetAllStudents;