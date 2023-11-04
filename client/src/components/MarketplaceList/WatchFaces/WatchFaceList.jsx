import React from "react";
import Cards from "../../../UI/Marketplace/Cards";
import { watchFacesList } from "../../../pages/Marketplace/Marketplace";

const WatchFaceList = () => {
    return (
        <div className="tw-mt-7">
            <div className="tw-grid tw-grid-cols-4 max-xl:tw-grid-cols-3 max-lg:tw-grid-cols-2 max-sm:tw-grid-cols-1 tw-gap-6">
                {watchFacesList.map((list) => (
                    <Cards
                        className="tw-h-[17rem] tw-relative max-sm:tw-w-72 max-[400px]:tw-w-full tw-mx-auto"
                        imgSrc={list.img1}
                        imgSrc2={list.img2}
                        title={list.title}
                        coins={list.coin}
                        btnText="Get"
                        tag={true}
                        marketplaceList={true}
                        pageLink={`/watch-faces/${list.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default WatchFaceList;
