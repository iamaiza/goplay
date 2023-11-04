import React from "react";
import AuctionCards from "../../../UI/Marketplace/AuctionCards";
import { auctionList } from "../../../pages/Marketplace/Marketplace";

const AuctionsList = () => {
    return (
        <div className="tw-mt-7">
            <div className="tw-grid tw-grid-cols-3 max-xl:tw-grid-cols-2 max-lg:tw-grid-cols-1 tw-gap-6">
                {auctionList.map((list) => (
                    <AuctionCards
                        timeline={list.timeline}
                        prodFirstName={list.title1}
                        prodLastName={list.title2}
                        prodImgSrc={list.prodImg}
                        prodPrice={list.price}
                        userImg1={list.user1}
                        userImg2={list.user2}
                        userImg3={list.user3}
                        totalBids={list.totalBids}
                        auctionList={true}
                        endedTime={list.endedTime}
                        ended={list.ended}
                        prodId={list.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default AuctionsList;
