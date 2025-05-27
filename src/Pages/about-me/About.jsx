import React from "react";
import Img2 from "/image/img2.png"

function About() {
  return (
  <>
    <section className="w-full h-auto mt-20 flex justify-center items-center flex-col  xl:visible ">
      <div className="w-[70%] flex justify-center items-start  flex-col">
        
       
        <h4 className="text-white text-4xl w-[15%] max-sm:w-[100%] max-md:w-[25%]  text-start">  <mark className=" bg-transparent text-[var(--FontTextcherColor)]">/</mark>about-me</h4>
        <p className="text-[var(--FontTextColor)] mt-2">Who am i?</p>
        
      </div>
      <div className="About-Me w-[60%] max-sm:w-full h-auto flex justify-center items-center text-1xl max-sm:flex-col ">
        <div className="w-[50%] max-sm:w-[80%]">
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
          <button className="flex p-2"> Read more <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ABB2BF"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></span></button>
        </div>
        <div className=" w-[50%] h-auto flex justify-center items-center relative max-sm:w-[80%]">
            <figure className="Img2 ">
              <img src={Img2} alt="" />
            </figure>
            <div className=" absolute  right-20 ">
              <svg width="104" height="56" viewBox="0 0 104 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="27" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="52" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="77" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="102" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="19.3333" r="2" fill="#ABB2BF"/>
<circle cx="27" cy="19.3333" r="2" fill="#ABB2BF"/>
<circle cx="52" cy="19.3333" r="2" fill="#ABB2BF"/>
<circle cx="77" cy="19.3333" r="2" fill="#ABB2BF"/>
<circle cx="102" cy="19.3333" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="36.6667" r="2" fill="#ABB2BF"/>
<circle cx="27" cy="36.6667" r="2" fill="#ABB2BF"/>
<circle cx="52" cy="36.6667" r="2" fill="#ABB2BF"/>
<circle cx="77" cy="36.6667" r="2" fill="#ABB2BF"/>
<circle cx="102" cy="36.6667" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="54" r="2" fill="#ABB2BF"/>
<circle cx="27" cy="54" r="2" fill="#ABB2BF"/>
<circle cx="52" cy="54" r="2" fill="#ABB2BF"/>
<circle cx="77" cy="54" r="2" fill="#ABB2BF"/>
<circle cx="102" cy="54" r="2" fill="#ABB2BF"/>
              </svg>
            </div>
            <div className="absolute left-20 top-10">
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="22" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="42" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="62" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="82" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="22" r="2" fill="#ABB2BF"/>
<circle cx="22" cy="22" r="2" fill="#ABB2BF"/>
<circle cx="42" cy="22" r="2" fill="#ABB2BF"/>
<circle cx="62" cy="22" r="2" fill="#ABB2BF"/>
<circle cx="82" cy="22" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="42" r="2" fill="#ABB2BF"/>
<circle cx="22" cy="42" r="2" fill="#ABB2BF"/>
<circle cx="42" cy="42" r="2" fill="#ABB2BF"/>
<circle cx="62" cy="42" r="2" fill="#ABB2BF"/>
<circle cx="82" cy="42" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="62" r="2" fill="#ABB2BF"/>
<circle cx="22" cy="62" r="2" fill="#ABB2BF"/>
<circle cx="42" cy="62" r="2" fill="#ABB2BF"/>
<circle cx="62" cy="62" r="2" fill="#ABB2BF"/>
<circle cx="82" cy="62" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="82" r="2" fill="#ABB2BF"/>
<circle cx="22" cy="82" r="2" fill="#ABB2BF"/>
<circle cx="42" cy="82" r="2" fill="#ABB2BF"/>
<circle cx="62" cy="82" r="2" fill="#ABB2BF"/>
<circle cx="82" cy="82" r="2" fill="#ABB2BF"/>
              </svg>
            </div>
        </div>
      </div>
    </section>
    <section className='w-full h-auto mt-20 flex justify-center items-center flex-col xl:visible max-sm:flex-col pl-44 max-sm:p-0'>
            <div className='w-[80%] flex justify-start items-center  '>
                <span className='Hashtag text-4xl w-[3%]  max-sm:w-[5%]'>#</span>
                <h4 className='text-white text-4xl w-[10%] text-start max-sm:w-full'>Skills</h4>
                <span className='Border-Project w-[30%] border-1 text-white text-start max-sm:hidden'></span>
            </div>
           <div className='flex justify-center items-center w-full h-auto  mt-10  max-sm:flex-col'>
                <div className='w-[40%] flex justify-center items-center max-sm:w-full'>
                    <svg width="349" height="283" viewBox="0 0 349 283" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="40" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="40" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="40" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="40" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="40" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="54.75" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="54.75" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="54.75" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="54.75" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="54.75" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="69.5" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="69.5" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="69.5" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="69.5" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="69.5" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="84.25" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="84.25" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="84.25" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="84.25" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="84.25" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="99" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="99" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="99" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="99" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="99" r="2" fill="#ABB2BF"/>
<circle cx="179" cy="145" r="2" fill="#ABB2BF"/>
<circle cx="193.75" cy="145" r="2" fill="#ABB2BF"/>
<circle cx="208.5" cy="145" r="2" fill="#ABB2BF"/>
<circle cx="223.25" cy="145" r="2" fill="#ABB2BF"/>
<circle cx="238" cy="145" r="2" fill="#ABB2BF"/>
<circle cx="179" cy="159.75" r="2" fill="#ABB2BF"/>
<circle cx="193.75" cy="159.75" r="2" fill="#ABB2BF"/>
<circle cx="208.5" cy="159.75" r="2" fill="#ABB2BF"/>
<circle cx="223.25" cy="159.75" r="2" fill="#ABB2BF"/>
<circle cx="238" cy="159.75" r="2" fill="#ABB2BF"/>
<circle cx="179" cy="174.5" r="2" fill="#ABB2BF"/>
<circle cx="193.75" cy="174.5" r="2" fill="#ABB2BF"/>
<circle cx="208.5" cy="174.5" r="2" fill="#ABB2BF"/>
<circle cx="223.25" cy="174.5" r="2" fill="#ABB2BF"/>
<circle cx="238" cy="174.5" r="2" fill="#ABB2BF"/>
<circle cx="179" cy="189.25" r="2" fill="#ABB2BF"/>
<circle cx="193.75" cy="189.25" r="2" fill="#ABB2BF"/>
<circle cx="208.5" cy="189.25" r="2" fill="#ABB2BF"/>
<circle cx="223.25" cy="189.25" r="2" fill="#ABB2BF"/>
<circle cx="238" cy="189.25" r="2" fill="#ABB2BF"/>
<circle cx="179" cy="204" r="2" fill="#ABB2BF"/>
<circle cx="193.75" cy="204" r="2" fill="#ABB2BF"/>
<circle cx="208.5" cy="204" r="2" fill="#ABB2BF"/>
<circle cx="223.25" cy="204" r="2" fill="#ABB2BF"/>
<circle cx="238" cy="204" r="2" fill="#ABB2BF"/>
<rect x="297.5" y="193.5" width="51" height="51" stroke="#ABB2BF"/>
<rect x="227.5" y="0.5" width="85" height="85" stroke="#ABB2BF"/>
<mask id="path-53-inside-1_29_371" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M71.5 169H99.75H128V197.25V225.5V253.75H99.75H71.5V225.5H99.75V197.25H71.5V169Z"/>
</mask>
<path d="M71.5 169V168H70.5V169H71.5ZM128 169H129V168H128V169ZM128 253.75V254.75H129V253.75H128ZM71.5 253.75H70.5V254.75H71.5V253.75ZM71.5 225.5V224.5H70.5V225.5H71.5ZM99.75 225.5V226.5H100.75V225.5H99.75ZM99.75 197.25H100.75V196.25H99.75V197.25ZM71.5 197.25H70.5V198.25H71.5V197.25ZM99.75 168H71.5V170H99.75V168ZM128 168H99.75V170H128V168ZM129 197.25V169H127V197.25H129ZM129 225.5V197.25H127V225.5H129ZM129 253.75V225.5H127V253.75H129ZM99.75 254.75H128V252.75H99.75V254.75ZM99.75 252.75H71.5V254.75H99.75V252.75ZM72.5 253.75V225.5H70.5V253.75H72.5ZM71.5 226.5H99.75V224.5H71.5V226.5ZM98.75 197.25V225.5H100.75V197.25H98.75ZM71.5 198.25H99.75V196.25H71.5V198.25ZM70.5 169V197.25H72.5V169H70.5Z" fill="#C778DD" mask="url(#path-53-inside-1_29_371)"/>
<mask id="path-55-outside-2_29_371" maskUnits="userSpaceOnUse" x="14" y="196.25" width="59" height="87" fill="black">
<rect fill="white" x="14" y="196.25" width="59" height="87"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 197.25H43.25H71.5V225.5H43.25V253.75H71.5V282H43.25H15V253.75V225.5V197.25Z"/>
</mask>
<path d="M15 197.25V196.25H14V197.25H15ZM71.5 197.25H72.5V196.25H71.5V197.25ZM71.5 225.5V226.5H72.5V225.5H71.5ZM43.25 225.5V224.5H42.25V225.5H43.25ZM43.25 253.75H42.25V254.75H43.25V253.75ZM71.5 253.75H72.5V252.75H71.5V253.75ZM71.5 282V283H72.5V282H71.5ZM15 282H14V283H15V282ZM43.25 196.25H15V198.25H43.25V196.25ZM71.5 196.25H43.25V198.25H71.5V196.25ZM72.5 225.5V197.25H70.5V225.5H72.5ZM43.25 226.5H71.5V224.5H43.25V226.5ZM44.25 253.75V225.5H42.25V253.75H44.25ZM43.25 254.75H71.5V252.75H43.25V254.75ZM70.5 253.75V282H72.5V253.75H70.5ZM71.5 281H43.25V283H71.5V281ZM15 283H43.25V281H15V283ZM14 253.75V282H16V253.75H14ZM14 225.5V253.75H16V225.5H14ZM14 197.25V225.5H16V197.25H14Z" fill="#C778DD" mask="url(#path-55-outside-2_29_371)"/>
                    </svg>
                </div>
                <div className='w-[80%] h-auto p-10 flex max-sm:w-full gap-3 justify-center items-start'>
                  <div className="flex flex-col gap-y-2">
                    <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl mb '>
                        <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                        <div className='p-1'>
                            <p className='w-full'> TypeScript Lua</p>
                            <p className='w-full'> Python JavaScript</p>
                        </div>
                      </div>
                         <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl  xl:hidden '>
                                <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                            <div className='p-1'>
                                <p className='w-full'> TypeScript Lua</p>
                                <p className='w-full'> Python JavaScript</p>
                            </div>
                      </div>
                         <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl xl:hidden'>
                                <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                            <div className='p-1'>
                                <p className='w-full'> TypeScript Lua</p>
                                <p className='w-full'> Python JavaScript</p>
                            </div>
                      </div>
                  </div>
                    
                    <div className="max-sm:flex flex flex-col gap-y-2 ">
                        <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl '>
                                <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                            <div className='p-1'>
                                <p className='w-full'> TypeScript Lua</p>
                                <p className='w-full'> Python JavaScript</p>
                            </div>
                        </div>
                        <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl '>
                                <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                            <div className='p-1'>
                                <p className='w-full'> TypeScript Lua</p>
                                <p className='w-full'> Python JavaScript</p>
                            </div>
                        </div>
                        <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl  xl:hidden'>
                                <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                            <div className='p-1'>
                                <p className='w-full'> TypeScript Lua</p>
                                <p className='w-full'> Python JavaScript</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 max-xl:hidden">
                        <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl '>
                                <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                            <div className='p-1'>
                                <p className='w-full'> TypeScript Lua</p>
                                <p className='w-full'> Python JavaScript</p>
                            </div>
                        </div>
                        <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl '>
                        <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                        <div className='p-1'>
                            <p className='w-full'> TypeScript Lua</p>
                            <p className='w-full'> Python JavaScript</p>
                        </div>
                    </div>
                        <div className='w-[180px] h-[100px] border-1 My-Skills-Name text-1xl '>
                        <h6 className='text-white p-2 border-1 w-full'>Languages</h6>
                        <div className='p-1'>
                            <p className='w-full'> TypeScript Lua</p>
                            <p className='w-full'> Python JavaScript</p>
                        </div>
                    </div>
                    </div>
                </div>
           </div>
        </section>
   
  </>
  );
}

export default About;
