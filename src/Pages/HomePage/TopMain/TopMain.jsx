import React from "react";
import ImgMan from "/image/Img1.png"
import { Link, useLocation } from "react-router-dom";
function TopMain(props) {
  const location = useLocation()
  return (
    <>
      <section className="w-full h-[420px] flex m-24  max-xl:hidden xl:visible ">
        <section className="w-[80%] h-[100%] flex justify-center items-end flex-col">
          <div className="TextBox ">
            <p className="text-3xl w-[60%] text-white ">
              Armin is a{" "}
              <mark className="bg-transparent text-[var(--FontTextcherColor)]">
                web designer
              </mark>{" "}
              and{" "}
              <mark className=" bg-transparent text-[var(--FontTextcherColor)]">
                front-end developer
              </mark>
            </p>
            <p className="w-[60%] mt-3 text-[var(--FontTextColor)]">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className="Content-me border-2 text-white mt-3 p-1">
              <Link to="/Content">Content me!!</Link>
            </button>
          </div>
        </section>
        <section className="relative  w-[50%] h-[100%] flex justify-start items-end ">
          <div className="absolute z-10 top-0 left-0">
            <img
              className=" object-cover w-[457px] h-[367px]"
              src={ImgMan}
              alt=""
            />
          </div>
          <div className="absolute z-0 top-20 left-0 ">
            <svg
              width="156"
              height="156"
              viewBox="0 0 156 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_64_1298" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z"
                />
              </mask>
              <path
                d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z"
                fill="#C778DD"
                mask="url(#path-1-inside-1_64_1298)"
              />
              <mask
                id="path-3-outside-2_64_1298"
                maskUnits="userSpaceOnUse"
                x="76.5"
                y="0"
                width="80"
                height="119"
                fill="black"
              >
                <rect fill="white" x="76.5" width="80" height="119" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z"
                />
              </mask>
              <path
                d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z"
                fill="#C778DD"
                mask="url(#path-3-outside-2_64_1298)"
              />
            </svg>
          </div>

          <div className="absolute z-20 top-60 left-90">
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="82" r="2" fill="#ABB2BF" />
            </svg>
          </div>
          <div className="w-[70%] h-[10%] border-1 gap-3 mb-1 flex justify-start items-center pl-2 text-[var(--FontTextColor)]">
            <span className="w-[15px] h-[15px]  bg-[var(--FontTextcherColor)]"></span>
            <p className="text-[var(--FontTextColor)]">
              Currently working on{" "}
              <mark className="bg-transparent text-white">Portfolio</mark>
            </p>
          </div>
        </section>
      </section>
      <section className="w-full h-auto  mt-20 flex-col flex justify-center items-center max-xl:hidden xl:visible">
      {/* <section className="flex justify-center items-end flex-col w-[50%]">
        <div className="BorderX relative  w-[100%] p-5 ">
          <div className="absolute -top-4 left-6">
          <svg
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="41.472" height="28.704" fill="#282C33" />
            <path
              d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
              fill="#ABB2BF"
            />
          </svg>
          </div>
          <div className="absolute -bottom-4 right-6">
          <svg
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="41.472" height="28.704" fill="#282C33" />
            <path
              d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
              fill="#ABB2BF"
            />
          </svg>
          </div>
          <p className="text-4xl flex justify-center items-center">With great power comes great electricity bill</p>
        </div>
        <div className=" w-[20%] flex justify-center items-center BorderX2 p-4 ">
          <p className="text-4xl">dadadad</p>
        </div>
      </section> */}
      </section>

      <section className="w-full h-[700px] flex  justify-center items-center xl:hidden max-sm:visible flex-col max-md:visible max-lg:visible ">
        <section className="w-[80%] h-[50%] flex justify-center items-center ">
          <div className="TextBox  flex flex-col justify-center items-center pb-5 pt-5">
            <p className="text-3xl w-[60%] text-white ">
              Elias is a{" "}
              <mark className="bg-transparent text-[var(--FontTextcherColor)]">
                web designer
              </mark>{" "}
              and{" "}
              <mark className=" bg-transparent text-[var(--FontTextcherColor)]">
                front-end developer
              </mark>
            </p>
            <p className="w-[60%] mt-3 text-[var(--FontTextColor)] pt-5">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className="Content-me border-2 text-white mt-5 p-1 ">
              Content me!!
            </button>
          </div>
        </section>
        <section className="relative  w-[100%] h-[50%] flex justify-center items-end ">
          <div className="absolute w-full h-[50%] z-10 bottom-8 left-0 flex justify-center items-end ">
            <img
              className=" object-cover w-[360px] h-[270px]"
              src={ImgMan}
              alt=""
            />
          </div>
          <div className="absolute z-0 top-20 left-0 ">
            <svg
              width="156"
              height="156"
              viewBox="0 0 156 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_64_1298" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 39.75H38.75H77.5V78.5H38.75V117.25H77.5V156H38.75H0V117.25V78.5V39.75Z"
                />
              </mask>
              <path
                d="M0 39.75V38.75H-1V39.75H0ZM77.5 39.75H78.5V38.75H77.5V39.75ZM77.5 78.5V79.5H78.5V78.5H77.5ZM38.75 78.5V77.5H37.75V78.5H38.75ZM38.75 117.25H37.75V118.25H38.75V117.25ZM77.5 117.25H78.5V116.25H77.5V117.25ZM77.5 156V157H78.5V156H77.5ZM0 156H-1V157H0V156ZM38.75 38.75H0V40.75H38.75V38.75ZM77.5 38.75H38.75V40.75H77.5V38.75ZM78.5 78.5V39.75H76.5V78.5H78.5ZM38.75 79.5H77.5V77.5H38.75V79.5ZM39.75 117.25V78.5H37.75V117.25H39.75ZM38.75 118.25H77.5V116.25H38.75V118.25ZM76.5 117.25V156H78.5V117.25H76.5ZM77.5 155H38.75V157H77.5V155ZM0 157H38.75V155H0V157ZM-1 117.25V156H1V117.25H-1ZM-1 78.5V117.25H1V78.5H-1ZM-1 39.75V78.5H1V39.75H-1Z"
                fill="#C778DD"
                mask="url(#path-1-inside-1_64_1298)"
              />
              <mask
                id="path-3-outside-2_64_1298"
                maskUnits="userSpaceOnUse"
                x="76.5"
                y="0"
                width="80"
                height="119"
                fill="black"
              >
                <rect fill="white" x="76.5" width="80" height="119" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M77.5 1H116.25H155V39.75V78.5V117.25H116.25H77.5V78.5H116.25V39.75H77.5V1Z"
                />
              </mask>
              <path
                d="M77.5 1V0H76.5V1H77.5ZM155 1H156V0H155V1ZM155 117.25V118.25H156V117.25H155ZM77.5 117.25H76.5V118.25H77.5V117.25ZM77.5 78.5V77.5H76.5V78.5H77.5ZM116.25 78.5V79.5H117.25V78.5H116.25ZM116.25 39.75H117.25V38.75H116.25V39.75ZM77.5 39.75H76.5V40.75H77.5V39.75ZM116.25 0H77.5V2H116.25V0ZM155 0H116.25V2H155V0ZM156 39.75V1H154V39.75H156ZM156 78.5V39.75H154V78.5H156ZM156 117.25V78.5H154V117.25H156ZM116.25 118.25H155V116.25H116.25V118.25ZM116.25 116.25H77.5V118.25H116.25V116.25ZM78.5 117.25V78.5H76.5V117.25H78.5ZM77.5 79.5H116.25V77.5H77.5V79.5ZM115.25 39.75V78.5H117.25V39.75H115.25ZM77.5 40.75H116.25V38.75H77.5V40.75ZM76.5 1V39.75H78.5V1H76.5Z"
                fill="#C778DD"
                mask="url(#path-3-outside-2_64_1298)"
              />
            </svg>
          </div>

          <div className="absolute z-20 top-60 right-0">
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="2" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="22" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="42" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="62" r="2" fill="#ABB2BF" />
              <circle cx="2" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="22" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="42" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="62" cy="82" r="2" fill="#ABB2BF" />
              <circle cx="82" cy="82" r="2" fill="#ABB2BF" />
            </svg>
          </div>
          <div className="w-[70%] h-auto border-1 gap-3 mb-1 flex justify-start items-center pl-2 text-[var(--FontTextColor)] " >
            <span className="w-[15px] h-[15px]  bg-[var(--FontTextcherColor)]"></span>
            <p className="text-[var(--FontTextColor)]">
              Currently working on{" "}
              <mark className="bg-transparent text-white">Portfolio</mark>
            </p>
          </div>
        </section>
      </section>
      <section className="w-full h-auto  mt-20 flex-col flex justify-center items-center max-sm:visible xl:hidden ">
      {/* <section className="flex justify-center items-end flex-col w-[50%]">
        <div className="BorderX relative  w-[100%] p-5 ">
          <div className="absolute -top-4 left-6">
          <svg
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="41.472" height="28.704" fill="#282C33" />
            <path
              d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
              fill="#ABB2BF"
            />
          </svg>
          </div>
          <div className="absolute -bottom-4 right-6">
          <svg
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="41.472" height="28.704" fill="#282C33" />
            <path
              d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
              fill="#ABB2BF"
            />
          </svg>
          </div>
          <p className="text-4xl flex justify-center items-center">With great power comes great electricity bill</p>
        </div>
        <div className=" w-[100%]  flex justify-center items-center BorderX2 p-4 ">
          <p className="text-4xl">dadadad</p>
        </div>
      </section> */}
      </section>

     
    </>
  );
}

export default TopMain;
