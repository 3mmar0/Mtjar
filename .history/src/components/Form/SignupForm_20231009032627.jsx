import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline, MdDriveFileRenameOutline } from "react-icons/md";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";

const SignupForm = () => {
  co
  return (
    <>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3 ">
        <MdDriveFileRenameOutline className="mr-3 text-gray-400" />
        <FormInput placeholder="First_Name" type="name" name="name" />
      </div>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3 ">
        <MdDriveFileRenameOutline className="mr-3 text-gray-400" />
        <FormInput placeholder="last_Name" type="name" name="name" />
      </div>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3">
        <FaRegEnvelope className="mr-3 text-gray-400" />
        <FormInput type="email" name="email" placeholder="Email" />
      </div>
      <div className="bg-gray-200 w-64 md:w-60 md:p-1 flex items-center p-3 mb-3">
        <MdLockOutline className="mr-3 text-gray-400 " />
        <FormInput placeholder="New Password" type="password" name="password" />
      </div>
      <div className="flex justify-between w-64 md:text-sm md:w-60 my-3 text-green-500">
        <Link to="/login">Already have an acc?</Link>
      </div>
    </>
  );
};

export default SignupForm;
