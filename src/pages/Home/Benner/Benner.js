import React from 'react';

const Benner = () => {





    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img style={{ height: "600px" }} src="https://i.ibb.co/tJjpHyN/autumn-winter-fashion-mannequins-green-balls-fashion-clothing-mall-expression-green-healthy-life-hon.jpg" class="w-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img style={{ height: "600px" }} src="https://i.ibb.co/jGZrd5c/download-1.jpg" class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img style={{ height: "600px" }} src="https://i.ibb.co/S3d2F2h/download.jpg" class="w-full" alt='' />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img style={{ height: "600px" }} src="https://i.ibb.co/D5RJNhd/fashion-clothing-store-21701946.jpg" class="w-full" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Benner;
