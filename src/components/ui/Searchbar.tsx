import React from "react";

export default function Searchbar() {
  return (
    <div>
      <div className="   containers text-primary-blue text-center font-bold text-2xl ">
        What can we get you ?
      </div>

      <input
        className="border-2 border-color-mint-500   rounded-xl placeholder:text-gray-400 px-3 py-2"
        type="search"
        id="site-search"
        name="q"
        placeholder="Let us know…"
      />
    </div>
  );
}
