import React from 'react';
import UserKidsGiDress from '../../../../../Hooks/UserKidsGiDress';
import AllKidsGirlsDress from './AllKidsGirlsDress';
import { Link } from 'react-router-dom';

const AllKidsGirlsDresses = () => {
    const [kidsGiDresses] = UserKidsGiDress([])
    return (
        <>
            <h4 className='text-4xl text-center text-white mt-5'> All  Girls Kids Items</h4>
            <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10'>
                {
                    kidsGiDresses.map(kidsGiDress => <AllKidsGirlsDress
                        key={kidsGiDress._id}
                        kidsGiDress={kidsGiDress}
                    ></AllKidsGirlsDress>)
                }
            </div>
            <div className='flex justify-center '>
                <Link to="/home">
                    <button class=" btn btn-link  text-white font-bold  ">Home</button>

                </Link>
            </div>
        </>
    );
};

export default AllKidsGirlsDresses;