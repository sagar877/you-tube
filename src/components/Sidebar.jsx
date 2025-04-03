import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

const isMenuOpen = useSelector(store => store.app.isOpenMenu);


  return !isMenuOpen ? null : (
	<>
    	<div className="w-80 fixed left-0 bg-white h-[93vh] pt-5 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-sm">

            <a href="#" className="tracking-tight text-black">
                <div className="pl-8 py-3 active flex items-center">
                    <i className="fas fa-home mr-4 text-red"></i>
                    <span>Home</span>
                </div>
            </a>
            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 flex items-center menu-item">
                    <i className="fas fa-fire mr-4 text-aside"></i>
                    <span>Trending</span>
                </div>
            </a>
            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 flex items-center menu-item">
                    <i className="fas fa-history mr-4 text-aside"></i>
                    <span>History</span>
                </div>
            </a>

            <div className="border-b border-grey-light border-solid py-1"></div>
        

            <div className="uppercase text-aside text-sm font-semibold py-3 pl-8">best of youtube</div>


            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item  flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/movies.jpg?raw=true" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>Music</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item  flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/sports.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>Sports</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item  flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/gaming.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>Gaming</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/movies.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>Movies</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/movies.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>TV Shows</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/news.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>News</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/live.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>Live</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium ">
                <div className="pl-8 py-3 menu-item flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/spotlight.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>SpotLight</span>
                </div>
            </a>

            <a href="#" className="tracking-tight text-black font-medium">
                <div className="pl-8 py-3 menu-item flex items-center">
                    <img src="https://raw.githubusercontent.com/diaz-L/youtube-clone/master/images/music.jpg" alt="music" className="rounded-full h-5 w-5 mr-4"/>
                    <span>360&deg; Video</span>
                </div>
            </a>
        </div>
	</>
  )
}

export default Sidebar