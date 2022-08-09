import React from 'react';
import './KidsDress.css'


const KidsDress = ({ kidsDress }) => {
    const { name, img, price, color } = kidsDress;
    return (
        <div >
            <div class="card w-96 text-black shadow-xl bg-white">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl img-style" />
                </figure>

                <div class="card-body items-center text-center">
                    <h2 class="card-title text-black">Dress Name:- {name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Price:- ${price}   Color:- {color}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default KidsDress;