import React, { Children } from 'react'
import SideBar from './Dashboard/SideBar'

function Layout({children}) {
  return (
    <>
    <SideBar/>
   <div className='ms-1'> {children }</div>
    </>
  )
}

export default Layout