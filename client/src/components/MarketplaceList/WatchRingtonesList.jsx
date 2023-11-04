import React from "react";
import Cards from "../../UI/Marketplace/Cards";

const WatchRingtonesList = () => {
    return (
        <div className="tw-mt-7">
            <div className="tw-grid tw-grid-cols-4 tw-gap-6 max-xl:tw-grid-cols-3 max-lg:tw-grid-cols-2 max-sm:tw-grid-cols-1">
                <Cards
                    className=" max-[400px]:tw-w-full tw-h-[18.5rem]"
                    imgSrc="https://goplay.myxplora.com/_nuxt/img/watch-face-sample.e82c53e.png"
                    title="Piano Dream"
                    coins="30"
                    btnText="Get"
                    tag={true}
                    audio={true}
                    audioSrc="https://xplora-images.s3.eu-central-1.amazonaws.com/117c396b0657011edb70f59fa3f350e2b.mp3"
                    marketplaceList={true}
                />

                <Cards
                    className=" max-[400px]:tw-w-full tw-h-[18.5rem]"
                    imgSrc="https://goplay.myxplora.com/_nuxt/img/watch-face-sample.e82c53e.png"
                    title="Ringtone Vibration"
                    coins="30"
                    btnText="Get"
                    tag={true}
                    audio={true}
                    audioSrc="https://xplora-images.s3.eu-central-1.amazonaws.com/147ac4a9064e711ed9aa103f07f2d0755.mp3"
                    marketplaceList={true}
                />
            </div>
        </div>
    );
};

export default WatchRingtonesList;
