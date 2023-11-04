import React from "react";

const AdventureSteps = ({ className }) => {
    return (
        <div className={`tw-mt-12 tw-border-b max-lg:tw-mt-7 ${className} max-lg:tw-pb-14`}>
            <div className="tw-text-[2.1rem] max-lg:tw-text-2xl">How this adventure works?</div>
            <div className="tw-mt-4 tw-pr-8 max-lg:tw-pr-0 max-sm:tw-text-sm">
                <div className="tw-opacity-80 tw-flex tw-gap-x-3">
                    <p className="tw-font-extrabold tw-whitespace-nowrap">
                        Step 1:
                    </p>
                    <p>Press the "Join" button on the page for the adventure</p>
                </div>
                <div className="tw-opacity-80 tw-flex tw-gap-x-3 tw-mb-8 tw-mt-14 max-[1285px]:tw-mt-8">
                    <p className="tw-font-extrabold tw-whitespace-nowrap">
                        Step 2:
                    </p>
                    <p>
                        Stay active and check into the page for adventure every
                        day to update your steps.
                    </p>
                </div>
                <div className="tw-opacity-80 tw-flex tw-gap-x-3">
                    <p className="tw-font-extrabold tw-whitespace-nowrap">
                        Step 3:
                    </p>
                    <p>
                        Reach all the milestones! For each milestone reached -
                        be rewarded with Xplora Coins.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdventureSteps;
