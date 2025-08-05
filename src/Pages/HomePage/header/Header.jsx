import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const location = useLocation()
  
  console.log(location.pathname == "/work", "location.pathname");


  return (
    <>
     
      <header className="w-full h-auto flex justify-center items-center p-7 sticky top-0 z-50 bg-[var(--BgColor)] max-xl:hidden ">
        <div className="w-[50%] flex items-center justify-start gap-3 text-2xl pl-40">
          <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
              fill="white"
            />
          </svg>
          <p className="text-white">Armin</p>
        </div>
        <div className="NavBar w-[50%] flex items-center justify-end pr-40">
          <ul className="flex justify-center items-center gap-5">
            <li><span>#</span><Link reloadDocument to="/" className={`${location.pathname === "/" ? "!text-white" : ""}`}>home</Link></li>
            <li><span>#</span><Link reloadDocument to="/work" className={`${location.pathname === "/work" ? "!text-white" : ""}`} >works</Link></li>
            <li><span>#</span><Link reloadDocument to="/About" className={`${location.pathname === "/About" ? "!text-white" : ""}`} >about-me</Link></li>
            <li><span>#</span><Link reloadDocument to="/Content" className={`${location.pathname === "/Content" ? "!text-white" : ""}`} >contents</Link></li>
          </ul>
        </div>
      </header>

    
      <header className="w-full h-[80px] Hamberger-Menu sticky top-0 flex justify-center items-center p-7 z-50 xl:hidden flex-col bg-[var(--BgColor)]">
        <div className="w-[20%]">
          <span>
            
          </span>
        </div>
        <div className="w-[85%] h-auto relative flex justify-start items-center">
          <button
            className={`box-click z-1 absolute ${open  ? "hidden" : "" }`}
            onClick={() => setOpen(!open)} >
           <svg xmlns="http://www.w3.org/2000/svg"  height="45" viewBox="0 -960 960 960" width="45" fill="#ffffff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </button>
        </div>

       
        
          <div  className={`Hamberger-Box border  h-screen top-0  absolute w-full  flex-col justify-center items-center  left-0  `}>
            <div className={`${open ? "opacity-100 visible" : "opacity-0 invisible"} w-full h-full  absolute bg-black/40 transition-all duration-300 `} onClick={() => setOpen(!open)}>
              </div>
            <div className={`NavBar transition-all w-[50%] h-[100vh] bg-[var(--BgColor)] pl-6  text-5xl  flex justify-start items-start flex-col pt-10 z-900 ${open ?"translate-x-0 ":"-translate-x-300"}`}>
                <button
            className="box-click flex justify-start items-center w-full h-[5%] mb-4 "
            onClick={() => setOpen(!open)} >
           <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45" fill="#ffffff">
           <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
           </svg>
          </button>
              <ul className="flex flex-col items-start justify-center gap-5">
                <li><span>#</span><Link reloadDocument  onClick={() => setOpen(!open)}  to="/" className={`${location.pathname === "/" ? "!text-white" : ""}`}>home</Link></li>
                <li><span>#</span><Link reloadDocument  onClick={() => setOpen(!open)}  to="/work" className={`${location.pathname === "/work" ? "!text-white" : ""}`} >works</Link></li>
                <li><span>#</span><Link reloadDocument  onClick={() => setOpen(!open)}  to="/About" className={`${location.pathname === "/About" ? "!text-white" : ""}`} >about-me</Link></li>
                <li><span>#</span><Link reloadDocument  onClick={() => setOpen(!open)}  to="/Content" className={`${location.pathname === "/Content" ? "!text-white" : ""}`} >contents</Link></li>
              </ul>
            <div>
              <div className='w-[100%] mt-32 flex justify-center items-center flex-col '>
                    <p className='text-3xl pr-4 text-white'>Media</p>
                    <div className='flex justify-center items-center '>
                        <a href="" className='pr-2'>
                           <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.071875 2.20292C0.216801 1.57709 0.573067 1.01832 1.08232 0.618104C1.59158 0.217889 2.22365 -4.32004e-05 2.875 6.42336e-09H20.125C20.7764 -4.32004e-05 21.4084 0.217889 21.9177 0.618104C22.4269 1.01832 22.7832 1.57709 22.9281 2.20292L11.5 9.0865L0.071875 2.20292ZM0 3.82075V13.8847L8.34181 8.84425L0 3.82075ZM9.71894 9.67583L0.274563 15.3807C0.507907 15.8657 0.876195 16.2753 1.33656 16.5619C1.79693 16.8486 2.33044 17.0005 2.875 17H20.125C20.6695 17.0001 21.2028 16.8479 21.6629 16.561C22.123 16.274 22.491 15.8643 22.724 15.3793L13.2796 9.67442L11.5 10.7468L9.71894 9.67442V9.67583ZM14.6582 8.84567L23 13.8847V3.82075L14.6582 8.84425V8.84567Z" fill="#ABB2BF"/>
                            </svg>
                        </a>
                        
                        <a href="">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="#ABB2BF"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            
          </div>
        
      </header>
    </>
  );
}

export default Header;
