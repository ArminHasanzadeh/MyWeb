import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const location = useLocation()
  
  console.log(location.pathname == "/work", "location.pathname");


  return (
    <>
     
      <header className="w-full h-auto flex justify-center items-center p-7 sticky top-0 z-50 bg-[var(--BgColor)] max-xl:hidden">
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
            <li><span>#</span><Link to="/" className={`${location.pathname === "/" ? "!text-white" : ""}`}>home</Link></li>
            <li><span>#</span><Link to="/work" className={`${location.pathname === "/work" ? "!text-white" : ""}`} >works</Link></li>
            <li><span>#</span><Link to="/About" className={`${location.pathname === "/About" ? "!text-white" : ""}`} >about-me</Link></li>
            <li><span>#</span><Link to="/Content" className={`${location.pathname === "/Content" ? "!text-white" : ""}`} >contents</Link></li>
          </ul>
        </div>
      </header>

    
      <header className="w-full h-auto Hamberger-Menu sticky top-0 flex justify-center items-center p-7 z-50 xl:hidden flex-col">
        <div className="w-full h-auto relative">
          <button
            className="box-click z-101 absolute"
            onClick={() => setOpen(!open)} >
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

       
        
          <div className={`Hamberger-Box absolute w-full  flex justify-center items-center z-[100] top-5 left-0   ${open ?"translate-x-0 ":"-translate-x-300"}`}>
            <div className="NavBar border-2 w-[95%] h-[95vh] bg-[var(--BgColor)] pl-6  text-5xl  flex justify-start items-start pt-20 flex-col">
              <ul className="flex flex-col items-start justify-center gap-5">
                <li><span>#</span><Link to="/" className={`${location.pathname === "/" ? "!text-white" : ""}`}>home</Link></li>
                <li><span>#</span><Link to="/work" className={`${location.pathname === "/work" ? "!text-white" : ""}`} >works</Link></li>
                <li><span>#</span><Link to="/About" className={`${location.pathname === "/About" ? "!text-white" : ""}`} >about-me</Link></li>
                <li><span>#</span><Link to="/Content" className={`${location.pathname === "/Content" ? "!text-white" : ""}`} >contents</Link></li>
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
<path d="M16 16C16 15.1159 16.3687 14.2681 17.0251 13.643C17.6815 13.0179 18.5717 12.6667 19.5 12.6667C20.4283 12.6667 21.3185 13.0179 21.9749 13.643C22.6313 14.2681 23 15.1159 23 16C23 16.8841 22.6313 17.7319 21.9749 18.357C21.3185 18.9821 20.4283 19.3333 19.5 19.3333C18.5717 19.3333 17.6815 18.9821 17.0251 18.357C16.3687 17.7319 16 16.8841 16 16ZM9 22.6667C9 21.7826 9.36875 20.9348 10.0251 20.3096C10.6815 19.6845 11.5717 19.3333 12.5 19.3333H16V22.6667C16 23.5507 15.6313 24.3986 14.9749 25.0237C14.3185 25.6488 13.4283 26 12.5 26C11.5717 26 10.6815 25.6488 10.0251 25.0237C9.36875 24.3986 9 23.5507 9 22.6667ZM16 6V12.6667H19.5C20.4283 12.6667 21.3185 12.3155 21.9749 11.6904C22.6313 11.0652 23 10.2174 23 9.33333C23 8.44928 22.6313 7.60143 21.9749 6.97631C21.3185 6.35119 20.4283 6 19.5 6H16ZM9 9.33333C9 10.2174 9.36875 11.0652 10.0251 11.6904C10.6815 12.3155 11.5717 12.6667 12.5 12.6667H16V6H12.5C11.5717 6 10.6815 6.35119 10.0251 6.97631C9.36875 7.60143 9 8.44928 9 9.33333ZM9 16C9 16.8841 9.36875 17.7319 10.0251 18.357C10.6815 18.9821 11.5717 19.3333 12.5 19.3333H16V12.6667H12.5C11.5717 12.6667 10.6815 13.0179 10.0251 13.643C9.36875 14.2681 9 15.1159 9 16Z" fill="#ABB2BF"/>
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
