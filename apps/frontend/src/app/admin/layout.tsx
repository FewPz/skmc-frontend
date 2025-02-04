import Sidebar from "@/components/admin/Sidebar";
import SidebarItem from "@/components/admin/SidebarItem";
// Icons
import { FaUsers } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-customBlack flex">
      <div>
        <Sidebar>
          <SidebarItem title="Users" icon={<FaUsers size={24} />} />
          <SidebarItem title="SmileKeys" icon={<IoKeySharp size={24} />} />
        </Sidebar>
      </div>
      <div>{children}</div>
    </main>
  );
}
