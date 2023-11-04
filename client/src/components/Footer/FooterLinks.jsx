import React from "react";
import {
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
} from "../../icons/FooterIcons";
import { Link } from "react-router-dom"

const FooterLinks = () => {
    return (
      <div className="tw-px-6 tw-mt-48">
        <div className="tw-flex tw-justify-between tw-items-end max-sm:tw-items-center max-sm:tw-flex-col">
          <div className="item-1 tw-flex tw-gap-2 tw-ml-12 max-xl:tw-ml-8 max-sm:tw-ml-0">
            <figure className="tw-w-28 tw-mt-5 max-[960px]:tw-hidden">
              <img
                className="tw-w-full tw-object-cover"
                src="https://goplay.myxplora.com/_nuxt/img/xplora-logo.98b33b7.png"
                alt=""
              />
            </figure>
            <div className="footer_list tw-ml-44 max-xl:tw-ml-24 max-lg:tw-ml-9 max-lg:tw-text-center -tw-mt-[4.6rem] max-sm:tw-ml-0">
              <p className="tw-text-lg tw-opacity-40 tw-mb-8">MENU</p>
              <ul>
                <li className="tw-text-base tw-pb-3">About</li>
                <li className="tw-text-base tw-pb-3">Dashboard</li>
                <li className="tw-text-base tw-pb-3">Adventures</li>
                <li className="tw-text-base tw-pb-3">Marketplace</li>
                <li className="tw-text-base tw-pb-3">Contact</li>
              </ul>
            </div>
          </div>
          <div className="item-2 tw-flex tw-gap-4">
            <Link to="https://www.youtube.com/channel/UCsIfl3PccNIWXwgtyr6NHrA/featured" target="_blank" className="tw-bg-[#E5310E] tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full">
              <YoutubeIcon />
            </Link>
            <Link to="https://www.instagram.com/xplora_uk/" target="_blank" className="tw-bg-[#E5310E] tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full">
              <InstagramIcon />
            </Link>
            <Link to="https://www.facebook.com/myxplorauk" target="_blank" className="tw-bg-[#E5310E] tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center tw-rounded-full">
              <FacebookIcon />
            </Link>
          </div>
        </div>

        <div className="copyright tw-mt-14 tw-flex tw-justify-between max-lg:tw-flex-row-reverse max-sm:tw-flex-col-reverse tw-gap-4">
          <article className="tw-text-base copyright-text tw-opacity-50 tw-flex tw-items-center max-lg:tw-justify-between tw-gap-2 tw-flex-1 max-lg:tw-flex-none max-lg:tw-w-[65%] max-sm:tw-w-full max-sm:tw-justify-center max-sm:tw-flex-col max-sm:tw-text-center">
            <span>© 2022 Xplora Technologies AS.</span>
            <span>All rights reserved.</span>
          </article>
          <article className="tw-flex tw-items-center tw-justify-end max-lg:tw-justify-start tw-gap-7 tw-flex-1 max-lg:tw-flex-none copyright-text-2 tw-text-base max-lg:tw-w-[25%] max-sm:tw-w-full max-sm:tw-justify-center">
            <span>Xplora EULA</span>
            <span>Privacy Policy</span>
          </article>
        </div>
      </div>
    );
};

export default FooterLinks;
