import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Webcam from 'react-webcam'

function Camera() {
  const [data, setData]=useState([])
  useEffect =async ()=>{
    const result=await axios.get("http://localhost:8080/featchalluser")
    console.log(result.data)
  }
  console.log(data)
  return (
    <div>
        
        Camera
        <div>
            <Webcam />
        </div>

    </div>
  )
}

export default Camera