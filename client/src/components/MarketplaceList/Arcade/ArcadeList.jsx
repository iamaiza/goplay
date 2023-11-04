import React from "react";
import Cards from "../../../UI/Marketplace/Cards";
import { arcadeList } from "../../../pages/Marketplace/Marketplace";

const ArcadeList = () => {
    return (
        <div className="tw-mt-7">
            <div className="tw-grid tw-grid-cols-3 max-xl:tw-grid-cols-2 max-lg:tw-grid-cols-1 tw-gap-6">
                {arcadeList.map((list) => (
                    <Cards
                        className="tw-h-72 max-sm:tw-w-72 max-[400px]:tw-w-full"
                        imgSrc={list.img}
                        title={list.title}
                        coins={list.coin}
                        btnText="Play now"
                        marketplaceList={true}
                        cardWidth={true}
                        pageLink={`/arcade/${list.title
                            .toLowerCase()
                            .replace(/\s+/g, "_")}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArcadeList;
