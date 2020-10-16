(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(150)),c={id:"testing_netcore",title:"Testing the .NetCore Rest API",sidebar_label:"Testing"},i={unversionedId:"workloads/netcore/testing_netcore",id:"workloads/netcore/testing_netcore",isDocsHomePage:!1,title:"Testing the .NetCore Rest API",description:"Testing the application",source:"@site/docs/workloads/netcore/testing_netcore.md",slug:"/workloads/netcore/testing_netcore",permalink:"/stacks/docs/workloads/netcore/testing_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/testing_netcore.md",version:"current",sidebar_label:"Testing"},s=[{value:"Testing the application",id:"testing-the-application",children:[{value:"Running Tests",id:"running-tests",children:[]},{value:"Reports",id:"reports",children:[]},{value:"Running API tests",id:"running-api-tests",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"testing-the-application"},"Testing the application"),Object(o.b)("h3",{id:"running-tests"},"Running Tests"),Object(o.b)("p",null,"Tests within the code are grouped using Tag annotations. There are three groups: 'Unit', 'Component' and 'Integration'. To just run the unit tests, for example, type:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'./mvnw test -Dgroups="Unit"\n')),Object(o.b)("p",null,"Similarly, for the Component tests, you should use:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'./mvnw test -Dgroups="Component"\n')),Object(o.b)("p",null,"and the equivalent for running the Integration tests."),Object(o.b)("h3",{id:"reports"},"Reports"),Object(o.b)("h4",{id:"test-reports"},"Test reports"),Object(o.b)("p",null,"A test report may be created from the ",Object(o.b)("inlineCode",{parentName:"p"},"test")," package in Java using the Surefire Plugin.\nThe report file (as either XML or HTML) generated for each of the test classes can be found under ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/surefire-reports"),"."),Object(o.b)("p",null,"Run the following command to create the report:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw surefire:test\n")),Object(o.b)("p",null,"To generate the Serenity report:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw clean verify\n")),Object(o.b)("p",null,"The report can be viewed under ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/api-tests/target/site/serenity/index.html"),"."),Object(o.b)("h4",{id:"code-coverage-and-dependency-check-reports"},"Code coverage and dependency check reports"),Object(o.b)("p",null,"Run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw jacoco:report\n")),Object(o.b)("p",null,"The generated report can be viewed under ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/site/jacoco/index.html"),"."),Object(o.b)("p",null,"For the dependency checker report, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw clean install -Powasp-dependency-check\n")),Object(o.b)("p",null,"The generated report can be viewed under ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/dependency-check.html"),"."),Object(o.b)("h4",{id:"mutation-testing"},"Mutation testing"),Object(o.b)("p",null,"PIT mutation testing is used to generate mutation tests (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://pitest.org/"}),"https://pitest.org/")," for details).\nThe mutation coverage goal analyses all classes in the codebase that match the target tests and target class filters.\nTo run it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw org.pitest:pitest-maven:mutationCoverage\n")),Object(o.b)("p",null,"The generated report can be viewed under \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/target/pit-reports/YYYYMMDDHHMI")),Object(o.b)("h3",{id:"running-api-tests"},"Running API tests"),Object(o.b)("p",null,"Set an environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"BASE_URL")," (e.g. if testing locally set it to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:9000"}),"http://localhost:9000"),")"),Object(o.b)("p",null,"From project path ",Object(o.b)("inlineCode",{parentName:"p"},"<>PROJECT-NAME>/api-tests")," to run all tests, use"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"./mvnw clean verify\n")),Object(o.b)("p",null,"To run the Smoke tests independently, use"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'mvn clean verify -Dcucumber.options="--tags @Smoke"\n')),Object(o.b)("p",null,"and to run the Functional tests independently, use"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),'mvn clean verify -Dcucumber.options="--tags @Functional"\n')))}p.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,g=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(g,i(i({ref:t},l),{},{components:n})):a.a.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);