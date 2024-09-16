import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import profile from '../assets/profile.svg';
import image2 from '../assets/image2.svg';

const Intro = () => {
    const names = ["Suraj Kushwaha", "Frontend Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [names.length]);

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center px-4'>
            <Navbar />
            <div className='flex flex-col items-center text-center'>
                <h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold font-[profile]'>
                    I am <span className='font-cursive animate-fade text-[#118ab2]'>
                        {names[currentIndex]}
                    </span>
                </h3>
                <p className='text-lg sm:text-xl md:text-2xl mt-4'>
                    I design and code beautifully simple things, and I love what I do
                </p>
            </div>
            <div className='flex flex-col items-center mt-8 mb-12'>
                <img src={profile} alt="Profile" className='w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64' />
            </div>
            <div className='w-full flex justify-center'>
                <img src={image2} alt="Background" className='w-full max-w-3xl object-cover' />
            </div>
        </div>
    );
};

export default Intro;
