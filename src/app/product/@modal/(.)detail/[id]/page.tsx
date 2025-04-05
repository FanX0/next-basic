"use client";

// import { Modal } from "@/components/core/Modal";
// import { getData } from "@/services/products";
import Image from "next/image";
import dynamic from "next/dynamic";
import useSWR from "swr";

const Modal = dynamic(() => import("@/components/core/Modal"), {
  loading: () => <p>Loading...</p>,
});

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
      <Modal>
        <Image
          src={product.data.image}
          alt="product image"
          className="rounded-xl object-cover h-60 w-1/3"
          width={500}
          height={500}
        />
        <div>
          <p> {product.data.name}</p>
          <p>Price : $ {product.data.price}</p>
        </div>
      </Modal>
    </div>
  );
};

export default DetailProductPage;
