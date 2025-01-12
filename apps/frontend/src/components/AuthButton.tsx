import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const router = useRouter();
  const handleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/v1/api/auth/google`);
  };
  return (
    <Button size="lg" onClick={handleLogin}>
      เข้าสู่ระบบ
    </Button>
  );
}
