import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <NavLink to="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Go Homepage
        </button>
      </NavLink>
    </div>
  );
};

export default NotFound;