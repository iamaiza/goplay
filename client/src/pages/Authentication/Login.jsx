import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
import LoginForm from "../../components/Auth/LoginForm";
import Logo from "../../UI/MainUI/Logo";


const Login = () => {
    return (
      <div className="login-page tw-h-full">
        <div className="login-container tw-flex max-sm:tw-flex-col tw-gap-x-7 max-lg:tw-gap-x-2 tw-relative">
            <div className="tw-flex tw-items-center tw-justify-between tw-absolute max-sm:tw-gap-x-4 tw-w-full tw-px-4 tw-pt-4">
              <Logo logosize='tw-w-11 tw-h-11' />
              <div className="tw-text-base tw-text-end max-sm:tw-text-left tw-mt-2 max-sm:tw-mt-0 sm:tw-mt-0 tw-text-white md:tw-text-[#7a86a1]">
              <span>New User?</span>
              <Link to="/signup" className="tw-text-[#ff0000] md:tw-text-[#6149cd] tw-underline">Sign up</Link>
            </div>
            </div>
          <div className="left-side-items tw-h-screen max-sm:tw-h-full tw-basis-[74%] tw-py-6 max-sm:tw-pb-1 max-[500px]:tw-pb-6 max-[390px]:tw-pb-2 max-[375px]:tw-pb-1 tw-overflow-y-hidden">
            <div className="left-item-flex tw-flex tw-flex-col max-sm:tw-flex-col-reverse tw-gap-y-7">
              <div className="tw-text-white tw-mt-[5.5rem] max-xl:tw-mt-16 max-lg:tw-mt-12 max-sm:-tw-mt-16 max-[500px]:-tw-mt-9 max-[385px]:-tw-mt-5 tw-px-14 max-xl:tw-px-10 stay-active">
                <h1 className="tw-text-2xl tw-mb-1">Stay Active.</h1>
                <h1 className="tw-text-2xl">Play to move the world.</h1>
              </div>
              <div className="tw-mt-20 flex-img-container">
                <figure className="max-sm:tw-w-1/4 max-sm:tw-ml-auto">
                  <img className="tw-w-[96%] max-xl:tw-w-[99%] max-lg:tw-w-full tw-h-full object-cover -tw-ml-6" src="https://goplay.myxplora.com/_nuxt/img/login-image.c5f08c4.png" alt="" />
                </figure>
              </div>
              
            </div>
          </div>

        <LoginForm />
        </div>
      </div>
    );
};

export default Login;

