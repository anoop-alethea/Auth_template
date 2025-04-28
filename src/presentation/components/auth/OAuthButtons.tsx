import React from 'react';
import { useAuth } from '../../hooks/useAuth';

export const OAuthButtons: React.FC = () => {
  const { loading, signInWithProvider } = useAuth();

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    try {
      await signInWithProvider(provider);
    } catch (error) {
      console.error("OAuth sign-in error:", error);
      alert("OAuth login failed.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => handleOAuthSignIn("google")}
        disabled={loading}
        className="bg-red-600 text-white p-2 rounded disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Continue with Google'}
      </button>
      <button
        onClick={() => handleOAuthSignIn("github")}
        disabled={loading}
        className="bg-gray-800 text-white p-2 rounded disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Continue with GitHub'}
      </button>
    </div>
  );
};
