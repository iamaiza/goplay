import React from "react";
import Logo from "./Logo";
import {
    CheckIcon,
    LogoutIcon,
    MenuOptionIcon,
} from "../../icons/DashboardHeaderIcons";
import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import Bars from "../../components/OffcanvasModals/Bars";
import LogoutModal from "../../components/OffcanvasModals/LogoutModal";

const DashboardHeader = () => {
    const logoutUserHandler = () => {
        const logout = document.querySelector(".logout");
        logout.classList.toggle("tw-hidden");
    };

    return (
        <div className="tw-flex tw-items-center tw-justify-between tw-gap-x-5 tw-text-white tw-p-3 max-xl:tw-py-[0.2rem] max-sm:tw-p-3 header-bg tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-w-full tw-z-20">
            <Logo
                classname="max-[1265px]:tw-hidden"
                logosize="tw-w-11 tw-h-11 max-xl:tw-w-8 max-xl:tw-h-8"
            />
            <div className="tw-flex tw-items-center tw-gap-x-10">
                <div className="tw-flex tw-items-center tw-gap-x-1.5">
                    <figure className="tw-w-6 tw-h-6">
                        <img
                            className="tw-w-full tw-h-full tw-object-cover"
                            src="https://goplay.myxplora.com/_nuxt/img/xplora-coin-3d.39767d6.png"
                            alt=""
                        />
                    </figure>
                    <span className="tw-text-base">
                        1480
                    </span>
                </div>
                <div className="tw-flex tw-items-center tw-gap-x-3 ">
                    <div
                        className="tw-flex tw-items-center tw-gap-x-1.5"
                        onClick={logoutUserHandler}
                    >
                        <span className="tw-text-base max-xl:tw-hidden">
                            Sameed test
                        </span>
                        <figure className="tw-w-14 tw-h-14 max-xl:tw-w-[3.2rem] max-xl:tw-h-[3.2rem] max-sm:tw-w-8 max-sm:tw-h-8 tw-p-[0.15rem] tw-border-2 tw-rounded-full">
                            <img
                                className="tw-w-full tw-h-full tw-object-cover tw-rounded-full"
                                src="https://api.myxplora.com/file?id=189615070b18e11ea8bdd216546f146d4"
                                alt=""
                            />
                        </figure>
                        <div className="">
                            <MenuOptionIcon />
                        </div>

                        <div className="tw-w-44 tw-absolute tw-top-[4.3rem] max-xl:tw-top-14 max-sm:tw-top-11 tw-right-7 max-sm:tw-right-4 tw-bg-white tw-text-[#6149cd] tw-rounded tw-py-2 tw-hidden logout">
                            <div className="tw-flex tw-items-center tw-justify-between tw-gap-x-2 tw-bg-gray-200 tw-py-2 tw-px-3">
                                <div className="tw-flex tw-items-center tw-gap-x-1">
                                    <figure className="tw-w-8 tw-h-8 tw-p-[0.2rem] tw-border-[1px] tw-border-[#0046bc] tw-rounded-full">
                                    <img
                                        className="tw-w-full tw-h-full tw-object-cover tw-rounded-full"
                                        src="https://api.myxplora.com/file?id=189615070b18e11ea8bdd216546f146d4"
                                        alt=""
                                    />
                                </figure>
                                <span className="tw-text-sm tw-font-semibold">
                                    Sameed
                                </span>
                                </div>
                                
                                <div>
                                    <CheckIcon />
                                </div>
                            </div>
                            <div className="tw-mt-2 tw-mb-2.5 tw-border"></div>
                            <LogoutModal />
                        </div>
                    </div>
                    <Bars />
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
