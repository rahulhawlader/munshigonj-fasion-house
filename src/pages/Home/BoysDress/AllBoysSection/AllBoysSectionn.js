import React from 'react';
import BoysDresses from '../BoysDress/BoysDresses';
import Kidsdresses from '../KidsDress/Kidsdresses';
import './AllBoysSection.css'

const AllBoysSectionn = () => {
    return (
        <div className='my-8 new mx-auto new-style'>
            <h1 className='text-center text-5xl my-8 text-white'>Male Dress</h1>
            <Kidsdresses></Kidsdresses>
            <BoysDresses></BoysDresses>

        </div>
    );
};

export default AllBoysSectionn;