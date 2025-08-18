import React from "react";
import Img2 from "/image/img2.png";
import { Link, useLocation } from "react-router-dom";
function AboutMe() {
  const location = useLocation();
  return (
    <>
      <section className="w-full h-auto mt-20 flex justify-center items-center flex-col  xl:visible ">
        <div className="w-[70%] flex justify-start items-center ">
          <span className="Hashtag text-4xl w-[3%] max-sm:w-[10%]">#</span>
          <h4 className="text-white text-4xl w-[25%] max-sm:w-[100%] max-md:w-[25%]  text-start">
            about-me
          </h4>
          <span className="Border-Project w-[40%] max-sm:hidden border-1 text-white text-start"></span>
        </div>
        <div className="About-Me w-[60%] max-sm:w-full h-auto flex justify-center items-center text-1xl max-sm:flex-col ">
          <div className="w-[50%] max-sm:w-[80%] p-5  " st>
            <p className="pt-5 pb-5">Hello, I`m Armin</p>
            <p className="pt-5 pb-5">
              I am a front-end developer specializing in designing and
              implementing user interfaces for the web. Using technologies such
              as HTML, CSS, JavaScript, and frameworks like React and Next.js, I
              build professional-looking websites with solid performance. I
              place great importance on clean code and user-friendly design. My
              goal is to deliver effective solutions for a strong presence on
              the web.
            </p>
            <p className="pt-5 pb-5">
              My expertise lies in creating websites that are fast, responsive,
              and aligned with user needs. From simple projects to full web
              applications, I focus on delivering smooth and functional user
              experiences. I keep my knowledge up to date with the latest
              front-end standards and technologies. Accuracy, organization, and
              attention to detail are my top priorities in every project.
            </p>
            <Link to="/Content">
              <button className="flex p-2 ">
                {" "}
                Read more{" "}
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ABB2BF"
                  >
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          <div className=" w-[50%] h-auto flex justify-center items-center relative max-sm:w-[80%]">
            <figure className="Img2 ">
              <img src={Img2} alt="" />
            </figure>
            <div className=" absolute  right-20 ">
              <svg
                width="104"
                height="56"
                viewBox="0 0 104 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="27" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="52" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="77" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="102" cy="2" r="2" fill="#ABB2BF" />
                <circle cx="2" cy="19.3333" r="2" fill="#ABB2BF" />
                <circle cx="27" cy="19.3333" r="2" fill="#ABB2BF" />
                <circle cx="52" cy="19.3333" r="2" fill="#ABB2BF" />
                <circle cx="77" cy="19.3333" r="2" fill="#ABB2BF" />
                <circle cx="102" cy="19.3333" r="2" fill="#ABB2BF" />
                <circle cx="2" cy="36.6667" r="2" fill="#ABB2BF" />
                <circle cx="27" cy="36.6667" r="2" fill="#ABB2BF" />
                <circle cx="52" cy="36.6667" r="2" fill="#ABB2BF" />
                <circle cx="77" cy="36.6667" r="2" fill="#ABB2BF" />
                <circle cx="102" cy="36.6667" r="2" fill="#ABB2BF" />
                <circle cx="2" cy="54" r="2" fill="#ABB2BF" />
                <circle cx="27" cy="54" r="2" fill="#ABB2BF" />
                <circle cx="52" cy="54" r="2" fill="#ABB2BF" />
                <circle cx="77" cy="54" r="2" fill="#ABB2BF" />
                <circle cx="102" cy="54" r="2" fill="#ABB2BF" />
              </svg>
            </div>
            <div className="absolute left-20 top-10">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
