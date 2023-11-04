import React from "react";

const HowToClaim = () => {
    return (
        <div className="tw-mt-12 max-lg:tw-mt-5 max-lg:tw-border-b-2 max-lg:tw-pb-16">
            <div className="tw-text-3xl max-lg:tw-text-[1.6rem]">How to Claim</div>
            <div className="tw-mt-6 max-lg:tw-mt-3 tw-opacity-90 max-lg:tw-opacity-95 max-lg:tw-text-lg max-sm:tw-text-sm">
                <div className="max-lg:tw-mb-3">1) Place your bid on the auction item and keep track</div>
                <div className="max-lg:tw-mb-3">
                    2) At the end of the auction, the highest bid will win!
                </div>
                <div className="max-lg:tw-mb-3">
                    3) If that's you - then you will receive an email to submit
                    your shipping information.
                </div>
                <div className="max-lg:tw-mb-3">
                    4) Upon completion, we will fulfill your order within 1-3
                    weeks.
                </div>
            </div>
        </div>
    );
};

export default HowToClaim;
