import type { IProduct } from "@/types/IProduct";
import { type ColumnDef } from "@tanstack/react-table";
import Pill from "../../Pill";
import { Button } from "@/components/ui/button";

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
    meta: {
      thClass: "text-center",
      tdClass: "text-center",
    },
    cell: ({ row }) => {
      const price = row.original.price;
      return `Php ${price.toFixed(2)}`;
    },
  },
  {
    accessorKey: "isActive",
    header: "Status",
    meta: {
      thClass: "text-center",
      tdClass: "text-center",
    },
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      return <Pill status={isActive ? "active" : "inactive"} />;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    meta: {
      thClass: "text-center",
      tdClass: "text-center",
    },
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      return (
        <div className="flex gap-2">
          <Button variant="outline" className="border-2 border-[#2E2E2E]">
            Edit
          </Button>
          {isActive ? (
            <Button
              variant="outline"
              className="border-2 border-[#C0392B] text-[#C0392B]"
            >
              Archive
            </Button>
          ) : (
            <Button
              variant="outline"
              className="border-2 border-[#27AE60] text-[#27AE60]"
            >
              Activate
            </Button>
          )}
        </div>
      );
    },
  },
];
