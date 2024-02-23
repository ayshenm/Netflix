import React from "react";

interface mobileProp {
  visible?: boolean;
}
const MobileMenu: React.FC<mobileProp> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-gray-950 rounded-lg border-2 w-48 absolute top-8 left-0 py-5 flex-col border-gray-800 flex ">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline cursor-pointer transition">Home</div>
        <div className="px-3 text-center text-white hover:underline cursor-pointer transition">Films</div>
        <div className="px-3 text-center text-white hover:underline cursor-pointer transition">Series</div>
        <div className="px-3 text-center text-white hover:underline cursor-pointer transition">New & Popular</div>
        <div className="px-3 text-center text-white hover:underline cursor-pointer transition">List</div>
      </div>
    </div>
  );
};

export default MobileMenu;
