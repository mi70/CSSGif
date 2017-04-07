/*
    透過css的方式去完成簡單的gif動畫
    版本： 1.0
    作者： Mi70
    先建構cssGifStatus
    裡面帶值(目標,css屬性,gif動畫的delay時間,狀態1,狀態2)
    var name = new cssGifStatus(target,cssKind,time,status1,status2);
    在呼叫裡面的方法statusGifStart()
    name.statusGifStart()

*/
var cssGifStatus = function(tagName,cssAttr, delayTime, status1, status2) {
    this.tagName = tagName;
    this.status1 = status1;
    this.status2 = status2;
    this.delayTime = delayTime;
    this.cssAttr = cssAttr;
}
cssGifStatus.prototype.statusGifStart = function() {
    var callTaget = this.tagName;
    var callStatus = this.status1;
    var callBackStatus = this.status2;
    var callDelayTime = this.delayTime;
    var callAttr = this.cssAttr;
    var callTimeOut;

    function colorGifFn() {

        $(callTaget).css(callAttr, callStatus).delay(callDelayTime).queue(function() {
            $(callTaget).css(callAttr, callBackStatus).dequeue();

            clearTimeout(callTimeOut);
            callTimeOut = setTimeout(colorGifFn, callDelayTime);

        })

    }
    callTimeOut = setTimeout(colorGifFn, 50);
}
