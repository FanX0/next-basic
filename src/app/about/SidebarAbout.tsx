import Link from "next/link";

const SideBarAbout = () => {
  return (
    <aside className="flex flex-col bg-red-700 gap-4 p-4 min-h-screen w-40 fixed">
      <Link href={`/`}>Home</Link>
      <Link href={`/about`}>about</Link>
      <Link href={`/about/profile`}>profile</Link>
    </aside>
  );
};

export default SideBarAbout;
