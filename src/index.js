import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Credits from './Credits';
import ContactUs from './ContactUs';
import About from './About';
import Explore from './Explore';
import { C , Cplus , Java , Javascript , Html , Css , Php, Bootstrap, Sql , Mongodb , Oracle , Mysql} from './Explore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> <React.StrictMode>
   
<Routes>

  <Route  exact path="" element={<App/>}/> 
  <Route  path="home" element={<App/>}/>
       <Route  exact path="credits" element={<Credits/>}/>
       <Route  path="contactus" element={<ContactUs/>}/>
       <Route  path="about" element={<About/>}/>
       <Route  path="explore" element={<Explore/>}/>
       <Route  path='explore/c' element={<C/>}/>
       <Route  path='explore/c++' element={<Cplus/>}/>
       <Route  path='explore/java' element={<Java/>}/>
       <Route  path='explore/javascript' element={<Javascript/>}/>
       <Route  path='explore/html' element={<Html/>}/>
       <Route  path='explore/css' element={<Css/>}/>
       <Route  path='explore/php' element={<Php/>}/>
       <Route  path='explore/bootstrap' element={<Bootstrap/>}/>
       <Route  path='explore/sql' element={<Sql/>}/>
       <Route  path='explore/mongodb' element={<Mongodb/>}/>
       <Route  path='explore/oracle' element={<Oracle/>}/>
       <Route  path='explore/mysql' element={<Mysql/>}/>
       </Routes>
</React.StrictMode></BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
