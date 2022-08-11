import React from 'react';
import UserMarrageDress from '../../../../Hooks/UserMarrageDress';
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee';
import MarrageDress from '../MarrageDress/MarrageDress';

const MarrageAllDresses = () => {
    const [marrageDresses] = UserMarrageDress([])
    return (
        <>
            <div  >

                <h3 className='text-center font-bold text-4xl text-white my-10' > Marrage Couple Dresses</h3>
                <h3 className='text-red-400 text-3xl bg-black p-2 font-bold'> <Marquee>All New Dresses  </Marquee></h3>

                <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
                    {
                        marrageDresses.map(marrageDress => <MarrageDress
                            key={marrageDress._id}
                            marrageDress={marrageDress}
                        ></MarrageDress>)
                    }
                </div>
                <div className='flex justify-center '>
                    <Link to="/home">
                        <button class=" btn btn-link  text-white  font-bold">home</button>

                    </Link>
                </div>
            </div>
        </>
    );
};

export default MarrageAllDresses;