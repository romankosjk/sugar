(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb11e386"],{"1a71":function(t,a,r){"use strict";r.r(a);var o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"product"},[r("div",{staticClass:"product-container mb-2"},[r("div",{staticClass:"product-container__information text-center w-100 mt-auto"},[r("p",{staticClass:"text-center h6 text-primary"},[t._v("На "),r("strong",[t._v(t._s(t.product.gram))]),t._v(" гр. продукту")]),r("div",{staticClass:"information-items d-flex"},[r("div",{staticClass:"information flex-fill d-flex flex-column"},[r("span",{staticClass:"information__header"},[t._v("БЖ")]),r("span",{staticClass:"information__footer"},[t._v(t._s(t.bxbjCalc(t.bxCalc(t.product.product_b),t.bjCalc(t.product.product_j))))])]),r("div",{staticClass:"information flex-fill d-flex flex-column"},[r("span",{staticClass:"information__header"},[t._v("У")]),r("span",{staticClass:"information__footer"},[t._v(t._s(t.byCalc(t.product.product_y)))])]),r("div",{staticClass:"information flex-fill d-flex flex-column"},[r("span",{staticClass:"information__header"},[t._v("ХЕ")]),r("span",{staticClass:"information__footer"},[t._v(t._s(t.allCalc(t.bxCalc(t.product.product_b),t.bjCalc(t.product.product_j),t.byCalc(t.product.product_y))))])])])])]),r("div",{staticClass:"product-form"},[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productGram"}},[t._v("Грамм")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.gram,expression:"product.gram"}],staticClass:"form-control",attrs:{type:"number",id:"productGram",placeholder:""},domProps:{value:t.product.gram},on:{input:function(a){a.target.composing||t.$set(t.product,"gram",a.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productB"}},[t._v("Белков на 100гр.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.product_b,expression:"product.product_b"}],staticClass:"form-control",attrs:{type:"number",step:"0.1",id:"productB",placeholder:""},domProps:{value:t.product.product_b},on:{input:function(a){a.target.composing||t.$set(t.product,"product_b",a.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productH"}},[t._v("Жиров на 100гр.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.product_j,expression:"product.product_j"}],staticClass:"form-control",attrs:{type:"number",step:"0.1",id:"productH",placeholder:""},domProps:{value:t.product.product_j},on:{input:function(a){a.target.composing||t.$set(t.product,"product_j",a.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"productY"}},[t._v("Углеводов на 100гр.")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.product_y,expression:"product.product_y"}],staticClass:"form-control",attrs:{type:"number",step:"0.1",id:"productY",placeholder:""},domProps:{value:t.product.product_y},on:{input:function(a){a.target.composing||t.$set(t.product,"product_y",a.target.value)}}})])])])},e=[],s=(r("b680"),{name:"Calculator",data:function(){return{product:{gram:100,product_b:0,product_j:0,product_y:0}}},computed:{bx_param:{get:function(){return this.$store.state.option.bx_param}},bj_param:{get:function(){return this.$store.state.option.bj_param}},by_param:{get:function(){return this.$store.state.option.by_param}}},methods:{calculate:function(t){return parseFloat(t)*this.product.gram/100},bxCalc:function(t){return(this.calculate(t)*parseFloat(this.bx_param)/parseInt(this.by_param)).toFixed(1)},bjCalc:function(t){return(this.calculate(t)*parseFloat(this.bj_param)/parseInt(this.by_param)).toFixed(1)},byCalc:function(t){return(this.calculate(t)/parseInt(this.by_param)).toFixed(1)},bxbjCalc:function(t,a){return(parseFloat(t)+parseFloat(a)).toFixed(1)},allCalc:function(t,a,r){return(parseFloat(t)+parseFloat(a)+parseFloat(r)).toFixed(1)}},mounted:function(){}}),c=s,i=(r("2465"),r("2877")),l=Object(i["a"])(c,o,e,!1,null,"7e80c9b9",null);a["default"]=l.exports},2465:function(t,a,r){"use strict";r("e41a")},e41a:function(t,a,r){}}]);
//# sourceMappingURL=chunk-eb11e386.0d47a794.js.map