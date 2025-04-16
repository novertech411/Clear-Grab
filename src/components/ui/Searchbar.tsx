import React from "react";

export default function Searchbar() {
  return (
    <div>
      <div className="   containers text-gray-400 text-center font-bold text-xl ">
        What can we get you ?
      </div>
      <div className="flex justify-center mt-7">
        <button>
          <p>Abuja</p>
        </button>
        <input
          className=" w-[400px]  rounded-xl  border-2  shadow-2xl  border-primary-blue placeholder:text-gray-400 px-3 py-2"
          type="search"
          id="site-search"
          name="q"
          placeholder="Let us know…"
        />
      </div>
    </div>
  );
}
