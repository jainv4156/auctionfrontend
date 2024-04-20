import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Auctionitems(props) {
  let {currentbid,itemdiscription,itemid,itemimage,itemname,itemstartingprice,listdate}=props;
  const nevigate = useNavigate();

  const handlebidclick = (item) => {
    // props.setAuctionitemid(item);
    nevigate("/bidingpage",{
      state: { auctionitemid: item }
    
    });  
  }

  return (
         <div className="card">
              <img src={itemimage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{itemname}</h5>
                <p className="card-text">
                  {itemdiscription}
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div>
                  
                  <p>Current Bid: {currentbid}</p>
                  <p>Starting Bid: {itemstartingprice}</p>
                  <p>End Date: {listdate}</p>
                </div>
                <button className="btn btn-primary" onClick={e=>handlebidclick(itemid)}>
                Bid Now
              </button>
              
                
              </div>
        </div>
      
  )
}
