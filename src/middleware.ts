import { NextRequest, NextResponse } from "next/server";
import { WithAuth } from "./app/middlewares/withAuth";

const mainMiddleware = (request: NextRequest) => {
  const res = NextResponse.next();
  return res;
};

export default WithAuth(mainMiddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "/register",
]);
