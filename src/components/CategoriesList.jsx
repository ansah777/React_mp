import React, { useState, useEffect } from 'react'
import { getCategories } from '../services/allApis'
import { deleteCategory} from '../services/allApis';
import { toast } from 'react-toastify';




function CategoriesList({status}) {

  const [deleteCategory,setDelCat]=useState({})
  const [cat, setCat] = useState([])


  useEffect(() => {
    getCat()
  }, [status,delCat])

  const getCat = async () => {
    const res = await getCategories()
    console.log(res.data)
    setCat(res.data)
   
  }


  const handleDelete=async(id)=>{
    console.log(id)
    const res=await deleteCategories(id)
    console.log(res)
    if(res.status>=200 && res.status<300){
        toast.success(" Category Deleted successfully!!")
        setDelCat(res)

    }
    else{
        toast.error("Category Deleted Failed")
    }
}

 const handleDrop=(e,id)=>{
  console.log("category id:"+id)
  const vid=e.datatransfer.getData("videoId")
  console.log("dropped video id:"+vid)
  let category=cat.find(item=>item.id==id)
  console.log(category)
 }

 const handleOnDrogOver=(e)=>{
  e.preventDefault()
  console.log("Dragging Over category")
 }
   return (
    <>
      <div className='border border-light  p-3 mt-3'>
       {
        cat?
        cat.map(item=>(
          <div className='bg-primary mb-3 p-3 rounded shadow'>
            <span>{item.name}</span>
            <i className="fa-solid fa-trash float-end" onClick={()=>{handleDelete(item.id)}} style={{color:'#fd0000'}}></i>

            </div> 
        ))
        :
        <h1>No Categories</h1>
        }

      </div>
    </>
  )
}



export default CategoriesList