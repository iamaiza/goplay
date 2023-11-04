import React, { forwardRef, useRef } from "react";
import { auctionList } from "../../../pages/Marketplace/Marketplace";
import Slider from "react-slick";
import AuctionCards from "../../../UI/Marketplace/AuctionCards";
import { ChevronDownIcon } from "../../../icons/DashboardSidebarIcons";
import "./Auction.css";
import { nextSlideHandler, prevSlideHandler } from "../../../UI/MainUI/Slider";
import Button from "../../../UI/MainUI/Button";

const AuctionSlider = () => {
    const slideRef = useRef(null);
    const settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        ref: slideRef,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    ref: slideRef,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: false,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    arrows: false,
                    ref: slideRef,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    ref: slideRef,
                },
            },
        ],
    };

    return (
        <div className="tw-mt-5 tw-pr-7 max-xl:tw-pr-0 tw-relative">
            <Slider className="slider" {...settings}>
                {auctionList.slice(0, 5).map((prod) => (
                    <AuctionCards
                        prodId={prod.id}
                        auctionList={true}
                        prodFirstName={prod.title1}
                        prodLastName={prod.title2}
                        prodImgSrc={prod.prodImg}
                        totalBids={prod.totalBids}
                        prodPrice={prod.price}
                        timeline={prod.timeline}
                        userImg1={prod.user1}
                        userImg2={prod.user2}
                        userImg3={prod.user3}
                        slider={true}
                    />
                ))}
            </Slider>

            <Button
                prevbtnClass="-tw-left-5 max-lg:-tw-left-3 max-[500px]:-tw-left-[0.9rem]"
                nextbtnClass="-tw-right-2 max-xl:-tw-right-5 max-lg:-tw-right-2.5 max-sm:-tw-right-[0.78rem] max-[500px]:-tw-right-[0.95rem]"
                refProp={slideRef}
            />
        </div>
    );
};

export default AuctionSlider;
