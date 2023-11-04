import React from "react";
import { ExclaimationIcon } from "../../../icons/DashboardBodyIcons";

const WatchFaceDesc = ({ watchList }) => {
    return (
        <div className="tw-mt-10">
            <div className="tw-text-[2rem] max-sm:tw-text-2xl">Watch faces description</div>
            <div className="tw-mt-4 tw-text-sm">{watchList.description}</div>
            <div className="tw-flex tw-items-start tw-gap-x-4 max-[500px]:tw-gap-x-1 tw-bg-[#f5f32f] tw-py-4 tw-px-2 tw-rounded-lg tw-mt-6">
                <ExclaimationIcon className="tw-w-11 max-[500px]:tw-w-16 max-[350px]:tw-w-20 tw-rotate-180" />
                <div className="tw-text-xs">
                    Please note: We are continuously updating our watch face
                    designs using the latest tools. From time to time you may
                    see slight variations and updates.
                </div>
            </div>
            <button className="btn-bg tw-py-4 tw-px-2 tw-w-56 tw-rounded-2xl tw-text-white tw-text-sm tw-mt-8 max-sm:tw-hidden">
                Get
            </button>
        </div>
    );
};

export default WatchFaceDesc;
