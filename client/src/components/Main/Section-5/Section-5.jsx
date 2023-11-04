import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Section5 = () => {
    const defaultImg = "https://goplay.myxplora.com/_nuxt/img/section-5.77230e6.webp"
    const responsiveImg = "https://goplay.myxplora.com/_nuxt/img/section-5-mobile.518378f.webp"
    const [image, setImage] = useState(defaultImg)
    const [cookies, setCookies] = useCookies(["img"])

    useEffect(() => {
        if(cookies.img) {
            setImage(cookies.img)
        }

        window.addEventListener("resize", handleImageSize)

        return () => {
            window.removeEventListener("resize", handleImageSize)
        }
    }, [])

    const handleImageSize = () => {
        if(window.innerWidth <= 600) {
            const newImage = responsiveImg
            setCookies("img", newImage)
            setImage(responsiveImg)
        } else {
            const newImage = defaultImg
            setCookies("img", newImage)
            setImage(defaultImg)
        }
    }

    return (
        <section className="marketplace-section tw-text-center tw-text-white tw-pt-36 max-lg:tw-pt-12 tw-pb-12 max-lg:tw-px-2">
            <div>
                <h1 className="tw-text-5xl max-lg:tw-text-4xl max-sm:tw-text-[1.6rem] max-sm:tw-px-3 tw-mx-32 max-lg:tw-mx-0 tw-mb-5 tw-leading-tight">
                    Spend your well earned coins in our massive marketplace!
                </h1>
                <p className="tw-text-base tw-mx-24 max-lg:tw-mx-0 tw-mb-6">
                    Activity will be rewarded! The more steps, the more Xplora
                    Coins will fill up their wallet. The coins can be used to
                    play the coolest and best games in the Arcade, get exclusive
                    ringtones and watch faces, and to buy awesome items in the
                    auction!
                </p>
                <p className="tw-text-base">
                    Make the most out of your Xplora Coins now!
                </p>

                <figure className="tw-mt-24 max-sm:tw-mt-16">
                    <img
                        src={image}
                        alt=""
                    />
                </figure>
            </div>

            <div className="tw-mt-12">
                <h1 className="tw-text-5xl max-lg:tw-text-4xl max-sm:tw-text-[1.5rem]">Prizes and Coins Galore</h1>
                <p className="tw-text-base tw-mx-24 max-lg:tw-mx-0 tw-mt-6 tw-mb-24">Win amazing prizes and even more bonus Xplora coins!</p>
                <figure>
                    <img
                        className="tw-w-full tw-h-full tw-object-cover tw-aspect-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/section-6.9e6b182.webp"
                        alt=""
                    />
                </figure>
            </div>
        </section>
    );
};

export default Section5;
