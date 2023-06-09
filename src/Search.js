import './App.css';
import { useState } from 'react';


export default function Search(){

return(
       
       <>
      
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value='search' id='search'>Ask me
            </input>
          {FinalSearch()}

          </form>
        </div>
      </nav>
        </>
        
    )
     
}
let FinalSearch = ()=>{
  var search = document.getElementById("search");
  var value = search.innerText;
  var result =value.replace(/ /g , '+');
  var final = 'https://www.google.com/search?q=' + {result} ;

return(
  <a href={final} class="btn btn-primary">Catch It</a>
)


} 