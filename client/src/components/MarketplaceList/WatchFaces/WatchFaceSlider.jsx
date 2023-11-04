import React, { useRef } from "react";
import Slider from "react-slick";
import Cards from "../../../UI/Marketplace/Cards";
import { watchFacesList } from "../../../pages/Marketplace/Marketplace";
import Button from "../../../UI/MainUI/Button";

const WatchFaceSlider = () => {
    const slideRef = useRef(null);
    const settings = {
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref: slideRef,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    infinite: false,
                    arrows: false,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    ref: slideRef,
                },
            },
        ],
    };

    return (
        <div className="tw-mt-8 tw-w-96 max-[1285px]:tw-w-[26rem] max-lg:tw-w-72 max-md:tw-w-64 max-sm:tw-w-full">
            <div className="tw-text-[1.4rem]">You may also enjoy</div>
            <div
                className="tw-relative tw-mt-6"
            >
                <Slider {...settings}>
                    {watchFacesList.slice(0, 5).map((el) => (
                        <Cards
                            isWatchList={true}
                            marketplaceList={true}
                            imgSrc={el.img1}
                            imgSrc2={el.img2}
                            title={el.title}
                            coins={el.coin}
                            btnText="Get"
                            tag={true}
                            className='max-[350px]:tw-h-64'
                        />
                    ))}
                </Slider>

                <Button
                    prevbtnClass="-tw-left-5 max-sm:-tw-left-3"
                    nextbtnClass="-tw-right-5 max-sm:-tw-right-3"
                    refProp={slideRef}
                />
            </div>
        </div>
    );
};

export default WatchFaceSlider;
