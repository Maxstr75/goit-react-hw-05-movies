"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{186:function(t,e,n){n.r(e);var r=n(5861),a=n(885),c=n(4687),u=n.n(c),s=n(6871),i=n(2791),o=n(4390),p=n(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,i.useState)(!1),h=(0,a.Z)(f,2),v=h[0],l=h[1],d=(0,i.useState)(null),m=(0,a.Z)(d,2),x=m[0],k=m[1],w=(0,s.UO)().movieId;(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Bt)(w);case 3:e=t.sent,n=e.data.results,c(n),l(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),k(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[w]);var b=0===n.length&&v;return(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)("p",{children:x}),b&&(0,p.jsx)("p",{children:"We don`t have any reviews for this movie"}),n.length>0&&(0,p.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:(0,p.jsxs)("b",{children:["Author: ",n]})}),(0,p.jsx)("p",{children:r})]},e)}))})]})}},4390:function(t,e,n){n.d(e,{Bt:function(){return v},FE:function(){return p},PY:function(){return o},Y5:function(){return f},y:function(){return h}});var r=n(5861),a=n(4687),c=n.n(a),u=n(4569),s=n.n(u);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="827cb17c4a19aaac58b5a69a05bdba2b",o=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=Reviews.6957a870.chunk.js.map