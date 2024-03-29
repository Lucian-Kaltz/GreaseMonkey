// ==UserScript==
// @name         DC 댓글 색 변경
// @namespace    org.metalscraps.kastein.community.dcinside.commentcolorchange
// @version      1.1
// @encoding utf-8
// @description  눈에띄게 색깔 변경
// @author       povslusian@gmail.com
// @match        /^http:\/\/gall.dcinside.com\/board\/(view|lists|comment_view)\/*$/
// @updateURL https://github.com/Lucian-Kaltz/GreaseMonkey/raw/master/Kastein/Community/DCInside/CommentColorChange.user.js
// @downloadURL https://github.com/Lucian-Kaltz/GreaseMonkey/raw/master/Kastein/Community/DCInside/CommentColorChange.user.js
// @run-at document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x;
	// 색변경
    $("em").not("[class]").css({"color":"green","font-weight":"bold"});
	
	// 오버워치 갤러리 이상한놈 차단
    $("#gallery_re_contents span.etc_ip").each(function(){
        if(this.innerText == "49.163.*.*") (x = $(this).closest("tr.reply_line")).add(x.next()).remove();
    });
})();
