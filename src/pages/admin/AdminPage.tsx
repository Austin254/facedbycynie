import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import { AdminLogin } from './AdminLogin';
import { AdminDashboard } from './AdminDashboard';

export function AdminPage() {
  const { user, isAdmin } = useAdmin();

  if (!user) {
    return <AdminLogin />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}