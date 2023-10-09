import { Link } from "react-router-dom";
import signupFormignupForm from "../Form/LoginForm";

import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Button from "../Ui/Button";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-10 bg-gray-100 ">
        <div className="bg-white rounded-2xl shadow-2xl max-w-[800px] flex md:w-5/6">
          {/* signUp */}
          <div className="w-2/5 bg-green-500 rounded-tl-2xl rounded-bl-2xl py-32 px-12">
            <h2 className="text-white text-3xl font-bold mb-2 lg:text-xl md:text-xl md:mr-10 ">
              Hello,Friend!
            </h2>
            <span className="border-2 w-10 inline-block mb-3"></span>
            <p className="text-white mb-2 ">
              full up your personality information and start journey with us
            </p>
            <Button text="Sign in" type="submit" variant={"default"} />
          </div>
          {/* Signup */}
          <div className="w-3/5 p-5">
            <div className="font-bold text-right ">
              <span className="text-green-500 ">Company</span>Name
            </div>
            <div className="py-10 ">
              <h2 className="text-green-500 font-bold text-3xl mt-2 lg:text-2xl md:text-xl ">
                Sign up to Account
              </h2>
              <span className="border-2 border-green-500 inline-block w-10 m5"></span>
              <div className="flex justify-center ">
                <a className="border-2 rounded-full p-4 mr-2 border-green-100 mt-3 cursor-pointer hover:bg-green-500 hover:text-white">
                  <FaFacebookF />
                </a>
                <a className="border-2 rounded-full p-4 mr-2 border-green-100 mt-3 cursor-pointer hover:bg-green-500 hover:text-white">
                  <FaLinkedinIn />
                </a>
                <a className="border-2 rounded-full p-4 border-green-100 mt-3 cursor-pointer hover:bg-green-500 hover:text-white">
                  <FaGoogle />
                </a>
              </div>
              <p className="my-3 text-gray-400 ">or use your email account</p>
              <div className="flex flex-col items-center">
                <signupForm />
                <div className="flex justify-between w-64 md:text-sm md:w-60 my-3 text-green-500">
                  <Link to="/login">Already have an acc?</Link>
                </div>
                <Button
                  type="submit"
                  text="Create an account"
                  variant={"default"}
                  className="bg-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
