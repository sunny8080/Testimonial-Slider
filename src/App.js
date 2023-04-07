import './App.css';
import reviews from './data';
import Carousel from './components/Carousel.js';
import NewCard from './components/NewCard';
import Testimonial from './components/Testimonial';

function App() {
  return (

    <div className=' overflow-x-hidden'>
      <div className=' text-center font-bold py-2'>Carousel 1</div>

      {/* 1st caraousel */}
      <div className=" w-screen min-h-screen pt-5 pb-16 flex flex-col justify-center items-center bg-gray-200">
        <div className='text-center'>
          <h1 className='text-4xl font-bold mt-8 sm:mt-0'>Our Testimonials</h1>
          <div className='w-1/5 h-[4px] mt-1 mx-auto bg-violet-400'></div>
          <Carousel >
            {
              reviews.map((review, ind) => (
                <NewCard key={review.id} review={review} />
              ))
            }
          </Carousel>

        </div>
      </div>



      <div className=' text-center font-bold py-2'>Carousel 2</div>

      {/* 2nd caraousel */}
      <div className=" w-screen min-h-screen flex flex-col justify-center items-center bg-gray-200">
        <div className='text-center'>

          <h1 className='text-4xl font-bold mt-8 sm:mt-0'>Our Testimonials</h1>
          <div className='w-1/5 h-[4px] mt-1 mx-auto bg-violet-400'></div>

          <Testimonial reviews={reviews} />
        </div>
      </div>

    </div>
  );
}

export default App;
