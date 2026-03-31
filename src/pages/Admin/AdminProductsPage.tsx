import AdminCard from "@/components/Cards/AdminCard";
import AdminStatCard from "@/components/Cards/AdminStatCard";
import NewProductModal from "@/components/Modals/NewProductModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const stats = [
  { title: "TOTAL PRODUCTS", stats: "8", description: "All catalogue items" },
  { title: "ACTIVE", stats: "6", description: "Visible to shoppers" },
  { title: "ARCHIVE", stats: "2", description: "Hidden from store" },
  { title: "AVG. PRICE", stats: "$65", description: "Across active items" },
];

const AdminProductsPage = () => {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <section className="p-8 space-y-7">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest">
                CATALOGUE
              </p>
              <h2 className="font-playfair font-black text-3xl">Products</h2>
            </div>
            <Button onClick={() => setIsNewProductModalOpen(true)}>
              New Product
            </Button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {stats.map((stat) => (
              <AdminStatCard
                title={stat.title}
                stat={stat.stats}
                description={stat.description}
                descriptionClassName={
                  stat.title === "ACTIVE" ? "text-green-500" : undefined
                }
                key={stat.title}
              />
            ))}
          </div>
        </section>
        {/* Bottom */}
        <section className="p-8 space-y-7">
          <div className="flex items-end gap-2">
            <h2 className="font-playfair text-2xl font-bold">
              Product Catalogue
            </h2>
            <p className="tracking-wider text-xs text-muted-foreground leading-6.5">
              - {stats[0].stats} ITEMS
            </p>
          </div>
          {/* TODO: Add table using tanstack table for products */}
          <AdminCard className="px-5 py-4">Content</AdminCard>
        </section>
      </div>
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onClose={() => setIsNewProductModalOpen(false)}
      />
    </main>
  );
};

export default AdminProductsPage;
