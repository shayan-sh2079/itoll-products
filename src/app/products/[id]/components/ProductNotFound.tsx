import Link from "next/link";
import Button from "@/components/ui/Button";

interface Props {
  id: string;
}

const ProductNotFound = (props: Props) => {
  return (
    <div
      className={
        "fixed inset-0 flex flex-col items-center justify-center gap-5 p-5"
      }
    >
      <h2 className={"text-5xl font-bold"}>
        There is No Product with the ID of {props.id}
      </h2>
      <Link href={"/"}>
        <Button>Go to the Home Page</Button>
      </Link>
    </div>
  );
};

export default ProductNotFound;
