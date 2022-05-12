import React, {FC} from 'react';
import { ViewportContext , ViewPortState } from 'view-detector';


/**
 *
 */
export interface SampleProps {
}

/**
 * author: administrator
 * Date:  13/5/2022
 *@param props SampleProps
 */
const Sample: FC<SampleProps> = () => {
  return (
    <ViewportContext.Consumer>
      {(t:ViewPortState)=> t.isMobile ?  <h2>I Am mobile view</h2> :<div>{t.isTable ? "Table" : "Desktop"}</div>}
    </ViewportContext.Consumer>
  )
}


export default Sample;
