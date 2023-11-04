import React, { useState } from "react";
// import IntlTelInput from 'react-intl-tel-input';
// import 'react-intl-tel-input/dist/main.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./Login.css";
import { useNavigate } from "react-router-dom"

const MobileLogin = ({ isVisible }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleFormSubmission = e => {
        e.preventDefault()
        
        if(phoneNumber !== '' || password !== '') {
            localStorage.setItem('mobileLogin', JSON.stringify({ phoneNumber, password }))
            navigate('/welcome')
        }
    }

    return (
        <form
            className={`tw-mt-14 tw-absolute tw-top-0 tw-w-full tw-transition-all tw-duration-300 tw-ease-in-out ${
                isVisible ? "tw-left-0" : "-tw-left-full"
            }`}
            style={{ visibility: isVisible ? "visible" : "hidden" }}
            onSubmit={handleFormSubmission}
        >
            <div className="login-inputs tw-flex max-lg:tw-flex-col tw-gap-x-6 max-lg:tw-gap-y-6 tw-mr-7 max-lg:tw-mr-1.5 max-sm:tw-mr-0">
                <div className="tw-border tw-w-full tw-text-base tw-rounded-2xl tw-py-2.5 tw-px-4">
                    <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={value => setPhoneNumber(value)}
                        inputStyle={{ border: 0, width: "100%" }}
                    />
                </div>

                <div className="tw-border tw-w-full tw-text-base tw-rounded-2xl tw-py-4 tw-px-3">
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        className="tw-outline-none tw-w-full"
                    />
                </div>
            </div>
            <div className="remember-me tw-mt-14 tw-flex tw-items-center tw-gap-x-2">
                <input type="checkbox" className="tw-w-4 tw-h-4" />
                <span className="tw-text-base tw-text-gray-400">Remember me</span>
            </div>
            <button className="btn-bg tw-mt-9 tw-py-4 tw-px-2 tw-max-w-[17rem] -tw-ml-4 tw-w-full btn-bg tw-text-white tw-text-base tw-rounded-[1.3rem]">
                Login
            </button>
        </form>
    );
};

export default MobileLogin;
