import React, { useEffect, useState } from "react";
import { ExclaimationIcon, SortIcon } from "../../icons/DashboardBodyIcons";
import UserStatsLinks from "./UserStatsLinks";
import "./UserStats.css";
import { Wrapper } from "../imports";
import Slider from "react-slick";

const DashboardUserStats = ({ library, wishlist, favourites }) => {


    return (
        <Wrapper
            className={
                favourites === true
                    ? "tw-pt-24 max-xl:tw-pt-20 max-sm:tw-pt-[4.5rem]"
                    : "tw-pt-28 max-xl:tw-pt-[5.5rem]"
            }
            userStats={true}
        >
            <div>
                {wishlist === true && <UserStatsLinks library={library} />}
                <div
                    className={`tw-flex tw-justify-between tw-items-center tw-gap-3 ${
                        library === true ? "tw-mt-11" : "tw-mt-9"
                    }`}
                >
                    <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2 exclaimation">
                        <h1 className={`tw-text-[2.2rem] max-sm:tw-text-xl`}>
                            {(library === true &&
                                "Sameed test's Content Library") ||
                                (wishlist === true &&
                                    "Sameed test's Wishlist") ||
                                (favourites === true &&
                                    "Sameed test's Favourites")}
                        </h1>

                        <div className="-tw-mt-1 max-lg:-tw-mt-2 max-sm:tw-mt-0">
                            <ExclaimationIcon className="tw-w-8 tw-h-8 tw-rotate-180 max-sm:tw-w-5 max-sm:tw-h-5" />
                        </div>
                    </div>

                    <div className="tw-flex tw-items-center sort">
                        <div>
                            <SortIcon />
                        </div>

                        <p className="tw-text-[1.55rem] max-sm:tw-text-base">
                            Sort
                        </p>
                    </div>
                </div>
                {library === true && <UserStatsLinks library={library} />}
                <div
                    className={`box-shadow tw-flex tw-justify-center tw-items-center tw-flex-col tw-py-14 tw-px-1 tw-text-center ${
                        wishlist === true ? "tw-mt-5" : "tw-mt-2"
                    } ${library !== true && wishlist !== true && "tw-mt-5"}`}
                >
                    <figure
                        className={
                            (library === true && "tw-w-[16.5rem]") ||
                            (favourites === true && "tw-w-60")
                        }
                    >
                        <img
                            className="tw-w-full tw-h-full tw-object-cover"
                            src={
                                (library === true &&
                                    "https://goplay.myxplora.com/_nuxt/img/content-library-image.e491f09.png") ||
                                (wishlist === true &&
                                    "https://goplay.myxplora.com/_nuxt/img/wishlistIntro.ee6423a.png") ||
                                (favourites === true &&
                                    "https://goplay.myxplora.com/_nuxt/img/favouritesdialog.2910a36.png")
                            }
                            alt=""
                        />
                    </figure>
                    <div
                        className={`tw-text-gray-500 ${
                            (library === true && "tw-mt-8 tw-mb-14") ||
                            (wishlist === true && "tw-mt-10 tw-mb-12") ||
                            (favourites === true && "tw-my-12")
                        }`}
                    >
                        {(library === true &&
                            "Sameed test has not purchased any content from the marketplace yet. Shop on Marketplace.") ||
                            (wishlist === true &&
                                "Sameed test has not added any items to his Wishlist. Shop on Marketplace.") ||
                            (favourites === true &&
                                "Sameed test has not added any items to his Favourites. Shop on Marketplace.")}
                    </div>
                    <button className="btn-bg btn-shadow tw-py-4 tw-px-7 tw-text-white tw-text-sm tw-rounded-[1.2rem]">
                        Let's Go
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};

export default DashboardUserStats;
