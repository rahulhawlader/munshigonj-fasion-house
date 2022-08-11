import React, { useEffect, useState } from 'react';

const UserDiscountDress = () => {
    const [discountDresses, setDiscountDresses] = useState([]);

    useEffect(() => {
        fetch('DiscountDress.json')
            .then(res => res.json())
            .then(data => setDiscountDresses(data))
    }, [])
    return [discountDresses, setDiscountDresses]
};

export default UserDiscountDress;