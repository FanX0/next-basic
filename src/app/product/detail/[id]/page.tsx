import { getData } from "@/services/products";

const DetailProductPage = async (props: any) => {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product?id=${params.id}`
  );
  console.log(product);
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
