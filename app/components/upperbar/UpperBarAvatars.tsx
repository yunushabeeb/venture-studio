import Image from "next/image";

const avatars = [
  "/images/avatars/avatar-1.png",
  "/images/avatars/avatar-2.png",
  "/images/avatars/avatar-3.png",
  "/images/avatars/avatar-4.png",
];

export default function UpperBarAvatars() {
  return (
    <div className="flex items-center mt-7">
      {/* Avatars */}
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <div
            key={src}
            className="w-8 h-8 rounded-full border-2 border-white relative z-10"
            style={{ zIndex: avatars.length - i }}
          >
            <Image
              src={src}
              alt={`Avatar ${i + 1}`}
              width={32}
              height={32}
              className="rounded-full object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      {/* Names */}
      <span
        className="ml-3 text-[15px]"
        style={{
          color: "rgba(21, 39, 45, 0.62)",
          fontFamily: "'Public Sans', sans-serif",
          fontWeight: 400,
        }}
      >
        Ava, Liam, Noah
      </span>
      {/* +12 others */}
      <span
        className="ml-1 text-[15px]"
        style={{
          color: "rgba(21, 39, 45, 0.62)",
          fontFamily: "'Public Sans', sans-serif",
          fontWeight: 400,
        }}
      >
        +12 others
      </span>
    </div>
  );
}