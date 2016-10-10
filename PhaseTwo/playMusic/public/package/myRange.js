/**
 * 自定义一个range  必须载入jQuery
 */

$(document).ready(function () {
    console.log("load myRange");
    jQuery.extend({
        Range:function() {
            this.height= "4px";
            this.width= "100px";
            this.upColor= "pink";
            this.bottomColor= "black";
            this.slideColor= "green";
            this.slide= "";
            this.range= "";
            this.cllBackHover= "";
            this.cllBackChange= "";
            this.ifDown=false;
            /**
             * 设置一个range
             * @param fatherId  父ID
             * @param height    高 要单位
             * @param width      进度条的宽,整个宽度是 width+height*2
             * @param upColor    上颜色
             * @param bottomColor  下颜色
             * @param slideColor   滑块hover的颜色
             * @param fnHover   hover 的回调函数
             * @param fnChange  change 的回调函数
             *
             *
             *  jQuery.Range.setRange("test","4px","100px","pink","yellow","green",fn1,fn2)
             */
            this.setRange= function (fatherId, height, width, upColor, bottomColor, slideColor, cllBackHover, cllBackChange) {
                if (height != null)this.height = height;
                if (width != null)this.width = width;
                if (upColor != null)this.upColor = upColor;
                if (bottomColor != null)this.bottomColor = bottomColor;
                if (slideColor != null)this.slideColor = slideColor;
                if (cllBackHover != null)this.cllBackHover = cllBackHover;
                if (cllBackHover == null)this.cllBackHover = function () {
                };
                if (cllBackChange != null)this.cllBackChange = cllBackChange;
                if (cllBackChange == null)this.cllBackChange = function () {
                };
                //定义一个Range
                var myRange = $().add("<div></div>")
                myRange.css({
                    // "padding":this.height+" "+parseInt(parseFloat(this.height)*1.5)+"px",
                    "padding": this.height + " 0",
                    "margin": "0",
                    "height": this.height,
                    "width": this.width,
                    // "border-radius":"1px",
                    "position": "relative",

                });

                //主要由三部分组成  1.背景range  2.range  3.slide
                var bgRange = $().add("<div ></div>");
                var rang = $().add("<div ></div>");
                var slide = $().add("<div ></div>");
                this.slide = slide;
                this.range = rang;
                //给这三个东西加样式
                bgRange.css({
                    "padding": "0",
                    "margin": "0",
                    "height": this.height,
                    "width": this.width,
                    "border-radius": "1px",
                    "border": "none",
                    "background": this.bottomColor,
                    "position": "absolute",
                });
                rang.css({
                    "padding": "0",
                    "margin": "0",
                    "height": this.height,
                    "width": "0%",
                    "border-radius": "1px",
                    "border": "none",
                    "background": this.upColor,
                    "position": "absolute",
                });
                slide.css({
                    "padding": "0",
                    "margin": "0",
                    "margin-top": -parseInt(parseFloat(this.height) * 1) + "px",
                    "margin-left": -parseInt(parseFloat(this.height) * 1.5) + "px",
                    "height": this.height,
                    "width": this.height,
                    "border-radius": parseInt(parseFloat(this.height) * 1.5) + "px",
                    "background": this.upColor,
                    "position": "absolute",
                    "left": "0%",
                    "border": parseInt(parseFloat(this.height) * 1) + "px" + " solid " + this.upColor,

                });
                myRange.append(bgRange, rang, slide);
                // console.log( $(fatherId));
                $("#" + fatherId).append(myRange);

                // 加事件

                //滑块按下事件
                var downMousePos = 0;
                var oldSize = 0
                var self = this;
                self.ifDown = false;
                slide.mousedown(function (e) {
                    console.log("down");
                    self.ifDown = true;

                    downMousePos = e.pageX;
                    oldSize = parseFloat(slide.get(0).style.left) / 100;
                    console.log("oldSize:" + slide.get(0).style.left);
                    slide.get(0).style.backgroundColor = self.slideColor;
                });
                //滑块移动及优化
                (function () {
                    var me = arguments.callee;
                    $("body").on("mousemove", function (e) {
                        if ( self.ifDown) {
                            var newLeft = (e.pageX - downMousePos) / parseInt(self.width) + oldSize;
                            setValue(newLeft)
                        }
                        $("body").off("mousemove", arguments.callee);
                        window.setTimeout(function () {
                            me();
                        }, 20);
                    });
                })();
                //进度条点击事件
                myRange.on("click", function (e) {
                    var left = $(myRange).get(0).offsetLeft;
                    console.log(left);
                    setValue((e.clientX - left) / parseInt(self.width));
                });
                //进度条hover事件
                (function () {
                    var me = arguments.callee;
                    myRange.on("mousemove", function (e) {
                        var newLeft = (e.pageX - myRange.get(0).offsetLeft) / parseInt(self.width);
                        if (newLeft >= 0 && newLeft <= 1 &&  self.ifDown == false) {
                            self.cllBackHover(e.pageX, e.pageY, newLeft);
                        }
                        myRange.off("mousemove", arguments.callee);
                        window.setTimeout(function () {
                            me();
                        }, 10);
                    });
                })();
                // 鼠标弹起
                $("body").mouseup(function () {
                    console.log("up");
                    self.ifDown=false;
                    slide.css("backgroundColor", self.upColor);
                })

                function setValue (value, bool) {
                    if(bool==undefined)bool=true;
                    console.log("nei")
                    if (value < 0)value = 0;
                    if (value > 1)value = 1;
                    slide.get(0).style.left = (value * 100) + "%";
                    self.range.get(0).style.width = (value * 100) + "%";
                    if (bool) {
                        self.cllBackChange(value);
                    }

                }

            },
            this.etValue= function () {
                return this.slide.get(0).style.left;
            },

            this.setValue= function (value, bool) {
                if(this.ifDown)return;
                if (value < 0)value = 0;
                if (value > 1)value = 1;
                this.slide.get(0).style.left = (value * 100) + "%";
                this.range.get(0).style.width = (value * 100) + "%";
                // console.log("fda");
                if (bool ) {
                    this.cllBackChange(value);
                }

            }

        }
        // jQuery.Range.setRange();
    });
});


