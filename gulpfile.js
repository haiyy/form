var gulp=require("gulp");
var webserver=require("gulp-webserver");
var path=require('path');
var fs=require("fs");
gulp.task("webserver",function(){
      gulp.src(".")
          .pipe(webserver({
               host:'localhost',
               port:8088,
               livereload:true,
               fallback:'index.html',
               middleware:function(req,res,next){
                  if(req.url=='/')
               }
            }))
    })