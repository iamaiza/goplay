import React from "react";
import { AdventureList, Wrapper } from "../imports";
import { SortIcon, ExclaimationIcon } from "../../icons/DashboardBodyIcons";

const JoinedAdventure = () => {
    return (
        <Wrapper className="tw-pt-24 max-xl:tw-pt-16">
            <div className="tw-flex tw-justify-between tw-items-center max-[500px]:tw-items-start max-[500px]:tw-pr-7 max-[350px]:tw-pr-3 tw-gap-3 tw-mt-11">
                <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2 max-[500px]:tw-items-start">
                    <h1 className="tw-text-4xl max-sm:tw-text-xl max-[500px]:-tw-mt-1.5 max-[360px]:-tw-mt-1">
                        Sameed test's Adventures joined
                    </h1>
                    <div className="-tw-mt-1 max-lg:-tw-mt-2 max-sm:tw-mt-0">
                        <ExclaimationIcon className="tw-w-8 tw-h-8 tw-rotate-180 max-sm:tw-w-5 max-sm:tw-h-5" />
                    </div>
                </div>
                <div className="tw-flex tw-items-center max-[500px]:tw-flex-col">
                    <div>
                        <SortIcon />
                    </div>
                    <p className="tw-text-[1.55rem] max-sm:tw-text-base">
                        Sort
                    </p>
                </div>
            </div>
            <div className="tw-mt-5 max-[1285px]:tw-mb-[30%] max-xl:tw-mb-5">
                <AdventureList
                    className="tw-mb-7"
                    imgUrl="https://xplora-images.s3.eu-central-1.amazonaws.com/14fce65c0d77711ed858ba1f182701b4b.png"
                    title="Planet Adventure"
                    joinedAdventure={true}
                />
            </div>
        </Wrapper>
    );
};

export default JoinedAdventure;
