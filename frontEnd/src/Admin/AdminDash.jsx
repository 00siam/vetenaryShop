import React, { useState, useEffect } from "react";
import Axios from "axios";

import AdminNav from "./AdminNav";

import Footer from "../Footer/Footer";

const AdminServices = () => {

  const [counter, setCounter] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("handle clicked start ....");
        const res = await Axios.get("http://localhost:3001/adminDash");
        setCounter(res.data.length);
        // console.log("length: ", res.data.length);
        // console.log("handle clicked end ....");
      } catch (err) {
        console.log(err);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      <AdminNav />

      {/*  backgroundColor: "red", */}
      <div style={{marginLeft: 20, width:"80%"}}>  
        <div className="row">
          <div className="col-sm-6">
            <div className="card" style={{margin:20}}>
              <div className="card-body">
                <h5 className="card-title">Total Feedback: </h5>
                <p className="card-text">
                  { counter }
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-6">
            <div className="card" style={{margin:20}}>
              <div className="card-body">
                <h5 className="card-title">Total service</h5>
                <p className="card-text">
                  5
                </p>
              </div>
            </div>
          </div> */}
        
        </div>
      </div>

      {/* footer  */}
      <div style={{ marginTop: 268 }}>
        <Footer />
      </div>
    </>
  );
};

export default AdminServices;
