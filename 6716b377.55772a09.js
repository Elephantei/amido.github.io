(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var o=a(2),r=a(6),c=(a(0),a(222)),n={id:"setting_up_cosmos_db_locally_java_cqrs",title:"Cosmos DB Emulator",sidebar_label:"Cosmos DB Emulator",hide_title:!1,hide_table_of_contents:!0,description:"How to set up the Cosmos DB Emulator",keywords:["cosmos db","emulator","settings","template","certificate"]},s={unversionedId:"workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",id:"workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",isDocsHomePage:!1,title:"Cosmos DB Emulator",description:"How to set up the Cosmos DB Emulator",source:"@site/docs/workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",permalink:"/docs/workloads/azure/backend/java_cqrs/setting_up_cosmos_db_locally_java_cqrs",version:"current",sidebar_label:"Cosmos DB Emulator",sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/workloads/azure/backend/java_cqrs/requirements_java_cqrs"},next:{title:"Getting started with the Java Rest API application",permalink:"/docs/workloads/azure/backend/java_cqrs/quickstart_java_cqrs"}},l=[{value:"Set up Cosmos DB Emulator locally",id:"set-up-cosmos-db-emulator-locally",children:[{value:"Using the Cosmos DB Emulator to run the database locally",id:"using-the-cosmos-db-emulator-to-run-the-database-locally",children:[]},{value:"Create the Cosmos DB structure",id:"create-the-cosmos-db-structure",children:[]},{value:"Export Azure Cosmos DB Emulator certificates to use in the Java Application",id:"export-azure-cosmos-db-emulator-certificates-to-use-in-the-java-application",children:[]},{value:"Determine which root certificates have been installed",id:"determine-which-root-certificates-have-been-installed",children:[]}]}],i={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"set-up-cosmos-db-emulator-locally"},"Set up Cosmos DB Emulator locally"),Object(c.b)("p",null,"The Azure Cosmos emulator provides a local environment that emulates the Azure Cosmos DB\nservice for development purposes. Using the Azure Cosmos emulator, you can develop and test\nyour application locally, without creating an Azure subscription or incurring any costs.\nLatest instruction can be found in ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=cli%2Cssl-netstd21"}),"here")),Object(c.b)("h3",{id:"using-the-cosmos-db-emulator-to-run-the-database-locally"},"Using the Cosmos DB Emulator to run the database locally"),Object(c.b)("p",null,"   Download and install the latest version of CosmosDB Emulator. Once it's installed it will be\navailable on ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://localhost:8081/_explorer/index.html"}),"localhost")),Object(c.b)("p",null,"   You can also find the Emulator from Start Menu and type Azure Cosmos DB Emulator.\nThe value for ",Object(c.b)("strong",{parentName:"p"},"COSMOSDB_KEY")," can be found within the emulator. See Primary Key:"),Object(c.b)("p",null,"   ",Object(c.b)("img",{alt:"cosmosdb",src:a(239).default}),"\nSet the cosmosdb URI, databaseName and key in application.yml file using the value above"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"azure:\n  cosmosdb:\n    uri: xxxxxx\n    database: xxxxxx\n    key: xxxxxx\n")),Object(c.b)("br",null),Object(c.b)("h3",{id:"create-the-cosmos-db-structure"},"Create the Cosmos DB structure"),Object(c.b)("p",null,"  Based on the template the Cosmos DB has to contain a fixed structure."),Object(c.b)("p",null,"  Create a collection ",Object(c.b)("strong",{parentName:"p"},"Stacks")," with a container id ",Object(c.b)("strong",{parentName:"p"},"menu")," and the partition key ",Object(c.b)("strong",{parentName:"p"},"/id"),"."),Object(c.b)("p",null,"  Create a database called Stacks for the application, and a database called CosmosDBPackage for the\nintegration tests of the CosmosDB package"),Object(c.b)("p",null,"  ",Object(c.b)("img",{alt:"cosmosdb",src:a(240).default})),Object(c.b)("br",null),Object(c.b)("p",null,"  The ",Object(c.b)("strong",{parentName:"p"},"Stacks")," database should have a container called ",Object(c.b)("strong",{parentName:"p"},"Menu")," partitioned by ",Object(c.b)("strong",{parentName:"p"},"/id"),"."),Object(c.b)("p",null,"  ",Object(c.b)("img",{alt:"cosmosdb",src:a(255).default})),Object(c.b)("br",null),Object(c.b)("h3",{id:"export-azure-cosmos-db-emulator-certificates-to-use-in-the-java-application"},"Export Azure Cosmos DB Emulator certificates to use in the Java Application"),Object(c.b)("p",null,"  Start the Windows Certificate manager by running certlm.msc and navigate to the Personal->Certificates folder and open the certificate with the friendly name DocumentDbEmulatorCertificate."),Object(c.b)("br",null),Object(c.b)("p",null,"  ",Object(c.b)("img",{alt:"certificates",src:a(256).default})),Object(c.b)("br",null),Object(c.b)("p",null,"  Follow the steps in ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator-export-ssl-certificates#export-emulator-certificate"}),"Export the Azure Cosmos DB TLS/SSL certificate"),"\nAlso Export CosmosEmulatorSecretes following the above link."),Object(c.b)("h3",{id:"determine-which-root-certificates-have-been-installed"},"Determine which root certificates have been installed"),Object(c.b)("p",null,"   Follow the steps to determine which root certificates have been installed ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/developer/java/sdk/java-sdk-add-certificate-ca-store#determining-which-root-certificates-are-installed"}),"Add Root certificate")),Object(c.b)("p",null,"   Now import the documentdbemulatorcert and CosmosEmulatorSecrets certificate."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'keytool -keystore "location to download the root certificate" -cacerts -importcert -alias documentdbemulator -file "location of documentdbemulatorcert.cer"\n')),Object(c.b)("p",null,'   type the password when prompted "changeit" (This should be the same if you haven\'t changed it when listing the certificates).\nIf asked "do you trust this certificate" type in "y".'),Object(c.b)("p",null,"   follow the above steps to import cosmosemulatorsecrets certificate"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'keytool -keystore "location to download the root certificate" -cacerts -importcert -alias cosmosemulatorcert -file "location of cosmosemulatorsecrets.cer"\n')),Object(c.b)("p",null,"   Go to URL in your browser:"),Object(c.b)("p",null,"   ",Object(c.b)("strong",{parentName:"p"},"Firefox"),' --  click on HTTPS certificate chain (the lock icon right next to URL address). Click "more info" > "security" > "show certificate" > "details" > "export..". Pickup the name and choose file type example.cer.'),Object(c.b)("p",null,"   ",Object(c.b)("strong",{parentName:"p"},"Chrome"),'  -- click on site icon left to address in address bar, select "Certificate" -> "Details" -> "Export" and save in format "Der-encoded binary, single certificate".'),Object(c.b)("p",null,"   Now running the below should list 4 certificates."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"keytool -list -keystore cacerts\n")))}u.isMDXComponent=!0},222:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var o=a(0),r=a.n(o);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)a=c[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)a=c[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,n=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(a),m=o,p=b["".concat(n,".").concat(m)]||b[m]||d[m]||c;return a?r.a.createElement(p,s(s({ref:t},i),{},{components:a})):r.a.createElement(p,s({ref:t},i))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,n=new Array(c);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var i=2;i<c;i++)n[i]=a[i];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},239:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_3-ddb539bc14733fdf2bc3cb8dc022cf09.png"},240:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_1-eb5c6355a0662db45234724a920edac3.png"},255:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_2-ea8bcc2395126bc2cb4826568d1b256d.png"},256:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/cosmosdb_emulator_certificate-3ebcfb8c1a7eface5852be7e3ba17061.png"}}]);