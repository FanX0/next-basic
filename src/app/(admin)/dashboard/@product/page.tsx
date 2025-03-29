"use client";

import { useState } from "react";
import { revalidateProducts } from "@/lib/axios/products/api";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    try {
      const response = await revalidateProducts();

      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    } catch (error) {
      setStatus("Revalidate Failed");
    }
  };

  return (
    <div>
      <h1>{status}</h1>
      <button className="bg-purple-400" onClick={revalidate}>
        Revalidate
      </button>
    </div>
  );
};

export default AdminProductPage;
