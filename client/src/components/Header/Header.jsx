import React from "react";
import "./Header.css"
import { Link } from "react-router-dom"
import Logo from "../../UI/MainUI/Logo";

const Header = () => {
    return (
        <header className="header-bg tw-p-3 max-lg:tw-py-1 tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-20 ">
            <div className="tw-flex tw-justify-between tw-items-center tw-gap-3">
                <Logo classname='max-[1265px]:tw-hidden' logosize='tw-w-11 tw-h-11 max-lg:tw-w-9 max-lg:tw-h-9' />
                <div className="tw-flex tw-items-center tw-gap-9">
                    <Link to="/login" className="tw-border tw-text-white tw-px-7 tw-py-4 max-lg:tw-py-3 tw-rounded-lg tw-text-sm hover:tw-bg-white hover:tw-bg-opacity-10">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
