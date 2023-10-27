import React from "react";

const Header = () => {
  return (
    <header className="h-16 bg-primary">
      <div className="fixed flex justify-between items-center  lg:mx-10 mx-3 p-4 w-full lg:pr-24 pr-10 lg:text-4xl text-black">
        <div className="p-2 m-3 border rounded-md hover:bg-accent hover:text-white cursor-pointer border-black">Portfolio</div>
        <div className="p-2 m-3 border rounded-md hover:bg-accent hover:text-white cursor-pointer border-black">Kontakt</div>
      </div>
    </header>
  );
};

export default Header;
