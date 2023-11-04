import React from "react";
import { ExclaimationIcon } from "../../../icons/DashboardBodyIcons";

const AuctionBids = ({ product }) => {
    return (
        <>
            <form className="tw-border tw-rounded-xl tw-mt-8 tw-px-4 tw-pb-6 max-lg:tw-pb-20">
                <div className="tw-flex tw-items-end tw-mt-5 tw-gap-x-7 max-lg:tw-block">
                    <div className="tw-flex-1 max-lg:tw-flex tw-justify-between tw-items-start tw-gap-x-2">
                        <div className="tw-text-xl tw-opacity-80 tw-mb-5 max-lg:tw-mb-0 max-sm:tw-text-base">
                            Enter Your Bid
                        </div>

                        <div className="tw-flex tw-gap-x-1 tw-items-center">
                            <div className="tw-border tw-border-gray-600 tw-bg-gray-200 tw-flex tw-justify-center tw-items-center tw-w-8 tw-h-8 max-sm:tw-w-5 max-sm:tw-h-5 tw-rounded-full">
                                -
                            </div>
                            <div>
                                <input
                                    className="tw-border tw-w-32 max-lg:tw-w-28 tw-p-2 tw-rounded tw-border-gray-600 focus:tw-outline-[#6149cd]"
                                    type="text"
                                    placeholder="1000"
                                    value={product.price + 1}
                                    onChange={() => {}}
                                />
                            </div>
                            <div
                                className="tw-border tw-border-gray-600 tw-flex tw-justify-center tw-items-center tw-w-8 tw-h-8 max-sm:tw-w-5 max-sm:tw-h-5 tw-rounded-full"
                                style={{
                                    boxShadow:
                                        "0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)",
                                }}
                            >
                                +
                            </div>
                        </div>
                    </div>
                    <div className="tw-items-center tw-gap-x-1 tw-mt-0 tw-hidden max-lg:tw-flex">
                        <figure className="tw-w-6">
                            <img
                                className="tw-w-full tw-object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png"
                                alt=""
                            />
                        </figure>
                        <div className="tw-text-gray-400">
                            {product.price + 1} or more
                        </div>
                    </div>

                    <button className="tw-flex-1 btn-bg tw-py-4 tw-px-2 tw-rounded-[1.2rem] tw-text-white tw-text-sm tw-opacity-30 max-lg:tw-w-full max-lg:tw-mt-8">
                        Place Bid
                    </button>
                </div>
                <div className="tw-flex tw-items-center tw-gap-x-1 tw-mt-5 max-lg:tw-hidden">
                    <figure className="tw-w-6">
                        <img
                            className="tw-w-full tw-object-cover"
                            src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png"
                            alt=""
                        />
                    </figure>
                    <div className="tw-text-gray-400">
                        {product.price + 1} or more
                    </div>
                </div>
            </form>
            {product.price + 1 > 1000 && (
                <p className="tw-mt-3 tw-text-[#f44336]">
                    Insufficient Xplora coins to bid for this product.
                </p>
            )}
            <div className="tw-flex tw-items-start tw-gap-x-3 max-lg:tw-gap-x-12 max-sm:tw-gap-x-4 max-[500px]:tw-gap-x-2 tw-py-3 tw-px-2 tw-bg-[#f5f32f] tw-rounded-lg tw-mt-6">
                <ExclaimationIcon className="tw-w-12 tw-rotate-180 max-lg:tw-w-7 max-sm:tw-w-10 max-[500px]:tw-w-24" />
                <div className="tw-text-xs max-sm:tw-text-[11px] tw-leading-snug tw-opacity-90 max-sm:tw-opacity-100 tw-pr-3">
                    <div>Please note:</div>
                    <div>Only one prize can be won per auction.</div>
                    <div>
                        You can bid on as many auction items as you choose if
                        you have enough coins to do so, but only one prize, from
                        the auction that finishes first, will be awarded.
                    </div>
                </div>
            </div>
            <div className="tw-mt-7">
                <div className="tw-bg-[#efefef] tw-py-2.5 tw-px-5 tw-rounded-lg">
                    <p className="tw-opacity-80">Current Top Bid</p>
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-x-2 tw-mt-5">
                        <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-sm">
                            <figure className="tw-w-8 tw-h-8">
                                <img
                                    className="tw-w-full tw-h-full tw-rounded-full tw-object-cover"
                                    src={product.topBid.img}
                                    alt=""
                                />
                            </figure>
                            <span className="tw-opacity-80">
                                {product.topBid.name}
                            </span>
                        </div>
                        <div className="tw-flex tw-items-center tw-gap-x-1">
                            <figure className="tw-w-[1.3rem]">
                                <img
                                    className="tw-w-full tw-object-cover"
                                    src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png"
                                    alt=""
                                />
                            </figure>
                            <span className="tw-opacity-80">
                                {product.topBid.bid}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="tw-mt-8 tw-border-b-2 tw-pb-7">
                    <p className="tw-opacity-90">Previous Bids</p>
                    <div className="tw-mt-3 max-lg:tw-mt-5">
                        {product.prevBids.map((bid) => (
                            <div className="tw-flex tw-items-center tw-justify-between tw-gap-x-2 tw-pb-1">
                                <div className="tw-flex tw-items-center tw-gap-x-2">
                                    <figure
                                        className={`tw-w-8 tw-h-8 tw-rounded-full ${
                                            bid.img
                                                ? ""
                                                : "tw-border tw-bg-[#efefef]"
                                        }`}
                                    >
                                        <img
                                            className="tw-w-full tw-h-full tw-object-cover tw-rounded-full"
                                            src={bid.img ? bid.img : ""}
                                            alt=""
                                        />
                                    </figure>
                                    <span className="tw-text-sm tw-opacity-90">
                                        {bid.name}
                                    </span>
                                </div>
                                <div className="tw-flex tw-items-center">
                                    <figure className="tw-w-[1.3rem]">
                                        <img
                                            className="tw-w-full tw-object-cover"
                                            src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png"
                                            alt=""
                                        />
                                    </figure>
                                    <span className="tw-opacity-90">
                                        {bid.bid}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuctionBids;
