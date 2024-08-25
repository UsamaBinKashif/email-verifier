"use client"

import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Verifier = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

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

        <section className="flex  justify-center bg-gray-50 min-h-screen">

            <div className='w-[447px] flex flex-col mt-[38px]'>
                <div className='flex justify-between mb-[14px]'>
                    <h1 className='text-[21px] font-semibold'>Email Verifier</h1>
                    <Link href="/bulk-verify">
                        <Button variant="outline" className="text-[13px]  text-gray-900/50  flex items-center " >
                            <Download className="mr-2 h-4 w-4" /> Upload a list of email addresses
                        </Button>
                    </Link>
                </div>
                <div className='text-[14px] bg-white h-[40px] flex border border-gray-500/20 rounded'>
                    <input type="email"
                        name="email"
                        id="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none outline-0 border-0 border-none bg-transparent flex-1 px-4' />
                    <Button onClick={handleVerify}
                        className='text-[15px] font-semibold w-[75px] border-gray-500/20 border-l bg-transparent hover:bg-transparent text-black'>
                        Verify
                    </Button>
                </div>

                <Card  className="mt-[34px]">

                    <CardContent className="p-5">
                        <div className="flex flex-col justify-center  gap-2">
                            <p className="text-sm font-semibold">Quality check</p>
                        </div>
                        <div className="flex flex-col gap-3 text-semibold  py-4 text-sm">
                            <p className="flex justify-between">
                                <span >Valid format</span>
                                <span className='text-gray-500'>Yes</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Order Type:</span>
                                <span className='text-gray-500'>Yes</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Can receive email</span>
                                <span className='text-gray-500'>Yes</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 text-semibold   text-sm">
                            <p className="flex justify-between">
                                <span >Not a catch-all address</span>
                                <span className='text-gray-500'>Yes</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Not a generic address</span>
                                <span className='text-gray-500'>Yes</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Diposable address</span>
                                <span className='text-gray-500'>Yes</span>
                            </p>

                        </div>
                        <div className="flex flex-col gap-3 text-semibold py-6  text-sm border-b">
                            <p className="flex justify-between mb-5">
                                <span >Email quality score</span>
                                <span className='text-gray-500'>100%</span>
                            </p>
                            <ProgressBar value={0} />
                        </div>

                        <div className="flex flex-col justify-center pt-4 gap-2">
                            <p className="text-sm font-semibold">Attributes</p>
                        </div>
                        <div className="flex flex-col gap-3 text-semibold  py-4 text-sm">
                            <p className="flex justify-between">
                                <span >Username</span>
                                <span className='text-gray-500'>schoopilot</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Domain</span>
                                <span className='text-gray-500'>gmail.com</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Did you mean</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Is free</span>
                                <span className='text-gray-500'>Yes</span>
                            </p>
                            <p className="flex justify-between">
                                <span >Provider</span>
                                <span className='text-gray-500'>Gmail</span>
                            </p>
                            <p className="flex justify-between">
                                <span >MX record</span>
                                <span className='text-gray-500'>gmail-smtp-in.l.google.com</span>
                            </p>

                        </div>
                    </CardContent>

                </Card>
            </div>
        </section>
    )
}

export default Verifier
