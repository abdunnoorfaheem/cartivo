import React from 'react'

const Badge = ({className,badgeText}) => {
  return (
    <>
      <div className={`px-[32px] py-[9px] w-[92px] bg-black text-white ${className}`}>{badgeText}</div>
    </>
  )
}

export default Badge
