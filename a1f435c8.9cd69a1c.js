(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var s=n(2),r=n(6),i=(n(0),n(168)),a={id:"cypress_functional_testing",title:"Functional Testing with Cypress",sidebar_label:"Cypress - Functional Testing"},o={unversionedId:"testing/cypress_functional_testing",id:"testing/cypress_functional_testing",isDocsHomePage:!1,title:"Functional Testing with Cypress",description:"Cypress: Functional tests",source:"@site/docs/testing/cypress_functional_testing.md",slug:"/testing/cypress_functional_testing",permalink:"/stacks/docs/testing/cypress_functional_testing",version:"current",sidebar_label:"Cypress - Functional Testing",sidebar:"docs",previous:{title:"UI Browser Automation with Selenium and .NET",permalink:"/stacks/docs/testing/testing_dotnet_selenium"},next:{title:"Automated UI Visual Testing With Applitools",permalink:"/stacks/docs/testing/visual_analysis"}},c=[{value:"Cypress: Functional tests",id:"cypress-functional-tests",children:[{value:"Why Cypress is categorised in the pre-deployed tests",id:"why-cypress-is-categorised-in-the-pre-deployed-tests",children:[]},{value:"How Cypress is run in Continuous Integration (CI) pipelines",id:"how-cypress-is-run-in-continuous-integration-ci-pipelines",children:[]},{value:"How to use Cypress",id:"how-to-use-cypress",children:[]},{value:"How to use Cypress while developing",id:"how-to-use-cypress-while-developing",children:[]},{value:"How to run all the tests without keeping the server running",id:"how-to-run-all-the-tests-without-keeping-the-server-running",children:[]},{value:"Where tests should be located",id:"where-tests-should-be-located",children:[]},{value:"How to configure the environments",id:"how-to-configure-the-environments",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"cypress-functional-tests"},"Cypress: Functional tests"),Object(i.b)("p",null,"We are using ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://docs.cypress.io/"}),"Cypress")," for functional testing as much\nas possible. The key features of Cypress:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Integration testing with API testing support (Node.js)"),Object(i.b)("li",{parentName:"ul"},"Easy debugability (DOM snapshotting)"),Object(i.b)("li",{parentName:"ul"},"Selector playground"),Object(i.b)("li",{parentName:"ul"},"Great documentation"),Object(i.b)("li",{parentName:"ul"},"Best implementation of Live Reloading")),Object(i.b)("h3",{id:"why-cypress-is-categorised-in-the-pre-deployed-tests"},"Why Cypress is categorised in the pre-deployed tests"),Object(i.b)("p",null,"The Cypress tests, if structured correctly, can be run BEFORE the app client is deployed to an environment. This is to ensure that we get the fastest feedback we can. If you are following branching strategies such as GitFlow, then you can run these tests on your branch before merging to master."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"BENEFITS"),Object(i.b)("th",Object(s.a)({parentName:"tr"},{align:null}),"DOWNSIDES"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"deployment independent"),Object(i.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"not full integration tests as not running on deployed infrastructure")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"faster feedback"),Object(i.b)("td",Object(s.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(s.a)({parentName:"tr"},{align:null}),"run core tests before the branch is merged to master, smoke tests post-merge and deployment"),Object(i.b)("td",Object(s.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h3",{id:"how-cypress-is-run-in-continuous-integration-ci-pipelines"},"How Cypress is run in Continuous Integration (CI) pipelines"),Object(i.b)("p",null,"Glad you asked. You'll see an npm script in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," which uses ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/bahmutov/start-server-and-test"}),"start-server-and-test"),". This package starts the Node.js Express server, waits for the app URL (localhost in this case), then runs test command; when the tests end, it shuts down the server instance."),Object(i.b)("p",null,"Key benefits means we never have to explicitly wait for the server to be ready before testing."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"package.json script"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(s.a)({parentName:"pre"},{className:"language-text"}),'"test:cypress" : "env CI=true node_modules/.bin/start-server-and-test start $APP_BASE_URL:$PORT test:cypress:run"\n')),Object(i.b)("h3",{id:"how-to-use-cypress"},"How to use Cypress"),Object(i.b)("p",null,"Please read\n",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/references/best-practices.html"}),"Cypress - Best Practices"),"\nfor how to get the most out of Cypress."),Object(i.b)("h3",{id:"how-to-use-cypress-while-developing"},"How to use Cypress while developing"),Object(i.b)("h4",{id:"server-side-rendered-ssr-apps"},"Server Side Rendered (SSR) apps"),Object(i.b)("p",null,"Say if you are following Test Driven Development (TDD) cycles, or if you wish to write a failing test for a known bug, and fix the app and check to ensure that the test passes, you may wish you watch the tests and the code together."),Object(i.b)("p",null,"To open and run Cypress locally with live reload, after installing dependencies:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install app dependencies ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")),Object(i.b)("li",{parentName:"ol"},"Build the web app ",Object(i.b)("inlineCode",{parentName:"li"},"npm run build")),Object(i.b)("li",{parentName:"ol"},"Compile the ",Object(i.b)("inlineCode",{parentName:"li"},"*.cy.ts")," Cypress test files ",Object(i.b)("inlineCode",{parentName:"li"},"npm run test:cypress:compile"),"\n(optional: pass ",Object(i.b)("inlineCode",{parentName:"li"},"--watch")," through to watch for changes)"),Object(i.b)("li",{parentName:"ol"},"Start the server, run the tests headless, tear down the server:\n",Object(i.b)("inlineCode",{parentName:"li"},"npm run test:cypress"),". When writing tests: Open Cypress with live-reloading\nand selector playground ",Object(i.b)("inlineCode",{parentName:"li"},"npm run test:cypress:open"))),Object(i.b)("h3",{id:"how-to-run-all-the-tests-without-keeping-the-server-running"},"How to run all the tests without keeping the server running"),Object(i.b)("h4",{id:"server-side-rendered-ssr-applications"},"Server Side Rendered (SSR) applications"),Object(i.b)("p",null,"To spin up the server automatically, then run Cypress in headless Chrome, use:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Script"),":"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run test:cypress"),". This is the same script as mentioned for running in ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"#how-is-cypress-run-in-continuous-integration-ci-pipelines"}),"CI pipelines")),Object(i.b)("h3",{id:"where-tests-should-be-located"},"Where tests should be located"),Object(i.b)("p",null,"We suggest co-locating the ",Object(i.b)("inlineCode",{parentName:"p"},"*.cy.ts")," tests with the page compositions (a composition is several components that may come together to form a page). for high-level tests, and component tests with the components themselves."),Object(i.b)("p",null,"e.g."),Object(i.b)("p",null,"compositions\n\u251c\u2500\u2500 create\n\u2502   \u251c\u2500\u2500 index.test.cy.ts\n\u2502   \u2514\u2500\u2500 index.tsx\n\u2514\u2500\u2500 home\n\u251c\u2500\u2500 ",Object(i.b)("strong",{parentName:"p"},"snapshots"),"\n\u2502   \u2514\u2500\u2500 index.test.tsx.snap\n\u251c\u2500\u2500 components.tsx\n\u251c\u2500\u2500 index.axe.test.tsx\n\u251c\u2500\u2500 index.test.axe.cy.ts\n\u251c\u2500\u2500 index.test.cy.ts\n\u251c\u2500\u2500 index.test.eyes.cy.ts\n\u251c\u2500\u2500 index.test.tsx\n\u2514\u2500\u2500 index.tsx"),Object(i.b)("h3",{id:"how-to-configure-the-environments"},"How to configure the environments"),Object(i.b)("p",null,"We suggest tightly coupling Cypress with the app under test. This means sharing environment configuration files. This ensures that in your deployment pipelines, and quality gating process, you are confident that the app under test is being tested correctly."),Object(i.b)("p",null,"For example, if an API URL changes, you will only have a single place to change and the tests and app will be updated together."),Object(i.b)("p",null," Note that the environment variables are required on the hosting platform, e.g.\n",Object(i.b)("inlineCode",{parentName:"p"},"export NODE_ENV=dev")))}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var s=n(0),r=n.n(s);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,h=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);