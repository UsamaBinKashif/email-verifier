"use client"
import Image from 'next/image';
import * as React from 'react';
import { Invoice } from './Invoice';
import Alert from './Alert';

interface VerifierProps { }

const Verifier: React.FunctionComponent<VerifierProps> = (props) => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleVerify = () => {
        if (validateEmail(email)) {
            setError('');
            // Proceed with email verification logic
            console.log("Valid email:", email);
        } else {
            setError('Please enter a valid email address');
        }
    };

    return (
        <section className='w-[447px] flex flex-col mt-[38px]'>
            <div className='flex justify-between mb-[14px]'>
                <h1 className='text-[21px] font-semibold'>Email Verifier</h1>
                <div className='bg-white flex items-center gap-x-3 w-[247px] justify-center rounded border-gray-500/20 border'>
                    <Image src="/assets/Upload.svg" width={13} height={14} alt="upload-icon" className="hidden lg:block" />
                    <h1 className='text-[13px]'>Upload a list of email addresses</h1>
                </div>
            </div>
            <div className='text-[14px] bg-white h-[46px] flex border border-gray-500/20 rounded'>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='outline-none border-none bg-transparent flex-1 px-4'
                />
                <button
                    onClick={handleVerify}
                    className='text-[15px] font-semibold w-[75px] border-gray-500/20 border-l'>
                    Verify
                </button>
            </div>
            <Alert />
            <Invoice />
        </section>
    );
};

export default Verifier;
