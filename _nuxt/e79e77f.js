(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,n){var content=n(156);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("193bc6e2",content,!0,{sourceMap:!1})},102:function(t,e,n){var content=n(158);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("c406f60e",content,!0,{sourceMap:!1})},103:function(t,e,n){var content=n(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("e611ed62",content,!0,{sourceMap:!1})},104:function(t,e,n){var content=n(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("932a8f60",content,!0,{sourceMap:!1})},110:function(t,e,n){"use strict";n(56);var o=n(20),r=(n(73),n(21),n(2)),c=(n(155),n(8)),l=Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"button"},[this._t("default")],2)}),[],!1,null,null,null).exports,d=n(111);var f={components:{uiButton:l},data:function(){return{t:0,ssr:!1,diff:"",metrics:[]}},mounted:function(){var t=this;this.t=window.__NUXT__.renderedOn,this.ssr=window.__NUXT__.serverRendered,this.update(),this._timer=setInterval((function(){return t.update()}),1e3),this.$router.beforeEach((function(e,n,o){t.ssr=!1,clearInterval(t._timer),o()})),this.bench().catch(console.error)},methods:{update:function(){var t,e,n;this.diff=(t=this.t,e=new Date-t,(n=Math.round(e/1e3))>10?Object(d.a)(t):n<1?"just now":n+" seconds ago")},bench:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],r=Date.now(),e.next=4,fetch(location.href+"?"+Math.random());case 4:return c=e.sent,n.push(["TTFB (client)","val",Date.now()-r]),r=Date.now(),e.next=9,c.text();case 9:n.push(["Download (client)","val",Date.now()-r]),l=c.headers.get("server-timing")||"",d=l.split(",").map((function(t){return t.trim().split(/[;=]/)})).filter((function(t){return t[0].length})),t.metrics=n.concat(d).map((function(t){var e=Object(o.a)(t,3),n=e[0],r=(e[1],e[2]);return{name:(n[0].toUpperCase()+n.substr(1)).replace("functions/node/_nuxt/",""),duration:r}}));case 13:case"end":return e.stop()}}),e)})))()},reload:function(){window.location.reload()}}},h=(n(157),Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[t._m(0),t._v(" "),n("div",{staticClass:"perf"},[t.ssr?[n("h3",[t._v("✔️ Server Side Rendered")]),t._v(" "),n("p",[t._v("🕒 "+t._s(t.diff))]),t._v(" "),n("h3",[t._v(" 🚀 Metrics")]),t._v(" "),t._l(t.metrics,(function(e,o){return n("p",{key:o},[t._v("\n        "+t._s(e.name)+":\n        "),n("b",[t._v(t._s(e.duration)+" ms")])])}))]:[n("h3",[t._v("⚠️ Client Side Rendered")]),t._v(" "),n("a",{staticClass:"white-button",attrs:{href:""},on:{click:t.reload}},[t._v("Reload")])]],2),t._v(" "),n("div",{staticClass:"hostings"},[n("h4",[t._v("This demo is deployed on:")]),t._v(" "),n("ui-button",{attrs:{href:"https://sigma-demo.nuxt-js.vercel.app",rel:"noreferrer"}},[t._v("\n      Vercel\n    ")]),t._v(" "),n("ui-button",{attrs:{href:"https://sigma-demo.netlify.app/",rel:"noreferrer"}},[t._v("\n      Netlify\n    ")]),t._v(" "),n("ui-button",{attrs:{href:"https://sigma-demo.nuxt.workers.dev",rel:"noreferrer"}},[t._v("\n      Cloudflare\n    ")]),t._v(" "),n("ui-button",{attrs:{href:"https://nuxt.github.io/sigma-demo"}},[t._v("\n      GH Pages (SW)\n    ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("span",[this._v("N")]),this._v("uxt + "),e("span",[this._v("S")]),this._v("igma")])}],!1,null,null,null).exports),v={},m=(n(159),{components:{Sidebar:h,Navbar:Object(c.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar"},[e("div",{staticClass:"links"},[e("NLink",{attrs:{to:"/"}},[this._v("\n      Dynamic\n    ")]),this._v(" "),e("NLink",{attrs:{to:"/about"}},[this._v("\n      Static\n    ")]),this._v(" "),e("NLink",{attrs:{to:"/api"}},[this._v("\n      API\n    ")])],1),this._v(" "),e("a",{staticClass:"gh-button",attrs:{href:"https://github.com/nuxt/sigma-demo",target:"_blank",rel:"noopener"}},[this._v("\n    GitHub\n  ")])])}),[],!1,null,null,null).exports},head:{title:"Nuxt sigma Demo",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"}]}}),x=(n(161),Object(c.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("sidebar"),this._v(" "),e("main",{staticClass:"demo"},[e("navbar"),this._v(" "),e("nuxt",{staticClass:"main"})],1)],1)}),[],!1,null,null,null));e.a=x.exports},112:function(t,e,n){t.exports=n(113)},155:function(t,e,n){"use strict";n(101)},156:function(t,e,n){(e=n(22)(!1)).push([t.i,".button{display:flex;justify-content:space-between;padding:4px 0;border-radius:8px;font-weight:500;font-size:14px;color:#efefe6}.button:hover{color:#00dc82}",""]),t.exports=e},157:function(t,e,n){"use strict";n(102)},158:function(t,e,n){(e=n(22)(!1)).push([t.i,".sidebar{color:#efefe6;width:320px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;background-color:#003c3c}.sidebar h1{margin:12px 0}.sidebar h1 span{color:#00dc82}.sidebar h3{color:#efefe6;margin:0 0 8px;padding-top:4px;padding-bottom:16px;border-bottom:1px dashed #efefe6}.hostings a{margin-bottom:12px}.perf{font-family:monospace;padding:20px 16px;color:#00dc82;background-color:#032a2a;border-radius:8px}.perf p{margin:0;padding-top:8px;padding-bottom:4px}.white-button{border:1px solid #fff;color:#fff;padding:8px 24px;text-decoration:none;margin-top:16px;display:inline-block}.white-button:hover{color:#00dc82;border-color:#00dc82}",""]),t.exports=e},159:function(t,e,n){"use strict";n(103)},160:function(t,e,n){(e=n(22)(!1)).push([t.i,".navbar{justify-content:space-between;padding:16px 8px 0;background-color:#8f8f70}.navbar,.navbar .links{display:flex}.links a{display:block;padding:20px 32px;color:#552;margin:0 8px;text-decoration:none;font-weight:600;background-color:#b4b48c;border-top-left-radius:8px;border-top-right-radius:8px}.links a:hover{color:#003c3c}.links .nuxt-link-exact-active,.links .nuxt-link-exact-active:hover{color:#003c3c;background-color:#efefe6}.gh-button{display:flex;align-items:center;justify-content:space-between;padding:0 16px;border-radius:8px;font-weight:500;font-size:14px;text-decoration:none;background-color:#003c3c;color:#efefe6;margin-bottom:16px}.gh-button:hover{color:#fff;background-color:#032a2a}",""]),t.exports=e},161:function(t,e,n){"use strict";n(104)},162:function(t,e,n){(e=n(22)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap);"]),e.push([t.i,'body{margin:0;background:#efefe6;color:#003c3c;font-family:Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.page-enter-active,.page-leave-active{transition:opacity .1s}.page-enter,.page-leave-to{opacity:0}.container{display:flex;align-items:stretch;min-height:100vh;height:100vh}.demo{width:100%}.main{display:flex;flex-direction:column;justify-content:center;align-items:center}',""]),t.exports=e}},[[112,5,1,6]]]);