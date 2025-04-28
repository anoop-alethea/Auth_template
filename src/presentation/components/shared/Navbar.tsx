import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="text-lg font-bold">SaaSApp</div>
      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/billing">Billing</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};
