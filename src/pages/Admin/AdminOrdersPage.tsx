import AdminStatCard from "@/components/AdminStatCard";

const stats = [
  { title: "TOTAL ORDERS", stats: "8", description: "All time" },
  { title: "PENDING", stats: "6", description: "Awaiting fulfillment" },
  { title: "COMPLETED", stats: "2", description: "Fulfilled" },
  { title: "TOTAL REVENUE", stats: "$65", description: "All orders" },
];

const AdminOrdersPage = () => {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <section className="p-8 space-y-7">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-muted-foreground tracking-widest">
                COMMERCE
              </p>
              <h2 className="font-playfair font-black text-3xl">Orders</h2>
            </div>
            {/* <Button>New Product</Button> */}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            {stats.map((stat) => (
              <AdminStatCard
                title={stat.title}
                stat={stat.stats}
                description={stat.description}
                descriptionClassName={
                  stat.title === "COMPLETED" ? "text-green-500" : undefined
                }
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
            {/* <p className="tracking-wider text-xs text-muted-foreground leading-6.5">
              - {stats[0].stats} ITEMS
            </p> */}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminOrdersPage;
