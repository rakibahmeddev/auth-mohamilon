import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Register</h1>
        </div>
        <div className="card bg-base-100 w-full mt-2 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="">
              <label className="label text-base">Email</label>
              <input type="email" className="input mb-4" placeholder="Email" />
              <label className="label text-base">Password</label>
              <input
                type="password"
                className="input mb-4"
                placeholder="Password"
              />

              <button className="btn bg-blue-500 text-white block mx-auto w-full text-center text-base font-normal mt-4">
                Register
              </button>
            </form>
            <p className="text-base">
              Already have an account?{' '}
              <Link to="/login" className="text-base hover:text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
