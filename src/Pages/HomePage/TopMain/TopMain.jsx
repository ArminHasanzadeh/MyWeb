import React from "react";
import ImgMan from "/image/Img1.png";
import { Link, useLocation } from "react-router-dom";
import DecryptedText from "../../../component/text";
import BlurText from "../../../component/text";
function TopMain(props) {
  const location = useLocation();

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <section className="w-full h-[420px] flex mt-20 mb-20   max-lg:h-[700px] max-lg:items-center max-lg:justify-center max-lg:flex-col max-lg:w-[70%]">
        <section className="w-[80%]  h-[100%] flex justify-center items-center flex-col max-lg:h-[50%] max-lg:items-center">
          <div className="TextBox max-lg:flex max-lg:justify-center max-lg:items-center max-lg:pb-5 max-lg:pt-5 max-lg:flex-col ">
          <div className="flex-col  ">
              <div className="flex gap-2 max-lg:flex-col">
              <BlurText
                text="Armin is a"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl  text-white"
              />

              <BlurText
                text="web designer"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl  text-[var(--FontTextcherColor)]"
              />
              <BlurText
                text="and"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl  text-white"
              />
            </div>
              <div>
                <BlurText
                  text="front-end developer"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-4xl  text-[var(--FontTextcherColor)]"
                />
              </div>
          </div>

            <p className="w-[60%] mt-3 text-[var(--FontTextColor)]">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className="Content-me border-2 text-white mt-3 p-1">
              <Link to="/Content">Content me!!</Link>
            </button>
          </div>
        </section>
        <section className="relative  w-[50%] h-[100%] flex justify-start items-end  max-lg:w-full max-lg:justify-center">
          <div className="absolute z-10 top-0 left-0 max-lg:w-full max-lg:h-[50%]  max-lg:flex max-lg:justify-center max-lg:items-end max-lg:top-35 ">
            <img
              className=" object-cover w-[457px] h-[367px] max-lg:w-[360px] max-lg:h-[270px]"
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

          <div className="absolute z-20 top-60 right-50 max-lg:right-0">
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
          <div className="w-[70%] h-[10%] border-1 gap-3 mb-1 flex justify-start items-center pl-2 text-[var(--FontTextColor)] max-lg:h-auto max-lg:w-full">
            <span className="w-[15px] h-[15px]  bg-[var(--FontTextcherColor)]"></span>
            <p className="text-[var(--FontTextColor)]">
              Currently working on{" "}
              <mark className="bg-transparent text-white">Portfolio</mark>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default TopMain;
