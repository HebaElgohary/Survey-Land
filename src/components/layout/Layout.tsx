
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import DashBoard from "../ui/DashBoard";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
