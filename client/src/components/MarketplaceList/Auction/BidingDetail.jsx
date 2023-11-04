import React from "react";

const BidingDetail = () => {
    return (
        <div className="tw-mt-12 max-lg:tw-mt-5 tw-border-b-2 tw-pb-11 max-lg:tw-pb-16">
            <div className="tw-text-3xl max-lg:tw-text-[1.6rem]">Biding Details</div>
            <div className="tw-mt-6 max-lg:tw-text-lg max-sm:tw-text-sm max-lg:tw-mt-3 tw-opacity-90 max-lg:tw-opacity-95 tw-pr-5">
                <div className="max-lg:tw-mb-3">
                    1) Xplora will suggest a starting amount for you to bid
                </div>
                <div className="max-lg:tw-mb-3">
                    2) Check back to the page to keep track of your bid and bid
                    again if yours is no longer the highest
                </div>
                <div className="max-lg:tw-mb-3">
                    3) At the end of the auction, the highest bidder wins!
                </div>
            </div>
            <div className="tw-opacity-90 max-lg:tw-opacity-95 max-lg:tw-text-lg max-sm:tw-text-sm tw-pr-5">
                *Please see "how to claim" section for information on how to
                claim an item*
            </div>
        </div>
    );
};

export default BidingDetail;
