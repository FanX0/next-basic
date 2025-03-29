"use server";

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

// Fungsi POST untuk melakukan revalidate produk
export const revalidateProducts = async (): Promise<{
  revalidate: boolean;
}> => {
  try {
    const response = await axiosInstance.post("/revalidate", null, {
      params: {
        tag: "products",
        secret: process.env.REVALIDATE_TOKEN,
      },
    });
    if (!response.data?.revalidate) {
      throw new Error("Revalidation failed");
    }
    return response.data;
  } catch (error) {
    console.error("Error during revalidation:", error);
    throw new Error("Failed to revalidate");
  }
};
