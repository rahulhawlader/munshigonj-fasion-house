import React from 'react';
import UserGirlsDress from '../../../../Hooks/UserGirlsDress';
import GirlsDress from './GirlsDress';
import { Link } from 'react-router-dom';


const GirlsDresses = () => {
    const [girlsDresses, setGirlsDresses] = UserGirlsDress([]);
    return (
        <>
            <h4 className='text-4xl text-center text-black '>Girls Dress</h4>
            <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
                {
                    girlsDresses.slice(0, 6).map(girlsDress => <GirlsDress
                        key={girlsDress._id}
                        girlsDress={girlsDress}
                    ></GirlsDress>)
                }
            </div>
            <div className='flex justify-center '>
                <Link to="/allGirlsDresses">

                    <button class=" btn btn-link  text-black font-bold ">see more</button>
                </Link>
            </div>
        </>
    );
};

export default GirlsDresses;