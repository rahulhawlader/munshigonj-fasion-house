import React, { useEffect, useState } from 'react';

const UserGirlsDress = () => {
    const [girlsDresses, setGirlsDresses] = useState([]);

    useEffect(() => {
        fetch('girlsDress.json')
            .then(res => res.json())
            .then(data => setGirlsDresses(data))
    }, [])
    return [girlsDresses, setGirlsDresses]
};

export default UserGirlsDress;