(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{172:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),c=(r(0),r(216)),o=r(218),i={id:"infrastructure_java_cqrs",title:"Java REST API with CQRS - Azure Infrastructure",sidebar_label:"Infrastructure",description:"Java REST API with CQRS - Azure Infrastructure",keywords:["java","rest","api","cqrs","azure","infrastructure","ingress","service","aks"]},l={unversionedId:"workloads/azure/backend/java_cqrs/infrastructure_java_cqrs",id:"workloads/azure/backend/java_cqrs/infrastructure_java_cqrs",isDocsHomePage:!1,title:"Java REST API with CQRS - Azure Infrastructure",description:"Java REST API with CQRS - Azure Infrastructure",source:"@site/docs/workloads/azure/backend/java_cqrs/infrastructure_java_cqrs.md",slug:"/workloads/azure/backend/java_cqrs/infrastructure_java_cqrs",permalink:"/docs/workloads/azure/backend/java_cqrs/infrastructure_java_cqrs",version:"current",sidebar_label:"Infrastructure",sidebar:"docs",previous:{title:"Java Rest API Structure",permalink:"/docs/workloads/azure/backend/java_cqrs/structure_java_cqrs"},next:{title:"Java REST API with CQRS - Azure DevOps Pipeline",permalink:"/docs/workloads/azure/backend/java_cqrs/pipeline_java_cqrs"}},u=[{value:"Overview",id:"overview",children:[{value:"Diagram",id:"diagram",children:[]},{value:"Resource List",id:"resource-list",children:[]}]},{value:"Deploying",id:"deploying",children:[{value:"Pipelines",id:"pipelines",children:[]},{value:"Running Locally",id:"running-locally",children:[]}]}],s={rightToc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"This page present the high level design of the reference implementation of the Java Stacks\napplication which is based on Spring Boot REST API with CQRS."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"This page assumes that the core infrastructure has already been provisioned. Instructions and additional information on the core infrastructure can be found ",Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"/docs/infrastructure/azure/core_infrastructure"}),"here"))),Object(c.b)("p",null,"Both the diagram and resource list below are for a single environment. By default, the pipeline template will create two environments (dev and prod)."),Object(c.b)("h3",{id:"diagram"},"Diagram"),Object(c.b)("img",{alt:"Azure Java API Infrastructure",src:Object(o.a)("img/azure_rest_api_infrastructure.png")}),Object(c.b)("h3",{id:"resource-list"},"Resource List"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Resource"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Resource Group - Core",Object(c.b)("strong",{parentName:"td"},"*")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to logically group core infrastructure")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AKS",Object(c.b)("strong",{parentName:"td"},"*")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Azure Kubernetes Service")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Public DNS Record"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DNS record pointing Ingress (via application gateway",Object(c.b)("strong",{parentName:"td"},"*")," and internal load balancer",Object(c.b)("strong",{parentName:"td"},"*"),")")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ACR",Object(c.b)("strong",{parentName:"td"},"*")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Azure Container Registry")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Namespace: {env}-api"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes namespace for the environment")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ingress"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes Ingress to handle routing to Service")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Service"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes Service to handle routing to Deployment Pods")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deployment"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes Deployment for managing Pods")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Resource Group - API"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to logically group API specific infrastructure")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cosmos DB"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Azure managed NoSQL database")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"*")," ",Object(c.b)("em",{parentName:"p"},"Resource is created by the core infrastructure deployment.")),Object(c.b)("h2",{id:"deploying"},"Deploying"),Object(c.b)("h3",{id:"pipelines"},"Pipelines"),Object(c.b)("p",null,"The following pipelines are currently supported for automating the deployment:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/workloads/azure/backend/java_cqrs/pipeline_java_cqrs"}),"Azure DevOps"))),Object(c.b)("h3",{id:"running-locally"},"Running Locally"),Object(c.b)("p",null,"Currently, vars.tf and provider configuration is not\nautomatically updated. Future iterations will include this."),Object(c.b)("p",null,"The safest way to run and maintain this locally is to rely on Docker and environment\nvariables as that is the way the pipeline will trigger the\nexecutions of Terraform."),Object(c.b)("p",null,"Sample commands with example environment vars:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# Navigate to the infra directory\ncd ${YOUR_DIRECTORY_PATH}/deploy/azure/app/kube\n\n# Run Amido Terraform Docker container\ndocker run -v $(pwd):/usr/data --rm -it amidostacks/ci-tf:0.0.4 /bin/bash\n\n###########################################################################\n# All commands from this point should be executed in the Docker container #\n###########################################################################\n\n# Navigate to /usr/data directory\ncd /usr/data\n\n# Export Azure Credentials. Replace the example values.\nexport ARM_CLIENT_ID=1111-2222-3333-444 \\\nARM_CLIENT_SECRET=1111-2222-3333-4444 \\\nARM_SUBSCRIPTION_ID=1111-2222-3333-444 \\\nARM_TENANT_ID=1111-2222-3333-444\n\n# Export Terraform variables. Replace the example values.\nexport TF_VAR_name_company=amido \\\nTF_VAR_name_project=example \\\nTF_VAR_name_domain=menu-api \\\nTF_VAR_name_component=api \\\nTF_VAR_name_role=backend \\\nTF_VAR_name_environment=dev \\\nTF_VAR_attributes=[] \\\nTF_VAR_tags={} \\\nTF_VAR_resource_group_location=uksouth \\\nTF_VAR_app_gateway_frontend_ip_name=amido-example-nonprod-uks-core \\\nTF_VAR_dns_record=dev-menu-api \\\nTF_VAR_dns_zone_name=nonprod.amidostacks.com \\\nTF_VAR_dns_zone_resource_group=amido-example-nonprod-uks-core \\\nTF_VAR_core_resource_group=amido-example-nonprod-uks-core \\\nTF_VAR_internal_dns_zone_name=nonprod.amidostacks.internal \\\nTF_VAR_create_cosmosdb=true \\\nTF_VAR_create_cache=false \\\nTF_VAR_create_dns_record=true \\\nTF_VAR_create_cdn_endpoint=false \\\nTF_VAR_cosmosdb_sql_container=Menu \\\nTF_VAR_cosmosdb_sql_container_partition_key=/id \\\nTF_VAR_cosmosdb_kind=GlobalDocumentDB \\\nTF_VAR_cosmosdb_offer_type=Standard \\\nTF_VAR_app_insights_name=amido-example-nonprod-uks-core\n\n# Initial Terraform. Replace the example values.\nterraform init \\\n-backend-config="resource_group_name=amido-stacks-terraform" \\\n-backend-config="storage_account_name=amidostacksterraform" \\\n-backend-config="container_name=tfstate" \\\n-backend-config="key=example-menu-api"\n\n# Select or create the "dev" workspace.\nterraform workspace select dev || terraform workspace new dev\n\n# Check the plan matches your expected changes.\nterraform plan\n')))}b.isMDXComponent=!0},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},217:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},218:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(217),a=r(220);function c(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,o=c.forcePrependBaseUrl,i=void 0!==o&&o,l=c.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+s:s}(c,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},220:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);