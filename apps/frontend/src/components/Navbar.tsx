import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoSunnyOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="w-full max-w-screen-xl mx-auto py-3 px-8 bg-darkGreen/40 rounded-xl z-40 fixed top-8 left-0 right-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className="flex gap-x-2">
            <Image
              src="/assets/images/skLogo.svg"
              alt="logo"
              width={60}
              height={60}
            />
            <h1 className="font-mc text-5xl">smilekrub</h1>
          </div>
          <Button size="icon" variant="icon">
            <IoSunnyOutline />
          </Button>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex gap-x-12">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-customWhite font-mc text-[20px] hover:text-primary transition-all duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button size="lg" asChild>
            <Link href="/login" className="font-mc text-customWhite">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
