import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "../../../utils/toasts";
import { Input, Button } from "../../ui/atoms";

export const LoginForm: React.FC = () => {
  // Assuming useAuth now gets login from context after refactoring the hook as suggested earlier
  // Note: The original useAuth hook directly called Supabase, which violates Clean Architecture.
  // You should refactor useAuth to use the AuthContext which injects the AuthUseCase.
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Explicitly type the event parameter 'e'
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform client-side validation here BEFORE submitting
    // if (!isValidEmail(email)) {
    //   showError("Please enter a valid email address.");
    //   return;
    // }
    // Add password validation if needed

    try {
      // Call login from the context/hook (after useAuth refactoring)
      await login(email, password);
      showSuccess("Login successful!");
      navigate("/dashboard"); // Or navigate based on successful login logic
    } catch (error: any) { // Keep error handling
      console.error("Login error:", error);
      // Use specific error message from hook/usecase or a generic one
      // Example: if (error.message.includes("Invalid login credentials")) { ... }
      showError(error.message || "An unexpected error occurred during login.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Use the styled Input component */}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        // Explicitly type the ChangeEvent parameter 'e'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        required
        disabled={loading}
        // Add error state prop here if implementing inline validation feedback
      />
      {/* Use the styled Input component */}
      <Input
        type="password"
        placeholder="Password"
        value={password}
        // Explicitly type the ChangeEvent parameter 'e'
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        required
        disabled={loading}
        // Add error state prop here
      />
      {/* Add Password Input with Toggle */}
      {/* Add validation feedback below inputs */}

      {/* Use the styled Button component */}
      <Button type="submit" disabled={loading} className="w-full"> // Example: make button full width
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};