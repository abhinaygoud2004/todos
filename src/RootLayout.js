import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './components/sidebar/SideBar'
import './RootLayout.css'

function RootLayout() {
  return (
    <div className='row'>
      <div className="col-sm-4">
        <SideBar />
      </div>
      <div className="col-sm-8 rootlayout">
        <Outlet />
      </div>

    </div>
  )
}

export default RootLayout