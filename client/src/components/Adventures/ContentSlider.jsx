import React, { useState, useRef, useEffect } from "react";
import AdventureSteps from "./AdventureSteps";
import FAQs from "./FAQs";
import { Carousel, CarouselItem } from "react-bootstrap";
import ContentSliderTabs from "../../UI/MainUI/ContentSliderTabs";

const ContentSlider = ({ adventure }) => {
    const [index, setIndex] = useState(0);
    const activeTabHandler = (idx) => {
        setIndex(idx);
    };
    return (
        <div className="tw-mt-7 tw-hidden max-lg:tw-block">
            <div className="">
                <ContentSliderTabs
                tab1="Adventure Description"
                tab2="How it works"
                tab3="FAQ'S"
                activeTabHandler={activeTabHandler}
                idx={index}
                isAdventure={true}
            />
            </div>
            
            <Carousel
                activeIndex={index}
                indicators={false}
                controls={false}
                interval={null}
            >
                <CarouselItem className="tw-bg-transparent tw-text-black tw-pr-8">
                    <div className="tw-mt-5 tw-border-b tw-pb-16">
                        <div className="tw-text-2xl">Adventure Description</div>
                        <div className="tw-flex tw-gap-x-5 tw-text-lg max-sm:tw-text-sm tw-mt-4 tw-mb-5">
                            <div>
                                <span className="tw-text-red-500 tw-font-bold">
                                    Start Date:{" "}
                                </span>
                                <span className="tw-text-gray-500">
                                    {adventure.startDate}
                                </span>
                            </div>
                            <div>
                                <span className="tw-text-red-500 tw-font-bold">
                                    End Date:{" "}
                                </span>
                                <span className="tw-text-gray-500">
                                    {adventure.endDate}
                                </span>
                            </div>
                        </div>
                        <div className="tw-text-gray-500">
                            {adventure.description}
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="tw-bg-transparent tw-text-black">
                    <div>
                        <AdventureSteps />
                    </div>
                </CarouselItem>
                <CarouselItem className="tw-bg-transparent tw-text-black">
                    <div>
                        <FAQs />
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    );
};

export default ContentSlider;
