"use client";

import { useState } from "react";
import axios from "@/lib/axios"; // Import axios instance

const AdminProductPage = () => {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    try {
      const response = await axios.post("/revalidate", null, {
        // Null untuk body kosong
        params: {
          tag: "products",
          secret: "farid123",
        },
      });

      if (response.data.revalidate) {
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
