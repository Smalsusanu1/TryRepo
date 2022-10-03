import React from 'react';
import { FaBars } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import {FaCommentAlt,FaQuestion } from 'react-icons/fa';
function Tooltip() {
    // const [isShown, setIsShown] = React.useState(false);

    return (
 <Popup
  trigger={
    <button type='button' className="button"><FaBars/></button>
  }
  position="left top"
      on="hover"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: '0px', border: '1px' }}
      arrow={false}
  
>
{/* {isShown && ( */}
  <table className='menu'>
    <tr>
    <td><a href="#" className='rmunderline'><FaCommentAlt/>HHHH Feedback SP</a></td>
    </tr>
    <tr>
    <td><a href="#" className='rmunderline'><FaCommentAlt/>HHHH Bug</a></td>
    </tr>
    <tr>
    <td><a href="#" className='rmunderline'><FaCommentAlt/>HHHH Design</a></td>
    </tr>
    <tr>
    <td><a href="#" className='rmunderline'><FaCommentAlt/>HHHH Quick</a></td>
    </tr>
    <tr>
    <td><a href="#" className='rmunderline'><FaCommentAlt/>HHHH Component Page</a></td>
    </tr>
    <tr>
    <td><a href="#" className='rmunderline'><FaCommentAlt/>Call Notes</a></td>
    </tr>
    <tr>
    <td><a href="#" className='rmunderline'><FaQuestion/>Admin Help</a></td>
    </tr>
    <tr>
    <td><a href="#" className='rmunderline'><FaQuestion/>Help</a></td>
    </tr>
  </table> 
</Popup>
 
   );
};

export default Tooltip;