"use client"
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/bg-2.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            {" still "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {"working "}
              {" "}
            </span>
            on that
          </h1>
          </div>

    </div>
  )
}

export default Page