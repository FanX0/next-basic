"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session }: { data: any } = useSession();
  return (
    <div>
      <h1>Profile </h1>
      <h2>{session?.user?.fullname}</h2>
    </div>
  );
};
export default Profile;
