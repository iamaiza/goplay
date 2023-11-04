import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdventureList = ({
    imgUrl,
    title,
    startDate,
    endDate,
    className,
    joinedAdventure,
    ended
}) => {
    const titleId = title.toLowerCase().replace(/\s+/g, '-')
    return (
        <div
            className={`tw-bg-gray-200 max-lg:tw-bg-transparent boxShadow tw-h-full tw-rounded-3xl tw-overflow-hidden max-lg:tw-p-4 tw-relative ${className}`}
        >
            <Link
                to={`/campaigns/${titleId}`}
                className="tw-flex tw-items-center tw-gap-x-10 max-lg:tw-flex-col"
            >
                <div className="max-lg:tw-w-full">
                    <figure className="tw-w-[18rem] max-lg:tw-w-full">
                        <img
                            className="tw-w-full tw-h-full tw-object-cover tw-rounded-r-3xl"
                            src={imgUrl}
                            alt=""
                        />
                    </figure>
                </div>
                <div className="max-lg:tw-w-full">
                    <h1 className="tw-text-3xl max-lg:tw-text-xl tw-mt-3">
                        {title}
                    </h1>
                    <div className="tw-flex tw-items-center tw-gap-x-5 tw-mt-5 max-lg:tw-flex-col">
                        <div className="tw-text-lg max-lg:tw-w-full max-sm:tw-text-base -tw-ml-1">
                            <span
                                className={`tw-text-[#6149cd] tw-font-bold ${
                                    joinedAdventure === true && "tw-hidden"
                                }`}
                            >
                                Start Date:{" "}
                            </span>
                            {startDate}
                        </div>
                        <div className="tw-text-lg max-lg:tw-w-full max-sm:tw-text-base">
                            <span
                                className={`tw-text-[#6149cd] tw-font-bold ${
                                    joinedAdventure === true && "tw-hidden"
                                }`}
                            >
                                End Date:{" "}
                            </span>
                            {endDate}
                        </div>
                    </div>
                    <Button
                        className={`btn-bg tw-border-none tw-text-sm tw-mt-12 tw-mb-3 max-lg:tw-mb-0 tw-py-4 tw-w-[16.5rem] max-lg:tw-w-full tw-rounded-[1.3rem] ${
                            joinedAdventure === true ? "max-lg:-tw-mt-4" : ""
                        }`}
                        style={{
                            boxShadow:
                                "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                        }}
                    >
                        Learn more
                    </Button>
                </div>
            </Link>
            {ended === true && <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-[rgba(0,0,0,0.5)] tw-rounded-3xl">
                <div className="tw-bg-black tw-w-fit tw-mx-auto tw-text-white tw-py-1.5 tw-px-4 tw-rounded-full tw-text-sm">
                    Ended in 01/04/2023
                </div>
            </div>}
        </div>
    );
};

export default AdventureList;
