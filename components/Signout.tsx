"use client"
import { SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';
import * as React from 'react';

interface UserSignOutProps {
}

const UserSignOut: React.FunctionComponent<UserSignOutProps> = (props) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div className='relative cursor-pointer'>
            <Image src="/assets/Arrow.svg" width={17} height={18} alt="dropdown arrow" onClick={() => setOpen(!open)} />
            {open && (
                <div className='bg-white w-20 h-10 p-2 absolute right-3 text-[14px] flex items-center justify-center rounded'>
                    <SignOutButton />
                </div>)}
        </div>
    )
};

export default UserSignOut;
