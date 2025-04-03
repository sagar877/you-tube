import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

	const dispatch = useDispatch();

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	}

  return (
   <>
    	<nav className="flex p-5 py-3 shadow-xl fixed top-0 z-50 bg-white  justify-between w-screen items-center">

			<ul className="flex space-x-2 sm:space-x-6">
				<li onClick={() => toggleMenuHandler()} className='cursor-pointer'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" className="w-6 h-6 text-black">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>


				</li>

				<li className="flex space-x-1">
					<img className="w-9 h-6 "
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"/><span
						className="font-bold text-white hidden md:block">YouTube</span>
				</li>
			</ul>
			<ul className="flex space-x-5">
				<li className="relative">
					<input type="box" className="bg-transparent border border-gray-700 rounded-full w-[200px] p-2 sm:w-[300px] lg:w-[500px] focus:outline-none"
						placeholder="Search"/>


					<span
						className="absolute right-0 top-1/2 transform -translate-y-1/2  w-14 h-10 rounded-r-full flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" className="w-4 h-5 text-black">
							<path stroke-linecap="round" stroke-linejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
						</svg>
					</span>
				</li>


				<li className="flex items-center border rounded-full w-11 justify-center hover:bg-[#474747]">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						stroke="currentColor" className="w-4 h-5 text-black">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
					</svg>

				</li>
			</ul>
			<ul className="flex space-x-7">
				<li>
					<svg className="w-6 h-6 text-gray-800 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
						fill="none" viewBox="0 0 20 14">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm7 11-6-2V4l6-2v10Z" />
					</svg>

				</li>
				<li>
					<svg className="w-6 h-6 text-gray-800 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
						fill="none" viewBox="0 0 16 21">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z" />
					</svg>
				</li>
				<li>
					<svg className="w-6 h-6 text-gray-800 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
						fill="none" viewBox="0 0 20 20">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
					</svg>
				</li>
			</ul>
		</nav>
   </>
  )
}

export default Head