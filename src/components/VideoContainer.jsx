import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';
import { YOU_TUBE_API } from '../utils/Constant';

const VideoContainer = () => {

  const[videos , setVideos] = useState([]);

  useEffect(() => {   
    getVideos();
  },[]);

  const getVideos = async () => {
      const response = await fetch(YOU_TUBE_API);
      const json = await response.json();
      setVideos(json.items);
  }

  return (
  <>
    <div className='w-full gap-x-3 grid xl:grid-cols-4 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-5'>
      {videos.map( video => 
      <Link to ={`/watch?v=${video.id}`} key={video.id}><VideoCard  info={video} /></Link>)}
    </div>
  </>
  )
}

export default VideoContainer