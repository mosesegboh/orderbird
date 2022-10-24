import React from 'react'

export default function Layout({children}){
  return (
    <div className=" grid py-10 md:place-items-center">
      <div className="max-w-screen-md overflow-x-scroll">
        {children}
      </div>
    </div>
  )
}