
import Navigation from './Navigation';

import './App.css';
export default function Credits(){
   
    return(
        < >
     {Navigation()}
     
     <h1 id='credits-m'>Credits</h1>
     <hr/>
     <h3><i class="fa fa-youtube" aria-hidden="true"></i>YouTube:</h3><hr/>
     <h5>Copyright and credits of the content goes to the respective creators.<br/>Its just a compilation of their own content</h5>
     <hr/>
     <h3><i class="fa-solid fa-webhook"></i>Websites:</h3>
     <hr/>
     <h5><ul id='c-website'>
        <li>www.mozilla.com</li>
        <li>www.progamiz.com</li>
        <li>www.w3schools.com</li>
        <li>www.geeksforgeeks.com</li>
        <li>www.javatpoint.com</li>
        <li>www.wikipedia.com</li>
        </ul></h5>
      </>
    );
}