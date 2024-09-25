import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="flex gap-10">
      <div className="w-3/5 space-y-2">
        <p className="text-xl font-semibold text-gray-700">
          Stop Coding before thinking Feat- HOC and Hooks Patterns Frontend
          System Design
        </p>
        <p className="text-sm text-gray-600">
          Coding is not just about making things work; its about crafting
          solutions that stand the test of time and scale gracefully into the
          future
        </p>
        <p className="text-sm text-gray-600 text-end">Sep 1, 2023</p>
      </div>
      <div className="aspect-video relative w-2/5">
        <Image
          src="/img.png"
          alt="project1"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
}
