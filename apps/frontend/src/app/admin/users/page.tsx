import { client } from "@/lib/client";

export default async function Page() {
  const data = await client.user.getUser.query();
  return (
    <div className="text-4xl fon-semibold text-customBlack">
      This is a users page
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
