import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
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
    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3'>
      {videos.length > 0 && <VideoCard info={videos[1]} />}
    </div>
  </>
  )
}

export default VideoContainer