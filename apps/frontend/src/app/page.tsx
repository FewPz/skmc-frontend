import Hero from "@/components/Hero";
import Image from "next/image";
import Title from "@/components/Title";

export default function Page() {
  return (
    <>
      <Hero />
      <div className="flex justify-center relative bg-white bg-no-repeat bg-cover bg-center min-h-dvh">
        <div id="about" className="absolute inset-0">
          <Title text="WHAT’S SK-MC" color="black" />
          <div className="flex items-start p-4 mx-44">
            <div className="flex-shrink-0">
              <Image
                alt="image"
                src="/assets/images/skLogo.svg"
                width={481}
                height={481}
              />
            </div>
            <div className="ml-24">
              <p className="text-[44px] text-black leading-relaxed">
                มายคราฟ (Minecraft) เป็นเกมแนวแซนด์บ็อกซ์ที่ให้ผู้เล่นสร้างและสำรวจโลกที่ประกอบไปด้วยบล็อกสามมิติ สามารถสร้างสิ่งต่าง ๆ ต่อสู้กับมอนสเตอร์ หรือทำกิจกรรมต่าง ๆ ในโลกเสมือนที่ไม่มีที่สิ้นสุด
              </p>
            </div>  
          </div>        
        </div>
      </div>
      <div id="news" className="flex justify-center relative bg-[#27733A] bg-no-repeat bg-cover bg-center min-h-dvh">
        <Title text="WHAT’S NEWS" />
      </div>
      <div id="faq" className="flex justify-center relative bg-white bg-no-repeat bg-cover bg-center min-h-dvh">
        <Title text="FAQ" color="black" />
      </div>
    </>
  );
}
