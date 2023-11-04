import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Logo from "../../UI/MainUI/Logo";

const SignUp = () => {
    return (
        <div className="signup-page tw-w-full tw-h-screen tw-overflow-y-scroll">
            <div className="tw-pb-24 max-sm:tw-pb-20">
                <div className="tw-flex tw-items-center tw-justify-between max-sm:tw-gap-x-4 tw-py-5 max-sm:tw-py-2 tw-px-4">
                    <Logo logosize='tw-w-11 tw-h-11' />
                    <div className="tw-text-2xl max-sm:tw-text-xl max-sm:tw-text-left tw-text-end tw-mt-1 sm:tw-mt-0 tw-text-white">
                        <span>Already a user?</span>
                        <Link
                            to="/login"
                            className="tw-text-[#ff0000] tw-underline"
                        >
                            Login
                        </Link>
                    </div>
                </div>

                <div className="tw-mt-16 max-sm:tw-mt-9 tw-px-16 max-[380px]:tw-px-3 max-[300px]:tw-px-1 max-sm:tw-px-5 max-[340px]:tw-px-0 tw-text-white">
                    <h1 className="signup-text tw-text-5xl max-sm:tw-text-2xl max-[340px]:tw-text-[1.46rem] tw-tracking-wide tw-w-1/2 max-[1285px]:tw-w-[45%] max-sm:tw-w-full tw-mx-auto tw-text-center tw-leading-tight">Download and sign up to Xplora App to join Xplora</h1>

                    <figure className="tw-mx-auto tw-flex tw-justify-center tw-w-fit tw-mt-14 max-sm:tw-mt-7">
                        <img className="tw-w-[77%] tw-h-full tw-object-cover" src="https://goplay.myxplora.com/_nuxt/img/sign-up-image.32b9ecd.png" alt="" />
                    </figure>

                    <div className="tw-w-fit tw-mx-auto tw-flex tw-gap-x-8 tw-mt-10">
                        <Link to="https://apps.apple.com/gb/app/xplora/id1521983878" className="tw-w-40 max-sm:tw-w-full">
                            <img className="tw-w-full tw-object-cover" src="https://goplay.myxplora.com/_nuxt/img/get-on-app-store.be4d804.png" alt="" />
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.xplora.xplorao2o&hl=en_GB&gl=US" className="tw-w-40 max-sm:tw-w-full">
                            <img className="tw-w-full tw-object-cover" src="https://goplay.myxplora.com/_nuxt/img/get-on-google-play.9048527.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
