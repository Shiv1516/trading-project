import { Link } from "react-router-dom";
import BlogSection from "../Component/BlogSection";

function Blogs() {
  return (
    <div className="lg:px-[9rem] md:px-[1rem] sm:px-[1rem] px-[1rem] py-10">
      <div className="breadcrum text-sm flex items-center gap-3 mb-4">
        <Link href="/index">Home</Link>
        <span>&#8226;</span>
        <span className="text-orange-300 text-sm">Blogs</span>
      </div>
      <BlogSection />
    </div>
  );
}
export default Blogs;
