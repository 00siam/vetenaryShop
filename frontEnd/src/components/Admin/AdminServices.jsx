import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Axios from "axios";

import AdminNav from "./AdminNav";
import Footer from "../Footer/Footer";

const AdminServices = () => {
  //store data
  const [adminContact, setAdminContact] = useState([]); 
  
  //fetch from backend
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

  // auto render frontend
  useEffect(() => {
    fetchServices();
  }, []);


  // Delete function 
  const handleDeleteClick = async (id) => {
    try {
      console.log("handle deltected click start ");
      console.log("id is: ", id);
      await Axios.delete("http://localhost:3001/adminSerivices/" + id);
      window.location.reload();
      console.log("handle deleted click end");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminNav />

      <div>
        <h2 style={{ color: "orange"}}>
          Feedback Information Table
        </h2>
      </div>

      <div className="admin" style={{ margin: 20, padding: 20 }}>
        <Table striped>
          <thead>
            <tr>
              <th> Name</th>
              <th> Email </th>
              <th> Message </th>
              <th> Action </th>
            </tr>
          </thead>

          {adminContact.map((contact, i) => (
            <tbody key={contact.id}>
              {/* map er porei must key = {}  dite hobe na hole error dibe  */}
              <tr>
                <td> {contact.name} </td>
                <td> {contact.email} </td>
                <td> {contact.message} </td>
                <td>
                  {" "}
                  <button
                    type="button"
                    onClick={() => handleDeleteClick(contact.id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>

      {/* table  */}

      {/* footer  */}
      <div style={{ marginTop: 100 }}>
        <Footer />
      </div>
    </>
  );
};

export default AdminServices;
