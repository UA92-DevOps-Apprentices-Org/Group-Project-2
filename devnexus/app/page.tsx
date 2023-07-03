'use client'
import * as React from "react"

export default function Home() {
  
  const [data, setData] = React.useState("");
  

  return (
    <>
    <textarea onChange={(e) => {setData(e.target.value)}} style={{color: "red"}}></textarea>
    <p>{data}</p>
    </>
  )
}

// JSX = JavaScript Extended

