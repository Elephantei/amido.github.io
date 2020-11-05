(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{178:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(178)),l={id:"cms",title:"Contentful Integration",sidebar_label:"CMS - Contentful Integration",hide_title:!1,hide_table_of_contents:!1},c={unversionedId:"workloads/azure/frontend/cms",id:"workloads/azure/frontend/cms",isDocsHomePage:!1,title:"Contentful Integration",description:"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f\ud83d\udea7",source:"@site/docs/workloads/azure/frontend/CMS.md",slug:"/workloads/azure/frontend/cms",permalink:"/stacks/docs/workloads/azure/frontend/cms",version:"current",sidebar_label:"CMS - Contentful Integration",sidebar:"docs",previous:{title:"Getting Started",permalink:"/stacks/docs/workloads/azure/frontend/cli_webapp_frameworks_ssr"},next:{title:"Identity using Auth0",permalink:"/stacks/docs/workloads/azure/frontend/identity"}},i=[{value:"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f\ud83d\udea7",id:"\ufe0f-important-\u2640\ufe0f",children:[]},{value:"Tools used",id:"tools-used",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Using Contentful",id:"using-contentful",children:[{value:"Requirements",id:"requirements",children:[]}]},{value:"Set the default local to en-GB",id:"set-the-default-local-to-en-gb",children:[]},{value:"Set up the tokens",id:"set-up-the-tokens",children:[]},{value:"Importing content with the Contentful CLI",id:"importing-content-with-the-contentful-cli",children:[]},{value:"Content model",id:"content-model",children:[{value:"<strong>Author</strong>",id:"author",children:[]},{value:"Step 3. Populate content",id:"step-3-populate-content",children:[]}]},{value:"To Run",id:"to-run",children:[]},{value:"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f",id:"\ufe0f-important-\u2640\ufe0f-1",children:[{value:"References",id:"references",children:[]},{value:"https://next-blog-contentful.now.sh/",id:"httpsnext-blog-contentfulnowsh",children:[]}]},{value:"Localization and Internationalization",id:"localization-and-internationalization",children:[{value:"For the purposes of demo",id:"for-the-purposes-of-demo",children:[]}]}],s={rightToc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\ufe0f-important-\u2640\ufe0f"},"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f\ud83d\udea7"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please note CMS is an optional feature included in the Stacks workspace. To\nturn off CMS please remove the folder ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../src/ssr/pages/cms"}),"/cms")," inside\nssr/pages before building and make sure the tsconfig does not include these\nfiles.")),Object(r.b)("p",null,"This implementation showcases NextJS's Static Generation feature using\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/"}),"Contentful")," as the data source."),Object(r.b)("h2",{id:"tools-used"},"Tools used"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.contentful.com/"}),"Contentful")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@contentful/rich-text-react-renderer"}),"Rich-text-react-renderer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://nextjs.org/docs/basic-features/pages#pre-rendering"}),"NextJS-Pre Rendering"))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Create an account and a space on Contentful"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"First,\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/sign-up/"}),"create an account on Contentful"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After creating an account, create a new empty ",Object(r.b)("strong",{parentName:"p"},"space")," from the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.contentful.com/"}),"dashboard"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create the\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.contentful.com/developers/docs/references/content-delivery-api/"}),"Content Delivery API")," -\naccess token")," field of your API key")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create the\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.contentful.com/developers/docs/references/content-preview-api/"}),"Content Preview API")," -\npreview token")," field of your API key"))),Object(r.b)("h2",{id:"using-contentful"},"Using Contentful"),Object(r.b)("h3",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A (free) ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.contentful.com/sign-up/"}),"Contentful account")),Object(r.b)("li",{parentName:"ul"},"Locally\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.contentful.com/developers/docs/tutorials/cli/installation/"}),"installed"),"\ncontentful-cli"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.contentful.com/developers/docs/tutorials/cli/authentication/"}),"Authenticated"),"\nwith contentful-cli")),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/"}),"Contentful")," for more information."),Object(r.b)("h2",{id:"set-the-default-local-to-en-gb"},"Set the default local to en-GB"),Object(r.b)("p",null,"You can change the local in Contentful, note that default in Contentful is\nen-US:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_locales.png",alt:"Contentful Management Token"}))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Please updated the environment variable\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../src/ssr/environment-configuration/environment-variables.js"}),"NEXT_PUBLIC_CONTENTFUL_DEFAULT_LOCALE"),"\nwith the right locale")),Object(r.b)("h2",{id:"set-up-the-tokens"},"Set up the tokens"),Object(r.b)("p",null,"Get the tokens from your account, ensuring that you have created a new\nmanagement access token."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_mt.png",alt:"Contentful Management Token"}))),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_access_keys.png",alt:"Contentful Access Token"}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export CONTENTFUL_MT= \\\nexport NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= \\\nexport NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= \\\nexport NEXT_PUBLIC_CONTENTFUL_SPACE_ID=\n")),Object(r.b)("h2",{id:"importing-content-with-the-contentful-cli"},"Importing content with the Contentful CLI"),Object(r.b)("p",null,"We have provided an example export of the Blog model used with Amido Stacks,\nsupporting:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"locals"),Object(r.b)("li",{parentName:"ul"},"translations (en-GB, it-IT)")),Object(r.b)("p",null,"For an example of how this is used in the Server Side Rendered Webapp, see\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.nonprod.amidostacks.com/web/stacks/blog"}),"our deployed server side rendered solution")),Object(r.b)("p",null,"After you have the import CLI tool installed and have configured your\nenvironment, and at the command line:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"contentful space import --content-file contentful-export-amidostacks-example.json --mt $CONTENTFUL_MT --space-id $NEXT_PUBLIC_CONTENTFUL_SPACE_ID")),Object(r.b)("p",null,"This will then populate your space with the Stacks blog posts, following the\nmodel, ensuring that you can get going faster."),Object(r.b)("h2",{id:"content-model"},"Content model"),Object(r.b)("p",null,"The Stacks Yumido example uses the following content model:"),Object(r.b)("h3",{id:"author"},Object(r.b)("strong",{parentName:"h3"},"Author")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," - ",Object(r.b)("strong",{parentName:"li"},"Short text")," field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"picture")," - ",Object(r.b)("strong",{parentName:"li"},"Media")," field")),Object(r.b)("h4",{id:"post"},Object(r.b)("strong",{parentName:"h4"},"Post")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"title")," - ",Object(r.b)("strong",{parentName:"li"},"Text")," field (type ",Object(r.b)("strong",{parentName:"li"},"short text"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content")," - ",Object(r.b)("strong",{parentName:"li"},"Rich text")," field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"excerpt")," - ",Object(r.b)("strong",{parentName:"li"},"Text")," field (type ",Object(r.b)("strong",{parentName:"li"},"short text, full-text search"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"coverImage")," - ",Object(r.b)("strong",{parentName:"li"},"Media")," field (type ",Object(r.b)("strong",{parentName:"li"},"one file"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"date")," - ",Object(r.b)("strong",{parentName:"li"},"Date and time")," field"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"slug")," - ",Object(r.b)("strong",{parentName:"li"},"Text")," field. You can optionally go to the settings of this field,\nand under ",Object(r.b)("strong",{parentName:"li"},"Appearance"),", select ",Object(r.b)("strong",{parentName:"li"},"Slug")," to display it as a slug of the\n",Object(r.b)("inlineCode",{parentName:"li"},"title")," field."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"author")," - ",Object(r.b)("strong",{parentName:"li"},"Reference")," field")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/content-model-overview.jpg",alt:"Content model overview"}))),Object(r.b)("h3",{id:"step-3-populate-content"},"Step 3. Populate content"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important:")," For each entry and asset, you need to click on ",Object(r.b)("strong",{parentName:"p"},"Publish"),"."),Object(r.b)("h2",{id:"to-run"},"To Run"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx cross-env NEXT_PUBLIC_CONTENTFUL_SPACE_ID=<YOUR_SPACE_ID> \\\nNEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=<ACCESS_TOKEN> \\\nNEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=<PREVIEW_TOKEN> \\\n")),Object(r.b)("h2",{id:"\ufe0f-important-\u2640\ufe0f-1"},"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Locale switcher strictly relies on the route. For example the route has to\nalways start with ",Object(r.b)("inlineCode",{parentName:"p"},"/blog/posts")," and should following slug should always start\nwith locale string (if multiple locales are enabled) e.g.\n",Object(r.b)("inlineCode",{parentName:"p"},"blog/posts/it-IT/documentation-demo"),".")),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("h3",{id:"httpsnext-blog-contentfulnowsh"},Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"https://next-blog-contentful.now.sh/"}),"https://next-blog-contentful.now.sh/")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"localization-and-internationalization"},"Localization and Internationalization"),Object(r.b)("p",null,"Stacks relies on\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.contentful.com/developers/docs/tutorials/general/setting-locales/"}),"contentful"),"\nto supplies the locales needed for translations."),Object(r.b)("h3",{id:"for-the-purposes-of-demo"},"For the purposes of demo"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Two locales have been created in Contentful (",Object(r.b)("em",{parentName:"li"},"en-GB")," and ",Object(r.b)("em",{parentName:"li"},"it-IT"),")\n",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/locales_contentful.jpg",alt:"Locales"}))),Object(r.b)("li",{parentName:"ul"},"Each post and field entry would contain 2 locales ",Object(r.b)("em",{parentName:"li"},"for eg. slugs are prefixed\nwith")," ",Object(r.b)("em",{parentName:"li"},"en-GB")," and ",Object(r.b)("em",{parentName:"li"},"it-IT"),".\n",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/i18n_fields.jpg",alt:"Field translate"}))),Object(r.b)("li",{parentName:"ul"},"NextJS static page generator builds dynamic pages and paths using the slug\ndata.\n",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/build_output.jpg",alt:"Build output"}))),Object(r.b)("li",{parentName:"ul"},"Added a language switcher in the blog post pages in the header. The switcher\nwill update the URL to relative prefixed path for ",Object(r.b)("em",{parentName:"li"},"eg:\n/posts/it-IT/documentation-demo")," refer the image below\n",Object(r.b)("img",Object(a.a)({parentName:"li"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/published_blog.jpg",alt:"published_blog"})))),Object(r.b)("hr",null))}b.isMDXComponent=!0}}]);