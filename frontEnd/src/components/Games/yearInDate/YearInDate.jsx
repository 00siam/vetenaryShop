import React, { useState, useEffect } from "react";
import Nav from "../../NabBar/Nav";
import { MDBInput } from "mdb-react-ui-kit";

import Footer from "../../Footer/Footer";

const YearInDate = () => {
  const [birthday, setBirthday] = useState("");

  const handleChange = (e) => {
    setBirthday((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const calculateAge = (birthday) => {
    // console.log("calculated function entered:  ", birthday.birthday);

    if (birthday.birthday > 2023 || !birthday.birthday) {
      alert("Insert the valid year");
    } else {
      var day = birthday.birthday;
      day = day.split("-");

      var d1 = day[0];
      var m1 = day[1];
      var y1 = day[2];

      // console.log(d1);
      // console.log(m1);
      // console.log(y1);

      var date = new Date();
      var d2 = date.getDate();
      var m2 = 1 + date.getMonth();
      var y2 = date.getFullYear();

      var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      // var month = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

      if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
      }
      if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
      }

      // console.log("year", y2);
      // console.log("month:", m2);
      // console.log("date:", d2);

      var d = d2 - d1;
      var m = m2 - m1;
      var y = y2 - y1;

      document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + "Days";
    }
  };

  return (
    <div>
      <>
        <Nav />

        {/* heading */}
        <div className="container">
          <h2 style={{ color: "orange", marginTop: 80 }}>Years in Date </h2>
        </div>

        <div
          style={{
            width: "70%",
            marginTop: "3%",
            marginLeft: "15%",
            padding: "3%",
            backgroundColor: "grey",
            border:" 2px solid orange",
            borderRadius: "25px"
          }}
        >
          <MDBInput
            wrapperClass="mb-4 w-80"
            name="birthday"
            onChange={handleChange}
            placeholder="Enter your birthday in DD-MM-YYYY ?"
            type="text"
          />

          <button
            type="button"
            onClick={() => {
              calculateAge(birthday);
            }}
            className="btn btn-success"
          >
            Submit
          </button>
        </div>

        <div id="age" style={{marginTop: "2%"}}></div>

        {/* footer  */}
        <div style={{ marginTop: 125 }}>
          <Footer />
        </div>
      </>
    </div>
  );
};

export default YearInDate;
