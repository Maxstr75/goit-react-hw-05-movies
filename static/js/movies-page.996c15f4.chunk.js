"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{4126:function(e,t,r){r.d(t,{e:function(){return u}});var n=r(6871),a=r(184),u=function(e){var t=e.movieId,r=e.title,u=(0,n.TH)(),c=(0,n.Gn)("/movies/".concat(t),{movieId:t});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{children:(0,a.jsx)("li",{to:c,state:{from:u},children:r})},t)})}},9847:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(4126),a=r(1413),u=r(1134),c=r(5985),s=r(184),i=function(e){e.onSubmit;var t=(0,u.cI)(),r=t.register,n=t.reset;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:function(e){var t=e.query;t.preventDefault(),""!==t.trim()?(onsubmit(t),n()):c.Am.warn("Please specify your query!",{autoClose:3e3})},children:[(0,s.jsx)("input",(0,a.Z)((0,a.Z)({},r("query")),{},{type:"text",placeholder:"Search Movie",autoComplete:"off",autoFocus:!0})),(0,s.jsx)("span",{type:"submit",children:"Search"})]})})},o=r(5861),f=r(885),p=r(4687),l=r.n(p),h=r(2791),m=r(3504),v=r(4390),d=function(){var e=function(){var e,t=(0,m.lr)(),r=(0,f.Z)(t,2),n=r[0],a=r[1],u=(0,h.useState)(null!==(e=n.get("search"))&&void 0!==e?e:""),c=(0,f.Z)(u,2),s=c[0],i=c[1],p=(0,h.useState)([]),d=(0,f.Z)(p,2),x=d[0],b=d[1],y=(0,h.useState)(null),k=(0,f.Z)(y,2),j=k[0],w=k[1];return(0,h.useEffect)((function(){if(""!==s){a({search:s});var e=function(){var e=(0,o.Z)(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.FE)(s);case 3:t=e.sent,r=t.data.results,b(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[s,a]),{setSearch:i,films:x,error:j}}(),t=e.setSearch,r=e.films,a=e.error;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{onSearch:t}),a&&(0,s.jsx)("p",{children:a}),r.map((function(e){var t=e.title,r=e.id;return(0,s.jsx)(n.e,{movieId:r,title:t},r)}))]})}},4390:function(e,t,r){r.d(t,{FE:function(){return f},PY:function(){return o}});var n=r(5861),a=r(4687),u=r.n(a),c=r(4569),s=r.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="827cb17c4a19aaac58b5a69a05bdba2b",o=function(){var e=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movies-page.996c15f4.chunk.js.map