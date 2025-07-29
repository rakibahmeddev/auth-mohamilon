import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner text-info"></span></div>;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <p className="text-center text-red-500 mt-4">
        You must be logged in to view this page.
      </p>
    </div>
  );
};

export default PrivateRoute;
