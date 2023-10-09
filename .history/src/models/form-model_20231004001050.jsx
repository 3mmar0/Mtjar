import Icon from "../components/";
import LoginForm from "../Form/LoginForm";

const FormModel = () => {
  return (
    <div className="w-3/5 p-5 md:w-4/5">
      <div className="font-bold text-left">
        <span className="text-green-500 ">Company</span>Name
      </div>

      <div className="py-10 ">
        <h2 className="text-green-500 font-bold text-3xl mt-2 lg:text-2xl md:text-xl">
          Sign in to Account
        </h2>
        <span className="border-2 border-green-500 inline-block w-10 m5"></span>
        <Icon />
        <p className="my-3 text-gray-400 ">or use your email account</p>
        <div className="flex flex-col items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default FormModel;
