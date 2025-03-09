"use client";
import ProductCard from "@/app/components/ProductCard";
import { getProductsList } from "@/services/products";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Props {
  products: Product[];
  initialTitle?: string;
}

const ProductsList = (props: Props) => {
  const searchParams = useSearchParams();
  const prevTitle = useRef(props.initialTitle || "");
  const [products, setProducts] = useState<Product[]>(props.products);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const title = searchParams.get("title") || "";
      if (prevTitle.current === title) return;
      prevTitle.current = title;
      setIsLoading(true);
      const products = await getProductsList(searchParams.get("title"));
      setProducts(products);
      setIsLoading(false);
    })();
  }, [searchParams.get("title")]);

  if (products.length === 0) {
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
      className={
        "mx-auto grid max-w-md grid-cols-12 gap-4 lg:max-w-none" +
        (isLoading ? " opacity-60" : "")
      }
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsList;
