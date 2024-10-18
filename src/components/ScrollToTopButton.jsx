import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <>
            {isVisible && (<button onClick={scrollToTop} className='fixed bottom-7 right-4 p-4 bg-purple-100 text-purple-600 rounded-full shadow-lg  hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 ease-in-out transform hover:scale-110'> <FaChevronUp className="w-8 h-8"  aria-label="Scroll to top" /></button>)}
        </>
    )
}

export default ScrollToTopButton
