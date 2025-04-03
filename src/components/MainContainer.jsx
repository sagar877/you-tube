import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'


const MainContainer = () => {

  const isOpenMenu = useSelector(store => store.app.isOpenMenu)

  return (
   <>
      <div className={`p-10 ${ isOpenMenu? 'ms-80' : 'ms-0'}`}>
        <ButtonList/>
        <VideoContainer/>
      </div>
   </>
  )
}

export default MainContainer