const express =require("express");
const app = express();


app.get("/books",logger,(req,res)=>{
   return res.send({route:"/books"})
})

app.get("/libraries",logger,checkPermisson,(req,res)=>{
    return res.send({route: "/libraries",Permission:req.Permission})
})

app.get("/author",logger,checkPermisson,(req,res)=>{
    return res.send({route:"/author",Permission:req.Permission})
})

function logger(req,res,next){
    if(req.path=="/books"){
      next();
    }
    else if(req.path=="/libraries"){
        next();
    }
    else{
       next();
    }
}

function checkPermisson(req,res,next){
  if(req.path=="/libraries"){
      req.Permission="true";
      next();
  }
  else if(req.path=="/author"){
    req.Permission="true";
    next();
}
 else{
    req.Permission="No";
    next();
 }
}

app.listen(6000,()=>{
    console.log("listining at port 6000");
})