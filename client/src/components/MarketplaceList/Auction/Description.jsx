import React from "react";

const Description = ({ product }) => {
    return (
        <div className="tw-mt-12 max-lg:tw-mt-5 tw-border-b-2 tw-pb-8 max-lg:tw-pb-10">
            <div className="tw-text-3xl max-lg:tw-text-[1.6rem] tw-mb-5">Product Description</div>
            <b>About this item: </b>
            <ul className=" tw-list-disc tw-ml-6 tw-pt-3">
                {product.description.map((el) => (
                    <li className="tw-opacity-90 tw-py-2 max-sm:tw-text-sm">{el}</li>
                ))}
            </ul>
        </div>
    );
};

export default Description;
