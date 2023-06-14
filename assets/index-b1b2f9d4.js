import{E as c,a9 as x,a8 as g,h as m,x as S,ae as b}from"./index-df9e15ef.js";const _=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function s(o){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",i=arguments.length>2?arguments[2]:void 0;return c()({name:o,props:_({mode:i,origin:d}),setup(n,r){let{slots:a}=r;const t={onBeforeEnter(e){e.style.transformOrigin=n.origin},onLeave(e){if(n.leaveAbsolute){const{offsetTop:l,offsetLeft:f,offsetWidth:y,offsetHeight:u}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${l}px`,e.style.left=`${f}px`,e.style.width=`${y}px`,e.style.height=`${u}px`}n.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(n.leaveAbsolute&&(e!=null&&e._transitionInitialStyles)){const{position:l,top:f,left:y,width:u,height:v}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=l||"",e.style.top=f||"",e.style.left=y||"",e.style.width=u||"",e.style.height=v||""}}};return()=>{const e=n.group?x:g;return m(e,{name:n.disabled?"":o,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:t},a.default)}}})}function p(o,d){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return c()({name:o,props:{mode:{type:String,default:i},disabled:Boolean},setup(n,r){let{slots:a}=r;return()=>m(g,{name:n.disabled?"":o,css:!n.disabled,...n.disabled?{}:d},a.default)}})}function h(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=b(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[n]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=e.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[i]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){o&&t._parent&&t._parent.classList.remove(o),a(t)}function a(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[i]=e),delete t._initialStyle}}s("fab-transition","center center","out-in");s("dialog-bottom-transition");s("dialog-top-transition");const T=s("fade-transition");s("scale-transition");s("scroll-x-transition");s("scroll-x-reverse-transition");s("scroll-y-transition");s("scroll-y-reverse-transition");s("slide-x-transition");s("slide-x-reverse-transition");const L=s("slide-y-transition");s("slide-y-reverse-transition");const E=p("expand-transition",h()),A=p("expand-x-transition",h("",!0));export{A as V,E as a,T as b,L as c};
