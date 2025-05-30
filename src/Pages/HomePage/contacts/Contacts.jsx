import React from 'react';

function Contacts() {
    return (
    <>
        <section className="w-full h-auto mt-20 flex justify-center items-center flex-col xl:visible max-xl:hidden">
             <div className="w-[70%] flex justify-start items-center ml-44">
               <span className="Hashtag text-4xl w-[3%]">#</span>
               <h4 className="text-white text-4xl w-[15%] text-start">contacts</h4>
               <span className="Border-Project w-[20%] border-1 text-white text-start"></span>
             </div>
             <div className='w-[60%] flex justify-center items-center'>
                <div className='mt-10 flex justify-center items-start w-[40%] text-1xl Contacts '>
                <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
             </div>
             <div className='w-[70%] flex justify-center items-end  Contacts-Me flex-col '>
                    <div className='w-[200px] h-auto  border-2 p-4'>
                        <p className='w-[100%] text-center text-[20px] '>Message me here</p>
                        <a href="" className='flex pt-4'><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.071875 2.20292C0.216801 1.57709 0.573067 1.01832 1.08232 0.618104C1.59158 0.217889 2.22365 -4.32004e-05 2.875 6.42336e-09H20.125C20.7764 -4.32004e-05 21.4084 0.217889 21.9177 0.618104C22.4269 1.01832 22.7832 1.57709 22.9281 2.20292L11.5 9.0865L0.071875 2.20292ZM0 3.82075V13.8847L8.34181 8.84425L0 3.82075ZM9.71894 9.67583L0.274563 15.3807C0.507907 15.8657 0.876195 16.2753 1.33656 16.5619C1.79693 16.8486 2.33044 17.0005 2.875 17H20.125C20.6695 17.0001 21.2028 16.8479 21.6629 16.561C22.123 16.274 22.491 15.8643 22.724 15.3793L13.2796 9.67442L11.5 10.7468L9.71894 9.67442V9.67583ZM14.6582 8.84567L23 13.8847V3.82075L14.6582 8.84425V8.84567Z" fill="#ABB2BF"/></svg>Armin@Armin.com</a>
                        <a href="" className='flex pt-4'><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.071875 2.20292C0.216801 1.57709 0.573067 1.01832 1.08232 0.618104C1.59158 0.217889 2.22365 -4.32004e-05 2.875 6.42336e-09H20.125C20.7764 -4.32004e-05 21.4084 0.217889 21.9177 0.618104C22.4269 1.01832 22.7832 1.57709 22.9281 2.20292L11.5 9.0865L0.071875 2.20292ZM0 3.82075V13.8847L8.34181 8.84425L0 3.82075ZM9.71894 9.67583L0.274563 15.3807C0.507907 15.8657 0.876195 16.2753 1.33656 16.5619C1.79693 16.8486 2.33044 17.0005 2.875 17H20.125C20.6695 17.0001 21.2028 16.8479 21.6629 16.561C22.123 16.274 22.491 15.8643 22.724 15.3793L13.2796 9.67442L11.5 10.7468L9.71894 9.67442V9.67583ZM14.6582 8.84567L23 13.8847V3.82075L14.6582 8.84425V8.84567Z" fill="#ABB2BF"/></svg>Armin@Armin.com</a>
                    </div>
             </div>
             </div>
        </section>
        <section className="w-full h-auto mt-20 flex justify-center items-center flex-col xl:hidden">
             <div className="w-[70%] flex justify-start items-center ml-44">
               <span className="Hashtag text-4xl w-[5%]">#</span>
               <h4 className="text-white text-4xl w-[25%] text-start">contacts</h4>
               <span className="Border-Project w-[20%] max-sm:hidden border-1 text-white text-start"></span>
             </div>
             <div className='w-[60%] flex justify-center items-center max-sm:flex-col max-sm:w-[100%] '>
                <div className='mt-10 flex justify-center items-start w-[40%] text-1xl Contacts max-sm:w-[80%] max-sm:mb-6'>
                <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
             </div>
             <div className='w-[70%] flex justify-center items-center  Contacts-Me flex-col '>
                    <div className='w-[200px] h-auto  border-2 p-4'>
                        <p className='w-[100%] text-center text-[20px] '>Message me here</p>
                        <a href="" className='flex pt-4'><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.071875 2.20292C0.216801 1.57709 0.573067 1.01832 1.08232 0.618104C1.59158 0.217889 2.22365 -4.32004e-05 2.875 6.42336e-09H20.125C20.7764 -4.32004e-05 21.4084 0.217889 21.9177 0.618104C22.4269 1.01832 22.7832 1.57709 22.9281 2.20292L11.5 9.0865L0.071875 2.20292ZM0 3.82075V13.8847L8.34181 8.84425L0 3.82075ZM9.71894 9.67583L0.274563 15.3807C0.507907 15.8657 0.876195 16.2753 1.33656 16.5619C1.79693 16.8486 2.33044 17.0005 2.875 17H20.125C20.6695 17.0001 21.2028 16.8479 21.6629 16.561C22.123 16.274 22.491 15.8643 22.724 15.3793L13.2796 9.67442L11.5 10.7468L9.71894 9.67442V9.67583ZM14.6582 8.84567L23 13.8847V3.82075L14.6582 8.84425V8.84567Z" fill="#ABB2BF"/></svg>Armin@Armin.com</a>
                        <a href="" className='flex pt-4'><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.071875 2.20292C0.216801 1.57709 0.573067 1.01832 1.08232 0.618104C1.59158 0.217889 2.22365 -4.32004e-05 2.875 6.42336e-09H20.125C20.7764 -4.32004e-05 21.4084 0.217889 21.9177 0.618104C22.4269 1.01832 22.7832 1.57709 22.9281 2.20292L11.5 9.0865L0.071875 2.20292ZM0 3.82075V13.8847L8.34181 8.84425L0 3.82075ZM9.71894 9.67583L0.274563 15.3807C0.507907 15.8657 0.876195 16.2753 1.33656 16.5619C1.79693 16.8486 2.33044 17.0005 2.875 17H20.125C20.6695 17.0001 21.2028 16.8479 21.6629 16.561C22.123 16.274 22.491 15.8643 22.724 15.3793L13.2796 9.67442L11.5 10.7468L9.71894 9.67442V9.67583ZM14.6582 8.84567L23 13.8847V3.82075L14.6582 8.84425V8.84567Z" fill="#ABB2BF"/></svg>Armin@Armin.com</a>
                    </div>
             </div>
             </div>
        </section>
    </>
    );
}

export default Contacts;