import React, { useState } from 'react';
import axios from 'axios';

function DeleteStudentById() {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8082/api/students/${id}`);
      alert('Student deleted successfully');
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Error deleting student');
    }
  };

  return (
    <div>
      <h2>Delete Student by ID</h2>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteStudentById;