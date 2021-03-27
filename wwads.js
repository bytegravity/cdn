//万维广告 js

(function(){
var _sr = document.createElement('script');
_sr.type = 'text/javascript';
_sr.async = true;
_sr.src = 'https://wwads.cn/code/install';
(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(_sr);
})();

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
