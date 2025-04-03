import React from 'react'

const VideoCard = ({info}) => {

  const {snippet , statistics} = info;
  const {channelTitle , thumbnails , title } = snippet;
  return (
  <>
  <div className='mt-10'>
      <div className='w-72 text-sm'>
        <img src={thumbnails.medium.url}/>
        <ul className='text-left'>
          <li className='font-bold mt-1'>{title}</li>
          <li className='mt-1 text-xs'>{channelTitle}</li>
          <li className='text-xs mt-[2px]'>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
   </>
  )
}

export default VideoCard