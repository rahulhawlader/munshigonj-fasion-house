import React from 'react';
import './BoysDress.css'

const boysDress = ({ boysDress }) => {
    const { name, price, img, color } = boysDress
    return (
        <div class="card w-96  shadow-xl bg-white">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl boys-style" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-black"> Dress Name:- {name}</h2>
                <p className='text-black'>price:- ${price}</p>
                <p className='text-black'>color:- {color}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default boysDress;