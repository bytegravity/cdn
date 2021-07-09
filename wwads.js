// 万维广告 js

function docReady(t){"complete"===document.readyState||"interactive"===document.readyState?setTimeout(t,1):document.addEventListener("DOMContentLoaded",t)}function _AdBlockInit(){$ids=[];var t=setInterval(function(){if($blocks=document.getElementsByClassName("wwads-cn"),$blocks.length>0){clearInterval(t);for(var e=0;e<$blocks.length;e++)$block=$blocks[e],$id=$block.getAttribute("data-id"),$block.setAttribute("id","wwads-cn-"+$id),$ids.push($id);_SendAdRequest($ids)}},300)}function _SendAdRequest(t){$response=[],request=new XMLHttpRequest,request.open("GET","https://wwads.cn/code/banners?blocks="+t,!0),request.onload=function(){if(request.status>=200&&request.status<400){data=JSON.parse(request.responseText);for(var t=0;t<data.blocks.length;t++)document.getElementById("wwads-cn-"+data.blocks[t].id).innerHTML=data.blocks[t].html}},request.onerror=function(){document.getElementById("wwads-cn-"+data.blocks[k].id).innerHTML="Connection Failed!"},request.send()}docReady(function(){_AdBlockInit()}),function(t){var e=t.pushState;t.pushState=function(n){return"function"==typeof t.onpushstate&&t.onpushstate({state:n}),e.apply(t,arguments)}}(window.history),window.onpopstate=history.onpushstate=function(t){setTimeout(function(){_AdBlockInit()},1e3)};

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
      function loadGoogleAds() {
        googleads = document.getElementsByClassName("wwads-cn")[0].getElementsByTagName("script");
        eval(googleads[0].innerHTML);
      }
      //trying to find the google ins with the class name "adsbygoogle" every 1ms, if find then fire the loadGoogleAds function
      var timer = setInterval(function () {
        var adsIns = document.getElementsByClassName("adsbygoogle");
        if (adsIns.length > 0) {
          clearInterval(timer);
          loadGoogleAds(adsIns);
        }
      }, 1);
</script>


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
