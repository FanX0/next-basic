import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "meja",
    price: 1000,
    image:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/943/0994312_PE820932_S3.jpg",
  },
  {
    id: 2,
    name: "kursi",
    price: 2000,
    image:
      "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/813/1181370_PE896672_S3.jpg",
  },
];

export const GET = async (request: NextRequest) => {
  //cara akses params http://localhost:3000/api/product?id=1
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retrieveData("products");
  return NextResponse.json({ status: 200, message: "Success", products });
};
