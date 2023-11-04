import React, { useState } from "react";
import {
    CloseIcon,
    EditIcon,
    ExclaimationIcon,
} from "../../icons/DashboardBodyIcons";
import { Form, FormControl, FormLabel, Modal, ModalBody, ModalHeader, Button } from "react-bootstrap";
import "./Edit.css"

const EditModal = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="tw-flex tw-justify-end tw-text-[#5575f5]" onClick={() => setShow(true)}>
                <EditIcon className="tw-w-5 tw-h-5 edit-icon" />
            </div>

            <Modal className="modal__dialog" contentClassName="tw-max-h-[35rem] tw-overflow-y-auto tw-border-0 max-[1285px]:tw-max-h-[43rem] max-[350px]:tw-max-h-[36rem]" dialogClassName="tw-max-w-4xl tw-w-[80%] tw-mx-auto max-sm:tw-w-[90%] max-[350px]:tw-w-[83%]" centered show={show} onHide={() => setShow(false)}>
                <ModalHeader className="tw-pt-5 tw-px-5 tw-border-none">
                    <div className="tw-w-fit tw-ml-auto" onClick={() => setShow(false)}>
                        <CloseIcon />
                    </div>
                </ModalHeader>
                <ModalBody className="tw-px-40 max-xl:tw-px-8 tw-pt-9 max-lg:tw-pt-0 tw-pb-12">
                    <div className="tw-flex tw-items-center tw-justify-between max-sm:-tw-mt-4 max-[350px]:tw-flex-col">
                        <div className="text-secondary max-[350px]:tw-w-full">Sameed Test</div>
                        <p className="text-secondary tw-text-sm max-[350px]:tw-w-full max-[350px]:tw-mt-7">0970 105 17139</p>
                    </div>
                    <div className="tw-mt-12 max-[350px]:tw-mt-8 tw-w-fit tw-h-fit tw-mx-auto tw-relative img-backdrop">
                        <figure className="tw-w-20">
                            <img className="tw-w-full tw-object-cover" src="https://api.myxplora.com/file?id=189615070b18e11ea8bdd216546f146d4" alt="" />
                        </figure>
                        <div className="tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-z-10 tw-text-white">
                            <EditIcon className='tw-w-6 tw-h-6' />
                        </div>
                    </div>
                    <Form className="tw-mt-16 max-sm:tw-mt-11">
                        <FormLabel className="tw-text-base max-[350px]:-tw-mb-2">Xplora Username</FormLabel>
                        <FormControl type="text" placeholder="Sameed test" className="tw-py-4 tw-rounded-2xl tw-border-gray-400 tw-text-base" />

                        <div className="tw-bg-[#f5f32f] tw-mt-11 tw-rounded-2xl tw-flex tw-gap-x-5 max-sm:tw-gap-x-3 tw-py-4 tw-pl-4 tw-pr-[1.3rem]">
                            <div className="border-[#f5f32f] tw-text-white">
                                <ExclaimationIcon className='tw-w-7 tw-h-7 tw-fill-black tw-stroke-2' />
                            </div>
                            <p className="tw-text-base">Xplora user name is publicly visible to others. As a result, Xplora recommends you not use your real name.</p>
                        </div>
                        <div className="tw-text-center">
                            <Button className="tw-mt-10 max-sm:tw-mt-4 tw-text-sm max-sm:tw-mb-12 max-[385px]:tw-mb-0 max-[361px]:tw-mb-12 tw-max-w-[21rem] tw-w-full max-sm:tw-max-w-full tw-border-none tw-py-4 tw-px-3 tw-rounded-2xl" style={{ background: 'linear-gradient(90deg, rgb(117, 75, 239), rgb(117, 75, 239) 36%, rgb(86, 117, 244))' }}>Save Changes</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default EditModal;
