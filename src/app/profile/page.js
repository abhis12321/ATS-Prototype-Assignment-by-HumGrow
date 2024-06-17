"use client"
import React from 'react'
import UserLogin from '../_components/UserLogin'

export default function page() {
  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center'>
      <div className="w-full max-w-[500px] flex flex-col items-center justify-center p-8 shadow-[0_0_5px_green] focus-within:shadow-[0_0_5px_violet] rounded-md bg-blue-50">
        <UserLogin />
      </div>
    </div>
  )
}
