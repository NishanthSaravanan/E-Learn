import Navigation from './Navigation';
import './App.css';
export default function ContactUs(){
    
    return(
        <>
        {Navigation()}
        <h1 id='credits-m'>Contact Us:</h1>
        <hr/>
        <h5>If you have any questions or concerns regarding these Terms, please contact us at <a href="mailto:nishanthsaravanan6@gmail.com">nishanthsaravanan6@gmail.com</a></h5>
        <h4>Feedback</h4>
        <textarea rows="5" id='feedback'></textarea><br/>
        <button type="submit" href="/" >Send Feedback</button>
        </>
    );
}