import React from "react";
import {
    AuctionsList,
    Wrapper,
} from "../../imports";
import { ExclaimationIcon, SortIcon } from "../../../icons/DashboardBodyIcons";

const AuctionPage = () => {
    return (
        <Wrapper className="tw-pt-[8.7rem] max-xl:tw-pt-[7.5rem] max-sm:tw-pt-28">
            <div className="bg-linear tw-flex tw-items-center max-lg:tw-justify-between tw-gap-x-5 max-sm:tw-gap-x-1 tw-py-16 tw-px-[4.3rem] max-lg:tw-px-5 max-[350px]:tw-py-3 tw-rounded-3xl max-lg:tw-h-[22rem] max-sm:tw-h-auto max-sm:tw-py-6">
                <div className="tw-text-white">
                    <div className="tw-text-[1.7rem] max-xl:tw-text-2xl max-sm:tw-leading-normal max-lg:tw-text-xl tw-tracking-wide tw-w-96 max-[800px]:tw-w-80 max-sm:tw-text-xs  max-sm:tw-w-60 max-[500px]:tw-w-44 max-[350px]:tw-w-28">
                        Bid on the most desirable gadgets, games and more! New
                        exciting lots are added every two weeks.
                    </div>
                    <div className="tw-text-[1.7rem] max-sm:tw-text-sm tw-tracking-wide tw-mt-5">
                        Let's Go!
                    </div>
                </div>
                <figure className="tw-w-[27rem] max-lg:tw-w-48 max-sm:-tw-mx-3">
                    <img
                        className="tw-w-full tw-object-cover max-lg:tw-hidden"
                        src="https://goplay.myxplora.com/_nuxt/img/Group%2029444.24f9767.png"
                        alt=""
                    />
                    <img
                        className="tw-w-full tw-object-cover tw-hidden max-lg:tw-block"
                        src="https://goplay.myxplora.com/_nuxt/img/Group%2015476.b118e05.png"
                        alt=""
                    />
                </figure>
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-mt-11">
                <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2">
                    <h1 className="tw-text-4xl max-sm:tw-text-xl">
                        All Auctions
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

            <AuctionsList />
        </Wrapper>
    );
};

export default AuctionPage;
