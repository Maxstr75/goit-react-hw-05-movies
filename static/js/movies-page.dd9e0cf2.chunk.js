"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{4126:function(e,t,r){r.d(t,{e:function(){return c}});var n=r(6871),a=r(432),u=r(184),c=function(e){var t=e.movieId,r=e.title,c=(0,n.TH)(),i=(0,n.Gn)("/movies/".concat(t),{movieId:t});return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("p",{children:(0,u.jsx)(a.Z,{to:i,state:{from:c},children:r})},t)})}},9847:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(4126),a=r(1413),u=r(1134),c=r(5985),i=r(184),o=function(e){e.onSubmit;var t=(0,u.cI)(),r=t.register,n=t.reset;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("form",{onSubmit:function(e){var t=e.query;t.preventDefault(),""!==t.trim()?(onsubmit(t),n()):c.Am.warn("Please specify your query!",{autoClose:3e3})},children:[(0,i.jsx)("input",(0,a.Z)((0,a.Z)({},r("query")),{},{type:"text",placeholder:"Search Movie",autoComplete:"off",autoFocus:!0})),(0,i.jsx)("span",{type:"submit",children:"Search"})]})})},s=r(5861),f=r(885),p=r(4687),v=r.n(p),l=r(2791),h=r(3504),m=r(4390),d=function(){var e=function(){var e,t=(0,h.lr)(),r=(0,f.Z)(t,2),n=r[0],a=r[1],u=(0,l.useState)(null!==(e=n.get("search"))&&void 0!==e?e:""),c=(0,f.Z)(u,2),i=c[0],o=c[1],p=(0,l.useState)([]),d=(0,f.Z)(p,2),x=d[0],y=d[1],b=(0,l.useState)(null),k=(0,f.Z)(b,2),w=k[0],g=k[1];return(0,l.useEffect)((function(){if(""!==i){a({search:i});var e=function(){var e=(0,s.Z)(v().mark((function e(){var t,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.FE)(i);case 3:t=e.sent,r=t.data.results,y(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[i,a]),{setSearch:o,films:x,error:w}}(),t=e.setSearch,r=e.films,a=e.error;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{onSearch:t}),a&&(0,i.jsx)("p",{children:a}),r.map((function(e){var t=e.title,r=e.id;return(0,i.jsx)(n.e,{movieId:r,title:t},r)}))]})}},4390:function(e,t,r){r.d(t,{Bt:function(){return l},FE:function(){return f},PY:function(){return s},Y5:function(){return p},y:function(){return v}});var n=r(5861),a=r(4687),u=r.n(a),c=r(4569),i=r.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="827cb17c4a19aaac58b5a69a05bdba2b",s=function(){var e=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("trending/movie/day?api_key=".concat(o));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"?api_key=").concat(o));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movies-page.dd9e0cf2.chunk.js.map