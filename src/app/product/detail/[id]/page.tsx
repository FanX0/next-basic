// import { getData } from "@/services/products";

"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const DetailProductPage = (props: any) => {
  const { params } = props;
  // const product = await getData(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/product?id=${params.id}`
  // );
  // console.log(product);

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/product?id=${params.id}`,
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
  const product = data || null;

  if (product.length === 0) {
    return <div className="text-center p-20">No products found.</div>;
  }
  return (
    <div>
      <div>
        <img
          src={product.data.image}
          alt="product image"
          className="rounded-xl object-cover h-60 w-1/3"
        />
        <div>
          <p> {product.data.name}</p>
          <p>Price : $ {product.data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
