import Image from "next/image";
import React from "react";
import logo from "@/public/images/Logo Icon- main.svg";
export default function Navbar() {
  return (
    <div className="text-2xl text-black containers flex justify-between  border-b border-gray-200 py-5 items-center">
      <div className="w-4">
        <Image src={logo} alt=" " />
      </div>

      <div className="flex ">
        <div>Sell</div>
        <div>profile </div>
      </div>
    </div>
  );
}
