import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Oops! Something went wrong.</h1>
      <p className="mb-4 text-lg">The page you’re looking for doesn’t exist or an error occurred.</p>

      {error && (
        <div className="bg-white p-4 rounded shadow-md mb-4 w-3/4 max-w-md">
          <h2 className="font-semibold text-lg">Error Details:</h2>
          <pre className="mt-2 text-gray-700">{error.statusText || error.message}</pre>
        </div>
      )}

      <div className="flex gap-4">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
        <Link to="/" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Go Home
        </Link>
      </div>
    </div>
  );
}
