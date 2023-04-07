import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useState } from "react"

const Carousel = ({ children: slides }) => {
    const [curIndex, setCurIndex] = useState(0);

    const prev = () => (setCurIndex(curIndex === 0 ? slides.length - 1 : curIndex - 1))

    const next = () => (setCurIndex((curIndex + 1) % slides.length));

    const switchSlide = (ind) => (setCurIndex(ind));

    return (

        <div className="w-[85vw] md:w-[700px]  overflow-hidden relative">

            <div className="flex transition-transform ease-out duration-700"
                style={{ transform: ` translateX(-${curIndex * 100}%)` }}

            >{slides}</div>

            <div className=" absolute inset-0 flex justify-between items-center translate-y-10">
                <button
                    className="text-3xl text-white font-bold cursor-pointer shadow-lg  bg-violet-300 p-1 m-2 rounded-full hover:text-violet-500"
                    onClick={prev}>
                    <FiChevronLeft />
                </button>


                <button
                    className="text-3xl text-white font-bold cursor-pointer shadow-lg  bg-violet-300 p-1 m-2 rounded-full hover:text-violet-500"
                    onClick={next}>
                    <FiChevronRight />
                </button>
            </div>


            <div className=' absolute bottom-10 right-0 left-0'>
                <div className='flex justify-center items-center gap-2'>
                    {
                        slides.map((_, ind) => (
                            <div
                                className={`w-3 h-3  bg-violet-300 rounded-full cursor-pointer transition-all duration-200
                                ${ind === curIndex ? "p-2" : "bg-opacity-50"}`}

                                onClick={() => switchSlide(ind)}
                            ></div>
                        ))
                    }
                </div>
            </div>

        </div>

    )
}

export default Carousel;