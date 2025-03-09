"use server";

export const getProductsList = async (title?: string): Promise<Product[]> => {
  try {
    const data = await fetch(
      "https://freetestapi.com/api/v1/products/" +
        (title ? `?search=${title}` : ""),
      { cache: "force-cache" },
    );
    if (!data.ok) throw new Error("Something went wrong!");
    const products = await data.json();
    return products;
  } catch (err) {
    throw err;
  }
};

export const getProductItem = async (id: string): Promise<Product | null> => {
  try {
    const data = await fetch(`https://freetestapi.com/api/v1/products/${id}/`, {
      cache: "force-cache",
    });
    if (!data.ok) {
      return null;
    }
    const product = await data.json();
    return product;
  } catch (err) {
    throw err;
  }
};
