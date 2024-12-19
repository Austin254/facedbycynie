import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../../contexts/AdminContext';
import { LoginForm } from '../../components/admin/auth/LoginForm';

export function AdminLogin() {
  const { login } = useAdmin();
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };
handleLogin('cynthiachiuri@gmail.com', 'Cynie123');
  return (
    <div className="min-h-screen pt-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6">Admin Login</h2>
          <LoginForm onSubmit={handleLogin} error={error} />
        </motion.div>
      </div>
    </div>
  );
}