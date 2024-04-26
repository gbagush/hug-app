import { IconType } from "react-icons";

interface TestProps {
  title: string;
  description: string;
  href: string;
  icon: IconType;
}

export default function Test({
  title,
  description,
  href,
  icon: Icon,
}: TestProps) {
  return (
    <a
      href={href}
      className="flex flex-col justify-center md:flex-row bg-white rounded-lg border mt-2 hover:bg-cyan-400 hover:text-white"
    >
      <div className="flex items-center justify-center p-4">
        <div className="bg-cyan-50 rounded-lg p-4">
          <Icon size={16} className="text-cyan-500" />
        </div>
      </div>

      <div className="flex items-center p-4 w-full">
        <div>
          <h2 className="text-sm font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-start min-w-fit lg:w-auto lg:justify-end p-4">
        <button className="px-5 py-1 text-sm font-semibold bg-cyan-50 text-cyan-500 rounded-full">
          Start Test
        </button>
      </div>
    </a>
  );
}
