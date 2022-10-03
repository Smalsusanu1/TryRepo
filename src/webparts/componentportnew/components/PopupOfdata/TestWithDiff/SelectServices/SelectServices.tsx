import * as React from 'react';
import {FaRegEdit, FaTimes} from  'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Tooltip from '../../../popup';
function SelectServices() {

    return(
    <div >
        <Popup
        trigger={<button className='button' type='button' style={{position: "absolute",left: "11%",top: "21%"}}> <FaRegEdit /> </button>}
        modal
        nested
        contentStyle={{ width: '80%' , height:'100%',top: "0%"}}
      >
            {(close: React.MouseEventHandler<HTMLButtonElement>) => (
        <div >
             <div>
            <div style={{fontSize: "x-large"}}>
            <strong>Select Services</strong>
            <div style={{position:"absolute",top:"7px"}}>
                   <div style={{position: 'fixed',left: '80%'}} ><Tooltip/></div>
        
        <button type='button' className='button' style={{ position: 'fixed', left: '83%'}} onClick={close}><FaTimes/>
        </button>
                   </div>
                   </div>
        </div>

        <div >

        </div>


        </div>
        )}
         </Popup>    
         </div>


        )}

export default SelectServices;
