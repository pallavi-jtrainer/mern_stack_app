import React, { useEffect, useState } from 'react';

const LoadImage = React.memo(({src, placeholder, alt = ""}) => {
    const [loading, setLoading] = useState(true);
    const [currentSrc, setUpdatedSrc] = useState(placeholder);

    useEffect(() => {
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            setLoading(false);
            setUpdatedSrc(src);
        }
    }, [src]);

    return(
        <img src={currentSrc} style={{opacity: loading ? 0.5 : 1}} alt={alt}/>
    )
});

export default LoadImage;