"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{7047:function(n,t,e){e.d(t,{e:function(){return d}});var r,a,c=e(6871),u=e(168),i=e(9584),o=e(3504),s=i.Z.li(r||(r=(0,u.Z)(["\n  padding: 20px;\n"]))),p=(0,i.Z)(o.rU)(a||(a=(0,u.Z)(["\n  color: royalBlue;\n  :hover {\n    color: red;\n  }\n\n  color: dodgerBlue;\n\n  text-align: left;\n  margin-bottom: 0;\n\n  @media (min-width: 768px) {\n    font-size: 22px;\n  }\n  @media (min-width: 1024px) {\n    font-size: 30px;\n  }\n  @media (min-width: 1280px) {\n    font-size: 34px;\n  }\n"]))),f=e(184),d=function(n){var t=n.movieId,e=n.title,r=(0,c.TH)(),a=(0,c.Gn)("/movies/".concat(t),{movieId:t});return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(s,{children:(0,f.jsx)(p,{to:a,state:{from:r},children:e})},t)})}},9536:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(7047),a=e(5861),c=e(885),u=e(4687),i=e.n(u),o=e(2791),s=e(4390),p=e(184),f=function(){var n=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],u=(0,o.useState)(null),p=(0,c.Z)(u,2),f=p[0],d=p[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.PY)();case 3:t=n.sent,e=t.data.results,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),d(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),{films:e,error:f}}(),t=n.films,e=n.error;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending movies"}),e&&(0,p.jsx)("p",{children:e}),t.map((function(n){var t=n.title,e=n.id;return(0,p.jsx)(r.e,{movieId:e,title:t},e)}))]})}},4390:function(n,t,e){e.d(t,{Bt:function(){return l},FE:function(){return p},PY:function(){return s},Y5:function(){return f},y:function(){return d}});var r=e(5861),a=e(4687),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="827cb17c4a19aaac58b5a69a05bdba2b",s=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("trending/movie/day?api_key=".concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=home-page.55b2dd72.chunk.js.map