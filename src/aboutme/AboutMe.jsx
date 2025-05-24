import React from "react";

function AboutMe() {
  return (
    <section className="w-full h-auto mt-20 flex justify-center items-center flex-col ">
      <div className="w-[70%] flex justify-start items-center ml-44">
        <span className="Hashtag text-4xl w-[3%]">#</span>
        <h4 className="text-white text-4xl w-[15%] text-start">about-me</h4>
        <span className="Border-Project w-[40%] border-1 text-white text-start"></span>
      </div>
      <div className="About-Me w-[60%] h-auto flex justify-center items-center text-1xl ">
        <div className="w-[50%]">
          <p className="pt-5 pb-5">Hello, I`m Armin</p>
          <p className="pt-5 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto
            quas harum impedit eius nostrum odio sed, ab repellendus hic cumque
            ad quibusdam eligendi! Explicabo suscipit quaerat earum obcaecati
            corporis!
          </p>
          <p className="pt-5 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iusto
            quas harum impedit eius nostrum odio sed, ab repellendus hic cumque
            ad quibusdam eligendi! Explicabo suscipit quaerat earum obcaecati
            corporis!
          </p>
          <button className="flex p-2"> Read more <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ABB2BF"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></span></button>
        </div>
        <div className=" w-[50%] h-auto flex justify-center items-center border-2">
            
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
