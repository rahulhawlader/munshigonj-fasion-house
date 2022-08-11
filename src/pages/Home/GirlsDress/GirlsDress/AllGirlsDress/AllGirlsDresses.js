import React from 'react';
import { Link } from 'react-router-dom';
import UserGirlsDress from '../../../../../Hooks/UserGirlsDress';
import AllGirlsDress from './AllGirlsDress';

const AllGirlsDresses = () => {
    const [girlsDresses] = UserGirlsDress([]);
    return (
        <>
            <h4 className='text-4xl text-center text-white '>Girls All Dress</h4>
            <div className='w-11/12 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10'>
                {
                    girlsDresses.map(girlsDress => <AllGirlsDress
                        key={girlsDress._id}
                        girlsDress={girlsDress}

                    ></AllGirlsDress>)
                }
            </div>
            <div className='flex justify-center '>
                <Link to="/home">

                    <button class=" btn btn-link text-xl  text-white font-bold ">Home</button>
                </Link>
            </div>
        </>
    );
};

export default AllGirlsDresses;