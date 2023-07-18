import React from 'react'



export default function Button({text,onClick}) {
  return (
    <button className="py-2 px-4 underline underline-offset-8 italic font-bold" onClick={onClick}>{text}</button>
  )
}
