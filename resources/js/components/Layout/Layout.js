import React from 'react'

export default function Layout({children}){
  return (
    <div className="grid h-screen place-items-center">
      {children}
    </div>
  )
}