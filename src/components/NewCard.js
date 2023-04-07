import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const NewCard = ({ review }) => {
    return (
        <div className='mt-[5rem] bg-white h-[70vh]'>

            <div className="w-[85vw] md:w-[700px] bg-white flex flex-col  justify-center items-center  px-[5rem] pt-10 pb-16 transition-all duration-700 hover:shadow-xl rounded-md relative">

                <div className="flex flex-col md:relative">
                    <div className=' relative md:absolute md:top-[-7rem] md:-left-8 z-[10] mx-auto'>

                        <img
                            className="w-[140px] aspect-square rounded-full z-[25] shadow-lg shadow-slate-600"
                            src={review.image} alt="" />

                        <div className='absolute w-[140px] aspect-square rounded-full bg-violet-500  top-[-6px]  left-[10px] z-[-1] '></div>
                    </div>


                    <h2 className=' text-2xl capitalize font-bold'>{review.name}</h2>
                    <h3 className='text-violet-300 mt-3 uppercase text-sm'>{review.job}</h3>
                    <div className='text-violet-400 mx-auto mt-5'><FaQuoteLeft /></div>
                    <p className=' text-center mt-4 text-slate-500'>{review.text}</p>
                    <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight /></div>
                </div>

            </div>
        </div>
    )
}

export default NewCard