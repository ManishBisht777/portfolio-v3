import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-[#fbfbfb] min-h-screen space-y-28">
      <Introduction />
      <Projects />
    </div>
  );
}
