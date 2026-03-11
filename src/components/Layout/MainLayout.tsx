import { useUserStore } from "@/zustand/stores/UserStore";
import Navbar from "../Navbar/Navbar";
import bg from "@/assets/bg.png";
import { cn } from "@/lib/utils";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserStore();
  const isAdmin = !!user?.isAdmin;

  return (
    <div
      className={cn("min-h-screen flex flex-col", isAdmin && "bg-[#E8E8E3]")}
    >
      {!isAdmin && (
        <>
          <div
            className="fixed inset-0 -z-10 bg-center bg-cover"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          />
          <div className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-[1px]" />
        </>
      )}
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
