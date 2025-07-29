import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log('user created', result.user);
        e.target.reset();
        navigate('/login');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Register</h1>
        </div>
        <div className="card bg-base-100 w-full mt-2 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="">
              <label className="label text-base">Name</label>
              <input
                type="text"
                name="name"
                className="input mb-4"
                placeholder="Name"
              />

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
