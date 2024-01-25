import Link from 'next/link'
import React from 'react'


export default function NavBar() {
  return (
    <div className=' flex w-full h-16 mx-auto pd-3 justify-between items-center bg-indigo-700'>
        <div className='px-3 text-black font-semibold text-lg '>
            <Link href={'/'}>Learn Next.js 13</Link>
        </div>
        <div className=' md:bg-black md:text-slate-300 md:px-2 md:py-1 md:rounded-xl'>
            <ul className='hidden  md:flex space-x-3  '>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
        </div>
        <div className='bg-indigo-900 px-2 mx-3 rounded-lg py-1 text-sm md:text-lg font-semibold text-white'>
            Login/Signup
        </div>
      
    </div>
  )
}
