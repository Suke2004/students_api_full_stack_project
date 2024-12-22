import React, { useState } from 'react';
import axios from 'axios';

function NewStudent() {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8082/api/students/', formData);
      alert('Student added successfully');
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Error adding student');
    }
  };

  return (
    <div>
      <h2>New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default NewStudent;