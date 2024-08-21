import Image from 'next/image';
import * as React from 'react';

interface BulkVerifierProps {
}

const BulkVerifier: React.FunctionComponent<BulkVerifierProps> = (props) => {
    return (

        <section className='w-[968px] bg-white p-10 rounded border mt-[38px]'>
            <div className='flex justify-between mb-[25px]'>
                <div className='flex gap-x-4 text-black'>
                    <div>
                        <Image src="/assets/Go-Back.svg" width={32} height={32} alt="dropdown arrow" />
                    </div>
                    <h1 className='text-[20px]'>Bulk Email Verifier </h1>
                </div>
                <div>
                    <button type="button" className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        + New Bulk
                    </button>
                </div>
            </div>
            <div className='flex justify-between'>

                <div className='border w-[116px]  justify-between text-center h-[30px] text-[12px] flex rounded mb-[25px]'>
                    <button className='p-2 bg-white mx-auto '>All</button>
                    <button className='p-2 bg-gray-500/20 '>Archived</button>
                </div>
                <div className='w-[232px] border text-[13px] flex h-[36px] rounded'>
                    <input type="text" placeholder='Search a bulk task…' className='w-[196px] flex-1 px-2 border-none outline-none'/>
                    <Image src="/assets/Search.svg" width={24} height={24} alt="dropdown arrow" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className=" overflow-x-auto pb-4">
                    <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden   rounded-lg ">
                            <table className="table-auto min-w-full rounded-xl">
                                <thead className=''>
                                    <tr className="bg-gray-50 min-w-full border-b-2">
                                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-500/70 capitalize"> Bulk </th>
                                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-500/70 capitalize"> Status </th>
                                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize flex gap-x-3">Created  <Image src="/assets/Arrow-Down.svg" width={10} height={10} alt="dropdown arrow" /> </th>
                                        <th scope="col" className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">  </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300 ">
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Louis Vuitton</td>

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                            <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex justify-center w-20 items-center gap-1">
                                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="3" r="2.5" fill="#059669"></circle>
                                                </svg>
                                                <span className="font-medium text-xs text-emerald-600 ">Active</span>
                                            </div>
                                        </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Jun. 24, 2023 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">

                                            <Image src="/assets/Arrow.svg" width={17} height={18} alt="dropdown arrow" className='-rotate-90' />

                                        </td>
                                    </tr>
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Apple </td>

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                            <div className="py-1.5 px-2.5 bg-red-50 rounded-full flex w-20 justify-center items-center gap-1">
                                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="3" r="2.5" fill="#DC2626"></circle>
                                                </svg>
                                                <span className="font-medium text-xs text-red-600 ">Cancel</span>
                                            </div>
                                        </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Feb. 23, 2023 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                                            <Image src="/assets/Arrow.svg" width={17} height={18} alt="dropdown arrow" className='-rotate-90' />
                                        </td>
                                    </tr>
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Johnson </td>

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                            <div className="py-1.5 px-2.5 bg-amber-50 rounded-full flex items-center justify-center w-20 gap-1">
                                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="3" r="2.5" fill="#D97706"></circle>
                                                </svg>
                                                <span className="font-medium text-xs text-amber-600 ">Pending</span>
                                            </div>
                                        </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Oct. 23, 2023 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                                            <Image src="/assets/Arrow.svg" width={17} height={18} alt="dropdown arrow" className='-rotate-90' />
                                        </td>
                                    </tr>
                                    <tr className="bg-white transition-all duration-500 hover:bg-gray-50">

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 "> Starbucks</td>

                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                            <div className="py-1.5 px-2.5 bg-red-50 rounded-full flex items-center w-20 justify-center gap-1">
                                                <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="2.5" cy="3" r="2.5" fill="#0099"></circle>
                                                </svg>
                                                <span className="font-medium text-xs text-blue-900 ">Processing</span>
                                            </div>
                                        </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900"> Jul. 12, 2023 </td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900 ">
                                            <Image src="/assets/Arrow.svg" width={17} height={18} alt="dropdown arrow" className='-rotate-90' />
                                        </td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BulkVerifier;
