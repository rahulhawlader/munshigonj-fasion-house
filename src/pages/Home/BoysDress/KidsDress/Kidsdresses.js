import React from 'react';
import { Link } from 'react-router-dom';
import UserKidsDress from '../../../../Hooks/UserKidsDress';
import KidsDress from './KidsDress';

const Kidsdresses = () => {
    const [kidsDresses, setKidsDresses] = UserKidsDress([])

    // console.log(kidsDresses);
    return (
        <>

            <h4 className='text-center text-3xl text-white'> Kids Boys Dress </h4>
            <div className='w-11/12 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10' >

                {/* {kidsDresses.length} */}
                {
                    kidsDresses.slice(0, 6).map(kidsDress => <KidsDress
                        key={kidsDress._id}
                        kidsDress={kidsDress}
                    ></KidsDress>)
                }

            </div>
            <div className='flex justify-center '>
                <Link to="/kidAllDressses"><button class=" btn btn-link  text-white  font-bold"> see more </button> </Link>
            </div>

        </>
    );
};

export default Kidsdresses;