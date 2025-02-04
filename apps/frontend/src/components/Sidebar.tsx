"use client";

import Image from "next/image";
import { ChevronFirst } from "lucide-react";
import { ChevronLast } from "lucide-react";
import { useState, createContext, useContext } from "react";

export type SidebarContextType = {
  open: boolean;
};

const SidebarContext = createContext<SidebarContextType>({
  open: true,
});

export const useSidebar = () => useContext(SidebarContext);

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <aside
      className={`max-h-screen h-screen ${
        open ? "w-[300px]" : "w-[80px]"
      } bg-white border-r shadow-sm transition-all duration-300`}
    >
      <nav className="h-full w-full flex flex-col justify-between">
        <div
          className={`flex items-center ${open ? "justify-between" : "justify-center"} p-4 border-b`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`relative transition-all duration-300 ${
                open ? "w-10 h-10" : "w-0 h-0 opacity-0"
              }`}
            >
              <Image
                src="/assets/images/sklogo.svg"
                alt="Smilekrub Admin Dashboard"
                fill
                priority
                className="object-contain transition-transform hover:scale-110"
              />
            </div>
            {open && (
              <h1 className="font-semibold text-4xl text-gray-800 whitespace-nowrap overflow-hidden transition-opacity">
                Smilekrub
              </h1>
            )}
          </div>
          <button
            onClick={() => setOpen((open) => !open)}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-900 transition-all duration-200"
          >
            {open ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
          </button>
        </div>
        <SidebarContext.Provider value={{ open }}>
          <ul className="flex-1 px-3 py-4 space-y-1">{children}</ul>
        </SidebarContext.Provider>
        <div className="p-4 border-t">
          {open && (
            <button className="flex-1 w-full py-2.5 px-4 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 active:bg-red-700 transition-all duration-200">
              Logout
            </button>
          )}
        </div>
      </nav>
    </aside>
  );
}
