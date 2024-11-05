import Image from "next/image";
import Title from "@/components/ui/Title";

export default function About() {
  return (
    <div className="flex justify-center relative bg-white bg-no-repeat bg-cover bg-center min-h-screen">
      <div
        id="about"
        className="absolute inset-0 flex flex-col items-center text-center sm:text-left"
      >
        <Title>WHAT’S SK-MC</Title>
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:mx-16 lg:mx-44 mt-4 sm:mt-8">
          <div className="flex-shrink-0 mb-6 sm:mb-0">
            <Image
              alt="image"
              src="/assets/images/skLogo.svg"
              width={300} // Smaller width for mobile
              height={300} // Adjusted height for mobile
              className="w-48 h-48 sm:w-60 sm:h-60 lg:w-[481px] lg:h-[481px]"
            />
          </div>
          <div className="sm:ml-8 lg:ml-24 max-w-lg">
            <p className="text-lg sm:text-2xl lg:text-[44px] text-black leading-relaxed">
              มายคราฟ (Minecraft)
              เป็นเกมแนวแซนด์บ็อกซ์ที่ให้ผู้เล่นสร้างและสำรวจโลกที่ประกอบไปด้วยบล็อกสามมิติ
              สามารถสร้างสิ่งต่าง ๆ ต่อสู้กับมอนสเตอร์ หรือทำกิจกรรมต่าง ๆ
              ในโลกเสมือนที่ไม่มีที่สิ้นสุด
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
