import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
      <button className={`px-[58px] py-[16px]   text-[14px] font-bold ${className}`}>{children}</button>
    </>
  )
}

export default Button
