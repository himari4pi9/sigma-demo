(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(e,t,r){"use strict";(function(e){var n=r(44),c=(r(18),r(2));function o(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function t(r){var n,c,o,time;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.process.hrtime(),t.next=3,r;case 3:return c=t.sent,o=e.process.hrtime(n),time=(1e9*o[0]+o[1])/1e6,t.abrupt("return",[time,c]);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.a={asyncData:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var t,r,time,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(fetch("/api/hello").then((function(e){return e.text()})));case 2:return t=e.sent,r=Object(n.a)(t,2),time=r[0],c=r[1],e.abrupt("return",{time:time,res:c});case 7:case"end":return e.stop()}}),e)})))()}}}).call(this,r(35))},181:function(e,t,r){"use strict";r.r(t);var n=r(171).a,c=r(8),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("br"),e._v(" "),r("code",{domProps:{textContent:e._s(e.res)}}),e._v(" "),r("div",[e._v("Request to api took "+e._s(e.time)+" ms")]),e._v(" "),r("hr"),e._v("\n  This page is using "),r("code",[e._v("fetch('/api/hello')")]),e._v(" (Yes it works unversally!)\n")])}),[],!1,null,null,null);t.default=component.exports}}]);