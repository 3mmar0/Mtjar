import { Link } from "react-router-dom";
import Button from "../../components/Ui/Button";

const SignupLoginForm = ({ text, link }) => {
  return (
    <>
      <h2 className="text-white text-3xl font-bold mb-2 lg:text-2xl md:text-xl">
        Hello,Friend!
      </h2>
      <span className="border-2 w-10 inline-block mb-3"></span>
      <p className="text-white mb-2 md:text-sm">
        full up your personality information and start journey with us
      </p>
      <Link to={link} className="mt-[40px]">
        {text}
      </Link>
    </>
  );
};

export default SignupLoginForm;
