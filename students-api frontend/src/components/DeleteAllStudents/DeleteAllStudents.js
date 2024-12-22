import React from 'react';
import axios from 'axios';

function DeleteAllStudents() {
  const handleDeleteAll = async () => {
    try {
      await axios.delete('http://localhost:8082/api/students/');
      alert('All students deleted successfully');
    } catch (error) {
      console.error('Error deleting all students:', error);
      alert('Error deleting all students');
    }
  };

  return (
    <div>
      <h2>Delete All Students</h2>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
}

export default DeleteAllStudents;