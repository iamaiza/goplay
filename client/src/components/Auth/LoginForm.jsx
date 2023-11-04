import { useState } from "react";
import MobileLogin from "./MobileLogin";
import EmailLogin from "./EmailLogin";
import "./Login.css"

const Login = () => {
    const [activeTab, setActiveTab] = useState("mobile");

    const handleMobileClick = () => {
        setActiveTab("mobile");
    };

    const handleEmailClick = () => {
        setActiveTab("email");
    };

    return (
        <div className="tw-w-full max-sm:tw-h-[570px] tw-pt-[7.5rem] max-xl:tw-pt-24 max-lg:tw-pt-20 tw-overflow-x-hidden tw-mb-5 max-sm:tw-mb-0">
            <div className="tw-mx-10 max-xl:tw-mx-6 max-lg:tw-mx-7 max-sm:tw-mx-10 login-form-container">
                <h2 className="tw-text-lg tw-leading-none tw-ml-3">Log in</h2>
                <div className="span-container tw-mt-10 tw-py-2 tw-h-[2.3rem] tw-text-sm tw-tracking-wider tw-bg-[#ffc6bb] tw-w-fit tw-rounded-full tw-cursor-pointer">
                    <span
                        className={`form tw-h-full tw-py-[0.7rem] tw-px-5 tw-rounded-full text-color ${
                            activeTab === "mobile" ? "active" : ""
                        }`}
                        onClick={handleMobileClick}
                    >
                        Mobile&nbsp;Number
                    </span>
                    <span
                        className={`tw-h-full tw-py-[0.7rem] tw-px-5 tw-rounded-full text-color ${
                            activeTab === "email" ? "active" : ""
                        }`}
                        onClick={handleEmailClick}
                    >
                        Email&nbsp;Address
                    </span>
                </div>
                <div className="tw-flex  tw-relative">
                    <MobileLogin isVisible={activeTab === "mobile"} />
                    <EmailLogin isVisible={activeTab === "email"} />
                </div>
            </div>
        </div>
    );
};

export default Login;

