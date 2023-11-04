import React, { useState } from "react";
import { ChevronDownIcon } from "../../icons/DashboardSidebarIcons";

const GraphList = ({ className }) => {
    const [selectedOption, setSelectedOption] = useState("Today");
    const [activeOption, setActiveOption] = useState(false);
    const daysOptions = [
        "Today",
        "Last 7 days",
        "Last 31 days",
        "Last 12 months",
    ];

    const handleSelectedOption = (opt) => {
        setSelectedOption(opt);
        setActiveOption(false);
    };
    const handleToggleOption = () => {
        setActiveOption(!activeOption);
    };
    return (
        <div className={`tw-relative ${className}`}>
            <div
                className="tw-text-sm tw-flex tw-items-center tw-gap-x-1 tw-text-[#6149cd]"
                onClick={handleToggleOption}
            >
                <span>
                    {(selectedOption === "Today" && daysOptions[0]) ||
                        (selectedOption === "Last 7 days" && daysOptions[1]) ||
                        (selectedOption === "Last 31 days" && daysOptions[2]) ||
                        (selectedOption === "Last 12 months" && daysOptions[3])}
                </span>
                <div className="tw-stroke-[#6149cd] tw-w-2.5 tw-h-2.5">
                    <ChevronDownIcon />
                </div>
            </div>
            <div
                className={`tw-w-[17rem] tw-rounded tw-absolute tw-right-0 tw-top-0 tw-z-10 tw-bg-white ${
                    activeOption ? "tw-py-2" : ""
                }`}
                style={{
                    boxShadow:
                        activeOption &&
                        "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)",
                }}
            >
                {activeOption &&
                    daysOptions.map((opt) => (
                        <div
                            className={`tw-text-[15px] tw-cursor-pointer tw-py-2 tw-px-5 tw-mb-1 tw-flex tw-justify-between tw-items-center ${selectedOption === opt ? 'tw-bg-[#6149cd3b] tw-text-[#6149cd]' : ''}`}
                            onClick={() => handleSelectedOption(opt)}
                        >
                            {opt}

                            {selectedOption === opt && (
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="tw-w-4 tw-h-4 tw-stroke-[#6149cd]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default GraphList;
