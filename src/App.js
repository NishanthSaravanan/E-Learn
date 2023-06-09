//import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';


//import Home from "./Home"
import { Link } from 'react-router-dom';

//https://th.bing.com/th/id/OIP.SlSOKm2gF4DhIItFUHJPxQHaJb?pid=ImgDet&w=174&h=222&c=7

function App() {
  
  
  return (
    <>
     
    {Navigation()}
    
    <div className="App">
     

    
<div id='grid'>

<div id='content'>

<h1 id='head' ><span>&#10024;</span>
Introduction <br/> to coding from some<br/> great sources.<br/>#LearnFromTheBest 
</h1><br/>
<h5 id='context'><b>Here you explore the basics of coding and its implementation, its just a <br/>self collection of experts content from the internet.</b></h5>
<br/>


  <Link to='/explore' className="btn btn-secondary " tabindex="-1" role="button" aria-disabled="true" id='explore'>Explore</Link>
</div>
<div class="d-flex" >
  <div class="vr"></div>
</div>
<div id='picture'  type="image/png">

</div>



  </div>
  <br/>
<hr/>

       
    </div>
    
   
    </>
  );
}

export default App ;
