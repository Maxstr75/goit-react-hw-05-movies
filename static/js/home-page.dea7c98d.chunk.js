"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[223],{4742:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(6871),a=r(184),c=function(e){var t=e.movieId,r=e.title,c=(0,n.TH)(),s=(0,n.Gn)("/movies/".concat(t),{movieId:t});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{children:(0,a.jsx)("li",{to:s,state:{from:c},children:r})},t)})},s=r(5861),u=r(885),i=r(4687),o=r.n(i),f=r(2791),l=r(4569),p=r.n(l);p().defaults.baseURL="https://api.themoviedb.org/3/";var d="827cb17c4a19aaac58b5a69a05bdba2b",v=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().get("trending/movie/day?api_key=".concat(d));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=function(){var e=(0,f.useState)([]),t=(0,u.Z)(e,2),r=t[0],n=t[1],a=(0,f.useState)(null),c=(0,u.Z)(a,2),i=c[0],l=c[1];return(0,f.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,r=t.data.results,n(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{films:r,error:i}}(),t=e.films,r=e.error;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"Trending movies"}),r&&(0,a.jsx)("p",{children:r}),t.map((function(e){var t=e.title,r=e.id;return(0,a.jsx)(c,{movieId:r,title:t},r)}))]})}}}]);
//# sourceMappingURL=home-page.dea7c98d.chunk.js.map