process.on('uncaughtException',function (err) {
    console.log('process is error and crash')
})

setTimeout(function () {
    console.log("after 3s")
},3000);

aa();

console.log('executed after aa')

function aa() {
    var temp=a;
    console.log(temp)
}