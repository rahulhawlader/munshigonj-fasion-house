import React from 'react';
import GirlsDresses from '../GirlsDress/GirlsDresses';
import KidsGiDresses from '../KidsGirlsDress/KidsGiDresses';
import './AllGirlsDress.css'

const AllGirlsDress = () => {
    return (
        <div className='my-10 bg-white styles mx-auto '>
            <h1 className='text-5xl text-center my-5 text-black'>Female Dress</h1>
            <KidsGiDresses></KidsGiDresses>
            <GirlsDresses></GirlsDresses>
        </div>
    );
};

export default AllGirlsDress;