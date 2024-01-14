import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div>
      <MobileSidebar />
      <div className="flex justify-end mr-6 mt-6">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
