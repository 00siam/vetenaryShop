// ================================================ insallation must start
// install npm intit -y
// install npm i express mysql cors nodemon
// install npm i cors
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

// ================================================ insallation must end

// ======================================= contact page start ================================
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
        // console.log(data);
        if(err) return res.json(err);
        return res.json("Contact importaded successfully");

    });
});
//======================================= contact page end ================================



// ======================================= login start ================================
app.post('/adminlogin', (req,res) => {
    console.log("enter the admin login from backend");
    // value form contact page pass
    
      const name =  req.body.name;    // nm receive from useSate hook
      const pass =  req.body.password;    // em receive from useState hook

      console.log(name);
      console.log(pass);
    // query
    const q = "SELECT * FROM `admin` WHERE name = ? AND password = (?)";
    
    console.log("query below");
    console.log("query", q);
    // query completed
    db.query(q, [name, pass], (err, data) => {
        if(err) return res.json(err);
        console.log("query functino below");
        
        console.log("query commpleted");
        console.log(data);

        // console.log("database seceive form name: " ,data[0].name);
        // console.log("database seceive form password: " ,data[0].password);
        
        // if(name == data[0].name && pass == data[0].password ){
        //     res.send(data);
        //     console.log("Right username and password")
        // }else{
        //     console.log("wrong user name and password");
        // }

        if(data.length>0){
            res.send(data);
        }else{
            res.send({ message: "Wrong username and password combination!"});
        }
    });
});
//======================================= Login end ================================




//================================================== service table show in admin panel start
app.get("/adminSerivices", (req, res) => {
    const q = "SELECT * FROM `contact`";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json (data)
    });
});
//================================================== service table show in admin panel end


// ============================================ admin dash counter show in admin panel start
app.get("/adminDash", (req, res) => {
    const q = "SELECT * FROM `contact`";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json (data)
    });
});
// ============================================ admin dash counter show in admin panel end



//============================================ service table data delete in admin panel start
app.delete("/adminSerivices/:id", (req, res) => {
    const serviceId = req.params.id;
    const q = "DELETE FROM `contact` WHERE id = (?)";
    
    console.log(" delete query below");
    db.query(q,[serviceId], (err, data) => {
        console.log("delete query function below");
        if(err) return res.json(err);
        return res.json ("Services has been deleted successfully");
    });
});
//============================================ service table data delete in admin panel end

// app ruuing
app.listen(3001, () => {
    console.log("Server running.........");
})
