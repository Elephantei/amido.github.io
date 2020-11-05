(window.webpackJsonp=window.webpackJsonp||[]).push([[27,70],{178:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,m=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);t.default=function(e){var t=e.next,r=e.prev;return o.a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(r){var n=document.querySelector("div.pagination-nav__item>a");n&&n.style&&(n.style.display="none")}})),o.a.createElement("div",null)}},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return f}));var n=r(2),o=r(6),a=(r(0),r(178)),i=r(50),c={id:"introduction",title:"Infrastructure Introduction",sidebar_label:"Introduction",hide_table_of_contents:!0},u={unversionedId:"infrastructure/introduction",id:"infrastructure/introduction",isDocsHomePage:!1,title:"Infrastructure Introduction",description:"All Stacks workloads require initial configuration of the cloud provider and some core infrastructure.",source:"@site/docs/infrastructure/introduction.md",slug:"/infrastructure/introduction",permalink:"/stacks/docs/infrastructure/introduction",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Workloads on Amazon Web Services",permalink:"/stacks/docs/workloads/aws/workloads_aws_readme"},next:{title:"Azure Core Infrastructure",permalink:"/stacks/docs/infrastructure/azure/core_infrastructure"}},s=[{value:"Terraform",id:"terraform",children:[]}],l={rightToc:s};function f(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"All Stacks workloads require initial configuration of the cloud provider and some core infrastructure."),Object(a.b)("h2",{id:"terraform"},"Terraform"),Object(a.b)("p",null,"All infrastructure tooling is done with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.terraform.io/"}),"Terraform"),", as a method for implementing infrastructure as code. Terraform uses workspaces as the main mechanism of segregating states."),Object(a.b)("p",null,"All the modules used by stacks are documented and maintained ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-terraform"}),"here")),Object(a.b)(i.default,{next:!0,mdxType:"HideNavigation"}),Object(a.b)(i.default,{prev:!0,mdxType:"HideNavigation"}))}f.isMDXComponent=!0}}]);