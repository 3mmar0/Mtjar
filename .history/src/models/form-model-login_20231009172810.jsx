import SignupLoginForm from "../components/Form/SignupLoginForm";
import SignupLoginmodel from "./SignupLoginmodel";


const FormModel = (props.children) => {
  return (
    <>
      {/* SignIn */}
      <div className="w-3/5 p-5 md:w-4/5">
        <SignupLoginmodel text="Sign In to Account" />
        <div className="flex flex-col items-center mt-[-15px]">
       ( props.children)
        </div>
      </div>

      {/* signUp */}
      <div className="w-2/5 lg:w-3/5 bg-green-500 rounded-tr-2xl rounded-br-2xl py-32 px-12">
        <SignupLoginForm text="Sign up" />
      </div>
    </>
  );
};

export default FormModel;
