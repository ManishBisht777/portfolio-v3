import Blogs from "@/components/Blogs";
import GetInTouch from "@/components/GetInTouch";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-[#fbfbfb] min-h-screen space-y-20">
      <Introduction />
      <Projects />
      <Blogs />
      <GetInTouch />
    </div>
  );
}
