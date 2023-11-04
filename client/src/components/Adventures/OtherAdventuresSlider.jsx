import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Button from "../../UI/MainUI/Button";
import { adventures } from "../../pages/Adventures/Adventure";

const OtherAdventuresSlider = ({ adventure }) => {
    const slideRef = useRef(null);
    const settings = {
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        ref: slideRef,
    };

    return (
        <div className="tw-mt-14 tw-w-[23rem] max-[1285px]:tw-w-[22rem] max-xl:tw-w-[23rem] max-lg:tw-w-full max-lg:tw-mt-10">
            <div className="tw-text-[15px] tw-opacity-90">
                You may also enjoy
            </div>
            <div className="tw-relative tw-mt-5">
                <Slider {...settings}>
                    {adventures.filter(el => (el.ended !== true && el.sliderImg !== adventure.sliderImg)).map(img => (
                        <div className="slick-slide">
                        <Link
                            className="focus:tw-outline-none"
                            to={`/campaigns/${img.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                            <img
                                className="tw-w-[94%] tw-object-cover tw-h-full"
                                src={img.sliderImg}
                                alt=""
                            />
                        </Link>
                    </div>
                    ))}
                </Slider>

                <Button
                    className="max-lg:tw-w-7 max-lg:tw-h-7"
                    prevbtnClass="-tw-left-[1.4rem] max-[500px]:-tw-left-3"
                    nextbtnClass="-tw-right-[1.4rem] max-[500px]:-tw-right-3"
                    refProp={slideRef}
                />
            </div>
        </div>
    );
};

export default OtherAdventuresSlider;
