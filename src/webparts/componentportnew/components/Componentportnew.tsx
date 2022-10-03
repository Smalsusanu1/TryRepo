import * as React from 'react';
import { IComponentportnewProps } from './IComponentportnewProps';
import Popofunctionlity from './Popofunctionlity';
import  PopupGfg  from './TextEditor';
// import {EditorConvertToHTML} from './text';
// import Tooltip from './popup';

export default class Componentportnew extends React.Component<IComponentportnewProps, {}> {
  public render(): React.ReactElement<IComponentportnewProps> {
    

    return (
      <div>
      <div>
        <h5>Portfolios</h5>
        <h1>Component Portfolio <PopupGfg/></h1>
        
        
      </div>
    
      <Popofunctionlity/>
    </div>
    );
  }
}
