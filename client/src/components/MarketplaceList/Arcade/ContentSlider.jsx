import React, { useState } from "react";
import ContentSliderTabs from "../../../UI/MainUI/ContentSliderTabs";
import { Carousel, CarouselItem } from "react-bootstrap";
import ArcadeDesc from "./ArcadeDesc";
import Instructions from "./Instructions";
import LeaderBoard from "./LeaderBoard";

const ArcadeContentSlider = ({ arcade }) => {
    const [index, setIndex] = useState(0);

    const activeTabHandler = (idx) => {
        setIndex(idx);
    };
    return (
        <div className="tw-mt-14">
            <ContentSliderTabs
                tab1="Game Description"
                tab2="Instructions"
                tab3="LeaderBoard"
                idx={index}
                activeTabHandler={activeTabHandler}
                isArcade={true}
            />
            <Carousel
                className="max-sm:tw-px-2.5"
                activeIndex={index}
                indicators={false}
                controls={false}
                interval={null}
            >
                <CarouselItem className="tw-bg-transparent tw-text-black">
                    <ArcadeDesc arcade={arcade} />
                </CarouselItem>
                <CarouselItem className="tw-bg-transparent tw-text-black">
                    <Instructions arcade={arcade} />
                </CarouselItem>
                <CarouselItem className="tw-bg-transparent tw-text-black">
                    <LeaderBoard arcade={arcade} />
                </CarouselItem>
            </Carousel>
        </div>
    );
};

export default ArcadeContentSlider;
