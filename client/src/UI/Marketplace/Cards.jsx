import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { PlayIcon } from "../../icons/DashboardBodyIcons";

const Cards = ({
    imgSrc,
    imgSrc2,
    title,
    coins,
    btnText,
    className,
    tag,
    audio,
    audioSrc,
    marketplaceList,
    cardWidth,
    pageLink,
    isArcade,
    isWatchList,
}) => {
    const audioRef = useRef();

    const playAudioHandler = (e) => {
        e.preventDefault();
        const audioCurrent = audioRef.current;

        if (audioCurrent.paused) {
            audioCurrent.play();
        } else {
            audioCurrent.pause();
        }
    };

    return (
        <div
            className={`boxShadow tw-p-5 tw-rounded tw-h-full tw-relative ${
                marketplaceList === true
                    ? "tw-w-full"
                    : "slick-slide tw-w-[90%] max-xl:tw-w-[92.5%] max-lg:tw-w-[94%]"
            } ${
                cardWidth === true
                    ? " max-xl:tw-w-80 max-sm:tw-w-[20.5rem] max-[350px]:tw-w-full tw-mx-auto"
                    : "max-lg:tw-w-[20.5rem] tw-mx-auto max-[350px]:tw-w-full"
            } ${
                isArcade
                    ? "first:tw-border-l tw-border-b-2 max-lg:tw-w-[95%] max-sm:tw-w-[94%]"
                    : ""
            } ${isWatchList ? 'max-lg:tw-w-full max-sm:tw-w-[95%] max-[350px]:tw-w-[95%]' : 'boxShadow'}`}
        >
            <Link to={pageLink}>
                <div className="tw-w-full">
                    <figure
                        className={`${className} ${
                            isArcade
                                ? "tw-w-[87%] max-sm:tw-w-full"
                                : "tw-w-full"
                        } ${isWatchList ? 'tw-w-[91%] tw-mx-auto' : ''}`}
                    >
                        <img
                            className="tw-w-full tw-h-full tw-object-cover"
                            src={imgSrc}
                            alt=""
                        />
                        {imgSrc2 && (
                            <img
                                className={`tw-absolute tw-left-1/2 -tw-translate-x-1/2 tw-top-1/2 -tw-translate-y-1/2 -tw-ml-[0.1rem] -tw-z-10 ${
                                    marketplaceList === true
                                        ? "max-sm:tw-w-tw-w-[6.45rem]"
                                        : "tw-w-[6.45rem] max-lg:tw-w-[7.5rem] max-[900px]:tw-w-[6.7rem] max-[800px]:tw-w-[6.25rem] max-sm:tw-w-36 max-[500px]:tw-w-[6.45rem]"
                                } ${isWatchList ? 'tw-w-[31%] -tw-mt-[5.4rem] max-[350px]:tw-w-[60%]' : 'tw-w-[6.45rem] tw-mt-[0.25rem]'}`}
                                src={imgSrc2}
                                alt=""
                            />
                        )}
                    </figure>
                </div>

                <div className="tw-text-[15px] tw-mt-2.5">{title}</div>
                <div className="tw-flex tw-mt-20">
                    <figure className="tw-w-5 tw-h-5">
                        <img
                            className="tw-w-full tw-h-full tw-object-cover"
                            src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png"
                            alt=""
                        />
                    </figure>
                    <span>{coins}</span>
                </div>
                <button className="btn-bg tw-w-full tw-py-[0.8rem] tw-text-white tw-text-xs tw-rounded-2xl">
                    {btnText}
                </button>
            </Link>
            {tag === true && (
                <div
                    className={`tw-text-sm tw-text-white tw-absolute tw-top-[3.2rem] tw-py-[0.9rem] tw-px-5 max-xl:tw-px-3 max-lg:tw-text-left max-[350px]:tw-text-center max-[350px]:tw-px-4 max-xl:tw-left-4 max-xl:tw-right-4 tw-rounded ${isWatchList ? 'tw-text-left tw-right-5 tw-left-5' : 'tw-text-center tw-left-2.5 tw-right-2.5'}`}
                    style={{ background: "rgb(97, 73, 205, 0.6)" }}
                >
                    Download on Xplora X6Play or X6Pro
                </div>
            )}
            {audio === true && (
                <div
                    className={`tw-absolute tw-top-[30%] -tw-translate-y-[30%] tw-left-[58%] -tw-translate-x-[58%] ${
                        marketplaceList === true
                            ? "max-xl:tw-left-[55%] max-xl:-tw-translate-x-[55%]"
                            : "max-sm:tw-left-[55%] max-sm:-tw-translate-x-[55%]"
                    }`}
                >
                    <audio ref={audioRef} src={audioSrc} type="audio/mp3" />
                    <button onClick={playAudioHandler}>
                        <PlayIcon />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cards;
