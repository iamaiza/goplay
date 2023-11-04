import React, { useEffect, useState } from "react";
import { ExclaimationIcon, SortIcon } from "../../icons/DashboardBodyIcons";
import { useCookies } from "react-cookie";
import { DashboardHeader, DashboardSidebar, AdventureList } from "../imports";
import { adventures } from "./Adventure";

const Adventures = () => {
    const defaultImg =
        "https://goplay.myxplora.com/_nuxt/img/campaign-goldrush-desktop.570c559.png";
    const responsiveImg =
        "https://goplay.myxplora.com/_nuxt/img/campaign-banner-img.237ff09.png";
    const [img, setImg] = useState(defaultImg);
    const [cookie, setCookie] = useCookies(["adventureImg"]);

    useEffect(() => {
        if (cookie.adventureImg) {
            setImg(cookie.adventureImg);
        }
        window.addEventListener("resize", changeImageHandler);

        return () => {
            window.removeEventListener("resize", changeImageHandler);
        };
    }, []);

    const changeImageHandler = () => {
        if (window.innerWidth <= 1024) {
            const newImage = responsiveImg;
            setCookie("adventureImg", newImage);
            setImg(responsiveImg);
        } else {
            const newImage = defaultImg;
            setCookie("adventureImg", newImage);
            setImg(defaultImg);
        }
    };

    return (
        <div>
            <DashboardHeader />
            <div className="tw-flex">
                <DashboardSidebar
                    className="tw-h-screen tw-px-3 max-xl:tw-hidden"
                    position="tw-right-0 tw-top-0"
                />

                <div className="tw-pt-36 max-xl:tw-pt-28 max-sm:tw-pt-[6.5rem] tw-px-10 max-sm:tw-px-4 tw-w-full tw-max-h-screen tw-h-full tw-overflow-y-auto tw-pb-7">
                    <div
                        className="tw-flex tw-items-center tw-justify-between tw-gap-x-9 tw-py-4 max-sm:tw-py-3 tw-rounded-3xl tw-w-full"
                        style={{
                            background:
                                "linear-gradient(81deg,#754bef 2%,#5675f4 19%,#cb7ae6 98%)",
                        }}
                    >
                        <h1 className="tw-text-[2rem] tw-text-white max-lg:tw-text-base max-md:tw-text-sm tw-pl-7 max-sm:tw-pl-6 tw-leading-normal adventure-heading max-xl:tw-text-lg">
                            Welcome to Xplora Adventures
                        </h1>
                        <figure>
                            <img src={img} alt="" />
                        </figure>
                    </div>
                    <div className="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-mt-11">
                        <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2">
                            <h1 className="tw-text-4xl max-sm:tw-text-xl">
                                All Adventures
                            </h1>
                            <div className="-tw-mt-1 max-lg:-tw-mt-2 max-sm:tw-mt-0">
                                <ExclaimationIcon className="tw-w-8 tw-h-8 tw-rotate-180 max-sm:tw-w-5 max-sm:tw-h-5" />
                            </div>
                        </div>
                        <div className="tw-flex tw-items-center">
                            <div>
                                <SortIcon />
                            </div>
                            <p className="tw-text-[1.55rem] max-sm:tw-text-base">
                                Sort
                            </p>
                        </div>
                    </div>

                    <div className="tw-mt-6 max-sm:tw-mt-4">
                        {adventures.map((adventure) => (
                            <AdventureList
                                className="tw-mb-7"
                                title={adventure.title}
                                imgUrl={adventure.imgUrl}
                                startDate={adventure.startDate}
                                endDate={adventure.endDate}
                                ended={adventure.ended}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adventures;
