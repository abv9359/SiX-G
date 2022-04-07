const express=require("express")
const bodyparser=require("body-parser")//collect data 
const mongoose=require("mongoose")
const app=express();
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.listen(3000,function(){console.log("welcome to six-g")})
app.get("/",function(req,res)
{res.render("six-g", {user:"Anirudh"})})
mongoose.connect("mongodb+srv://Directorate:Abhi%40123@six-g.v9upn.mongodb.net/SIX-G?retryWrites=true&w=majority")
const alumnischema={name:String ,rollno:Number }
const alumni=mongoose.model("alumni",alumnischema)
const alumni1=new alumni({rollno:003, name:"Abhinav"})
alumni1.save()

