import React from "react";
import AuctionCards from "../../UI/Marketplace/AuctionCards";
import { ExclaimationIcon } from "../../icons/DashboardBodyIcons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { auctionList } from "../../pages/Marketplace/Marketplace";
const AuctionProducts = () => {
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
        <div className="tw-mt-14">
            <div className="tw-flex tw-gap-3 tw-mb-7">
                <h1 className="tw-text-[2.2rem] max-lg:tw-text-3xl max-sm:tw-text-[1.17rem] max-sm:tw-leading-normal tw-tracking-wide">
                    Popular Auction Products
                </h1>
                <div className="tw-w-8 tw-h-8 max-sm:tw-w-5 max-sm:tw-h-4 max-sm:tw-mt-1.5 tw-rotate-180">
                    <ExclaimationIcon />
                </div>
            </div>
            <Slider {...settings}>
                <AuctionCards
                    timeline={auctionList[0].timeline}
                    prodImgSrc={auctionList[0].prodImg}
                    prodFirstName={auctionList[0].title1}
                    prodLastName={auctionList[0].title2}
                    prodPrice={auctionList[0].price}
                    userImg1={auctionList[0].user1}
                    userImg2={auctionList[0].user2}
                    userImg3={auctionList[0].user3}
                    totalBids={auctionList[0].totalBids}
                    prodId={auctionList[0].id}
                />
                <AuctionCards
                    timeline={auctionList[1].timeline}
                    prodImgSrc={auctionList[1].prodImg}
                    prodFirstName={auctionList[1].title1}
                    prodLastName={auctionList[1].title2}
                    prodPrice={auctionList[1].price}
                    userImg1={auctionList[1].user1}
                    userImg2={auctionList[1].user2}
                    userImg3={auctionList[1].user3}
                    totalBids={auctionList[1].totalBids}
                    prodId={auctionList[1].id}
                />
                <AuctionCards
                    timeline={auctionList[2].timeline}
                    prodImgSrc={auctionList[2].prodImg}
                    prodFirstName={auctionList[2].title1}
                    prodLastName={auctionList[2].title2}
                    prodPrice={auctionList[2].price}
                    userImg1={auctionList[2].user1}
                    userImg2={auctionList[2].user2}
                    userImg3={auctionList[2].user3}
                    totalBids={auctionList[2].totalBids}
                    prodId={auctionList[2].id}
                />
                <div className="slick-slide tw-bg-[#efefef] tw-rounded-2xl tw-w-full tw-h-[476.39px]">
                    <Link
                        to="/auction"
                        className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center"
                    >
                        +View All 69
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default AuctionProducts;
