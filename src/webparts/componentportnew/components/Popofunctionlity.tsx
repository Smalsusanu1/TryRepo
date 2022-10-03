import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import './model.css';
import {FaAngleDown,FaAngleUp,FaRegEdit,FaPaintBrush,FaFileExcel,FaPrint,FaFilter,FaExpandAlt,FaSearch, FaTimes} from 'react-icons/fa';
import './sorting.css';
import { MdOutlineCompareArrows } from "react-icons/md";
import SelectFilter from './Selectfilter/SelectFilters';
import AddStructure from '../components/AddStructure/Addstructure';
import Tooltip from './popup';
import FilterPop from './FilterPopup/Filterpo';
import PopupOfdata from '../components/PopupOfdata/PopupOfdata';

export default function Popofunctionlity() {
  const [data, setData] = React.useState([]);
  const [search, setSearch]: [string, (search: string) => void] = React.useState("");
  const [toDoText, setToDoText] = React.useState("Title");
  const [tableData, setTableData] = React.useState(data);
  const [tablesData, setTablesData] = React.useState(data);
  React.useEffect(() => {
    
    const fetchData = () => {

      var getRequest = new XMLHttpRequest();
      var query = "Id,Mileage,TaskListId,TaskListName,WorkspaceType,PortfolioLevel,PortfolioStructureID,component_x0020_link,Package,Comments,DueDate,Sitestagging,Body,Deliverables,SiteCompositionSettings,StartDate,Created,Item_x0020_Type,Help_x0020_Information,Background,Categories,TechnicalExplanations,Idea,ValueAdded,Synonyms,Package,Short_x0020_Description_x0020_On,Admin_x0020_Notes,AdminStatus,CategoryItem,Priority_x0020_Rank,Priority,TaskDueDate,DueDate,PercentComplete,Modified,CompletedDate,ItemRank,Title,Portfolio_x0020_Type,Parent/Id,Parent/Title,Component/Id,Component/Title,Component/ItemType,Services/Id,Services/Title,Services/ItemType,Events/Id,Events/Title,Events/ItemType,SharewebCategories/Id,SharewebCategories/Title,AssignedTo/Id,AssignedTo/Title,Team_x0020_Members/Id,Team_x0020_Members/Title,ClientCategory/Id,ClientCategory/Title&$expand=SharewebCategories,ClientCategory,Parent,Component,Services,Events,AssignedTo,Team_x0020_Members&$filter=((Item_x0020_Type eq 'Component') or (Item_x0020_Type eq 'SubComponent') or (Item_x0020_Type eq 'Feature'))and (Portfolio_x0020_Type eq 'Component')&$top=4999";
      getRequest.open('GET', "https://hhhhteams.sharepoint.com/sites/HHHH/SP/_api/lists/getbyid('ec34b38f-0669-480a-910c-f84e92e58adf')/items?$select=" + query);
          getRequest.setRequestHeader("Accept", "application/json");

      getRequest.onreadystatechange = function () {

        if (getRequest.readyState === 4 && getRequest.status === 200) {
          var result = JSON.parse(getRequest.responseText);
          var resnext = result.value;
          console.log(resnext)
          setData(resnext);
        
        }
        else if (getRequest.readyState === 4 && getRequest.status !== 200) {
          console.log('Error Occurred !');

        }
      };
      getRequest.send();
    }
    fetchData();
  },

    []);
  
    const sortinasc = () => {
        data.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
        setTableData(data)
      }
    
      const sortindsc = () => {
        data.sort((a, b) => (a.Title > b.Title) ? -1 : 1);
        setTablesData(data)
      }
  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };

  
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let target = event.target;
    setToDoText((currentState) => {
      return target.value;
    })
  }
    return (

    <div>
        
      <div>
        <div>
          <div>
        <span><strong>Showing 99 of 99 Components | 538 of 592 SubComponents <br></br>| 676
           of 717 Features | 4670 of 5415 Tasks</strong></span>
         </div>
         <div style={{position: "absolute",left: "29%",top: "83px"}}>
          <span><input type="search" style={{width:"12%"}} placeholder='Search All' onChange={handleChange} /><FaSearch style={{position: 'relative',left: '-2%'}}/></span>
          <span style={{position: 'relative',left: "-7px"}}><SelectFilter/></span>
          <span style={{position: 'relative',left: '-3px'}}><select style={{width: '10%', height:'10%'}} id="words">
  <option value="All">All Words</option>
  <option value="Any">Any Word</option>
  <option value="Exact">Exact Phrase</option></select></span>
          <span><AddStructure/></span>
          <span><input type='button' style={{margin: "0"}} disabled value={"+ Add Activity-Task"}/></span>
          <span><input type='button'  style={{margin: "0"}} disabled   value={"Restructure"}/></span>
          <span><input type='button'  style={{margin: "0"}} disabled value={"  Compare"}/><MdOutlineCompareArrows style={{position: 'absolute',left: '58%',top: '11px'}}/></span>
          <span><button type='button' style={{margin: "0"}}><FaPaintBrush/></button></span>
          <span><button type='button' style={{margin: "0"}}><FaFileExcel/></button></span>
          <span><button type='button' style={{margin: "0"}}><FaPrint/></button></span>
          <span><button type='button' style={{margin: "0"}}><FaExpandAlt/></button></span>
          </div>
        </div>
    
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th className="th-sm">Name <input style={{ "width": "96%" }} type="search" placeholder='search Name' onChange={handleChange} />
              <div className='sorting' style={{position: "absolute",top: "138px",left: "-33%"}}>
              <span style={{position: "absolute",top: "14px",left: "61%"}}><button type='button'  className='button' onClick={sortindsc} onAbort={()=>setTableData(data)}><FaAngleDown/></button></span>
              <span style={{position: "absolute",top: "0%",left: "61%"}}><button type='button' className='button'    onClick={sortinasc} onAbort={()=>setTablesData(data)}><FaAngleUp/> </button></span>
            </div>
              </th>
             <th className="th-sm">DueDate<input type="search" style={{ "width": "96%" }} placeholder='search Due Date' onChange={handleChange} /></th>
             <th><FilterPop/></th>
              <th>Action</th>
            </tr>
          </thead>
        
           
          {data.map((item) => {
            if (search == "" || item.Title.toLowerCase().includes(search.toLowerCase())) {
              return (
                <tr>
                <td>{item.Title}</td>
                  <td>{item.DueDate}</td>
                  <td><PopupOfdata/></td>
                  <td> <Popup
                    trigger={<button className='button' type='button'> <FaRegEdit/> </button>}
                    modal
                    nested
                    contentStyle={{ width: '58%' , height:'20%'}}
                  >
                    {(close: React.MouseEventHandler<HTMLButtonElement>) => (
                    <div >
                       <div style={{position:"absolute",top:"7px"}}>
               <div style={{position: 'fixed',left: '71%'}} ><Tooltip/></div>
    
    <button type='button' className='button' style={{ position: 'fixed', left: '73%'}} onClick={close}><FaTimes/>
    </button>
               </div>
                      <div>
                        <label>Name:</label>
                        <input type="text" id="todo-text" defaultValue={item.Title} placeholder='Enter Name' onChange={handleInput} />
                      </div>

                      
                      <div>
                        <label>Due Date:</label>
                        <input type='text' defaultValue={item.DueDate} placeholder='Enter Due Date' onChange={handleInput} />
                      </div>
                      <button type='button'>Save</button>
                      <span>  </span>
                      <button type='button' onClick={close}>Cancel</button>
                    </div> 
                    )}
                  </Popup></td>


                </tr>
              );
            }
          })}
        </table>
      </div>
    </div>
  )
}





