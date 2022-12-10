import React, { useState } from 'react';

const useScreenWidthController = () => {
    const [width, setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        let timeoutId = null;

        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
        }
        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return width;
}

export default useScreenWidthController;