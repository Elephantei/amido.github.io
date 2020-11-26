(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(217)),i={id:"state_management_csr",title:"State Management",sidebar_label:"State Management Patterns",hide_title:!1,hide_table_of_contents:!0,description:"Stacks State Management Patterns",keywords:["stacks","management","pattern","react","redux","saga","logger","devtools","wrapper","webapp","ssr","node","client side rendering","server side rendering"]},c={unversionedId:"workloads/azure/frontend/CSR/state_management_csr",id:"workloads/azure/frontend/CSR/state_management_csr",isDocsHomePage:!1,title:"State Management",description:"Stacks State Management Patterns",source:"@site/docs/workloads/azure/frontend/CSR/state_management_csr.md",slug:"/workloads/azure/frontend/CSR/state_management_csr",permalink:"/docs/workloads/azure/frontend/CSR/state_management_csr",version:"current",sidebar_label:"State Management Patterns",sidebar:"docs",previous:{title:"Stacks Monorepo",permalink:"/docs/workloads/azure/frontend/CSR/stacks_monorepo_csr"},next:{title:"Getting Started",permalink:"/docs/workloads/azure/frontend/CSR/getting_started_csr"}},s=[{value:"Tools used",id:"tools-used",children:[]},{value:"Next based utility libraries",id:"next-based-utility-libraries",children:[]},{value:"Pattern",id:"pattern",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tools-used"},"Tools used"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://react-redux.js.org/"}),"React-redux")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redux-saga/redux-saga"}),"Redux-saga")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/LogRocket/redux-logger"}),"Redux-logger")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Redux-devtools")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/redux-saga-routines"}),"Redux-saga-routines"))),Object(o.b)("h2",{id:"next-based-utility-libraries"},"Next based utility libraries"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kirill-konshin/next-redux-wrapper"}),"next-redux-wrapper")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/bmealhouse/next-redux-saga#readme"}),"next-redux-saga"))),Object(o.b)("p",null,"next-redux-saga uses the redux store created by next-redux-wrapper"),Object(o.b)("h2",{id:"pattern"},"Pattern"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/erikras/ducks-modular-redux"}),"Ducks")," pattern is used to\nsimplify the creation and managing the boilerplate associated with reducers,\naction creators bundles with sagas. With Ducks pattern, rather than splitting up\nall related code, It can be packaged into redux modules. This gives us clarity\nabout which piece of Redux is handling which functionality."),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"To create new async routine please refer to ",Object(o.b)("inlineCode",{parentName:"p"},"<src>/ducks/get-menus")," and it is\nconsumed in landing home functional component ",Object(o.b)("inlineCode",{parentName:"p"},"<src>/composition/home/")))}l.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);