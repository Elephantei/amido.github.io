(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{209:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(216)),i=a(223),c=a(224),l={id:"quickstart_java",title:"Getting started with the Java Rest API application",sidebar_label:"Getting started",description:"Getting started with the Java Rest API application",keywords:["java","rest","api","application","spring boot","authorization","docker","swagger","auth0","settings","get started"]},s={unversionedId:"workloads/azure/backend/java/quickstart_java",id:"workloads/azure/backend/java/quickstart_java",isDocsHomePage:!1,title:"Getting started with the Java Rest API application",description:"Getting started with the Java Rest API application",source:"@site/docs/workloads/azure/backend/java/quickstart_java.md",slug:"/workloads/azure/backend/java/quickstart_java",permalink:"/docs/workloads/azure/backend/java/quickstart_java",version:"current",sidebar_label:"Getting started",sidebar:"docs",previous:{title:"Cosmos DB Emulator",permalink:"/docs/workloads/azure/backend/java/setting_up_cosmos_db_locally_java"},next:{title:"Using the Scaffolding CLI to create the Java Rest API project template",permalink:"/docs/workloads/azure/backend/java/scaffolding_java"}},b=[{value:"Using the repository to build the Java Spring Boot Rest API application",id:"using-the-repository-to-build-the-java-spring-boot-rest-api-application",children:[{value:"Versioning",id:"versioning",children:[]},{value:"Running the application locally",id:"running-the-application-locally",children:[]},{value:"Authorization",id:"authorization",children:[]}]},{value:"Using a Docker image",id:"using-a-docker-image",children:[]}],p={rightToc:b};function u(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"using-the-repository-to-build-the-java-spring-boot-rest-api-application"},"Using the repository to build the Java Spring Boot Rest API application"),Object(o.b)("h3",{id:"versioning"},"Versioning"),Object(o.b)("p",null,"This is version ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0")," of the ",Object(o.b)("inlineCode",{parentName:"p"},"java-stacks")," project."),Object(o.b)("h3",{id:"running-the-application-locally"},"Running the application locally"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the Java project to your local machine from here: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-java/tree/feat/api-with-no-cqrs"}),"stacks-java repository"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Configure required environment variables"),Object(o.b)("p",{parentName:"li"},"The application is currently configured to work with the Azure environment."),Object(o.b)("p",{parentName:"li"},"It uses an Azure ",Object(o.b)("strong",{parentName:"p"},"CosmosDB")," database to store the example application data. So you should have access to an instance to use with the application.\nNote: For running on a local Windows environment you can use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workloads/azure/backend/java/setting_up_cosmos_db_locally_java"}),"Cosmos DB emulator")," (CosmosDB Emulator has a known fixed key).\nFor further info please follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21"}),"link"),"."),Object(o.b)("p",{parentName:"li"},"In addition, Azure ",Object(o.b)("strong",{parentName:"p"},"ApplicationInsights")," is used for logging purposes. If this is unavailable, modify the application so that it doesn't fail to startup if it can't access ApplicationInsights, and simply log to the terminal instead."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"   application-insights:\n       instrumentation-key: xxxxxx\n       enabled: false\n")),Object(o.b)("p",{parentName:"li"},"There are two corresponding environment variables that need to be set to interact with these systems:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"AZURE_COSMOSDB_KEY\nAZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY\n")),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"unix",mdxType:"TabItem"},"Set the two environment variables as additional variables within e.g. ~/.profile or /etc/profile."),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},"Open the System Properties then select the Advanced tab, then click on the Environment Variables button and add the new parameters."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Build and run the application"),Object(o.b)("p",{parentName:"li"}," Note that at a minimum ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://adoptopenjdk.net/"}),"Java 11")," should be installed."),Object(o.b)("p",{parentName:"li"}," Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, then"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw spring-boot:run\n"))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd spring-boot:run\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Build and run the application using Cosmos DB Emulator\nplease refer to section "Determine which root certificates have been installed" in ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workloads/azure/backend/java/setting_up_cosmos_db_locally_java"}),"Setting Up CosmosDB Emulator")),Object(o.b)("p",{parentName:"li"}," Move to the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, then\ngo to ",Object(o.b)("inlineCode",{parentName:"p"},"application.yml")," either comment out the ",Object(o.b)("inlineCode",{parentName:"p"},"application-insights")," block or set ",Object(o.b)("inlineCode",{parentName:"p"},"enabled"),"  property to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nIn ",Object(o.b)("inlineCode",{parentName:"p"},"logback-spring.xml")," comment out the application-insight section."),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("img",{alt:"logback",src:a(243).default})),Object(o.b)("p",{parentName:"li"}," Set ",Object(o.b)("inlineCode",{parentName:"p"},"AZURE_COSMOSDB_KEY")," as an environment variable and set the value to be the primary key value on the emulator."),Object(o.b)("br",null),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'./mvnw spring-boot:run -Dspring-boot.run.jvmArguments=\'-Djavax.net.ssl.trustStore="<Location of the root cosmos db certificate>" -Djavax.net.ssl.trustStorePassword="changeit"\'\n'))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvnw.cmd spring-boot:run -Dspring-boot.run.jvmArguments=\'-Djavax.net.ssl.trustStore="<Location of the root cosmos db certificate>" -Djavax.net.ssl.trustStorePassword="changeit"\'\n'))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify that the application has started"),Object(o.b)("p",{parentName:"li"},"Browse to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000/v1/menu"}),"http://localhost:9000/v1/menu"),". This should return a valid JSON response."),Object(o.b)("p",{parentName:"li"},"The application configuration uses Swagger/OAS3 to represent the API endpoints. The Swagger UI can be viewed by directing your\nbrowser to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:9000/swagger/index.html"}),"http://localhost:9000/swagger/index.html"),"."))),Object(o.b)("h3",{id:"authorization"},"Authorization"),Object(o.b)("p",null,"All API endpoints are (optionally) protected using ",Object(o.b)("strong",{parentName:"p"},"Auth0"),". There is an ",Object(o.b)("inlineCode",{parentName:"p"},"auth.properties")," file within the project codebase.\nIf the following property within this file is set:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"auth.isEnabled=true\n")),Object(o.b)("p",null,"then clients will need to pass an ",Object(o.b)("inlineCode",{parentName:"p"},"Authorization")," header containing the Bearer token generated from Auth0 as part of the endpoint request. If the value\nis set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," then no authorization is required."),Object(o.b)("h4",{id:"auth0-configuration-properties"},"Auth0 configuration properties"),Object(o.b)("p",null,"If using Auth0 for authorization, Auth0 itself will need to be configured with both an API definition and an associated Application.\nThere are corresponding configuration values required for the Stacks application, within the ",Object(o.b)("inlineCode",{parentName:"p"},"auth.properties")," file, e.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"auth0.issuer=https://amidostacks.eu.auth0.com/\nauth0.apiAudience=https://amidostacks.eu.auth0.com/api/v2/\n")),Object(o.b)("p",null,"These parameters are used to verify that the JWT supplied in the Authorization header of a request is valid."),Object(o.b)("h4",{id:"swaggeroas"},"Swagger/OAS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Automatically generated for the project. Go to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:9000/swagger/index.html"}),"Swagger Index")," to view."),Object(o.b)("li",{parentName:"ul"},"Swagger Json is here: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:9000/swagger/oas.json"}),"Swagger Json"))),Object(o.b)("h4",{id:"health-check"},"Health check"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Available at: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:9000/health"}),"health check"),"\n(This can also be configured to run on another port)")),Object(o.b)("h2",{id:"using-a-docker-image"},"Using a Docker image"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"https://docs.docker.com/docker-for-windows/install/")),Object(o.b)("p",null,"From the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder, build a Docker image using e.g. the command below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker build --tag stacks:1.0 .\n")),Object(o.b)("p",null,"This uses the ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," in this folder to generate the Docker image."),Object(o.b)("p",null,"If you have an ",Object(o.b)("inlineCode",{parentName:"p"},".m2")," directory in the ",Object(o.b)("inlineCode",{parentName:"p"},"java/")," folder, the Docker build will attempt to copy the files inside the container and use the cached versions."),Object(o.b)("p",null,"Once the Docker image is created, you can then run a Docker container based on this image using e.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -p 9000:9000 -e AZURE_APPLICATION_INSIGHTS_INSTRUMENTATION_KEY -e AZURE_COSMOSDB_KEY stacks:1.0\n")),Object(o.b)("p",null,"which passes in the two required environment variables from your own environment."))}u.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},219:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},221:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},222:function(e,t,a){"use strict";var n=a(0),r=a(221);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},223:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(222),i=a(219),c=a(51),l=a.n(c),s=37,b=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,p=e.values,u=e.groupId,d=Object(o.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,j=Object(n.useState)(c),O=j[0],f=j[1],g=Object(n.useState)(!1),v=g[0],w=g[1];if(null!=u){var N=m[u];null!=N&&N!==O&&p.some((function(e){return e.value===N}))&&f(N)}var y=function(e){f(e),null!=u&&h(u,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},T=function(){w(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",T)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return y(t)},onClick:function(){y(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},224:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},243:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/logback_xml-cb54917ac05bed6204294eb4ba529acf.png"}}]);