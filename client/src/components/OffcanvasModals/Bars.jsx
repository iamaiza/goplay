import React, { useContext, useState } from "react";
import { Offcanvas, OffcanvasBody } from "react-bootstrap";
import DashboardSidebar from "../../UI/MainUI/DashboardSidebar";
import { BarIcon } from "../../icons/DashboardHeaderIcons";

const Bars = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button className="xl:tw-hidden" onClick={() => setShow(true)}>
                <BarIcon />
            </button>
            <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                placement="end"
            >
                <OffcanvasBody className="tw-pt-1 tw-pb-0">
                    <DashboardSidebar
                        className="tw-h-full"
                        position="-tw-left-4 -tw-top-1"
                    />
                </OffcanvasBody>
            </Offcanvas>
        </>
    );
};

export default Bars;
