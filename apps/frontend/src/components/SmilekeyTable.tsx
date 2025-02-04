"use client";

import { client } from "@/lib/client";
import { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";

interface Smilekey {
  id: number;
  key: string;
  owner: string | null;
  createdAt: string;
}

const columnHelper = createColumnHelper<Smilekey>();

export default function SmilekeyTable() {
  const [data, setData] = useState<Smilekey[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  useEffect(() => {
    const fetUserData = async () => {
      const res = await client.smileKey.getSmileKeys.query();
      setData(res);
    };
    fetUserData();
  }, []);

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("key", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("owner", {
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
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
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
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => {
            table.previousPage();
          }}
          className="py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          Prev Page
        </button>
        <button
          onClick={() => {
            table.nextPage();
          }}
          className="py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
