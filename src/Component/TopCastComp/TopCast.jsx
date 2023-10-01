import React, { useState, useEffect } from "react";
import '../TopCastComp/TopCast.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CastNoImage from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/avatar.png"

function TopCastDataRender(props) {
    const [castCount, SetCastCount] = useState([...props.dataPut.cast])

    const sliderSettings = {
        infinite: false,
        dots: false,
        arrows: false,
        speed: 1200,
        slidesToShow: 6,
        slidesToScroll: 2,
        // autoplay : true,
        autoplaySpeed : 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="castSection">
            <div className="content-Wrapper-Top-Cast">
                <div className="sectionHeading">Top Cast</div>
                <div className="listItems">
                    <Slider {...sliderSettings}>
                        { castCount.length > 0 && castCount.map(item => {
                                return (
                                    <div className="listItem">
                                        <div className="profileImg"><span className=" lazy-load-image-background blur lazy-load-image-loaded">
                                            <img className="" alt="" src={(item.profile_path == null) ? CastNoImage : `https://image.tmdb.org/t/p/original${item.profile_path}`} /></span></div>
                                        <div className="name">{item.name}</div>
                                        <div className="character">{item.character}</div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TopCastDataRender;