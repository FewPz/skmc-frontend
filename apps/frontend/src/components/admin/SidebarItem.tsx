"use client";

import { useSidebar } from "./Sidebar";
import Link from "next/link";

export default function SidebarItem({
  icon,
  title,
  active,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  link: string;
}) {
  const { open } = useSidebar();
  return (
    <Link
      href={link}
      className={`relative rounded-xl flex gap-2 items-center p-3 cursor-pointer hover:bg-gray-100 transition-all duration-200 ${active ? "bg-gray-200" : ""} ${open ? "justify-start" : "justify-center"}`}
    >
      {icon} <span className={`${open ? "" : "hidden"}`}>{title}</span>
    </Link>
  );
}
