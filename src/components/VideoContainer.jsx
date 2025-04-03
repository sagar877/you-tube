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
    <div className='gap-x-3 gap-y-0 flex-wrap justify-center grid xl:grid-cols-5'>
      {videos.map( video => <VideoCard key={video.id} info={video} />)}
    </div>
  </>
  )
}

export default VideoContainer