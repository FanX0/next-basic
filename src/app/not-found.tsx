import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link href="/" className="bg-blue-600 m-4">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
