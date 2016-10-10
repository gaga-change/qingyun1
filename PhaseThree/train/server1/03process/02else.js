/**
 * Created by qingyun on 16/8/23.
 */


process.argv.forEach(function(val,index){
    console.log("val-----"+val);
    console.log("index----"+index)
})
process.env.a=1;
// process.exit(0);
// console.log(process.env.a);
console.log(process.cwd())
console.log('This platform is ${process.paltform}');
console.log(process.platform)
console.log(process.memoryUsage())
console.log(process.pid)
