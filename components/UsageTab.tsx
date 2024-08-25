/* eslint-disable react/no-unescaped-entities */
"use client"
import { SetStateAction, useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { DetailsChart } from './DetailsChart';
import { RequestTable } from './RequestTable';

const UsageTab = () => {
    const [activeTab, setActiveTab] = useState('tabs-with-underline-1');

    const handleTabClick = (tabId: SetStateAction<string>) => {
        setActiveTab(tabId);
    };

    return (
        <section className='bg-gray-50 p-[34px]  min-h-screen min-w-screen'>
            <div className='text-2xl font-semibold '>Usage</div>
            <div className="border-b border-gray-50">
                <nav className="flex gap-x-10" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    <button
                        type="button"
                        className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === 'tabs-with-underline-1' ? 'font-semibold border-blue-600 text-blue-600' : ''}`}
                        id="tabs-with-underline-item-1"
                        aria-selected={activeTab === 'tabs-with-underline-1'}
                        onClick={() => handleTabClick('tabs-with-underline-1')}
                        aria-controls="tabs-with-underline-1"
                        role="tab"
                    >
                        Overview
                    </button>
                    <button
                        type="button"
                        className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === 'tabs-with-underline-2' ? 'font-semibold border-blue-600 text-blue-600' : ''}`}
                        id="tabs-with-underline-item-2"
                        aria-selected={activeTab === 'tabs-with-underline-2'}
                        onClick={() => handleTabClick('tabs-with-underline-2')}
                        aria-controls="tabs-with-underline-2"
                        role="tab"
                    >
                        Details
                    </button>
                    <button
                        type="button"
                        className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 ${activeTab === 'tabs-with-underline-3' ? 'font-semibold border-blue-600 text-blue-600' : ''}`}
                        id="tabs-with-underline-item-3"
                        aria-selected={activeTab === 'tabs-with-underline-3'}
                        onClick={() => handleTabClick('tabs-with-underline-3')}
                        aria-controls="tabs-with-underline-3"
                        role="tab"
                    >
                        Request History
                    </button>
                </nav>
            </div>

            <div className="mt-3">
                <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1" className={`${activeTab === 'tabs-with-underline-1' ? '' : 'hidden'}`}>
                    <div className='my-5'>
                        <h1>Team usage this month</h1>
                        <p className="text-gray-500 dark:text-neutral-400 text-[14px]">
                            Next credits renewal date: Sep 20, 2024 at 03:02 PM (Islamabad time)
                        </p>
                    </div>

                    <div className='w-full bg-white rounded flex gap-y-2 flex-col border p-10 text-gray-500 dark:text-neutral-400 text-[14px]'>
                        <div >
                            <div className='flex justify-between'><h3>Verifications</h3> <h3>0/23</h3></div>
                        </div>
                        <div>
                            <Progress value={33} />
                        </div>
                    </div>
                </div>


                <div id="tabs-with-underline-2" role="tabpanel" aria-labelledby="tabs-with-underline-item-2" className={`${activeTab === 'tabs-with-underline-2' ? '' : 'hidden'}`}>
                    <DetailsChart />
                </div>
                <div id="tabs-with-underline-3" role="tabpanel" aria-labelledby="tabs-with-underline-item-3" className={`${activeTab === 'tabs-with-underline-3' ? '' : 'hidden'}`}>
                    <RequestTable />
                </div>
            </div>
        </section>
    );
}

export default UsageTab;
