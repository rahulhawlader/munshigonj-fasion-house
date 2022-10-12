import React from 'react';

import Benner from '../Benner/Benner';
import AllBoysSectionn from '../../Home/BoysDress/AllBoysSection/AllBoysSectionn'
import AllGirlsDress from '../GirlsDress/AllGirsDress/AllGirlsDress';
import Contack from '../Contack/Contack';
import DisCountDresses from '../DisCountSection/DisCountDresses.js';

import MarrageDresses from '../MarrgeSection/MarrgeDresses/MarrageDresses';
import Reviews from '../Reviews/Reviews';
import Time from '../Time/Time';





const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Time></Time>
            <AllBoysSectionn></AllBoysSectionn>
            <AllGirlsDress></AllGirlsDress>
            <DisCountDresses></DisCountDresses>
            <MarrageDresses></MarrageDresses>
            <Reviews></Reviews>
            <Contack></Contack>



        </div>
    );
};

export default Home;