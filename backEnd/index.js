// install express mysql cors nodemon
const express =require("express");
const mysql =require("mysql");
const cors =require("cors");

const app = express(); // new exprss application start inside app 

// body parse 
app.use(express.json());

// two platefrom connected
app.use(cors())

// databse conection
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "veterinary",
});

// root page
app.get("/", (req, res) => {
    res.json("hello this is backend");
})

// contact page 
app.post('/contact', (req,res) => {
    // query
    const q = "INSERT INTO `contact`(`name`, `email`, `message`) VALUES (?)";
    
    // value form contact page pass
    const values = [
        req.body.nm,
        req.body.email,
        req.body.message,
    ];

    // query completed
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("Contact importaded successfully");

    });
});



// app ruuing
app.listen(3001, () => {
    console.log("Server running.........");
})