import './Banner.css'

const Banner = () => {
  return (
    <div className='banner py-28 w-11/12 mt-5 rounded-lg mx-auto text-center flex flex-col items-center justify-center'>
      <h2 className='font-extrabold text-5xl md:text-6xl text-white'>Discover an exceptional cooking <br className='hidden md:block' /> class tailored for you!</h2>
      <p className='text-xl font-semibold text-white mt-7'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br className='hidden md:block' /> problems to become an exceptionally well world-class Programmer.</p>

      <div className='flex items-center justify-center gap-8 mt-9'>
      <button className='btn bg-[#3cd462] rounded-full font-extrabold text-lg hover:bg-transparent hover:text-white '>Explor Now</button>
      <button className='btn rounded-full bg-transparent text-white font-extrabold text-lg hover:text-black hover:bg-[#3cd462]'>Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;