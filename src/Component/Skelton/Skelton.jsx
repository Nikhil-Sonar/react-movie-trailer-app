import React,{useEffect} from 'react';
import './Skelton.scss';

function SkeletonLoader(props) {
    if(props.value.scrollTop == "Y"){
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    }
    
    return (
        <div className="skeleton-loader">
            <div className="skeleton-cards">
                {Array.from({ length: props.value.id }).map((_, index) => (
                    <div key={index} className="skeleton-card"></div>
                ))}
            </div>
        </div>
    );
}

export default SkeletonLoader;
