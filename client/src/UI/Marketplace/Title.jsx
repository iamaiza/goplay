import React from "react";
import { Link } from "react-router-dom";
import {
    ChevronDownIcon,
    GraphIcon,
    AuctionIcon,
    ArcadeIcon,
    WatchIcon,
} from "../../icons/DashboardSidebarIcons";
import "./Title.css";

const Title = ({
    title,
    isAuction,
    isAdventure,
    isArcade,
    isWatchFaces,
    prodTitle,
    link,
}) => {
    return (
        <div className="title-container tw-inline-block">
            <div className="tw-inline-block tw-align-sub">
                {isAuction && (
                    <div className="auction-icon tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-overflow-hidden tw-bg-gray-200 tw-rounded-full">
                        <AuctionIcon className="tw-w-[1.6rem] tw-h-[1.6rem] tw-fill-[#6149cd]" />
                    </div>
                )}
                {isAdventure && (
                    <GraphIcon className="tw-w-5 tw-fill-[#6149cd]" />
                )}
                {isArcade && (
                    <div className="auction-icon tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-overflow-hidden tw-bg-gray-200 tw-rounded-full">
                        <ArcadeIcon className="tw-w-[1.4rem] tw-h-[1.4rem] tw-ml-1 tw-fill-[#6149cd]" />
                    </div>
                )}
                {isWatchFaces && (
                    <div className="auction-icon tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-overflow-hidden tw-bg-gray-200 tw-rounded-full">
                        <WatchIcon className="tw-w-[1.4rem] tw-h-[1.4rem] tw-fill-[#6149cd]" />
                    </div>
                )}
            </div>
            <Link to={link} className="tw-inline-block tw-ml-3 tw-mr-3">
                <span className="title tw-text-xl max-sm:tw-text-sm">{title}</span>
            </Link>
            <div className="tw-inline-block tw-align-middle -tw-mt-[0.15rem] max-sm:tw-mt-0 max-lg:tw-align-middle">
                <ChevronDownIcon className="tw-w-4 tw-h-4 max-sm:tw-w-3 max-sm:tw-h-3 tw-stroke-black -tw-rotate-90 tw-opacity-60" />
            </div>
            <span className="tw-ml-3 title tw-text-xl max-sm:tw-text-sm tw-opacity-90 title-opacity">
                {prodTitle}
            </span>
        </div>
    );
};

export default Title;
