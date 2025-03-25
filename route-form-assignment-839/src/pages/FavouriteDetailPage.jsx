import { useParams, useSearchParams } from "react-router-dom";

const FavDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Favorite Post Details</h1>
      <div className="space-y-4">
        <p className="text-lg text-gray-600">
          Your favorite post is <strong className="text-blue-500">{q}</strong>.
        </p>
        <p className="text-lg text-gray-600">
          Post ID is <strong className="text-blue-500">{id}</strong>.
        </p>
        <p className="text-lg text-gray-600">
          Size is <strong className="text-blue-500">{size}</strong>.
        </p>
      </div>
    </div>
  );
};

export default FavDetailPage;
