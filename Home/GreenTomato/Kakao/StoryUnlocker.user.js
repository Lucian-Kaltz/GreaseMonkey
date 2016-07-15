// ==UserScript==
// @name         카카오스토리 이미지 다운로더
// @namespace    org.metalscraps.home.greentomato.kakao.storyunlocker
// @version      1.0
// @encoding utf-8
// @description  카카오스토리 이미지 다운로더
// @author       povslusian@gmail.com
// @match        https://story.kakao.com/*/photos
// @updateURL https://raw.githubusercontent.com/Lucian-Kaltz/GreaseMonkey/master/Home/GreenTomato/Kakao/StoryUnlocker.user.js
// @downloadURL https://raw.githubusercontent.com/Lucian-Kaltz/GreaseMonkey/master/Home/GreenTomato/Kakao/StoryUnlocker.user.js
// @run-at document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('dragstart', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
    }, true);
    $("body").on("DOMNodeInserted", function(){
        $("span.dimmed_story").remove();
    });
})();
