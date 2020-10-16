(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{150:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(150)),c={id:"performance_testing_netcore",title:"Performance testing",sidebar_label:"Performance testing"},i={unversionedId:"workloads/netcore/quickstart/testing/performance_testing_netcore",id:"workloads/netcore/quickstart/testing/performance_testing_netcore",isDocsHomePage:!1,title:"Performance testing",description:"xxAMIDOxx.xxSTACKSxx.Gatling.Tests",source:"@site/docs/workloads/netcore/quickstart/testing/performance_testing_netcore.md",slug:"/workloads/netcore/quickstart/testing/performance_testing_netcore",permalink:"/stacks/docs/workloads/netcore/quickstart/testing/performance_testing_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/quickstart/testing/performance_testing_netcore.md",version:"current",sidebar_label:"Performance testing",sidebar:"docs",previous:{title:"Functional testing",permalink:"/stacks/docs/workloads/netcore/quickstart/testing/functional_testing_netcore"},next:{title:"Deploying the application",permalink:"/stacks/docs/workloads/netcore/quickstart/deploy_project_netcore"}},s=[{value:"xxAMIDOxx.xxSTACKSxx.Gatling.Tests",id:"xxamidoxxxxstacksxxgatlingtests",children:[]},{value:"Useful Documentation",id:"useful-documentation",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Quick start",id:"quick-start",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"xxamidoxxxxstacksxxgatlingtests"},"xxAMIDOxx.xxSTACKSxx.Gatling.Tests"),Object(o.b)("p",null,"xxAMIDOxx.xxSTACKSxx.Gatling.Tests is a sample project demonstrating performance testing (Load testing) using the tool Gatling."),Object(o.b)("p",null,"The project contains a small framework and a couple of tests that can be used to build specific load tests on projects using the Amido Stack."),Object(o.b)("h2",{id:"useful-documentation"},"Useful Documentation"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gatling.io/docs/current"}),"Gatling docs")),Object(o.b)("p",null,"Blog post by Amir Gharai which was used to set up the framework - ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://devqa.io/gatling-maven-performance-test-framework/"}),"Performance Testing Framework with Gatling and Maven")),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Java SDK 8"),Object(o.b)("li",{parentName:"ul"},"Maven"),Object(o.b)("li",{parentName:"ul"},"IDE for Scala development. I.e. IntelliJ IDEA")),Object(o.b)("h2",{id:"quick-start"},"Quick start"),Object(o.b)("p",null,"Once the project has been cloned locally, tests can be run using the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"mvn clean gatling:test\n")),Object(o.b)("p",null,"By default, this will run a load test against the GET menu api with 1 user with a ramp up duration of 1 second. There are optional parameters that can be added to change the load test:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-Dusers=X")," - allows to set the number of users that will be simulated in the tests"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"-Drampup=X")," - sets the amount of seconds the test will ramp the test load from 0 users to X users in the test")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="Example"',title:'"Example"'}),"mvn clean gatling:test -Dusers=100 -Drampup=5`\n")),Object(o.b)("h2",{id:"folder-structure"},"Folder Structure"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"\u2514\u2500\u2500\xa0src\n\xa0\xa0\xa0\u251c\u2500\u2500\xa0resources\n\xa0\xa0\xa0\u2502\xa0\xa0\u251c\u2500\u2500\xa0bodies\n\xa0\xa0\xa0\u2502\xa0\xa0\u2514\u2500\u2500\xa0data\n\xa0\xa0\xa0\u2514\u2500\u2500\xa0scala\n\xa0\xa0\xa0\xa0\xa0\xa0\u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Gatling.Tests\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0config\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0requests\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0scenarios\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u2514\u2500\u2500\xa0simulations\n")),Object(o.b)("p",null,"This folder structure and the contents of each folder follows the guideline outlined in the blog post on ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://devqa.io/gatling-maven-performance-test-framework/"}),"Testing Excellence"),". It is recommended that users of this framework refer back to this blog post, as it contains all required details."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Testing Excellence was written using Gatling 2.3.0, whereas this project is using the current latest version 3.0.3. Contrary to what the blog post says, to run the tests you should use ",Object(o.b)("inlineCode",{parentName:"p"},"mvn clean gatling:test")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"mvn clean gatling:execute"),". More details ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gatling.io/docs/current/migration_guides/2.3-to-3.0"}),"here")))))}u.isMDXComponent=!0}}]);