import MetaDate from "../../lib/metaDate";
import SignupForm from "../Form/SignupForm";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-28">
      <div className="bg-white rounded-2xl shadow-2xl max-w-[800px] flex md:w-5/6">
        <MetaDate ttl="Register - page" disc="The register page" />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
