import axios from "axios";
import React, { useState } from "react";

export default function Biddingbar(props) {
  const [bidvalue, setBidvalue] = useState(0);
  const user = localStorage.getItem("user");
  const client = axios.create({
    baseURL: "https://jainv4156.pythonanywhere.com/",
  });

  const handlebidclick = (e) => {
    e.preventDefault();
    client
      .post("/api/bid/", {
        itemid: props.itemid,
        bidder: user,
        bid: bidvalue,
      })
      .then((res) => {
        // setAuctionitems(auctionitems.currentbid=res.data.currentbid);
        
        console.log(res.data.status);
        if(res.data.status==="success"){
          props.setYourhighestbid(bidvalue);
        }
      });
  };

  return (
    <div>
      <div className="container ">
        <form onSubmit={(e) => handlebidclick(e)}>
          <div className="input-group  mt-5 d-flex flex-row mb-2">
            <span className="input-group-text">$</span>

            <input
              type="number"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              onChange={(e) => setBidvalue(e.target.value)}
            />
            <span className="input-group-text">.00</span>
            <button type="submit" className="btn btn-warning">
              Bid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
