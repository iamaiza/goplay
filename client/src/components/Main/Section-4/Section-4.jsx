import React from "react";
import "./Section-4.css";

const Section4 = () => {
    return (
        <section className="tw-pt-24 tw-px-20 tw-pb-4 join-premium-section tw-bg-white max-[1250px]:tw-px-5 max-[960px]:tw-px-2">
            <figure className="tw-w-full tw-flex tw-justify-center">
                <img
                    src="https://goplay.myxplora.com/_nuxt/img/auction-prizes.ccdb23d.webp"
                    alt=""
                />
            </figure>
            <div className="tw-text-center">
                <h2 className="tw-text-5xl premium-text tw-mt-3 max-[480px]:tw-text-[25px]">Bid on the most in demand Auction items with Premium</h2>
                <p className="tw-text-base tw-mt-6 tw-mb-8">
                    Premium auctions are updated regularly with the most
                    in-demand new and exiting gadgets and toys, only available
                    to Xplora premium subscribers.
                </p>
                <button className="tw-bg-[#f9ae45] tw-py-3 tw-max-w-[15rem] tw-w-full tw-px-5 tw-rounded-full tw-text-base btn-shadow hover:tw-brightness-90">Join Premium today!</button>
            </div>
        </section>
    );
};

export default Section4;
