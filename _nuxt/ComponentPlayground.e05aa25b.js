import{u as m}from"./asyncData.ebdb8470.js";import{M as c,I as p,d as i,a9 as u,r as l,N as e,k as d}from"./entry.dba6d260.js";import f from"./Ellipsis.11b3f943.js";import _ from"./ComponentPlaygroundData.349a6e51.js";import"./TabsHeader.00222d5f.js";import"./ComponentPlaygroundProps.b4fac73a.js";import"./ProseH4.a7a82544.js";import"./ProseCodeInline.3abd6bad.js";import"./Badge.f97d240a.js";import"./MDCSlot.3bf2f89f.js";import"./slot.a2e16812.js";import"./ProseP.3ccc22ba.js";import"./index.a56422be.js";import"./ComponentPlaygroundSlots.vue.d31665e2.js";import"./ComponentPlaygroundTokens.vue.714050c2.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const V=d(g,[["__scopeId","data-v-51227037"]]);export{V as default};
