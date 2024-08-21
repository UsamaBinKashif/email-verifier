import { links } from '@/lib/data';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import UserSignOut from './Signout';

interface HeaderProps { }

const Header: React.FunctionComponent<HeaderProps> = async (props) => {
    const user = await currentUser();


    return (
        <header className="h-[66px] w-full flex justify-between items-center bg-white border-b border-gray-500/20">
            {/* Left Side: Logo and Navigation Links */}
            <div className="flex h-full items-center gap-x-5">
                {/* Logo */}
                <Link href={"/"} className="border-r border-gray-500/20 h-full p-5 flex items-center">
                    <Image src="/assets/logo.png" width={28} height={28} alt="logo" />
                </Link>

                {/* Navigation Links */}
                <nav className="flex gap-x-6">
                    {links.map((link) => (
                        <Link href={link.pathname} key={link.name} className="flex gap-x-2 text-[#4C555E] cursor-pointer items-center">
                            <Image src={link.icon} width={20} height={20} alt={link.name} className="hidden lg:block" />
                            <h3 className=" text-[10px] lg:text-[14px]">{link.name}</h3>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Right Side: Icons and User Info */}
            <div className="flex items-center">
                {/* Notification and Container Icons */}
                <div className="border-r border-gray-500/20 flex items-center gap-x-3 p-5">
                    <Image src="/assets/Container.svg" width={17} height={18} alt="container icon" />
                    <Image src="/assets/Bell.svg" width={16} height={18} alt="notification icon" />
                </div>

                {/* User Info */}
                <div className="px-5 flex gap-x-3 items-center">
                    <span className="inline-flex items-center justify-center w-[36px] h-[36px] rounded-full bg-blue-500 text-xs font-semibold text-white">
                        {user?.firstName?.[0]} {user?.lastName?.[0]}
                    </span>
                    <div className="text-[13px] hidden lg:block">
                        <h2>
                            {user?.firstName} {user?.lastName?.[0]}
                        </h2>
                        <p className="text-[#4C555E]">Free plan</p>
                    </div>
                    <UserSignOut />
                </div>
            </div>
        </header>
    );
};

export default Header;
