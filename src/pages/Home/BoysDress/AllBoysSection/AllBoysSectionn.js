import React from 'react';
import BoysDresses from '../BoysDress/BoysDresses';
import Kidsdresses from '../KidsDress/Kidsdresses';
import './AllBoysSection.css'

const AllBoysSectionn = () => {
    return (
        <div className='my-8 new mx-auto new-style'>
            <h1 className='text-center text-5xl my-8 text-lime-600'>Male Dress</h1>
            <Kidsdresses></Kidsdresses>
            <BoysDresses></BoysDresses>
            <button class="btn btn-link justify-center justify-items-center items">All Dress</button>
        </div>
    );
};

export default AllBoysSectionn;