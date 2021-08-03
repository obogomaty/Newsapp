
import React,{Component} from 'react';
import './tag.css';
import {Link} from 'react-router-dom';

class tag extends Component {
    
    render() { 
        return ( 
        <div className="flagcontainer">

         <h1>HEADLINE NEWS</h1>

          


         <Link to="/country/ng" >
           <div className="nigeria c">
          <h2>NIGERIA</h2>
          </div>
          </Link>
          

          <Link to="/country/us">
       <div className="unitedstate c">
        <h2>UNITED STATE</h2>
       </div>
       </Link>

        <Link to='/country/gb'>
       <div className="unitedkingdom c">
      <h2>UNITED KINGDOM</h2>
       </div>
       </Link>

       <Link to="/country/ar">
       <div className='argentina c'>
       <h2>ARGETINA</h2>
     </div>
     </Link>


     </div>
  
        
         );
    }
}
 
export default tag;