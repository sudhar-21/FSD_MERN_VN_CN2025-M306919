// src/UserPagination.jsx
import React, { useState, useEffect } from 'react';

export default function User2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://dummyjson.com/users?limit=20');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        // Assume API returns { users: [...] }
        setUsers(data.users || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error)   return <p>Error loading data</p>;

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>User List</h2>
      <ul>
        {currentUsers.map((u) => (
          <li key={u.id}>
            {u.firstName} {u.lastName} — {u.email}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
