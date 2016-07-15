// ==UserScript==
// @name         Tumblr 이미지 확대
// @namespace    org.metalscraps.kastein.community.tumblr.imagemaximer
// @version      1.0
// @description 축소된 이미지 자동으로 원본 이미지로 대체
// @author       povslusian@gmail.com
// @match        https://www.tumblr.com/dashboard*
// @updateURL https://github.com/Lucian-Kaltz/GreaseMonkey/raw/master/Kastein/Community/Tumblr/ImageMaximer.user.js
// @downloadURL https://github.com/Lucian-Kaltz/GreaseMonkey/raw/master/Kastein/Tumblr/ImageMaximer.user.js
// @run-at document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var images = jQuery("a[data-big-photo]");
    jQuery.each(images, function(){
        var big = this.dataset.bigPhoto;
        console.log(jQuery(this).find("img").attr("src",big));
    });
})();
