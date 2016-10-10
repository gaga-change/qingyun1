/**
 * Created by qingyun on 16/8/23.
 * 事件
 */
var event=require('events');

var MyEvent=function(){
    this.a="fdas";
    this.b=function () {
        
    }
}
MyEvent.prototype=Object.create(event.prototype);
MyEvent.prototype.constructor=MyEvent;

var eve1=new MyEvent();
eve1.on('add',function () {
    console.log('add event emitted...')
})
eve1.emit('add');
console.log('------------------')
eve1=new event();
eve1.on('add1',function () {
    console.log('add1 event emitted...')
    eve1.removeAllListeners()
})
eve1.emit('add1');
eve1.emit('add1');
console.log('------------------')
eve1.once('add1',function () {
    console.log('add1 event emitted...')
})

eve1.prependListener('add1', function (){
    console.log('someone connected!');
});


eve1.emit('add1');
eve1.emit('add1');
console.log('------------------')


