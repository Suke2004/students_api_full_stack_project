import React, { useState } from 'react';
import axios from 'axios';

function UpdateStudentById() {
  const [id, setId] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8082/api/students/${id}`, formData);
      alert('Student updated successfully');
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Error updating student');
    }
  };

  return (
    <div>
      <h2>Update Student by ID</h2>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateStudentById;