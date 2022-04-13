import React from 'react'
import { useState, useEffect } from 'react';

const Liked = () => {
    const [like, setLike] = useState([]);

  const UnLikefunction = (like) => {
    const characters = localStorage.getItem('liked');
    if (characters) {
      const likedArray = JSON.parse(characters);
      const filteredarray = likedArray.filter((ele) => ele.id !== like.id);
      localStorage.setItem('liked', JSON.stringify(filteredarray));
      alert('Unliked It !!');

      return;
    }
  };

  useEffect(() => {
    const characters = localStorage.getItem('liked');
    if (characters) {
      setLike(JSON.parse(characters));
    }
  }, [like]);

  return (
    <div className="row">
      {like.map((ele) => (
          
        <div className="col-4">
          <div class="card">
            <img src={ele.image} class="card-img-top" alt="..." />
            <h2>{ele.name}</h2>
            <div className="card-body">
              
              <button
                href="#"
                onClick={() => UnLikefunction(ele)}
                className="btn btn-warning"
              >
                Unlike It
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Liked