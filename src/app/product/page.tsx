"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Komponen halaman
const ProductPage = () => {
  try {
    // Memanggil data produk
    // const { products } = await getProducts();
    const { data, error, isLoading } = useSWR(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/product`,
      fetcher
    );

    // Menangani loading
    if (isLoading) {
      return <div className="text-center p-20">Loading...</div>;
    }

    // Menangani error
    if (error) {
      console.error("Failed to fetch products:", error);
      return (
        <div className="text-center p-20 text-red-500">
          Failed to load products.
        </div>
      );
    }

    // Cek jika data kosong atau tidak sesuai
    const products = data?.products ?? [];

    if (products.length === 0) {
      return <div className="text-center p-20">No products found.</div>;
    }

    return (
      <div>
        <div className="grid grid-cols-4 gap-8 justify-items-center place-content-center p-44">
          {products.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              key={product.id}
              className="bg-blue-500 rounded-xl p-20"
            >
              <div className="bg-yellow-400 rounded-xl">
                <Image
                  src={product.image}
                  alt="product image"
                  className="rounded-xl object-cover h-96 w-full"
                  width={500}
                  height={500}
                />
              </div>
              <h4 className="text-white">{product.name}</h4>
              <h4>$ {product.price}</h4>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    return <div>Failed to load products.</div>;
  }
};

export default ProductPage;
