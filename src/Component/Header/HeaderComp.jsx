import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/Component/Header/HeaderComp.scss";
import movieIcon from "D:/nikhil sonar/NIKHIL SONAR BACKUP/Nodejsprac/MovieBuzzz/src/assets/movix-logo.svg";
import SearchResultDataRender from '../SearchResultComp/SearchResult'

export function MovieHeaderComp() {
    const [countIconClick, setIconCLick] = useState("");
    const [countHeaderSearchText, setCountHeaderSearchText] = useState();
    // const [Keyvalid, setKeyValid] = useState(false);
    // const navigate = useNavigate();
    const inputRef = useRef(null);

    const searchEventCount = () => {
        setIconCLick("d-none-remove");
        inputRef.current.focus();
    };
    const searchCardRemove = () => {
        setIconCLick("d-none");
    };

    return (
        <>
            <div className="header-Background">
                <div className="header-container">
                    <div className="header-movie-icon">
                        <a href="/">
                            <img className="header-movie-icon-img" src={movieIcon} alt="" />
                        </a>
                    </div>
                    <div className="header-show-site">
                        <div className="header-class-text-one">
                            <NavLink to={"/target-Movies"}> Movies</NavLink>
                        </div>
                        <div className="header-class-text-two">
                            <NavLink to={"/target-Tv-Shows"}> TV Shows </NavLink>
                        </div>
                        <div
                            className="header-class-text-Search"
                            onClick={searchEventCount}
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={`searchBar d-none ${countIconClick}`}>
                    <div class="contentWrapper">
                        <div class="searchInput">
                            <input
                                className="Search-icon-click"
                                onKeyUp={(e)=> {
                                    setCountHeaderSearchText(e.target.value);
                                    if (e.key === "Enter") {
                                        <NavLink to={`/search/${countHeaderSearchText}`}></NavLink>
                                        localStorage.setItem("searchText", countHeaderSearchText);
                                        window.location.href = `/search/${countHeaderSearchText}`
                                    }
                                }}
                                autoFocus
                                type="search"
                                ref={inputRef}
                                placeholder="Search for a movie or tv show...."
                            ></input>
                            <svg
                                onClick={searchCardRemove}
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}
