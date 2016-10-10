/**
 * Created by qingyun on 16/8/16.
 */
var http = require("http");
var os = require("os")
// console.log(http)
http.createServer(function (req, res) {
    console.log("你来一次")
    res.writeHead(200, {"content-type": "text/plain;charset='utf-8'"})
    var temp = Math.random()
    res.end("" + temp.toString());
    var id = getClientIP(req);
    console.log(new Date().getMilliseconds()+id)
}).listen(9999);

 function getClientIP (req) {
    var ipAddress;
    var headers = req.headers;
    var forwardedIpsStr = headers['x - real - ip'] || headers['x - forwarded -for'];
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
     console.log(ipAddress);
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
        // console.log("fdsa"+req.connection.remoteAddress);
    }
    return ipAddress;
}
