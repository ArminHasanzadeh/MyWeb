import React from "react";

function Header(props) {
  return (
    <header className="w-full h-auto flex justify-center items-center p-7 sticky">
      <div className="w-[50%] flex items-center justify-start gap-3 text-2xl pl-40 ">
        <svg
        
          width="20"
          height="20"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
            fill="white"
          />
        </svg>
        <p className="text-white">Armin</p>
      </div>
      <div className="NavBar w-[50%] flex items-center justify-end pr-40 ">
        <ul className="flex justify-center items-center ">
            <li><span>#</span><a className="text-white">home</a></li>
            <li><span>#</span><a>works</a></li>
            <li><span>#</span><a>about-me</a></li>
            <li><span>#</span><a>contents</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
