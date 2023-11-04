import React from "react";
import { ExclaimationIcon } from "../../icons/DashboardBodyIcons";
import Cards from "../../UI/Marketplace/Cards";
import Slider from "react-slick";
import "./WatchRingtones.css"

const WatchRingtones = () => {
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
                <h1 className="tw-text-[2.2rem] max-lg:tw-text-3xl max-sm:tw-text-[1.17rem] max-sm:tw-leading-normal tw-tracking-wide">
                    Popular Watch Ringtones
                </h1>
                <div className="tw-w-8 tw-h-8 max-sm:tw-w-5 max-sm:tw-h-4 max-sm:tw-mt-1.5 tw-rotate-180">
                    <ExclaimationIcon />
                </div>
            </div>
            <Slider {...settings} className="slider-alignment">
                <Cards
                    className="max-lg:tw-w-[84%] max-sm:tw-w-72 max-[400px]:tw-w-full tw-h-[18.5rem]"
                    imgSrc="https://goplay.myxplora.com/_nuxt/img/watch-face-sample.e82c53e.png"
                    title="Piano Dream"
                    coins="30"
                    btnText="Get"
                    tag={true}
                    audio={true}
                    audioSrc="https://xplora-images.s3.eu-central-1.amazonaws.com/117c396b0657011edb70f59fa3f350e2b.mp3"
                />

                <Cards
                    className="max-lg:tw-w-[84%] max-sm:tw-w-72 max-[400px]:tw-w-full tw-h-[18.5rem]"
                    imgSrc="https://goplay.myxplora.com/_nuxt/img/watch-face-sample.e82c53e.png"
                    title="Ringtone Vibration"
                    coins="30"
                    btnText="Get"
                    tag={true}
                    audio={true}
                    audioSrc="https://xplora-images.s3.eu-central-1.amazonaws.com/147ac4a9064e711ed9aa103f07f2d0755.mp3"
                />
            </Slider>
        </div>
    );
};

export default WatchRingtones;
