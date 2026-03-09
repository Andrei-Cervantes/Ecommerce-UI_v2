import LoginForm from "@/components/Forms/LoginForm";
import SectionCard from "@/components/SectionCard";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <SectionCard className="w-full max-w-120" title="Login">
        <LoginForm />
      </SectionCard>
    </div>
  );
};

export default LoginPage;
