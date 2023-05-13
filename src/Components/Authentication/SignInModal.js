import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Firebase/Context/UserContext";

const SignInModal = () => {
  const [error, setError] = useState("");
  const { user, login, providerLogin } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setError("");
        from.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
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
    <div className="relative">
      <input type="checkbox" id="signInModal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box  max-w-7xl ">
          <div className="sm:px-0 px-4">
            <div className="  w-full mx-auto  mt-10  ">
              <div className=" flex items-center relative">
                <p className="px-4  w-full font-semibold hidden md:block xl:text-xl lg:text-lg md:text-md xl:py-8 md:py-6 py-0 text-[#008A45]">
                  Let's learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼
                </p>
                {/* <Link
                  to="/"
                  className="absolute md:bottom-24 -bottom-10    md:-right-10 right-2 md:text-2xl sm:text-xl text-lg px-3 py-1 text-white font-semibold rounded-full bg-gray-400 "
                >
                  X
                </Link> */}
              </div>
              <div className="flex items-center justify-center w-full rounded-md lg:px-6 px-3  ">
                <div className="w-full">
                  <div className="flex items-center justify-between  xl:py-2 py-1 sm:w-4/5 w-full mx-auto  ">
                    <h2 className="xl:text-4xl lg:text-2xl md:text-xl sm:text-2xl text-xl font-bold font-serif">
                      Sign In
                    </h2>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="lg:mt-10 md:mt-8 sm:mt-6 mt-4  w-full mx-auto"
                  >
                    <div className=" flex flex-col">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="border sm:pl-6 pl-3  xl:text-xl lg:text-lg md:text-md  sm:text-xl text-sm font-semibold  required xl:py-4 lg:py-3  md:py-2 py-1 w-full mx-auto bg-[#F7F8FA] "
                      />
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="border sm:pl-6 pl-3  xl:text-xl lg:text-lg md:text-md  sm:text-md text-sm font-semibold  required xl:py-4 lg:py-3 md:py-2 py-1 w-full mx-auto bg-[#F7F8FA]"
                      />
                    </div>
                    <div className="flex items-center  justify-between my-3 ">
                      <button className="xl:text-xl lg:text-lg text-md md:w-full w-1/2   md:py-4 py-2 rounded-full bg-[#2F6CE5]  text-[#FFFFFF]">
                        Sign In
                      </button>
                      <Link
                        to="/signin"
                        className="md:text-2xl text-md md:hidden font-semibold underline underline-offset-8"
                      >
                        or, Create Account
                      </Link>
                    </div>
                  </form>

                  <div className=" w-full mx-auto xl:pb-10 lg:pb-6 pb-4 ">
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
                    <Link
                      to="/signup"
                      className="xl:text-lg text-sm font-semibold "
                    >
                      Don’t have an account yet?
                      <span className="text-[#2F6CE5]">
                        Create new for free!
                      </span>
                    </Link>
                    <img
                      className="xl:w-2/4 md:w-9/12 xl:mt-16 lg:mt-14 md:mt-10 mt-0 w-full"
                      src="https://i.ibb.co/ZdK66ZD/pic.png"
                      alt=""
                    />
                    <p className=" lg:text-lg text-md mt-4 text-left">
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
