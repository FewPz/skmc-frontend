"use client";

import { useSidebar } from "./Sidebar";

export default function SidebarItem({
  icon,
  title,
  active,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
}) {
  const { open } = useSidebar();
  return (
    <li
      className={`relative rounded-xl flex gap-2 items-center p-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ${active ? "bg-gray-200" : ""} ${open ? "justify-start" : "justify-center"}`}
    >
      {icon} <span className={`${open ? "" : "hidden"}`}>{title}</span>
    </li>
  );
}
