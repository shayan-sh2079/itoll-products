import { getProductsList } from "@/services/products";
import ProductsList from "@/app/components/ProductsList";
import ProductsHeader from "@/app/components/ProductsHeader";

export const revalidate = 60;

export default async function Home(props: {
  searchParams?: Promise<{
    title?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const products = await getProductsList(searchParams?.title);

  return (
    <div className={"flex flex-col"}>
      <ProductsHeader />
      <ProductsList products={products} initialTitle={searchParams?.title} />
    </div>
  );
}
