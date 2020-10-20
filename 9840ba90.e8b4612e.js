(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),a=(n(0),n(148)),c=n(155),i=n(156),l={id:"requirements_netcore",title:"Requirements",sidebar_label:"Requirements"},u={unversionedId:"workloads/azure/backend/netcore/quickstart/requirements_netcore",id:"workloads/azure/backend/netcore/quickstart/requirements_netcore",isDocsHomePage:!1,title:"Requirements",description:"<Tabs",source:"@site/docs/workloads/azure/backend/netcore/quickstart/requirments_netcore.md",slug:"/workloads/azure/backend/netcore/quickstart/requirements_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/requirements_netcore",version:"current",sidebar_label:"Requirements",sidebar:"docs",previous:{title:"Introduction to the .Net Core REST API application",permalink:"/stacks/docs/workloads/azure/backend/netcore/introduction_netcore"},next:{title:"Create the project",permalink:"/stacks/docs/workloads/azure/backend/netcore/quickstart/create_project_netcore"}},s=[],b={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(c.a,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(a.b)("ul",null,Object(a.b)("li",null,".NET Core SDKs and Runtime 3.1._ or superior (for .net core 3.1 template)"),Object(a.b)("li",null,"Visual Studio Code 1.35+ with C# Extension from Microsoft (C# for Visual Studio Code (powered by OmniSharp))"),Object(a.b)("li",null,"Visual Studio 2019 v16.4+"),Object(a.b)("li",null,"WSL (Windows Subsystem for Linux: recommended v1, v2 is still in preview and has not been tested)",Object(a.b)("ul",null,Object(a.b)("li",null,"For running build, test and deployment scripts targeting Linux environment"))),Object(a.b)("li",null,Object(a.b)("a",{href:"https://aka.ms/cosmosdb-emulator"},"CosmosDB Emulator 2.4.5+")),Object(a.b)("li",null,"Docker Desktop(for Windows): Version 2.1.0.1 (37199) or superior"),Object(a.b)("li",null,"Docker Engine 19.03.1+"),Object(a.b)("li",null,"Enable:",Object(a.b)("ul",null,Object(a.b)("li",null,"Kubernetes 1.14"),Object(a.b)("li",null,"Linux container (Not windows containers)"))),Object(a.b)("li",null,"kubectl v1.14+ (provided with docker 2.1.0.1)",Object(a.b)("ul",null,Object(a.b)("li",null,"Also ",Object(a.b)("a",{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-windows"},"downloaded from k8s.io")))),Object(a.b)("li",null,"NGINX ingress controller",Object(a.b)("ul",null,Object(a.b)("li",null,"Install the ingress controller in you local cluster."),Object(a.b)("li",null,"Make sure you follow the process for Bare Metal deployment described in here"))))),Object(a.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(a.b)("ul",null,Object(a.b)("li",null,"homebrew"),Object(a.b)("li",null,"azure-cli: brew install azure-cli"),Object(a.b)("li",null,".NET Core SDKs 3.1.* or superior: brew cask install dotnet-sdk"),Object(a.b)("li",null,Object(a.b)("a",{href:"https://aka.ms/cosmosdb-emulator"},"CosmosDB Emulator 2.4.5+"),": Currently the Cosmos emulator can only be run on Windows. If you have an Azure subscription, you are able to use the Azure version instead"),Object(a.b)("li",null,"Docker"),Object(a.b)("li",null,"kubectl: docker run --name kubectl bitnami/kubectl:latest")))),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The current version of Amido Stacks is a template for .Net Core 3.1 (Current LTS, recommended)."))))}d.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(c,".").concat(m)]||b[m]||d[m]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},149:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},153:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},154:function(e,t,n){"use strict";var r=n(0),o=n(153);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},155:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(154),c=n(149),i=n(47),l=n.n(i),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,b=e.values,d=e.groupId,m=Object(a.a)(),f=m.tabGroupChoices,p=m.setTabGroupChoices,O=Object(r.useState)(i),v=O[0],j=O[1],w=Object(r.useState)(!1),y=w[0],k=w[1];if(null!=d){var h=f[d];null!=h&&h!==v&&b.some((function(e){return e.value===h}))&&j(h)}var g=function(e){j(e),null!=d&&p(d,e)},C=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},x=function(){k(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",x)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),E(e)},onFocus:function(){return g(t)},onClick:function(){g(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},156:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);