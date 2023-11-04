import React, { forwardRef, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../UI/MainUI/Button";

const SingleAdventureSlider = ({ adventure }) => {
    const slideRef = useRef(null);
    const settings = {
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        ref: slideRef,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    infinite: false,
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    ref: slideRef,
                },
            },
        ],
    };

    return (
        <div className="tw-mt-5 tw-w-[23rem] max-[1285px]:tw-w-[22rem] max-xl:tw-w-[23rem] max-lg:tw-w-full max-lg:tw-mt-7 tw-relative">
            <Slider className="img-slider" {...settings}>
                {adventure.subImages.map(img => (
                    <div className="slick-slide tw-h-52 max-lg:tw-h-auto">
                    <figure className="tw-h-full">
                        <img
                            className="tw-w-[94%] tw-h-full tw-object-fill"
                            src={img}
                            alt=""
                        />
                    </figure>
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
    );
};

export default SingleAdventureSlider;
