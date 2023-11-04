import React from "react";
import { ChevronDownIcon } from "../../icons/DashboardSidebarIcons";
import { prevSlideHandler, nextSlideHandler } from "./Slider";

const Button = ({ className, prevbtnClass, nextbtnClass, refProp }) => {
    

    return (
        <>
            <button
                className={`prev-btn tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-w-8 tw-h-8 tw-rounded-full tw-bg-[#BABABA] tw-p-1 ${prevbtnClass} ${className}`}
                onClick={() => prevSlideHandler(refProp)}
            >
                <ChevronDownIcon className="tw-stroke-white tw-w-full tw-h-full tw-rotate-90" />
            </button>
            <button
                className={`next-btn tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-w-8 tw-h-8 tw-rounded-full tw-bg-[#BABABA] tw-p-1 ${nextbtnClass} ${className}`}
                onClick={() => nextSlideHandler(refProp)}
            >
                <ChevronDownIcon className="tw-stroke-white tw-w-full tw-h-full -tw-rotate-90" />
            </button>
        </>
    );
};

export default Button;
