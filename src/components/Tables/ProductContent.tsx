import { useState } from "react";
import AdminCard from "../Cards/AdminCard";
import ProductTable from "./ProductTable";
import ProductToolbar from "./ProductTable/ProductToolbar";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { IProduct } from "@/types/IProduct";
import { productColumns } from "./ProductTable/columns";

const mockProducts: IProduct[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for product 1",
    price: 19.99,
    isActive: true,
    createdOn: "2023-01-01",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for product 2",
    price: 29.99,
    isActive: false,
    createdOn: "2023-02-01",
  },
];

const ProductContent = () => {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: mockProducts,
    columns: productColumns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <AdminCard className="px-5 py-4 bg-[#E8E8E3]">
      <div>
        <ProductToolbar
          table={table}
          globalFilter={globalFilter}
          onGlobalFilterChange={setGlobalFilter}
        />
        <ProductTable table={table} />
      </div>
    </AdminCard>
  );
};

export default ProductContent;
