(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-225b5d52"],{"057f":function(t,e,r){var o=r("fc6a"),n=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?c(t):n(o(t))}},"4de4":function(t,e,r){"use strict";var o=r("23e7"),n=r("b727").filter,a=r("1dde"),i=a("filter");o({target:"Array",proto:!0,forced:!i},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"733f":function(t,e,r){},"746f":function(t,e,r){var o=r("428f"),n=r("5135"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});n(e,t)||i(e,t,{value:a.f(t)})}},"800e":function(t,e,r){"use strict";r("733f")},a4d3:function(t,e,r){"use strict";var o=r("23e7"),n=r("da84"),a=r("d066"),i=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),m=r("825a"),b=r("7b0b"),v=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),_=r("df75"),w=r("241c"),C=r("057f"),O=r("7418"),x=r("06cf"),j=r("9bf2"),P=r("d1e7"),S=r("9112"),k=r("6eeb"),D=r("5692"),N=r("f772"),$=r("d012"),R=r("90e3"),B=r("b622"),E=r("e538"),F=r("746f"),q=r("d44e"),I=r("69f3"),A=r("b727").forEach,J=N("hidden"),L="Symbol",z="prototype",H=B("toPrimitive"),T=I.set,U=I.getterFor(L),Y=Object[z],Q=n.Symbol,W=a("JSON","stringify"),G=x.f,K=j.f,M=C.f,V=P.f,X=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),rt=D("wks"),ot=n.QObject,nt=!ot||!ot[z]||!ot[z].findChild,at=c&&l((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var o=G(Y,e);o&&delete Y[e],K(t,e,r),o&&t!==Y&&K(Y,e,o)}:K,it=function(t,e){var r=X[t]=y(Q[z]);return T(r,{type:L,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},st=function(t,e,r){t===Y&&st(Z,e,r),m(t);var o=g(e,!0);return m(r),d(X,o)?(r.enumerable?(d(t,J)&&t[J][o]&&(t[J][o]=!1),r=y(r,{enumerable:h(0,!1)})):(d(t,J)||K(t,J,h(1,{})),t[J][o]=!0),at(t,o,r)):K(t,o,r)},ut=function(t,e){m(t);var r=v(e),o=_(r).concat(mt(r));return A(o,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},dt=function(t){var e=g(t,!0),r=V.call(this,e);return!(this===Y&&d(X,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(X,e)||d(this,J)&&this[J][e])||r)},ft=function(t,e){var r=v(t),o=g(e,!0);if(r!==Y||!d(X,o)||d(Z,o)){var n=G(r,o);return!n||!d(X,o)||d(r,J)&&r[J][o]||(n.enumerable=!0),n}},pt=function(t){var e=M(v(t)),r=[];return A(e,(function(t){d(X,t)||d($,t)||r.push(t)})),r},mt=function(t){var e=t===Y,r=M(e?Z:v(t)),o=[];return A(r,(function(t){!d(X,t)||e&&!d(Y,t)||o.push(X[t])})),o};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),r=function(t){this===Y&&r.call(Z,t),d(this,J)&&d(this[J],e)&&(this[J][e]=!1),at(this,e,h(1,t))};return c&&nt&&at(Y,e,{configurable:!0,set:r}),it(e,t)},k(Q[z],"toString",(function(){return U(this).tag})),k(Q,"withoutSetter",(function(t){return it(R(t),t)})),P.f=dt,j.f=st,x.f=ft,w.f=C.f=pt,O.f=mt,E.f=function(t){return it(B(t),t)},c&&(K(Q[z],"description",{configurable:!0,get:function(){return U(this).description}}),i||k(Y,"propertyIsEnumerable",dt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),A(_(rt),(function(t){F(t)})),o({target:L,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),o({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:ft}),o({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),o({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(b(t))}}),W){var bt=!s||l((function(){var t=Q();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));o({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var o,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(o=e,(p(e)||void 0!==t)&&!ct(t))return f(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!ct(e))return e}),n[1]=e,W.apply(null,n)}})}Q[z][H]||S(Q[z],H,Q[z].valueOf),q(Q,L),$[J]=!0},dbb4:function(t,e,r){var o=r("23e7"),n=r("83ab"),a=r("56ef"),i=r("fc6a"),c=r("06cf"),s=r("8418");o({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,o=i(t),n=c.f,u=a(o),l={},d=0;while(u.length>d)r=n(o,e=u[d++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var o=r("23e7"),n=r("d039"),a=r("fc6a"),i=r("06cf").f,c=r("83ab"),s=n((function(){i(1)})),u=!c||s;o({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(a(t),e)}})},e538:function(t,e,r){var o=r("b622");e.f=o},fa49:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product"},[r("div",{staticClass:"product-container d-flex mb-2"},[r("div",{staticClass:"product-container__avatar mr-2"},[t.product.image?r("img",{staticClass:"mx-auto",attrs:{src:t.product.image}}):t._e()]),r("div",{staticClass:"product-container__information text-center w-100 d-flex flex-column"},[t._m(0),r("div",{staticClass:"information-items d-flex mt-auto"},[r("div",{staticClass:"information flex-fill d-flex flex-column"},[r("span",{staticClass:"information__header"},[t._v("Б")]),r("span",{staticClass:"information__footer"},[t._v(t._s(t.product.product_b||"0"))])]),r("div",{staticClass:"information flex-fill d-flex flex-column"},[r("span",{staticClass:"information__header"},[t._v("Ж")]),r("span",{staticClass:"information__footer"},[t._v(t._s(t.product.product_j||"0"))])]),r("div",{staticClass:"information flex-fill d-flex flex-column"},[r("span",{staticClass:"information__header"},[t._v("У")]),r("span",{staticClass:"information__footer"},[t._v(t._s(t.product.product_y||"0"))])])])])]),r("div",{staticClass:"product-form"},[r("form",{on:{submit:t.setProductPouchDB}},[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productName"}},[t._v("Название продукту")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"form-control",attrs:{required:"",type:"text",id:"productName",placeholder:""},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label"},[t._v("Иснуюча категоря")]),r("b-form-select",{staticClass:"mb-3",on:{change:t.onDefault},model:{value:t.product.category_id,callback:function(e){t.$set(t.product,"category_id",e)},expression:"product.category_id"}},[r("b-form-select-option",{attrs:{value:null}},[t._v("-- Нету ---")]),t._l(t.categories,(function(e,o){return r("b-form-select-option",{key:o,attrs:{value:e.id}},[t._v(t._s(e.doc.title))])}))],2)],1),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productCategory"}},[t._v("Нова категория")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.category.title,expression:"category.title"}],staticClass:"form-control",attrs:{required:!t.product.category_id,disabled:t.product.category_id,type:"text",id:"productCategory",placeholder:""},domProps:{value:t.category.title},on:{input:function(e){e.target.composing||t.$set(t.category,"title",e.target.value)}}})]),r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col-6"},[r("label",{staticClass:"form-label",attrs:{for:"productB"}},[t._v("Белков на 100гр.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.product_b,expression:"product.product_b"}],staticClass:"form-control",attrs:{required:"",type:"number",step:"0.1",id:"productB",placeholder:""},domProps:{value:t.product.product_b},on:{input:function(e){e.target.composing||t.$set(t.product,"product_b",e.target.value)}}})]),r("div",{staticClass:"col-6"},[r("label",{staticClass:"form-label",attrs:{for:"productH"}},[t._v("Жиров на 100гр.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.product_j,expression:"product.product_j"}],staticClass:"form-control",attrs:{required:"",type:"number",step:"0.1",id:"productH",placeholder:""},domProps:{value:t.product.product_j},on:{input:function(e){e.target.composing||t.$set(t.product,"product_j",e.target.value)}}})])]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productY"}},[t._v("Углеводов на 100гр.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.product_y,expression:"product.product_y"}],staticClass:"form-control",attrs:{required:"",type:"number",step:"0.1",id:"productY",placeholder:""},domProps:{value:t.product.product_y},on:{input:function(e){e.target.composing||t.$set(t.product,"product_y",e.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productAvatar"}},[t._v("Картинка")]),r("b-form-file",{ref:"file-input",staticClass:"mb-2",attrs:{required:"","browse-text":"Выбрать",placeholder:"Выбрать картинку",id:"productAvatar"},on:{change:t.onChange}})],1),r("b-button",{staticClass:"btn-lg w-100",attrs:{type:"submit",variant:"primary",disabled:t.isCreated}},[r("b-spinner",{directives:[{name:"show",rawName:"v-show",value:t.isCreated,expression:"isCreated"}],staticStyle:{width:"25px",height:"25px"},attrs:{type:"grow"}}),t._v(" Добавить ")],1)],1)])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-center h6 text-primary"},[t._v(" На "),r("strong",[t._v("100")]),t._v(" гр. продукту ")])}],a=(r("d3b7"),r("5530")),i=(r("96cf"),r("1da1")),c={name:"New",data:function(){return{isSync:!1,isCreated:!1,product:{title:"",category_id:null,product_b:"",product_j:"",product_y:"",image:null,gram:100,is_home:0,variable_1:"",variable_2:"",variable_3:"",variable_4:"",variable_5:""},category:{title:""},products:[],categories:[]}},computed:{isOnline:function(){return window.navigator.onLine}},methods:{resizeImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return new Promise((function(o){var n=new Image;n.src=t,n.onload=function(){var t=document.createElement("canvas"),a=e,i=r,c=n.width,s=n.height;c>s?c>a&&(s*=a/c,c=a):s>i&&(c*=i/s,s=i),t.width=c,t.height=s;var u=t.getContext("2d");u.drawImage(n,0,0,c,s),o(t.toDataURL())}}))},getBase64:function(t){return new Promise((function(e,r){var o=new FileReader;o.readAsDataURL(t),o.onload=function(){return e(o.result)},o.onerror=function(t){return r("Error: ",t)}}))},onChange:function(t){var e=this;this.getBase64(t.target.files[0]).then((function(t){e.resizeImage(t).then((function(t){e.product.image=t,console.log(t)}))}))},onDefault:function(){this.category.title=""},reset:function(){this.category.title="",this.product.title="",this.product.category_id=null,this.product.product_b="",this.product.product_j="",this.product.product_y="",this.product.image=null,this.$refs["file-input"].reset()},getCategories:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$pouch.allDocs({include_docs:!0,attachments:!0},"category").then((function(e){t.categories=e.rows}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},setCategoryPouchFB:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$firebase.database().ref().child("category/".concat(t)).update(Object(a["a"])({_id:t},e.category));case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),console.error(r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},setProductPouchFB:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$firebase.database().ref().child("product/".concat(t)).update(Object(a["a"])({_id:t},e.product));case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),console.error(r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},setProductPouchDB:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.preventDefault(),e.isCreated=!0,r.prev=2,!e.category.title){r.next=6;break}return r.next=6,e.$pouch.post(Object(a["a"])({},e.category),{},"category").then((function(t){e.product.category_id=t.id,e.isOnline&&e.setCategoryPouchFB(t.id)}));case 6:return r.next=8,e.$pouch.post(Object(a["a"])({},e.product)).then((function(t){e.isOnline?e.setProductPouchFB(t.id).then((function(){e.reset(),e.isCreated=!1})):(e.reset(),e.isCreated=!1)}));case 8:r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](2),console.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()}},mounted:function(){this.getCategories()}},s=c,u=(r("800e"),r("2877")),l=Object(u["a"])(s,o,n,!1,null,"0a59f86e",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-225b5d52.cb3c138a.js.map