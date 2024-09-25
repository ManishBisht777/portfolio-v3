"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { div } from "framer-motion/client";

interface ProjectCardProps {}

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

export default function ProjectCard({}: ProjectCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div onClick={() => setIsSelected(!isSelected)}>
      {/* a empty placeholder so that it doesn't affect layout  */}

      {isSelected && (
        <div className="w-[360px] h-[244px] bg-red-400 rounded-lg "></div>
      )}

      <div
        className={`rounded-lg overflow-hidden border border-gray-100 cursor-pointer ${
          isSelected ? "mt-4 absolute" : "w-[360px] "
        }`}
      >
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
    </motion.div>
  );
}
