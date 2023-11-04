import React from "react";
import "./Section-2.css";
import SectionImages from "./Section-Images";

const Section2 = () => {
    return (
        <section className="tw-bg-white tw-h-full tw-pb-14 premium-section">
            <div>
            <SectionImages />
            </div>
            <div className="tw-mt-12 tw-px-2">
                <h1 className="tw-font-bold tw-text-center tw-text-6xl tw-leading-none tw-text-[#6149cd]">
                    Move more to play more
                </h1>
                <h1 className="m-heading tw-font-bold tw-text-center tw-text-6xl tw-leading-tight tw-mt-5 tw-text-[#f9a825]">
                    with Xplora Premium!
                </h1>
                <ul className="tw-max-w-[43rem] tw-w-full tw-mx-auto tw-text-left tw-mt-8">
                    <li className="tw-flex tw-items-center tw-mb-6">

                        <figure className="tw-w-7 tw-h-7">
                            <img src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png" alt="" />
                        </figure>
                        
                        <span className="tw-text-base tw-ml-5 tw-flex-1">
                            Fun ringtones and watch faces
                        </span>
                    </li>
                    <li className="tw-flex tw-items-center tw-mb-6">

                        <figure className="tw-w-7 tw-h-7">
                            <img src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png" alt="" />
                        </figure>
                        
                        <span className="tw-text-base tw-ml-5 tw-flex-1">
                            Amazing facts and tools for curious minds with new
                            subjects added every month
                        </span>
                    </li>
                    <li className="tw-flex tw-items-center tw-mb-6">

                        <figure className="tw-w-7 tw-h-7">
                            <img src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png" alt="" />
                        </figure>
                        
                        <span className="tw-text-base tw-ml-5 tw-flex-1">
                            Exclusive Adventures with great prizes!
                        </span>
                    </li>
                </ul>

                <div className="tw-max-w-[52rem] tw-w-full tw-mx-auto tw-h-full tw-relative">
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <div className="tw-text-center tw-w-screen">
                            <h2 className="tw-text-[2.7rem] tw-leading-none tw-font-bold tw-text-[#f9a825]">Get the most out of</h2>
                            <h2 className="m-heading tw-text-[2.7rem] tw-leading-none tw-font-bold tw-mt-5">your Xplora watch!</h2>
                        </div>
                        <figure className="watch-img tw-h-full tw-w-full max-[1275px]:tw-w-[70%] max-[850px]:tw-w-full">
                            <img className="tw-w-full tw-h-full tw-object-cover" src="https://goplay.myxplora.com/_nuxt/img/get-the-most.0de3279.webp" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="tw-max-w-[50rem] tw-w-full tw-h-full tw-mx-auto premium-table_container">
                    <figure>
                        <img className="tw-w-full tw-h-full tw-object-cover" src="https://goplay.myxplora.com/_nuxt/img/gb.b389911.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Section2;
