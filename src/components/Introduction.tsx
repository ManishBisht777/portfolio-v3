import Image from "next/image";

export default function Introduction() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-b from-[#b6ccfe] to-[#abc4ff] w-[72px] h-[72px] flex justify-center items-center rounded-full">
          <Image
            src="/profile.jpeg"
            alt="Picture of Manish Bisht"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div className="">
          <h1 className="text-3xl font-semibold leading-none text-gray-700">
            Manish Bisht
          </h1>
          <p className="text-gray-600">Software Engineer</p>
        </div>
      </div>
      <p className="text-gray-500">
        full-stack Developer with 2+ years of experience in building scalable
        web apps using React. Worked with 2 Startups and teams that are highly
        skilled to create a customer-centric product. helped a lot of people in
        their journey of development.
      </p>

      <div className="flex space-x-5">
        <div className="flex items-center justify-center gap-2">
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
        <div className="flex items-center justify-center gap-2">
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
        <div className="flex items-center justify-center gap-2">
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
      </div>
    </div>
  );
}
