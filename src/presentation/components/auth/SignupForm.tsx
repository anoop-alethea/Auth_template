import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "../../../utils/toasts";

export const SignupForm: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(email, password);
      showSuccess("Signup successful! Please check your email to verify your account.");
      navigate("/dashboard"); // Redirect after signup (optional)
    } catch (error: unknown) {
      console.error("Signup error:", error);

      if (error instanceof Error) {
        showError(error.message);
      } else {
        showError("An unexpected error occurred during signup.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className={`p-2 rounded text-white ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
};
