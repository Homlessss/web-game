import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="header flexBetween max-container padding-container relative z-30 py-5 grid grid-cols-3 gap-4">
      <Link href="/">
        <h1 className="font-bold text-teal-500 text-2xl">GameChill!</h1>
      </Link>

      <form className="hidden h-full gap-12 lg:flex searchbox flex-auto mx-14">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-full h-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nhập tên game..."
            // required="#"
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <CiSearch />
          </button>
        </div>
      </form>

      <div className="toggle-box flex space-x-10">
        <Link href="/" className="flex items-center">
          <HiOutlineLightBulb className="text-4xl me-1" />
          <span className="text-xl">Hướng dẫn</span>
        </Link>
        <Link href="/" className="flex items-center">
          <FaRegCirclePlay className="text-2xl me-1" />
          <span className="text-xl">Video</span>
        </Link>
        <Link href="/" className="flex items-center">
          <IoNotificationsCircleOutline className="text-3xl me-1" />
          <span className="text-xl">Thông báo</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
