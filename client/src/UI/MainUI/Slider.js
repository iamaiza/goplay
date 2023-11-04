const prevSlideHandler = (slideRef) => {
    if (slideRef.current) {
        slideRef.current.slickPrev();
    }
};

const nextSlideHandler = (slideRef) => {
    if (slideRef) {
        slideRef.current.slickNext();
    }
};

export {
    nextSlideHandler,
    prevSlideHandler,
};
