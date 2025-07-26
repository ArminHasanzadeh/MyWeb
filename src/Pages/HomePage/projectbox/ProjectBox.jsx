import React from 'react';
import Riera from '../../../../public/image/Riera.webp'
import McAlpine from '../../../../public/image/McAlpine.webp'
import Dashboard from '../../../../public/image/Dashboard.webp'
import { Link } from 'react-router-dom';

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
                                    <figure className='w-full h-[200px]'>
                                        <img className='w-full h-full bg-cover' src={Riera} alt="" />
                                    </figure>
                                    <p className='w-full text-1xl border-1 pl-2'>HTML  SCSS  Python  Flask</p>
                                        <div className='w-full  p-3 Project-Name'>
                                            <h6 className='text-2xl text-white pb-3'>ChertNodes</h6>
                                            <p>Minecraft servers hosting </p>
                                            <Link className='w-full h-full ' target='_blank' to={'https://riera-xi.vercel.app/'}>
                                            <button className='text-start pl-4'>
                                                Live
                                            </button>
                                            </Link>
                                        </div>
                                </div>
                               <div className='flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5'>
                                    <figure className='w-full h-[200px]'>
                                        <img className='w-full h-full bg-cover' src={McAlpine} alt="" />
                                    </figure>
                                    <p className='w-full text-1xl border-1 pl-2'>HTML  SCSS  Python  Flask</p>
                                        <div className='w-full  p-3 Project-Name'>
                                            <h6 className='text-2xl text-white pb-3'>ChertNodes</h6>
                                            <p>Minecraft servers hosting </p>
                                            <Link className='w-full h-full ' target='_blank' to={'https://mcalpine.vercel.app/'}>
                                            <button className='text-start pl-4'>
                                                Live
                                            </button>
                                            </Link>
                                        </div>
                                </div>
                               <div className='flex justify-center items-start w-[300px] border-1 h-auto flex-col m-5'>
                                    <figure className='w-full h-[200px]'>
                                        <img className='w-full h-full bg-cover' src={Dashboard} alt="" />
                                    </figure>
                                    <p className='w-full text-1xl border-1 pl-2'>HTML  SCSS  Python  Flask</p>
                                        <div className='w-full  p-3 Project-Name'>
                                            <h6 className='text-2xl text-white pb-3'>ChertNodes</h6>
                                            <p>Minecraft servers hosting </p>
                                            <Link className='w-full h-full ' target='_blank' to={'https://dashbord-lime-gamma.vercel.app/'}>
                                            <button className='text-start pl-4'>
                                                Live
                                            </button>
                                            </Link>
                                        </div>
                                </div>
                        </div>
                        
                        </section>
        </>
    );
}

export default ProjectBox;