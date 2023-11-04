import React from "react";
import {
    ExclaimationIcon,
} from "../../icons/DashboardBodyIcons";
import {
    DashboardHeader,
    DashboardSidebar,
    DashboardGridCol1,
    DashboardGridCol2,
} from "../imports";
import { Row } from 'react-bootstrap'
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="">
            <DashboardHeader />
            <div className="tw-flex">
                <DashboardSidebar className='tw-h-screen tw-px-3 max-xl:tw-hidden' position='tw-right-0 tw-top-0' />

                <div className="tw-pt-28 max-xl:tw-pt-20 max-sm:tw-pt-[6.2rem] tw-px-12 max-sm:tw-px-7 tw-w-full tw-max-h-screen tw-h-full tw-overflow-y-auto tw-pb-[26%] max-sm:tw-pb-[63%]">
                    <div className="tw-flex tw-items-start">
                        <h1 className="tw-text-2xl tw-text-gray-400 -tw-ml-2 max-sm:tw-text-xl">
                            Hello Sameed test, welcome!
                        </h1>
                        <div className="tw-rotate-180 -tw-mt-1 max-sm:tw-mt-0 tw-ml-1">
                            <ExclaimationIcon className='tw-w-8 tw-h-8 tw-fill-black tw-text-white max-sm:tw-w-6 max-sm:tw-h-6' />
                        </div>
                    </div>

                    <Row className="tw-gap-x-5 max-lg:tw-flex-col-reverse">
                        <DashboardGridCol1 />
                        <DashboardGridCol2 />
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
