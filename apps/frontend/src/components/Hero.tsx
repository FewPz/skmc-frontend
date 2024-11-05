"use client";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <header id="header" className="bg-[url(/assets/images/hero_bg.png)] bg-no-repeat bg-cover bg-center min-h-screen relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Container>
        <Navbar />
        <div className="absolute inset-0 top-10 flex flex-col items-center justify-center gap-y-8 px-4 md:px-8 lg:px-0">
          <div className="w-full max-w-[80%] sm:max-w-[500px] md:max-w-[600px]">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                src="/assets/images/smilekrub.png"
                alt="smilekrub"
                width={600}
                height={100}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <CopyButton label="play.sk-mc.net" text="play.sk-mc.net" />
          </motion.div>

          <motion.div
            className="space-x-4 flex flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Button
              variant="default"
              size="lg"
              className="px-6 md:px-8"
            >
              เข้าสู่ระบบ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 md:px-8"
            >
              เรียนรู้เพิ่มเติม
            </Button>
          </motion.div>
        </div>
      </Container>
    </header>
  );
}
