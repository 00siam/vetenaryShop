// install npm intit -y
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
        req.body.nm,    // nm receive from useSate hook
        req.body.em,    // em receive from useState hook
        req.body.message,// message receive from useState hook
    ];

    // query completed
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("Contact importaded successfully");

    });
});


// 
app.get("/adminSerivices", (req, res) => {
    const q = "SELECT * FROM `contact`";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json (data)
    });
});

// app ruuing
app.listen(3001, () => {
    console.log("Server running.........");
})
