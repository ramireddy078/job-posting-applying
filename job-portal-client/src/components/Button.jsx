import React from 'react'

const Button = ({onClickHandler,value,title}) => {
  return (
    <div>
      <button onClick={onClickHandler} value={value} 
              className={`px-4 py-1 border text-base rounded-md hover:bg-blue hover:text-white `}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
