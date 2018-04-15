var exp=require("express");
var app = exp();
app.use(exp.static(__dirname+"/public"));
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render("home.ejs",{
        title:'I love all the cities',
        news:'All are very good cities'
        
    });
});
app.get('/:city',function(req,res){
    var cityname=req.params.city;
    var titlename;
    var imgsrc;
    if(cityname=='chennai'){
        titlename="CHENNAI";
        imgsrc="images/chennai.jpg";
    }
  else if(cityname=='bangalore'){
  	titlename="BANGALORE";
  	imgsrc="images/bangalore.jpg";
    }
    else if(cityname=='mumbai'){
    	titlename="MUMBAI";
    	imgsrc="images/mumbai.jpg";
    }
    else if(cityname=='orissa'){
    	titlename="ORISSA";
    	imgsrc="images/orissa.jpg";
    }
    res.render('city.ejs',{
        title:titlename,
        img:imgsrc
    })
}
)
var port = process.env.PORT || 4000;
app.listen(port, function () {
	console.log("server running on port" + port);
});
