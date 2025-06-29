import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='h-16 w-full flex items-center shadow-md justify-between px-8'>
            <Link href='/'>
                Logo
            </Link>
            <Link href='/reactFlow' className='hover:underline'>
                React flow
            </Link>
        </nav>
    )
}
