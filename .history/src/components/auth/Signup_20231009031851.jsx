import FormModelSignup from "../../models/form-model-signUp";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-60 py-28">
        <div className="bg-white rounded-2xl shadow-2xl max-w-[800px] flex md:w-5/6">
        <MetaDate ttl="Login - page" disc="The login page" />

          <FormModelSignup />
        </div>
      </div>
    </>
  );
};

export default Signup;
