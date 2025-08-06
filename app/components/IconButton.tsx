import Image from "next/image";

export default function IconButton({ src, alt }: { src: string; alt: string }) {
  return (
    <button className="p-2 rounded hover:bg-gray-100 transition">
      <Image src={src} alt={alt} width={24} height={24} />
    </button>
  );
}
