import React from 'react';

import Benner from '../Benner/Benner';
import AllBoysSectionn from '../../Home/BoysDress/AllBoysSection/AllBoysSectionn'
import AllGirlsDress from '../GirlsDress/AllGirsDress/AllGirlsDress';
import Contack from '../Contack/Contack';
import DisCountDresses from '../DisCountSection/DisCountDresses.js';
import MarrageDress from '../MarrgeSection/MarrageDress/MarrageDress';
import MarrageDresses from '../MarrgeSection/MarrgeDresses/MarrageDresses';





const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <AllBoysSectionn></AllBoysSectionn>
            <AllGirlsDress></AllGirlsDress>
            <DisCountDresses></DisCountDresses>
            <MarrageDresses></MarrageDresses>
            <Contack></Contack>



        </div>
    );
};

export default Home;