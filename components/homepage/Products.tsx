import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FaSearch } from "react-icons/fa";

interface ProductsProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  banner: StaticImageData;
  icon: IconType;
  reverse: boolean;
}

export default function Products({
  title,
  description,
  buttonText,
  href,
  banner,
  icon: Icon,
  reverse,
}: ProductsProps) {
  return (
    <section id="product">
      <div
        className={`container flex flex-wrap items-center justify-center mx-auto md:px-12 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="mb-14 lg:mb-0 lg:w-1/2 lg:mr-10 order-2 lg:order-1">
          <h1 className="text-lg leading-none text-cyan-800 font-extrabold flex justify-start items-center lg:text-xl lg:leading-tight mb-5">
            <Icon className="mr-2 text-cyan-400" size={30} />
            <span>{title}</span>
          </h1>
          <p className="text-left text-gray-500 lg:max-w-md">{description}</p>
          <div className="flex justify-start mt-7">
            <a
              href={href}
              className="text-orange-500 bg-transparent border border-orange-500 text-sm font-semibold rounded-full px-10 py-4 transition duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-600 hover:drop-shadow-md"
            >
              {buttonText}
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-full order-1 lg:order-2">
          <Image
            src={banner}
            alt="Banner"
            className="mx-auto mb-7 w-1/3 md:w-3/4 lg:mb-0 lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
