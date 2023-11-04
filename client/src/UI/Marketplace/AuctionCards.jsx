import React from "react";
import { Link } from "react-router-dom";

const AuctionCards = ({
    prodId,
    auctionList, timeline, prodImgSrc, prodFirstName,
    prodLastName, prodPrice, userImg1, userImg2,
    userImg3, totalBids, ended, endedTime,
    auctionHistory, history, btnText, slider,
}) => {
    const timelineQueries =
        "max-sm:tw-w-fit max-sm:tw-px-4 max-[350px]:tw-px-0 max-[350px]:tw-w-auto max-[350px]:tw-rounded-none max-sm:tw-rounded-2xl";

    return (
        <div
            className={`boxShadow tw-p-5 tw-relative tw-rounded-lg ${
                auctionList === true
                    ? "tw-w-full"
                    : "slick-slide tw-w-[90%] max-xl:tw-w-[92.5%] max-lg:tw-w-[94%]"
            } ${slider === true ? 'first:tw-border-l max-sm:tw-w-[94%]' : ''}`}
        >
            <Link to={history === true ? "/auction" : `/auction/${prodId}`} className={slider === true ? 'max-xl:tw-mr-4' : ''}>
                <div
                    className={`tw-text-base tw-text-white tw-w-auto tw-mx-auto tw-py-2 tw-absolute tw-top-[1.9rem] tw-left-5 tw-right-5 tw-font-bold tw-overflow-x-hidden ${timelineQueries} ${
                        auctionList === true
                            ? "tw-rounded-2xl max-xl:tw-w-fit max-xl:tw-px-4"
                            : ""
                    } ${ended !== true ? "tw-block" : "tw-hidden"} ${slider === true && 'timeline'}`}
                    style={{ background: "rgb(97, 73, 205, 0.8)" }}
                >
                    <div
                        className={`tw-flex max-xl:tw-justify-center ${
                            auctionList === true
                                ? "tw-justify-center"
                                : "-tw-ml-[1.55rem] max-xl:tw-ml-0"
                        }`}
                    >
                        <span
                            className="tw-whitespace-nowrap"
                            style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >
                            {timeline}
                        </span>
                    </div>
                </div>
                <div className="tw-w-full tw-h-64">
                    <figure className="tw-w-full tw-h-full">
                        <img
                            className="tw-w-full tw-h-full tw-object-contain"
                            src={prodImgSrc}
                            alt=""
                        />
                    </figure>
                </div>

                <div
                    className="tw-text-[0.95rem] tw-mt-4 tw-tracking-wide tw-h-8"
                >
                    {prodFirstName}{" "}
                    <span
                        className={`${
                            auctionList === true
                                ? "tw-inline-block"
                                : "tw-hidden max-xl:tw-inline-block max-[350px]:tw-hidden"
                        }`}
                    >
                        {" "}
                        {prodLastName}
                    </span>
                </div>
                <div
                    className={`${
                        auctionList === true ? "tw-mt-14" : "tw-mt-8"
                    }`}
                >
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-x-2">
                        <div className="tw-text-[15px] tw-text-gray-400">
                            Highest Bid
                        </div>
                        <div className="tw-flex">
                            <div className="tw-flex tw-justify-end">
                                <figure
                                    className={`tw-w-8 tw-h-8 ${
                                        !userImg2 && !userImg3 && "tw-mr-3"
                                    }`}
                                >
                                    <img
                                        className={`tw-w-full tw-h-full tw-rounded-full tw-object-cover ${
                                            !userImg2 && !userImg3
                                                ? "tw-border tw-border-gray-q00"
                                                : "tw-border-none"
                                        }`}
                                        src={userImg1 && userImg1}
                                        alt=""
                                    />
                                </figure>
                                <figure
                                    className={`tw-w-8 tw-h-8 -tw-ml-2 ${
                                        !userImg2 && "tw-hidden"
                                    }`}
                                >
                                    <img
                                        className={`tw-w-full tw-h-full tw-rounded-full tw-object-cover ${
                                            userImg2
                                                ? "tw-border tw-border-white"
                                                : "tw-hidden"
                                        }`}
                                        src={userImg2 && userImg2}
                                        alt=""
                                    />
                                </figure>
                                <figure
                                    className={`tw-w-8 tw-h-8 -tw-ml-2 ${
                                        !userImg3 && "tw-hidden"
                                    }`}
                                >
                                    <img
                                        className={`tw-w-full tw-h-full tw-rounded-full tw-object-cover ${
                                            userImg3
                                                ? "tw-border tw-border-white"
                                                : "tw-hidden"
                                        }`}
                                        src={userImg3 && userImg3}
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-between">
                        <div className="tw-flex tw-flex-1">
                            <figure className="tw-w-5">
                                <img
                                    className="tw-w-full tw-object-cover"
                                    src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png"
                                    alt=""
                                />
                            </figure>
                            <span className="tw-text-xl">{prodPrice}</span>
                        </div>
                        <span
                            className={`tw-flex-1 max-sm:tw-text-end tw-text-[17px] ${
                                auctionList === true
                                    ? "tw-text-end tw-pr-2 max-[350px]:tw-pr-1"
                                    : "tw-text-center"
                            }`}
                        >
                            {totalBids}
                        </span>
                    </div>
                </div>

                <button
                    className={`tw-mt-2 tw-w-full tw-py-[0.8rem] tw-text-white tw-text-xs tw-rounded-2xl ${
                        auctionHistory === true ? "tw-bg-[#2bad38]" : "btn-bg"
                    }`}
                    style={{
                        boxShadow:
                            "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                    }}
                >
                    {history === true ? btnText : "Join Bid"}
                </button>
            </Link>

            <div
                className={`tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 ${
                    ended === true ? "tw-block" : "tw-hidden"
                }`}
                style={{ background: "rgba(0,0,0,0.5)" }}
            >
                <div
                    className="tw-text-white tw-opacity-80 tw-mx-[3.5rem] max-[1285px]:tw-mx-10 max-xl:tw-w-fit max-xl:tw-mx-auto tw-mt-8 tw-py-2 tw-px-2 max-xl:tw-px-4 tw-text-center tw-rounded-2xl"
                    style={{ background: "rgb(97, 73, 205)" }}
                >
                    {endedTime}
                </div>
            </div>
        </div>
    );
};

export default AuctionCards;
