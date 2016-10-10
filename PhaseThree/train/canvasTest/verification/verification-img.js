/**
 * Created by qingyun on 16/9/2.
 */
var test = require('canvas');
var Canvas = require('canvas'),
    Image = Canvas.Image;

function getImg() {

    var canvas = new Canvas(800, 800);

    var context = canvas.getContext('2d');
    var n = 0;





    context.moveTo(50, 50);
    context.bezierCurveTo(50, 50,150, 50, 150, 150);
    context.stroke();
    context.quadraticCurveTo(150, 250, 250, 250);
    context.stroke();



    return canvas.toDataURL();
}

module.exports.getImg = getImg;