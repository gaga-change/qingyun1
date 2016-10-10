var exec=require("child_process").exec;
var querystring=require("querystring");
var fs=require("fs");
var formidable=require("formidable");

function start (response) {
	console.log("我是start  要处理 ");

	exec("ls -lah",function(error,stdout,stderr){
		
	
  	var body = '<html>'+
	    '<head>'+
	    '<meta http-equiv="Content-Type" content="text/html; '+
	    'charset=UTF-8" />'+
	    '</head>'+
	    '<body>'+
	    '<form action="/upload" enctype="multipart/form-data" '+
	    'method="post">'+
	    '<input type="file" name="upload" multiple="multiple">'+
	    '<input type="submit" value="提交" />'+
	    '</form>'+
	  	// "  <p style='color:green;font-family:娃娃体-简体;font-size:22px '>你是畅畅吗</p>"+
	    '</body>'+
	    '</html>';

	// var body="前段一组"
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write(body);
		response.end();
	});
}
function upload (response,request) {
	console.log("我是upload  要处理 ");
	// var form=new formidable.incomingForm();
	 var form = new formidable.IncomingForm();
	form.parse(request,function(error,fields,files){
		console.log(fields);
		console.log(files);
		console.log("parsing done");
	    fs.renameSync(files.upload.path, "/tmp/test.png");
		response.writeHead(200,{"Content-Type":"text/html"});
		response.write("receive image:<br/>");
		response.write("<img src='/show'/>");
		response.end();
	});
}
function show(response){
	console.log("我是show 要处理");
	fs.readFile("/tmp/test.png","binary",function(error,file){
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write("error"+"\n");
			response.end();
		}else{
			response.writeHead(200,{"Content-Type":"image/png"});
			response.write(file,"binary");
			response.end();
		}
	});

}
exports.start=start;
exports.upload=upload;
exports.show=show;


// var exec = require("child_process").exec;

// function start(response) {
//   console.log("Request handler 'start' was called.");

//   exec("find /",
//     { timeout: 10000, maxBuffer: 20000*1024 },
//     function (error, stdout, stderr) {
//       response.writeHead(200, {"Content-Type": "text/plain"});
//       var temp=10000000;
//       var str="";
// 	  while(temp--){
// 	  	str+=temp;
// 	  }
//       response.write("hah1");
//       response.end();
//     });
// }

// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello Upload");
//   response.end();
// }

// exports.start = start;
// exports.upload = upload;