(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var o=a(2),r=a(6),n=(a(0),a(223)),c=a(230),s=a(231),i={id:"setting_up_cosmos_db_locally_java_cqrs",title:"Cosmos DB Emulator",sidebar_label:"Cosmos DB Emulator",hide_title:!1,hide_table_of_contents:!0,description:"How to set up the Cosmos DB Emulator",keywords:["cosmos db","emulator","settings","template","certificate"]},l={unversionedId:"workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",id:"workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",isDocsHomePage:!1,title:"Cosmos DB Emulator",description:"How to set up the Cosmos DB Emulator",source:"@site/docs/workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",permalink:"/docs/workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",version:"current",sidebar_label:"Cosmos DB Emulator",sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/workloads/azure/backend/java_cqrs/requirements_java_cqrs"},next:{title:"Getting started with the Java Rest API application",permalink:"/docs/workloads/azure/backend/java_cqrs/quickstart_java_cqrs"}},u=[{value:"Set up Cosmos DB Emulator locally",id:"set-up-cosmos-db-emulator-locally",children:[{value:"Using the Cosmos DB Emulator to run the database locally",id:"using-the-cosmos-db-emulator-to-run-the-database-locally",children:[]},{value:"Create the Cosmos DB structure",id:"create-the-cosmos-db-structure",children:[]},{value:"Export Azure Cosmos DB Emulator certificates to use in the Java Application",id:"export-azure-cosmos-db-emulator-certificates-to-use-in-the-java-application",children:[]},{value:"Determine which root certificates have been installed",id:"determine-which-root-certificates-have-been-installed",children:[]}]}],b={rightToc:u};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"set-up-cosmos-db-emulator-locally"},"Set up Cosmos DB Emulator locally"),Object(n.b)("p",null,"The Azure CosmosDB Emulator provides a local environment that emulates the Azure Cosmos DB\nservice for development purposes. Using the Azure CosmosDB Emulator, you can develop and test\nyour application locally, without creating an Azure subscription or incurring any costs.\nLatest instruction can be found in ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=cli%2Cssl-netstd21"}),"here")),Object(n.b)("h3",{id:"using-the-cosmos-db-emulator-to-run-the-database-locally"},"Using the Cosmos DB Emulator to run the database locally"),Object(n.b)("p",null,"Download and install the latest version of ",Object(n.b)("strong",{parentName:"p"},"CosmosDB Emulator"),". Once it's installed, it will be\navailable on ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://localhost:8081/_explorer/index.html"}),"localhost"),"."),Object(n.b)(c.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(n.b)(s.a,{value:"windows",mdxType:"TabItem"},"You can also find the Emulator from Start Menu and type Azure CosmosDB Emulator."),Object(n.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"CosmosDB Emulator")," service is primarily a Windows service, so using it in Unix/Linux/MacOS requires a few\nadditional steps. One of the simplest ways of running the emulator is to download\nthe ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/linux-emulator"}),"Linux Emulator")," for Docker.\nPlease follow the installation instructions, with one exception: when running the Docker image, don't set\nthe ",Object(n.b)("inlineCode",{parentName:"p"},"AZURE_COSMOS_EMULATOR_IP_ADDRESS_OVERRIDE=$ipaddr"),". Instead, set it to ",Object(n.b)("inlineCode",{parentName:"p"},"127.0.0.1"),"."))),Object(n.b)("p",null,"The value for ",Object(n.b)("inlineCode",{parentName:"p"},"COSMOSDB_KEY")," can be found within the emulator. See Primary Key:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"cosmosdb",src:a(240).default}),"\nSet the cosmosdb URI, databaseName and key in ",Object(n.b)("inlineCode",{parentName:"p"},"application.yml")," file using the value above"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"azure:\n cosmosdb:\n   uri: xxxxxx\n   database: xxxxxx\n   key: xxxxxx\n")),Object(n.b)("h3",{id:"create-the-cosmos-db-structure"},"Create the Cosmos DB structure"),Object(n.b)("p",null,"Based on the template the CosmosDB has to contain a fixed structure."),Object(n.b)("p",null,"Create a collection ",Object(n.b)("strong",{parentName:"p"},"Stacks")," with a container id ",Object(n.b)("strong",{parentName:"p"},"menu")," and the partition key ",Object(n.b)("strong",{parentName:"p"},"/id"),"."),Object(n.b)("p",null,"Create a database called Stacks for the application, and a database called CosmosDBPackage for the\nintegration tests of the CosmosDB package"),Object(n.b)("p",null,Object(n.b)("img",{alt:"cosmosdb",src:a(241).default})),Object(n.b)("br",null),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"Stacks")," database should have a container called ",Object(n.b)("strong",{parentName:"p"},"Menu")," partitioned by ",Object(n.b)("strong",{parentName:"p"},"/id"),"."),Object(n.b)("p",null,Object(n.b)("img",{alt:"cosmosdb",src:a(256).default})),Object(n.b)("br",null),Object(n.b)("h3",{id:"export-azure-cosmos-db-emulator-certificates-to-use-in-the-java-application"},"Export Azure Cosmos DB Emulator certificates to use in the Java Application"),Object(n.b)(c.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(n.b)(s.a,{value:"windows",mdxType:"TabItem"},"Start the Windows Certificate manager by running certlm.msc and navigate to the Personal->Certificates folder and open the certificate with the friendly name DocumentDbEmulatorCertificate.",Object(n.b)("p",null,Object(n.b)("img",{alt:"certificates",src:a(257).default})),Object(n.b)("p",null,"Follow the steps in ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator-export-ssl-certificates#export-emulator-certificate"}),"Export the Azure Cosmos DB TLS/SSL certificate"),"\nAlso Export CosmosEmulatorSecretes following the above link."),Object(n.b)("h3",{id:"determine-which-root-certificates-have-been-installed"},"Determine which root certificates have been installed"),Object(n.b)("p",null,"Follow the steps to determine which root certificates have been installed ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/developer/java/sdk/java-sdk-add-certificate-ca-store#determining-which-root-certificates-are-installed"}),"Add Root certificate")),Object(n.b)("p",null,"Now import the documentdbemulatorcert and CosmosEmulatorSecrets certificate."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'keytool -keystore "location to download the root certificate" -cacerts -importcert -alias documentdbemulator -file "location of documentdbemulatorcert.cer"\n')),Object(n.b)("p",null,'type the password when prompted "changeit" (This should be the same if you haven\'t changed it when listing the certificates).\nIf asked "do you trust this certificate" type in "y".'),Object(n.b)("p",null,"follow the above steps to import cosmosemulatorsecrets certificate"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'keytool -keystore "location to download the root certificate" -cacerts -importcert -alias cosmosemulatorcert -file "location of cosmosemulatorsecrets.cer"\n')),Object(n.b)("p",null,"Go to URL in your browser:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Firefox"),' -- click on HTTPS certificate chain (the lock icon right next to URL address). Click "more info" > "security" > "show certificate" > "details" > "export..". Pickup the name and choose file type example.cer.'),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Chrome"),'  -- click on site icon left to address in address bar, select "Certificate" -> "Details" -> "Export" and save in format "Der-encoded binary, single certificate".'),Object(n.b)("p",null,"Now running the below should list 4 certificates."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"keytool -list -keystore cacerts\n"))),Object(n.b)(s.a,{value:"unix",mdxType:"TabItem"},Object(n.b)("h4",{id:"download-the-certificate"},"Download the certificate"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"curl -k https://localhost:8081/_explorer/emulator.pem > emulatorcert.crt\n")),Object(n.b)("h4",{id:"import-to-java-trust-store"},"Import to Java trust store"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"keytool -importcert -cacerts -alias documentdbemulator -file <path to emulatorcert.crt>\n")),Object(n.b)("p",null,"In order to make sure the certificate is there, you can run the following:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"keytool -list -cacerts | grep -A1 documentdbemulator\n")))))}d.isMDXComponent=!0},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(a),m=o,p=b["".concat(c,".").concat(m)]||b[m]||d[m]||n;return a?r.a.createElement(p,s(s({ref:t},l),{},{components:a})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,c=new Array(n);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<n;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},225:function(e,t,a){"use strict";function o(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},227:function(e,t,a){"use strict";var o=a(0),r=Object(o.createContext)(void 0);t.a=r},228:function(e,t,a){"use strict";var o=a(0),r=a(227);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},230:function(e,t,a){"use strict";var o=a(0),r=a.n(o),n=a(228),c=a(225),s=a(52),i=a.n(s),l=37,u=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,b=e.values,d=e.groupId,m=Object(n.a)(),p=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(o.useState)(s),O=h[0],j=h[1],v=Object(o.useState)(!1),y=v[0],g=v[1];if(null!=d){var w=p[d];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&j(w)}var _=function(e){j(e),null!=d&&f(d,e)},x=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},C=function(){g(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",C)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),k(e)},onFocus:function(){return _(t)},onClick:function(){_(t),g(!1)},onPointerDown:function(){return g(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},231:function(e,t,a){"use strict";var o=a(0),r=a.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}},240:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_3-ddb539bc14733fdf2bc3cb8dc022cf09.png"},241:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_1-eb5c6355a0662db45234724a920edac3.png"},256:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_2-ea8bcc2395126bc2cb4826568d1b256d.png"},257:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_certificate-3ebcfb8c1a7eface5852be7e3ba17061.png"}}]);