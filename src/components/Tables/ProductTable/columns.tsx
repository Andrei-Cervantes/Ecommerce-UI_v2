import type { IProduct } from "@/types/IProduct";
import { type ColumnDef } from "@tanstack/react-table";
import Pill from "../../Pill";

export const productColumns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.original.price;
      return `Php ${price.toFixed(2)}`;
    },
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      return <Pill status={isActive ? "active" : "inactive"} />;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex gap-2">
          <button className="px-2 py-1 bg-blue-500 text-white rounded">
            Edit
          </button>
          <button className="px-2 py-1 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      );
    },
  },
];
