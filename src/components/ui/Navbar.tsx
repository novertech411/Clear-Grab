import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import React from "react";
import logo from "@/public/images/Logo Icon- main.svg";
export default function Navbar() {
  return (
    <div className="  bg-white">
      <div className=" containers  text-black flex justify-between   pt-5 items-center ">
        <div className="w-6">
          <Image src={logo} alt=" " />
        </div>

        <div className="flex items-center gap-7 ">
          <div className=" bg-green-600 text-white  py-2 px-4 rounded-xl">
            {" "}
            Sell
          </div>
          <div>
            <FaUserCircle className="w-7 h-7 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
