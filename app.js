const express=require("express");
const body_parser=require("body-parser");
const app=express();
const date=require(__dirname+"/date.js");
app.set("view engine","ejs");
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static("public"));
var tasks=["wake up"];
var work=[];
app.get("/",function(req,res){
  const day=date.getDate();
  res.render('index',{day:day,tasks:tasks});

});
app.get("/work",function(req,res){
  res.render('index',{day:"work",tasks:work});
});
app.post("/",function(req,res){
  const val=req.body.taskval;
  if(req.body.list==='work'){
    work.push(val);
    res.redirect("/work");
  }
  else{
    tasks.push(val);
    res.redirect("/");
  }
});
app.listen(3000,function (){
  console.log("server is running");
});
