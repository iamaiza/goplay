import React from "react";
import "./FooterNewsletter.css";

const FooterNewsletter = () => {
    return (
        <div className="tw-flex max-sm:tw-flex-col tw-mx-[9.5rem] max-xl:tw-mx-28 max-lg:tw-mx-20 max-sm:tw-mx-5 tw-gap-5 tw-mt-16 newsletter-section">
            <div>
                <h1 className="tw-text-5xl max-sm:tw-text-2xl">Newsletter</h1>
                <p className="tw-text-base max-sm:tw-text-sm tw-mt-2 tw-text-[#707070] tw-w-[20rem] max-lg:tw-w-[12rem] max-sm:tw-w-full">
                    UPDATE ON NEW PRODUCTS AND EXCLUSIVE OFFERS.
                </p>
            </div>
            <form className="tw-mt-4 max-xl:tw-mt-3 tw-ml-36 max-xl:tw-ml-12 tw-w-[27rem] max-xl:tw-w-[20rem] max-sm:tw-w-full max-sm:tw-ml-0">
                <input
                    type="text"
                    placeholder="Name"
                    className="tw-w-full tw-bg-transparent tw-border tw-border-[rgba(255,255,255,0.3)] tw-rounded-full tw-py-2 tw-px-5 tw-text-base tw-mb-6 tw-hover:tw-outline tw-hover:tw-outline-1 tw-outline-white tw-hover:tw-border-white"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="tw-w-full tw-bg-transparent tw-border tw-border-[rgba(255,255,255,0.3)] tw-rounded-full tw-py-2 tw-px-5 tw-text-base tw-mb-6 tw-hover:tw-outline tw-hover:tw-outline-1 tw-outline-white tw-hover:tw-border-white"
                />
                <button className="disable-btn tw-w-full tw-text-base tw-text-[#222] tw-py-2 tw-px-5 tw-rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default FooterNewsletter;
