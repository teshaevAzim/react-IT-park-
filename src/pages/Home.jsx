import React, { useEffect } from 'react';
import Movies from '../components/Movies';
import { useState } from 'react';
import Search from '../components/Search';

const Home = () => {
    const [blog, setBlog] = useState(null)
    const [error,setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch("https://www.omdbapi.com/?apikey=f666aefe&s=transformers")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setBlog(data)
            setLoading(false)
        })
        }, 1000);
    }, []) 

    const searchMovie = (str) => {
        setLoading(true)
        setTimeout(() => {
            fetch(`https://www.omdbapi.com/?apikey=f666aefe&s=${str}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if(data.Response === "True") {
                setBlog(data)
                setError(null)
                setLoading(false)
            }
            else {
                setBlog(null)
                setError(data.Error)
                setLoading(false)
            }
        })
        }, 1500);
    }

  return <div>
      <div className="home_page">
            {loading && <div className="center"><div className="loading"><div className="spiner"></div></div></div> }
            <Search searchMovie={searchMovie} />
            
            {error && <div>{error}</div> }
            {blog && <Movies movies = {blog.Search} />}
      </div>
  </div>;
};

export default Home;
