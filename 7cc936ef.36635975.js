(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{211:function(t,r,n){"use strict";var e=n(0),u=n(19);r.a=function(){var t=Object(e.useContext)(u.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},212:function(t,r,n){"use strict";n.d(r,"b",(function(){return i})),n.d(r,"a",(function(){return o}));var e=n(211),u=n(214);function i(){var t=Object(e.a)().siteConfig,r=(t=void 0===t?{}:t).baseUrl,n=void 0===r?"/":r,i=t.url;return{withBaseUrl:function(t,r){return function(t,r,n,e){var i=void 0===e?{}:e,o=i.forcePrependBaseUrl,c=void 0!==o&&o,a=i.absolute,s=void 0!==a&&a;if(!n)return n;if(n.startsWith("#"))return n;if(Object(u.b)(n))return n;if(c)return r+n;var f=n.startsWith(r)?n:r+n.replace(/^\//,"");return s?t+f:f}(i,n,t,r)}}}function o(t,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(t,r)}},214:function(t,r,n){"use strict";function e(t){return!0===/^(\w*:|\/\/)/.test(t)}function u(t){return void 0!==t&&!e(t)}n.d(r,"b",(function(){return e})),n.d(r,"a",(function(){return u}))},69:function(t,r,n){"use strict";n.r(r);var e=n(2),u=n(0),i=n.n(u),o=n(212);r.default=function(t){return i.a.createElement("img",Object(e.a)({src:Object(o.a)("img/BDDfy.svg"),alt:"BDDfy"},t))}}}]);