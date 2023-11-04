import React, { useState, useEffect } from "react";
import { Tab1, Tab2, Tab3 } from "./Links";
import Slider from "react-slick";

const UserStatsLinks = ({ library }) => {
    const settings = {
        infinite: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 350,
                settings: {
                    infinite: false,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
        ],
    };
    return (
        <>
            {!library && (
                <Slider className="userStats-slider" {...settings}>
                    <div className={`${!library && "tw-py-1.5"}`}>
                        <Tab1 library={library} />
                    </div>
                    <div
                        className={`${!library && "tw-pt-[0.12rem]"}`}
                    >
                        <Tab2 library={library} />
                    </div>
                    <div
                        className={`${!library && "tw-pt-[0.12rem]"}`}
                    >
                        <Tab3 library={library} />
                    </div>
                </Slider>
            )}
            {library && (
                <div className="tw-flex tw-mt-12 -tw-mb-1">
                    <div className={`${library && "tw-py-2"}`}>
                        <Tab1 library={library} />
                    </div>
                    <div
                        className={`${library && "tw-py-1"}`}
                    >
                        <Tab2 library={library} />
                    </div>
                    <div
                        className={`${library && "tw-py-1 tw-pr-2"}`}
                    >
                        <Tab3 library={library} />
                    </div>
                </div>
            )}
        </>
    );
};

export default UserStatsLinks;
