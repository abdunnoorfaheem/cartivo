import React from 'react'
import Heading from './Heading'

const CommonPages = (props) => {
  return (
    <>
      <div className="py-[125px]">
        <Heading text={props.title} tagName={"h3"} className={"text-[36px] font-bold"}/>
        <Heading text={props.description} tagName={"h4"} className={"text-[16px] font-medium text-[#767676]"}/>
      </div>
    </>
  )
}

export default CommonPages
