import { NavLink} from "react-router-dom";
import './App.css';
import './index.css'
export default function Navigation()
{
   return (
    <>
   <br/>
    <nav className="navbar" id="nav">
        <div className="container">
          <div className="logo" id="e-learn">
            E-Learn
          </div>
         
          <div className="nav-elements">
            <ul>
              <li >
                <NavLink to="/home" id="elements">Home</NavLink>
              </li>
              <li >
                <NavLink to="/credits" id="elements">Credits</NavLink>
              </li>
              <li >
                <NavLink to="/contactus" id="elements">Contact </NavLink>
              </li>
              <li >
                <NavLink to="/about" id="elements">About</NavLink>
              </li>
             
            </ul>
            
          </div>
          
        </div>
      </nav> 
 
<hr />

</>
   );
}