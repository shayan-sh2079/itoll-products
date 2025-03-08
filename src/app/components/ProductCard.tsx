import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className={"col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3"}
    >
      <article
        className={
          "flex h-full flex-col gap-2 overflow-hidden rounded-lg border border-gray-200 shadow-lg hover:shadow-xl"
        }
      >
        <div className={"relative h-60 lg:h-80"}>
          <Image
            fill
            src={product.image}
            alt={product.name}
            sizes="100vw, (min-width: 48rem) 50vw, (min-width: 64rem) 33vw, (min-width: 80rem) 300px"
          />
        </div>
        <div
          className={
            "flex grow flex-col justify-between gap-1.5 px-2 py-1.5 lg:px-4 lg:py-3"
          }
        >
          <h2
            className={
              "text-xl leading-6 font-bold text-indigo-950 lg:text-3xl lg:leading-8"
            }
          >
            {product.name}
          </h2>
          <p
            className={
              "text-md line-clamp-2 w-full text-justify leading-5 font-semibold text-gray-500 lg:text-lg lg:leading-6"
            }
          >
            {product.description}
          </p>
          <p className={"mt-auto text-xl font-bold text-stone-600 lg:text-3xl"}>
            ${product.price}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
