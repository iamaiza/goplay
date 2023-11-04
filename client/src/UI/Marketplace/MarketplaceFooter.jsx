import React from "react";
import { Link } from "react-router-dom";
import "./auction.css"

const MarketplaceFooter = ({userStats}) => {
    return (
        <div
            className={`tw-mt-20 tw-p-8 max-lg:tw-py-0 max-lg:tw-px-5 max-sm:tw-px-3 tw-mb-1 max-lg:tw-h-[38rem] max-lg:tw-flex max-lg:tw-justify-center max-lg:tw-items-center tw-relative ${userStats === true ? 'max-xl:tw-mt-44 max-[900px]:tw-mt-20' : ''}`}
            style={{
                background:
                    "linear-gradient(90deg,#754bef,#754bef 36%,#5675f4)",
            }}
        >
            <Link>
                <div className="tw-flex tw-items-center max-lg:tw-flex-col tw-gap-x-2 tw-w-[47rem] max-lg:tw-w-full tw-ml-[4.3rem] max-lg:tw-ml-0">
                    <div className="max-lg:tw-w-64 max-lg:tw-mb-5">
                        <img
                            className="tw-w-full tw-object-cover"
                            src="https://www.kidsafeseal.com/sealimage/18280295811090908763/x5playwatch_device_extralarge_whitetm.png"
                            alt=""
                        />
                    </div>
                    <div className="tw-text-white tw-text-2xl max-lg:tw-text-center max-sm:tw-text-xl">
                        Xplora Kids Smartwatches (X6Play and XGO3), Parent
                        Companion App, and Activity Platform are listed by the
                        kidSAFE Seal Program.
                    </div>
                </div>

                <div className="tw-w-12 max-lg:tw-w-20 tw-absolute -tw-top-4 tw-left-[3.2rem] max-lg:tw-top-full max-lg:-tw-translate-y-full max-lg:tw-left-1/2 max-lg:-tw-translate-x-1/2 max-sm:-tw-ml-5">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/cup.419da85.png"
                        alt=""
                    />
                </div>
                <div className="tw-w-[3.2rem] max-lg:tw-w-24 tw-absolute tw-top-12 max-lg:tw-top-[28rem] tw-left-5 max-lg:tw-left-auto max-lg:tw-right-5 max-sm:tw-right-2">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/speaker.8f38bd5.png"
                        alt=""
                    />
                </div>
                <div className="tw-w-16 max-lg:tw-w-32 tw-absolute tw-top-20 max-lg:tw-top-[28rem] tw-left-[4.7rem] max-lg:tw-left-14 max-[500px]:tw-left-5">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/coins.40a838b.png"
                        alt=""
                    />
                </div>
                <div className="tw-w-14 max-lg:tw-w-24 tw-absolute -tw-top-3 max-lg:-tw-top-8 tw-right-12 max-sm:tw-right-5">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/hat.cd48f9d.png"
                        alt=""
                    />
                </div>
                <div className="tw-w-12 max-lg:tw-w-20 tw-absolute tw-top-16 max-lg:tw-top-5 tw-right-20 max-lg:tw-right-auto max-lg:tw-left-5">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/puzzle.e13fd3f.png"
                        alt=""
                    />
                </div>
                <div className="tw-w-12 tw-absolute tw-top-[6.3rem] tw-right-6 max-lg:tw-hidden">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/books.228b3f8.png"
                        alt=""
                    />
                </div>
            </Link>
        </div>
    );
};

export default MarketplaceFooter;
