import { SignupForm } from "../../components/auth/SignupForm";

const Signup: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-12 space-y-6">
      <h1 className="text-2xl font-bold text-center">Sign Up</h1>
      <SignupForm />
    </div>
  );
};

export default Signup;
