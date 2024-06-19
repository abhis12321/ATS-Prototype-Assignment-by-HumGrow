"use client"
import React from 'react'
import UserLogin from '../_components/UserLogin'
import UserResister from '../_components/UserResister'

export default function page() {
  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center'>
      <div className="w-full max-w-[500px] flex gap-2 flex-col items-center justify-center p-8 shadow-[0_0_2px_red] rounded-lg bg-indigo-50">
        {/* <UserLogin /> */}
        <UserResister />
        <div className="w-full flex gap-4 justify-between text-sm text-blue-900 underline cursor-pointer">
            <div className="hover:text-blue-600">new user register</div>
            <div className="hover:text-blue-600">forgot password</div>
        </div>
      </div>
    </div>
  )
}
