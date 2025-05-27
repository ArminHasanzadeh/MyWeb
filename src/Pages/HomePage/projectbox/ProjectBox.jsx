import React from 'react';

function ProjectBox() {
    return (
        <>
       <section className='w-full h-auto mt-20 flex justify-center items-center flex-col xl:visible '>
                            <div className='w-[60%] flex justify-start items-center '>
                                <span className='Hashtag text-4xl w-[3%] max-sm:w-[5%]'>#</span>
                                <h2 className='text-white text-4xl w-[20%] text-start max-sm:w-[50%] max-sm:text-center '>Project</h2>
                                 <span className="Border-Project w-[100%] max-sm:hidden border-1 text-white text-start"></span>
                            </div>
                        <div className='flex Box-pr mt-5  h-auto w-[100%] justify-center items-start max-sm:flex-col max-sm:items-center max-md:flex-col max-md:items-center'>
                               <div className='flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5'>
                                    <figure className='w-full h-[200px]'></figure>
                                    <p className='w-full text-1xl border-1 pl-2'>HTML  SCSS  Python  Flask</p>
                                        <div className='w-full  p-3 Project-Name'>
                                            <h6 className='text-2xl text-white pb-3'>ChertNodes</h6>
                                            <p>Minecraft servers hosting </p>
                                            <button className='text-start pl-4'>Live </button>
                                        </div>
                                </div>
                               <div className='flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5'>
                                    <figure className='w-full h-[200px]'></figure>
                                    <p className='w-full text-1xl border-1 pl-2'>HTML  SCSS  Python  Flask</p>
                                        <div className='w-full  p-3 Project-Name'>
                                            <h6 className='text-2xl text-white pb-3'>ChertNodes</h6>
                                            <p>Minecraft servers hosting </p>
                                            <button className='text-start pl-4'>Live </button>
                                        </div>
                                </div>
                               <div className='flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5'>
                                    <figure className='w-full h-[200px]'></figure>
                                    <p className='w-full text-1xl border-1 pl-2'>HTML  SCSS  Python  Flask</p>
                                        <div className='w-full  p-3 Project-Name'>
                                            <h6 className='text-2xl text-white pb-3'>ChertNodes</h6>
                                            <p>Minecraft servers hosting </p>
                                            <button className='text-start pl-4'>Live </button>
                                        </div>
                                </div>
                        </div>
                        
                        </section>
        </>
    );
}

export default ProjectBox;