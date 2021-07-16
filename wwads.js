 // 万维广告 js
(function(){
var _sr = document.createElement('script');
_sr.type = 'text/javascript';
_sr.async = true;
_sr.src = 'https://cdn.wwads.cn/js/makemoney.js';
(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(_sr);
})();

 //fire the loadGoogleAds function when the page is fully loaded
  docReady(function () {
    loadGoogleAds();
  });

  //fire the loadGoogleAds function for SPA
  window.onpopstate = history.onpushstate = function (event) {
    setTimeout(function () {
      loadGoogleAds();
    }, 1000);
  };

  //load google ads and send ad request
  function loadGoogleAds() {
    var google_sr = document.createElement("script");
    google_sr.type = "text/javascript";
    google_sr.async = true;
    google_sr.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(google_sr);

    //try to find the backfillads and fire the ad request
    var backfillads = document
      .getElementsByClassName("wwads-cn")[0]
      .getElementsByTagName("ins");
    var i = 0;
    var try2loadads = setInterval(function () {
      if (i > 3) {
        clearInterval(try2loadads);
        return;
      }
      if (backfillads.length > 0) {
        clearInterval(try2loadads);
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          i++;
        }
      } else {
        i++;
      }
    }, 1000);
  }

// Function called if AdBlock is detected
		function ABDetected() {
			var adBlockDetected_div = document.createElement("div");
	    adBlockDetected_div.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; background: #fc6600; color: #fff; z-index: 9999999999; font-size: 14px; text-align: center; line-height: 1.5; font-weight: bold; padding: 10px;";
	    adBlockDetected_div.innerHTML = "我们的网站广告并不跟踪您的隐私，为了支持本站的长期运营，请您关闭广告拦截器，或将本站加入广告拦截器的白名单";
	    document.getElementsByTagName("body")[0].appendChild(adBlockDetected_div);
      // add a close button to the right side of the div
      var adBlockDetected_close = document.createElement("div");
      adBlockDetected_close.style.cssText = "position: fixed; top: 0; right: 0; width: 30px; height: 30px; background: #fc6600; color: #fff; z-index: 9999999999; text-align: center; line-height: 30px; font-size: 14px; font-weight: bold; cursor: pointer;";
      adBlockDetected_close.innerHTML = "×";
      adBlockDetected_div.appendChild(adBlockDetected_close);
      // add a click event to the close button
      adBlockDetected_close.onclick = function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
      };
		};

    function docReady(t) {
        "complete" === document.readyState ||
        "interactive" === document.readyState
          ? setTimeout(t, 1)
          : document.addEventListener("DOMContentLoaded", t);
    }

    //detect if wwads fire function is blocked
    docReady(function () {
    if( window._AdBlockInit === undefined ){
        ABDetected();
    }
    });

// 百度 push 提交 url

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
   bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else{
  bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


//foxpush

 var _foxpush = _foxpush || [];
 _foxpush.push(['_setDomain', 'zhaodaoai']);
 (function(){
     var foxscript = document.createElement('script');
     foxscript.src = '//cdn.foxpush.net/sdk/foxpush_SDK_min.js';
     foxscript.type = 'text/javascript';
     foxscript.async = 'true';
     var fox_s = document.getElementsByTagName('script')[0];
     fox_s.parentNode.insertBefore(foxscript, fox_s);})();
