import './App.css';
import Navigation from './Navigation';
import Search from './Search';
import { Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Explore(){
 

    return(
        <>
        {Navigation()}
        <br/>
        <h3 id='heading'>Programming Languages</h3><br/>
        <div class="container text-center">
  <div class="row g-2">
    <div class="col-6" id='corner'>
      <div class="p-3" ><h3>C Programming </h3><br/><h6>The C programming language is a computer programming language developed in the early 1970s by Ken Thompson and Dennis Ritchie at Bell Labs. They used it to improve the UNIX operating system. It is still much used today. C is a procedural language, which means that people write their programs as a series of step-by-step instructions. C is a compiled language, which means that the computer source code, written in C, is converted to make some machine code that a computer chip can actually execute.</h6>
      <Link to='/explore/c' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6" id='middle' >
      <div class="p-3"><h3>C++ Programming </h3><br/><h6>C++  pronounced "C plus plus" is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. First released in 1985 as an extension of the C programming language, modern C++ currently has object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Embarcadero, Oracle, and IBM.</h6>
      <Link to='/explore/c++' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6" id='corner'>
      <div class="p-3" ><h3>Java Programming </h3><br/><h6>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. </h6>
      <Link to='/explore/java' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6"id='middle'>
      <div class="p-3">
      <h3>Java Script </h3><br/><h6>JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).</h6>
      <Link to='/explore/javascript' id='learn'> Learn Now &#8594;</Link>
       
      </div>
    </div><br/>
    <h3 id='heading' className='heading-e'>MarkUp Languages</h3><br/>
    <div class="col-6" id='corner'>
      <div class="p-3" ><h3>HTML </h3><br/><h6>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.</h6>
      <Link to='/explore/HTML' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6" id='middle' >
      <div class="p-3"><h3>CSS </h3><br/><h6>CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.[3] This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.

</h6>
      <Link to='/explore/css' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6" id='corner'>
      <div class="p-3" ><h3>PHP </h3><br/><h6>PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code – which may be any type of data, such as generated HTML or binary image data – would form the whole or part of an HTTP response. Various web template systems, web content management systems, and web frameworks exist which can be employed to orchestrate or facilitate the generation of that response. The PHP language evolved without a written formal specification or standard until 2014, with the original implementation acting as the de facto standard which other implementations aimed to follow.</h6>
      <Link to='/explore/php' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6"id='middle'>
      <div class="p-3"><h3>Bootstrap </h3><br/><h6>Bootstrap is an HTML, CSS and JS library that focuses on simplifying the development of informative web pages (as opposed to web applications). The primary purpose of adding it to a web project is to apply Bootstrap's choices of color, size, font and layout to that project. As such, the primary factor is whether the developers in charge find those choices to their liking. Once added to a project, Bootstrap provides basic style definitions for all HTML elements. The result is a uniform appearance for prose, tables and form elements across web browsers. In addition, developers can take advantage of CSS classes defined in Bootstrap to further customize the appearance of their contents.</h6>
      <Link to='/explore/bootstrap' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <br/>
    <h3 id='heading' className='heading-e'>Back-end Languages</h3><br/>
    <div class="col-6" id='corner'>
      <div class="p-3"><h3>SQL </h3><br/><h6>Structured Query Language  is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e., data incorporating relations among entities and variables.

SQL offers two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, i.e., with or without an index.</h6>
      <Link to='/explore/sql' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6" id='middle' >
      <div class="p-3"><h3>MongoDB </h3><br/><h6>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL) which is deemed non-free by several distributions. MongoDB is a member of the MACH Alliance.MongoDB is a global company with US headquarters in New York City, USA and International headquarters in Dublin, Ireland.

</h6>
      <Link to='/explore/mongodb' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6" id='corner'>
      <div class="p-3" ><h3>Oracle </h3><br/><h6>Oracle Database (commonly referred to as Oracle DBMS, Oracle Autonomous Database, or simply as Oracle) is a proprietary multi-model[4] database management system produced and marketed by Oracle Corporation.

It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads. Oracle Database is available by several service providers on-prem, on-cloud, or as a hybrid cloud installation. It may be run on third party servers as well as on Oracle hardware (Exadata on-prem, on Oracle Cloud or at Cloud at Customer).[5]</h6>
      <Link to='/explore/oracle' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <div class="col-6"id='middle'>
      <div class="p-3"><h3>MySQL </h3><br/><h6>MySQL is an open-source relational database management system .  The acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.</h6>
      <Link to='/explore/mysql' id='learn'> Learn Now &#8594;</Link>
      </div>
    </div>
    <br/>
    
  </div>
</div>
      


      

        </>
    );
}
export function C ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/KJgsSFOSQv0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChF6gN0z5RPKYjyehSstuLY5CYrg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of C</h5>
    <p class="card-text">Some basic Introduction of C programming Language</p>
    <a href="https://youtu.be/KJgsSFOSQv0" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/8PopR3x-VMY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlybzcX-4mG0YhMLfBWQ6AuVNm5A" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to C programming</h5>
    <p class="card-text">Dive into basic Introduction of C programming Language</p>
    <a href="https://youtu.be/8PopR3x-VMY" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/irqbmMNs2Bo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMHBqTNGuQySW18wxlOZMhJoCQ5A" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">C programming</h5>
    <p class="card-text">Some basic stuff of C programming Language</p>
    <a href="https://youtu.be/irqbmMNs2Bo" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/gEJBFKDkqTE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGNhMtzniqcbyUeFAkl48cyfjf9g" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into C programming</h5>
    <p class="card-text">Learn Codin start with C programming Language</p>
    <a href="https://youtu.be/gEJBFKDkqTE" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/rLf3jnHxSmU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDJkIbWqgzZJ9TFsDIm75Ih4Chvtg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of C</h5>
    <p class="card-text">Get deeper into c programming language</p>
    <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/EjavYOFoJJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCfoHK5Riw6FvsvQCH8D9o8eVOsxQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation C programming</h5>
    <p class="card-text">Be a master in c programmin here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Programiz</h5>
    <p class="card-text">Some basic Introduction of C programming Language</p>
    <a href="https://www.programiz.com/c-programming" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of C programming Language</p>
    <a href="https://www.w3schools.com/c/c_intro.php" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic stuff of C programming Language</p>
    <a href="https://www.javatpoint.com/c-programming-language-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with C programming Language</p>
    <a href="https://www.geeksforgeeks.org/c-programming-language/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button>
 
 </div>

<div id='ExploreContent'>

</div>


</>
);


}
export function Cplus ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/McojvctVsUs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbF3BSR7kKuoawdIqyJmXUObZEPQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of C++</h5>
    <p class="card-text">Some basic Introduction of C++ programming Language</p>
    <a href="https://youtu.be/McojvctVsUs" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/ZzaPdXTrSb8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6nktB9woWNW8X_rG4hyqUqtsLHw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to C++ programming</h5>
    <p class="card-text">Dive into basic Introduction of C++ programming Language</p>
    <a href="https://youtu.be/ZzaPdXTrSb8" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/vLnPwxZdW4Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD29V0c5K-p76ru-aSsyFUR-bAvXQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">C++ programming</h5>
    <p class="card-text">Some basic stuff of C++ programming Language</p>
    <a href="https://youtu.be/vLnPwxZdW4Y" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/BClS40yzssA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1TNWzszrcqKKvqZmQ4cBq1ZfNMA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into C++ programming</h5>
    <p class="card-text">Learn Codin start with C++ programming Language</p>
    <a href="https://youtu.be/BClS40yzssA" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/s0g4ty29Xgg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDzKjsbf7LOkWeG8bBD-R4sK2qYPQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of C++</h5>
    <p class="card-text">Get deeper into c++ programming language</p>
    <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRh6isJ01MBnbNpV3ZsktSyS" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/z9bZufPHFLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB69QUzuJNccCxFUdLU8jvXp_BSNA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation C programming</h5>
    <p class="card-text">Be a master in c programmin here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDw8PDxAQDxASFhcREBgREhYQFQ4XGBUWFxYXFRgZHyggHSElGxcXITIlJTUrLy4vFx8/ODMsNygtLysBCgoKDg0OGhAQGy4lHyUtLS0tKzArLS0rKy0tLS4tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLf/AABEIAMgAyAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQcBBAYDAv/EAEMQAAIBAwIDBAUHCAoDAAAAAAABAgMEEQYSBSExBxNRYTJBcYGhFCIjM3KRsiRCUmLBwtLwFhc0U3OSk7HR4TZUtP/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQEDBgL/xAA1EQEAAQQBAwEEBwcFAAAAAAAAAQIDBBEFEiExEyJBUWEUFTIzcYHBIzRSkaGx4SQ1QvDx/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYMCJ4xqG1tHGNxNwclmPzJyT96TJNjFu3vu422UW6qvCP/AKe8M/v3/pVP4ST9U5c/8f6w2fRbvwP6e8M/v3/pVP4R9U5Xjp/sfRbnwb/CNS2d1JwoVlKa57WpQbXkpJZ9xov4V6xG66dNddqqjylyK1sgAAAAAAAAAAAAAAAAAAAAAYA1eIcPpXEHTrQVSD9T/wB14PzNlq7XanqonUvVFdVM9lYao0JVobqtturUerj1qU/4l/PmdLg8vTX7N3tKwtZPV5cYXsTExuEzy+qVSUZKUW4yTynF4cX5M810U1x0zDExEx3WFpbtB9GjfeyNVL8aX+6/7OczuH1PXZ/kgXcX30rFo1YzipQkpRaynF5TXk0c/VTNPaUKY09DDAAAAAAAAAAAAAAAAAAAAAABgbPDk9UaJoXe6pSxRr9cpfNqP9ZftXxLTC5O5j9p70pNrImntPhVnFuFV7Wo6VeDhL1euMl4xfrOqx8q3fp6qJWVFcVxuGiSPc9J3TmqLiyliD30m/nU5Pk/OP6LK/M463kR8J+LTdsRWtjT+obe9huoyxNenCXKUPb5eZyeVh3MerVfhWXLU0T3TJFawAAAAAAAAAAAAAAAAAAAAETxnj9vaL6WeZ+qEecpe71e8kWMa5en2YRMjNtWInc9/g5Ph+rbi6vqEFilRcsbVzcltfpP+fgWV3Aos2JqnvKqs8jcvX4jxDteJ8Mo3NN069NTi/HqvNPqmVVm9Xaq6qJ06KiuqjvSqjV+j52Wa0Jqdu3hOTUZQb6J+PtR1fHcnGR7FUd1nZyIr/Fypb+Un5ux7LH+Xy/wpfigUfOR+yj8UTL70rdOUVgAAAAAAAAAAAAAAAAAAMDweXL674rWtqMO5lsc5bW8JtLDfIn4Fii7XPUq+TyK7VMdKr6lSUm5SblJ8228ts6SmimnWnK11TVMzKV0nJK9t22klLLb5JLa+pGzYqmzVEJvGxM5FKf1X2o29vmlZpXNXpuz9FB+1en7uXmQMPhrl32rnaP6u6t4+/KpON8buryp3lzVlUf5qfKMF4Rj0R0+PiW7EaojSZTRFHh52l+48p84/FG+affDbFWvKxeyqad82nld1L8UCh5zXox+LRlfZW+corAAAAAAAAAAAAAAAAAAAYA4vtOX0ND7b/Cy24mIm5O1JzW+mnSrb3iVOlyb3S8F+3wOlosTUr8LibuRO/EIG94hUq9XiPgunvJtFmmmNOxw+Ls40do3PxaZsmIWQPHgbfCuF3F1UVK3pSqzfqiui8W+iXmyPfyLdmjqrnUPNVUUxuV19neh58P3Vq9RTrTjt2w9CksrPP1vkvuOS5LkoyZ6aY7IV6/1xqHdlQjAAAAAAAAAAAAAAAAAAAwGFcdtdeULW2UXt3VGnjrjay+4Kndyp7t41u9VE1x4UudfEb7LWKYp7QDcvXd9UqUpyUYxcpN4iorLk/BJHmqummN1TpiZiPKxdKdldattq3zdCn1VOOHUl9p9I/F+w57N5umn2bPefii3MiI+ytnhHCLe0pqlbUo0oL1RXNvxk+rfmzmrt+5endydodVc1N80vLJkAAAAAAAAAAAAAAAAAABgCs+3L+zWn+LL8DOg4D7yr8kvF8ypw635pszqNprTenql5XpUs91Go8bms8sN8l6+hDy8yLFqao8q69ydmm56cT3XrpnSFnYR+hhuqYxKpP505e/1LyWDisrOu5E+3Pb4PFd2a3QENrAAGQAAAAAAAAAAAAAAAAAAAwBXPbPazq0LSMFl968+CWwveCr6blX5Mzl0Y1M1Vq9seD06eHL58vNcl7EdDXfmpzOdzl292o7Q6jSS/Lrb7X7rK3P+4qQOOqmrIpmVwnJu0AAAAAAAAAAAAAAAAAAAAAAAGAOM7TPqaH23+FlvxH26lFzc+xG1e4Oi05ffuS+k/wC3W/2v3WQs/wC4qT+N+/pW+cm7aAAAAAAAAAAAAAAAAAAAAAAABgDje0v6mh9t/hZb8R95Kh5zXRTuFfHRuXS+k1+W2/2v3WQuQ/d6k7jf3mmFunJO4AAAAAAAAAAAAAAAAAAAAAAAGAITVHA3eQpwjNQcZbuaznlgmYeV9HqmdK/PwpyaYiJ05v8Aq/qf+xH/ACP/AJLL65j+FVfUVX8Td4NoudCvTrOtGSg84UGs8mvE0ZHJxdtzR0pGLxFVm5FfU7MqF6AAAAAAAAAAAAAAAAMGAMseAxtkMgGPwAyGDyZMgIAAY9wGQMeAMgYAyPmo+T9jM0+WJ3pSuntUX9S8tYTuakoTq04yTaxJOaymdbl4ONTjVVUxG9KS1kXZuRC7DkZXgBkAAAAAMMeWJ7RtXV32nqlWr0pWue7lOEWqvpuMsLKceXTzL21ws3KIr6vKvq5DVWtPLhvaknUUbm37uDfOUJOTh4Nxa5/z1PV7hJindurbzTyHf2o06LV+ro8PjQkqXfqtuaxU2JKO3n0ec7iBg4E5NVUb1r5JORlelETre2lwTtAhd3lK1p0JKNRPM5T9FqDk0o45rljOUbsniqrFqblVXj3NdrN66ojTx1J2kUbarKjQpfKJQe2cnLZCLzzS5Nv4HvE4eu7T11zqGL2bFFWqY29dLdoVG8qRoVafyerLlD52+NR+GcLDPGZxVdinridwzZzabk6ntKQ1brCjw/bGUXVrSW6MIvbheMn6uftNGDx9eTPadR8W3IyabMfNzVPtXjtk5WjU01hKr82S9fPbyx7Cw+oZmrtXH8kWOR15h0lTVu3ha4l3OU8fR7/Gps9Lb7+hX04Ezk/R9/mk/SdWfU0gYdqVOXdKNrJznLEk6mFDLwue3n9yJ1XB10bmauyPTyG9ahMat1vTsZxoQpuvXaTcU9qgn0y8Pm/AiYXHVZG6pnVLffy/T1qO6P4J2iKrcRtrq3lbSm1GL3NpN9FJNJrL9fmb8jiZoo9S3V1RDVazd19FUaSesdYrh06UHQdbvE5fWbNuGv1X4mjB46cuJnq1ptyMr0p8bc9cdq0VUxC1cqSfWVTbOS8UscifTwMzRua+/wAEeeQ14h98S7VIRmlb27qQwsynPY2+rSWGebXBVzHt1an4FXIR7oddpnUNK/t3XppxccxnFvLhJLOM+tYa5lXlYlWPc6Kkyzfi5HVDj+EdorrXFCj8jpw7ypCnlTy47pJZ9HzLbI4ibdmbnXvttBt5vVX0xSmNWa7VhcKg7d1cwU895s6uSxja/D4kPC4z6TR1deki9lTbq1pFWnakqlSnT+Rtb5Rhnvs4y8Z9Ak3ODm3T1de/y/y1U8h1VdOlkFCsgAAAAYY97EqU4BUoR45OVxtUO+rYc/RU909refP44OtyKa6sCOjzqFJbmiL+6k12vXFtJWyhKEq6cs7Wm1DH52PPGPYyLwlFyJq6o1Ddn1W5iNeUbrqMlw7gyn6XdSznrjbSx8MG7jOn6Remnx/68ZUT6dG3e6Z4PRo2FCdGlBVnRU1Pat7nOnlvd16spcnIruX5657b/VPs2qabcaju4Tspnbxu63f7VV2/Rb+XPL34z+d0+JdcvFybNMW/Hv0gYUxFyep59oEqUuK0vke11Po9/d9HV3vHT1+j8D1xvXTi1et4922MmafVj0/L61ltp8cU7pZoOVGfNZTpqMU+XrW5S5e0xg7qwZptfa7mR2yI6/CR7T+LWFe3oRoTpVaykmnTw9kNrym1057eRp4ixkUXZmqJiGzMrt1RqHpc/wDi8Pd/9J4o/wB1n8f0Zn90bvZXwe3lZuvOlCpUlUkszipOKjhJRz0NPM5Fz1+iJ7Q2YVqjo372pqvjTfFIW9na27uouK72pHMnJxzyfLpHxybMPF/003LtU9PweMi7+06aY7uZ1VC8jf0PltSnUrYptd10hHe8R6LnnL95ZYU2Zx6vSjUIt3q9SJr8p3tk+ttPsT/FEh8FOqLiRyEd6Up2jWdOPCaG2EY7JU1DCxtTi84I/F3KpzJ3PnbZl00xZjsadtKb07UbhFuVK4nLl6UoyqbW/NbV9x4y7tcch2nxMfoWaKfo+9PHsa+pvPDdD8LNvO766N/P9GMDxU5ng1tCpxyEKUVGnG4k4KPRRpuUlj/KWeRXVTxu6vOv7otuneRp3mvtVU7KHd01Gd1NfNyk+6X6Uv2IouNwa79W5nVMf1T8u/TbjUeUH2f6cpqSvrycJVZPfShKabi3z3y/W8F6vb0mcnl1THoWonpjzLRi2Y36lc91nHPLUAAAAGGGJUdw7g0L3i1zb1JSgpVK7Tj1i1NtHYXMibGHTXT8lHTbpu3+l2PCey+hSqKdevK4jF5UNndxeP0ubyvuKm/zdddHTRT0ptGBTTO5nac1fpSHEVRUqrpKluxtipZ3bfP9UiYWdOL1TEb23X8aLuu+tJvh9r3VGlRT3KnCME3yztiln4EKuvrrmr4t9NOqdOQ1J2c0LqrKtSqO3nN5mtu+En4pZWGWuJzF2zR0VRuES9hRXO6Z09tL6AoWdRVpzdxVj6DcdkYPxUcvn7zzmcrcyKemI6YZsYUW+8zuUR2h8VtndU7W8tJOmsSVaM8TUZLnsWOeGuafh0JPGWbvpTctV9/4WrLuUzV01R+bkNQw4VClGFhKtXqyknKdRNbI4fzUnGPVter1FrizlzV1X9REe5BuxZ1EUeVlWOmnV4NRsasnSk4xlJ4y4Pf3mMfA5+5mxRmTep79/wDCzpx+qxFEpbS/A1Y2/wAnjN1FuctzW18yLl5M5FzrmNN+Pa9KnpQuqNB07yv8pp1pW9Z43NR3qTXJS6pp4x9xLw+UqsW+iqncNF7Di5V1ROml/VlTbpzd1VlUi905Sju7xp8ur5fE3RzNUUzT0RqXiMCN7me6X1do+HEJUpSrSpd2nFYipbstefkRcLkJxaaoiN7bb2LF3W58NzUeno3lrG1dR01Fxe5Ld6Kx0NWPlzZu+pENlyxFdPScP09Gjw92CqOUXCpT37cP6RyeceW74GLuVNzI9aY98T/IosxFvoeWkdLx4dGrGNV1e8ak8x27cJrx8zZm5s5NUTMa084+PFrfzaGndCws7pXXfyqySlylFLnLq+vm/vN+VylV+16XTqPxa7OHFFc17Y1PoSF9cO4lXlTbjGGFBSXLPmMPlKsajoinZfw6blXVMo237LacJwn8qm9slLHdrnh58TfXzU1U9PRH/fya6MDpq31LEKNYgAAAAwPB8kVaaetKVZ3FOjGNZuTck3luXpev1kirKu10enM9mmLFumdxHdLEduAAADAO7R4pwm3uobLilCrFdNy5x801zXuNtq/cszu3Omu5aprjuj+HaO4fbzVSlbxU1zi5SlU2vxW5vBvu5+RdjVdTXRi2qfEJ4hpH4MgAAAAAAAAAAAAAAAAGBAAZAAAAGEAAGBkywBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Programiz</h5>
    <p class="card-text">Some basic Introduction of C programming Language</p>
    <a href="https://www.programiz.com/cpp-programming" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of C programming Language</p>
    <a href="https://www.w3schools.com/cpp/cpp_intro.asp" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABU1BMVEX39/cAAAD////29vbuAAL6+vrLAAD79/v99fL5v7fyAAHy+fkEBATrAwLz8/PvAADs7OzV1dXYAADh4eG+vr6wsLCTk5O4uLjkAADOzs6JiYmkpKTgAADb29ufn59ra2tJSUl1dXXDAAD5AABZWVk5OTkqKiqBgYH99PkPDw/w+/QfHx/Q0NBiYmIyMjJQUFBAQED09v/FAAD4trPp/fz/7OgYGBj/9f//9vH2vL74/O/vxLv339j+7uG0Uk23AACVLTT81NTLABTqpaj/5Obr/uzffoHqYFbOOzvFHRz/yMDml5bVXFzoZWT4rLPXSEn/yMziiY/gfXbmqZzxc3jwmqjShorFjJLkvsHeeoPliqDnWF3PJSrXa2fKRk/FT026PDzBLinF29WnmaSxERP5lJvbQEjVCh/choXXXmHpo6DuU2HgOjrabnjnmYr81NmiFBscMCyMAAAOBUlEQVR4nO2b/VvbRhLH5ZXXEhaSZfn9HWODZfHqBCLhkMuR0lwICUmTvlyuSVru+na56/X+/59uZlZ2DC02pAToPfN5UpAXSbvfndmZWcnVNIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhbjSRqVnSMKyLAxcHQWANBobva8F165iGYRiOhT8vhu/76mBgGTda4dYgDA1tGJkXJlZqgh11w7huHWcDCv3tu3MfwE7M7jDQbrJCEzzs3p/upz4Ez/NS9/+8Z0pNs65bx9mAewbDuQfJ9MXpdDqZTOqTfViPN3kdfmqGRrD90EvaF6UM/+reX+5F2iC8wU6qfaqHoaXtPqpn0uVyJp0k0hk7ncafJ4CGdLKczKhzkiixfvB4GFhG6JvXrWMW8t1iplP30iOF9UUvdct7T0r9gF/36/E5SRSbOoyue+jnZf+JlxnbJ1N+evvo9t3bp9jZmds5mntajo2YSafrz7ave+Dnxn++aHfS4Ik0du8wgjQn5XAY4C8REPBb+sNDTym0Mx37YC66wUH0JJb/MJWGlRjb8LPIF8I3BIJpXagjaDMf2rENy+nUwyj4Aynch2Bjxwrrh0MrCESAsrAEhWMpZYAfhi9iL7WTqWe7UJZe98jPiynDo1Rm5KX1l0PQMgyg+pTKfFCcG0EEEocv6kph2v7utmkNwqscJUyz1D/wWlMO9p+W02iaDGSJz9998cVnr7788suv9sFFpfD/+hV8ePXqb18cfZ1RcTSdenEvkKE/6866TgOT2qyhzRy6zGUbjYb7gRot3wjuvoZsYdvpDtiyTNQz9+/i6hPRGy+jmso2xKNO2rPrb3eHlj87EeqOzMHAsq4uzz7J0XSpTzsBEb1Efz5RExfVFo9Ds6zo4S3wPdtGZ80gIGUxVvik3kmqRvgJ5YCdvHUEYeY85ZouqgmgOWVkJE5KZ/qNRBHvU5gxD2fhW1uGv/fWAw8FM9lx1WKnQSGy/Q0ojFuTUNikwUe3ta3zKJSaaOPIStPOkQLMOGvookUKRzOl63T3qT4LjuGQa+iaH2yFRrSziIWZPSrM0IZ7FGe2vy1PKMzU7eTxrg7b+1CzcImdQnV9amR5/fQp73EbzfZKboZATWZXK5VKbnypJAXTr0Hn13EKNdOyDMvy33jJDoiMCzOoRO/vokCBCseWhXxZ//Eogq19CNuK3+jDkeq+o3FkYWAVd3ImYHHquPriKWjCDKw4s9YhnT9pNAkjmx53JNwUsgFG4MD0LUtqj4+9Tgf98IRCcVIhLMPUGyjXfF+CBcVv2RDuOuoZ1hiFUuek3fC60ZWgcD6x7MyMkTQUHTVhDnOy+UKhlIPxj/4kTpwo1Wnuar5UyLsi8ENrywzu/QSVzUjKhML9Y/u9QliFB3sDbHb/jp1kNdXL+7GvFgr5xqhRVykVplNTR/grC73m1JDgUxUUrsejmiJwE73dRTvmit3EiHZDOJKCUFPNmXSX8FNF6vnqwuisftV1sLtg+60HJhzb0P5uG2KpDHYP4DhWWLfTt14OG/9oL487WW9Sv5j6NKewEbf2KrgM4L8F1aGUDTxoieyaOuFOE8KLXum210HhSqvV2shOs6NYx4tgCWhKEDGfSCyvCq2CxwsahWNBHzYdTaxNnrbp4k0CefRgYgc4VrgHCpPjdVj/OgpKdF0MDHYVfB3DYWMzviU0JqrSlY7UYoW6RgqrpXnVJfxrQaQt0af5hDpppg1RIMauhV6zUOitYEdrkGiwj36DAhzEbrhbAeZ8OTHfhdNq7T6eVsU/Wnr0JpXMjN3UPkaFAhQmRyVdMl1+/dyHeSJlYznLWYEhq3InkZh/P289sIlQCrPSEQ1sW1gZ/xnHIUrjCUkkGlO9dAmuuSMdR3OaBRdDiBTU37IrNAxWiRqWTroDN5tfgZl1exVXx0ApCtjBBt7EsMz91xNGtI8jyvh7DzKkEP6z06lD0wjJE5aKFddtFNVEQpd6bhkPFwo5N1ulKcDs5Syp+dVkPlbfLRbXlKqukJVeFa5KLFWB3FQvxalZp/CICw6jFy45cHBXEzlaANAmZAEPi4KMjddBAHBxQhfQhr5h+d+nxpkvYz+KKFvsPUjHCu2k9+xeYIR5yuICc7XIr+DIVyFyU/XSdaWAqasl+rgaYES4flZyEHFKJKtfwoldvUNLBy6X2iYtz5mRhiZVQKqhNAMTKmUTh77sgooudQILUUeXWXGhY02FZxgj+e2GIIUDg7b7sUPazyKLFKaUQkyGBztDqLhJIQYGuJOgfqpCc3E9Qeqm+CK7eNu8UAqXYZGisySoCQdHnrMA0V86eEJ7Zr0psJelODvBsJ1KaYO8fRPMChMKR3kwbgUPevBnjHvgoblGc4P8qUs96IOtaO7WWGH52fC0Qvt7fxg4Pq0ecCpwe+mQi3QleuE8GMPBtOzA/MKnonBIwDokSFmjv0tK9zI3Uqjl7pDCWZsGUghG17GMzdXW1hNxjFrAVNvoz6MwR/ZwGnManSayzS6F/P58H8MaYIaDIHqYyng2VG+w6f8ZvdSK7nqQJstYc9e/2aYsXlP3wUHpuNJgdl0sjWHpxXs4PYsS2hItSwp1SeGgFBvBxQ8bYG9JE1Sdub8SsauBvvwoDyzj5GxQFkSXWXJ0F1OPEiMKcWBPbCZIPrQF4KdBtPeoDEkP82L5Fe56A4EKkzbsLNIPHuPTNUllSCIXrxtwfUjZrqwqT1GNmP2gL8hR1AeYSKWxOCMoXV1U2FCh4RwKIaBhyK6qca+s5V3sGdtADt1crQTqw22pgL3ezks8KlLGD4zBVmDeXqTyNJMp/0Q2FHOoEIqdtPcioh0hmOu9Qulskg2VwlFOk7RUYeKUsVBhDw7u5N4rxMmG5uy5FOrkpS0R993vQSkmMHhjG8QDF5Ie7NHW4GcXvUxvURarZiGX5PCKZqwQ6lMtegJbCfDLTP0zjDRB9BK9NG3Xyz/s4lsKzaFCKxFvB2RuBfOcrry0FLubWnUw8FgheFebAt9YITkxKKzECqdK1JUv9KTu3sF4lsfA67i0hJXbo+cuUGcFzBTkGZsNPA0XDGZLupEfhoPB8PGPNm1zvUOBkcZ8RwrL3oOjoUV7I9FTd6JdAmageQwVJTUGDNQQITfIokK54wKW4rRU4oCidFV1KFML8aj0aZuheLn2MJ5R5MZTnVwf29A4UmVbnPllrPY1ihR5tY2rUJWDp5kmbhkg7+N2P1m2vU+UwkNUaNupn6OAXqShOdDDdRc3SuCkaDtdUrZYzjm66pACuVROiMlIbtCC1MdOPE/FMhg7oWYYputMhVBO0JQIEZsc9w5xHSiUjfsquCZq9MyqphakUH3Nk3OBOjMIUKa19whShV1GhYYhlMJ68se9YRBOKEx0HdDv9vD6dReiJUXqNdzRyGyfOhNSGasFwnAmMNyrEZfwqgJmRgpAa7jjmmbDWJkUlFyWGlBW5CTF66LU4jHN92GO+y76lZZVYwFnyqmqjUKgASsRfoX+8GUqXa6XF3fAhsNh9JPXgW3v4pEZP3ty1L4donWxUFyn+quG6UBVbSvVWq2NOQhmYBRx2gJKDKx9NmKFgua4hNUXxeVEu1Bsu1NWolLYhAva1OFGayEhKhMLjOYM8l5VZVanS2NZay11VXUxWdaHYXDvn/VkOb34XBjGcDgEhbAKn0R6GEZqQnFJLSwpmThzLVCtwyhWxpU3bVhgLlXmh2iAGbCPcU4NmCJiHhatHFfxa7/eTU8oLCiFsBhGaa6l2mKFmktummgoT5CV0fauqZ5h5SeqJt+3zOev7U469VzIUASk0D7ei6yBQUbGJQWjzlHVRAaAjqEk1EVjbdQEEcDFUl/dHrxUhYrWyIaU1PLoT44qvnBBna1QF7VRcJNuk7Yr6yWRrxaL1Xx8ilsrAjUIA1SIyFyRNG5mnQK097KTj1HM0PBhu1+/v7dlCcsSoND23kX41RJS6NCgIJmVcD322xV6ZEA7YK1SJdNuNHO40YGWAoyiWIDasYEHtfhxjMzDh2oF6z7hNmkoG5UpThrPVG30dEIV6vJEvX7y05mn0e3CgXXvuO693h2afrS9/Xk56f1rWw4G8TNux1lWMWz00H/i2tF9x43j2589HPHr25xGUr774MelpwGFW8PbB2Xv62+e/fDNkzf/tuvHOz596canWOqujKL0FaCKzBztnEtixnPjc4LfARru/1xP1j3b9rxUvZP6j6ljKwRT7LMxzrQfG3DcHJRnotFKTNaEvxf8doX0fznATX0H3+F7+CZNM6zAUl+dUcXyJfU2FSgCSon1jaU4frmz3+BcAP8Qk2IyWc6kD3aMYOLWUOjBfNauQqHqjOyHO6CZu8gLYey/LeO2ECrw76GSm3zNVJnMQx8VSJi5xIgW5J/L7NQI51JQy6Qz9R9+sbbMiS/NqBr7amwIibbZXltYX1qCfZ5+qU6qSSt6U6dH3DvhqbfZq81ms7h6NV5KdbTu4HuNS5WHWNbeaw/2UA+lFfrW5JcS5Oy3IpeJM3qJfNk9mgPjHQSbb8FHI/OEFZ3ZLzQvE0k7Tnn5CiNpbT8re7dDwxpGJ768Rk/LrsyEHxHL8nf++/SqltvVoxuGZWy/fHzd4/iImIYhteHwuofxMUErBjf427G/GyxF/Zv8He7fT2BZuj/za09/YEz6f0b+H5ICwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw/xR+B81BlWKe/4emgAAAABJRU5ErkJggg==" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic stuff of C programming Language</p>
    <a href="https://www.javatpoint.com/cpp-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with C programming Language</p>
    <a href="https://www.geeksforgeeks.org/c-plus-plus/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Java ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/mAtkPQO1FcA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_FlxTNG1-07WrAM3ShsDi90BkMg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of Java</h5>
    <p class="card-text">Some basic Introduction of Java programming Language</p>
    <a href="https://youtu.be/mAtkPQO1FcA" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/eIrMbAQSU34/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZ-5SP5wuVnGYWUnN5zBFVT7qieQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to Java programming</h5>
    <p class="card-text">Dive into basic Introduction of Java programming Language</p>
    <a href="https://youtu.be/eIrMbAQSU34" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/BGTx91t8q50/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjU-TwukgmFN_GqM50imUTgTLP9g" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Java programming</h5>
    <p class="card-text">Some basic stuff of Java programming Language</p>
    <a href="https://youtu.be/BGTx91t8q50" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/ZFnRvpxpnOc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQyJA_Xnl6YnFJVkY5EcsVLsKWOw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into Java programming</h5>
    <p class="card-text">Learn Codin start with Java programming Language</p>
    <a href="https://youtu.be/ZFnRvpxpnOc" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/bm0OyhwFDuY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCbLVlZeFtxpyDz7lrGYqVqvV9qkg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of Java</h5>
    <p class="card-text">Get deeper into Java programming language</p>
    <a href="https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/VHbSopMyc4M/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDqZeJVbWWFOGt4S3rmOQvd2Usw8Q" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation Java programming</h5>
    <p class="card-text">Be a master in Java programmin here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Programiz</h5>
    <p class="card-text">Some basic Introduction of Java programming Language</p>
    <a href="https://www.programiz.com/java-programming" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of Java programming Language</p>
    <a href="https://www.w3schools.com/java/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic stuff of Java programming Language</p>
    <a href="https://www.javatpoint.com/java-basics" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with Java programming Language</p>
    <a href="https://www.geeksforgeeks.org/java-programming-basics//" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Javascript ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/W6NZfCO5SIk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOBWmb1XE5qRd1xinBxZPfYfXoEg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of Javascript</h5>
    <p class="card-text">Some basic Introduction of Javascript programming Language</p>
    <a href="https://youtu.be/W6NZfCO5SIk" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWGmAFXkqN3F-QqhVaqBWJY2ltFw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to Javascript programming</h5>
    <p class="card-text">Dive into basic Introduction of Javascript programming Language</p>
    <a href="https://youtu.be/PkZNo7MFNFg" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/Ia0FSogTRaw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-1n5hUFS2g2pM3ryhDYIa0NNA0w" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javascript programming</h5>
    <p class="card-text">Some basic stuff of Javascript programming Language</p>
    <a href="https://youtu.be/Ia0FSogTRaw" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/o1IaduQICO0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-m_om7AMric-Kiho-DCxfMJkY6w" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into Javascript programming</h5>
    <p class="card-text">Learn Codin start with Javascript programming Language</p>
    <a href="https://youtu.be/o1IaduQICO0" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/PlbupGCBV6w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCnCNwjO5DSwXqucbzfarHc_oVc2w" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of Javascript</h5>
    <p class="card-text">Get deeper into Javascript programming language</p>
    <a href="https://youtube.com/playlist?list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC8vZ8k49XHURryWpW_ySAsM3NCwA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation Javascript programming</h5>
    <p class="card-text">Be a master in Javascript programming here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5yIheLvonYKHjVCzTQhcjrGwL7EN7IYD0A&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mozilla</h5>
    <p class="card-text">Some basic Introduction of Javascript programming Language</p>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of Javascript programming Language</p>
    <a href="https://www.w3schools.com/js/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic stuff of Javascript programming Language</p>
    <a href="https://www.javatpoint.com/javascript-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with Java programming Language</p>
    <a href="https://www.geeksforgeeks.org/javascript/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Html ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/qz0aGYrrlhU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxt_YyZzaZ3R5t9iKdBPxalGgFqA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of HTML</h5>
    <p class="card-text">Some basic Introduction of HTML programming Language</p>
    <a href="https://youtu.be/qz0aGYrrlhU" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/QMnv3QrjZoU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_wN2j2N6VHj3XHzM7UbkhDFwMFQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to HTML programming</h5>
    <p class="card-text">Dive into basic Introduction of HTML programming Language</p>
    <a href="https://www.youtube.com/live/QMnv3QrjZoU?feature=share" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/G3e-cpL7ofc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDU0mSki3dTR7OF2ypmZff7aVVB0g" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">HTML programming</h5>
    <p class="card-text">Some basic stuff of HTML programming Language</p>
    <a href="https://youtu.be/G3e-cpL7ofc" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/mJgBOIoGihA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxGr_-37e3JPQY4M3n_hPfs4NFlw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into HTML programming</h5>
    <p class="card-text">Learn Codin start with HTML programming Language</p>
    <a href="https://youtu.be/mJgBOIoGihA" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
  
    
   
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5yIheLvonYKHjVCzTQhcjrGwL7EN7IYD0A&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mozilla</h5>
    <p class="card-text">Some basic Introduction of HTML</p>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of HTML</p>
    <a href="https://www.w3schools.com/html/html_basic.asp" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic stuff of HTML</p>
    <a href="https://www.javatpoint.com/html-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with HTML</p>
    <a href="https://www.geeksforgeeks.org/html-basics/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Css ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0s3VTwpVReVM2hjNIc69dUYeTDQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of CSS</h5>
    <p class="card-text">Some basic Introduction of CSS</p>
    <a href="https://youtu.be/1PnVor36_40" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/yfoY53QXEnI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBoDywhU1z-mdFCNY76mIwAIIxOg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to CSS</h5>
    <p class="card-text">Dive into basic Introduction of CSS</p>
    <a href="https://youtu.be/yfoY53QXEnI" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/ESnrn1kAD4E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBo8e_9RgHl-Zz_iY96oDyNVghz1g" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CSS</h5>
    <p class="card-text">Some basic stuff of CSS</p>
    <a href="https://youtu.be/ESnrn1kAD4E" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/OEV8gMkCHXQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7rJJkNw88W-T60LPUaoQJTQMQHA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into CSS</h5>
    <p class="card-text">Learn Coding start with CSS</p>
    <a href="https://youtu.be/OEV8gMkCHXQ" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
  
    
   
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5yIheLvonYKHjVCzTQhcjrGwL7EN7IYD0A&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mozilla</h5>
    <p class="card-text">Some basic Introduction of CSS</p>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of CSS</p>
    <a href="https://www.w3schools.com/css/css_intro.asp" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic stuff of CSS</p>
    <a href="https://www.javatpoint.com/css-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Coding styling with CSS</p>
    <a href="https://www.geeksforgeeks.org/css-introduction/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Php ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/OK_JCtrrv-c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvAzjyO06ZHMR1cdvagNJZt88rOw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of PHP</h5>
    <p class="card-text">Some basic Introduction of PHP</p>
    <a href="https://youtu.be/OK_JCtrrv-c" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/t0syDUSbdfE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDs7IKBSbUSt_MEr_draWtpKcCiHA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to PHP</h5>
    <p class="card-text">Dive into basic Introduction of PHP</p>
    <a href="https://youtu.be/t0syDUSbdfE" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/sVbEyFZKgqk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxoQHnRJt3knRKYEqlAZvv-FHIZw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PHP</h5>
    <p class="card-text">Some basic stuff of PHP</p>
    <a href="https://youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/yMclPkD4sQg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC27bO6nXThuzXx6S-33itjWHzu1g" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into CSS</h5>
    <p class="card-text">Learn Coding start with CSS</p>
    <a href="https://youtube.com/playlist?list=PLS1QulWo1RIZc4GM_E04HCPEd_xpcaQgg" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
  
    
   
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5yIheLvonYKHjVCzTQhcjrGwL7EN7IYD0A&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mozilla</h5>
    <p class="card-text">Some basic Introduction of PHP</p>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/PHP" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of PHP</p>
    <a href="https://www.w3schools.com/php/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic stuff of PHP</p>
    <a href="https://www.javatpoint.com/php-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Coding styling with PHP</p>
    <a href="https://www.geeksforgeeks.org/php-introduction/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Bootstrap ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/-qfEOE4vtxE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3xc7-gQuo-ru9gbtfdQnlmVnKjg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of Bootstrap</h5>
    <p class="card-text">Some basic Introduction of Bootstrap</p>
    <a href="https://youtu.be/-qfEOE4vtxE" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/Jyvffr3aCp0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCPHRXQZbGg3u1PPWG9XkVKBrSVg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to Bootstrap</h5>
    <p class="card-text">Dive into basic Introduction of Bootstrap</p>
    <a href="https://youtu.be/Jyvffr3aCp0" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/O_9u1P5YjVc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlno4Zr855MgmdOCyyn_9MSUDUyw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Bootstrap</h5>
    <p class="card-text">Some basic stuff of Bootstrap</p>
    <a href="https://youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/RIAlNPgSkG8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAGr9-bm0OVzu3JbU2WKsiPBIwlGQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into Bootstrap</h5>
    <p class="card-text">Learn Coding start with Bootstrap</p>
    <a href="https://youtube.com/playlist?list=PL73Obo20O_7jN--xo4UFw-DO1OM5vQEMJ" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
  
    
   
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Bootstrap</h5>
    <p class="card-text">Some basic Introduction of Bootstrap</p>
    <a href="https://getbootstrap.com/" class="btn btn-primary">Catch It</a>
  </div>
</div>




    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Sql ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/zbMHLJ0dY4w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBz6q3GAtigrHvDeRayf73PBNHxeQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of SQL</h5>
    <p class="card-text">Some basic Introduction of SQl</p>
    <a href="https://youtu.be/zbMHLJ0dY4w" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/q_JsgpiuY98/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASC3U8c-9CoqXhCPljBYfm_w3n-A" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to SQL</h5>
    <p class="card-text">Dive into basic Introduction of SQL</p>
    <a href="https://www.youtube.com/live/q_JsgpiuY98?feature=share" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/kbKty5ZVKMY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4hVVUoOXUgLBVnKlm-OgpzV5NDA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Structured Query Language</h5>
    <p class="card-text">Some basic stuff of SQL</p>
    <a href="https://youtu.be/kbKty5ZVKMY" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/HXV3zeQKqGY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqd2jbSFzyQDvmezQaU6AtvYTDZw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into SQL</h5>
    <p class="card-text">Learn Coding start with SQL</p>
    <a href="https://youtu.be/HXV3zeQKqGY" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/pVKT4N-Cgb8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCntRRISXjyICg_rU9KLf2kaj7xHQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of SQL</h5>
    <p class="card-text">Get deeper into Structured Query Language</p>
    <a href="https://youtube.com/playlist?list=PLsjUcU8CQXGFFAhJI6qTA8owv3z9jBbpd" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/q_JsgpiuY98/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD0B9j1DKEmbd2BRBl7tzIvdges5g" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation SQL , be a master in Query</h5>
    <p class="card-text">Be a master SQl here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PL9ooVrP1hQOG6DQnOD6ujdCEchaqADfCU" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5yIheLvonYKHjVCzTQhcjrGwL7EN7IYD0A&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mozilla</h5>
    <p class="card-text">Some basic Introduction of SQL</p>
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of SQL</p>
    <a href="https://www.w3schools.com/sql/sql_intro.asp" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic and cool stuff of SQL</p>
    <a href="https://www.javatpoint.com/sql-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with SQL</p>
    <a href="https://www.geeksforgeeks.org/sql-tutorial/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Mongodb ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/ofme2o29ngU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzBkzKO4zpqRGZDAJmWiwf7msKDw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of MongoDB</h5>
    <p class="card-text">Some basic Introduction of MongoDB</p>
    <a href="https://youtu.be/ofme2o29ngU" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/8eJJe4Slnik/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-f4KDNfMrB8heV6M-KE_DCqSGlg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to MongoDB</h5>
    <p class="card-text">Dive into basic Introduction of MongoDB</p>
    <a href="https://youtu.be/8eJJe4Slnik" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/lBBtq3Oawqw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiTG9YQZ62aj8oZUyoH7j6AqD6aA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">MongoDB</h5>
    <p class="card-text">Some basic stuff of MongoDB</p>
    <a href="https://www.youtube.com/live/lBBtq3Oawqw?feature=share" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/-bt_y4Loofg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCY1BELABU4-V6MplgpmWIBfb2ODQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into MongoDB</h5>
    <p class="card-text">Learn Coding start with MongoDB</p>
    <a href="https://youtu.be/-bt_y4Loofg" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/Ya0H-7A5cE4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDP6XVcBS8B7a30O9pmw9RNtxkTdg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of MongoDB</h5>
    <p class="card-text">Get deeper into MongoDB</p>
    <a href="https://youtube.com/playlist?list=PLp50dWW_m40UWFSV6PTgYzciZJIxgHy7Q" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/ExcRbA7fy_A/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB7k8twj76Hu9cGnfSLrN_QUsUpYg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation MongoDB , be a master in Query</h5>
    <p class="card-text">Be a master MongoDB here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">MongoDB</h5>
    <p class="card-text">Some basic Introduction of Mongodb</p>
    <a href="https://www.mongodb.com/docs/" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of MongoDB</p>
    <a href="https://www.w3schools.com/mongodb/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABU1BMVEX39/cAAAD////29vbuAAL6+vrLAAD79/v99fL5v7fyAAHy+fkEBATrAwLz8/PvAADs7OzV1dXYAADh4eG+vr6wsLCTk5O4uLjkAADOzs6JiYmkpKTgAADb29ufn59ra2tJSUl1dXXDAAD5AABZWVk5OTkqKiqBgYH99PkPDw/w+/QfHx/Q0NBiYmIyMjJQUFBAQED09v/FAAD4trPp/fz/7OgYGBj/9f//9vH2vL74/O/vxLv339j+7uG0Uk23AACVLTT81NTLABTqpaj/5Obr/uzffoHqYFbOOzvFHRz/yMDml5bVXFzoZWT4rLPXSEn/yMziiY/gfXbmqZzxc3jwmqjShorFjJLkvsHeeoPliqDnWF3PJSrXa2fKRk/FT026PDzBLinF29WnmaSxERP5lJvbQEjVCh/choXXXmHpo6DuU2HgOjrabnjnmYr81NmiFBscMCyMAAAOBUlEQVR4nO2b/VvbRhLH5ZXXEhaSZfn9HWODZfHqBCLhkMuR0lwICUmTvlyuSVru+na56/X+/59uZlZ2DC02pAToPfN5UpAXSbvfndmZWcnVNIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhbjSRqVnSMKyLAxcHQWANBobva8F165iGYRiOhT8vhu/76mBgGTda4dYgDA1tGJkXJlZqgh11w7huHWcDCv3tu3MfwE7M7jDQbrJCEzzs3p/upz4Ez/NS9/+8Z0pNs65bx9mAewbDuQfJ9MXpdDqZTOqTfViPN3kdfmqGRrD90EvaF6UM/+reX+5F2iC8wU6qfaqHoaXtPqpn0uVyJp0k0hk7ncafJ4CGdLKczKhzkiixfvB4GFhG6JvXrWMW8t1iplP30iOF9UUvdct7T0r9gF/36/E5SRSbOoyue+jnZf+JlxnbJ1N+evvo9t3bp9jZmds5mntajo2YSafrz7ave+Dnxn++aHfS4Ik0du8wgjQn5XAY4C8REPBb+sNDTym0Mx37YC66wUH0JJb/MJWGlRjb8LPIF8I3BIJpXagjaDMf2rENy+nUwyj4Aynch2Bjxwrrh0MrCESAsrAEhWMpZYAfhi9iL7WTqWe7UJZe98jPiynDo1Rm5KX1l0PQMgyg+pTKfFCcG0EEEocv6kph2v7utmkNwqscJUyz1D/wWlMO9p+W02iaDGSJz9998cVnr7788suv9sFFpfD/+hV8ePXqb18cfZ1RcTSdenEvkKE/6866TgOT2qyhzRy6zGUbjYb7gRot3wjuvoZsYdvpDtiyTNQz9+/i6hPRGy+jmso2xKNO2rPrb3eHlj87EeqOzMHAsq4uzz7J0XSpTzsBEb1Efz5RExfVFo9Ds6zo4S3wPdtGZ80gIGUxVvik3kmqRvgJ5YCdvHUEYeY85ZouqgmgOWVkJE5KZ/qNRBHvU5gxD2fhW1uGv/fWAw8FM9lx1WKnQSGy/Q0ojFuTUNikwUe3ta3zKJSaaOPIStPOkQLMOGvookUKRzOl63T3qT4LjuGQa+iaH2yFRrSziIWZPSrM0IZ7FGe2vy1PKMzU7eTxrg7b+1CzcImdQnV9amR5/fQp73EbzfZKboZATWZXK5VKbnypJAXTr0Hn13EKNdOyDMvy33jJDoiMCzOoRO/vokCBCseWhXxZ//Eogq19CNuK3+jDkeq+o3FkYWAVd3ImYHHquPriKWjCDKw4s9YhnT9pNAkjmx53JNwUsgFG4MD0LUtqj4+9Tgf98IRCcVIhLMPUGyjXfF+CBcVv2RDuOuoZ1hiFUuek3fC60ZWgcD6x7MyMkTQUHTVhDnOy+UKhlIPxj/4kTpwo1Wnuar5UyLsi8ENrywzu/QSVzUjKhML9Y/u9QliFB3sDbHb/jp1kNdXL+7GvFgr5xqhRVykVplNTR/grC73m1JDgUxUUrsejmiJwE73dRTvmit3EiHZDOJKCUFPNmXSX8FNF6vnqwuisftV1sLtg+60HJhzb0P5uG2KpDHYP4DhWWLfTt14OG/9oL487WW9Sv5j6NKewEbf2KrgM4L8F1aGUDTxoieyaOuFOE8KLXum210HhSqvV2shOs6NYx4tgCWhKEDGfSCyvCq2CxwsahWNBHzYdTaxNnrbp4k0CefRgYgc4VrgHCpPjdVj/OgpKdF0MDHYVfB3DYWMzviU0JqrSlY7UYoW6RgqrpXnVJfxrQaQt0af5hDpppg1RIMauhV6zUOitYEdrkGiwj36DAhzEbrhbAeZ8OTHfhdNq7T6eVsU/Wnr0JpXMjN3UPkaFAhQmRyVdMl1+/dyHeSJlYznLWYEhq3InkZh/P289sIlQCrPSEQ1sW1gZ/xnHIUrjCUkkGlO9dAmuuSMdR3OaBRdDiBTU37IrNAxWiRqWTroDN5tfgZl1exVXx0ApCtjBBt7EsMz91xNGtI8jyvh7DzKkEP6z06lD0wjJE5aKFddtFNVEQpd6bhkPFwo5N1ulKcDs5Syp+dVkPlbfLRbXlKqukJVeFa5KLFWB3FQvxalZp/CICw6jFy45cHBXEzlaANAmZAEPi4KMjddBAHBxQhfQhr5h+d+nxpkvYz+KKFvsPUjHCu2k9+xeYIR5yuICc7XIr+DIVyFyU/XSdaWAqasl+rgaYES4flZyEHFKJKtfwoldvUNLBy6X2iYtz5mRhiZVQKqhNAMTKmUTh77sgooudQILUUeXWXGhY02FZxgj+e2GIIUDg7b7sUPazyKLFKaUQkyGBztDqLhJIQYGuJOgfqpCc3E9Qeqm+CK7eNu8UAqXYZGisySoCQdHnrMA0V86eEJ7Zr0psJelODvBsJ1KaYO8fRPMChMKR3kwbgUPevBnjHvgoblGc4P8qUs96IOtaO7WWGH52fC0Qvt7fxg4Pq0ecCpwe+mQi3QleuE8GMPBtOzA/MKnonBIwDokSFmjv0tK9zI3Uqjl7pDCWZsGUghG17GMzdXW1hNxjFrAVNvoz6MwR/ZwGnManSayzS6F/P58H8MaYIaDIHqYyng2VG+w6f8ZvdSK7nqQJstYc9e/2aYsXlP3wUHpuNJgdl0sjWHpxXs4PYsS2hItSwp1SeGgFBvBxQ8bYG9JE1Sdub8SsauBvvwoDyzj5GxQFkSXWXJ0F1OPEiMKcWBPbCZIPrQF4KdBtPeoDEkP82L5Fe56A4EKkzbsLNIPHuPTNUllSCIXrxtwfUjZrqwqT1GNmP2gL8hR1AeYSKWxOCMoXV1U2FCh4RwKIaBhyK6qca+s5V3sGdtADt1crQTqw22pgL3ezks8KlLGD4zBVmDeXqTyNJMp/0Q2FHOoEIqdtPcioh0hmOu9Qulskg2VwlFOk7RUYeKUsVBhDw7u5N4rxMmG5uy5FOrkpS0R993vQSkmMHhjG8QDF5Ie7NHW4GcXvUxvURarZiGX5PCKZqwQ6lMtegJbCfDLTP0zjDRB9BK9NG3Xyz/s4lsKzaFCKxFvB2RuBfOcrry0FLubWnUw8FgheFebAt9YITkxKKzECqdK1JUv9KTu3sF4lsfA67i0hJXbo+cuUGcFzBTkGZsNPA0XDGZLupEfhoPB8PGPNm1zvUOBkcZ8RwrL3oOjoUV7I9FTd6JdAmageQwVJTUGDNQQITfIokK54wKW4rRU4oCidFV1KFML8aj0aZuheLn2MJ5R5MZTnVwf29A4UmVbnPllrPY1ihR5tY2rUJWDp5kmbhkg7+N2P1m2vU+UwkNUaNupn6OAXqShOdDDdRc3SuCkaDtdUrZYzjm66pACuVROiMlIbtCC1MdOPE/FMhg7oWYYputMhVBO0JQIEZsc9w5xHSiUjfsquCZq9MyqphakUH3Nk3OBOjMIUKa19whShV1GhYYhlMJ68se9YRBOKEx0HdDv9vD6dReiJUXqNdzRyGyfOhNSGasFwnAmMNyrEZfwqgJmRgpAa7jjmmbDWJkUlFyWGlBW5CTF66LU4jHN92GO+y76lZZVYwFnyqmqjUKgASsRfoX+8GUqXa6XF3fAhsNh9JPXgW3v4pEZP3ty1L4donWxUFyn+quG6UBVbSvVWq2NOQhmYBRx2gJKDKx9NmKFgua4hNUXxeVEu1Bsu1NWolLYhAva1OFGayEhKhMLjOYM8l5VZVanS2NZay11VXUxWdaHYXDvn/VkOb34XBjGcDgEhbAKn0R6GEZqQnFJLSwpmThzLVCtwyhWxpU3bVhgLlXmh2iAGbCPcU4NmCJiHhatHFfxa7/eTU8oLCiFsBhGaa6l2mKFmktummgoT5CV0fauqZ5h5SeqJt+3zOev7U469VzIUASk0D7ei6yBQUbGJQWjzlHVRAaAjqEk1EVjbdQEEcDFUl/dHrxUhYrWyIaU1PLoT44qvnBBna1QF7VRcJNuk7Yr6yWRrxaL1Xx8ilsrAjUIA1SIyFyRNG5mnQK097KTj1HM0PBhu1+/v7dlCcsSoND23kX41RJS6NCgIJmVcD322xV6ZEA7YK1SJdNuNHO40YGWAoyiWIDasYEHtfhxjMzDh2oF6z7hNmkoG5UpThrPVG30dEIV6vJEvX7y05mn0e3CgXXvuO693h2afrS9/Xk56f1rWw4G8TNux1lWMWz00H/i2tF9x43j2589HPHr25xGUr774MelpwGFW8PbB2Xv62+e/fDNkzf/tuvHOz596canWOqujKL0FaCKzBztnEtixnPjc4LfARru/1xP1j3b9rxUvZP6j6ljKwRT7LMxzrQfG3DcHJRnotFKTNaEvxf8doX0fznATX0H3+F7+CZNM6zAUl+dUcXyJfU2FSgCSon1jaU4frmz3+BcAP8Qk2IyWc6kD3aMYOLWUOjBfNauQqHqjOyHO6CZu8gLYey/LeO2ECrw76GSm3zNVJnMQx8VSJi5xIgW5J/L7NQI51JQy6Qz9R9+sbbMiS/NqBr7amwIibbZXltYX1qCfZ5+qU6qSSt6U6dH3DvhqbfZq81ms7h6NV5KdbTu4HuNS5WHWNbeaw/2UA+lFfrW5JcS5Oy3IpeJM3qJfNk9mgPjHQSbb8FHI/OEFZ3ZLzQvE0k7Tnn5CiNpbT8re7dDwxpGJ768Rk/LrsyEHxHL8nf++/SqltvVoxuGZWy/fHzd4/iImIYhteHwuofxMUErBjf427G/GyxF/Zv8He7fT2BZuj/za09/YEz6f0b+H5ICwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw/xR+B81BlWKe/4emgAAAABJRU5ErkJggg==" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic and cool stuff of MongoDB</p>
    <a href="https://www.javatpoint.com/mongodb-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with MongoDB</p>
    <a href="https://www.geeksforgeeks.org/mongodb-tutorial/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Oracle ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/jgbomQbLc74/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5GSyI_9gvSfn8KUJyGTuVk9tc8w" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of Oracle</h5>
    <p class="card-text">Some basic Introduction of Oracle</p>
    <a href="https://youtu.be/hLnKjYGr730" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/ObbNGhcxXJA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA37Psb3X5N30VHSSK2CQPqsUZqfg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to Oracle</h5>
    <p class="card-text">Dive into basic Introduction of Oracle</p>
    <a href="https://youtu.be/ObbNGhcxXJA" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/y2CICRujsVw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD6cZlZ7ULJmn3w34YdHnsjNMCZTw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Oracle</h5>
    <p class="card-text">Some basic stuff of Oracle</p>
    <a href="https://youtube.com/playlist?list=PLWPirh4EWFpGKVoAXc4EjgaV4jbAyLrxe" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/jgbomQbLc74/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5GSyI_9gvSfn8KUJyGTuVk9tc8w" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into Oracle</h5>
    <p class="card-text">Learn Coding start with Oracle</p>
    <a href="https://youtu.be/jgbomQbLc74" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/ibOzwFRm32w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAQGOXzOg7rcLLTLiCVwE8k2riIyA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of Oracle</h5>
    <p class="card-text">Get deeper into Oracle</p>
    <a href="https://youtube.com/playlist?list=PLiLpmqwkwkCt0QeXD8j7BwIoOaBGBRrZC" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/QDRqdocBMcY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDr9kdZxsgqlFtgOujwL8_siqo-eQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation Oracle , be a master in Query</h5>
    <p class="card-text">Be a master Oracle here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PLhiNPw_JwRBDEdy0OzAh2kTPSF75revpI" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Oracle</h5>
    <p class="card-text">Some basic Introduction of Oracle</p>
    <a href="https://www.oracletutorial.com/oracle-basics/" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of Oracle</p>
    <a href="https://www.w3schools.blog/oracle-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic and cool stuff of Oracle</p>
    <a href="https://www.javatpoint.com/oracle-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Codin start with Oracle</p>
    <a href="https://www.geeksforgeeks.org/oracle-architecture/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}
export function Mysql ()  {
 
  //const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
  const Youtube=()=> {
    //alert('youtube');
    
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
    content.render(
      <>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/vIH-f9wQUQs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgFu8kiWxJsfJS2eFZjR9F_eN9Xw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Basic of MySQL</h5>
    <p class="card-text">Some basic Introduction of MySQL</p>
    <a href="https://youtu.be/vIH-f9wQUQs" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/7S_tz1z_5bA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlohTYZhQDSWG32v6EfxEUlv6wqA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Introduction to MySQL</h5>
    <p class="card-text">Dive into basic Introduction of MySQL</p>
    <a href="https://youtu.be/7S_tz1z_5bA" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/Cz3WcZLRaWc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW5JakIoNNKu8rof7GtTpMnQTZQw" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">MySQL</h5>
    <p class="card-text">Some basic stuff of MySQL</p>
    <a href="https://youtu.be/Cz3WcZLRaWc" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/fUK94jOFwBc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKozy6B3j-QsJsfVI8IIW-JvbRQQ" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dive into MySQL</h5>
    <p class="card-text">Learn Coding start with MySQL</p>
    <a href="https://youtu.be/fUK94jOFwBc" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="https://i.ytimg.com/vi/wifRYaPiiM0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCtimcD33EnaUrLrvBZHHPAK7vebA" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">PlayList of MySQL</h5>
    <p class="card-text">Get deeper into MySQL</p>
    <a href="https://youtube.com/playlist?list=PLUDwpEzHYYLvWEwDxZViN1shP-pGyZdtT" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://i.ytimg.com/vi/nnBMsGrwuUE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCqgNJnxU1mrod8Z4QB6dELDnXreg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Compilation MySQL , be a master in Query</h5>
    <p class="card-text">Be a master MySQL here you have a pack of videos</p>
    <a href="https://youtube.com/playlist?list=PLjVLYmrlmjGeyCPgdHL2vWmEGKxcpsC0E" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
    );
   
  }
  const Website=()=> {
    const content = ReactDOM.createRoot(document.getElementById('ExploreContent'));
   content.render(
<>
<div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">MySQL</h5>
    <p class="card-text">Some basic Introduction of MySQL</p>
    <a href="https://www.mysqltutorial.org/" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuUPTzJYGVd8fL2JYioNk_lTOR35ywsDK1w7n6l97Hg&s" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">W3 Schools</h5>
    <p class="card-text">Dive into basic Introduction of MySQL</p>
    <a href="https://www.w3schools.com/MySQL/default.asp" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    <div id='content-grid'>
   <div class="card" >
  <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Javatpoint</h5>
    <p class="card-text">Some basic and cool stuff of MySQL</p>
    <a href="https://www.javatpoint.com/mysql-tutorial" class="btn btn-primary">Catch It</a>
  </div>
</div>
<div class="vr" id='vr'>

</div>

<div class="card" id='middle-card' >
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUOnVcJhUj7+PL/+/YAg0X//voAfju3074AmEwAgkIAnFQAgD/19e4DiU3d6dw8l2UNl1Pv8+omj1jo8ea42sJurojK384LkE/V5ddapHm/2caCuJdHnG0npGSuz7h4s4+PvqCcxKlArHIAeC1Zs4CQx6Ol0rQAiEF7wJdnuIkAkj4+Z7gaAAAKyklEQVR4nO2cC3OyOhCGCwEUuRUQFbV4ab+23/n/P/AkgLKLXBLu50zemc50QDd5spsri29vUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJS/zFt1libzeAm1/1NipS+gQib9dv9d7tzw9D3/TB0d9s/949Nrxoxk3+oSWqTGnTdw/b79/4GTeIqDK0PqvvD/nr9dxuSVCpT+p9uu9uvrs1OG+d365MXhbu/T5Prj6/7/WMYnFf9rHSqP+u0Mm9/fD1Dw2KUDFLY+mb9dVRJlUmVmfxIGdffrApbcetccowVK9+ngbL++PYr6/LwpvsrGEub9a9Lqvkym+r2Tnv5nf6jknEI3xUlIyTf/3xsbQJ5aLOmf+Ci7n4JxCr1n0vKJpnQte3bP9u0BqMQ7hVKeEwLJFvQ2ERX3VvkBU4QxKdjCG/QwOI0vv7YFSyE+G5yimLP8+LLClqkfswrMAIhA3wQqrBh3VNgGKbGZFqGdk7sZ5WI/8tXk/VvERLET86OYVim+bB4RIwjEb4rCiR8Sg8jw9IUIM1wbkUL0CGhPVI3m63+RLBPGm0vaNE0zgcdFzs84V6pJCTkZphKWZSxCDnifrQhru9h0SKJabwYpIxXMi7hA1AxdrAkYscV1UkZryDo7s21Wd+fEUrUi6FVWjRim4xICAqChMT3rMrqsA9GBaLdiLj+Ar26psWYwTNEJMchCd9hOYCQ2MFrhIJGLxDVBkQISM61gIpieZBwNyDhHhYDCIka13rwxYu1fTGbwPNOHTUAIoODEu5xKYdiTLg21od+9lYMkOFbDeJ72M3gYITv5UKehOTQUh/s8Joa/RRjM1m1GwSlD0S4ry9DPzd0wkyaAzrOn6oq/ZyKec42q0dRIDPWByZ06luRo8XppwsAQu6vcaoFRRPoJx6Dj6gYhrAcoWkR7mPV5rW2OPg4+4ZbJnxHYdwe9Apz4oPQHYDwJUIRIY8LaY2iIgr1UpzuFesC7satQZ+Wn7fJEISVgE9C/czjQuREFU8Ze9pN/aKb7rha7Nlk/QmrIhTUmLdCyE1opcVsJQW9HnG5sKhAX8JqB4ICro2TPfyCDcbTpxNZA2oBWKPYnC1G58RBCGsBH4Q6Z4tjR5HvNbCP7iS8hJqiV49bIqqLUCYrJeQOUjD6pQNw5sQUkM4U4A7fOMOU7d96EdY78Emon3iDlNYoBGGaDqf59RsIUp/fnpn2bBJ2J2wEVExGyDkZ5iQwGMP1M0KMsEuQsoWS3YuwKUILQq7Z+fENMCWq5O++6rJ+4Q7SR5h2JWwDVDTW8uQmQIiGzMJZ0LWqLhATinXtQdgcoU9CzvXHg8WFHe4zv/oJZ5FQxJ7m6Z0Jecz7OiG+QH0eh8gPb+VrIe0MY/coEBNUtk50vwNha4SmNbvekkTIhXlUPWDypULpohAhrcPtdhUHbI/QrGqGUXF+2CQ81OTuQqeS3Eu2og4/4ksaoSKElPWbh8IsSs2w60CT6l2YjytCu8qChBkNGmBVXawbKnthPt4I7Sg4bOYRWRxHpAOsGKG4A0cGxNNFNtTATZXIKpdJnG/MPpgKn5Oncz56DCE0WXSI0KkJUxy0ohFZlXaI0CkI4cyQrWnRKoB/EdjNgRMQIpwwJdxVrAJa1RlwdEIYktnACR4OUELO3WbHCJ2A0Dq9EqLh9cJD2N2BExBeXgnBxp+PsIcD5/GhDwnbo9TpxTd+P7y1ELZuLXpFKB+h0UefeKT5ZJcQYfLZbKCcqVjSEIRGsuoj2OlUO70El6pq2Pz1bbO+ORDbCSuyBQWkItVd6ip/EMJQXa7CYXzIWVq950YTGYbQ1WurnNJkSYTpJ+z873GP3sCfLyUcMunNqm8vZp4nZ6GVUHPiUwKzDosS7PCwSq6XOD57VAGSlwsiklN6CSVx6V6DznF0uh1du6rwcHWKo9akMh5ChaUIGmbs4lKI7l4CNpxbppnlJlbJQvt5PbZqrtXJZGUbTlRO3tPd2DSsH6403XbCTOYn3CXQNryU0hIrhQ4OVRK8ntPwLL0104hw8yafJvdagJeQFhOiPQHXvg5vntwMBi+9+ZICYE4UNcS+w7ta5SZUDLDE5H0+Y1XB4B1VKJ4UoNPlOv9ijp9QA9lznCfV+LhUz/cR6JiYJ/soJYQP6jxNYLUqQOgUyy3O5zMlFid3l4kGWL5dPuzRtiOyn+InVLRidaMHXLGFD52eB4f4HIPvPBGesoZCG8ZOhETlJIQrvuLxON402g6PLRjwYk/XOhFy1gpmKtDvPFsFJSqohOvZzDIJ0fYXTgv4jJHrQFELJiUkNleUokU7HDPxowuujCG4TpjCh1z9ED88RAMKOlHUeU6jpiYkPIRoyMTzC4Z3F0jIM1ugUCzPCZ+iTpy4H3IR4lmvtERAwyxPPsbUYynHs2kzalxf4zV5+yJwgYQws0t9HXthCi3di7XGBExRmYSwdV2K854qOppVP9JWCa3axiJUAGHbOsSIW7OCcDZR234Tjr6jEcLU7JYNgenBxC5Xq4pBtKUmpPk1ozzxMicUARTZPQXgVc/mocF0YOVtr9rhtBlQV20MC7h78kcjBLVuXEuaDtiQE/Vc5x0LTxlOEyJ8qbH+XbGehHCP35RgYHg+9GAtIOutKkSsf6OxtMefgjA06xpcMyKVE5AdMEHEurdSqcwATi4VLxkNTUhHD6/ylVbNcNDOyG7yi5J6EQ43VW8Wp1ZhWIxHeIbn8UQ/ekb5jTPNUK5oc+s2Dx8M0YODkh7GL8ewmml4R1z0aD48oNN1ou5i5/EyPjufNozghn5MQl9VThNYprNCP53gRiWjTrxTcbmHkfohi5XExj/k4O+ukRcEDpUX31zkP+JHNe9ml81GKAR1/3CNU5NBcI6uO5+gn6PwE0/st1MECFlljMsBPQzKHj1lz5lKNxKT90UKy7qpZaOPp1r4unqIjB/BHGghQlYb6siw9QkhIbszlwNzGcFKbTVJwsQzLOHMBVFC5kgzTkK9FpK1vhhfapQy1tpk/gyTs0mNiufWiBMq7IccDOe6C18fX7KqqO7VEeTLGM3r4RWSWSTh7uqkKeZdUk86EbIKWYbinVaH0Lef8kN3l0SB1YEvlWUFp6MLDNo2s3jxtHwK6ZRb05UwpzRMB8hkyfwd8Z4WlVqL3bK/+hDmtXqqv61Gi534Rs/6Gk5LzaAdTN3zE+euOaeWm0E7jJacQTuI+iVgzl17DvVLEV4+4QQZtPOqN+DSCXtG6PIJBwBcNGH/CF044TCACyYcIkIXTTgQ32IJB4rQ5RIOFaGLJRwScImEA0boMgkHBlwe4aARukDCoR24OMIRAJdFOHiELo1wDL4lEY4RoYsiHAtwMYSjdMEFEfZ9I33xhKNF6FIIx4vQhRCOyrcAwlEjdAmEowPOTThuF5yfcMxJYhGE40fozIQTROi8hNPwzUc4TYTOSDgd4EyEE3XB2QgndOA8hNMCzkA4ZYTOQjgx3+SEE0fo9IQzAE5LOHUXnJpwkp3EnIRzROikhLNE6JSEswFORDhXhE5GOCfgJITzReg0hLM6cArCuQFHJ5w3QicgnBvvbWTC2SOU6X8POCbh/F0w1Wh8y3Dg23iEiwEci3AhEco0Ct9Me91qjQG4nAhlGhpuv6D4TPUvOqbdKOiuOaYAAAAASUVORK5CYII=" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GeeksForGeeks</h5>
    <p class="card-text">Learn Coding start with MySQL</p>
    <a href="https://www.geeksforgeeks.org/mysql-introdution/" class="btn btn-primary">Catch It</a>
  </div>
</div>

    </div>
    <hr/>
    </>
   );
  }
  
  
  return(
    <>
 {Navigation()}
< div id='UpperButtons'>

<button type="button" id = "Upper-u" class="btn btn-outline-info "  onClick= {()=>{Youtube();}} autoFocus><spam >YouTube</spam>
 </button>
 <button type="button" id = "Upper" class="btn btn-outline-info" onClick={()=>{Website();}}>Websites</button></div>
 
<div id='ExploreContent'>

</div>


</>
);


}