import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase/config';
import { setDoc, doc } from 'firebase/firestore';

const AdminPanel = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleCreateAdmin = async () => {
    // Ensure the current user is an admin
    if (!currentUser?.isAdmin) {
      alert('You do not have permission to create an admin.');
      return;
    }

    // Create a new admin user
    const password = 'defaultPassword'; // You can generate a random password or prompt for one
    const userCredential = await signup(email, password, true); // Set isAdmin to true
    alert(`Admin created: ${email}`);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={handleCreateAdmin}>Create Admin</button>
    </div>
  );
};

export default AdminPanel; 