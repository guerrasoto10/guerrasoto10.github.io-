(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(t,e,r){"use strict";r.r(e);var n=r("q1tI"),o=r.n(n),a=r("YJGX"),i=r.n(a),c=function(){return o.a.createElement("form",{className:"mt-16 text-center"},o.a.createElement("label",{htmlFor:"contact-content",className:"block text-gray-700 text-sm font-bold mb-2"},"¿Necesitas una solución de software?. Cuéntame esa idea"),o.a.createElement("div",{className:"flex shadow rounded bg-white border p-2"},o.a.createElement("textarea",{id:"contact-content",name:"contact-content",className:"flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"}),o.a.createElement("button",{className:"btn ml-4"},"Enviar")))},s=function(){return o.a.createElement("header",{className:"bg-gray-400"},o.a.createElement("div",{className:"container mx-auto p-12 max-w-4xl"},o.a.createElement("div",{className:"flex justify-center items-center"},o.a.createElement("div",{className:"flex-1"},o.a.createElement("h1",{className:"font-bold text-gray-800 text-5xl"}," ¡Hola! soy Gustavo"),o.a.createElement("p",{className:"text-xl font-light"},"Desarrollador de Software")),o.a.createElement("img",{src:i.a,alt:"Hombre en laptop",style:{height:"250px"}})),o.a.createElement("div",null,o.a.createElement(c,null))))},l=r("o0o1"),u=r.n(l);r("ls82");function f(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))}}var p=function(t){return o.a.createElement("li",{className:"flex items-center mt-2"},o.a.createElement("div",{className:"flex-1"},o.a.createElement("h4",{className:"text-gray-800 font-bold truncate"}," ",o.a.createElement("a",{href:t.repo.html_url,target:"_blank",rel:"noopener noreferrer"},t.repo.name)),o.a.createElement("p",{className:"text-sm text-gray-700 overflow-y-hidden",style:{height:"1.5em"}},t.repo.description)))},m=function(){var t=Object(n.useState)([]),e=t[0],r=t[1],a=Object(n.useState)([]),i=a[0],c=a[1];return Object(n.useEffect)((function(){var t,e=sessionStorage.getItem("repos");if(e)return t=JSON.parse(e),c(t.length),t=t.slice(1,10),r(t);function n(){return(n=h(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/users/guerrasoto10/repos");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,c(n.length),n=n.slice(1,10),sessionStorage.setItem("repos",JSON.stringify(n)),r(n);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),o.a.createElement("div",{className:"container mx-auto p-12 max-w-4xl"},o.a.createElement("header",{className:"text-center"},o.a.createElement("h2",{className:"text-3xl font-bold"},"Mis repositorios en Github"),o.a.createElement("p",null,"Estos son los repos mas recientes.")),o.a.createElement("ul",{className:"repos-list mt-6"},e.map((function(t){return o.a.createElement(p,{repo:t,key:t.id})}))),o.a.createElement("div",{className:"mt-8 text-center"},o.a.createElement("a",{href:"https://github.com/guerrasoto10/",className:"btn",target:"_blank",rel:"noopener noreferrer"},"Verlos todos en Github (",i,")")))};e.default=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(m,null))}},YJGX:function(t,e,r){t.exports=r.p+"static/undraw_developer_activity_bv83 -a8d83e3ab276592d7de506e9f870bf84.svg"},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var u={};function f(){}function h(){}function p(){}var m={};m[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==e&&r.call(v,o)&&(m=v);var y=p.prototype=f.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=y.constructor=p,p.constructor=h,h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-index-js-ffb5e66e0b3003ba8599.js.map