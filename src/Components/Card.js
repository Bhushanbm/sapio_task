import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import '../App.css';

const Card = ({results}) => {
    const [toggleLike, setToggleLike] = useState(true);
    const [data1,setData1]=useState()
    console.log('hello')
    let display;
    const data2 ="https://rickandmortyapi.com/api/character";
    
    const Likefunction = (data2) => {
        console.log(data2);
        const characters = localStorage.getItem('liked');
        console.log(characters)
        if (characters) {
          const likedArray = JSON.parse(characters);
          likedArray.push(data2);
          localStorage.setItem('liked', JSON.stringify(likedArray));
          alert('Data Added');
          
          
    
          return;
        }
        localStorage.setItem('liked', JSON.stringify([data2]));
        alert('Data Added');
      };
    //   const UnLikefunction = (data2) => {
    //     const characters = localStorage.getItem('liked data');
    //     if (characters) {
    //       const likedArray = JSON.parse(characters);
    //       const filteredarray = likedArray.filter((ele) => ele.id !== data2.id);
    //       localStorage.setItem('liked data:', JSON.stringify(filteredarray));
    //       alert('Unliked It !!');
    
    //       return;
    //     }
    //   };
    
    //   useEffect(() => {
    //     const characters = localStorage.getItem('liked');
    //     if (characters) {
    //       setData1(JSON.parse(characters));
    //     }
    //   }, []);
    

  if (results) {
    display = results.map((e) => {
      let { id, name, image,status,gender,species} = e;
    
  return( 
      
    // <div  className="col-3">
    //     {name}
    //     <div className="content">
    //     <div>
    //         <img src={image} className="img-fluid"/>
    //     </div>
    //     {
    //                     toggleLike ? <button type="button" class="btn btn-primary" onClick={() => Likefunction(e)}>Like</button> :
    //                         <button type="button" class="btn btn-danger" >Dislike</button>
    //         }
    //     </div>

    //      </div>
    <div key={id}  className="col-3" >
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front" >
                <img src={image} alt="Avatar" className='img-fluid'/>
            </div>
            <div className='flip-card-back'>
                <h3>Name:{name}</h3>
                <p>Gender:{gender}</p>
                <p>Status:{status}</p>
                <p>Species:{species}</p>
                <button type="button" class="btn btn-primary" onClick={() => Likefunction(e)}>Like</button>
                
            </div>
            
            </div>
            
                
        </div>
    </div>
    
    
    

    ) 
});
}

return <>{display}</>;

}


export default Card