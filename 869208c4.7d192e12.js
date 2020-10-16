(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(150)),c={id:"monorepo",title:"Stacks Monorepo",sidebar_label:"Stacks Monorepo"},i={unversionedId:"workloads/frontend/monorepo",id:"workloads/frontend/monorepo",isDocsHomePage:!1,title:"Stacks Monorepo",description:"Description",source:"@site/docs/workloads/frontend/monorepo.md",slug:"/workloads/frontend/monorepo",permalink:"/stacks/docs/workloads/frontend/monorepo",editUrl:"https://github.com/amido/stacks/docs/workloads/frontend/monorepo.md",version:"current",sidebar_label:"Stacks Monorepo",sidebar:"docs",previous:{title:"Getting Started",permalink:"/stacks/docs/workloads/frontend/cli_webapp_frameworks"},next:{title:"Contentfull Integration",permalink:"/stacks/docs/workloads/frontend/cms"}},p=[{value:"Description",id:"description",children:[]},{value:"Sample project directory structure",id:"sample-project-directory-structure",children:[]},{value:"Approach",id:"approach",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The Amido stacks webapp template is a monorepo managed with\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://lernajs.io/"}),"Lerna")),Object(o.b)("p",null,"At the moment, the project is comprised of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"[Webapp]("),"packages/webapp",Object(o.b)("inlineCode",{parentName:"li"},")")," - SSR React, Node.js"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"[UI_Library]("),"packages/UILib",Object(o.b)("inlineCode",{parentName:"li"},")")," - TBC")),Object(o.b)("h2",{id:"sample-project-directory-structure"},"Sample project directory structure"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 lerna.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 packages\n\u2502\xa0\xa0 \u251c\u2500\u2500 Webapp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.test.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 pages\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 task -> ../../scripts/task\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 [sample Package]\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 README.md\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 task -> ../../scripts/task\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 scripts\n\u2502\xa0\xa0 \u2514\u2500\u2500 task\n\u2514\u2500\u2500 package-lock.json\n")),Object(o.b)("h2",{id:"approach"},"Approach"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"npm")," handles the dependencies."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Lerna")," handles tasks that affect multiple package (compile/test/lint all\nmodules)."),Object(o.b)("li",{parentName:"ul"},"One folder per package inside ",Object(o.b)("em",{parentName:"li"},"packages/"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"any new package should be added within the ",Object(o.b)("inlineCode",{parentName:"li"},"packages")," directory and follow\nthe above structure."))),Object(o.b)("li",{parentName:"ul"},"All packages share the similar structure."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Task")," script is used to define set of common tasks like ",Object(o.b)("inlineCode",{parentName:"li"},"test"),", ",Object(o.b)("inlineCode",{parentName:"li"},"lint")," and\n",Object(o.b)("inlineCode",{parentName:"li"},"dev"),". So any common task should be added in the script at the root level.")))}s.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);