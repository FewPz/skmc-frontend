import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="flex flex-col items-center py-10 gap-y-4">
          <h1 className="header-1 text-customBlack font-mc">Admin Dashboard</h1>
          <Button variant="default" className="font-mc">
            <Link href={"/admin/get-token"}>Token Generator</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
