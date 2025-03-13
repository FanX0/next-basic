"use client";

import { useState } from "react";

const AdminProductPage = () => {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=farid123",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };
  return (
    <div>
      <h1>{status}</h1>
      <button className="bg-purple-400" onClick={() => revalidate()}>
        Revalidate
      </button>
    </div>
  );
};

export default AdminProductPage;
