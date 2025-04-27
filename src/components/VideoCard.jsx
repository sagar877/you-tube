import React from 'react'
import { useState } from 'react';

const VideoCard = ({info}) => {

  const {snippet , statistics} = info;
  const {channelTitle , thumbnails , title } = snippet;

  return (
  <>
  <div>
      <div className='w-70 min-h-72 text-sm border p-5 border-transparent rounded-lg shadow-2xl aspect-square'>
        <img src={thumbnails.standard.url}/>
        <ul className='text-left'>
          <li className='font-bold mt-1'>{title.substring(0,20)}</li>
          <li className='mt-1 text-xs'>{channelTitle}</li>
          <li className='text-xs mt-[2px]'>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
   </>
  )
}

export default VideoCard