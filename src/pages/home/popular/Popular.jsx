import React, { useState } from 'react'
import Contentwrapper from '../../../components/contentwrapper/Contentwrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import UseFetch from '../../../components/hooks/UseFetch'
import Carousel from '../../../components/carousel/Carousel'
const Popular = () => {

    const [endpoint, setEndpoint]=useState("movie");
    const {data, loading}= UseFetch(`/${endpoint}/popular`);

    const onTabChange=(tab)=>{
    setEndpoint(tab==='Movies' ? 'movie' :"tv");
    }
  return (
    <div className="carouselSection">
        <Contentwrapper>
            <span className='carouselTitle'>What's Popular</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange} />
        </Contentwrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
      
    </div>
  )
}

export default Popular
