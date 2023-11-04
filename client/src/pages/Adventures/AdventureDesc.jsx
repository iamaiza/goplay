import React from "react";
import { HandThumbsUpIcon } from "../../icons/DashboardBodyIcons";
const AdventureDesc = ({ adventure }) => {
    return (
        <>
            <div className="tw-border-b tw-pb-10 max-lg:tw-hidden">
                <div className="tw-text-[2.8rem] max-lg:tw-hidden">{adventure.title}</div>
                <div className="tw-flex tw-gap-x-4 max-[1285px]:tw-gap-x-28 tw-mt-7">
                    <div className="tw-text-xl">
                        <span className="tw-text-[#6149cd] tw-font-semibold">
                            Start Date:{" "}
                        </span>
                        <span className="max-[1285px]:tw-block">
                            {adventure.startDate}
                        </span>
                    </div>
                    <div className="tw-text-xl">
                        <span className="tw-text-[#6149cd] tw-font-semibold">
                            End Date:{" "}
                        </span>
                        <span className="max-[1285px]:tw-block">
                            {adventure.endDate}
                        </span>
                    </div>
                </div>

                <div className="tw-mt-9 max-lg:tw-hidden">
                    <HandThumbsUpIcon className='tw-w-8 tw-h-8' />
                    <div className="text-secondary">
                        {adventure.likes}
                    </div>
                </div>
            </div>
            <div className="tw-mt-12 tw-border-b tw-pb-10 max-lg:tw-hidden">
                <div className="tw-text-[2.1rem]">Adventure Description</div>
                <div className="tw-mt-5 tw-text-xl tw-tracking-wide tw-opacity-90 tw-leading-normal">
                    {adventure.description}
                </div>
                <button
                    className="btn-bg tw-mt-5 tw-py-4 tw-w-44 tw-rounded-[1.3rem] tw-text-sm tw-text-white max-lg:tw-hidden"
                    style={{
                        boxShadow:
                            "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                    }}
                >
                    {adventure.title === 'Ocean Life' ? "Join Now" : "Finished"}
                </button>
            </div>
        </>
    );
};

export default AdventureDesc;
