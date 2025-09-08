import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="lg:px-[14rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10">
      <div className="flex flex-col items-center justify-center gap-3 mb-4">
        <h1 className="text-orange-300 text-9xl font-bold mb-4">404</h1>
        <p className="text-orange-300 text-sm mb-3">Page Not Found</p>
        <Link to="/index" className="underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
