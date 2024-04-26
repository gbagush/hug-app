import Image from "next/image";
import Banner from "@/public/checkup-banner2.png";

import { FaHeart, FaPencilAlt } from "react-icons/fa";
import Test from "./Test";

export default function Picker() {
  return (
    <section id="picker" className="mb-12">
      <div className="container flex flex-wrap items-center justify-center mx-auto md:px-12 flex-row-reverse">
        <div className="mb-14 lg:mb-0 lg:w-1/2 lg:mr-10 order-2 lg:order-1">
          <h1 className="text-lg leading-none text-cyan-800 font-extrabold flex justify-start items-center lg:text-xl lg:leading-tight mb-2">
            <span>Kenali Dirimu Mulai Dari Langkah Kecil</span>
          </h1>
          <p className="text-left text-gray-500 lg:max-w-sm">
            Pilih kategori tes yang kamu inginkan.
          </p>
          <Test
            title="Menjaga Kesehatan Mental"
            description="Mengatasi kecemasan, stres, depresi, dan kondisi mental lainnya."
            icon={FaHeart}
            href="checkup/test"
          />
        </div>
        <div className="lg:w-1/3 md:w-full order-1 lg:order-2">
          <Image
            src={Banner}
            alt="Banner"
            className="mx-auto mb-7 w-1/3 md:w-3/4 lg:mb-0 lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
