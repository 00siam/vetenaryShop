import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";

import Nav from "../NabBar/Nav";
import Footer from "../Footer/Footer";

const AdminServices = () => {
  const [adminContact, setAdminContact] = useState([]);


  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("handle clicked start ....");
        const res = await Axios.get("http://localhost:3001/adminSerivices");
        setAdminContact(res.data);
        console.log(res);
        console.log("handle clicked end ....");
      } catch (err) {
        console.log(err);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      <Nav />

      <div>
        <h2 style={{ color: "orange", marginTop: 80 }}>
          Contact Information Table
        </h2>
      </div>

      <div className="admin" style={{margin:20, padding: 20}}>
        <Table striped>
          <thead>
            <tr>
              <th> Name</th>
              <th> Email </th>
              <th> Message </th>
            </tr>
          </thead>

          {adminContact.map((contact, i) => (
            <tbody>
              <tr>
                <td> { contact. name} </td>
                <td> { contact. email} </td>
                <td> { contact. message} </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>

      {/* table  */}

      {/* footer  */}
      <div style={{ marginTop: 268 }}>
        <Footer />
      </div>
    </>
  );
};

export default AdminServices;
