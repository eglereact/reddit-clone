import Image from "next/image";
import { ChevronDownIcon, HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeAltIcon,
  SearchIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
  PlusCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src="/tidder.jpg" layout="fill" />
      </div>
      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search Box */}
      <form className="flex items-center space-x-2 flex-1 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Tidder"
        />
        <button hidden type="submit" />
      </form>

      {/* Icons */}
      <div className="text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border  border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusCircleIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex- items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {/* Sign In / Sign Out Button */}
      <div className="hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer">
        <div className="relative w-5 h-5 flex-shrink-0">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
}

export default Header;
