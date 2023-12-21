import Link from "next/link";

export default function AddGame() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Name"
      />
      <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Src game"
      />
      <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Src thumbnail"
      />
      <input
        className="border border-slate-500 px-8 py-2 rounded-md"
        type="text"
        placeholder="Key"
      />
      <button className="bg-blue-600 font-bold text-white py-3 px-6 w-fit rounded-md">
        Add Game
      </button>
      <button className="bg-blue-600 font-bold text-white py-3 px-6 w-fit rounded-md">
        <Link href={"/editGame/1"}>Edit Game</Link>
      </button>
    </form>
  );
}
