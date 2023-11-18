import { useState, useEffect } from 'react';
import { Section } from '../App';

export const useScrollCheck = (sectionId: string) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const checkScroll = () => {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY > section.offsetTop && sectionId !== Section.ACADEMIC) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return isScrolled;
};

