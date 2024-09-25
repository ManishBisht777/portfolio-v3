import Link from "next/link";

export default function GetInTouch() {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-gray-700">Get in touch</h3>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore
        provident sunt doloremque.
        <div className="flex flex-wrap gap-2">
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            <Link href="https://github.com/manishbisht777">Github</Link>
          </span>
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            <Link href="https://github.com/manishbisht777">Github</Link>
          </span>
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            <Link href="https://github.com/manishbisht777">Github</Link>
          </span>
        </div>
      </p>
    </div>
  );
}
