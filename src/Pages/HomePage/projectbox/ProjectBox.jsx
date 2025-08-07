import React from "react";
import Riera from "../../../../public/image/Riera.webp";
import McAlpine from "../../../../public/image/McAlpine.webp";
import Dashboard from "../../../../public/image/Dashboard.webp";
import { Link } from "react-router-dom";

function ProjectBox() {
  return (
    <>
      <section className="w-full h-auto mt-20 flex justify-center items-center flex-col xl:visible ">
        <div className="w-[60%] flex justify-start items-center ">
          <span className="Hashtag text-4xl w-[3%] max-sm:w-[5%]">#</span>
          <h2 className="text-white text-4xl w-[20%] text-start max-sm:w-[50%] max-sm:text-center ">
            Project
          </h2>
          <span className="Border-Project w-[100%] max-sm:hidden border-1 text-white text-start"></span>
        </div>
        <section className="w-full h-auto mt-20 flex justify-center items-center flex-col xl:visible ">
         
          <div className="flex Box-pr mt-5  h-auto w-[100%] justify-center items-start max-sm:flex-col max-sm:items-center max-md:flex-col max-md:items-center ">
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5 ">
              <figure className="w-full h-[200px]">
                <img className="w-full h-full bg-cover" src={Riera} alt="" />
              </figure>
              <p className="w-full text-1xl border-1 pl-2">Riera Projevt</p>
              <div className="w-full  p-3 Project-Name ">
                <h6 className="text-2xl text-white pb-3">Parallax Project</h6>
                <p>
                  Riera is a practice project and a UI prototype developed using
                  React. It focuses on modern design and smooth user experience.{" "}
                </p>
                <Link
                  className="w-full h-full "
                  target="_blank"
                  to={"https://riera-xi.vercel.app/"}
                >
                  <button className="text-start pl-4">Live</button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5 ">
              <figure className="w-full h-[200px]">
                <img className="w-full h-full bg-cover" src={McAlpine} alt="" />
              </figure>
              <p className="w-full text-1xl border-1 pl-2">McAlpine</p>
              <div className="w-full  p-3 Project-Name">
                <h6 className="text-2xl text-white pb-3">Parallax Project</h6>
                <p>
                  Mcalpine is a React-based practice project that emphasizes
                  innovative design and a responsive user interface to deliver
                  an optimized user experience. It serves as a prominent example
                  of frontend development skills in a real-world setting.
                </p>
                <Link
                  className="w-full h-full "
                  target="_blank"
                  to={"https://mcalpine.vercel.app/"}
                >
                  <button className="text-start pl-4">Live</button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5">
              <figure className="w-full h-[200px]">
                <img
                  className="w-full h-full bg-cover"
                  src={Dashboard}
                  alt=""
                />
              </figure>
              <p className="w-full text-1xl border-1 pl-2">Admin Panel</p>
              <div className="w-full  p-3 Project-Name">
                <h6 className="text-2xl text-white pb-3">Dashboard Project</h6>
                <p>
                  Dashboard is a React practice project developed using the
                  ShadCN library and React Router. Featuring a minimalistic
                  design and a focus on smooth user experience, this project
                  showcases skills in building interactive and data-driven
                  applications.
                </p>
                <Link
                  className="w-full h-full "
                  target="_blank"
                  to={"https://dashbord-lime-gamma.vercel.app/"}
                >
                  <button className="text-start pl-4">Live</button>
                </Link>
              </div>
            </div>
          </div>
         
         
        </section>
      </section>
    </>
  );
}

export default ProjectBox;
