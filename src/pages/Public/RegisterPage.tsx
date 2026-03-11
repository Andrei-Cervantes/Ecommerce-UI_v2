import RegisterForm from "@/components/Forms/RegisterForm";
import SectionCard from "@/components/SectionCard";
import logo from "@/assets/logo.png";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <SectionCard
        logo={<img className="h-30 w-30" src={logo} />}
        className="w-full max-w-120 items-center"
        title="Register"
        description="Fill in the form to register an account with us."
      >
        <RegisterForm />
      </SectionCard>
    </div>
  );
};

export default RegisterPage;
