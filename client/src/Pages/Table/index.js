import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from '../Add'

function Index() {


    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/products")
        .then(res => setData(res.data))

    },[])

    console.log(data);

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:8080/products/${id}`)
       const deleteItem = data.filter(x=>x._id!==id)
       setData(deleteItem)

    }



  return (
    <div className='container'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
         
            <TableCell>Name</TableCell>
            <TableCell >Id</TableCell>
            <TableCell>Price</TableCell>
            <TableCell >Count</TableCell>
            <TableCell >Edit</TableCell>
            <TableCell >Delete</TableCell>
            <TableCell >View</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          { data.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell >{row.name}</TableCell>
              <TableCell >{row._id}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell >{row.count}</TableCell>
              <TableCell ><button className='btn btn-primary'>Edit</button></TableCell>
              <TableCell ><button className='btn btn-danger' onClick={()=>{handleDelete(row._id) }}>Delete</button></TableCell>
              <TableCell ><button className='btn btn-primary'>Go to details</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Addproduct data={data} setData={setData}/>
    </div>
  )
}

export default Index