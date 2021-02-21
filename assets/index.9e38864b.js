import{d as e,c as a,a as t,w as s,p as o,b as c,e as l,r,o as n,F as d,t as i,f as m,g as u,h as p,i as f,j as _,k as h}from"./vendor.7c5eae7b.js";let x;!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,c)=>{const l=new URL(e,s);if(self[a].moduleMap[l])return t(self[a].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${a}.moduleMap['${l}']=m;`],{type:"text/javascript"}),n=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){c(new Error(`Failed to import: ${e}`)),o(n)},onload(){t(self[a].moduleMap[l]),o(n)}});document.head.appendChild(n)})),self[a].moduleMap={}}}("/sugar/assets/");const v={},b=function(e,a){if(!a)return e();if(void 0===x){const e=document.createElement("link").relList;x=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if(e in v)return;v[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const s=document.createElement("link");return s.rel=a?"stylesheet":x,a||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),a?new Promise(((e,a)=>{s.addEventListener("load",e),s.addEventListener("error",a)})):void 0}))).then((()=>e()))};var g=e({name:"Header",props:{msg:{type:String,required:!0}},setup:()=>{console.log("ss")}});const y=s("data-v-87d4a998");o("data-v-87d4a998");const C={class:"container"},w={class:"row"},F={class:"col-12"},j={class:"list-unstyled nav d-flex align-items-center"},P={class:"flex-fill"},E=c("Домой"),L={class:"flex-fill"},k=c("Категории"),R={class:"flex-fill"},A=c("Новый");l();const O=y(((e,s,o,c,l,d)=>{const i=r("router-link");return n(),a("header",null,[t("div",C,[t("div",w,[t("div",F,[t("ul",j,[t("li",P,[t(i,{class:"w-100 btn btn-success",to:"/"},{default:y((()=>[E])),_:1})]),t("li",L,[t(i,{class:"w-100 btn btn-success",to:"/category"},{default:y((()=>[k])),_:1})]),t("li",R,[t(i,{class:"w-100 btn btn-success",to:"/new"},{default:y((()=>[A])),_:1})])])])])])])}));g.render=O,g.__scopeId="data-v-87d4a998";var I=e({name:"Footer",props:{msg:{type:String,required:!0}},setup:()=>{}});const D=s("data-v-d4ddece0");o("data-v-d4ddece0");const U={class:"text-center"},$=t("div",{class:"container"},[t("div",{class:"row"},[t("div",{class:"col-12"},[t("small",{class:"text-white"},"Для Маришки от Ромио")])])],-1);l();const H=D(((e,t,s,o,c,l)=>(n(),a("footer",U,[$]))));I.render=H,I.__scopeId="data-v-d4ddece0";var M=e({name:"App",components:{Footer:I,Header:g}});const T={class:"container pt-fixed pb-2"};M.render=function(e,s,o,c,l,i){const m=r("Header"),u=r("router-view");return n(),a(d,null,[t(m),t("div",T,[t(u)])],64)};const V=new PouchDB("product");var q=e({name:"Home",setup:()=>{},data:()=>({products:[],bx_var:0,y_var:0,xe_var:0}),computed:{},methods:{calculate:(e,a)=>parseFloat(e)*a/100,bxCalc(e,a){return(.4*this.calculate(e,a)/12).toFixed(1)},bjCalc(e,a){return(.3*this.calculate(e,a)/12).toFixed(1)},byCalc(e,a){return(this.calculate(e,a)/12).toFixed(1)},bxbjCalc:(e,a)=>(parseFloat(e)+parseFloat(a)).toFixed(1),allCalc:(e,a,t)=>(parseFloat(e)+parseFloat(a)+parseFloat(t)).toFixed(1),calcFixed:e=>e.toFixed(1),plusAllCalculate(e){e.forEach((e=>{1===e.doc.is_home&&(this.bx_var=this.bx_var+(parseFloat(this.bxCalc(e.doc.product_b,e.doc.gram))+parseFloat(this.bjCalc(e.doc.product_j,e.doc.gram))),this.y_var=this.y_var+parseFloat(this.byCalc(e.doc.product_y,e.doc.gram)),this.xe_var=this.xe_var+(parseFloat(this.bxCalc(e.doc.product_b,e.doc.gram))+parseFloat(this.bjCalc(e.doc.product_j,e.doc.gram))+parseFloat(this.byCalc(e.doc.product_y,e.doc.gram))))}))},async getProducts(){try{await V.allDocs({include_docs:!0,attachments:!0}).then((e=>{this.products=e.rows,this.plusAllCalculate(this.products)}))}catch(e){console.error(e)}},async setProducts(e,a){try{e.doc.is_home=0,await V.put(e.doc),this.products.splice(a,1),this.bx_var=0,this.y_var=0,this.xe_var=0,this.plusAllCalculate(this.products)}catch(t){console.error(t)}}},mounted(){this.getProducts()}});const S=s("data-v-cae565ce");o("data-v-cae565ce");const B={class:"home"},N=t("h3",null,"За все продукты",-1),W={class:"calculate-product mb-3"},z={class:"product-information w-100 mb-2 d-flex text-center"},G={class:"information flex-fill d-flex flex-column"},J=t("span",{class:"information__header"},"БЖ",-1),K={class:"information__footer"},Q={class:"information flex-fill d-flex flex-column"},X=t("span",{class:"information__header"},"У",-1),Y={class:"information__footer"},Z={class:"information flex-fill d-flex flex-column"},ee=t("span",{class:"information__header"},"ХЕ",-1),ae={class:"information__footer"},te=t("div",{class:"calculate-hr w-100 mb-3"},null,-1),se=t("h3",{class:"d-flex align-items-center"},[c(" Продукты "),t("a",{href:"#",class:"btn btn-danger ms-auto"},"Убрать все")],-1),oe={key:0,class:"calculate-items d-flex flex-wrap"},ce={key:0,class:"card"},le={class:"bd-placeholder-img card-img-top w-100 d-flex align-items-center justify-content-center"},re={class:"card-body"},ne={class:"card-text"},de={class:"product-information w-100 mb-2 d-flex text-center"},ie={class:"information flex-fill d-flex flex-column"},me=t("span",{class:"information__header"},"БЖ",-1),ue={class:"information__footer"},pe={class:"information flex-fill d-flex flex-column"},fe=t("span",{class:"information__header"},"У",-1),_e={class:"information__footer"},he={class:"information flex-fill d-flex flex-column"},xe=t("span",{class:"information__header"},"ХЕ",-1),ve={class:"information__footer"},be={class:"d-flex align-items-center"};l();const ge=S(((e,s,o,c,l,r)=>(n(),a("div",B,[N,t("div",W,[t("div",z,[t("div",G,[J,t("span",K,i(e.calcFixed(e.bx_var)),1)]),t("div",Q,[X,t("span",Y,i(e.calcFixed(e.y_var)),1)]),t("div",Z,[ee,t("span",ae,i(e.calcFixed(e.xe_var)),1)])])]),te,se,e.products.length?(n(),a("div",oe,[(n(!0),a(d,null,m(e.products,((s,o)=>(n(),a("div",{class:["calculate-item",[{"d-none":1!==s.doc.is_home}]],key:o},[1===s.doc.is_home?(n(),a("div",ce,[t("div",le,[s.doc.image?(n(),a("img",{key:0,class:"mx-auto img-fluid",src:s.doc.image},null,8,["src"])):u("",!0)]),t("div",re,[t("p",ne,i(s.doc.title),1),t("div",de,[t("div",ie,[me,t("span",ue,i(e.bxbjCalc(e.bxCalc(s.doc.product_b,s.doc.gram),e.bjCalc(s.doc.product_j,s.doc.gram))),1)]),t("div",pe,[fe,t("span",_e,i(e.byCalc(s.doc.product_y,s.doc.gram)),1)]),t("div",he,[xe,t("span",ve,i(e.allCalc(e.bxCalc(s.doc.product_b,s.doc.gram),e.bjCalc(s.doc.product_j,s.doc.gram),e.byCalc(s.doc.product_y,s.doc.gram))),1)])]),t("div",be,[t("span",null,"За "+i(s.doc.gram)+" гр.",1),t("a",{href:"#",onClick:p((a=>e.setProducts(s,o)),["prevent"]),class:"btn btn-danger ms-auto"},"Убрать",8,["onClick"])])])])):u("",!0)],2)))),128))])):u("",!0)]))));q.render=ge,q.__scopeId="data-v-cae565ce";const ye=[{path:"/",name:"Home",component:q},{path:"/category",name:"Category",component:async()=>b((()=>__import__("./Category.7ac14694.js")),["/sugar/assets/Category.7ac14694.js","/sugar/assets/Category.2130f340.css","/sugar/assets/vendor.7c5eae7b.js"])},{path:"/category/:id",name:"CategoryPage",component:async()=>b((()=>__import__("./CategoryPage.6ff554de.js")),["/sugar/assets/CategoryPage.6ff554de.js","/sugar/assets/CategoryPage.15585d6a.css","/sugar/assets/vendor.7c5eae7b.js"])},{path:"/category/:id/:id",name:"Product",component:async()=>b((()=>__import__("./Product.5a652a65.js")),["/sugar/assets/Product.5a652a65.js","/sugar/assets/Product.27699184.css","/sugar/assets/vendor.7c5eae7b.js"])},{path:"/new",name:"New",component:async()=>b((()=>__import__("./New.b67bab69.js")),["/sugar/assets/New.b67bab69.js","/sugar/assets/New.f3da5263.css","/sugar/assets/vendor.7c5eae7b.js"])}],Ce=f({history:_("/sugar/"),routes:ye});h(M).use(Ce).mount("#app");
