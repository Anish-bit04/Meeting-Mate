import React from 'react'
import SideNavBar from './_components/SideNavBar'
import DashHeader from './_components/DashHeader'

const layout = ({children}) => {
  return (
    <div>
        <div className=' hidden md:block md:w-64 bg-slate-0 h-screen fixed '><SideNavBar/></div>
    <div
    className='md:ml-64'>
      <DashHeader/>
      {children}</div>
    </div>
  )
}

export default layout