import axios from "axios";
import React, { useEffect, useState } from "react";
import Biddingbar from "./Biddingbar";
import Bidhistory from "./Bidhistory";
import { useNavigate } from "react-router-dom";

const url = "https://jainv4156.pythonanywhere.com/";
const client = axios.create({
  baseURL: "https://jainv4156.pythonanywhere.com/",
});
export default function BidingPage() {
  const [auctionitems, setAuctionitems] = useState({});
  const [itemhistory, setItemhistory] = useState([]);
  const [yourhighestbid, setYourhighestbid] = useState({});
  const user=localStorage.getItem("user");
  const nevigate=useNavigate();
  const[timeleft,setTimeleft]=useState("");
  const timeleftcalc=()=>{
    let hour=23;
    let min=59;
    let sec=59;
    const currentdate=new Date();
    hour=hour-currentdate.getHours();
    min=min-currentdate.getMinutes();
    sec=sec-currentdate.getSeconds();
    let timeremaining=hour+" Hours "+min+" Minutes "+sec+" Seconds ";
    setTimeleft(timeremaining);
  }

  let {
    currentbid,
    itemdiscription,
    itemid,
    itemimage,
    itemname,
    itemstartingprice,
  } = auctionitems;
  const fethdata = async () => {
    const fethdata = await client.post("/api/data/",{"user":user});
    setAuctionitems(fethdata.data.data2);
    setItemhistory(fethdata.data.data);
  };
  useEffect(() => {
    if(localStorage.getItem("user")===""){
      nevigate("/")
    }
    const interval=setInterval(()=>{
      timeleftcalc();
    }
    ,1000);
    fethdata();
  }, [yourhighestbid]);

    useEffect(() => {});

  return (
    <div>
      <div className="">
        <h1 className="text-center mt-3">Welcome to one day auction</h1>

        <div className=" row mt-5 justify-content-around">
          <div className="col-md-7 ">
            <div className="container">
              <div className="card">
                <img
                  src={url + itemimage}
                  height={400}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{itemname}</h5>
                  <p className="card-text">{itemdiscription}</p>
                  <div>
                    <p>Current Bid: {currentbid}</p>
                    <p>Starting Bid: {itemstartingprice}</p>
                    <p>Time Remaining: {timeleft}</p>
                  </div>
                </div>
              </div>
            </div>


            <Biddingbar itemid={itemid} yourhighestbid={yourhighestbid} setYourhighestbid={setYourhighestbid} />
          </div>

            <Bidhistory itemhistory={itemhistory}/>
        </div>
      </div>
    </div>
  );
}
