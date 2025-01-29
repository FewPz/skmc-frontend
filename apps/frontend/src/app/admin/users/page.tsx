"use client";

import { trpc } from "@/utils/trpc";

export default function Page() {
  return (
    <div className="text-4xl fon-semibold text-customBlack">
      This is a users page
      {/* <p>{userQuery.data?.name}</p> */}
    </div>
  );
}
