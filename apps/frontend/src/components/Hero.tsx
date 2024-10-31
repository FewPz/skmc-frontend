import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <header className="bg-[url(/assets/images/hero_bg.png)] bg-no-repeat bg-cover bg-center min-h-dvh relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}
