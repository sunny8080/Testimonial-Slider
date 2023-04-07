import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useEffect, useState } from "react"

const Carousel = ({ children: slides }) => {
    const [curIndex, setCurIndex] = useState(0);
    const [rightBtn, setRightBtn] = useState(true);
    const [leftBtn, setLeftBtn] = useState(false);

    // const prev = () => (setCurIndex(curIndex === 0 ? slides.length - 1 : curIndex - 1))
    // const next = () => (setCurIndex((curIndex + 1) % slides.length));
    const prev = () => (curIndex !== 0 && setCurIndex(curIndex - 1));
    const next = () => (curIndex !== slides.length - 1 && setCurIndex(curIndex + 1));


    // switch slides using dots
    const switchSlide = (ind) => (setCurIndex(ind));


    // Apply transition on left / right click arrow
    document.onkeydown = (e) => {
        e = e || window.event;
        if (e.key === "ArrowLeft") prev(); // left arrow
        if (e.key === "ArrowRight") next(); // right arrow
    }


    useEffect(() => {
        // hide left / right button when there is no element to move
        setLeftBtn(curIndex === 0 ? false : true);
        setRightBtn(curIndex === slides.length - 1 ? false : true);
    }, [curIndex, slides.length]);


    return (

        <div className="w-[85vw] md:w-[700px]  overflow-hidden relative">

            <div className="flex transition-transform ease-out duration-700"
                style={{ transform: ` translateX(-${curIndex * 100}%)` }}

            >{slides}</div>

            <div className=" absolute inset-0 flex justify-between items-center translate-y-10">
                <button
                    className={`text-3xl text-white font-bold cursor-pointer shadow-lg  bg-violet-300 p-1 m-2 rounded-full hover:text-violet-500  transition-opacity duration-300
                    ${leftBtn ? " opacity-100 cursor-pointer" : "opacity-0 cursor-default"}                    
                    `}
                    onClick={prev}>
                    <FiChevronLeft />
                </button>


                <button
                    className={`text-3xl text-white font-bold cursor-pointer shadow-lg  bg-violet-300 p-1 m-2 rounded-full hover:text-violet-500  transition-opacity duration-300
                    ${rightBtn ? " opacity-100 cursor-pointer" : "opacity-0 cursor-default"}
                    `}
                    onClick={next}>
                    <FiChevronRight />
                </button>
            </div>


            {/* one dots for each slides */}
            <div className=' absolute bottom-10 right-0 left-0'>
                <div className='flex justify-center items-center gap-2'>
                    {
                        slides.map((_, ind) => (
                            <div
                                key={ind}
                                className={`w-3 h-3  bg-violet-400 rounded-full cursor-pointer transition-all duration-200
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