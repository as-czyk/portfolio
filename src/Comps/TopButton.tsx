import React, {useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './TopButton.scss';

export const TopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const checkScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className={`topButton ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
        </button>
    );
};
