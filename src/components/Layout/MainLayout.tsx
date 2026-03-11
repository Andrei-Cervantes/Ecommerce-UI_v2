import Navbar from "../Navbar/Navbar";
import bg from "@/assets/bg.png";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="fixed inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-[1px]" />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
