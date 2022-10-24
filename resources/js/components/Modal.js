import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const {trigger,children,setTrigger} = props

  return(
    (trigger) ? (
      <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center">
        <div className=" ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={4.5}
            stroke="currentColor"
            className="w-7 h-7"
            onClick={()=>setTrigger(false)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          {children}
        </div>
      </div>
    ) : null
  )
}

export default Modal;