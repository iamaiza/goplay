import React from "react";
import { Wrapper } from "../imports";
import AuctionCards from "../../UI/Marketplace/AuctionCards";
import { ExclaimationIcon, SortIcon } from "../../icons/DashboardBodyIcons";

const AuctionHistory = () => {
    return (
        <Wrapper className="tw-pt-24 max-xl:tw-pt-16">
            <div className="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-mt-11">
                <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2">
                    <h1 className="tw-text-4xl max-sm:tw-text-xl">
                        Sameed test's Auction History
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
            <div className="tw-grid tw-grid-cols-3 tw-gap-6 tw-mt-5 max-lg:tw-grid-cols-2 max-sm:tw-grid-cols-1">
              <AuctionCards
                timeline="ENDS&nbsp;IN&nbsp;19&nbsp;days&nbsp;03h&nbsp;49m&nbsp;19s"
                prodImgSrc="https://media.bidjs.com//image/upload/v1683468552/production/1bd906620ece011edb8dabd9b489f3439_sgsqgf"
                prodPrice='2'
                userImg1='https://s3.eu-central-1.amazonaws.com/kids360uc/default_icon.png'
                userImg2='https://s3.eu-central-1.amazonaws.com/kids360uc/default_icon.png'
                totalBids='2 bids'
                auctionList={true}
                history={true}
                btnText='Continue Bidding'
              />
              <AuctionCards 
                timeline="ENDS&nbsp;IN&nbsp;27&nbsp;days&nbsp;03h&nbsp;45m&nbsp;24s"
                prodImgSrc='https://media.bidjs.com//image/upload/v1682318362/production/1be28d070e26a11edb8dabd9b489f3439_veygqt'
                prodPrice='1'
                userImg1='https://s3.eu-central-1.amazonaws.com/kids360uc/default_icon.png'
                totalBids='1 bids'
                auctionList={true}
                history={true}
                btnText='Continue Bidding'
              />
              <AuctionCards 
                timeline="ENDS&nbsp;IN&nbsp;27&nbsp;days&nbsp;03h&nbsp;45m&nbsp;24s"
                prodImgSrc='https://media.bidjs.com//image/upload/v1663058683/production/14fabdc20334011ed8b0157bff4996d48_fkj1hu'
                prodPrice='5'
                userImg1='https://s3.eu-central-1.amazonaws.com/kids360uc/default_icon.png'
                userImg2='https://s3.eu-central-1.amazonaws.com/kids360uc/default_icon.png'
                userImg3='https://s3.eu-central-1.amazonaws.com/kids360uc/default_icon.png'
                totalBids='5 bids'
                auctionList={true}
                auctionHistory={true}
                history={true}
                btnText='Won - Claim Item'
              />
            </div>
            
        </Wrapper>
    );
};

export default AuctionHistory;
