/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import ProgressBar from './ProgressBar';

export interface InvoiceProps {
}

export function Invoice(props: InvoiceProps) {
    return (
        <div>
            <div className="flex mb-[14px] w-full items-center justify-center ">
                <div className="w-full rounded bg-white px-6 pt-8 shadow-lg">
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
                </div>
            </div>
        </div>
    );
}
