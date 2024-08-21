/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

interface AlertProps {
    success?: boolean
}

const Alert: React.FunctionComponent<AlertProps> = (props) => {
    return (
        <div className="bg-green-100 border border-gray-500/20 mt-[14px] text rounded-t p-4 " role="alert" aria-labelledby="hs-actions-label">
            <div className="flex flex-col items-start">

                <div className="font-semibold mb-3 text-[11px] text-green-800 bg-green-300 w-[76] h-[16px]  border rounded-full p-[4px] flex items-center justify-center  border-green-400">
                    Deliverable
                </div>
                <div>
                    <h1 className='font-semibold my-1'>
                        This address accepts email
                    </h1>
                    <div className=" text-sm text-gray-500/80">
                    The recipient's email server has confirmed its deliverability.
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Alert;
