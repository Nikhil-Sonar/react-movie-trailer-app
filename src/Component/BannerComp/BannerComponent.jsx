import React, { useState, useEffect } from "react";
import "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/Component/BannerComp/banner.scss"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BannerdynamicComp(props) {
    const [serchResult, SetResult] = useState();
    const [CountBannerImage, SetBannerImage] = useState([props.dataDynamicImage]);
    const navigateTo = useNavigate();

    const BannerDyanamic = () => {
        SetBannerImage(PrevImg => [...PrevImg, CountBannerImage])
    }

    useEffect(() =>{
        BannerDyanamic();
    },[])

    const keyupEventCount = (e) => {
        SetResult(e.target.value);
        if(e.key === 'Enter'){
            navigateTo(`/search/${serchResult}`);
            localStorage.setItem("searchText", serchResult);
        }
    }

    return (
        <div>
            <div>
                <img className="Banner-Img" src={props.dataDynamicImage}></img>
                <div className="Banner-Img-container-parent">
                    <div className="Banner-Img-container">
                        <div className="Banner-Img-container-heading">Welcome.</div>
                        <div className="Banner-Img-container-para">Millions of movies, TV shows and people to discover. Explore now.</div>
                        <div className="Banner-Img-container-search">
                            <input onKeyUp={keyupEventCount} autoFocus type="search" placeholder="Search for a movie or tv show...." />
                            <button><NavLink className="Search-btn-text" to={`/search/${serchResult}`}>Search</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="opacity-layer"></div>
        </div>
    )
}

export default BannerdynamicComp;