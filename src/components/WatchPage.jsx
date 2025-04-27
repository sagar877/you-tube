import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSelector } from 'react-redux';
import {useSearchParams} from 'react-router-dom'

const WatchPage = () => {

    const isOpenMenu = useSelector(store => store.app.isOpenMenu)
    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    },[]);

    return (
        <div className={`px-10 mt-24 ${ isOpenMenu? 'ms-[345px]' : 'ms-0'}`}>
          <iframe width="800" height="400" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" ></iframe>
        </div>
    )
};

export default WatchPage;