(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{10:function(t,e,n){t.exports=n("4HaK")},"4HaK":function(t,e,n){Vue.component("passport-clients",n("MrZN").default),Vue.component("passport-authorized-clients",n("Dpv2").default),Vue.component("passport-personal-access-tokens",n("yx5A").default)},"9tPo":function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,s=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:s+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},AIiG:function(t,e,n){"use strict";n("kPV1")},Dpv2:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{tokens:[]}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens()},getTokens:function(){var t=this;axios.get("/oauth/tokens").then((function(e){t.tokens=e.data}))},revoke:function(t){var e=this;axios.delete("/oauth/tokens/"+t.id).then((function(t){e.getTokens()}))}}},o=(n("hk+O"),n("KHd+")),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.tokens.length>0?n("div",[n("div",{staticClass:"card card-default mb-4"},[n("div",{staticClass:"card-header font-weight-bold bg-white"},[t._v("Authorized Applications")]),t._v(" "),n("div",{staticClass:"card-body"},[n("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),n("tbody",t._l(t.tokens,(function(e){return n("tr",[n("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.client.name)+"\n                            ")]),t._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[e.scopes.length>0?n("span",[t._v("\n                                    "+t._s(e.scopes.join(", "))+"\n                                ")]):t._e()]),t._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[n("a",{staticClass:"action-link text-danger",on:{click:function(n){return t.revoke(e)}}},[t._v("\n                                    Revoke\n                                ")])])])})),0)])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Scopes")]),this._v(" "),e("th")])])}],!1,null,"1b737fda",null);e.default=a.exports},I1BE:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var o=(r=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=s.sources.map((function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"}));return[n].concat(a).concat([o]).join("\n")}var r;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(s[a]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},JYlj:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.action-link[data-v-bf6d3a58] {\n    cursor: pointer;\n}\n",""])},"KHd+":function(t,e,n){"use strict";function s(t,e,n,s,o,a,r,i){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):o&&(c=i?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}n.d(e,"a",(function(){return s}))},MrZN:function(t,e,n){"use strict";n.r(e);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o={data:function(){return{clients:[],createForm:{errors:[],name:"",redirect:""},editForm:{errors:[],name:"",redirect:""}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getClients(),$("#modal-create-client").on("shown.bs.modal",(function(){$("#create-client-name").focus()})),$("#modal-edit-client").on("shown.bs.modal",(function(){$("#edit-client-name").focus()}))},getClients:function(){var t=this;axios.get("/oauth/clients").then((function(e){t.clients=e.data}))},showCreateClientForm:function(){$("#modal-create-client").modal("show")},store:function(){this.persistClient("post","/oauth/clients",this.createForm,"#modal-create-client")},edit:function(t){this.editForm.id=t.id,this.editForm.name=t.name,this.editForm.redirect=t.redirect,$("#modal-edit-client").modal("show")},update:function(){this.persistClient("put","/oauth/clients/"+this.editForm.id,this.editForm,"#modal-edit-client")},persistClient:function(t,e,n,o){var a=this;n.errors=[],axios[t](e,n).then((function(t){a.getClients(),n.name="",n.redirect="",n.errors=[],$(o).modal("hide")})).catch((function(t){"object"===s(t.response.data)?n.errors=_.flatten(_.toArray(t.response.data.errors)):n.errors=["Something went wrong. Please try again."]}))},destroy:function(t){var e=this;axios.delete("/oauth/clients/"+t.id).then((function(t){e.getClients()}))}}},a=(n("AIiG"),n("KHd+")),r=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card card-default mb-4"},[n("div",{staticClass:"card-header font-weight-bold bg-white"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[n("span",[t._v("\n                    OAuth Clients\n                ")]),t._v(" "),n("a",{staticClass:"action-link",attrs:{tabindex:"-1"},on:{click:t.showCreateClientForm}},[t._v("\n                    Create New Client\n                ")])])]),t._v(" "),n("div",{staticClass:"card-body"},[0===t.clients.length?n("p",{staticClass:"mb-0 font-weight-bold text-center lead p-5"},[t._v("\n                You have not created any OAuth clients.\n            ")]):t._e(),t._v(" "),t.clients.length>0?n("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),n("tbody",t._l(t.clients,(function(e){return n("tr",[n("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.id)+"\n                        ")]),t._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[n("code",[t._v(t._s(e.secret))])]),t._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[n("a",{staticClass:"btn btn-outline-secondary btn-sm py-1",attrs:{tabindex:"-1"},on:{click:function(n){return t.edit(e)}}},[t._v("\n                                Edit\n                            ")])]),t._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[n("a",{staticClass:"btn btn-outline-danger btn-sm py-1",attrs:{href:""},on:{click:function(n){return t.destroy(e)}}},[t._v("\n                                Delete\n                            ")])])])})),0)]):t._e()])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"modal-create-client",tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),n("div",{staticClass:"modal-body"},[t.createForm.errors.length>0?n("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),n("br"),t._v(" "),n("ul",t._l(t.createForm.errors,(function(e){return n("li",[t._v("\n                                "+t._s(e)+"\n                            ")])})),0)]):t._e(),t._v(" "),n("form",{attrs:{role:"form"}},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.name,expression:"createForm.name"}],staticClass:"form-control",attrs:{id:"create-client-name",type:"text",autocomplete:"off"},domProps:{value:t.createForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.store.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.createForm,"name",e.target.value)}}}),t._v(" "),n("span",{staticClass:"form-text text-muted"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label"},[t._v("Redirect URL")]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.createForm.redirect,expression:"createForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.createForm.redirect},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.store.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.createForm,"redirect",e.target.value)}}}),t._v(" "),n("span",{staticClass:"form-text text-muted"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])]),t._v(" "),t._m(5)])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary font-weight-bold",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary font-weight-bold",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"modal-edit-client",tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(6),t._v(" "),n("div",{staticClass:"modal-body"},[t.editForm.errors.length>0?n("div",{staticClass:"alert alert-danger"},[t._m(7),t._v(" "),n("br"),t._v(" "),n("ul",t._l(t.editForm.errors,(function(e){return n("li",[t._v("\n                                "+t._s(e)+"\n                            ")])})),0)]):t._e(),t._v(" "),n("form",{attrs:{role:"form"}},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.name,expression:"editForm.name"}],staticClass:"form-control",attrs:{id:"edit-client-name",type:"text"},domProps:{value:t.editForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.update.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.editForm,"name",e.target.value)}}}),t._v(" "),n("span",{staticClass:"form-text text-muted"},[t._v("\n                                    Something your users will recognize and trust.\n                                ")])])]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label"},[t._v("Redirect URL")]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editForm.redirect,expression:"editForm.redirect"}],staticClass:"form-control",attrs:{type:"text",name:"redirect"},domProps:{value:t.editForm.redirect},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.update.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.editForm,"redirect",e.target.value)}}}),t._v(" "),n("span",{staticClass:"form-text text-muted"},[t._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.update}},[t._v("\n                        Save Changes\n                    ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Client ID")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Secret")]),this._v(" "),e("th"),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Create Client\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label"},[this._v("Description")]),this._v(" "),e("div",{staticClass:"col-md-9"},[e("textarea",{staticClass:"form-control",attrs:{rows:"3"}}),this._v(" "),e("span",{staticClass:"form-text text-muted"},[this._v("\n                                    A brief description of your app\n                                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label"},[this._v("Website")]),this._v(" "),e("div",{staticClass:"col-md-9"},[e("input",{staticClass:"form-control",attrs:{type:"text",autocomplete:"off"}}),this._v(" "),e("span",{staticClass:"form-text text-muted"},[this._v("\n                                    Your website url\n                                ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label"},[t._v("Scopes")]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"custom-control custom-switch"},[n("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch1"}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch1"}},[t._v("Read")])]),t._v(" "),n("div",{staticClass:"custom-control custom-switch"},[n("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch2"}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch2"}},[t._v("Write")])]),t._v(" "),n("span",{staticClass:"form-text text-muted"},[t._v("\n                                    Your application's scopes.\n                                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Edit Client\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])}],!1,null,"d71fe564",null);e.default=r.exports},VJHJ:function(t,e,n){"use strict";n("kMkX")},VSBI:function(t,e,n){var s=n("XbPC");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,o);s.locals&&(t.exports=s.locals)},XbPC:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.action-link[data-v-1b737fda] {\n    cursor: pointer;\n}\n",""])},"aET+":function(t,e,n){var s,o,a={},r=(s=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=s.apply(this,arguments)),o}),i=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var s=i.call(this,t,n);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}}(),l=null,d=0,u=[],m=n("9tPo");function f(t,e){for(var n=0;n<t.length;n++){var s=t[n],o=a[s.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](s.parts[r]);for(;r<s.parts.length;r++)o.parts.push(C(s.parts[r],e))}else{var i=[];for(r=0;r<s.parts.length;r++)i.push(C(s.parts[r],e));a[s.id]={id:s.id,refs:1,parts:i}}}}function v(t,e){for(var n=[],s={},o=0;o<t.length;o++){var a=t[o],r=e.base?a[0]+e.base:a[0],i={css:a[1],media:a[2],sourceMap:a[3]};s[r]?s[r].parts.push(i):n.push(s[r]={id:r,parts:[i]})}return n}function p(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=u[u.length-1];if("top"===t.insertAt)s?s.nextSibling?n.insertBefore(e,s.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function _(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var s=function(){0;return n.nc}();s&&(t.attrs.nonce=s)}return b(e,t.attrs),p(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function C(t,e){var n,s,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=a}if(e.singleton){var r=d++;n=l||(l=_(e)),s=k.bind(null,n,r,!1),o=k.bind(null,n,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),p(t,e),e}(e),s=x.bind(null,n,e),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=_(e),s=w.bind(null,n),o=function(){h(n)});return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=v(t,e);return f(n,e),function(t){for(var s=[],o=0;o<n.length;o++){var r=n[o];(i=a[r.id]).refs--,s.push(i)}t&&f(v(t,e),e);for(o=0;o<s.length;o++){var i;if(0===(i=s[o]).refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete a[i.id]}}}};var y,g=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function k(t,e,n,s){var o=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var a=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function w(t,e){var n=e.css,s=e.media;if(s&&t.setAttribute("media",s),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function x(t,e,n){var s=n.css,o=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(s=m(s)),o&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([s],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}},"hk+O":function(t,e,n){"use strict";n("VSBI")},kMkX:function(t,e,n){var s=n("JYlj");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,o);s.locals&&(t.exports=s.locals)},kPV1:function(t,e,n){var s=n("xu15");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,o);s.locals&&(t.exports=s.locals)},xu15:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n.action-link[data-v-d71fe564] {\n    cursor: pointer;\n}\n",""])},yx5A:function(t,e,n){"use strict";n.r(e);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o={data:function(){return{accessToken:null,tokens:[],scopes:[],form:{name:"",scopes:[],errors:[]}}},ready:function(){this.prepareComponent()},mounted:function(){this.prepareComponent()},methods:{prepareComponent:function(){this.getTokens(),this.getScopes(),$("#modal-create-token").on("shown.bs.modal",(function(){$("#create-token-name").focus()}))},getTokens:function(){var t=this;axios.get("/oauth/personal-access-tokens").then((function(e){t.tokens=e.data}))},getScopes:function(){var t=this;axios.get("/oauth/scopes").then((function(e){t.scopes=e.data}))},showCreateTokenForm:function(){$("#modal-create-token").modal("show")},store:function(){var t=this;this.accessToken=null,this.form.errors=[],axios.post("/oauth/personal-access-tokens",this.form).then((function(e){t.form.name="",t.form.scopes=[],t.form.errors=[],t.tokens.push(e.data.token),t.showAccessToken(e.data.accessToken)})).catch((function(e){"object"===s(e.response.data)?t.form.errors=_.flatten(_.toArray(e.response.data.errors)):t.form.errors=["Something went wrong. Please try again."]}))},toggleScope:function(t){this.scopeIsAssigned(t)?this.form.scopes=_.reject(this.form.scopes,(function(e){return e==t})):this.form.scopes.push(t)},scopeIsAssigned:function(t){return _.indexOf(this.form.scopes,t)>=0},showAccessToken:function(t){$("#modal-create-token").modal("hide"),this.accessToken=t,$("#modal-access-token").modal("show")},revoke:function(t){var e=this;axios.delete("/oauth/personal-access-tokens/"+t.id).then((function(t){e.getTokens()}))}}},a=(n("VJHJ"),n("KHd+")),r=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"card card-default mb-4"},[n("div",{staticClass:"card-header font-weight-bold bg-white"},[n("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[n("span",[t._v("\n                        Personal Access Tokens\n                    ")]),t._v(" "),n("a",{staticClass:"action-link",attrs:{tabindex:"-1"},on:{click:t.showCreateTokenForm}},[t._v("\n                        Create New Token\n                    ")])])]),t._v(" "),n("div",{staticClass:"card-body"},[0===t.tokens.length?n("p",{staticClass:"mb-0"},[t._v("\n                    You have not created any personal access tokens.\n                ")]):t._e(),t._v(" "),t.tokens.length>0?n("table",{staticClass:"table table-borderless mb-0"},[t._m(0),t._v(" "),n("tbody",t._l(t.tokens,(function(e){return n("tr",[n("td",{staticStyle:{"vertical-align":"middle"}},[t._v("\n                                "+t._s(e.name)+"\n                            ")]),t._v(" "),n("td",{staticStyle:{"vertical-align":"middle"}},[n("a",{staticClass:"action-link text-danger",on:{click:function(n){return t.revoke(e)}}},[t._v("\n                                    Delete\n                                ")])])])})),0)]):t._e()])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"modal-create-token",tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),n("div",{staticClass:"modal-body"},[t.form.errors.length>0?n("div",{staticClass:"alert alert-danger"},[t._m(2),t._v(" "),n("br"),t._v(" "),n("ul",t._l(t.form.errors,(function(e){return n("li",[t._v("\n                                "+t._s(e)+"\n                            ")])})),0)]):t._e(),t._v(" "),n("form",{attrs:{role:"form"},on:{submit:function(e){return e.preventDefault(),t.store.apply(null,arguments)}}},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 col-form-label"},[t._v("Name")]),t._v(" "),n("div",{staticClass:"col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"create-token-name",type:"text",name:"name",autocomplete:"off"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),t.scopes.length>0?n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-4 col-form-label"},[t._v("Scopes")]),t._v(" "),n("div",{staticClass:"col-md-6"},t._l(t.scopes,(function(e){return n("div",[n("div",{staticClass:"checkbox"},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.scopeIsAssigned(e.id)},on:{click:function(n){return t.toggleScope(e.id)}}}),t._v("\n\n                                                "+t._s(e.id)+"\n                                        ")])])])})),0)]):t._e()])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary font-weight-bold",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary font-weight-bold",attrs:{type:"button"},on:{click:t.store}},[t._v("\n                        Create\n                    ")])])])])]),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"modal-access-token",tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(3),t._v(" "),n("div",{staticClass:"modal-body"},[n("p",[t._v("\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    ")]),t._v(" "),n("textarea",{staticClass:"form-control",attrs:{rows:"10"}},[t._v(t._s(t.accessToken))])]),t._v(" "),t._m(4)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Create Token\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("strong",[this._v("Whoops!")]),this._v(" Something went wrong!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h4",{staticClass:"modal-title"},[this._v("\n                        Personal Access Token\n                    ")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,"bf6d3a58",null);e.default=r.exports}},[[10,0]]]);