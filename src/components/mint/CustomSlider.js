import React, { useState, useEffect } from "react";
import { preprocess } from "../../utils";

import "./custom.slider.css";

function CustomCarousel({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

     useEffect(() => {
        preprocess();
    }, [activeIndex])

    const slideNext = () => {
        setActiveIndex((val) => {
        if (val >= images.length - 1) {
            return 0;
        } else {
            return val + 1;
        }
        });
    };

    const slidePrev = () => {
        setActiveIndex((val) => {
        if (val <= 0) {
            return images.length - 1;
        } else {
            return val - 1;
        }
        });
    };

    if(images) {
        return (
            <>
                <div className="img">
                    <div className="img_in" data-bg-img={images[activeIndex].imgURL}>
                        <img src={images[activeIndex].imgURL} alt={images[activeIndex].imgAlt} />
                    </div>
                </div>
        
                <div class="slider_nav">
                    <a href="#" class="prev">
                        <span class="circle"></span>
                        <span class="icon"><img src="svg/down.svg" alt="" class="fn__svg" /></span>
                        <span class="circle"></span>
                    </a>
                    <a href="#" class="next">
                        <span class="circle"></span>
                        <span class="icon"><img src="svg/down.svg" alt="" class="fn__svg" /></span>
                        <span class="circle"></span>
                    </a>
                </div>
        
                <button
                    className="slider__btn-next"
                    onClick={(e) => {
                        e.preventDefault();
                        slideNext();
                    }}
                >
                    {">"}
                </button>
                <button
                    className="slider__btn-prev"
                    onClick={(e) => {
                        e.preventDefault();
                        slidePrev();
                    }}
                >
                    {"<"}
                </button>
            </>
        );
    }
}

export default CustomCarousel;
