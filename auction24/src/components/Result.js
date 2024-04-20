import axios from "axios";
import React, { useEffect, useState } from "react";

export default function () {
  const client = axios.create({
    baseURL: "http://127.0.0.1:8000",
  });
  const [resultdata, setResultdata] = useState([]);

  useEffect(() => {
    client.get("/api/results/").then((res) => {
      setResultdata(res.data);
    });
  }, []);
  useEffect(() => {
    console.log(resultdata);
  });

  return (
    <div className="container">
      <h2 className="text-center my-3">Results page</h2>
      <table className="table  table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">HighestBidder</th>
            <th scope="col">HighestBid</th>
            <th scope="col">Auctioned Date</th>
            <th scope="col">Listed Price </th>
          </tr>
        </thead>
        <tbody>
          {resultdata.map((item) => {
            return (
              <tr scope="row" key={item.itemid}>
                <td>{item.itemname}</td>
                <td>{item.currentbidder}</td>
                <td>{item.currentbid}</td>
                <td>{item.listdate.slice(0,10)}</td>
                <td>{item.itemstartingprice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
