import React from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import MarketplaceFooter from "../Marketplace/MarketplaceFooter";

const Wrapper = (props) => {
    return (
        <div>
            <DashboardHeader />
            <div className="tw-flex">
                <DashboardSidebar
                    className="tw-h-screen tw-px-3 max-xl:tw-hidden"
                    position="tw-right-0 tw-top-0"
                />
                <div className={`tw-w-full tw-max-h-screen tw-h-full tw-overflow-y-auto ${props.className}`}>
                    <div className={`tw-px-10 max-sm:tw-px-4 ${props.className2}`}>
                        {props.children}
                    </div>

                    <MarketplaceFooter userStats={props.userStats} />
                </div>
            </div>
        </div>
    );
};

export default Wrapper;
