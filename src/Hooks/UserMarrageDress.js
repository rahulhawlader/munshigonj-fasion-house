import React, { useEffect, useState } from 'react';

const UserMarrageDress = () => {
    const [marrageDresses, setMarrageDresses] = useState([]);

    useEffect(() => {

        fetch('marrageDress.json')
            .then(res => res.json())
            .then(data => setMarrageDresses(data))
    }, [])
    return [marrageDresses, setMarrageDresses]
};

export default UserMarrageDress;