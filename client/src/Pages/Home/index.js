import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './navbar.css'

function Index() {
  return (
   <>
  <nav>
   <div className='nav'>
   <div><Link to = "/">Home</Link></div>
  <div><Link to = "add">Add</Link>
    </div>


   </div>
</nav>
   <Outlet/>
   </>
  )
}

export default Index

