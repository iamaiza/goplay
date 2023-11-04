import React from "react";
import {  WatchIcon } from "../../icons/DashboardBodyIcons";
import { Col } from "react-bootstrap";
import "./Dashboard.css"
import EditModal from "../OffcanvasModals/EditModal";

const DashboardGridCol2 = () => {
    return (
        <Col className="tw-bg-[#eeeafb] tw-h-fit tw-w-full card-shadow tw-p-3 tw-rounded-[2.5rem] col2">
            <div className="tw-bg-[#e0d8ff] tw-rounded-[2.5rem] tw-p-7">
                <div className="tw-flex tw-items-center tw-justify-between tw-gap-x-2">
                    <span className="tw-text-sm">0970 105 17139</span>
                    <div>
                        <WatchIcon />
                    </div>
                </div>
                <figure className="tw-w-28 tw-border-[5px] tw-border-[#6149cd] tw-p-6 tw-rounded-full tw-mt-4 tw-mx-auto">
                    <img
                        className="tw-w-full tw-object-cover"
                        src="https://api.myxplora.com/file?id=189615070b18e11ea8bdd216546f146d4"
                        alt=""
                    />
                </figure>
                <div className="tw-text-center tw-mt-6">
                    <div className="tw-flex tw-justify-center tw-gap-x-2 max-lg:tw-w-64 tw-mx-auto max-sm:tw-w-full">
                        <h3 className="tw-text-xl max-sm:tw-text-base tw-flex-1 tw-ml-8 tw-tracking-wide tw-text-gray-900">
                            Sameed test
                        </h3>
                        <EditModal />
                    </div>
                    <div className="tw-text-[1.05rem] max-sm:tw-text-sm tw-text-gray-800">(Sameed test)</div>
                </div>
                <div className="tw-w-full tw-mt-4 tw-mb-2">
                    <div className="xplora-coins tw-bg-white tw-w-fit max-lg:tw-w-full tw-mx-auto tw-px-5 tw-flex tw-justify-center tw-gap-x-4 tw-items-center max-sm:tw-flex-col tw-py-3 tw-rounded-3xl">
                        <figure className="tw-w-14 tw-p-2 tw-bg-[#ffcbc2] tw-rounded-[1.3rem] max-sm:tw-mb-5">
                            <img
                                className="tw-w-full tw-object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/xplora-coin-3d.39767d6.png"
                                alt=""
                            />
                        </figure>
                        <div className="text-mt">
                            <p className="tw-text-gray-400 tw-text-base max-sm:tw-text-sm">
                                Xplora Coins
                            </p>
                            <p className="tw-text-2xl max-sm:tw-text-xl">1,480</p>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default DashboardGridCol2;
