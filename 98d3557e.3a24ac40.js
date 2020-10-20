(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{101:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),o=(t(0),t(142)),c={id:"server_side_cache",title:"Server Side Cache",sidebar_label:"Server Side Cache"},s={unversionedId:"workloads/azure/frontend/server_side_cache",id:"workloads/azure/frontend/server_side_cache",isDocsHomePage:!1,title:"Server Side Cache",description:"Cache server side",source:"@site/docs/workloads/azure/frontend/server_side_cache.md",slug:"/workloads/azure/frontend/server_side_cache",permalink:"/stacks/docs/workloads/azure/frontend/server_side_cache",version:"current",sidebar_label:"Server Side Cache",sidebar:"docs",previous:{title:"Browser Support",permalink:"/stacks/docs/workloads/azure/frontend/browser_support"},next:{title:"Introduction to the Java REST API application",permalink:"/stacks/docs/workloads/azure/backend/java/intro_java"}},i=[{value:"Cache server side",id:"cache-server-side",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:i};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"cache-server-side"},"Cache server side"),Object(o.b)("p",null,"With Next.JS, React applications can be rendered isomorphic and delivered on the\nserver side (SSR). So the time that elapses before the web server transmits the\nfirst byte of the page, increases rapidly i.e.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/tools/lighthouse/audits/ttfb"}),"TTFB"),"."),Object(o.b)("p",null,"React Server Side rendering is very costly and takes a lot of server's CPU power\nfor that. One of the best solutions for this problem is cache already rendered\npages."),Object(o.b)("p",null,"As this can be solved by the infrastructure way but NextJS using custom express\nserver can also provide ways to optimize the caching of static or dynamic\nroutes/ pages."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stacks uses library called\n",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/cacheable-response"}),"cacheable-response")),Object(o.b)("li",{parentName:"ul"},"Server/index.ts sets a ",Object(o.b)("em",{parentName:"li"},"1 hour")," TTL cache")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JS"}),'/* Passing `cacheable-response` instance as middleware */\n\nserver.get("/", (req, res) => ssrCache({req, res, pagePath: "/"}))\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This limit can be extended"),Object(o.b)("li",{parentName:"ul"},'Root ("/") is only configured to utilize this cache but can be extended to\nother routes too.'),Object(o.b)("li",{parentName:"ul"},"Can also be turned on/off per environment.")))}u.isMDXComponent=!0},142:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(f,s(s({ref:r},l),{},{components:t})):a.a.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);