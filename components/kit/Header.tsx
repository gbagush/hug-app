import { IconType } from "react-icons";

interface HeaderProps {
  title: string;
  icon: IconType;
}

export default function Header({ title, icon: Icon }: HeaderProps) {
  return (
    <h1 className="text-md mb-5 mt-12 leading-none text-cyan-800 font-extrabold flex justify-start items-center lg:text-lg lg:leading-tight">
      <Icon className="mr-2 text-cyan-400" size={25} />
      <span>{title}</span>
    </h1>
  );
}
