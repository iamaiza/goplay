import React, { useState } from "react";
import { faqs } from "../../pages/Adventures/FAQS";
import { ChevronDownIcon } from "../../icons/DashboardSidebarIcons";

const FAQs = ({ className }) => {
    const [showAnswer, setShowAnswer] = useState(null);
    const handleAnswerDisplay = (idx) => {
        setShowAnswer((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div className={`tw-mt-14 max-lg:tw-mt-6 max-lg:tw-border-b max-lg:tw-pb-12 ${className}`}>
            <div className="tw-text-[2rem] max-lg:tw-text-2xl">Frequently asked questions</div>
            <div className="tw-mt-8">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="tw-py-3 tw-px-5 max-[500px]:tw-px-3 tw-mb-4 tw-cursor-pointer"
                        style={{
                            boxShadow:
                                "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                        }}
                        onClick={() => handleAnswerDisplay(idx)}
                    >
                        <div className="tw-flex tw-items-center tw-justify-between tw-gap-x-1">
                            <div className="tw-text-[15px] tw-font-bold tw-opacity-90">
                                {faq.ques}
                            </div>
                            <ChevronDownIcon className="tw-w-3 tw-h-3 tw-stroke-black" />
                        </div>
                        {showAnswer === idx && (
                            <p className="tw-text-[15px] tw-mt-5 tw-w-[90%] max-sm:tw-w-full">
                                {faq.ans}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
