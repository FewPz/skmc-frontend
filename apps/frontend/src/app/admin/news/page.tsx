import Container from "@/components/Container";
import Editor from "@/components/Editor";

export default function Page() {
  return (
    <div className="py-8 px-12">
      <Container>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">All News</h1>
          <Editor />
        </div>
      </Container>
    </div>
  );
}
