import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='h-16 w-full flex items-center shadow-md justify-between px-8'>
            <Link href='/'>
                Logo
            </Link>
            <div className='flex items-center justify-end gap-4'>
                <Link href='/reactFlow' className='hover:underline'>
                    React Flow
                </Link>
                <p>-</p>
                <Link href='/customeReactFlow' className='hover:underline'>
                    Custome React Flow
                </Link>
                <p>-</p>
                <Link href='/createNodes' className='hover:underline'>
                    Create Nodes
                </Link>
            </div>
        </nav>
    )
}
