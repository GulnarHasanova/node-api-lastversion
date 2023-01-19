import React from 'react'
import {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Addproduct from "../Add"


function Index({data,setData}) {
  const[name,setName]=useState("")
  const[price,setPrice]=useState(0)
  const[count,setCount]=useState(0)
  const navigate = useNavigate();
  

  const addData = (e)=>{
    e.preventDefault()
    if(name.trim()==='' || price.trim===0|| count.trim===0){
      alert("inputlar bosdur")
    }

else{
    let proObj={
      name,price,count
      
    }
    axios.post("http://localhost:8080/products",proObj)
    setData([...data,proObj])
  }
   
  }
    


  return (
    <>
   <form  onSubmit={(e)=>{addData(e)}}>
  
    <input placeholder='name'  onChange={(e)=>{setName(e.target.value)}} value={name}/>
    <br/>
    <input placeholder='price'type={'number'} value={price} onChange={(e)=>{setPrice(e.target.value)}}/> 
    <br/>
    <input placeholder='count'type={'number'} value={count} onChange={(e)=>{setCount(e.target.value)}}/> 
    <br/>
    <button className='btn btn-primary' >Add</button>
    
   </form>
   <br/>
   <button className='btn btn-success'  onClick={()=> navigate(-1)}>Back</button>

  
   </>
 
  )
}

export default Index