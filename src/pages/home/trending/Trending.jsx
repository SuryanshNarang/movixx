import React, { useState } from 'react'
import Contentwrapper from '../../../components/contentwrapper/Contentwrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import UseFetch from '../../../components/hooks/UseFetch'
import Carousel from '../../../components/carousel/Carousel'
const Trending = () => {

    const [endpoint, setEndpoint]=useState("day");
    const {data, loading}= UseFetch(`/trending/movie/${endpoint}`);

    const onTabChange=(tab)=>{
    setEndpoint(tab==='Day' ? 'day' :"week");
    }
  return (
    <div className="carouselSection">
        <Contentwrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange} />
        </Contentwrapper>
        <Carousel data={data?.results} loading={loading}/>
      
    </div>
  )
}

export default Trending
