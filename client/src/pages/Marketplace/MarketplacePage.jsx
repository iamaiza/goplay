import React from "react";
import "./MarketplacePage.css";
import { DashboardHeader, DashboardSidebar, MarketplaceOptions, AuctionProducts, ArcadeGames, WatchFaces, WatchRingtones } from "../imports"

const MarketplacePage = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="tw-flex">
                <DashboardSidebar
                    className=" tw-h-screen tw-px-3 max-xl:tw-hidden"
                    position="tw-right-0 tw-top-0"
                />

                <div className="tw-pt-[7.5rem] max-xl:tw-pt-24 tw-px-10 max-lg:tw-px-10 max-sm:tw-px-4 tw-w-full tw-max-h-screen tw-h-full tw-overflow-y-auto tw-pb-16">
                    <MarketplaceOptions />
                    <div className="marketplace-bg tw-mt-11 max-sm:tw-mt-6 max-[400px]:tw-mt-9 tw-p-12 max-lg:tw-p-10 max-sm:tw-p-7 max-xl:tw-h-[28rem] max-lg:tw-h-80 max-sm:tw-h-60 max-[500px]:tw-h-40 max-[300px]:tw-h-[7.2rem] max-[500px]:tw-p-5 tw-flex tw-flex-col tw-justify-center tw-text-white tw-rounded-[0.8rem] max-[400px]:tw-rounded-lg">
                        <div className="tw-text-[2rem] max-sm:tw-text-xl tw-leading-normal">
                            <div>Welcome to</div>
                            <div>Xplora Marketplace</div>
                        </div>
                        <p className="tw-text-base max-sm:tw-text-xs tw-mt-5 max-sm:tw-mt-2">
                            Discover all new games, products more!
                        </p>
                    </div>

                    <AuctionProducts />
                    <ArcadeGames />
                    <WatchFaces />
                    <WatchRingtones />
                </div>
            </div>
        </div>
    );
};

export default MarketplacePage;
