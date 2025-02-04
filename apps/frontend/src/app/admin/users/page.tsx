import { client } from "@/lib/client";
import Container from "@/components/Container";
import Table from "@/components/UserTable";

export default async function Page() {
  const data = await client.user.getUser.query();
  return (
    <div className="py-8">
      <Container>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">All Users</h1>
          <Table />
        </div>
      </Container>
    </div>
  );
}
