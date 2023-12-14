import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoMdPerson } from "react-icons/io";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

interface GameProps {
  src: string;
  name: string;
  numOfPlayers: number;
  rating: number;
}

const Gamelist: React.FC<GameProps> = ({
  src,
  name,
  numOfPlayers,
  rating,
}: GameProps) => {
  return (
    <Link href={"/playGame"} className="grid game-list place-items-center">
      <Image
        src={src}
        width={100}
        height={100}
        alt="Thumbnail"
      />
      <h2>{name}</h2>
      <div className="num-of-players flex items-center">
        <IoMdPerson /> <span className="ms-2">{numOfPlayers}</span>
      </div>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={rating} precision={0.5} />
      </Stack>
    </Link>
  );
};

export default Gamelist;
