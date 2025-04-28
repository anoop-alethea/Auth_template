import { ResetPasswordForm } from "../../components/auth/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-12 space-y-6">
      <h1 className="text-2xl font-bold text-center">Reset Password</h1>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
