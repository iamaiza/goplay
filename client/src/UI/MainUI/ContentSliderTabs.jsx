import React, { useState, useRef, useEffect } from "react";
import "./Tab.css";
import { Carousel } from "react-bootstrap";

const ContentSliderTabs = ({
    tab1,
    tab2,
    tab3,
    activeTabHandler,
    idx,
    isArcade,
    isAdventure,
    isAuction,
}) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const prevIndexRef = useRef(0);

    const handleActiveNav = (index) => {
        const direction = index > prevIndexRef.current ? 1 : -1;
        const nextIndex = activeIdx + direction;
        if (
            (nextIndex >= 0 && nextIndex < 2 && index !== 2) ||
            (!isArcade &&
                !isAdventure &&
                window.innerWidth <= 350 &&
                nextIndex <= 2)
        ) {
            setActiveIdx(nextIndex);
            prevIndexRef.current = index;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const shouldScroll = window.innerWidth <= 500;
            if (!shouldScroll) {
                setActiveIdx(0);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const shouldScroll = window.innerWidth <= 500;
    const translate1 =
        (isAdventure &&
            (window.innerWidth > 350
                ? `translateX(-${activeIdx * 150}%)`
                : `translateX(-${activeIdx * 168}%)`)) ||

        (isAuction &&
            (window.innerWidth > 350
                ? `translateX(-${activeIdx * 140}%)`
                : `translateX(-${activeIdx * 130}%)`)) ||

        (isArcade && `translateX(-${activeIdx * 140}%)`);

    const translate2 =
        (isAdventure &&
            (window.innerWidth > 350
                ? `translateX(-${activeIdx * 250}%)`
                : `translateX(-${activeIdx * 320}%)`)) ||

        (isAuction &&
            (window.innerWidth > 350
                ? `translateX(-${activeIdx * 140}%)`
                : `translateX(-${activeIdx * 120}%)`)) ||

        (isArcade &&
            (window.innerWidth > 350
                ? `translateX(-${activeIdx * 110}%)`
                : `translateX(-${activeIdx * 120}%)`));

    return (
        <div className="tw-overflow-hidden tw-w-full tabslider-container">
            <Carousel
                activeIndex={activeIdx}
                onSelect={handleActiveNav}
                interval={null}
                controls={false}
                indicators={false}
            >
                <div
                    className={`slide tw-text-center tw-pb-3 tw-px-5 tw-bg-transparent max-[350px]:tw-px-4 tw-whitespace-nowrap tw-text-base max-[500px]:tw-text-lg max-[380px]:tw-text-base ${
                        idx === 0
                            ? "tw-border-b tw-text-[#6149cd] tw-border-[#6149cd]"
                            : "tw-text-black tw-opacity-80"
                    } ${
                        !isArcade ? "tw-uppercase max-[350px]:tw-text-sm" : ""
                    }`}
                    onClick={() => activeTabHandler(0)}
                    style={{
                        transform: !shouldScroll
                            ? "none"
                            : `translateX(-${activeIdx * 100}%)`,
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    {tab1}
                </div>
                <div
                    className={`slide tw-text-center tw-pb-3 tw-px-5 tw-bg-transparent max-[350px]:tw-px-4 tw-whitespace-nowrap tw-text-base max-[500px]:tw-text-lg max-[380px]:tw-text-base ${
                        idx === 1
                            ? "tw-border-b tw-text-[#6149cd] tw-border-[#6149cd]"
                            : "tw-text-black tw-opacity-80"
                    } ${
                        !isArcade ? "tw-uppercase max-[350px]:tw-text-sm" : ""
                    }`}
                    onClick={() => activeTabHandler(1)}
                    style={{
                        transform: !shouldScroll ? "none" : translate1,
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    {tab2}
                </div>
                <div
                    className={`slide tw-text-center tw-pb-3 tw-px-5 tw-bg-transparent max-[350px]:tw-px-4 tw-whitespace-nowrap tw-text-base max-[500px]:tw-text-lg max-[380px]:tw-text-base ${
                        idx === 2
                            ? "tw-border-b tw-text-[#6149cd] tw-border-[#6149cd]"
                            : "tw-text-black tw-opacity-80"
                    } ${
                        !isArcade ? "tw-uppercase max-[350px]:tw-text-sm" : ""
                    }`}
                    onClick={() => activeTabHandler(2)}
                    style={{
                        transform: !shouldScroll ? "none" : translate2,
                        transition: "transform 0.3s ease-in-out",
                    }}
                >
                    {tab3}
                </div>
            </Carousel>
        </div>
    );
};

export default ContentSliderTabs;
