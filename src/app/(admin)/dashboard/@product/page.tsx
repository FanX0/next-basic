"use client";

import { useState } from "react";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/revalidate?tag=products&secret=farid123",
        { method: "POST" }
      );
      if (!res.ok) {
        setStatus("Revalidate Failed");
        return;
      }
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      } else {
        setStatus("Revalidate Failed");
      }
    } catch (error) {
      console.error("Error during revalidation:", error);
      setStatus("Revalidate Error");
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
