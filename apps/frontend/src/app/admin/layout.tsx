import Sidebar from "@/components/Sidebar";
import SidebarItem from "@/components/SidebarItem";
// Icons
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-customBlack flex">
      <div>
        <Sidebar>
          <SidebarItem title="Home" icon={<FaHome size={24} />} link="/admin" />
          <SidebarItem
            title="Users"
            icon={<FaUsers size={24} />}
            link="/admin/users"
          />
          <SidebarItem
            title="SmileKeys"
            icon={<IoKeySharp size={24} />}
            link="/admin/smilekeys"
          />
          <SidebarItem
            title="News"
            icon={<FaRegNewspaper size={24} />}
            link="/admin/news"
          />
        </Sidebar>
      </div>
      <div className="max-w-[100dvw] w-full">{children}</div>
    </main>
  );
}
