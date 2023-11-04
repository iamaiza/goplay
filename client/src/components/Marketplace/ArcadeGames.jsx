import React from "react";
import { ExclaimationIcon } from "../../icons/DashboardBodyIcons";
import Cards from "../../UI/Marketplace/Cards";
import { Link } from "react-router-dom";
import { arcadeList } from "../../pages/Marketplace/Marketplace";
import Slider from "react-slick";

const ArcadeGames = () => {
    const settings = {
        infinite: false,
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="tw-mt-16">
            <div className="tw-flex tw-gap-3 tw-mb-7">
                <h1 className="tw-text-[2.2rem] max-lg:tw-text-3xl max-sm:tw-text-[1.17rem] tw-tracking-wide">
                    Popular Arcade Games
                </h1>
                <div className="tw-w-8 tw-h-8 max-sm:tw-w-5 max-sm:tw-h-4 max-sm:tw-mt-1.5 tw-rotate-180">
                    <ExclaimationIcon />
                </div>
            </div>
            <Slider {...settings}>
                <Cards
                    className="tw-h-72 max-sm:tw-w-72 max-[400px]:tw-w-full"
                    imgSrc={arcadeList[0].img}
                    title={arcadeList[0].title}
                    coins={arcadeList[0].coin}
                    btnText="Play now"
                    pageLink={`/arcade/${arcadeList[0].title.toLowerCase()
                        .replace(/\s+/g, "_")}`}
                />
                <Cards
                    className="tw-h-72 max-sm:tw-w-72 max-[400px]:tw-w-full"
                    imgSrc={arcadeList[1].img}
                    title={arcadeList[1].title}
                    coins={arcadeList[1].coin}
                    btnText="Play now"
                    pageLink={`/arcade/${arcadeList[1].title.toLowerCase()
                        .replace(/\s+/g, "_")}`}
                />
                <Cards
                    className="tw-h-72 max-sm:tw-w-72 max-[400px]:tw-w-full"
                    imgSrc={arcadeList[2].img}
                    title={arcadeList[2].title}
                    coins={arcadeList[2].coin}
                    btnText="Play now"
                    pageLink={`/arcade/${arcadeList[2].title.toLowerCase()
                        .replace(/\s+/g, "_")}`}
                />
                <div className="slick-slide tw-bg-[#efefef] tw-rounded-2xl tw-w-full tw-h-[506.09px]">
                    <Link to='/arcade' className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
                        +View All 20
                    </Link>
                </div>
            </Slider>

        </div>
    );
};

export default ArcadeGames;
