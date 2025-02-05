import Container from "@/components/Container";
import { client } from "@/lib/client";

export default async function Page() {
  const result = await client.post.getPostById.query({ id: 1 });
  const data = result[0];
  return (
    <div className="text-customBlack min-h-screen py-12">
      <Container>
        <article className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
          <div className="prose prose-lg prose-slate">{data.content}</div>
        </article>
      </Container>
    </div>
  );
}
