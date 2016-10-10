function ChartDate(name,data,unit,clolr) {
    this.name=name;
    this.data=data;
    this.unit=unit;
    this.color=clolr;
}

function getDate() {
    var arr=[
        new Data("项目1",0.1,"#aa965a"),
        new Data("项目2",0.2,"rgb(100,100,100)"),
        new Data("项目3",0.3,"rgb(150,200,200)"),
        new Data("项目4",0.4,"rgb(200,150,200)"),
    ];
    // console.log(arr);
    return arr;
}
function Data (name,num,color) {
    this.name=name;
    this.num=num;
    this.color=color;
}
