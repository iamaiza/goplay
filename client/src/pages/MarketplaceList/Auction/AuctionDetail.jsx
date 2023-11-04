import React from "react";
import {
    Wrapper,
    BidingDetail,
    AuctionSlider,
    Description,
    HowToClaim,
    Title,
    AuctionBids,
    ContentDetailSlider,
} from "../../imports";
import { auctionList } from "../../Marketplace/Marketplace";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { HeartIcon } from "../../../icons/DashboardBodyIcons";

const AuctionDetail = () => {
    const { id } = useParams();
    const product = auctionList.find((prod) => prod.id === id);

    if (!product) {
        return <div>No auction product found.</div>;
    }
    return (
        <Wrapper
            className="tw-pt-[6.5rem] max-lg:tw-pt-20"
            className2="tw-px-[3.3rem] max-xl:tw-px-12"
        >
            <Title
                title="Auction"
                isAuction={true}
                prodTitle={product.title1 + product.title2}
                link="/auction"
            />

            <Row className="tw-grid tw-grid-cols-2 max-lg:tw-grid-cols-1 tw-gap-x-5 tw-mt-12 max-sm:tw-px-3">
                <div className="tw-hidden max-lg:tw-flex tw-items-center tw-justify-between tw-mb-2 max-sm:-tw-mx-2">
                    <div className="tw-text-2xl max-lg:tw-w-52">
                        {product.title1 + product.title2}
                    </div>
                    <div className="max-sm:-tw-mr-3">
                        <HeartIcon className='tw-w-10 tw-h-10' />
                    </div>
                </div>
                <Col className="tw-py-0 tw-pl-0 tw-pr-24 max-lg:tw-pr-0">
                    <div
                        className="tw-relative tw-pt-4 tw-h-[30rem] max-lg:tw-h-96 max-sm:tw-h-80 tw-pb-3 tw-rounded-lg max-[350px]:tw-h-[22rem] tw-flex tw-justify-center tw-items-center"
                        style={{ boxShadow: "0 0 10px 0 rgba(0,0,0,.27)" }}
                    >
                        <figure className="tw-w-[21rem] tw-h-full max-lg:tw-w-96 tw-mx-auto max-sm:tw-w-[80%] max-[350px]:tw-w-[85%]">
                            <img
                                className="tw-w-full tw-h-full tw-object-contain"
                                src={product.prodImg}
                                alt=""
                            />
                        </figure>
                        <div className="tw-absolute tw-top-6 tw-left-1/2 -tw-translate-x-1/2 tw-whitespace-nowrap tw-text-white tw-bg-[#6149cd97] tw-py-2 tw-px-4 max-sm:tw-px-3 tw-font-semibold tw-rounded-2xl">
                            {product.timeline}
                        </div>
                    </div>
                    <div className="tw-hidden max-lg:tw-block">
                        <AuctionBids product={product} />
                    </div>
                    <ContentDetailSlider product={product} />
                    <div className="tw-mt-12">
                        <b className="tw-font-extrabold tw-text-[15px]">
                            You may also enjoy
                        </b>

                        <AuctionSlider />
                    </div>
                </Col>
                <Col className="tw-p-0 max-lg:tw-hidden">
                    <div className="tw-text-5xl tw-pr-5">
                        {product.title1 + product.title2}
                    </div>
                    <div className="tw-mt-5">
                        <HeartIcon className='tw-w-10 tw-h-10' />
                    </div>
                    <AuctionBids product={product} />
                    <Description product={product} />
                    <BidingDetail />
                    <HowToClaim />
                </Col>
            </Row>
        </Wrapper>
    );
};

export default AuctionDetail;
