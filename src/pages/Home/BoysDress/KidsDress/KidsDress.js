import React from 'react';
import './KidsDress.css'


const KidsDress = ({ kidsDress }) => {
    const { name, img, price, color } = kidsDress;
    return (
        <div >
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl img-style" />
                </figure>

                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>price:- ${price}</p>
                    <p>color:- {color}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default KidsDress;