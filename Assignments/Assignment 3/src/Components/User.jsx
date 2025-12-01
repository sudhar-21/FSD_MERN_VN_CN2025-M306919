// src/EditUser.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/users/1')
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching user', err);
        setError('Error fetching user');
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://dummyjson.com/users/1`, user, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Updated user:', res.data);
      setUser(res.data);
      setStatus('User updated!');
    } catch (err) {
      console.error('Error updating user', err);
      setStatus('Error updating user');
    }
  };

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ maxWidth: '500px', padding: '1rem' }}>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Example fields — you can adjust based on what fields you want */}
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName || ''}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName || ''}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={user.age || ''}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </label>
        {/* Add more fields as needed — e.g. email, phone etc */}
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Update</button>
      </form>

      {status && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{status}</p>}
    </div>
  );
}
