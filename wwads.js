$(function () {
        //获取用户浏览器设置的语言，优先获取本地缓存的内容，如果没有获取到则默认为中文
        var broLang = localStorage.getItem("locale") || window.navigator.language.toLowerCase() || "zh-cn";

        //此处需改 data-id 为你的广告单元ID
        let wwadsDiv = '<div class="wwads-cn wwads-horizontal" data-id="38" style="max-width:300px;background-color:#fff;margin-top:0px;box-shadow:0 1px 3px rgb(26 26 26 / 10%)"></div>';

        //把用户的语言写入缓存，供下次获取使用
        localStorage.setItem("locale", broLang);

        //判断用户的语言，跳转到不同的地方
        if (broLang.startsWith("zh")) {
            //针对中文访客展示万维广告
            $(".placeholderads").replaceWith(wwadsDiv);
            var _sr = document.createElement('script');
            _sr.type = 'text/javascript';
            _sr.async = true;
            _sr.src = 'https://cdn.wwads.cn/js/makemoney.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_sr);
        } else {
            $(".ads").replaceWith(
                '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7678238486983235"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7678238486983235"
     data-ad-slot="6612299134"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>'
            );
        }
});



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
