# css Status Gif
## 0. 前言
* 版本：第一版‧2017/4/7
* 作者：mi70
* 透過Jquery的.css去做簡單的gif動畫

## 1. 使用方式

#### 1.0 
首先引入Jquery ,目前我使用的為3.2.0 版本 ，最新版本和之前版本的也沒問題
```
<script src="js/jquery/jquery.min.js"></script>
```
or 線上引入也可以再來引入
cssStatusGif.js
```
<script src="js/cssStatusGif.js"></script>
```

#### 1.1
在js裡面建構出cssGifStatus
然後指定數值分別為(目標,css屬性,gif動畫的delay時間,狀態1,狀態2)
在呼叫方法statusGifStart()
>例如
```
var callOne = new cssGifStatus("h2","color",500,"#2e8b57","#f4a460");
callOne.statusGifStart();
```

##### 其餘部分可以參考範例檔案 index.html 和 main.js
