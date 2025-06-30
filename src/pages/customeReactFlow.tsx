import RootLayout from '@/app/layout'
import CustomeFlow from '@/components/customeReactFlow'
import React from 'react'

export default function CustomeReactFlow() {
    return (
        <RootLayout>
            <div className='w-full h-[90dvh]'>
                <CustomeFlow />
            </div>
        </RootLayout>
    )
}
