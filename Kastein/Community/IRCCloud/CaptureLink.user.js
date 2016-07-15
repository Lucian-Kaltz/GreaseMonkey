// ==UserScript==
// @name        IRCCloud 스크린샷 관리
// @namespace   org.metalscraps.kastein.community.irccloud.capturelink
// @description 자바 스크린샷 클라이언트 연동하여 IRC에 URL 자동 전송.
// @version     1.0
// @match     *://www.irccloud.com*
// @author       povslusian@gmail.com
// @updateURL https://github.com/Lucian-Kaltz/GreaseMonkey/raw/master/Kastein/Community/IRCCloud/CaptureLink.user.js
// @downloadURL https://github.com/Lucian-Kaltz/GreaseMonkey/raw/master/Kastein/Community/IRCCloud/CaptureLink.user.js
// @run-at document-start
// @grant       none
// @require     https://cdn.socket.io/socket.io-1.2.0.js
// ==/UserScript==
if (document.domain == "www.irccloud.com") {
    socket = io.connect("http://localhost:9092/screenshot");
    socket.on("message", function(data){
        x = $("div.buffercontainer.active").not(".buffercontainer--hidden").find("form.input");
        x.find("textarea").val(data+".png");
        x.submit();
    });
}
