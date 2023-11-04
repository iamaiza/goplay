import React from "react";
import {
    ArcadeList,
    Wrapper,
} from "../../imports";
import { ExclaimationIcon, SortIcon } from "../../../icons/DashboardBodyIcons";

const ArcadePage = () => {
    const textQueries =
        "max-lg:tw-mt-3 max-lg:tw-w-96 max-[850px]:tw-w-80 max-sm:tw-w-60 max-lg:tw-text-[1.3rem] max-sm:tw-text-base max-[500px]:tw-w-[49%] max-[350px]:tw-mt-4";
    const arcadeBannerQueries =
        "max-lg:tw-pl-10 max-sm:tw-pl-7 max-[500px]:tw-pl-[1.245rem] max-[350px]:tw-pl-[0.9rem] max-lg:tw-mt-3 max-sm:tw-mt-0";
    return (
        <Wrapper className="tw-pt-[8.7rem] max-xl:tw-pt-[7.5rem] max-sm:tw-pt-32">
        <div className="tw-relative tw-h-80 max-lg:tw-h-44 max-sm:tw-h-48">
            <img
                className="tw-w-full tw-h-full tw-object-center max-xl:tw-hidden"
                src="https://goplay.myxplora.com/_nuxt/img/banner-large.09d42d3.png"
                alt=""
            />
            <img
                className="tw-w-full tw-h-full tw-object-center tw-hidden max-xl:tw-block"
                src="https://goplay.myxplora.com/_nuxt/img/banner-small.ee694e8.png"
                alt=""
            />
            <div
                className={`tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-pl-12 ${arcadeBannerQueries}`}
            >
                <div className="tw-w-72 max-lg:tw-w-[21rem] max-sm:tw-w-60 max-[500px]:tw-w-48 max-[350px]:tw-w-32 max-[350px]:tw-mt-2">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/Xplora%20Arcade.9e5a7dc.png"
                        alt=""
                    />
                </div>
                <div
                    className={`tw-text-3xl tw-text-white tw-w-72 tw-leading-normal tw-mt-5 ${textQueries}`}
                >
                    Play awesome Arcade games with your Xplora
                    Coins.
                </div>
            </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-mt-11">
            <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2">
                <h1 className="tw-text-4xl max-sm:tw-text-xl">
                    All Games
                </h1>
                <div className="-tw-mt-1 max-lg:-tw-mt-2 max-sm:tw-mt-0">
                    <ExclaimationIcon className="tw-w-8 tw-h-8 tw-rotate-180 max-sm:tw-w-5 max-sm:tw-h-5" />
                </div>
            </div>
            <div className="tw-flex tw-items-center">
                <div>
                    <SortIcon />
                </div>
                <p className="tw-text-[1.55rem] max-sm:tw-text-base">
                    Sort
                </p>
            </div>
        </div>
        <ArcadeList />
    </Wrapper>
    );
};

export default ArcadePage;
