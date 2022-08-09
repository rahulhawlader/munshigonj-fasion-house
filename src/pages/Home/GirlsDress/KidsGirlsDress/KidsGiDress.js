import React from 'react';

const KidsGiDress = ({ kidsGiDres }) => {
    const { name, img, color, price } = kidsGiDres;
    return (
        <div >
            <div class="card w-96 bg-black shadow-xl   text-white">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Dress Name:- {name}</h2>
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

export default KidsGiDress;