import React, { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url) => {
    const [works, setWorks] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setWorks(data)
        })
    }, [url])
  return {works}
};

export default useFetch;
