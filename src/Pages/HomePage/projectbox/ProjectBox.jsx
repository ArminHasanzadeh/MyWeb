import React from 'react';

function ProjectBox() {
    return (
        <>
        <section className='w-full h-auto mt-20 flex justify-center items-center flex-col max-xl:hidden xl:visible '>
            <div className='w-[70%] flex justify-start items-center ml-44'>
                <span className='Hashtag text-4xl w-[3%]'>#</span>
                <h3 className='text-white text-4xl w-[10%] text-start'>Project</h3>
                <span className='Border-Project w-[60%] border-1 text-white text-start'></span>
            </div>
        <div className='flex Box-pr mt-5 '>
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
        <section className='w-full h-auto mt-20 flex justify-center items-center flex-col lg:visible xl:hidden'>
            <div className='w-[70%] flex justify-start items-center ml-44'>
                <span className='Hashtag text-4xl w-[10%]'>#</span>
                <h3 className='text-white text-4xl w-[40%] text-start'>Project</h3>
                <span className='Border-Project w-[60%] border-1 text-white text-start'></span>
            </div>
        <div className='flex Box-pr mt-5  flex-col'>
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