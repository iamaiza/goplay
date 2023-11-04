import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import Description from "./Description";
import BidingDetail from "./BidingDetail";
import HowToClaim from "./HowToClaim";
import ContentSliderTabs from "../../../UI/MainUI/ContentSliderTabs";

const ContentDetailSlider = ({ product }) => {
    const [index, setIndex] = useState(0);

    const activeTabHandler = (idx) => {
        setIndex(idx);
    };
    return (
        <div className="tw-mt-12 tw-hidden max-lg:tw-block">
            <ContentSliderTabs
                tab1="Product Description"
                tab2="Biding Details"
                tab3="How To Claim"
                activeTabHandler={activeTabHandler}
                idx={index}
                isAuction={true}
            />
            <Carousel
                activeIndex={index}
                indicators={false}
                controls={false}
                interval={null}
            >
                <CarouselItem className="tw-bg-transparent tw-text-black tw-pr-8 max-[500px]:tw-pr-5">
                    <Description product={product} />
                </CarouselItem>
                <CarouselItem className="tw-bg-transparent tw-text-black tw-pr-8 max-[500px]:tw-pr-5">
                    <BidingDetail />
                </CarouselItem>
                <CarouselItem className="tw-bg-transparent tw-text-black tw-pr-8 max-[500px]:tw-pr-5">
                    <HowToClaim />
                </CarouselItem>
            </Carousel>
        </div>
    );
};

export default ContentDetailSlider;
