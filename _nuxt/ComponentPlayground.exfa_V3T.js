import{u as m}from"./asyncData.rTqtah93.js";import{M as c,I as p,d as i,a9 as l,r as u,N as e,l as d}from"./entry.SNj_zhXb.js";import f from"./Ellipsis.FXIoFYIJ.js";import y from"./ComponentPlaygroundData.rbO2QeEM.js";import"./TabsHeader.0LFGY8Ci.js";import"./ComponentPlaygroundProps.W6EEOY1A.js";import"./ProseH4.hegafaRv.js";import"./ProseCodeInline.-ot488FE.js";import"./Badge.KZquvbKo.js";import"./MDCSlot.Qc_RomCh.js";import"./slot.siQivg8y.js";import"./ProseP.mLKqFl7z.js";import"./index.o73etw1J.js";import"./ComponentPlaygroundSlots.vue.HFK5k5n5.js";import"./ComponentPlaygroundTokens.vue.i2Z__-LL.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-9ca9b996"]]);export{V as default};
