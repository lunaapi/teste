const express=require("express"),path=require("path"),fs=require("fs"),archiver=require("archiver"),app=express(),PORT=3e3,CAMERA_DIR=path.join(process.env.HOME,"storage/dcim/Camera");app.get("/",(a,e)=>{e.send(`
    <h1>download c\xe2mera</h1>
    <a href="/download-zip"><button>ZIP</button></a>
  `)}),app.get("/download-zip",(a,e)=>{e.set({"Content-Type":"application/zip","Content-Disposition":"attachment; filename=camera_photos.zip"});let t=archiver("zip",{zlib:{level:9}});t.pipe(e),fs.readdir(CAMERA_DIR,(a,o)=>{if(a){e.status(500).send("err c\xe2mera.");return}o.forEach(a=>{let e=path.join(CAMERA_DIR,a);t.file(e,{name:a})}),t.finalize()})}),app.listen(3e3,()=>{console.log("teste 1 2 3 - http://localhost:3000")});
