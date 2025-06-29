"use client"

import RootLayout from '@/app/layout'
import Flow from '@/components/reactFlow'

export default function ReactFlow() {
    return (
        <RootLayout>
            <div className='w-full h-[90dvh]'>
                <Flow />
            </div>
        </RootLayout>
    )
}
