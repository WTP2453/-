// ==UserScript==
// @name         平平解析
// @namespace    墨茶Plus
// @version      1.2
// @description  视频解析，无广告，全网vip视频解析，无需再购买视频会员，好用到飞起。
// @author       墨茶Plus
// @match        https://v.qq.com/x/cover/*
// @match        https://www.iqiyi.com/v_*
// @match        https://v.youku.com/v_show/id_*
// @match        https://www.mgtv.com/b/*
// @match        https://www.bilibili.com/bangumi/play/ep*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
             $(function(){
            var url=location.href
            $("<div></div>").css({
                "width":75,
                "height":25,
                "background":"bisque",
                "position":"absolute",
                "top":300,
                "left":70,
                "zIndex":999,
                "float":"left",
                "borderRadius":50,
            }).attr("id","btnxiao").appendTo("body")
            $("<a></a>").css({
                "display":"block",
                "width":75+"%",
                "height":25+"%",
                "marginLeft":9,
                "marginTop":1.5,
                "textDecoration":"none",
                "fontSize":14,
                "color":"black"
            }).attr("href","https://api.u1o.net/?url="+url).html("解析影视").appendTo("#btnxiao")

        })

})();