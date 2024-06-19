import React, { useState } from 'react'

export default function UserResister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [contactNo, setContactNo] = useState('male');
    return (
        <form className='w-full flex flex-col gap-2'>
            <h2 className="text-center text-[1.5rem] font-bold text-violet-900/70">Enter your credentials</h2>

            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter yout email' className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-500/80 focus:ring-violet-700 focus:text-violet-700 bg-red-600/5 focus:bg-violet-600/10 focus:font-semibold text-green-700 placeholder:font-medium' />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-500/80 focus:ring-violet-700 focus:text-violet-700 bg-red-600/5 focus:bg-violet-600/10 focus:font-semibold text-green-700 placeholder:font-medium' />
            <div className="flex justify-between gap-2">
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='name' className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-500/80 focus:ring-violet-700 focus:text-violet-700 bg-red-600/5 focus:bg-violet-600/10 focus:font-semibold text-green-700 placeholder:font-medium flex-1' />
                <select name="" id="" value={gender} onChange={e => setGender(e.target.value)} className='py-[10px] px-3 rounded outline-none text-center ring-1 ring-red-500/80 focus:ring-violet-700 text-violet-700 bg-red-600/5 focus:bg-violet-600/10 focus:font-semibold placeholder:font-medium'>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="others">others</option>
                </select>
            </div>
            <input type="number" value={contactNo} onChange={e => setContactNo(e.target.value)} placeholder='contact number' className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-500/80 focus:ring-violet-700 focus:text-violet-700 bg-red-600/5 focus:bg-violet-600/10 focus:font-semibold text-green-700 placeholder:font-medium' />
            <input type="submit" value={'login'} className='py-2 px-6 rounded outline-none text-center ring-1 ring-red-600 focus:ring-violet-700 bg-red-800 hover:bg-red-500 active:bg-indigo-900 text-white' />
        </form>
    )
}
