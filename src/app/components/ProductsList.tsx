import ProductCard from "@/app/components/ProductCard";

interface Props {
  products: Product[];
}

const ProductsList = (props: Props) => {
  if (props.products.length === 0) {
    return (
      <div>
        <p className={"text-2xl font-bold text-red-400"}>
          There are no products
        </p>
      </div>
    );
  }
  return (
    <section
      className={"mx-auto grid max-w-md grid-cols-12 gap-4 lg:max-w-none"}
    >
      {props.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsList;
