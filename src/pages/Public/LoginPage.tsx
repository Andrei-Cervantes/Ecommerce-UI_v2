import LoginForm from "@/components/Forms/LoginForm";
import SectionCard from "@/components/SectionCard";
import logo from "@/assets/logo.png";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <SectionCard
        logo={<img className="h-30 w-30" src={logo} />}
        className="w-full max-w-120 items-center"
        title="Login"
        description="Enter your credentials to login."
      >
        <LoginForm />
      </SectionCard>
    </div>
  );
};

export default LoginPage;
