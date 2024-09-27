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
    <motion.div
      onClick={() => setIsSelected(!isSelected)}
      className={
        isSelected
          ? "flex fixed top-0 left-0 right-0 justify-center gap-4 bottom-0 items-center bg-gray-950/30 z-10"
          : ""
      }
    >
      <motion.div
        className={
          isSelected ? "max-w-3xl flex gap-4 z-20 bg-white p-5 rounded-lg" : ""
        }
        layout
      >
        <motion.div
          layout
          className="rounded-lg overflow-hidden border border-gray-100 cursor-pointer max-w-md flex-1"
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
          <motion.div layout className="aspect-video relative">
            <Image
              src="/img.png"
              alt="project1"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>
        {isSelected && (
          <motion.div
            layout
            className="w-1/3 space-y-3 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            exit={{ opacity: 0, y: 20, transition: { delay: 0.2 } }}
          >
            <motion.h1
              className="text-2xl font-semibold text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
            >
              Lorem ipsum dolor sit amet.
            </motion.h1>

            <motion.p
              className="text-sm text-gray-600 text-justify"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
              corrupti qui amet cum ut dicta quis!. adipisicing elit. Iste,
              corrupti qui amet cum ut dicta quis!.
            </motion.p>

            <motion.p
              className="self-end px-4 py-1 rounded-full text-sm font-medium w-fit bg-black text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
            >
              Frontend
            </motion.p>

            <motion.div
              className="flex flex-wrap space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
            >
              <div className="flex items-center gap-2 w-1/2">
                <motion.div
                  className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.4 },
                  }}
                >
                  <Image
                    src="/github-white.svg"
                    width={16}
                    height={16}
                    alt="github logo"
                  />
                </motion.div>
                Github
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <motion.div
                  className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.35, duration: 0.4 },
                  }}
                >
                  <Image
                    src="/linkedin-white.svg"
                    width={16}
                    height={16}
                    alt="linkedin logo"
                  />
                </motion.div>
                Linkedin
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <motion.div
                  className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.4, duration: 0.4 },
                  }}
                >
                  <Image
                    src="/mail-white.png"
                    width={16}
                    height={16}
                    alt="mail logo"
                  />
                </motion.div>
                Email
              </div>
              <div className="flex items-center gap-2 w-1/2">
                <motion.div
                  className="p-1 bg-gradient-to-b from-stone-800 to-pink-900 rounded-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { delay: 0.45, duration: 0.4 },
                  }}
                >
                  <Heart fill="white" size={16} />
                </motion.div>
                Like
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
