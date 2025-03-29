// import { Modal } from "@/components/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/core/Modal"), {
  loading: () => <p>Loading...</p>,
});

const DetailProductPage = async (props: any) => {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product?id=${params.id}`
  );
  console.log(product);
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
