(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n.p+"static/media/girlLogin.05547ed9.png"},56:function(e,t,n){e.exports=n(81)},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(51),c=n.n(o),i=(n(65),n(66),n(67),n(3)),l=n(11),s=n(10),u=n(14),m=n(5),f=(n(68),n(83)),h=n(87),p=n(34),d=n(33),v=n(43),g=n(18),y=n(39),E=n.n(y),b=n(86).a.create({baseURL:"http://localhost:5000",headers:{"Content-Type":"application/json"}});b.interceptors.request.use(function(e){var t=localStorage.getItem("token");return e.headers.Authorization=t||"",e});var w=b;function N(){N=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),i=new j(a||[]);return r(c,"_invoke",{value:w(e,n,i)}),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=L(c,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function L(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(y),l(y,i,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var L=function(){var e=Object(r.useState)({email:"",password:""}),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)("password"),y=Object(m.a)(c,2),b=y[0],L=y[1],O=Object(r.useState)(!1),x=Object(m.a)(O,2),j=x[0],S=x[1],_=Object(i.m)(),k=function(e){var t=e.target,r=t.name,a=t.value;o(Object(u.a)({},n,Object(s.a)({},r,a)))},C=function(e){"password"===b?(L("text"),S(!0)):(L("password"),S(!1))};Object(r.useEffect)(function(){localStorage.getItem("userData")&&_("/")},[]);return a.a.createElement("div",{className:"bgLogin"},a.a.createElement(f.a,null,a.a.createElement("div",{className:"loginMain"},a.a.createElement("div",{className:"loginWelcome"},a.a.createElement("h1",{className:"loginTitle"},"Welcome Back !"),a.a.createElement("p",{className:"loginContinue"},"Sign in to continue to Buzz Chat.")),a.a.createElement("div",{className:"mainForm"},a.a.createElement("form",{action:"#",className:"loginForm",onSubmit:function(e){return function(e){e.preventDefault(),w.post("/user/login",n).then(function(){var e=Object(l.a)(N().mark(function e(t){var n,r;return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.stringify(t.data.data),localStorage.setItem("userData",n),localStorage.setItem("token",t.data.token),alert("Login Succesfully"),r=t.data.data._id,_("/"),setTimeout(function(){localStorage.clear()},72e6),w.put("/user/updateUserOnlineStatus/".concat(r),{isOnline:!0}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){e.response.data.message?alert(e.response.data.message):console.log(e)})}(e)}},a.a.createElement("div",{className:"mainEmail"},a.a.createElement("label",{htmlFor:"email",className:"formLabel"},"Email"),a.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Enter Username",value:n.email,onChange:k,required:!0})),a.a.createElement("div",{className:"mainPassword"},a.a.createElement("div",{className:"forget"},a.a.createElement("label",{htmlFor:"password",className:"formLabel mb-0"},"Password"),a.a.createElement(g.b,{to:"",className:"forgetPassword",role:h.a},"Forgot password?")),a.a.createElement("div",{className:"mainEye"},a.a.createElement("input",{type:b,name:"password",id:"password",placeholder:"Enter Password",value:n.password,onChange:k,maxLength:20,required:!0}),j?a.a.createElement(d.b,{className:"eye",role:h.a,onClick:C}):a.a.createElement(d.a,{className:"eye",role:h.a,onClick:C}))),a.a.createElement("div",{className:"formCheck"},a.a.createElement("input",{type:"checkbox",name:"remember",id:"remember"}),a.a.createElement("label",{htmlFor:"remember",className:"me"},"Remember me")),a.a.createElement("div",{className:"loginSubmit"},a.a.createElement("button",{type:"submit",className:"submitbtn"},"Log In")),a.a.createElement("div",{className:"social"},a.a.createElement("div",{className:"signIn"},a.a.createElement("h6",{className:"signTitle"},"Sign in with"))),a.a.createElement("div",{className:"socialLogin"},a.a.createElement("button",{type:"button",title:"Facebook",className:"socialBtn"},a.a.createElement(p.a,{color:"rgba(86,11,173,1)"})),a.a.createElement("button",{type:"button",title:"Twitter",className:"socialBtn"},a.a.createElement(p.b,{color:"rgba(29,161,242,1)"})),a.a.createElement("button",{type:"button",title:"Google",className:"socialBtn"},a.a.createElement(v.a,null))),a.a.createElement("div",{className:"account"},a.a.createElement("p",{className:"dont"},"Don't have an account ?",a.a.createElement(g.b,{to:"/Register",className:"dontLink"},"Register"))))),a.a.createElement("img",{src:E.a,className:"bgLoginImg",alt:"Girl"}))))},O=(n(73),function(){var e=Object(r.useState)({username:"",email:"",password:""}),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)("password"),l=Object(m.a)(c,2),y=l[0],b=l[1],N=Object(r.useState)(!1),L=Object(m.a)(N,2),O=L[0],x=L[1],j=Object(i.m)(),S=function(e){var t=e.target,r=t.name,a=t.value;o(Object(u.a)({},n,Object(s.a)({},r,a)))},_=function(e){"password"===y?(b("text"),x(!0)):(b("password"),x(!1))};Object(r.useEffect)(function(){localStorage.getItem("userData")&&j("/chat")},[]);return a.a.createElement("div",{className:"bgRegister"},a.a.createElement(f.a,null,a.a.createElement("div",{className:"registerMain"},a.a.createElement("div",{className:"registerWelcome"},a.a.createElement("h1",{className:"loginTitle"},"Welcome Back !"),a.a.createElement("p",{className:"loginContinue"},"Sign in to continue to Buzz Chat.")),a.a.createElement("div",{className:"mainForm"},a.a.createElement("form",{action:"#",className:"registerForm",onSubmit:function(e){return function(e){e.preventDefault(),w.post("/user/register",n).then(function(e){console.log(e),alert("Registered Succesfully"),j("/Login")}).catch(function(e){e.response.data.message?alert(e.response.data.message):console.log(e)})}(e)}},a.a.createElement("div",{className:"mainUser"},a.a.createElement("label",{htmlFor:"username",className:"formLabel"},"Username"),a.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Enter Username",value:n.name,onChange:S,required:!0})),a.a.createElement("div",{className:"mainEmail"},a.a.createElement("label",{htmlFor:"email",className:"formLabel"},"Email"),a.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Enter Email",value:n.email,onChange:S,maxLength:50,required:!0})),a.a.createElement("div",{className:"mainPassword"},a.a.createElement("div",{className:"forget"},a.a.createElement("label",{htmlFor:"password",className:"formLabel mb-0"},"Password")),a.a.createElement("div",{className:"mainEye"},a.a.createElement("input",{type:y,name:"password",id:"password",placeholder:"Enter Password",value:n.password,onChange:S,required:!0}),O?a.a.createElement(d.b,{className:"eye",role:h.a,onClick:_}):a.a.createElement(d.a,{className:"eye",role:h.a,onClick:_}))),a.a.createElement("div",{className:"termsCondition"},"By registering you agree to the Buzz Chat ",a.a.createElement("br",null),a.a.createElement(g.b,{className:"termsLink"},"Terms of Use")),a.a.createElement("div",{className:"loginSubmit"},a.a.createElement("button",{type:"submit",className:"submitbtn"},"Register")),a.a.createElement("div",{className:"social"},a.a.createElement("div",{className:"signIn"},a.a.createElement("h6",{className:"signTitle"},"Sign up with"))),a.a.createElement("div",{className:"socialRegister"},a.a.createElement("button",{type:"button",title:"Facebook",className:"socialBtn"},a.a.createElement(p.a,{color:"rgba(86,11,173,1)"})),a.a.createElement("button",{type:"button",title:"Twitter",className:"socialBtn"},a.a.createElement(p.b,{color:"rgba(29,161,242,1)"})),a.a.createElement("button",{type:"button",title:"Google",className:"socialBtn"},a.a.createElement(v.a,null))),a.a.createElement("div",{className:"account"},a.a.createElement("p",{className:"dont"},"Already have an account ?",a.a.createElement(g.b,{to:"/Login",className:"dontLink"},"Login"))))),a.a.createElement("img",{src:E.a,className:"bgRegisterImg",alt:"Girl"}))))}),x=(n(74),n(84)),j=n(85),S=(n(75),n(52)),_=n(44),k=function(e){var t=e.contacts,n=e.currentUser,o=e.changeChat,c=Object(r.useState)(null),l=Object(m.a)(c,2),s=l[0],u=l[1],f=Object(r.useState)(null),h=Object(m.a)(f,2),p=h[0],d=h[1],v=Object(i.m)();Object(r.useEffect)(function(){n&&d(n.username)},[n]);return a.a.createElement(a.a.Fragment,null,p?a.a.createElement("div",{className:"position-relative"}," ",a.a.createElement("div",{className:"chatWrapper"},a.a.createElement("h4",{className:"chatTitle"},"Buzz"," ",a.a.createElement("button",{className:"addContactbtn",title:"Add contact"},a.a.createElement(S.a,{className:"plusIcon"}))),a.a.createElement("div",{className:"usersSearch"},a.a.createElement("input",{type:"search",name:"search",id:"search",placeholder:"Search here.."}),a.a.createElement("button",{className:"searchIcon"},a.a.createElement(_.a,null)))),a.a.createElement("div",{className:"userListContainer"},t.map(function(e,t){return a.a.createElement("div",{className:"user",role:"button",onClick:function(){!function(e,t){u(e),o(t)}(t,e)},key:t},a.a.createElement("h6",{className:"userName ".concat(t===s?"selected":"")},e.username))})),a.a.createElement("div",{className:"Logout"},a.a.createElement("button",{className:"logoutBtn",onClick:function(){w.put("/user/updateUserOnlineStatus/".concat(n._id),{isOnline:!1}).then(function(e){console.log(e.data),localStorage.clear(),v("/login")}).catch(function(e){console.log(e)})}},"Logout"))):a.a.createElement(a.a.Fragment,null))},C=(n(76),function(){return a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",backgroundColor:"#212531"}},a.a.createElement("span",{className:"loader"}))}),I=(n(77),n(28)),F=function(e){e.currentUser;return a.a.createElement("div",{className:"mainMessage"},a.a.createElement("div",null,a.a.createElement("div",{className:"messageWrapper"},a.a.createElement("span",{className:"messageDetail"},a.a.createElement(I.c,{className:"messageIcon"}))),a.a.createElement("h4",{className:"welcomeTo"},"Welcome to Buzz Chat App"),a.a.createElement("p",{className:"selectChat"},"Please select a chat for start messaging...")))},P=n(16),T=(n(78),n(45)),G=(n(79),n(53)),B=function(e){var t=e.handleSendMessage,n=Object(r.useState)(""),o=Object(m.a)(n,2),c=o[0],i=o[1];return a.a.createElement("form",{className:"chatInputForm",onSubmit:function(e){return function(e){e.preventDefault(),t(c),i("")}(e)}},a.a.createElement("div",{className:"chatInputIcon"},a.a.createElement("button",{className:"chatInputBtn"},a.a.createElement(I.a,null)),a.a.createElement("button",{className:"chatInputBtn"},a.a.createElement(G.a,null)),a.a.createElement("input",{type:"text",name:"messageInput",id:"messageInput",placeholder:"Type your messages...",onChange:function(e){return i(e.target.value)},value:c,required:!0}),a.a.createElement("button",{className:"chatInputBtn"},a.a.createElement(I.d,null)),a.a.createElement("button",{className:"chatInputBtn"},a.a.createElement(T.b,null))))},U=n(48);function A(){A=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),i=new x(a||[]);return r(c,"_invoke",{value:w(e,n,i)}),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=N(c,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(y),l(y,i,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var D=function(e){var t=e.currentUser,n=e.currentChat,o=e.socket,c=Object(r.useState)([]),i=Object(m.a)(c,2),s=i[0],u=i[1],f=Object(r.useRef)();Object(r.useEffect)(function(){n&&w.post("/messages/getAllMessage",{from:t._id,to:n._id}).then(function(e){console.log(e.data.data),u(e.data.data)}).catch(function(e){console.log(e)})},[n]),Object(r.useEffect)(function(){f.current&&f.current.scrollIntoView({bahaviour:"smooth"})},[s]);var h=function(){var e=Object(l.a)(A().mark(function e(r){var a;return A().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.post("/messages/addMessage",{message:r,from:t._id,to:n._id}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),o.current.emit("send-message",{to:n._id,from:t._id,message:r}),(a=Object(P.a)(s)).push({fromSelf:!0,message:r}),u(a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){o.current&&o.current.on("message-recieve",function(e){var t=Object(P.a)(s);t.push({fromSelf:!1,message:e}),u(t)})},[s]),a.a.createElement(a.a.Fragment,null,n&&a.a.createElement("div",{className:"mainMessageChat"},a.a.createElement("div",{className:"chatHeader"},a.a.createElement("div",{className:"userDetails"},a.a.createElement("h4",null," ",a.a.createElement(g.b,{to:"",className:"userName"},n.username)," ")),a.a.createElement("div",{className:"userIcons"},a.a.createElement("button",{className:"icon"},a.a.createElement(_.a,null)),a.a.createElement("button",{className:"icon"},a.a.createElement(I.e,null)),a.a.createElement("button",{className:"icon"},a.a.createElement(I.f,null)),a.a.createElement("button",{className:"icon"},a.a.createElement(T.a,null)),a.a.createElement("button",{className:"icon",title:"More"},a.a.createElement(I.b,null)))),a.a.createElement("div",{className:"messageChat"},s.map(function(e,t){return a.a.createElement("div",{className:"mainMessageContainer",key:t,ref:f},a.a.createElement("div",{className:"mainChatMessage"},a.a.createElement("div",{className:"message ".concat(e.fromSelf?"send":"receive")},a.a.createElement("p",{className:"msgIn"},e.message),e.fromSelf?a.a.createElement("div",{className:"messageTime"},a.a.createElement("span",{className:"timeAgo mrg-right"},Object(U.a)(e.createdAt)),a.a.createElement("span",{className:"messageUsername"},"You")):a.a.createElement("div",{className:"messageTime"},a.a.createElement("span",{className:"messageUsername mrg-right"},n.username),a.a.createElement("span",{className:"timeAgo"},Object(U.a)(e.createdAt))))))}),a.a.createElement("div",null)),a.a.createElement("div",{className:"chatInput"},a.a.createElement(B,{handleSendMessage:h}))))},R=n(55);function z(){z=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,c=Object.create(o.prototype),i=new x(a||[]);return r(c,"_invoke",{value:w(e,n,i)}),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var m={};function f(){}function h(){}function p(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(m).then(function(e){s.value=e,c(s)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=N(c,n);if(i){if(i===m)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function N(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,r(y,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),l(b.prototype,c,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new b(s(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(y),l(y,i,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var M=function(){var e=Object(r.useState)(null),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),s=Object(m.a)(c,2),u=s[0],f=s[1],h=Object(r.useState)(!1),p=Object(m.a)(h,2),d=p[0],v=p[1],g=Object(r.useState)(null),y=Object(m.a)(g,2),E=y[0],b=y[1],N=Object(i.m)(),L=Object(r.useRef)();window.addEventListener("beforeunload",Object(l.a)(z().mark(function e(){var t;return z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.put("/user/updateUserOnlineStatus/".concat(n._id),{isOnline:!1}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e)}))),Object(r.useEffect)(function(){localStorage.getItem("userData")?function(){var e=Object(l.a)(z().mark(function e(){return z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,JSON.parse(localStorage.getItem("userData"));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()():N("/login")},[]),Object(r.useEffect)(function(){n&&(L.current=Object(R.a)("http://localhost:5000"),L.current.emit("add-user",n._id))},[n]);Object(r.useEffect)(function(){n&&(v(!0),w.get("/user/getAllUsers/".concat(n._id)).then(function(){var e=Object(l.a)(z().mark(function e(t){return z().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f(t.data.data),v(!1);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){401===e.response.status?(localStorage.clear(),N("/login")):console.log(e)}).finally(function(){v(!1)}))},[n,E]);return a.a.createElement(a.a.Fragment,null,d?a.a.createElement(C,null):a.a.createElement(x.a,{className:"chatContainer gx-0"},a.a.createElement(j.a,{xl:2,md:3,className:"otherUsersContainer"},n&&a.a.createElement(k,{contacts:u,currentUser:n,changeChat:function(e){b(e)}})),a.a.createElement(j.a,{xxl:10,md:9,className:"messageContainer"},null===E?a.a.createElement(F,{currentUser:n}):a.a.createElement(D,{currentUser:n,currentChat:E,socket:L}))))};var q=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/Login",element:a.a.createElement(L,null)}),a.a.createElement(i.a,{path:"/register",element:a.a.createElement(O,null)}),a.a.createElement(i.a,{path:"/",element:a.a.createElement(M,null)})))},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})};n(80);c.a.createRoot(document.getElementById("root")).render(a.a.createElement(g.a,null,a.a.createElement(q,null))),W()}},[[56,1,2]]]);
//# sourceMappingURL=main.d3e1f2c6.chunk.js.map