"use client";
import Input from "@/components/ui/Input";
import { useCallback, useState } from "react";
import useDebounceCallback from "@/hooks/useDebounceCallback";
import { useSearchParams, useRouter } from "next/navigation";

const ProductsSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("title") || "");

  const handleSearch = useCallback((title: string) => {
    router.push(title ? `/?title=${title}` : "/");
  }, []);

  useDebounceCallback(value, handleSearch);

  return (
    <div className={"mt-2 w-full lg:mt-0 lg:w-auto"}>
      <Input
        label={"Search by Title"}
        placeholder={"title"}
        className={"w-full lg:w-100"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default ProductsSearch;
