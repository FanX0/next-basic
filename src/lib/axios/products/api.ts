import axiosInstance from "../instance";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const getProducts = async (): Promise<{ products: Product[] }> => {
  try {
    const response = await axiosInstance.get("/product", {
      params: {
        cache: "no-store", // Jika tetap membutuhkan cache control
      },
    });

    // Validasi response structure
    if (!response.data?.products) {
      throw new Error("Invalid API response structure");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};
