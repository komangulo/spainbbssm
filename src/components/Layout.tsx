import { ReactNode } from "react";
import MainNav from "./MainNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-dark-surface text-white">
      <MainNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
