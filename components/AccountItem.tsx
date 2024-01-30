import React from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Red from "@/public/images/default-red.png";
import Image from "next/image";
import { signOut } from "next-auth/react";

interface accountProp {
  visible?: boolean;
}

const AccountItem: React.FC<accountProp> = ({ visible }) => {
    
  const { data: user } = useCurrentUser();


  if (!visible) {
    return null;
  }
  return (
    <div className="bg-gray-950 rounded-lg border-2 w-48 absolute
     top-9 right-0 py-5 flex-col border-gray-800 flex ">
      <div className="flex flex-col gap-3">
        <div className="px-3 flex-col flex gap-3  w-full">
          <div className=" flex w-6 h-6 lg:w-8 lg:h-8 rounded-lg gap-2 ">
            <Image className="rounded" src={Red} alt="ikinci" />
            <p className="text-white  text-lg hover:underline">{user?.name}</p>
          </div>
          <hr className="bg-gray-500 border-0 h-px my-4"/>
          <div onClick={() => signOut()} className="hover:underline px-3 text-white text-center">
            Sign-out
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountItem;
