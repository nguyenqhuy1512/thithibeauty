import React, { useState, useEffect, useCallback } from 'react';
import { NextIc, PreviousIc } from '../components/icon';

interface propLightBox {
    id: number,
    img: string,
}

interface propLightBoxs {
    images: propLightBox[]
}

const LightboxGallery: React.FC<propLightBoxs> = ({ images }: propLightBoxs) => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const navigatePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const navigateNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClick = (event: any) => {
        event.stopPropagation();
        // Additional logic here
    };

    const escFunction = useCallback((event: any) => {
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <div>
            <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row xs:gap-2 lg:gap-4 p-10">
                {images.map((item) => (
                    <div key={item.id} className='relative w-full h-full overflow-hidden'>
                        <img onClick={() => {
                            setIsOpen(true);
                            openLightbox(item.id)
                        }}
                            src={item.img}
                            className='h-full w-full rounded-2xl hover:scale-125 transition duration-500 ease-in-out' />
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="z-50 fixed inset-0 items-center justify-center bg-black bg-opacity-75 flex h-screen"  >
                    <div className="absolute w-full h-full items-center content-center lg:pl-[20%] lg:pr-[20%] lg:mt-20 " onClick={closeLightbox}>
                        <div className='flex w-full h-full bg-transparent justify-center items-center rounded-2xl md:pl-[10%] md:pr-[10%]' >
                            <div className='flex w-[5%] h-full justify-start items-center' onClick={handleClick}>
                                <button
                                    className="btn rounded-full bg-white text-black w-12 h-12 text-2xl"
                                    onClick={navigatePrevious}>
                                    <PreviousIc />
                                </button>
                            </div>
                            <div className='flex justify-center w-fit h-fit pl-10 pr-10'
                                onClick={handleClick}>
                                <img
                                    src={images[currentIndex].img}
                                    alt={`Image ${currentIndex}`}
                                    className={`w-full h-full object-scale-down`}
                                />
                            </div>
                            <div className='flex w-[5%] h-full justify-end items-center' onClick={handleClick}>
                                <button
                                    className="btn rounded-full bg-white text-black w-12 h-12 text-2xl"
                                    onClick={navigateNext}>
                                    <NextIc />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LightboxGallery;