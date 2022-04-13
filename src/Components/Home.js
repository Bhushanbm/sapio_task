import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from './Card';
import Search from './Search';


const Home =()=>{
  const [data,setData] = useState([]);
  const [search,setSearch]= useState("");
  const [page,setPage]= useState(1);
  //console.log(data.results);
  const {results} = data;
  console.log(results);
  const api = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`;
    useEffect(()=>{
        (async function(){
          let res= await fetch(api).then((item)=>item.json())
          setData(res);
        })();
        },[api]);

    
  return (
    <div className="App">
    <div className="container">
      
      <Search setSearch={setSearch}/>
      
      <div className="col-15 " style={{marginLeft:"10%",marginRight:"10%"}}   >
            <div className="row gap-5">
            <Card results={results}/>
            
          </div>
        </div>
      </div>
      </div>
      

  
      
    );
}  
export default Home