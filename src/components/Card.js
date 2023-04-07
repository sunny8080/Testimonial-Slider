import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Card = ({ review }) => {
    return (
        <div className="flex flex-col md:relative">

            <div className=' relative md:absolute md:top-[-7rem] md:-left-8 z-[10] mx-auto'>

                <img
                    className="w-[140px] aspect-square rounded-full z-[25]"
                    src={review.image} alt="" />

                <div className='absolute w-[140px] aspect-square rounded-full bg-violet-500  top-[-6px]  left-[10px] z-[-1] '></div>
            </div>


            <h2 className=' text-2xl capitalize font-bold'>{review.name}</h2>
            <h3 className='text-violet-300 mt-3 uppercase text-sm'>{review.job}</h3>
            <div className='text-violet-400 mx-auto mt-5'><FaQuoteLeft /></div>
            <p className=' text-center mt-4 text-slate-500'>{review.text}</p>
            <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight /></div>
        </div>


    )
}

export default Card