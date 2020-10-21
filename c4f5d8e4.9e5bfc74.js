(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{133:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),o=a.n(l),r=a(169),c=a(177),i=a(173),s=a(170),m=a(174),u=a(134),d=a.n(u),p=a(244),v=[{title:"Accelerates architecture setup",description:o.a.createElement(o.a.Fragment,null,"Stacks helps you to build a solid foundation, meaning that you can focus on solving the project challenges more quickly. You no longer have to re-invent the wheel for every new project!")},{title:"De-risks delivery of digital transformation",description:o.a.createElement(o.a.Fragment,null,"Through our extensive experience, we have made educated and opinionated decisions on tools, frameworks and platforms. Being open source we also encourage reviews and developer input on these decisions.")},{title:"Solutions to build, test and deploy",description:o.a.createElement(o.a.Fragment,null,"Behind our boilerplate projects, we use Terraform, Kubernetes, and pipeline as code with other amazing tools to deploy your tested application. Advanced configuration for multiple cloud providers and offer no lock-in.")}];function f(e){var t=e.title,a=e.content,n=e.command;e.imageUrl;return o.a.createElement("div",{className:Object(r.a)("col col--6",d.a.tryOut)},o.a.createElement("h3",null,t),o.a.createElement("p",null,a),o.a.createElement("pre",null,n))}function b(e){var t=e.imageUrl,a=Object(m.a)(t);return o.a.createElement("div",{className:Object(r.a)("col col--6",d.a.tryOut)},o.a.createElement("img",{src:a}))}function E(e){var t=e.imageUrl,a=e.title,n=e.description;Object(m.a)(t);return o.a.createElement("div",{className:Object(r.a)("col col--4",d.a.feature)},o.a.createElement("h3",null,a),o.a.createElement("p",null,n))}function g(){var e=Object(l.useState)(void 0),t=e[0],a=e[1],n=Object(l.useState)(void 0),c=n[0],s=n[1],u=Object(l.useState)(void 0),v=u[0],f=u[1],b=Object(m.a)("docs/"),E={Azure:{"Frontend Web App":{SSR:"workloads/azure/frontend/cli_webapp_frameworks",CSR:"workloads/azure/frontend/cli_webapp_frameworks"}}},g=Object.keys(E).map((function(e){return{value:E[e],label:e}})),h=t?Object.keys(t.value).map((function(e){return{value:t.value[e],label:e}})):[],w=c?Object.keys(c.value).map((function(e){return{value:c.value[e],label:e}})):[];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"col col--6",style:{color:"black",display:"flex",flexDirection:"column",gap:"20px"}},o.a.createElement(p.a,{value:t,onChange:function(e){a(e)},options:g}),t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{value:c,onChange:function(e){s(e)},options:h})),c&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{value:v,onChange:function(e){f(e)},options:w})),v&&o.a.createElement("div",{className:d.a.buttons,style:{marginTop:20}},o.a.createElement(i.a,{className:Object(r.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:b+v.value},"Lets Go!"))))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return o.a.createElement(c.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},o.a.createElement("header",{className:Object(r.a)("hero hero--primary",d.a.heroBanner)},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"hero__title"},t.title),o.a.createElement("p",{className:"hero__subtitle"},t.tagline),o.a.createElement("div",{className:d.a.buttons},o.a.createElement(g,null)))),o.a.createElement("main",null,v&&v.length>0&&o.a.createElement("section",{className:d.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},v.map((function(e,t){return o.a.createElement(E,Object(n.a)({key:t},e))}))))),o.a.createElement("section",{className:d.a.tryOut},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(f,{title:"Get started in as little as 5 commands",content:"Amido Stacks let you focus on the problem, not the tools or setup. To start creating your project run this command to interactively guide:",command:"npx @amidostacks/scaffolding-cli run -i"}),o.a.createElement(b,{imageUrl:"https://amidostacksassets.blob.core.windows.net/docs/assets/npx_amidostacks_scaffolding_cli_run_i.gif"}))))))}}}]);