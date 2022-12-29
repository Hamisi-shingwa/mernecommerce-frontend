import React from "react";
import close from '../../images/close.png'
import smartphone from '../../images/itel1.jpg'
import itel from '../../images/itel2.jpg'

export default function MyShop(){
    return(
        <div className="myshop">
           <div className="top-myshop">
               <div className="myshop-image"><img src={close} alt=''/></div>
               <div className="myshop-description">Let's walk togather for transform our skill up to top</div>
           </div>
          <div className="midle">Recommended ads my AmyShop</div>
          <div className="down-myshop">
              <div className="firstImage"><img src={smartphone} alt=''/></div>
              <div className="secondImage"><img src={itel} alt=''/></div>
          </div>
        </div>
    )
}