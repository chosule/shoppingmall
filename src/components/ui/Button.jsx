import React from 'react'

export default function Button({text,onClick}) {
  return (
    <button className="py-2 px-4 rounded- hover:brightness-110 italic font-bold" onClick={onClick}>{text}</button>
  )
}
