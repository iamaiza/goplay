import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HandThumbsUpIcon } from "../../icons/DashboardBodyIcons";
import {
    Wrapper,
    SingleAdventureSlider,
    OtherAdventuresSlider,
    ContentSlider,
    FAQs,
    AdventureSteps,
    Title,
} from "../imports";
import "./Adventure.css";

import { Col, Row } from "react-bootstrap";

import { adventures } from "./Adventure";

import AdventureDesc from "./AdventureDesc";

const AdventureDetails = () => {
    const { id } = useParams();
    const titleId = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    console.log(titleId);

    const adventure = adventures.find(el => el.title === titleId)

    return (
        <Wrapper
            className="tw-pt-36 max-lg:tw-pt-24 max-sm:tw-pt-[5.4rem]"
            // className2="tw-pl-10 tw-pr-12 max-lg:tw-px-5"
        >
            <Title title="Adventure" link="/campaigns" isAdventure={true} prodTitle={adventure.title} />
            <Row className="row-px tw-mt-20 max-sm:tw-mt-16 tw-grid tw-grid-cols-[1.2fr_2fr] max-lg:tw-block tw-pl-2 tw-pr-5 tw-gap-x-24">
                <Col className="tw-py-0 max-sm:tw-px-0">
                    <div className="tw-hidden max-lg:tw-flex tw-items-end tw-justify-between tw-px-1 tw-mb-7">
                        <div className="tw-text-2xl">{adventure.title}</div>
                        <div className="">
                            <HandThumbsUpIcon className='tw-w-8 tw-h-8' />
                            <div className="text-secondary">
                                {adventure.likes}
                            </div>
                        </div>
                    </div>
                    <div className="max-sm:tw-mt-10">
                        <figure className=" tw-w-full max-lg:tw-h-[35rem] max-sm:tw-h-auto tw-rounded-[1.6rem] tw-overflow-hidden" style={{ boxShadow: '0 0 40px 0 rgba(0,0,0,.27)' }}>
                            <img
                                className="tw-w-full max-lg:tw-w-[80%] max-lg:tw-h-full max-lg:tw-rounded-[2rem] max-sm:tw-rounded-none max-sm:tw-h-auto max-sm:tw-w-full tw-mx-auto tw-object-cover"
                                src={adventure.imgUrl}
                                alt=""
                            />
                        </figure>

                        <SingleAdventureSlider adventure={adventure} />
                        <button
                            className="btn-bg tw-mt-12 tw-py-4 tw-w-full tw-rounded-[1.3rem] tw-text-sm tw-text-white tw-hidden max-lg:tw-block"
                            style={{
                                boxShadow:
                                    "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
                            }}
                        >
                            {titleId === "Ocean Life" ? "Join Now" : "Finished"}
                        </button>
                        <ContentSlider adventure={adventure} />
                        <OtherAdventuresSlider adventure={adventure} />
                    </div>
                </Col>
                <Col className="-tw-mt-3 tw-px-0">
                    <AdventureDesc adventure={adventure} />
                    <AdventureSteps className="max-lg:tw-hidden" />
                    <FAQs className="max-lg:tw-hidden" />
                </Col>
            </Row>
        </Wrapper>
    );
};

export default AdventureDetails;
