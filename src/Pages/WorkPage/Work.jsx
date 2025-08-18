import { Link } from "react-router-dom";
import Riera from "../../../public/image/Riera.webp";
import McAlpine from "../../../public/image/McAlpine.webp";
import Dashboard from "../../../public/image/Dashboard.webp";
import BlueBank from "../../../public/image/BlueBank.webp"
 
function Work() {
  return (
    <>
      <section>
        <h1 className="w-[50%] h-auto flex justify-center items-center text-5xl text-white max-xl:mt-10">
          <mark className=" bg-transparent text-[var(--FontTextcherColor)]">
            /
          </mark>
          Project
        </h1>
        <p className="w-[50%] flex justify-center items-center text-[var(--FontTextColor)] max-xl:flex-col">
          List of my Project
        </p>
        <section className="w-full h-auto mt-20 flex justify-center items-center flex-col xl:visible ">
          <div className="w-[70%] flex justify-start items-center ">
            <span className="Hashtag text-4xl w-[3%] max-sm:w-[5%]">#</span>
            <h2 className="text-white text-4xl w-[50%] text-start max-sm:w-[100%] max-sm:text-center ">
              complete-Project
            </h2>
          </div>
          <div className="flex Box-pr mt-5  h-auto w-[100%] justify-center items-start max-sm:flex-col max-sm:items-center max-md:flex-col max-md:items-center">
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5">
              <figure className="w-full h-[200px]">
                <img
                  className="w-full h-full bg-cover"
                  src={BlueBank}
                  alt=""
                />
              </figure>
              <p className="w-full text-1xl border-1 pl-2">BlueBank</p>
              <div className="w-full  p-3 Project-Name">
                <h6 className="text-2xl text-white pb-3">BlueBank Project</h6>
                <p>
                  Bluebank is a practice project inspired by online banking
                  design, using unique tricks to improve performance and
                  experience. It showcases skills in building practical and
                  interactive applications.
                </p>
                <Link
                  className="w-full h-full "
                  target="_blank"
                  to={"https://bluebank.vercel.app/"}
                >
                  <button className="text-start pl-4">Live</button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5">
              <figure className="w-full h-[200px]">
                <img className="w-full h-full bg-cover" src={Riera} alt="" />
              </figure>
              <p className="w-full text-1xl border-1 pl-2">Riera Projevt</p>
              <div className="w-full  p-3 Project-Name">
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
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5">
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
          <div className="w-[70%] flex justify-start items-center mt-7 mb-5">
            <span className="Hashtag text-4xl w-[3%] max-sm:w-[5%]">#</span>
            <h2 className="text-white text-4xl w-[50%] text-start max-sm:w-[80%] max-sm:text-center">
              small-Project
            </h2>
          </div>
          <div className="w-[59%] h-auto Box-pr flex justify-start items-center max-md:flex-col max-sm:flex-col xl:ml-25">
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5">
              <p className="w-full text-1xl border-1 pl-2 p-2">
                GitHub Project
              </p>
              <div className="w-full  p-3 Project-Name">
                <h6 className="text-2xl text-white pb-3">3D Project</h6>
                <p>MineCraft 3D </p>
                <Link
                  className="w-full h-full "
                  target="_blank"
                  to={"https://github.com/ArminHasanzadeh/Anime"}
                >
                  <button className="text-start pl-4">Live</button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5">
              <p className="w-full text-1xl border-1 pl-2 p-2">
                GitHub Project
              </p>
              <div className="w-full  p-3 Project-Name">
                <h6 className="text-2xl text-white pb-3">Game Project</h6>
                <p>Mind game</p>
                <Link
                  className="w-full h-full "
                  target="_blank"
                  to={"https://github.com/ArminHasanzadeh/Game"}
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

export default Work;
