import React from "react";
import {
    HandThumbsUpIcon,
    HeartIcon,
    StarIcon,
} from "../../icons/DashboardBodyIcons";

const Info = ({ title, coin, likes, isWatchFaces }) => {
    return (
        <div className="tw-border-b tw-pb-14 max-lg:tw-flex tw-justify-between max-lg:tw-border-b-0 max-lg:tw-pb-3">
            <div>
                <div className="tw-text-5xl max-lg:tw-text-2xl">{title}</div>
                <div className={`tw-flex tw-items-center tw-gap-x-1 tw-mt-5 max-lg:tw-mt-2 ${isWatchFaces ? 'max-sm:tw-mt-1' : ''}`}>
                    <figure>
                        <img
                            className="tw-w-[1.7rem] max-sm:tw-w-5"
                            src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png"
                            alt=""
                        />
                    </figure>
                    <span className="tw-text-2xl max-sm:tw-text-base">{coin}</span>
                </div>
            </div>

            <div className="tw-flex tw-gap-x-7 tw-mt-11 max-lg:tw-mt-0">
                <div>
                    <HandThumbsUpIcon
                        className={`tw-stroke-[#6149cd] ${
                            isWatchFaces ? "tw-w-6 tw-h-6" : "tw-w-9 tw-h-9"
                        }`}
                    />
                    <span>{likes}</span>
                </div>
                <div>
                    {isWatchFaces ? (
                        <HeartIcon className='tw-w-6 tw-h-6' />
                    ) : (
                        <StarIcon
                            className="tw-stroke-[#6149cd]"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Info;
