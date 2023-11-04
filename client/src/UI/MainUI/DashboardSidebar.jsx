import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    ArcadeIcon,
    AuctionIcon,
    ChevronDownIcon,
    GraphIcon,
    MarketPlaceIcon,
    MusicIcon,
    SquaresIcon,
    WatchIcon,
} from "../../icons/DashboardSidebarIcons";
import "./DashboardSidebar.css";

const DashboardSidebar = ({ className, position }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const getActiveLink = (pathname) => {
        if (pathname === "/dashboard") {
            return "/dashboard";
        } else if (pathname === "/campaigns") {
            return "/campaigns";
        } else if (pathname === "/marketplace") {
            return "/marketplace";
        } else if (pathname === "/auction") {
            return "/auction";
        } else if (pathname === "/arcade") {
            return "/arcade";
        } else if (pathname === "/watch-faces") {
            return "/watch-faces";
        } else if (pathname === "/watch-ringtones") {
            return "/watch-ringtones";
        } else {
            return `/${pathname && pathname.split("/")[1]}`;
        }
    };
    const [activeLink, setActiveLink] = useState(getActiveLink(currentPath));

    useEffect(() => {
        const path = getActiveLink(currentPath);
        setActiveLink(path);
    }, [currentPath]);

    const classes =
        "tw-flex tw-items-center tw-gap-x-3 tw-text-base tw-py-3 tw-px-4 tw-rounded-full tw-text-gray-400";
    const handleClick = () => {
        const marketplaceOptions = document.querySelectorAll(
            ".marketplace-option"
        );
        const angleStroke = document.querySelectorAll(".angle-stroke");

        marketplaceOptions.forEach((el) => {
            el.classList.toggle("tw-hidden");
        });
        angleStroke.forEach((el) => {
            if(currentPath === "/marketplace") {
                el.classList.toggle("tw-rotate-180")
            } else {
            }
            
        });
    };

    return (
        <div
            className={`tw-pb-5 tw-pt-[5.2rem] max-xl:tw-pt-0 page-links tw-relative tw-basis-[28%] ${className}`}
        >
            <div
                className={`div-border tw-absolute tw-bottom-0 ${position}`}
            ></div>
            <Link
                to="/dashboard"
                className={`${classes} ${
                    activeLink === "/dashboard" ? "active-link" : ""
                }`}
            >
                <SquaresIcon />
                <span className="tw-w-full">
                    Dashboard
                </span>
            </Link>
            <Link
                to="/campaigns"
                className={`${classes} ${
                    activeLink === "/campaigns" ? "active-link" : ""
                }`}
            >
                <GraphIcon />
                <span className="tw-w-full">
                    Adventures
                </span>
            </Link>
            <Link
                to="/marketplace"
                className={`${classes} tw-relative ${
                    activeLink === "/marketplace"
                        ? "tw-bg-[#6149CD] active-link"
                        : ""
                }`}
                onClick={handleClick}
            >
                <MarketPlaceIcon />
                <span>Marketplace</span>
                <div className={`angle-stroke tw-absolute tw-right-3 ${activeLink == "/marketplace" ? "tw-rotate-0" : "tw-rotate-180"} tw-w-[0.9rem]`}>
                    <ChevronDownIcon />
                </div>
            </Link>
            <div className={`tw-ml-2 marketplace-option ${activeLink == "/marketplace" ? "tw-hidden" : ""}`}>
                <Link
                    to="/auction"
                    className={`${classes} ${
                        activeLink === "/auction" ? "active-link" : ""
                    }`}
                >
                    <AuctionIcon />
                    <span>Auction</span>
                </Link>
                <Link
                    to="/arcade"
                    className={`${classes} ${
                        activeLink === "/arcade" ? "active-link" : ""
                    }`}
                >
                    <ArcadeIcon />
                    <span>Arcade</span>
                </Link>
                <Link
                    to="/watch-faces"
                    className={`${classes} ${
                        activeLink === "/watch-faces" ? "active-link" : ""
                    }`}
                >
                    <WatchIcon />
                    <span>Watch Faces</span>
                </Link>
                <Link
                    to="/watch-ringtones"
                    className={`${classes} ${
                        activeLink === "/watch-ringtones" ? "active-link" : ""
                    }`}
                >
                    <MusicIcon />
                    <span>Watch Ringtones</span>
                </Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;
