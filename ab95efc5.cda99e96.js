(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),i=(t(0),t(150)),a={id:"configure_swagger_netcore",title:"Configure Swagger",sidebar_label:"Swagger"},c={unversionedId:"workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore",id:"workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore",isDocsHomePage:!1,title:"Configure Swagger",description:"The document generation configuration is done in the Startup class of your API, within the ConfigureServices(IServiceCollection services) method, we need to make a call to the extension method AddSwaggerGen(Action setupAction) passing an action to generate the documentation options.",source:"@site/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore.md",slug:"/workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore",permalink:"/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore.md",version:"current",sidebar_label:"Swagger",sidebar:"docs",previous:{title:"Deploying the application",permalink:"/stacks/docs/workloads/netcore/quickstart/deploy_project_netcore"},next:{title:"Configure Swagger UI",permalink:"/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore"}},s=[],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The document generation configuration is done in the Startup class of your API, within the ConfigureServices(IServiceCollection services) method, we need to make a call to the extension method ",Object(i.b)("inlineCode",{parentName:"p"},"AddSwaggerGen(Action<SwaggerGenOptions> setupAction)")," passing an action to generate the documentation options."),Object(i.b)("p",null,"Each call to AddSwaggerGen() will generate a new document, the parameters passed to it will be used to configure the rules for document generation, the output of a document generation is a simple JSON file, by default the file(spec) will be available on ",Object(i.b)("inlineCode",{parentName:"p"},"/swagger/versionName/swagger.json.")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Startup.cs (Register doc generation)"',title:'"Startup.cs',"(Register":!0,doc:!0,'generation)"':!0}),'public class Startup\n{\n    public IConfiguration Configuration { get; }\n    private readonly IHostingEnvironment _hostingEnv;\n\n    public Startup(IHostingEnvironment env, IConfiguration configuration)\n    {\n        _hostingEnv = env;\n        Configuration = configuration;\n    }\n\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services\n            .AddMvcCore()\n            .AddApiExplorer()\n            ... Omit for brevity ...;\n\n        services\n            .AddSwaggerGen(c =>\n            {\n                //defines the doc version\n                c.SwaggerDoc("v1", new Info\n                {\n                    Version = "v1",\n                    Title = "API",\n                    Description = "APIs endpoints"\n                });\n\n                //will generate models containing only the class name, ignoring the namespace\n                c.CustomSchemaIds(type => type.FriendlyId(false));\n\n                //Enum will be generated as strings\n                c.DescribeAllEnumsAsStrings();\n\n                //Will load the comments provided in the code using / / / , the build will generate the xml file in the output folder.\n                // Make sure the project file contains the attribute <GenerateDocumentationFile>true</GenerateDocumentationFile>\n                c.IncludeXmlComments($"{AppContext.BaseDirectory}{Path.DirectorySeparatorChar}{_hostingEnv.ApplicationName}.xml");\n\n                // Show only operations where route starts with v1\n                c.DocumentFilter<VersionPathFilter>("/v1");\n\n                // Include DataAnnotation attributes on Controller Action parameters as Swagger validation rules (e.g required, pattern, ..)\n                // Enforce parameters provided in the path to be required\n                // Use [ValidateModelState] on Actions to actually validate it in C# as well!\n                c.OperationFilter<GeneratePathParamsValidationFilter>();\n            });\n    }\n}\n')),Object(i.b)("p",null,"The snippet above demonstrates the usage of .AddSwaggerGen() to register the document generation. The output of this snipped will generate a document found on the following path ",Object(i.b)("inlineCode",{parentName:"p"},"/swagger/v1/swagger.json")))}u.isMDXComponent=!0},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},g=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(t),d=r,f=g["".concat(a,".").concat(d)]||g[d]||p[d]||i;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);