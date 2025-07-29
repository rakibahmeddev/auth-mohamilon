import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

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
        navigate('/orders');
      })
      .catch((error) => {
        console.log('Error', error.message);
      });
  };


  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log('user logged in with google', result.user);
        navigate('/orders');
      })
      .catch((error) => {
        console.log('Error logging in with Google', error.message);
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

            <div className=' '>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} className="btn bg-white w-full mx-auto font-normal text-base text-black border-[#e5e5e5] hover:bg-blue-500 hover:text-white ">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
