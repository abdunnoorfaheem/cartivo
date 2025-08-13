import React from 'react'

const Heading = (props) => {
  return (
    <>
      <props.tagName className={`${props.className}`}>{props.text}</props.tagName>
    </>
  )
}

export default Heading
