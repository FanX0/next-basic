// Fungsi async untuk fetch data product
export const getData = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
  });
  // const res = await fetch("http://localhost:3000/api/product", {
  //   cache: "no-store",
  //   next: {
  //     tags: ["products"],
  //   },
  // });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
