import React from 'react'

export default function Button({text,onClick}) {
  return (
    <button className="py-2 px-4 hover:brightness-110 italic font-bold bg-zinc-300	border border border-black border-dashed" onClick={onClick}>{text}</button>
  )
}
