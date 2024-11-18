import Image from "next/image";
import Link from "next/link";

export default function header() {
  return (
    <header className="w-full justify-center flex py-4 bg-gray-100 border-b fixed z-10">
      <div className="flex container-block bg-opacity-90 justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/logo.webp"}
            width={100}
            height={100}
            alt="logo"
            className="h-[50px]"
          />
        </Link>
        <div className="px-8 gap-4 flex items-center">
          <Link href={"/"}>
            <span className="menu">HOME</span>
          </Link>
          <Link href={"#about"}>
            <span className="menu">ABOUT</span>
          </Link>
          <Link href={"#projects"}>
            <span className="menu">PROJECTS</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
