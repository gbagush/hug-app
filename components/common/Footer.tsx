import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="container bg-white">
      <div className="w-full mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            HugAPP
          </Link>
          . Powered by{" "}
          <Link href="https://galihbagus.com" className="font-semibold">
            gbagus
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}
