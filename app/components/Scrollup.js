import React, { useEffect, useState } from 'react'

const Scrollup = () => {
    const [scrollPosition, setScrollPosition] = useState(0); // State to track scroll position
    const [isDragging, setIsDragging] = useState(false); // State to track if the thumb is being dragged

    useEffect(() => {
        const handleScroll = () => {
            if (!isDragging) {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = (window.scrollY / scrollHeight) * 100; // Scroll percentage
                setScrollPosition(scrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isDragging]);

    const trackHeight = 52; // The height of the track in svh
    const thumbPosition = (scrollPosition / 100) * trackHeight; // Calculate the thumb position based on scroll percentage


    // Helper function to scroll the window programmatically
    const scrollPage = (scrollPercentage) => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const newScrollY = (scrollPercentage / 100) * scrollHeight;
        window.scrollTo(0, newScrollY);
    };

    // Handle drag start
    const handleMouseDown = (e) => {
        setIsDragging(true);
    };

    // Handle dragging movement
    const handleMouseMove = (e) => {
        if (isDragging) {
            const trackTop = document.querySelector('.track').getBoundingClientRect().top;
            const trackHeightPx = document.querySelector('.track').offsetHeight;
            const newY = e.clientY - trackTop;
            const newScrollPercentage = (newY / trackHeightPx) * 100;
            setScrollPosition(Math.min(Math.max(newScrollPercentage, 0), 100));
            scrollPage(newScrollPercentage);
        }
    };

    // Handle drag stop
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Attach mousemove and mouseup to the window for the dragging behavior
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);


    return (
        <>
            <div
                className="track hidden lg:block fixed bottom-36 left-28 py-8">
                <div
                    className='w-2 h-[52svh] bg-[#4caf4f99] rounded-full'>
                    <div
                        className="logo h-[4rem] w-[4rem] rounded-full absolute -translate-x-9 cursor-pointer"
                        style={{ top: `${thumbPosition}svh` }}
                        onMouseDown={handleMouseDown} // Initiate drag on mousedown
                    >
                        <img
                            className="w-[4rem]" src="/imgs/avengerslog.png " alt="Avengers Logo" draggable="false" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scrollup
