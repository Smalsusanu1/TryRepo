import React from 'react';
import { FaFilter,FaMinus,FaRegShareSquare} from "react-icons/fa";
import './smartsearch.css';
function SmartSearch() {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
    return(

        <div>
            <div>
                <span><FaFilter/> </span>
                <span>SmartSearch-Filters   </span>
                <span>Sites : (14)  </span>
                <span>| Type : (3) </span>
                <span>| Portfolio : (3) </span>
                <div style={{position: "absolute",left: '94%', top: '88px'}}>
                 <span><FaMinus/></span>
                 <span> <FaRegShareSquare/></span>
             </div>
            </div>
             <div>
               <span className='smartsearch'>
                <strong>Portfolio</strong>
                <div className="portfolio">
        <input
          type="checkbox"
          id="portfolio"
          name="portfolio"
          value="Component"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Component
      </div>
               </span>
               <span className='smartsearch'>
                <strong>  Sites</strong>
    
               </span>
              
            
            <span className='smartsearch'>
                <strong>  Type</strong>
               </span>
               
               <span className='smartsearch'> 
                <strong>  Team Memebers</strong>
            
               </span>
             
               <span className='smartsearch'>
                <strong>  Priority</strong>
            
               </span>
               </div>
             </div>

    )
}
export default SmartSearch;