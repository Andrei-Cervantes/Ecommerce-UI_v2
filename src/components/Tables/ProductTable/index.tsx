import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { IProduct } from "@/types/IProduct";
import { type Table, flexRender } from "@tanstack/react-table";

interface ProductTableProps {
  table: Table<IProduct>;
}

const ProductTable = ({ table }: ProductTableProps) => {
  return (
    <>
      <table className="w-full text-sm">
        <thead className="bg-black text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={cn(
                    "py-2 px-4 font-medium text-[8px] tracking-[3px] uppercase",
                    header.column.columnDef.meta?.thClass ?? "text-left",
                  )}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-muted/50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={cn(
                    "py-2 px-4",
                    cell.column.columnDef.meta?.tdClass ?? "text-left",
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-5 py-4">
        <p className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
