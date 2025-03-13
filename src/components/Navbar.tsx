"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex row bg-red-700 gap-4 p-4 mx-auto justify-center">
      <Link href={`/`}>Home</Link>
      <Link href={`/about`}>about</Link>
      <Link href={`/about/profile`}>profile</Link>
      {status === "authenticated" ? (
        <div className="flex gap-4">
          <h4>{session?.user?.fullname}</h4>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
