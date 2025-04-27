import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'


const MainContainer = () => {

  const isOpenMenu = useSelector(store => store.app.isOpenMenu)

  return (
   <>
      <div className={`px-10 mt-24 ${ isOpenMenu? 'ms-[345px]' : 'ms-0'} max-2xl:ms-0 overflow-x-hidden`}>
        <ButtonList/>
        <VideoContainer/>
      </div>
   </>
  )
}

export default MainContainer