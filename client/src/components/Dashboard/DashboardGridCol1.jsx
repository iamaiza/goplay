import React from "react";
import DashboardCard1 from "../../UI/Dashboard/DashboardCard1";
import DashboardCard2 from "../../UI/Dashboard/DashboardCard2";
import Chart from "./ChartComponent";
import { Col } from "react-bootstrap";
import "./DashboardGridCol1.css";
import GraphList from "./GraphList";
import DashboardSlider from "./DashboardSlider";

const DashboardGridCol1 = () => {
    const zeroStepQueries =
        "max-xl:tw-flex max-xl:tw-items-center max-xl:tw-bg-gray-50 max-xl:tw-ml-0 max-xl:tw-w-full max-xl:tw-mb-7 max-xl:tw-py-7 max-xl:tw-px-12 max-sm:tw-px-3";

    return (
        <Col className="tw-mt-4 max-lg:tw-mt-12 tw-w-full tw-basis-[35%] tw-px-0">
            <div className="tw-w-full card-shadow tw-py-7 max-lg:tw-py-5 tw-px-5 tw-rounded-[2rem] max-lg:tw-hidden tw-overflow-x-auto">
                <div className="tw-flex tw-border-b max-lg:tw-border-b-0 tw-pb-5 max-lg:tw-pb-0 tw-gap-x-5 max-lg:tw-gap-x-0">
                    <DashboardCard1
                        className1="tw-border-r tw-flex-1 max-lg:tw-flex-none tw-h-[4.5rem] max-lg:tw-h-full max-lg:tw-pl-5 max-md:tw-pl-1"
                        className2="tw-w-10 tw-h-10"
                        src="https://goplay.myxplora.com/_nuxt/img/library.12f639e.png"
                        text1="Library"
                        text2="0"
                        pageLink="/dashboard/content-library"
                    />
                    <DashboardCard1
                        className1="px-card tw-flex-1 max-lg:tw-flex-none tw-h-[4.5rem] max-lg:tw-h-full tw-border-r"
                        className2="tw-w-10 tw-h-10"
                        src="https://goplay.myxplora.com/_nuxt/img/wishlist.8039159.png"
                        text1="Wishlist"
                        text2="0"
                        pageLink="/dashboard/wishlist"
                    />
                    <DashboardCard1
                        className1="px-card card-border max-lg:tw-border-r tw-flex-1 max-lg:tw-flex-none tw-h-[4.5rem] max-lg:tw-h-full"
                        className2="tw-w-10 tw-h-10"
                        src="https://goplay.myxplora.com/_nuxt/img/favourites.0d92a7e.png"
                        text1="Favourites"
                        text2="0"
                        pageLink='/dashboard/favourites'
                    />
                </div>
                <div className="tw-flex tw-pt-3 max-lg:tw-pt-0 tw-gap-x-5 max-lg:tw-gap-x-0">
                    <DashboardCard1
                        className1="tw-border-r tw-flex-1 max-lg:tw-flex-none tw-h-[5.5rem] max-lg:tw-h-full"
                        className2="tw-w-20 tw-h-20"
                        src="https://goplay.myxplora.com/_nuxt/img/joinedcampaigns.453c113.png"
                        text1="Adventures Joined"
                        text2="1"
                        pageLink='/dashboard/joined-campaigns'
                    />
                    <DashboardCard1
                        className1="px-card tw-flex-1 max-lg:tw-flex-none tw-h-[5.5rem] max-lg:tw-h-full"
                        className2="tw-w-20 tw-h-20"
                        src="https://goplay.myxplora.com/_nuxt/img/auctionhistory.cbc3513.png"
                        text1="Auction History"
                        text2="3"
                        pageLink='/dashboard/auction-history'
                    />
                </div>
            </div>
            <DashboardSlider />
            <div className="card-shadow tw-mt-9 tw-rounded-[2.5rem] tw-px-7 max-sm:tw-px-4 tw-pt-8 tw-pb-12">
                <div className="tw-flex tw-items-center tw-justify-between">
                    <h2 className="tw-text-2xl heading-size max-sm:tw-text-xl">
                        Sameed test's Activity
                    </h2>
                    <GraphList className="max-xl:tw-hidden" />
                </div>
                <div className="tw-flex max-xl:tw-flex-col tw-justify-around tw-items-center tw-gap-x-20 tw-mt-12">
                    <div
                        className={`tw-ml-11 tw-rounded-2xl tw-w-fit ${zeroStepQueries}`}
                    >
                        <figure className="tw-w-28 max-xl:tw-w-[9.3rem] max-sm:tw-w-16">
                            <img
                                className="tw-w-full tw-object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/activity-steps.c4cdfb0.png"
                                alt=""
                            />
                        </figure>
                        <div className="tw-flex tw-items-center tw-justify-center tw-gap-x-1 tw-mt-8 max-xl:tw-mt-0 max-xl:tw-ml-16 max-sm:tw-ml-5">
                            <span className="tw-text-4xl max-xl:tw-text-3xl max-sm:tw-text-lg">
                                0
                            </span>
                            <span className="tw-text-2xl max-xl:tw-text-xl max-sm:tw-text-base tw-text-gray-500">
                                Steps
                            </span>
                        </div>
                    </div>
                    <GraphList className="tw-w-full tw-justify-end tw-mb-5 tw-hidden max-xl:tw-flex" />
                    <div className="tw-w-full tw-h-full tw-relative max-sm:tw-mt-5">
                        <Chart />
                        <div className="tw-text-center tw-text-base tw-text-[#6149cd] tw-rounded-full tw-absolute tw-bottom-1/2 tw-left-1/2 -tw-translate-x-[40%] -tw-z-10 tw-shadow-lg tw-py-3 max-sm:tw-py-1 tw-px-5 tw-w-48 max-sm:tw-w-36 graph-data">
                            No data available
                        </div>
                    </div>
                </div>
            </div>

            <div className="tw-flex max-lg:tw-flex-col tw-gap-x-6 max-lg:tw-gap-y-6 tw-mt-14 tw-w-full">
                <DashboardCard2
                    className1="grid-card-1 card1"
                    cardHeading="Set your kids in motion"
                    cardText="Each&nbsp;day, our users walk more than one billion steps. That's the equivalent of walking around the world once!"
                    cardText2="*Average statistics as of September 2022."
                    pageLink='/campaigns'
                />
                <DashboardCard2
                    className1="grid-card-2"
                    cardHeading="Explore with our awesome monthly adventures!"
                    cardText="Earn Xplora coins in tons of different, funny, exciting and educational adventures just by walking!"
                    pageLink='/campaigns'
                />
            </div>

            <div className="tw-flex max-lg:tw-flex-col tw-gap-x-6 max-xl:tw-gap-y-6 tw-mt-8 max-xl:tw-mt-6">
                <DashboardCard2
                    className1="grid-card-3"
                    cardHeading="Spend your well earned coins in our massive Marketplace!"
                    cardText="The more steps, the more Xplora coins will fill up your wallet. The coins can be used to play the coolest and best games in the Arcade, get exclusive ringtones and watch faces, and to buy awesome items in the auction!"
                    pageLink='/marketplace'
                />
                <DashboardCard2
                    className1="grid-card-4 card2"
                    cardHeading="Watch faces and ringtones"
                    cardText="Now available with X6Play and X6Pro"
                    pageLink='/watch-faces'
                />
            </div>
        </Col>
    );
};

export default DashboardGridCol1;
