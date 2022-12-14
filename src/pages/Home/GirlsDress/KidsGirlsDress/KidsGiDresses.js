import React from 'react';
import UserKidsGiDress from '../../../../Hooks/UserKidsGiDress';
import KidsGiDress from './KidsGiDress';
import { Link } from 'react-router-dom';


const KidsGiDresses = () => {
    const [kidsGiDresses] = UserKidsGiDress([])

    return (
        <>
            <h4 className='text-4xl text-center text-black'>Kids Girls Items</h4>
            <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
                {
                    kidsGiDresses.slice(0, 6).map(kidsGiDres => <KidsGiDress
                        key={kidsGiDres._id}
                        kidsGiDres={kidsGiDres}
                    ></KidsGiDress>)
                }
            </div>
            <div className='flex justify-center '>
                <Link to="/allKidsGirlsDresses">

                    < button class=" btn btn-link  text-black font-bold  ">see more</button>
                </Link>
            </div>
        </>
    );
};

export default KidsGiDresses;