(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{8637:function(e,n,t){var r={"./de/client-page.json":[9083,83],"./de/footer.json":[7926,926],"./de/second-client-page.json":[4371,371],"./de/second-page.json":[5149,149],"./de/translation.json":[1843,843],"./en/client-page.json":[2606,606],"./en/footer.json":[406,406],"./en/second-client-page.json":[5355,355],"./en/second-page.json":[6802,802],"./en/translation.json":[9272,683],"./it/client-page.json":[1858,858],"./it/footer.json":[735,735],"./it/second-client-page.json":[696,696],"./it/second-page.json":[6365,365],"./it/translation.json":[2013,13]};function i(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],i=n[0];return t.e(n[1]).then(function(){return t.t(i,19)})}i.keys=function(){return Object.keys(r)},i.id=8637,e.exports=i},9826:function(e,n,t){Promise.resolve().then(t.bind(t,2965))},2965:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(7437),i=t(1396),o=t.n(i),c=t(8871),s=t(9503),a=t(3579),l=t(2265);function u(e){let{params:{lng:n}}=e,{t}=(0,c.$)(n,"client-page"),[i,u]=(0,l.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("main",{children:[(0,r.jsx)(s.h,{heading:t("h1")}),(0,r.jsx)("p",{children:t("counter",{count:i})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:()=>u(Math.max(0,i-1)),children:"-"}),(0,r.jsx)("button",{onClick:()=>u(Math.min(10,i+1)),children:"+"})]}),(0,r.jsx)(o(),{href:"/".concat(n,"/second-client-page"),children:t("to-second-client-page")}),(0,r.jsx)(o(),{href:"/".concat(n),children:(0,r.jsx)("button",{type:"button",children:t("back-to-home")})})]}),(0,r.jsx)(a.$,{lng:n,path:"/client-page"})]})}},3579:function(e,n,t){"use strict";t.d(n,{$:function(){return u}});var r=t(7437),i=t(1396),o=t.n(i),c=t(7451),s=t(6465);let a=e=>{let{t:n,lng:t,path:i=""}=e;return(0,r.jsxs)("footer",{children:[(0,r.jsxs)(c.c,{i18nKey:"languageSwitcher",t:n,children:["Switch from ",(0,r.jsx)("strong",{children:{lng:t}})," to:"," "]}),s.Mj.filter(e=>t!==e).map((e,n)=>(0,r.jsxs)("span",{children:[n>0&&" or ",(0,r.jsx)(o(),{href:"/".concat(e).concat(i),children:e})]},e)),(0,r.jsx)("p",{children:n("description")}),(0,r.jsx)("p",{style:{fontSize:"smaller",fontStyle:"italic",marginTop:20},children:(0,r.jsxs)(c.c,{i18nKey:"helpLocize",t:n,children:["With using",(0,r.jsx)("a",{href:"https://locize.com",target:"_new",children:"locize"}),"you directly support the future of",(0,r.jsx)("a",{href:"https://www.i18next.com",target:"_new",children:"i18next"}),"."]})})]})};var l=t(8871);let u=e=>{let{lng:n,path:t}=e,{t:i}=(0,l.$)(n,"footer");return(0,r.jsx)(a,{t:i,lng:n,path:t})}},9503:function(e,n,t){"use strict";t.d(n,{h:function(){return i}});var r=t(7437);let i=e=>{let{heading:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{children:["Next.js 13/14 ",(0,r.jsx)("small",{children:"(app directory)"})," - i18next",(0,r.jsx)("hr",{})]}),(0,r.jsx)("h1",{children:n}),(0,r.jsx)("a",{className:"github",href:"//github.com/i18next/i18next",children:(0,r.jsx)("i",{className:"typcn typcn-social-github-circular"})})]})}},8871:function(e,n,t){"use strict";t.d(n,{$:function(){return u}});var r=t(3968),i=t(2265),o=t(7094),c=t(6635),s=t(3087),a=t(5345),l=t(6465);function u(e,n,t){let[r,s]=(0,c.Z)([l.YN]),a=(0,o.$G)(n,t),{i18n:u}=a;{let[n,t]=(0,i.useState)(u.resolvedLanguage);(0,i.useEffect)(()=>{n!==u.resolvedLanguage&&t(u.resolvedLanguage)},[n,u.resolvedLanguage]),(0,i.useEffect)(()=>{e&&u.resolvedLanguage!==e&&u.changeLanguage(e)},[e,u]),(0,i.useEffect)(()=>{r.i18next!==e&&s(l.YN,e,{path:"/"})},[e,r.i18next])}return a}r.ZP.use(o.Db).use(a.Z).use((0,s.Z)((e,n)=>t(8637)("./".concat(e,"/").concat(n,".json")))).init({...(0,l.FW)(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},6465:function(e,n,t){"use strict";t.d(n,{FW:function(){return c},Mj:function(){return r},YN:function(){return o}});let r=["en","de","it"],i="translation",o="i18next";function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return{supportedLngs:r,fallbackLng:"en",lng:e,fallbackNS:i,defaultNS:i,ns:n}}}},function(e){e.O(0,[326,569,971,472,744],function(){return e(e.s=9826)}),_N_E=e.O()}]);