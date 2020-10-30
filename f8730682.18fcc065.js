(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(172)),o={id:"identity",title:"Identity using Auth0",sidebar_label:"Identity using Auth0"},s={unversionedId:"workloads/azure/frontend/identity",id:"workloads/azure/frontend/identity",isDocsHomePage:!1,title:"Identity using Auth0",description:"- Auth0 is the Identity-as-a-Service (IDaaS) used in the",source:"@site/docs/workloads/azure/frontend/Identity.md",slug:"/workloads/azure/frontend/identity",permalink:"/stacks/docs/workloads/azure/frontend/identity",version:"current",sidebar_label:"Identity using Auth0",sidebar:"docs",previous:{title:"Contentfull Integration",permalink:"/stacks/docs/workloads/azure/frontend/cms"},next:{title:"Api Definition",permalink:"/stacks/docs/workloads/azure/frontend/api_definition"}},c=[{value:"Implementation",id:"implementation",children:[{value:"Environmental variables",id:"environmental-variables",children:[]}]},{value:"Redis Cache Optional",id:"redis-cache-optional",children:[{value:"Implementation of Redis Cache",id:"implementation-of-redis-cache",children:[]},{value:"Environmental variables for Redis",id:"environmental-variables-for-redis",children:[]}]},{value:"Reference",id:"reference",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://auth0.com/"}),"Auth0")," is the Identity-as-a-Service (IDaaS) used in the\nstacks demo."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.passportjs.org/"}),"PassportJS")," lib is the node middleware to create\nand manage user authentication sessions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io/"}),"Redis")," DB is used for passport session management.")),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("p",null,"The stacks demo is built using\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.passportjs.org/packages/passport-auth0/"}),"Passport-auth0")," strategy.\nEvery successful login will result in a session-cookie created and stored in the\nbrowser. The application relies on this cookie to decide if the user is logged\nin or not."),Object(i.b)("h3",{id:"environmental-variables"},"Environmental variables"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx cross-env \\\nAUTH0_CLIENT_ID=<AUTH0_CLIENT_ID> \\\nAUTH0_DOMAIN=<AUTH0_DOMAIN> \\\nAUTH0_CLIENT_SECRET=<AUTH0_CLIENT_SECRET> \\\n")),Object(i.b)("h2",{id:"redis-cache-optional"},"Redis Cache ","[Optional]"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Redis is used as a preferred DB to maintain the user state.\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/luin/ioredis"}),"ioredis")," is the redis client used due to its\nrobust and performance-focus.")),Object(i.b)("h3",{id:"implementation-of-redis-cache"},"Implementation of Redis Cache"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download Redis to local machine (Follow instruction\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io/topics/quickstart"}),"here"),")")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It is a good idea to copy both the Redis server and the command line interface")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Redis-cli is useful tool to query the local redis server")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$redis-cli ping\nPONG \\\\response from server\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Kickstart the redis-server")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Verify the server is running before running the application")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Build and start the Yumido application.")),Object(i.b)("h3",{id:"environmental-variables-for-redis"},"Environmental variables for Redis"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx cross-env \\\nREDIS_HOST=<REDIS_HOST> \\\nREDIS_PORT=<REDIS_PORT> \\\nREDIS_ENABLED=true \\\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/redis-server-screenshot.jpg",alt:"Redis-cli Screenshots"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/chrome-cookies-screenshot.jpg",alt:"Chrome Screenshots"}))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Please note Redis is disabled for running in CI")),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://auth0.com/blog/next-js-authentication-tutorial/"}),"Auth0 Passport blog")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://redis.io/topics/quickstart"}),"Redis quick start"))))}b.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);