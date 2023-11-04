import React, { useContext, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { LogoutIcon } from "../../icons/DashboardHeaderIcons";
import { CloseIcon } from "../../icons/DashboardBodyIcons"
import { useNavigate } from "react-router-dom";


const LogoutModal = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <button className="tw-flex tw-items-center tw-gap-x-4 tw-py-3 tw-px-5 hover:tw-bg-gray-50 tw-w-full" onClick={() => setShow(true)}>
                <LogoutIcon />
                <span className="tw-text-base tw-text-gray-500">Logout</span>
            </button>

            <Modal dialogClassName="tw-max-w-4xl tw-w-[80%] tw-mx-auto max-sm:tw-w-[92%] max-[500px]:tw-w-[88%]" centered show={show} onHide={() => setShow(false)} >
                <ModalBody className="tw-pt-3 tw-pb-12 tw-px-4 max-[500px]:tw-px-3">
                    <div className="tw-w-fit tw-ml-auto w-cursor-pointer tw-p-2 tw-rounded-full hover:tw-bg-gray-200" onClick={() => setShow(false)}>
                        <CloseIcon />
                    </div>
                    <h1 className="tw-text-center tw-mt-7 tw-text-2xl">Would you like to log out?</h1>
                    <div className="tw-flex tw-items-center tw-justify-center max-lg:tw-flex-col tw-mt-14 max-sm:tw-mt-8 tw-px-16 max-lg:tw-px-0 tw-gap-x-9 max-lg:tw-gap-y-3">
                        <button className="btn-bg tw-border tw-flex-1 tw-py-[1.2rem] tw-text-sm tw-px-2 tw-text-white tw-rounded-3xl max-lg:tw-w-full" onClick={() => navigate('/')}>Logout</button>
                        <button className="tw-border tw-border-black tw-flex-1 tw-py-[1.2rem] tw-text-sm tw-px-2 tw-rounded-3xl max-lg:tw-w-full" onClick={()=> setShow()}>Cancel</button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default LogoutModal;
