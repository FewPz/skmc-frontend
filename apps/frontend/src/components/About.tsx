import Image from "next/image";
import Title from "@/components/ui/Title";
import Container from "@/components/Container";

export default function About() {
  return (
    <section id="about" className="min-h-dvh">
      <Container>
        <div>
          <Title>WHAT’S SK-MC</Title>
          <div className="flex items-center justify-center gap-[100px] p-4">
            <div className="flex-shrink-0">
              <Image
                alt="image"
                src="/assets/images/skLogo.svg"
                width={400}
                height={400}
              />
            </div>
            <div>
              <p className="header-2 text-customBlack leading-relaxed">
                มายคราฟ (Minecraft)
                เป็นเกมแนวแซนด์บ็อกซ์ที่ให้ผู้เล่นสร้างและสำรวจโลกที่ประกอบไปด้วยบล็อกสามมิติ
                สามารถสร้างสิ่งต่าง ๆ ต่อสู้กับมอนสเตอร์ หรือทำกิจกรรมต่าง ๆ
                ในโลกเสมือนที่ไม่มีที่สิ้นสุด
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
