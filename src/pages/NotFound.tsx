import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-screen min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-4 text-center px-4">
      <p className="text-6xl font-extrabold">404</p>
      <p className="text-lg text-hollow3">Page not found</p>
      <Link
        to="/"
        className="mt-2 rounded-lg border border-hollow4 px-4 py-2 text-sm hover:bg-hollow2 transition-colors duration-250"
      >
        Back to Home
      </Link>
    </div>
  );
}
export default NotFound;
