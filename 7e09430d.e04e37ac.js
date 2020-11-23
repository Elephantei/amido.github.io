(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(216)),o={id:"testing_java_serenity_bdd",title:"UI Browser Automation with Serenity BDD and Java",sidebar_label:"Java - Serenity BDD",description:"UI tests with Serenity BDD and Java",keywords:["serenity","tests","testing","ui","java","template","example","run the tests","run tests by tag","serenity report"]},s={unversionedId:"testing/testing_java_serenity_bdd",id:"testing/testing_java_serenity_bdd",isDocsHomePage:!1,title:"UI Browser Automation with Serenity BDD and Java",description:"UI tests with Serenity BDD and Java",source:"@site/docs/testing/java_testing_serenity_bdd.md",slug:"/testing/testing_java_serenity_bdd",permalink:"/docs/testing/testing_java_serenity_bdd",version:"current",sidebar_label:"Java - Serenity BDD",sidebar:"docs",previous:{title:"Stacks Testing Frameworks",permalink:"/docs/testing/cli_testing_frameworks"},next:{title:"UI Browser Automation with Selenium and .NET",permalink:"/docs/testing/testing_dotnet_selenium"}},l=[{value:"Getting started",id:"getting-started",children:[{value:"Configurations",id:"configurations",children:[]},{value:"Browser Download Location",id:"browser-download-location",children:[]},{value:"Configure the serenity.properties",id:"configure-the-serenityproperties",children:[]},{value:"Run Tests Locally",id:"run-tests-locally",children:[]},{value:"Test Report",id:"test-report",children:[]},{value:"Manual Aggregation of the Test Report",id:"manual-aggregation-of-the-test-report",children:[]},{value:"Running tests in parallel threads Using forks",id:"running-tests-in-parallel-threads-using-forks",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the Java world there are few tools that provide an easier experience with adding behaviour driven development to your automated testing better than ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://serenity-bdd.info/#/"}),"Serenity BDD"),".  Not only is it very easy to use but it also adds a rich layer of reporting to your automated testing framework which is crucial for project management and keeping your stakeholders informed."),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("p",null,"Serenity BDD provides excellent integrations with Selenium, which allows you to avoid a lot of the boilerplate and infrastructure code you normally need to deal with in automated web tests.\nIn particular, Serenity manages the driver lifecycle for you (so you don\u2019t need to create your own driver instances or close them at the end of the tests)."),Object(i.b)("p",null,"Serenity can also be configured to automatically take screenshots throughout the tests, creating rich documentation of how each test played out."),Object(i.b)("p",null,'When you write your tests in a fluent, readable manner, these screenshots become part of the "living documentation" of your application.'),Object(i.b)("h3",{id:"configurations"},"Configurations"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amido/stacks-webapp-template/blob/master/packages/scaffolding-cli/templates/test/xxAMIDOxx.xxSTACKSxx.E2E.Serenity/src/test/resources/serenity.conf"}),"Serenity conf")," file need to be configured."),Object(i.b)("p",null,"The following properties for different environments are required in the ",Object(i.b)("inlineCode",{parentName:"p"},"src/test/resources/serenity.conf")," configuration file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"webdriver.base.url\napi.base.url\n")),Object(i.b)("h3",{id:"browser-download-location"},"Browser Download Location"),Object(i.b)("p",null,"If you wish to use a local instance of Serenity Webdriver, make sure to download the correct WebDriver file for the desired browser."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/operasoftware/operachromiumdriver/releases"}),"Opera")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/mozilla/geckodriver/releases"}),"Firefox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://chromedriver.chromium.org/downloads"}),"Chrome")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver"}),"Internet Explorer")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://blogs.windows.com/msedgedev/2015/07/23/bringing-automated-testing-to-microsoft-edge-through-webdriver/"}),"Microsoft Edge"))),Object(i.b)("h3",{id:"configure-the-serenityproperties"},"Configure the serenity.properties"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"serenity.take.screenshots")," - Set this property to have more finer control on how screenshots are taken."),Object(i.b)("p",null,"This property can take the following values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FOR_EACH_ACTION"),": Saves a screenshot at every web element action (like click(), typeAndEnter(), type(), typeAndTab() etc.).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"BEFORE_AND_AFTER_EACH_STEP"),": Saves a screenshot before and after every step.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"AFTER_EACH_STEP"),": Saves a screenshot after every step")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"FOR_FAILURES"),": Saves screenshots only for failing steps.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"DISABLED"),": Does not save screenshots for any steps."))),Object(i.b)("p",null,"The default value is ",Object(i.b)("inlineCode",{parentName:"p"},"serenity.take.screenshots=BEFORE_AND_AFTER_EACH_STEP")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"webdriver.driver")," - The browser you want to run the tests in: firefox, chrome, phantomjs or iexplorer."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"webdriver.chrome.driver")," - Path to the Chrome driver, if it is not on the system path."),Object(i.b)("p",null,"More properties here: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://serenity-bdd.github.io/theserenitybook/latest/serenity-system-properties.html"}),"https://serenity-bdd.github.io/theserenitybook/latest/serenity-system-properties.html")),Object(i.b)("h3",{id:"run-tests-locally"},"Run Tests Locally"),Object(i.b)("p",null,"To run the web tests with a given driver, please provide the path to the webdriver file using the system property: ",Object(i.b)("inlineCode",{parentName:"p"},"webdriver.driver_name.driver"),". For example, your serenity.properties file should contain the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"webdriver.driver=chrome\nwebdriver.chrome.driver=/path/to/my/chromedriver\n")),Object(i.b)("p",null,"Open the project folder in the terminal and execute tests by running any one of the following commands:"),Object(i.b)("p",null,"Run all tests on the default environment:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean verify\n")),Object(i.b)("p",null,"Run all tests on the specific environment e.g. staging:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mmvn clean verify -Denvironment=staging\n")),Object(i.b)("p",null,"Run Smoke tests only:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'mvn clean verify -Dcucumber.options="--tags @Smoke"\n')),Object(i.b)("p",null,"Run Functional tests only:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'mvn clean verify -Dcucumber.options="--tags @Functional"\n')),Object(i.b)("p",null,"Run tests by other tags and ignore tests that contain @Ignore tags:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'mvn clean verify verify -Dcucumber.options="--tags ~@Ignore --tags @YourTag"\n')),Object(i.b)("h3",{id:"test-report"},"Test Report"),Object(i.b)("p",null,"As a result of the test execution - serenity-maven-plugin will automatically generate the test report with name - ",Object(i.b)("inlineCode",{parentName:"p"},"index.html"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"Test Report Location is: ..target/site/serenity/index.html\n")),Object(i.b)("h3",{id:"manual-aggregation-of-the-test-report"},"Manual Aggregation of the Test Report"),Object(i.b)("p",null,"Open the project folder in the terminal and execute:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mvn serenity:aggregate\n")),Object(i.b)("h3",{id:"running-tests-in-parallel-threads-using-forks"},"Running tests in parallel threads Using forks"),Object(i.b)("p",null,"Using multiple forks can be a good alternative to running all tests in a single JVM, and can reduce the risk of certain types of errors."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Choosing the right forking strategy and parallel execution settings can have a substantial impact on the memory requirements and the execution time of the build system."))),Object(i.b)("p",null,"Using Forked Test Execution, new JVM processes are spun up to execute the tests, up to a configurable maximum number of processes."),Object(i.b)("p",null,"This creates better separation between tests, which can improve their reliability."),Object(i.b)("p",null,"Maven is set to spawn new processes by the forkCount configuration element, as shown here below."),Object(i.b)("p",null,'This can either be a number (the maximum number of forks) or a multiplier (the number of forks per CPU). The current configuration uses the value of "2", which means 2 forked processes per CPU:'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"})," <plugin>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <version>2.22.2</version>\n    <configuration>\n        <parallel>classes</parallel>\n        <threadCount>2</threadCount>\n        <forkCount>2</forkCount>\n    </configuration>\n</plugin>\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The more threads are used, the higher the chances of sporadic, hard-to-reproduce test failures due to timeouts and other related issues. The added performance gain of each thread also tends to drop off for higher numbers of threads."))))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);