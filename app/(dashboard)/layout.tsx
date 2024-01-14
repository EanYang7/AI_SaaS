import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex relative w-full h-full">
      {/* 这个元素在小屏幕上隐藏，在中等及更大尺寸屏幕上显示为flex布局 */}
      <div className="hidden md:flex md:w-72 h-full bg-gray-900">
        <Sidebar />
      </div>
      <main className="flex-1">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
