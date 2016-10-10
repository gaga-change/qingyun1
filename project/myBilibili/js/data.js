// <div class="m-item">
//     <a href="#">
//     <img src="img/temp1.jpg" alt="" width="160px">
//     <div class="info">
//     <div class="t">【未来日记MMD】Mad Hatter【我妻由乃】</div>
// <p class="up">up主：AkaNxK35</p>
// <p class="play">播放：82847</p>
// </div>
// </a>
// </div>
// function Movie(mUrl,iUrl,title,up) {
//
// }
function MItem(mUrl,iUrl,title,up,playNum) {
    this.mUrl=mUrl;
    this.iUrl=iUrl;
    this.title=title;
    this.playNum=playNum;
}
function getDataMItem() {
    return [new MItem("#","img/temp1.jpg","【未来日记MMD】Mad Hatter【我妻由乃】","AkaNxK35","82847")];
}
function PushItem(mUrl,iUrl, title,second) {
    this.mUrl=mUrl;
    this.iUrl=iUrl;
    this.title=title;
    this.second=second;
}
PushItem.prototype.getTime=function () {
    var m=parseInt(this.second/60);
    var s=this.second%60;
    // m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    return m+":"+s;
}
function getDataPushItem() {
    return [new PushItem("#","img/temp2.jpg","【我们都失去了彼此】我们都失去了彼此",200)]
}
