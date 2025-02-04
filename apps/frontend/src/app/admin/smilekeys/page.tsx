import Container from "@/components/Container";
import SmilekeyTable from "@/components/SmilekeyTable";

export default function Page() {
  return (
    <div className="py-8">
      <Container>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">All Smilekeys</h1>
        </div>
        <SmilekeyTable />
      </Container>
    </div>
  );
}
