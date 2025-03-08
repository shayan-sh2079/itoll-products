import ProductsSearch from "@/app/components/ProductsSearch";

const ProductsHeader = () => {
  return (
    <div
      className={
        "mb-10 flex w-full flex-col items-center justify-between border-b-2 border-emerald-950 pb-3 lg:flex-row"
      }
    >
      <h1 className={"text-5xl font-bold text-emerald-900"}>Products</h1>
      <ProductsSearch />
    </div>
  );
};

export default ProductsHeader;
