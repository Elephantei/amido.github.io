(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{211:function(t,n,r){"use strict";var e=r(0),i=r(19);n.a=function(){var t=Object(e.useContext)(i.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},212:function(t,n,r){"use strict";r.d(n,"b",(function(){return u})),r.d(n,"a",(function(){return o}));var e=r(211),i=r(214);function u(){var t=Object(e.a)().siteConfig,n=(t=void 0===t?{}:t).baseUrl,r=void 0===n?"/":n,u=t.url;return{withBaseUrl:function(t,n){return function(t,n,r,e){var u=void 0===e?{}:e,o=u.forcePrependBaseUrl,c=void 0!==o&&o,a=u.absolute,s=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return n+r;var f=r.startsWith(n)?r:n+r.replace(/^\//,"");return s?t+f:f}(u,r,t,n)}}}function o(t,n){return void 0===n&&(n={}),(0,u().withBaseUrl)(t,n)}},214:function(t,n,r){"use strict";function e(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!e(t)}r.d(n,"b",(function(){return e})),r.d(n,"a",(function(){return i}))},71:function(t,n,r){"use strict";r.r(n);var e=r(2),i=r(0),u=r.n(i),o=r(212);n.default=function(t){return u.a.createElement("img",Object(e.a)({src:Object(o.a)("img/JUnit.svg"),alt:"JUnit"},t))}}}]);