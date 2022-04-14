const express=require("express")
const bodyparser=require("body-parser")//collect data 
const mongoose=require("mongoose")
const nodemailer=require('nodemailer')
const {google}=require('googleapis')
const clientId='765466171662-huo2m0vacre1mda797mmtu76269mgg5r.apps.googleusercontent.com'
const clientSecret='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'
const redirectUri='https://developers.google.com/oauthplayground'
const refreshToken='1//043pNI-GE5tXACgYIARAAGAQSNwF-L9Ira76ovhuAw5QxMPUSLC6Fom5nRNvKUmbddufiv3ldNcXamXIWE4jeTZP8W8AtYG0Ow6E'
const oAuth2Client = new google.auth.OAuth2(clientId,clientSecret,redirectUri);
oAuth2Client.setCredentials({refresh_token: refreshToken});
var otp
mongoose.connect("mongodb+srv://Alumni:Abhi%40123@six-g.v9upn.mongodb.net/SIX-G?retryWrites=true&w=majority")



const app=express();
app.use(express.static('public'))
app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.listen(3000,function(){console.log("Welcome to Six-G")})

app.get("/",function(req,res)
{  res.render('registration')})


//res.render("six-g", {user:"Anirudh"})})
const alumniSchema={
    name:{type:String ,required:true},
    email:{type:String,required:true},
    ph:{type:Number,required:true,min:1000000000,max:9999999999},
    _id:{type:Number,required:true,unique:true} ,
    degree:{type:String,required:true} ,
    industry:{type:String,required:true},
    pass:{type:String,required:true,minLength:8}}
const alumni=mongoose.model('alumni',alumniSchema)
app.post('/',function(req,res){

    
      const a1=new alumni(req.body)
      console.log(req.body)
      alumni.insertMany([a1],function(err){
          if(err)console.log(err);

          else {
            
            oAuth2Client.getAccessToken(function(err,token){
                if (err){
                  console.log(err);
                }
                else{
                  console.log("Access Token is ",token);
                  const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      type: 'OAuth2',
                      user: 'abv9359@gmail.com',
                      cllientId: clientId,
                      clientSecret: clientSecret,
                      refreshToken: refreshToken,
                      accessToken: token, 
                    }
                  });
                  otp= Math.floor(Math.random() * 1000000)
                  const mailOptions = {
                    from: 'abv9359@gmail.com',
                    to: req.body.email,
                    subject: 'Verification',
                    html: 'The Verification code is ' + otp
                  };
                 
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                      
                    } else {
                      console.log('Email sent: ' + info.response);
                      res.sendFile(__dirname+'/Verification.html')
                      
                      
                    }
                    
                  });
                }
              });
           } 
    })

    
})
 
app.post('/verify',function(req,res){
    if(otp==req.body.code)
    res.send('Verification Successful')
    else
    res.send('Failed')
})
/*alumni.deleteMany({_id:{$gte:1}},function(err){
    if(err)
    console.log(err);
    else
    console.log('deleted successfully')
})*/
app.get('/login',function(req,res){ 
  res.render('six-g')
})
app.post('/login',function(req,res){
  var email=req.body.email
  var pass=req.body.pass
  alumni.findOne({email:email},function(err,result){
    if(err)
    console.log(err)
    else {
      if(result){
        if(result.pass===pass){
          res.send('login successfull')
        }
        else{res.send('login failed')}
    }}
  })

  
})

const studentSchema={name:String ,_id:Number ,graduationYear:Number ,degree:String ,email:String,ph:Number }
const student=mongoose.model("student",studentSchema)
const s1=new student({ name:"Nikki Odom", _id:006, graduationYear:2021,degree:'Bachelor Of Science',email:'nodom@newblend.com',ph:2345678901})
const s2=new student({name:'Susannah Jefferson',_id:007,graduationYear:2021,degree:'Master Of Science',email:'sjefferson@newblend.com',ph:2345678901})
const s3=new student({name:'Shannen Ahmad',_id:09, graduationYear:2021,degree:'Master Of Science',ph:2345678901})
const s4=new student({name:'Carmen Blackwell',_id:11,graduationYear:2020,degree:'Associates',email:'cblackwell@newblend.com',ph:2345678901})
const s5=new student({name:"Osman Tanner",_id:13,graduationYear:2020,degree:'Master Of Science',email:'otanner@newblend.com',ph:2345688901})
const s6=new student({name:'Anjali Talley',_id:15,graduationYear:2020,degree:'Associates',email:'atalley@newblend.com',ph:2345678901})
const s7=new student({name:'Soumya Jha',_id:475,graduationYear:2023,degree:'Bachelor Of Technology',email:'soumya.jha.0501@gmail.com',ph:9644389085})
const s8=new student({name:'Brodie Weeks',_id:201,graduationYear:2019,degree:'Bachelor Of Arts',email:'bweeks@newblend.com',ph:2345678901})
const s9=new student({name:'Keavy Seymour',_id:256,graduationYear:2022,degree:'Associates',email:'kseymour@newblend.com',ph:2345678901})
const s10=new student({name:'Oscar Hickman',_id:95,graduationYear:2021,degree:'Doctorate',email:'ohickman@newblend.com',ph:2345678901})
const s11=new student({name:'Armani Navarro',_id:103,graduationYear:2020,degree:'Associates',email:'anavaro@newblend.com',ph:2345678901})
const s12=new student({name:'Bella Harrell',_id:275,graduationYear:2021,degree:'Master Of Science',email:'bharrell@newblend.com',ph:2345678901})
const s13=new student({name:'Arfa Aguirre',_id:301,graduationYear:2019,degree:'Bachelor Of Science',email:'aaguirre@newblend.com',ph:2345678901})
const s14=new student({name:'Emme Stout',_id:567,graduationYear:2020,degree:'Bachelor Of Science',email:'estout@newblend.com',ph:2345678901})
const s15=new student({name:'Fern Patridge',_id:635,graduationYear:2021,degree:'Bachelor Of Arts',email:'fpartridge@newblend.com',ph:2345678901})
const s16=new student({name:'Pascal Holcomb',_id:824,graduationYear:2019,degree:'Bachelor Of Science',email:'pholcomb@newblend.com',ph:2345678901})
const s17=new student({name:'Eleni Bernard',_id:578,graduationYear:2020,degreee:'Master Of Science',email:'ebernard@newblend.com',ph:2345678901})
const s18=new student({name:'Fearne Sutton',_id:127,graduationYear:2021,degree:'Master Of Science',email:'fsutton@newblend.com',ph:2345678901})
const s19=new student({name:'Kimberly Cartwright',_id:164,graduationYear:2019,degree:'Bachelor Of Science',email:'kcartwright@newblend.com',ph:2345678901})
const s20=new student({name:'Bruno Charney',_id:195,graduationYear:2018,degree:'Doctorate',email:'bchaney@newblend.com',ph:2345678901})
//student.insertMany([s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20],function(err){if(err)console.log(err);else console.log('student collection ready')})
/*student.deleteMany({_id:{$gte:1}},function(err){
    if(err)
    console.log(err);
    else
    console.log('deleted successfully')
})*/






