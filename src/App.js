import './App.css';
import reviews from './data';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className=" w-screen min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className='text-center'>

        <h1 className='text-4xl font-bold mt-8 sm:mt-0'>Our Testimonials</h1>
        <div className='w-1/5 h-[4px] mt-1 mx-auto bg-violet-400'></div>

        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
