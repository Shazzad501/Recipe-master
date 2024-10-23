import React from 'react';

const Navber = () => {
  return (
    <div className='w-11/12 h-[80px] mx-auto flex justify-between items-center gap-5'>
      {/* logo */}

      <div>
        <h2 className='font-bold text-3xl'>Recipe Calories</h2>
      </div>

      {/* menu items */}

      <div className='hidden md:block'>
        <ul className='flex gap-5 items-center justify-between'>
          <li className='font-bold text-lg cursor-pointer hover:bg-[#3cd462] hover:rounded-md hover:text-white hover:py-1 hover:px-2'>Home</li>
          <li className='font-bold text-lg cursor-pointer hover:bg-[#3cd462] hover:rounded-md hover:text-white hover:py-1 hover:px-2'>Recipes</li>
          <li className='font-bold text-lg cursor-pointer hover:bg-[#3cd462] hover:rounded-md hover:text-white hover:py-1 hover:px-2'>About</li>
          <li className='font-bold text-lg cursor-pointer hover:bg-[#3cd462] hover:rounded-md hover:text-white hover:py-1 hover:px-2'>Search</li>
        </ul>
      </div>

      {/* search and person */}
      <div className='flex gap-4 items-center justify-center'>
        {/* search ber */}
        <div>
          <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
          </label>
        </div>
        {/* fa-user */}
        <div className='w-9 h-9 rounded-full bg-[#3cd462] flex items-center justify-center'>
        <i className="fa-regular fa-circle-user text-xl text-red-950"></i>
        </div>
      </div>

      
    </div>
  );
};

export default Navber;