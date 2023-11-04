import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ classname, logosize }) => {
    return (
        <div className="tw-flex tw-items-center tw-gap-x-2 sm:tw-gap-x-4">
            <Link
                to="/"
                className={`tw-rounded-sm tw-overflow-hidden ${logosize}`}
            >
                <img
                    className="tw-w-full tw-h-full tw-object-cover"
                    src="https://goplay.myxplora.com/_nuxt/img/xplora-logo.98b33b7.png"
                    alt=""
                />
            </Link>
            <h1 className={`tw-text-xl sm:tw-text-3xl tw-text-white ${classname}`}>Xplora</h1>
        </div>
    );
};

export default Logo;
