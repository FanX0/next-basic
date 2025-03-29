import Image from "next/image";
import { poppins } from "./public/fonts/poppins";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Next Basic",
  description: "Next Basic",
  authors: [{ name: "farid", url: "http://localhost/3000" }],
  icons: {
    icon: "/ficon.svg",
  },
  openGraph: {
    title: "Home - Next Basic",
    description: "Next Basic",
  },
};

const Home = () => {
  return (
    <div>
      <Image src="/images/f.png" alt="f" width={100} height={100}></Image>
      <div className={poppins.className}> hello guys</div>
    </div>
  );
};

export default Home;
