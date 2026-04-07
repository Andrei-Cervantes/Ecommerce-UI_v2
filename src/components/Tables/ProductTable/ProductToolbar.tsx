import { RefreshCw } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../../ui/select";
import { type IProduct } from "@/types/IProduct";
import type { Table } from "@tanstack/react-table";

interface ProductToolbarProps {
  table: Table<IProduct>;
  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
}

const ProductToolbar = ({
  table,
  globalFilter,
  onGlobalFilterChange,
}: ProductToolbarProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Input
          placeholder="Search products..."
          className="border-2 border-black bg-[#F5F5F0]"
          value={globalFilter}
          onChange={(e) => onGlobalFilterChange(e.target.value)}
        />
        <Select
          onValueChange={(value) => {
            table
              .getColumn("status")
              ?.setFilterValue(value === "all" ? undefined : value);
          }}
        >
          <SelectTrigger className="border-2 border-black bg-[#F5F5F0]">
            <SelectValue placeholder="ALL STATUS" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">ALL STATUS</SelectItem>
              <SelectItem value="active">ACTIVE</SelectItem>
              <SelectItem value="inactive">INACTIVE</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button variant="default">
        <RefreshCw />
        Refresh
      </Button>
    </div>
  );
};

export default ProductToolbar;
