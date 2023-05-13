import React, { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Firebase/Context/UserContext";
import { GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { providerLogin, createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("helo bangladesh");
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(firstName, lastName, email, password, confirmPassword);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate("/");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        // setError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const continueWithGoogle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="sm:px-0 px-4">
      <div className=" lg:w-7/12 md:w-8/12 sm:w-10/12  w-full mx-auto  mt-20 border rounded-lg shadow-lg ">
        <div className=" flex items-center relative">
          <p className="px-4  w-full font-semibold hidden md:block xl:text-xl lg:text-lg md:text-md xl:py-8 md:py-6 py-0 text-[#008A45]">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <Link
            to="/"
            className="absolute md:bottom-24 -bottom-10    md:-right-10 right-2 md:text-2xl text-lg px-3 py-1 text-white font-semibold rounded-full bg-gray-400 "
          >
            X
          </Link>
        </div>
        <div className="flex items-center justify-center  rounded-md lg:px-6 px-3  ">
          <div className="w-full">
            <div className="flex items-center justify-between  xl:py-2 py-1  md:w-4/5 sm:w-11/12 w-full mx-auto  ">
              <h2 className="xl:text-4xl lg:text-2xl md:text-xl sm:text-2xl text-xl font-bold font-serif">
                Create Account!
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="lg:mt-10 md:mt-8 sm:mt-6 mt-4 lg:w-11/12 md:w-4/5 sm:w-11/12 w-full mx-auto"
            >
              <div className="flex items-center">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="border sm:pl-6 pl-3  lg:text-lg  sm:text-md text-sm font-semibold  required lg:py-4 md:py-3  py-2 w-full mx-auto "
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="border sm:pl-6 pl-3  lg:text-lg  sm:text-md text-sm font-semibold  required lg:py-4 md:py-3  py-2 w-full mx-auto "
                />
              </div>
              <div className=" flex flex-col">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border sm:pl-6 pl-3  lg:text-lg  sm:text-md text-sm font-semibold  required lg:py-4 md:py-3  py-2 w-full mx-auto "
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border sm:pl-6 pl-3  lg:text-lg  sm:text-md text-sm font-semibold  required lg:py-4 md:py-3  py-2 w-full mx-auto"
                />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="border sm:pl-6 pl-3  lg:text-lg  sm:text-md text-sm font-semibold  required lg:py-4 md:py-3  py-2 w-full mx-auto"
                />
              </div>
              <div className="flex items-center md:hidden  justify-between lg:mt-10 sm:mt-6 mt-4 md:px-4 px-0">
                <button className="xl:text-xl lg:text-lg text-sm md:w-full w-1/2   lg:py-4 sm:py-3 py-1 rounded-full bg-[#2F6CE5]  text-[#FFFFFF]">
                  Create Account
                </button>
                <Link
                  to="/signin"
                  className="md:text-2xl text-md font-semibold underline underline-offset-8"
                >
                  Or, Sign In
                </Link>
              </div>
            </form>

            <div className="sm:w-4/5 w-full mx-auto xl:pb-10 lg:pb-6 pb-4 ">
              <div className="  flex items-center justify-center xl:gap-x-4 gap-x-2 border w-full mx-auto lg:mt-10 md:mt-8 sm:mt-6 mt-4 xl:py-4 sm:py-2 py-1">
                <FaFacebookF className="lg:p-2 p-1 rounded-full xl:text-4xl  lg:text-2xl sm:text-xl text-lg bg-[#4C6FF5] text-white" />
                <h2 className="xl:text-2xl lg:text-xl  sm:text-md text-sm sm:font-semibold font-medium font-serif text-[#000000]">
                  Sign in with Facebook
                </h2>
              </div>
              <div className="  flex items-center justify-center xl:gap-x-4 gap-x-2 border w-full mx-auto lg:mt-3  mt-2 xl:py-4 sm:py-2 py-1">
                <FcGoogle className="rounded-full xl:text-4xl  lg:text-2xl sm:text-xl text-lg  text-white" />
                <button
                  onClick={continueWithGoogle}
                  className=" xl:text-2xl lg:text-xl  sm:text-md text-sm sm:font-semibold font-medium font-serif text-[#000000]"
                >
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start  md:w-full w-0  ">
            <div className="hidden md:block w-full mx-auto lg:py-4 py-2">
              <Link to="/signin" className="xl:text-lg text-sm font-semibold ">
                Already have an account?{" "}
                <span className="text-[#2F6CE5]">Sign In</span>
              </Link>
              <img
                className="xl:w-2/4 md:w-9/12 xl:mt-16 lg:mt-14 md:mt-10 mt-0 w-full"
                src="https://i.ibb.co/ZdK66ZD/pic.png"
                alt=""
              />
              <p className=" lg:text-lg text-md mt-4 text-left">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
