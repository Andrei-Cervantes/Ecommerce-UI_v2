const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen flex flex-col p-4">{children}</div>;
};

export default MainLayout;
