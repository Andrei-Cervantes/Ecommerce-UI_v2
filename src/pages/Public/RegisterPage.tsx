import RegisterForm from "@/components/Forms/RegisterForm";
import SectionCard from "@/components/SectionCard";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <SectionCard className="w-full max-w-120" title="Register">
        <RegisterForm />
      </SectionCard>
    </div>
  );
};

export default RegisterPage;
