import React, { useRef } from 'react';
import { FaBars, FaFilter, FaTimes } from 'react-icons/fa';
// import Warper from './Warper';
import Popup from 'reactjs-popup';
import Tooltip from '../popup';
//

const FilterPop = () => {
 

  return (
    <Popup
    trigger={
      <button type='button' className="button"><FaFilter/></button> 
    }
    
    
  > 
     {(close: React.MouseEventHandler<HTMLButtonElement>) => (
    <div className='menu'>
        <div>
            <span><strong>Due Date</strong></span>
            <button type='button' className='button' style={{ position: 'absolute', left: '77%',top:"0px"}} onClick={close}><FaTimes/>
</button>
    
        </div>
        <div>
        <span style={{position: 'relative',left: '-3px'}}><select style={{width: '100%', height:'10%'}} id="words">
<option value="Equal">Equal to</option>
<option value="Greater">Greater than</option>
<option value="Less">Less than</option>
<option value="Not">Not Equal to</option>
</select></span>
        </div>
        <div> <input type="date" id="start" name="trip-start" style={{width: '97%'}}/></div>
<div>
<span><button type='button'>Filter</button></span>
<span><button type='button'>Clear</button></span>
</div>
    </div>

     )}
    </Popup>
  );
};

export default FilterPop;