import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FavPage = () => {
  const [number, setNumber] = useState("");
  const [select, setSelect] = useState("");
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!number || !select || !size) return;

    
    navigate(`/fav/${number}?q=${select}&size=${size}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Favorites Page</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Number:</label>
            <input
              type="number"
              min={1}
              max={100}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Q:</label>
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Size:</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FavPage;
