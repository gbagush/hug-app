import Image from "next/image";

interface MusicCardProps {
  image: string;
  title: string;
  writer: string;
  onClick: () => void;
}
export default function MusicCard({
  image,
  title,
  writer,
  onClick,
}: MusicCardProps) {
  return (
    <div className="min-w-xs max-w-xs bg-white border border-gray-200 rounded-lg shadow">
      <a onClick={onClick}>
        <Image
          className="rounded-t-lg"
          src={image}
          alt=""
          width={400}
          height={400}
          objectFit="cover"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{writer}</p>
        </div>
      </a>
    </div>
  );
}
