import React from "react";
import { Link } from "react-router-dom";

const DashboardCard1 = ({
    className1,
    className2,
    src,
    text1,
    text2,
    slider,
    pageLink
}) => {
    return (
        <div
            className={`${className1} ${
                slider === true ? "slick-slide tw-w-full tw-px-2 max-[350px]:tw-px-1 tw-border-r" : ""
            }`}
        >
            <Link to={pageLink} className="tw-flex tw-items-center max-[350px]:tw-items-start tw-gap-x-5 max-sm:tw-gap-x-4 max-[350px]:tw-gap-x-3">
                <figure className={`${className2}`}>
                    <img
                        className="tw-w-full tw-h-full tw-object-cover"
                        src={src}
                        alt=""
                    />
                </figure>
                <div>
                    <p className="tw-text-sm max-[350px]:tw-text-xs tw-text-gray-400">{text1}</p>
                    <p className="tw-text-2xl max-[350px]:tw-text-lg">{text2}</p>
                </div>
            </Link>
        </div>
    );
};

export default DashboardCard1;
