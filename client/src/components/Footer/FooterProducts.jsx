import React from "react";
import "./FooterProducts.css"
import { Link } from "react-router-dom";

const FooterProducts = () => {
    return (
        <>
            <div className="footer-products tw-w-full tw-flex tw-justify-between max-xl:tw-flex-col tw-px-7 tw-text-center">
                <div className="flex-item-1 tw-w-[40%] max-xl:tw-w-full">
                    <h1 className="tw-text-5xl max-sm:tw-text-2xl">Xplora App</h1>
                    <p className="tw-text-base max-sm:tw-text-[15px] tw-leading-normal tw-mt-8 tw-mb-14 tw-w-[30rem] max-xl:tw-w-full tw-mx-auto">
                        Use smart watches (Apple, fitbit or similar) or simply
                        use your smartphone to join.
                    </p>
                    <div className="tw-flex tw-justify-between tw-gap-5 tw-mb-12 tw-px-11 max-xl:tw-px-[5.5rem] max-lg:tw-px-0">
                        <Link to="https://apps.apple.com/gb/app/xplora/id1521983878" target="_blank" className="tw-w-40 max-xl:tw-w-72 max-lg:tw-w-full">
                            <img
                                className="tw-w-full tw-object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/get-on-app-store.be4d804.png"
                                alt=""
                            />
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.xplora.xplorao2o&hl=en_GB&gl=US" target="_blank" className="tw-w-40 max-xl:tw-w-72 max-lg:tw-w-full">
                            <img
                                className="tw-w-full tw-object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/get-on-google-play.9048527.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <figure className="tw-w-full">
                        <img
                            className="tw-w-full tw-h-full tw-object-cover"
                            src="https://goplay.myxplora.com/_nuxt/img/xplora-app.bc1d1a0.webp"
                            alt=""
                        />
                    </figure>
                </div>
                <div className="tw-w-[40%] max-xl:tw-w-full">
                    <h1 className="tw-text-5xl max-sm:tw-text-2xl">Xplora Products</h1>
                    <p className="tw-text-base max-sm:tw-text-[15px] tw-mt-8 tw-mb-32 tw-w-[30rem] max-xl:tw-w-full tw-mx-auto tw-leading-normal">
                        Our products are the most awarded, trusted and
                        recognised in the market today.
                    </p>
                    <div className="watch-card tw-max-w-lg tw-w-full max-xl:tw-min-w-full tw-ml-auto tw-rounded-2xl tw-px-5 max-sm:tw-px-7 tw-pb-5 tw-text-white">
                        <figure className="tw-w-[60%] max-[300px]:tw-w-[100%] tw-mx-auto tw-relative -tw-top-[5.4rem] max-[600px]:-tw-top-[3.5rem]">
                            <img
                                className="tw-w-full tw-object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/products.c4afdfe.webp"
                                alt=""
                            />
                        </figure>
                        <h2 className="tw-text-[1.7rem] max-sm:tw-text-xl -tw-mt-16 tw-mb-5">
                            See the latest smart watches
                        </h2>
                        <button className="tw-bg-[#1a237e] tw-p-3 max-sm:tw-p-2.5 tw-max-w-[8rem] tw-w-full tw-mx-auto tw-rounded-full tw-text-base max-sm:tw-text-sm">
                            View
                        </button>
                    </div>
                </div>
            </div>
            <div className="tw-border tw-mx-24 max-xl:tw-mx-20 tw-border-[#444] tw-mt-3 tw-rounded-sm"></div>
        </>
    );
};

export default FooterProducts;
