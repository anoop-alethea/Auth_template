import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { resetPassword, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await resetPassword(email);
      if (error) {
        setMessage('Failed to send reset link: ' + error.message);
      } else {
        setMessage('Password reset link sent to your email');
      }
    } catch (error: any) {
      setMessage('Failed to send reset link: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      {message && (
        <p className={`text-sm ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {loading ? 'Sending...' : 'Reset Password'}
      </button>
    </form>
  );
};