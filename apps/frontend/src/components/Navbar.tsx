import { navlinks } from "@/constants/navlinks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import AuthButton from "./AuthButton";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hanldeMenuOpen = (e: any) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <nav className="glow-effect w-full max-w-screen-xl mx-auto py-3 px-8 bg-secondary/80 rounded-xl z-40 relative top-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className="flex gap-x-2">
            <Link href={"#header"}>
              <Image
                src="/assets/images/skLogo.svg"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
        </div>
        {/* Desktop navbar */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-x-12">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={hanldeMenuOpen}
                  href={link.path}
                  className="text-customWhite text-[20px] hover:text-primary transition-all duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          {user ? "Hello" + user.name : <AuthButton />}
        </div>
        {/* Desktop navbar */}
        {/* Mobile navbar */}
        <div className="lg:hidden flex justify-end">
          {isMenuOpen ? (
            <Button size="icon" variant="icon" onClick={hanldeMenuOpen}>
              <MdClose />
            </Button>
          ) : (
            <Button size="icon" variant="icon" onClick={hanldeMenuOpen}>
              <FaBarsStaggered />
            </Button>
          )}
        </div>
        {/* Mobile navbar */}
        {isMenuOpen && (
          <div className="lg:hidden glow-effect w-full absolute text-center top-[120%] left-0 bg-secondary/80 p-6 rounded-xl">
            <ul className="flex flex-col gap-y-4">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-customWhite text-[20px] hover:text-primary transition-all duration-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-4" asChild>
              <Link href="#" className="text-customWhite">
                เข้าสู่ระบบ
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
