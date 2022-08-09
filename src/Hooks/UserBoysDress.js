import React, { useEffect, useState } from 'react';

const UserBoysDress = () => {
    const [boysDresses, setBoysDresses] = useState([]);

    useEffect(() => {
        fetch('boysDress.json')
            .then(res => res.json())
            .then(data => setBoysDresses(data))
    }, [])
    return [boysDresses, setBoysDresses]
};

export default UserBoysDress;