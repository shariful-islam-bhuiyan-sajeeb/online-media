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
    <div className="2xl:w-4/12 xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-10/12 w-full  sm:px-0 px-6 mx-auto ">
      <div>
        <div className="flex items-center justify-between  py-4 ">
          <h2 className="lg:text-4xl sm:text-2xl text-xl font-bold font-serif">
            Create Account!
          </h2>
          <h2 className="sm:text-2xl text-lg px-3 py-1 text-white font-semibold rounded-full bg-gray-600 ">
            X
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="lg:mt-10 md:mt-8 sm:mt-6 mt-4">
          <div className="flex items-center">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="border sm:pl-6 pl-3 md:text-xl sm:text-lg text-md font-semibold  required: md:py-6 sm:py-4 py-2 w-full mx-auto "
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="border sm:pl-6 pl-3 md:text-xl sm:text-lg text-md font-semibold  required: md:py-6 sm:py-4 py-2 w-full mx-auto "
            />
          </div>
          <div className=" flex flex-col">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border sm:pl-6 pl-3 md:text-xl sm:text-lg text-md font-semibold  required: md:py-6 sm:py-4 py-2 w-full mx-auto "
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="border sm:pl-6 pl-3 md:text-xl sm:text-lg text-md font-semibold  required: md:py-6 sm:py-4 py-2 w-full mx-auto"
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="border sm:pl-6 pl-3 md:text-xl sm:text-lg text-md font-semibold  required: md:py-6 sm:py-4 py-2 w-full mx-auto"
            />
          </div>
          <div className="flex items-center justify-between lg:mt-10 sm:mt-6 mt-4 md:px-4 px-0">
            <button className="xl:text-4xl lg:text-3xl sm:text-2xl text-xl  border lg:px-18 md:px-20 sm:px-14 px-6 lg:py-4 sm:py-3 py-1 rounded-full bg-[#2F6CE5]  text-[#FFFFFF]">
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

        <div>
          <div className="  flex items-center justify-center gap-x-4 border w-full mx-auto lg:mt-10 md:mt-8 sm:mt-6 mt-4 md:py-4 py-2">
            <FaFacebookF className="sm:p-2 p-1 rounded-full sm:text-4xl text-2xl bg-[#4C6FF5] text-white" />
            <h2 className="md:text-2xl sm:text-xl text-md sm:font-semibold font-medium font-serif text-[#000000]">
              Sign in with Facebook
            </h2>
          </div>
          <div className="  flex items-center justify-center gap-x-4 border w-full mx-auto lg:mt-10 md:mt-8 sm:mt-6 mt-4 md:py-4 py-2">
            <FcGoogle className="sm:text-4xl text-2xl" />
            <button
              onClick={continueWithGoogle}
              className=" md:text-2xl sm:text-xl text-md sm:font-semibold font-medium font-serif text-[#000000]"
            >
              Sign in with Google
            </button>
          </div>
          <div className="flex flex-col items-center md:mt-8 sm:mt-6 mt-4 sm:text-2xl text-xl font-medium">
            <h2 className="">By signing up, you agree to our Term & </h2>
            <h2>Condition, Privacy policy</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
