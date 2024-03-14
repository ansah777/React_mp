import React,{useState,useEffect} from 'react'
import VideoCard from './Videocard'
import { getVideos } from '../services/allApis'
function Videos() {

  const [allVideos,setAllVideos]=useState([])
  const [delStatus,setDelStatus]=useState({})
  


useEffect(()=>{
  getdata()
},[addStatus,delStatus]);


  const getdata=async()=>{
    const res= await getVideos()
    console.log(res.data);

    setAllVideos(res.data)

    // console.log(allVideos);

  }

  return (
    <div className='bg-light border border-3 border-dark p-5 mt-5'>

      {
        allVideos?
        allVideos.map(item=>(
          <VideoCard key={item.id} video={item} setDelStatus={setDelStatus}/>
        ))
:
        <h1>No Videos</h1>
        }
        
    </div>

  )
}

export default Videos