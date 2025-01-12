import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="w-full max-w-md mx-auto mt-10">
          <div className="bg-white rounded-xl shadow-md p-10 border">
            <div className="flex flex-col items-center gap-y-6">
              <h1 className="text-5xl font-mc text-customBlack">
                Key Generator
              </h1>
              <Input
                type="text"
                placeholder="Enter a number of key."
                className="text-customBlack"
              />
              <Button variant="default" className="font-mc w-full">
                Generate Key
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
