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
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{margin:20}}>
              <div class="card-body">
                <h5 class="card-title">Total Feedback: </h5>
                <p class="card-text">
                  { counter }
                </p>
              </div>
            </div>
          </div>
          {/* <div class="col-sm-6">
            <div class="card" style={{margin:20}}>
              <div class="card-body">
                <h5 class="card-title">Total service</h5>
                <p class="card-text">
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
