const express=require("express")
const bodyparser=require("body-parser")//collect data 
const mongoose=require("mongoose")
const nodemailer=require('nodemailer')



const app=express();
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.listen(3000,function(){console.log("welcome to six-g")})
app.get("/",function(req,res)
{  res.sendFile(__dirname+'/alumnicollection.html')})
//res.render("six-g", {user:"Anirudh"})})
const alumniSchema={name:String ,email:String,ph:Number,_id:Number ,degree:String ,industry:String ,}
const alumni=mongoose.model('alumni',alumniSchema)
app.post('/',function(req,res){
    const transporter=nodemailer.createTransport({
        service:gmail ,
    auth:{user:'19me1003@gmail.com'}})
    const a1=new alumni(req.body)
    a1.save()
    res.send('congratulations registration successful')
})
mongoose.connect("mongodb+srv://Directorate:Abhi%40123@six-g.v9upn.mongodb.net/SIX-G?retryWrites=true&w=majority")
const studentSchema={name:String ,_id:Number ,graduationYear:Number ,degree:String ,email:String,ph:Number }
const student=mongoose.model("student",studentSchema)
const s1=new student({ name:"Nikki Odom", _id:006, graduationYear:2021,degree:'Bachelor Of Science',email:'nodom@newblend.com',ph:2345678901})
const s2=new student({name:'Susannah Jefferson',_id:007,graduationYear:2021,degree:'Master Of Science',email:'sjefferson@newblend.com',ph:2345678901})
const s3=new student({name:'Shannen Ahmad',_id:09, graduationYear:2021,degree:'Master Of Science',industry:'Natural Resources and Miing',email:'sahmad@newblend.com',ph:2345678901})
const s4=new student({name:'Carmen Blackwell',_id:11,graduationYear:2020,degree:'Associates',industry:'Educational Services',email:'cblackwell@newblend.com',ph:2345678901})
const s5=new student({name:"Osman Tanner",_id:13,graduationYear:2020,degree:'Master Of Science',industry:'Insurance Carriers and Related Activities',email:'otanner@newblend.com',ph:2345688901})
const s6=new student({name:'Anjali Talley',_id:15,graduationYear:2020,degree:'Associates',industy:'Health Care and Social Assistance',email:'atalley@newblend.com',ph:2345678901})
const s7=new student({name:'Soumya Jha',_id:475,graduationYear:2023,degree:'Bachelor Of Technology',industy:'Information Technology',email:'soumya.jha.0501@gmail.com',ph:9644389085})
const s8=new student({name:'Brodie Weeks',_id:201,graduationYear:2019,degree:'Bachelor Of Arts',industry:'Intenet Publishing and Broadcastind',email:'bweeks@newblend.com',ph:2345678901})
const s9=new student({name:'Keavy Seymour',_id:256,graduationYear:2022,degree:'Associates',industry:'Broadcasting',email:'kseymour@newblend.com',ph:2345678901})
const s10=new student({name:'Oscar Hickman',_id:95,graduationYear:2021,degree:'Doctorate',industry:'Ambulatory HealthCare Services',email:'ohickman@newblend.com',ph:2345678901})
const s11=new student({name:'Armani Navarro',_id:103,graduationYear:2020,degree:'Associates',industry:'Banking',email:'anavaro@newblend.com',ph:2345678901})
const s12=new student({name:'Bella Harrell',_id:275,graduationYear:2021,degree:'Master Of Science',industry:'Health and Care Stores',email:'bharrell@newblend.com',ph:2345678901})
const s13=new student({name:'Arfa Aguirre',_id:301,graduationYear:2019,degree:'Bachelor Of Science',industry:'Other Informatioin Services',email:'aaguirre@newblend.com',ph:2345678901})
const s14=new student({name:'Emme Stout',_id:567,graduationYear:2020,degree:'Bachelor Of Science',industry:'Internet Publishing and Broadcasting',email:'estout@newblend.com',ph:2345678901})
const s15=new student({name:'Fern Patridge',_id:635,graduationYear:2021,degree:'Bachelor Of Arts',industry:'Education and Health Services',email:'fpartridge@newblend.com',ph:2345678901})
const s16=new student({name:'Pascal Holcomb',_id:824,graduationYear:2019,degree:'Bachelor Of Science',industry:'Construction Buildings',email:'pholcomb@newblend.com',ph:2345678901})
const s17=new student({name:'Eleni Bernard',_id:578,graduationYear:2020,degreee:'Master Of Science',industry:'Computer and Electronic Product Manufacturing',email:'ebernard@newblend.com',ph:2345678901})
const s18=new student({name:'Fearne Sutton',_id:127,graduationYear:2021,degree:'Master Of Science',industry:'Clothing and Accessories Stores',email:'fsutton@newblend.com',ph:2345678901})
const s19=new student({name:'Kimberly Cartwright',_id:164,graduationYear:2019,degree:'Bachelor Of Science',industry:'HealthCare and Social Assistance',email:'kcartwright@newblend.com',ph:2345678901})
const s20=new student({name:'Bruno Charney',_id:195,graduationYear:2018,degree:'Doctorate',industry:'Air Transportation',email:'bchaney@newblend.com',ph:2345678901})
//student.insertMany([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20],function(err){if(err)console.log(err);else console.log('student collection ready')})






