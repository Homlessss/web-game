import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoMdPerson } from "react-icons/io";
import RatingPrecision from "./RatingPrecision";

const Gamelist = () => {
  return (
    <Link href={"/playGame"} className="grid game-list place-items-center">
      <Image
        src={"http://localhost:3000//Tomb-runner.png"}
        width={100}
        height={100}
        alt="Thumbnail"
      />
      <h2>Name</h2>
      <div className="num-of-players flex items-center">
        <IoMdPerson /> <span className="ms-2">number of players</span>
      </div>
      <RatingPrecision />
    </Link>
  );
};

export default Gamelist;
