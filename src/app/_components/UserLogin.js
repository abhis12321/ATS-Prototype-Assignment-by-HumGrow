import React, { useState } from 'react'

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className='w-full flex flex-col gap-2'>
      <h2 className="text-center text-2xl font-bold text-violet-900/70 pb-2">Enter your credentials</h2>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter yout email' className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-500/80 focus:ring-violet-700 focus:text-violet-700 bg-red-600/5 focus:bg-violet-600/10 focus:font-semibold text-green-700 placeholder:font-medium' />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-500/80 focus:ring-violet-700 focus:text-violet-700 bg-red-600/5 focus:bg-violet-600/10 focus:font-semibold text-green-700 placeholder:font-medium' />
      <input type="submit" value={'login'} className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-600 focus:ring-violet-700 bg-red-800 hover:bg-red-500 active:bg-indigo-900 text-white' />
    </form>
  )
}
