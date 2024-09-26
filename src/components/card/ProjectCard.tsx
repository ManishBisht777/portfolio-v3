"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Heart, MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {}

export default function ProjectCard({}: ProjectCardProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex fixed top-0 left-0 right-0 justify-center gap-4 bottom-0 items-center bg-gray-950/50 z-10">
      <div className="max-w-3xl flex gap-4 z-20 bg-white p-5 rounded-lg">
        <div className="rounded-lg overflow-hidden border border-gray-100 cursor-pointer max-w-md flex-1">
          <div className="bg-gray-100 p-2 flex gap-2">
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
        <div className="w-1/3 space-y-3 flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-700">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-sm text-gray-600 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
            corrupti qui amet cum ut dicta quis!. adipisicing elit. Iste,
            corrupti qui amet cum ut dicta quis!.
          </p>
          <p className="self-end px-4 py-1 rounded-full text-sm font-medium w-fit bg-black text-white">
            Frontend
          </p>
          <div className="flex flex-wrap space-y-2">
            <div className="flex items-center gap-2 w-1/2">
              <div className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md">
                <Image
                  src="/github-white.svg"
                  width={16}
                  height={16}
                  alt="github logo"
                />
              </div>
              Github
            </div>
            <div className="flex items-center gap-2 w-1/2">
              <div className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md">
                <Image
                  src="/linkedin-white.svg"
                  width={16}
                  height={16}
                  alt="linkedin logo"
                />
              </div>
              Linkedin
            </div>
            <div className="flex items-center gap-2 w-1/2">
              <div className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md">
                <Image
                  src="/mail-white.png"
                  width={16}
                  height={16}
                  alt="linkedin logo"
                />
              </div>
              Email
            </div>
            <div className="flex items-center gap-2 w-1/2">
              <div className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md">
                <Heart fill="white" size={16} />
              </div>
              Like
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
