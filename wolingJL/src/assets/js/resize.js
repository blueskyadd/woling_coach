/*获得页面宽度后动态修改html上的fontsize
* 750为设计稿下的页面宽度，如下设置后页面的页面在iphone5等宽屏幕上html
* 的font-size会变为100px，即 1rem = px    1px=0.001rem
* 所以设置元素尺寸的时候，如果测量设计稿 100px  则需设置尺寸为 (0.001*100)rem = 1rem   
*/


!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 100 * (width / 1334) + "px");
            var height = docEle.clientHeight;
            height && (docEle.style.fontSize = 100 * (height / 750) + "px");
        };
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));
