import React from "react";
import "./Adventures.css"

const Adventures = () => {
    return (
        <div className="tw-text-center tw-pb-7 tw-mt-36 max-lg:tw-mt-20 max-sm:tw-px-5">
            <h1 className="tw-text-5xl max-lg:tw-text-[1.75rem] max-sm:tw-text-2xl tw-mx-3 section-heading">
                Explore with our awesome monthly adventures!
            </h1>
            <p className="tw-text-lg tw-mt-5 tw-mx-3 max-lg:tw-mx-10 max-md:tw-mx-0 section-text">
                Win awesome prizes in tons of different, funny, exciting and
                educational adventures just by walking!
            </p>
            <figure className="tw-mt-12 tw-w-full tw-h-full">
                <img
                    className="tw-w-full tw-h-full tw-object-cover"
                    src="https://goplay.myxplora.com/_nuxt/img/section-2.ae4ba89.webp"
                    alt=""
                />
            </figure>
            <p className="tw-text-xl tw-mt-5 tw-hidden tw-mx-3 max-sm:tw-mx-1 section-text">
                Move more to earn plenty of Xplora coins and get ahead on that
                leaderboard with participants from all around the globe!
            </p>
            <button className="tw-bg-white tw-text-black tw-mt-10 tw-py-3 tw-px-2 tw-max-w-[15rem] max-sm:tw-max-w-[13rem] tw-w-full tw-rounded-full max-sm:tw-rounded-[1.2rem] tw-text-base max-sm:tw-text-sm hover:tw-brightness-95">
                See All Adventures
            </button>
        </div>
    );
};

export default Adventures;
