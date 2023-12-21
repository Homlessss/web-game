import Link from "next/link";
import React from "react";
import Image from "next/image";

interface GameProps {
  src: string;
}

const Gamelist: React.FC<GameProps> = ({ src }: GameProps) => {
  return (
    <Link href={"/playGame"} className="grid game-list place-items-center">
      <Image src={src} width={100} height={100} alt="Thumbnail" />
    </Link>
  );
};

export default Gamelist;
