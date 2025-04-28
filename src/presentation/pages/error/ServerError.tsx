import { Link } from "react-router-dom";

const ServerError: React.FC = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">500 - Server Error</h1>
      <p className="mb-4">Something went wrong. Please try again later.</p>
      <Link to="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
};

export default ServerError;
