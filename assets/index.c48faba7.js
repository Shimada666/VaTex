var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,a=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&n(e,l,a[l]);if(o)for(var l of o(a))r.call(a,l)&&n(e,l,a[l]);return e};import{h as l,d as s,c as i,k as p,r as d,a as u,o as f,b as c,w as m,e as x,f as y,A as v}from"./vendor.84a8860f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const l=new URL(e,r);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const s=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),n(i)},onload(){o(self[t].moduleMap[l]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/vatex/assets/");const b=(e,n={},s)=>{const{props:i,domProps:p,on:d}=n,u=((e,n)=>{var a={};for(var l in e)t.call(e,l)&&n.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&o)for(var l of o(e))n.indexOf(l)<0&&r.call(e,l)&&(a[l]=e[l]);return a})(n,["props","domProps","on"]);let f=(e=>e?Object.entries(e).reduce(((e,[t,o])=>(t=`on${t=t.charAt(0).toUpperCase()+t.slice(1)}`,a(a({},e),{[t]:o}))),{}):null)(d);const c=a(a(a(a({},u),i),p),f);return l(e,c,s)};var h=s({name:"VueLatex",props:{fontsize:{type:Number,default:16},expression:{type:String,required:!0},displayMode:{type:Boolean,default:!1},throwOnError:{type:Boolean,default:!1},errorColor:{type:String,default:void 0},minRuleThickness:{type:Number,default:.04},macros:{type:Object,default:void 0},colorIsTextColor:{type:Boolean,default:void 0},maxSize:{type:Number,default:void 0},maxExpand:{type:Number,default:void 0},allowedProtocols:{type:Array,default:void 0},strict:{type:[Boolean,String,Function],default:void 0}},setup:e=>({html:i((()=>p.renderToString(e.expression,e)))}),render(){return b(this.displayMode?"div":"span",{domProps:{innerHTML:this.html},style:{"font-size":`${this.fontsize}px`}})}}),w=s({name:"App",components:{VueLatex:h},setup:()=>({formModel:d({fontsize:20,expression:"D(x) = \\begin{cases}\n\\lim\\limits_{x \\to 0} \\frac{a^x}{b+c}, & x<3 \\\\\n\\pi, & x=3 \\\\\n\\int_a^{3b}x_{ij}+e^2 \\mathrm{d}x,& x>3 \\\\\n\\end{cases}"})})});const M=x("h1",{style:{"text-align":"center"}},"参数调整",-1),O={style:{display:"flex","justify-content":"center"}},j=x("h1",{style:{"text-align":"center"}},"效果展示",-1);w.render=function(e,t,o,r,n,a){const l=c("a-input-number"),s=c("a-form-item"),i=c("a-textarea"),p=c("a-form"),d=c("vue-latex"),y=c("a-col"),v=c("a-row");return f(),u(v,null,{default:m((()=>[x(y,{span:12,offset:6},{default:m((()=>[M,x("div",O,[x(p,{"label-col":{style:"width: 80px"}},{default:m((()=>[x(s,{label:"字号"},{default:m((()=>[x(l,{value:e.formModel.fontsize,"onUpdate:value":t[1]||(t[1]=t=>e.formModel.fontsize=t)},null,8,["value"])])),_:1}),x(s,{label:"表达式"},{default:m((()=>[x(i,{value:e.formModel.expression,"onUpdate:value":t[2]||(t[2]=t=>e.formModel.expression=t),rows:10,style:{width:"400px"}},null,8,["value"])])),_:1})])),_:1})]),j,x(d,{expression:e.formModel.expression,fontsize:e.formModel.fontsize},null,8,["expression","fontsize"])])),_:1})])),_:1})};y(w).use(v).mount("#app");
