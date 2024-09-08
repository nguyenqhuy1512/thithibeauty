import React, { useState, useEffect, useCallback } from 'react';

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
            <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4 p-10">
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
                <div className="z-50 fixed inset-0 items-center justify-center bg-black bg-opacity-75 flex h-screen">
                    <div className="flex w-full h-10 xs:mb-[200%] lg:mb-[47%] justify-end items-center ">
                        <button
                            className="btn w-16 h-10 bg-transparent border-none relative text-white text-3xl hover:bg-transparent"
                            onClick={closeLightbox}>
                            &times;
                        </button>
                    </div>
                    <div className="absolute w-full h-full items-center content-center xs:p-5 xs:mt-5 lg:pl-[20%] lg:pr-[20%] lg:mt-20 ">
                        <div className='flex w-full h-2/3 bg-transparent rounded-2xl'>
                            <div className='flex w-[5%] h-full  justify-start items-center'>
                                <button
                                    className="btn rounded-full bg-white text-black text-2xl hover:bg-gray-600"
                                    onClick={navigatePrevious}>
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>
                            <div className='flex w-[90%] h-full justify-center xs:pl-10 xs:pr-10 xs:py-10 lg:py-0 lg:pl-0 lg:pr-0 '>
                                <img
                                    src={images[currentIndex].img}
                                    alt={`Image ${currentIndex}`}
                                    className={`flex`}
                                />
                            </div>
                            <div className='flex w-[5%] h-full justify-end items-center'>
                                <button
                                    className="btn rounded-full bg-white text-black text-2xl"
                                    onClick={navigateNext}>
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                    </svg>
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