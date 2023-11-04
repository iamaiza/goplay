import React from "react";
import "./Section-2.css";
import { images } from "./Images";
import { Row, Col } from "react-bootstrap";

const SectionImages = () => {
    return (
        <Row className="tw-py-3 tw-w-full tw-gap-x-2 tw-gap-y-5 max-[800px]:tw-gap-x-4 max-sm:tw-gap-x-0 tw-justify-center max-sm:tw-flex-wrap tw-pl-5 tw-pr-2 max-[800px]:tw-pl-10 max-sm:tw-pl-8 max-[385px]:tw-pl-[1.3rem] max-[370px]:tw-pl-[1.2rem] max-[340px]:tw-pl-0 max-[340px]:tw-ml-[0.01rem] max-[380px]:tw-pr-0">
            {images.map((img) => (
                <Col className="tw-p-0 max-sm:tw-flex-grow-0 max-sm:tw-shrink-0">
                    <div className="">
                        <figure className=" max-lg:tw-w-[4.3rem] max-[370px]:tw-w-[4.2rem] tw-mx-auto">
                            <img
                                className="tw-w-full tw-h-full tw-object-contain"
                                src={img.imgurl}
                                alt=""
                            />
                        </figure>
                        <figcaption className="max-sm:tw-text-[11px] tw-whitespace-nowrap tw-text-center max-lg:tw-text-[15px]">
                            {img.caption}
                        </figcaption>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default SectionImages;
