import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold text-gray-700">Projects</h2>
      <div className="flex flex-wrap gap-4">
        <div className="rounded-lg overflow-hidden border border-gray-100">
          <div className="bg-gray-100 p-2 w-[325px] flex gap-2">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex-grow bg-white rounded"></div>
            <div className="">
              <MoveRight color="#D1D5DB" />
            </div>
          </div>
          <div className="aspect-video relative">
            <Image
              src="/img.png"
              alt="project1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-100">
          <div className="bg-gray-100 p-2 w-[325px] flex gap-2">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex-grow bg-white rounded"></div>
            <div className="">
              <MoveRight color="#D1D5DB" />
            </div>
          </div>
          <div className="aspect-video relative">
            <Image
              src="/img.png"
              alt="project1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-100">
          <div className="bg-gray-100 p-2 w-[325px] flex gap-2">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex-grow bg-white rounded"></div>
            <div className="">
              <MoveRight color="#D1D5DB" />
            </div>
          </div>
          <div className="aspect-video relative">
            <Image
              src="/img.png"
              alt="project1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-100">
          <div className="bg-gray-100 p-2 w-[325px] flex gap-2">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex-grow bg-white rounded"></div>
            <div className="">
              <MoveRight color="#D1D5DB" />
            </div>
          </div>
          <div className="aspect-video relative">
            <Image
              src="/img.png"
              alt="project1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
