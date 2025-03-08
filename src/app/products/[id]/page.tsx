import { getProductItem } from "@/services/products";
import Image from "next/image";
import ProductNotFound from "@/app/products/[id]/components/ProductNotFound";

export const revalidate = 60;

export default async function ProductItem(props: {
  params: Promise<{
    id: string;
  }>;
}) {
  const params = await props.params;
  const product = await getProductItem(params.id);

  if (!product) return <ProductNotFound id={params.id} />;

  return (
    <div
      className={
        "mx-auto flex max-w-lg flex-col gap-5 lg:max-w-none lg:flex-row"
      }
    >
      <div
        className={
          "relative aspect-square w-full shrink-0 overflow-hidden rounded lg:w-1/2"
        }
      >
        <Image
          fill
          src={product.image}
          alt={product.name}
          priority={true}
          sizes="100vw, (min-width: 64rem) 400px"
        />
      </div>
      <div className={"flex flex-col gap-3 lg:grow lg:pt-10"}>
        <h1
          className={
            "text-2xl leading-6 font-bold text-indigo-950 lg:text-4xl lg:leading-8"
          }
        >
          {product.name}
        </h1>
        <p
          className={
            "w-full text-justify text-lg leading-5 font-semibold text-gray-500 lg:text-start lg:text-xl lg:leading-6"
          }
        >
          {product.description}
        </p>
        <p className={"mt-5 text-2xl font-bold text-stone-400 lg:text-4xl"}>
          Price: <span className={"text-stone-600"}>${product.price}</span>
        </p>
      </div>
    </div>
  );
}
