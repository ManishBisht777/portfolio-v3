import BlogCard from "./card/BlogCard";

export default function Blogs() {
  return (
    <div className="space-y-6 relative">
      <h2 className="text-3xl font-semibold text-gray-700">Blogs</h2>
      <div className="flex flex-wrap gap-8 flex-col">
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
