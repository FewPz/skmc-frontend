import DataTable, { TableColumn } from "react-data-table-component";

interface Row {
  id: number;
  key: string;
}

const colums: TableColumn<Row>[] = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Key",
    selector: (row) => row.key,
  },
];

const data = [
  {
    id: 1,
    key: "key1",
  },
  {
    id: 2,
    key: "key2",
  },
  {
    id: 3,
    key: "key3",
  },
];

export default function Table() {
  return <DataTable columns={colums} data={data} />;
}
