import { getData } from "@/services/products";
import Link from "next/link";

// Komponen halaman
const ProductPage = async () => {
  try {
    // Memanggil data produk
    const response = await getData("http://localhost:3000/api/product");
    console.log("Fetched products:", response);

    // Mengakses data produk dengan struktur yang benar
    const products = response?.products || [];

    if (products.length === 0) {
      console.warn("Data produk kosong atau tidak ditemukan.");
    }

    return (
      <div>
        <h1 className="text-2xl">Product List</h1>
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
