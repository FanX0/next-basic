// app/product/page.tsx

import { getProducts } from "@/lib/axios/products/api";
import Link from "next/link";

// Komponen halaman
const ProductPage = async () => {
  try {
    // Memanggil data produk
    const { products } = await getProducts();

    // Debugging
    console.log("Fetched products:", products);

    if (products.length === 0) {
      console.warn("Data produk kosong atau tidak ditemukan.");
      return <div>No products found</div>;
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
                <img
                  src={product.image}
                  alt="product image"
                  className="rounded-xl object-cover h-96 w-full"
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
