import { useState } from "react"
import Card from "./Card"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Testimonial = ({ reviews }) => {
    const [index, setIndex] = useState(0);

    function leftClickHandler() {
        setIndex(index === 0 ? reviews.length - 1 : index - 1);
    }

    function rigthClickHandler() {
        setIndex((index + 1) % reviews.length);
    }

    function surpriseHandler() {
        setIndex(Math.floor(Math.random() * reviews.length));
    }



    return (
        <div className="w-[85vw] md:w-[700px] h-[70vh] bg-white flex flex-col  justify-center items-center mt-10 px-[5rem] py-10 transition-all duration-700 hover:shadow-xl rounded-md relative">
            <Card review={reviews[index]} />

            <button
                className=" bg-violet-400 mt-6 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg hover:bg-violet-500 transition-all duration-200 text-center"
                onClick={surpriseHandler}
            >Surprime Me</button>

            <button
                className=" absolute left-5 text-3xl text-violet-400 font-bold cursor-pointer hover:text-violet-500"
                onClick={leftClickHandler}>
                <FiChevronLeft />
            </button>


            <button
                className=" absolute right-5 text-3xl text-violet-400 font-bold cursor-pointer hover:text-violet-500"
                onClick={rigthClickHandler}>
                <FiChevronRight />
            </button>

        </div>

    )
}

export default Testimonial