import{d7 as i,af as u,x as S,y as C,B as b,E as k,l as N,h as j}from"./index-df9e15ef.js";const v=(()=>i.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}))(),V=(()=>i.reduce((t,a)=>{const e="offset"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),L=(()=>i.reduce((t,a)=>{const e="order"+u(a);return t[e]={type:[String,Number],default:null},t},{}))(),y={col:Object.keys(v),offset:Object.keys(V),order:Object.keys(L)};function O(t,a,e){let s=t;if(!(e==null||e===!1)){if(a){const n=a.replace(t,"");s+=`-${n}`}return t==="col"&&(s="v-"+s),t==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],B=S({cols:{type:[Boolean,String,Number],default:!1},...v,offset:{type:[String,Number],default:null},...V,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>_.includes(t)},...C(),...b()},"v-col"),K=k()({name:"VCol",props:B(),setup(t,a){let{slots:e}=a;const s=N(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=t[o],g=O(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return j(t.tag,{class:[s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],$=["space-between","space-around","space-evenly"];function d(t,a){return i.reduce((e,s)=>{const n=t+u(s);return e[n]=a(),e},{})}const I=[...f,"baseline","stretch"],h=t=>I.includes(t),w=d("align",()=>({type:String,default:null,validator:h})),T=[...f,...$],P=t=>T.includes(t),E=d("justify",()=>({type:String,default:null,validator:P})),U=[...f,...$,"stretch"],A=t=>U.includes(t),G=d("alignContent",()=>({type:String,default:null,validator:A})),m={align:Object.keys(w),justify:Object.keys(E),alignContent:Object.keys(G)},M={align:"align",justify:"justify",alignContent:"align-content"};function R(t,a,e){let s=M[t];if(e!=null){if(a){const n=a.replace(t,"");s+=`-${n}`}return s+=`-${e}`,s.toLowerCase()}}const x=S({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...w,justify:{type:String,default:null,validator:P},...E,alignContent:{type:String,default:null,validator:A},...G,...C(),...b()},"v-row"),z=k()({name:"VRow",props:x(),setup(t,a){let{slots:e}=a;const s=N(()=>{const n=[];let l;for(l in m)m[l].forEach(r=>{const o=t[r],c=R(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return j(t.tag,{class:["v-row",s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{z as V,K as a};
