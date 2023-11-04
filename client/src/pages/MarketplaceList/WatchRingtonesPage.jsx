import React from "react";
import {
    DashboardHeader,
    DashboardSidebar,
    MarketplaceFooter,
    WatchRingtonesList,
    Wrapper,
} from "../imports";
import { ExclaimationIcon, SortIcon } from "../../icons/DashboardBodyIcons";

const WatchRingtonesPage = () => {
    const textQueries =
        "max-lg:tw-w-96 max-sm:tw-text-sm max-sm:tw-w-64 max-sm:tw-mt-5 max-[500px]:tw-mt-0 max-[500px]:tw-w-[39%] max-[385px]:tw-w-[33%] max-[500px]:tw-leading-tight max-[350px]:tw-w-[6.2rem] max-[350px]:tw-mt-14 max-[350px]:tw-text-[13px]";

    const imgQueries =
        "max-[900px]:tw-right-16 max-sm:tw-right-0 max-sm:-tw-bottom-6 max-[500px]:-tw-bottom-5 max-[350px]:tw-top-10 max-[350px]:tw-w-[6.5rem] max-[350px]:tw-h-[6.5rem] max-[350px]:-tw-right-2";

    return (
        <Wrapper className="tw-pt-36 max-xl:tw-pt-32 max-sm:tw-pt-28">
            <div className="tw-relative tw-h-56 max-[900px]:tw-h-40 max-sm:tw-h-52 max-[500px]:tw-h-36 max-[350px]:tw-h-[6.2rem] tw-overflow-hidden tw-rounded-xl">
                <img
                    className="tw-w-full tw-h-full tw-object-center max-sm:tw-hidden"
                    src="https://goplay.myxplora.com/_nuxt/img/watch-face-top-banner.2e13590.png"
                    alt=""
                />
                <img
                    className="tw-w-full tw-h-full tw-object-center tw-hidden max-sm:tw-block"
                    src="https://goplay.myxplora.com/_nuxt/img/watch-face-top-banner-mobile.04b7ca3.png"
                    alt=""
                />
                <div className="tw-text-white tw-w-[30rem] tw-ml-12 max-[900px]:tw-ml-8 tw-absolute tw-top-1/2 -tw-translate-y-1/2">
                    <div
                        className={`tw-text-[1.7rem] max-lg:tw-text-base ${textQueries}`}
                    >
                        Xplora Watch Ringtones! Purchase various watch ringtones
                        with your Xplora coins!
                    </div>
                    <div className="tw-text-2xl tw-mt-5 max-lg:tw-text-sm max-[900px]:tw-mt-2 max-[500px]:tw-w-44 max-sm:tw-text-xs max-[380px]:tw-w-1/4">
                        Download on Xplora X6Play & X6Pro.
                    </div>
                </div>
                <div
                    className={`tw-absolute tw-top-0 tw-bottom-0 tw-right-24 ${imgQueries}`}
                >
                    <img
                        className="tw-w-full tw-h-full tw-object-cover max-[350px]:tw-object-contain"
                        src="https://goplay.myxplora.com/_nuxt/img/watch-ringtone-top-banner-image.2f51f21.png"
                        alt=""
                    />
                </div>
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-mt-11">
                <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2">
                    <h1 className="tw-text-4xl max-sm:tw-text-xl">
                        Watch Ringtones
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

            <WatchRingtonesList />
        </Wrapper>
    );
};

export default WatchRingtonesPage;
