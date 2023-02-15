const mysql=require("mysql")
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"lakshdb"
})
conn.connect((err)=>{
    if(err)throw err;
    else console.log("db connected")
})

const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data =>{
    data.forEach(data =>{
        const id =data.id;
       
        const title =data.title;
        const body =data.body;
    
        conn.query('insert into user2 values(?,?,?)',[id,title,body],(err,res)=>{
            if(err) throw err;
            console.log(res);
        })
    })
})
.catch(error => console.log('Error'));

conn.query("select * from user2",(err,result)=>{
    if(err) throw err;
    console.log(result)
})