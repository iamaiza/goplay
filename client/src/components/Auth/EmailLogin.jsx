import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const EmailLogin = ({ isVisible }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleFormSubmission = e => {
        e.preventDefault()
        if(!email === '' || !password === '') {
            localStorage.setItem('emailLogin', JSON.stringify({email, password}))
            navigate('/welcome')
        }

    }

    return (
        <form
            className={`tw-mt-14 tw-absolute tw-top-0 tw-w-full tw-transition-all tw-duration-300 tw-ease-in-out ${
                isVisible ? "tw-right-0" : "-tw-right-full"
            }`}
            style={{ visibility: isVisible ? "visible" : "hidden" }}
            onSubmit={handleFormSubmission}
        >
            <div className="login-inputs tw-flex max-lg:tw-flex-col max-lg:tw-gap-y-6 tw-gap-x-8 tw-mr-7 max-lg:tw-mr-1.5 max-sm:tw-mr-0">
                <div className="tw-border tw-text-base tw-rounded-2xl tw-w-full tw-py-4 tw-px-4">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="tw-w-full tw-outline-none"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="tw-border tw-text-base tw-rounded-2xl tw-w-full tw-py-4 tw-px-4">
                    <input
                        type="text"
                        placeholder="Password"
                        className="tw-w-full tw-outline-none"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="remember-me tw-mt-14 tw-flex tw-items-center tw-gap-x-3">
                <input type="checkbox" className="tw-w-4 tw-h-4" />
                <span className="tw-text-base tw-text-gray-400">
                    Remember me
                </span>
            </div>
            <button className="tw-mt-9 -tw-ml-4 tw-py-4 tw-px-2 tw-max-w-[17rem] tw-w-full btn-bg tw-text-white tw-text-base tw-rounded-[1.3rem]">
                Login
            </button>
        </form>
    );
};

export default EmailLogin;
