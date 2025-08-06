import Image from "next/image";

export default function IconButton({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="p-2 rounded hover:bg-gray-100 transition"
      onClick={onClick}
      type="button"
    >
      <Image src={src} alt={alt} width={24} height={24} />
    </button>
  );
}
