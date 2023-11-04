import React from "react";
import {
    ArcadeIcon,
    AuctionIcon,
    MusicIcon,
    WatchIcon,
} from "../../icons/DashboardSidebarIcons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MarketplaceOptions = () => {
    const settings = {
        infinite: false,
        dots: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className="slick-slide">
                <Link to='/auction' className="tw-bg-[#dfdfdf] tw-p-[1.2rem] max-[400px]:tw-pr-0 tw-flex tw-items-center tw-gap-8 max-[500px]:tw-gap-6 max-[350px]:tw-gap-3 tw-mr-3 tw-rounded-3xl max-sm:tw-rounded-xl">
                    <div>
                        <AuctionIcon className="tw-w-7 tw-h-7 max-sm:tw-w-5 max-sm:tw-h-5 tw-fill-[#6149cd]" />
                    </div>
                    <p className="tw-text-base max-sm:tw-text-sm max-[400px]:tw-text-[13px]">Auction</p>
                </Link>
            </div>
            <div className="slick-slide">
                <Link to='/watch-faces' className="tw-bg-[#dfdfdf] tw-p-[1.2rem] max-[400px]:tw-pr-0 tw-flex tw-items-center tw-gap-8 max-[500px]:tw-gap-6 max-[350px]:tw-gap-3 tw-mr-3 tw-rounded-3xl max-sm:tw-rounded-xl">
                    <div>
                        <WatchIcon className="tw-w-7 tw-h-7 max-sm:tw-w-5 max-sm:tw-h-5 tw-fill-[#6149cd]" />
                    </div>
                    <p className="tw-text-base max-sm:tw-text-sm max-[400px]:tw-text-[13px]">Watch Faces</p>
                </Link>
            </div>
            <div className="slick-slide">
                <Link to='/watch-ringtones' className="tw-bg-[#dfdfdf] tw-p-[1.2rem] max-[400px]:tw-pr-0 tw-flex tw-items-center tw-gap-8 max-[500px]:tw-gap-6 max-[350px]:tw-gap-3 tw-mr-3 tw-rounded-3xl max-sm:tw-rounded-xl">
                    <div>
                        <MusicIcon className="tw-w-7 tw-h-7 max-sm:tw-w-5 max-sm:tw-h-5 tw-fill-[#6149cd]" />
                    </div>
                    <p className="tw-text-base max-sm:tw-text-sm max-[400px]:tw-text-[13px]">Watch Ringtones</p>
                </Link>
            </div>
            <div className="slick-slide">
                <Link to='/arcade' className="tw-bg-[#dfdfdf] tw-p-[1.2rem] max-[400px]:tw-pr-0 tw-flex tw-items-center tw-gap-8 max-[500px]:tw-gap-6 max-[350px]:tw-gap-3 tw-mr-3 tw-rounded-3xl max-sm:tw-rounded-xl">
                    <div>
                        <ArcadeIcon className="tw-w-7 tw-h-7 max-sm:tw-w-5 max-sm:tw-h-5 tw-fill-[#6149cd]" />
                    </div>
                    <p className="tw-text-base max-sm:tw-text-sm max-[400px]:tw-text-[13px]">Arcade</p>
                </Link>
            </div>
                
            
        </Slider>
    );
};

export default MarketplaceOptions;
