import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <header className="bg-[url(/assets/images/hero_bg.png)] bg-no-repeat bg-cover bg-center min-h-dvh relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <Container>
        <Navbar />
        <div className="absolute inset-0 top-10 flex flex-col items-center justify-center gap-y-8">
          <div className="w-full max-w-[500px]">
            <Image
              src={"/assets/images/smilekrub.png"}
              alt="smilekrub"
              layout="responsive"
              width={600}
              height={100}
            />
          </div>
          <div>
            <CopyButton label="play.sk-mc.net" text="sk-server-ip" />
          </div>
          <div className="space-x-4">
            <Button variant="default" size="lg" className="font-mc">
              login
            </Button>
            <Button variant="outline" size="lg" className="font-mc">
              learn more
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
