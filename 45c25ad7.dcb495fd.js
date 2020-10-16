(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=o.a.createContext({}),l=function(e){var t=o.a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(g.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return n?o.a.createElement(b,c(c({ref:t},g),{},{components:n})):o.a.createElement(b,c({ref:t},g))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var g=2;g<i;g++)a[g]=n[g];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger-ui-info-6770d7c76d6846ad13f91895148c2c94.png"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(150)),a={id:"configure_swagger_ui_netcore",title:"Configure Swagger UI",sidebar_label:"Swagger UI"},c={unversionedId:"workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore",id:"workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore",isDocsHomePage:!1,title:"Configure Swagger UI",description:"Configure the Swagger U.Interface to consume the generated documents",source:"@site/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore.md",slug:"/workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore",permalink:"/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_ui_netcore.md",version:"current",sidebar_label:"Swagger UI",sidebar:"docs",previous:{title:"Configure Swagger",permalink:"/stacks/docs/workloads/netcore/quickstart/swagger_configuration/configure_swagger_netcore"},next:{title:"Logging with Serilog and Application Insights",permalink:"/stacks/docs/workloads/netcore/logging_netcore"}},s=[],g={rightToc:s};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Configure the Swagger U.Interface to consume the generated documents\nOnce we get a OpenAPI spec, we need to configure swagger UI to load the spec generated in the step above, the process achievable simply by using the extension UseSwaggerUI() passing the spec path to the method SwaggerEndpoint()."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Startup.cs (Configure UI to load spec)"',title:'"Startup.cs',"(Configure":!0,UI:!0,to:!0,load:!0,'spec)"':!0}),'public class Startup\n{\n    public Startup(IHostingEnvironment env, IConfiguration configuration){... Omit for brevity ...}\n\n    public void ConfigureServices(IServiceCollection services){ ... Omit for brevity ... }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IHostingEnvironment env)\n    {\n        app\n            .UseMvc()\n            .UseSwagger()\n            .UseSwaggerUI(c =>\n            {\n                //Display the OperationID (ActionName) in the UI\n                c.DisplayOperationId();\n\n                //Load the document generated by AddSwaggerGen() inside ConfigureServices()\n                c.SwaggerEndpoint("v1/swagger.json", "Menu (version 1)");\n            });\n    }\n}\n')),Object(i.b)("p",null,"The above snippet register the v1/swagger.json in the UI, once the UI is loaded, it will try to load the documents registered by SwaggerEndpoint();"),Object(i.b)("p",null,"For registering multiple spec versions, simply register multiple document generations by calling the .AddSwaggerGen(c => ...) multiple times, changing just the document filter from /v1 to the version desired. ie:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Swagger multiple doc spec"',title:'"Swagger',multiple:!0,doc:!0,'spec"':!0}),'From:\nSwaggerDoc("v1", new Info());\nc.DocumentFilter<VersionPathFilter>("/v1");\n\nTo:\nSwaggerDoc("v2", new Info());\nc.DocumentFilter<VersionPathFilter>("/v2");\n')),Object(i.b)("p",null,"And register the new endpoint in the UI like below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Swagger UI registration"',title:'"Swagger',UI:!0,'registration"':!0}),'app\n    .UseMvc()\n    .UseSwagger()\n    .UseSwaggerUI(c =>\n    {\n        //Display the OperationID (ActionName) in the UI\n        c.DisplayOperationId();\n\n        //Load the document generated by AddSwaggerGen() inside ConfigureServices()\n        c.SwaggerEndpoint("v1/swagger.json", "Menu (version 1)");\n        c.SwaggerEndpoint("v2/swagger.json", "Menu (version 2)");\n    });\n')),Object(i.b)("p",null,"When multiple versions are available, might be useful to register a general spec with all endpoints"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Swagger default spec with all endpoints"',title:'"Swagger',default:!0,spec:!0,with:!0,all:!0,'endpoints"':!0}),'SwaggerDoc("all", new Info());\n//c.DocumentFilter<VersionPathFilter>("/v2"); //Remove the filter\n')),Object(i.b)("p",null,"Annotate controllers with endpoint details to group in the right spec\nOpenAPI uses the concept of tags to group endpoints related to the same resource type, each tag will represent a group in the swagger ui."),Object(i.b)("p",null,"By default, Swagger doc generation creates a tag using the controller name, this way, multiple actions(endpoints) found inside the same controller will be grouped in the same tag."),Object(i.b)("p",null,"The problem with this approach is that makes it harder to group endpoints if they are located on different controllers, to avoid this problem, we can configure swagger to group the endpoints by ApiGroup."),Object(i.b)("p",null,"ApiGroup is a concept introduced in ASP.NET Core, we decorate the controller with the attribute ApiExplorerSettingsAttribute, and set the GroupName to the Tag expected in swagger. i.e:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Controller decorated with Api Group"',title:'"Controller',decorated:!0,with:!0,Api:!0,'Group"':!0}),'[ApiExplorerSettings(GroupName = "Category")]\npublic class AddMenuCategoryController : ControllerBase { ... actions ... }\n')),Object(i.b)("p",null,"The trick details is, when we group api endpoints by something other than the default group, we have to change the c.DocInclusionPredicate() filter that uses the default group, otherwise the endpoints won't be included in the docs."),Object(i.b)("p",null,"We also have to tell swagger how to group endpoints by passing the group predicate to the method c.TagActionsBy(),"),Object(i.b)("p",null,"Once we configure the endpoints with the group names, we add the following code to the swagger doc generation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="Swagger configuration for ApiGroup"',title:'"Swagger',configuration:!0,for:!0,'ApiGroup"':!0}),'services.AddSwaggerGen(c => {\n\n    //By Default, all endpoints are grouped by the controller name\n    //We want to Group by Api Group first, then by controller name if group not provided\n    c.TagActionsBy((api) => new[] { api.GroupName ?? api.ActionDescriptor.RouteValues["controller"] });\n\n    //Include all endpoints available in the document\n    c.DocInclusionPredicate((docName, apiDesc) => { return true; });\n});\n')),Object(i.b)("p",null,"Once you configure all steps above, you should have a swagger ui like below:\n",Object(i.b)("img",{alt:"Swagger UI",src:n(219).default})))}l.isMDXComponent=!0}}]);