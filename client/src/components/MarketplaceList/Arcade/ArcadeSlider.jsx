import React, { forwardRef, useRef } from "react";
import Slider from "react-slick";
import Cards from "../../../UI/Marketplace/Cards";
import { arcadeList } from "../../../pages/Marketplace/Marketplace";
import Button from "../../../UI/MainUI/Button";

const ArcadeSlider = () => {
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
        ],
    };

    return (
        <div className="tw-w-96 max-lg:tw-w-full">
            <div className="tw-text-lg tw-opacity-90">You may also enjoy</div>
            <div className="tw-mt-6 tw-relative">
                <Slider {...settings}>
                    {arcadeList.slice(0, 5).map((el) => (
                        <Cards
                            marketplaceList={true}
                            imgSrc={el.img}
                            title={el.title}
                            btnText="Play now"
                            coins={el.coin}
                            isArcade={true}
                            className="tw-h-72 max-lg:tw-h-[20rem] max-sm:tw-h-72"
                        />
                    ))}
                </Slider>

                <Button
                    prevbtnClass="-tw-left-5 max-lg:-tw-left-3"
                    nextbtnClass="-tw-right-5 max-sm:-tw-right-3"
                    refProp={slideRef}
                />
            </div>
        </div>
    );
};

export default ArcadeSlider;
