// const express=require('express')
// const colle=require('./mongo')
// const app=express()
// const cors=require('cors')
// const path=require('path')
// const staticpath=path.join(__dirname,"./pages/loginpage/LoginPage.js")
//  console.log(staticpath)
// app.use(express.static(staticpath))
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cors())






// app.get('/login',(req,res)=>{
    

//     res.sendFile(`${staticpath}`);
// })



// // app.get('/login',cors(),(req,res)=>{
   
// // })

// app.post('/login',async(req,res)=>{
//     const{email,password}=req.body

    
// try{
// const check=await colle.findOne({email:email})
// if(check){
//     res.json("exit")
// }else{
//     res.json("notexit")
// }
// }
// catch(e){
// console.log("notexit")
// }
// })


// app.post('/singup',async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

// try{
// const check=await colle.findOne({email:email})
// if(check){
//     res.json("exit")
// }else{
//     res.json("notexit")
// await colle.insertMany([data])


// }

// }
// catch(e){
// console.log("notexit")

// }

// })

// app.listen(5500,()=>{
//     console.log("port connected")
// })





// const express = require("express");
//  const collection = require("./mongodb");
 
// const path = require("path");
// const app = express();
// const ejs = require("ejs");
// const cooies=require("cookie-parser")
// const helmet=require("helmet");
// const cookieParser = require("cookie-parser");

// const staticepath = path.join(__dirname,"./public")
// const viewpath=path.join(__dirname,"./view")
// console.log(staticepath);
// console.log(viewpath);

//  app.use(express.json());
//  app.use(express.static(staticepath))
//  app.use(express.urlencoded({ extended: false }));
//  app.use(helmet());
//  app.use(cookieParser());



//   app.set("view engine", "ejs");
//  app.set("views", viewpath);
 

// app.get("/", (req, res) => {
//    let username=req.cookies.name;
//     res.render("index");
// });



// app.post("/login", async (req, res) => {
//   const data = {
//     name: req.body.name,
//     Email:req.body.Email,
//     password: req.body.password,
//   }
//   await collection.insertMany([data])
//   res.render("index");
// });

// app.post("/singup", async (req, res) => {
//   const data= {
//     name: req.body.name,
//     Email:req.body.Email,
//     password: req.body.password,
//   };
//   await collection.insertMany([data])
//   res.render("index");
// });

// app.post("/confirm", async (req, res) => {
//   const data = {
//     hotelnm:res.body.hotelnm,
//   };
//   console.log(hotelnm);
//   await collection.insertMany([data])
//   res.render("index");
// });

// app.use("/", (req, res) => {
  
//    res.send("Page not Found");
// });


// app.listen(5500,() => {
//   console.log("port connected");
// });
