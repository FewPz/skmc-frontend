"use client";

import { client } from "@/lib/client";
import { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

const columnHelper = createColumnHelper<User>();

export default function UserTable() {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    const fetUserData = async () => {
      const res = await client.user.getUser.query();
      setData(res);
    };
    fetUserData();
  }, []);

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("role", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-lg">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
              <th className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b"></th>
              <th className="px-6 py-4 bg-gray-50 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b"></th>
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-100">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="whitespace-nowrap text-sm">
                <button
                  onClick={() => {}}
                  className="py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Update
                </button>
              </td>
              <td className="whitespace-nowrap text-sm">
                <button
                  onClick={() => {}}
                  className=" py-2 text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
