import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // login a user
    signInUser(email, password)
      .then((result) => {
        console.log('user logged in succefully', result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log('Error', error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Login now</h1>
        </div>
        <div className="card bg-base-100 w-full mt-2 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="">
              <label className="label text-base">Email</label>
              <input
                type="email"
                name="email"
                className="input mb-4"
                placeholder="Email"
              />
              <label className="label text-base">Password</label>
              <input
                type="password"
                name="password"
                className="input mb-4"
                placeholder="Password"
              />
              <div>
                <Link className="text-base label hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <button className="btn bg-blue-500 text-white block mx-auto w-full text-center text-base font-normal mt-4">
                Login
              </button>
            </form>
            <p className="text-base">
              Dont' have an account?{' '}
              <Link to="/register" className="text-base hover:text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
