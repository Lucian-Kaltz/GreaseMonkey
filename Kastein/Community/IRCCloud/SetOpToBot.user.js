// ==UserScript==
// @name         IRCCloud 봇 오퍼레이터 권한 설정
// @namespace   org.metalscraps.kastein.community.irccloud.setoptobot
// @version      1.0
// @description  웹페이지 접근시 DOM 읽어서 봇한테 옵 없으면 넣어줌. 자체 API도 나중에 확인해봐야함.
// @author       povslusian@gmail.com
// @match        https://www.irccloud.com/*
// @updateURL https://raw.githubusercontent.com/Lucian-Kaltz/GreaseMonkey/master/Kastein/Community/IRCCloud/SetOpToBot.user.js
// @downloadURL https://raw.githubusercontent.com/Lucian-Kaltz/GreaseMonkey/master/Kastein/Community/IRCCloud/SetOpToBot.user.js
// @run-at document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // 이벤트 방식으로 변경해야함
    setTimeout(function(){
        if(!$("button[data-name=Kastein_Bot]").data("mode").includes("o")) $($("textarea[id^=bufferInputView]:visible").val("/op Kastein_Bot")[0].form).submit();
    }, 10000);
})();
