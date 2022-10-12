import React from 'react';
import './MarrgeallStyle.css'

const MarrageAllDress = ({ marrageDress }) => {
    const { name, img, price } = marrageDress;
    return (
        <div >
            <div class="card card-compact  bg-black text-white shadow-xl">
                <figure><img src={img} alt="dress" className='imggg' /></figure>
                <div class="card-body">
                    <h2 class="card-title">Dress Name:- {name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Price:- ${price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn bg-white hover:bg-white text-black">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarrageAllDress;