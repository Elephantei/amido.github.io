(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{129:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var r=o(2),n=o(6),a=(o(0),o(142)),c={id:"cosmosdb_configuration_netcore",title:"CosmosDB Configuration"},i={unversionedId:"workloads/azure/netcore/guide/cosmosdb/cosmosdb_configuration_netcore",id:"workloads/azure/netcore/guide/cosmosdb/cosmosdb_configuration_netcore",isDocsHomePage:!1,title:"CosmosDB Configuration",description:"Configure Cosmos DB Collection for Stacks in Cosmos Db Emulator",source:"@site/docs/workloads/azure/netcore/guide/cosmosdb/cosmosdb_configuration_netcore.md",slug:"/workloads/azure/netcore/guide/cosmosdb/cosmosdb_configuration_netcore",permalink:"/stacks/docs/workloads/azure/netcore/guide/cosmosdb/cosmosdb_configuration_netcore",version:"current"},s=[{value:"Configure Cosmos DB Collection for Stacks in Cosmos Db Emulator",id:"configure-cosmos-db-collection-for-stacks-in-cosmos-db-emulator",children:[]}],u={rightToc:s};function l(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"configure-cosmos-db-collection-for-stacks-in-cosmos-db-emulator"},"Configure Cosmos DB Collection for Stacks in Cosmos Db Emulator"),Object(a.b)("br",null),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"A database called Stacks for the application, and a database called CosmosDBPackage for the integration tests of the CosmosDB package (Temporary, until we split the solution on it's own repository)"),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{alt:"CosmosDB",src:o(161).default})),Object(a.b)("br",null)),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The Stacks database should have a container called Menu partitioned by ",Object(a.b)("inlineCode",{parentName:"p"},"/id"),"."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{alt:"CosmosDB",src:o(162).default})))))}l.isMDXComponent=!0},142:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return p}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},b=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(o),m=r,p=b["".concat(c,".").concat(m)]||b[m]||d[m]||a;return o?n.a.createElement(p,i(i({ref:t},u),{},{components:o})):n.a.createElement(p,i({ref:t},u))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=o[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},161:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/cosmosdb_emulator_1-ef4e8ca6a98bd86d15fa0046d1f80caa.png"},162:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/cosmosdb_emulator_2-ea8bcc2395126bc2cb4826568d1b256d.png"}}]);