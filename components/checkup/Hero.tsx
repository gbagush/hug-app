import Image from "next/image";
import Banner from "@/public/checkup-banner.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row-reverse">
        <div className="lg:w-1/3 md:w-full">
          <Image
            src={Banner}
            alt="Banner"
            className="mx-auto mb-7 lg:mb-0 lg:ml-auto w-2/3 md:w-auto"
          />
        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2 lg:ml-10">
          <h1 className="max-w-xl text-3xl leading-none text-cyan-500 font-extrabold text-center lg:text-4xl lg:text-left lg:leading-tight mb-5">
            Kenali Dirimu Lebih Awal Melalui Tes Kesehatan Mental
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            Mengenal dirimu lebih awal dengan tes kesehatan mental untuk
            mendapat gambaran layanan kesehatan mental yang kamu butuhkan
          </p>

          <div className="flex justify-center mt-7 lg:justify-start">
            <Link href="#picker">
              <button
                type="button"
                className="text-white bg-orange-500 text-sm font-semibold rounded-full px-10 py-4 hover:bg-orange-600 hover:drop-shadow-md transition duration-200"
              >
                Coba Tes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
