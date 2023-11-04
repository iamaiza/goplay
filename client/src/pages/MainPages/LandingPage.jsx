import React from "react";
import {
    Header,
    Banner,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Footer,
} from "../imports";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <main
                style={{
                    background: "linear-gradient(180deg,#8635ee 7%,#4290f9)",
                }}
            >
                <Banner />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
