const AdminOrdersPage = () => {
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
            {/* <Button>New Product</Button> */}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            asd
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
