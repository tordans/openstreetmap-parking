(()=>{var We=!1,Ge=!1,j=[];function Nt(e){nn(e)}function nn(e){j.includes(e)||j.push(e),on()}function he(e){let t=j.indexOf(e);t!==-1&&j.splice(t,1)}function on(){!Ge&&!We&&(We=!0,queueMicrotask(sn))}function sn(){We=!1,Ge=!0;for(let e=0;e<j.length;e++)j[e]();j.length=0,Ge=!1}var A,K,Y,Ye,Je=!0;function Pt(e){Je=!1,e(),Je=!0}function It(e){A=e.reactive,Y=e.release,K=t=>e.effect(t,{scheduler:r=>{Je?Nt(r):r()}}),Ye=e.raw}function Ze(e){K=e}function Dt(e){let t=()=>{};return[n=>{let i=K(n);return e._x_effects||(e._x_effects=new Set,e._x_runEffects=()=>{e._x_effects.forEach(o=>o())}),e._x_effects.add(i),t=()=>{i!==void 0&&(e._x_effects.delete(i),Y(i))},i},()=>{t()}]}var $t=[],Lt=[],Ft=[];function jt(e){Ft.push(e)}function _e(e,t){typeof t=="function"?(e._x_cleanups||(e._x_cleanups=[]),e._x_cleanups.push(t)):(t=e,Lt.push(t))}function Kt(e){$t.push(e)}function Bt(e,t,r){e._x_attributeCleanups||(e._x_attributeCleanups={}),e._x_attributeCleanups[t]||(e._x_attributeCleanups[t]=[]),e._x_attributeCleanups[t].push(r)}function Qe(e,t){!e._x_attributeCleanups||Object.entries(e._x_attributeCleanups).forEach(([r,n])=>{(t===void 0||t.includes(r))&&(n.forEach(i=>i()),delete e._x_attributeCleanups[r])})}var et=new MutationObserver(Xe),tt=!1;function rt(){et.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),tt=!0}function cn(){an(),et.disconnect(),tt=!1}var ee=[],nt=!1;function an(){ee=ee.concat(et.takeRecords()),ee.length&&!nt&&(nt=!0,queueMicrotask(()=>{ln(),nt=!1}))}function ln(){Xe(ee),ee.length=0}function m(e){if(!tt)return e();cn();let t=e();return rt(),t}var it=!1,ge=[];function zt(){it=!0}function Vt(){it=!1,Xe(ge),ge=[]}function Xe(e){if(it){ge=ge.concat(e);return}let t=[],r=[],n=new Map,i=new Map;for(let o=0;o<e.length;o++)if(!e[o].target._x_ignoreMutationObserver&&(e[o].type==="childList"&&(e[o].addedNodes.forEach(s=>s.nodeType===1&&t.push(s)),e[o].removedNodes.forEach(s=>s.nodeType===1&&r.push(s))),e[o].type==="attributes")){let s=e[o].target,a=e[o].attributeName,c=e[o].oldValue,l=()=>{n.has(s)||n.set(s,[]),n.get(s).push({name:a,value:s.getAttribute(a)})},u=()=>{i.has(s)||i.set(s,[]),i.get(s).push(a)};s.hasAttribute(a)&&c===null?l():s.hasAttribute(a)?(u(),l()):u()}i.forEach((o,s)=>{Qe(s,o)}),n.forEach((o,s)=>{$t.forEach(a=>a(s,o))});for(let o of r)if(!t.includes(o)&&(Lt.forEach(s=>s(o)),o._x_cleanups))for(;o._x_cleanups.length;)o._x_cleanups.pop()();t.forEach(o=>{o._x_ignoreSelf=!0,o._x_ignore=!0});for(let o of t)r.includes(o)||!o.isConnected||(delete o._x_ignoreSelf,delete o._x_ignore,Ft.forEach(s=>s(o)),o._x_ignore=!0,o._x_ignoreSelf=!0);t.forEach(o=>{delete o._x_ignoreSelf,delete o._x_ignore}),t=null,r=null,n=null,i=null}function xe(e){return P(N(e))}function C(e,t,r){return e._x_dataStack=[t,...N(r||e)],()=>{e._x_dataStack=e._x_dataStack.filter(n=>n!==t)}}function ot(e,t){let r=e._x_dataStack[0];Object.entries(t).forEach(([n,i])=>{r[n]=i})}function N(e){return e._x_dataStack?e._x_dataStack:typeof ShadowRoot=="function"&&e instanceof ShadowRoot?N(e.host):e.parentNode?N(e.parentNode):[]}function P(e){let t=new Proxy({},{ownKeys:()=>Array.from(new Set(e.flatMap(r=>Object.keys(r)))),has:(r,n)=>e.some(i=>i.hasOwnProperty(n)),get:(r,n)=>(e.find(i=>{if(i.hasOwnProperty(n)){let o=Object.getOwnPropertyDescriptor(i,n);if(o.get&&o.get._x_alreadyBound||o.set&&o.set._x_alreadyBound)return!0;if((o.get||o.set)&&o.enumerable){let s=o.get,a=o.set,c=o;s=s&&s.bind(t),a=a&&a.bind(t),s&&(s._x_alreadyBound=!0),a&&(a._x_alreadyBound=!0),Object.defineProperty(i,n,{...c,get:s,set:a})}return!0}return!1})||{})[n],set:(r,n,i)=>{let o=e.find(s=>s.hasOwnProperty(n));return o?o[n]=i:e[e.length-1][n]=i,!0}});return t}function ye(e){let t=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,r=(n,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([o,{value:s,enumerable:a}])=>{if(a===!1||s===void 0)return;let c=i===""?o:`${i}.${o}`;typeof s=="object"&&s!==null&&s._x_interceptor?n[o]=s.initialize(e,c,o):t(s)&&s!==n&&!(s instanceof Element)&&r(s,c)})};return r(e)}function be(e,t=()=>{}){let r={initialValue:void 0,_x_interceptor:!0,initialize(n,i,o){return e(this.initialValue,()=>un(n,i),s=>st(n,i,s),i,o)}};return t(r),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=r.initialize.bind(r);r.initialize=(o,s,a)=>{let c=n.initialize(o,s,a);return r.initialValue=c,i(o,s,a)}}else r.initialValue=n;return r}}function un(e,t){return t.split(".").reduce((r,n)=>r[n],e)}function st(e,t,r){if(typeof t=="string"&&(t=t.split(".")),t.length===1)e[t[0]]=r;else{if(t.length===0)throw error;return e[t[0]]||(e[t[0]]={}),st(e[t[0]],t.slice(1),r)}}var Ht={};function x(e,t){Ht[e]=t}function te(e,t){return Object.entries(Ht).forEach(([r,n])=>{Object.defineProperty(e,`$${r}`,{get(){let[i,o]=at(t);return i={interceptor:be,...i},_e(t,o),n(t,i)},enumerable:!1})}),e}function qt(e,t,r,...n){try{return r(...n)}catch(i){J(i,e,t)}}function J(e,t,r=void 0){Object.assign(e,{el:t,expression:r}),console.warn(`Alpine Expression Error: ${e.message}

${r?'Expression: "'+r+`"

`:""}`,t),setTimeout(()=>{throw e},0)}var ve=!0;function Ut(e){let t=ve;ve=!1,e(),ve=t}function k(e,t,r={}){let n;return _(e,t)(i=>n=i,r),n}function _(...e){return Wt(...e)}var Wt=ct;function Gt(e){Wt=e}function ct(e,t){let r={};te(r,e);let n=[r,...N(e)];if(typeof t=="function")return fn(n,t);let i=dn(n,t,e);return qt.bind(null,e,t,i)}function fn(e,t){return(r=()=>{},{scope:n={},params:i=[]}={})=>{let o=t.apply(P([n,...e]),i);we(r,o)}}var lt={};function pn(e,t){if(lt[e])return lt[e];let r=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(e)||/^(let|const)\s/.test(e)?`(() => { ${e} })()`:e,o=(()=>{try{return new r(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`)}catch(s){return J(s,t,e),Promise.resolve()}})();return lt[e]=o,o}function dn(e,t,r){let n=pn(t,r);return(i=()=>{},{scope:o={},params:s=[]}={})=>{n.result=void 0,n.finished=!1;let a=P([o,...e]);if(typeof n=="function"){let c=n(n,a).catch(l=>J(l,r,t));n.finished?(we(i,n.result,a,s,r),n.result=void 0):c.then(l=>{we(i,l,a,s,r)}).catch(l=>J(l,r,t)).finally(()=>n.result=void 0)}}}function we(e,t,r,n,i){if(ve&&typeof t=="function"){let o=t.apply(r,n);o instanceof Promise?o.then(s=>we(e,s,r,n)).catch(s=>J(s,i,t)):e(o)}else e(t)}var ut="x-";function E(e=""){return ut+e}function Yt(e){ut=e}var Jt={};function d(e,t){Jt[e]=t}function re(e,t,r){let n={};return Array.from(t).map(Zt((o,s)=>n[o]=s)).filter(Qt).map(hn(n,r)).sort(_n).map(o=>mn(e,o))}function Xt(e){return Array.from(e).map(Zt()).filter(t=>!Qt(t))}var ft=!1,ne=new Map,er=Symbol();function tr(e){ft=!0;let t=Symbol();er=t,ne.set(t,[]);let r=()=>{for(;ne.get(t).length;)ne.get(t).shift()();ne.delete(t)},n=()=>{ft=!1,r()};e(r),n()}function at(e){let t=[],r=a=>t.push(a),[n,i]=Dt(e);return t.push(i),[{Alpine:I,effect:n,cleanup:r,evaluateLater:_.bind(_,e),evaluate:k.bind(k,e)},()=>t.forEach(a=>a())]}function mn(e,t){let r=()=>{},n=Jt[t.type]||r,[i,o]=at(e);Bt(e,t.original,o);let s=()=>{e._x_ignore||e._x_ignoreSelf||(n.inline&&n.inline(e,t,i),n=n.bind(n,e,t,i),ft?ne.get(er).push(n):n())};return s.runCleanups=o,s}var Ee=(e,t)=>({name:r,value:n})=>(r.startsWith(e)&&(r=r.replace(e,t)),{name:r,value:n}),Se=e=>e;function Zt(e=()=>{}){return({name:t,value:r})=>{let{name:n,value:i}=rr.reduce((o,s)=>s(o),{name:t,value:r});return n!==t&&e(n,t),{name:n,value:i}}}var rr=[];function Z(e){rr.push(e)}function Qt({name:e}){return nr().test(e)}var nr=()=>new RegExp(`^${ut}([^:^.]+)\\b`);function hn(e,t){return({name:r,value:n})=>{let i=r.match(nr()),o=r.match(/:([a-zA-Z0-9\-:]+)/),s=r.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=t||e[r]||r;return{type:i?i[1]:null,value:o?o[1]:null,modifiers:s.map(c=>c.replace(".","")),expression:n,original:a}}}var dt="DEFAULT",Ae=["ignore","ref","data","id","bind","init","for","mask","model","modelable","transition","show","if",dt,"teleport","element"];function _n(e,t){let r=Ae.indexOf(e.type)===-1?dt:e.type,n=Ae.indexOf(t.type)===-1?dt:t.type;return Ae.indexOf(r)-Ae.indexOf(n)}function B(e,t,r={}){e.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0,cancelable:!0}))}var pt=[],mt=!1;function Te(e=()=>{}){return queueMicrotask(()=>{mt||setTimeout(()=>{Oe()})}),new Promise(t=>{pt.push(()=>{e(),t()})})}function Oe(){for(mt=!1;pt.length;)pt.shift()()}function ir(){mt=!0}function R(e,t){if(typeof ShadowRoot=="function"&&e instanceof ShadowRoot){Array.from(e.children).forEach(i=>R(i,t));return}let r=!1;if(t(e,()=>r=!0),r)return;let n=e.firstElementChild;for(;n;)R(n,t,!1),n=n.nextElementSibling}function O(e,...t){console.warn(`Alpine Warning: ${e}`,...t)}function sr(){document.body||O("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),B(document,"alpine:init"),B(document,"alpine:initializing"),rt(),jt(t=>w(t,R)),_e(t=>gn(t)),Kt((t,r)=>{re(t,r).forEach(n=>n())});let e=t=>!z(t.parentElement,!0);Array.from(document.querySelectorAll(or())).filter(e).forEach(t=>{w(t)}),B(document,"alpine:initialized")}var ht=[],ar=[];function cr(){return ht.map(e=>e())}function or(){return ht.concat(ar).map(e=>e())}function Ce(e){ht.push(e)}function Re(e){ar.push(e)}function z(e,t=!1){return Q(e,r=>{if((t?or():cr()).some(i=>r.matches(i)))return!0})}function Q(e,t){if(!!e){if(t(e))return e;if(e._x_teleportBack&&(e=e._x_teleportBack),!!e.parentElement)return Q(e.parentElement,t)}}function lr(e){return cr().some(t=>e.matches(t))}function w(e,t=R){tr(()=>{t(e,(r,n)=>{re(r,r.attributes).forEach(i=>i()),r._x_ignore&&n()})})}function gn(e){R(e,t=>Qe(t))}function ie(e,t){return Array.isArray(t)?ur(e,t.join(" ")):typeof t=="object"&&t!==null?xn(e,t):typeof t=="function"?ie(e,t()):ur(e,t)}function ur(e,t){let r=o=>o.split(" ").filter(Boolean),n=o=>o.split(" ").filter(s=>!e.classList.contains(s)).filter(Boolean),i=o=>(e.classList.add(...o),()=>{e.classList.remove(...o)});return t=t===!0?t="":t||"",i(n(t))}function xn(e,t){let r=a=>a.split(" ").filter(Boolean),n=Object.entries(t).flatMap(([a,c])=>c?r(a):!1).filter(Boolean),i=Object.entries(t).flatMap(([a,c])=>c?!1:r(a)).filter(Boolean),o=[],s=[];return i.forEach(a=>{e.classList.contains(a)&&(e.classList.remove(a),s.push(a))}),n.forEach(a=>{e.classList.contains(a)||(e.classList.add(a),o.push(a))}),()=>{s.forEach(a=>e.classList.add(a)),o.forEach(a=>e.classList.remove(a))}}function V(e,t){return typeof t=="object"&&t!==null?yn(e,t):bn(e,t)}function yn(e,t){let r={};return Object.entries(t).forEach(([n,i])=>{r[n]=e.style[n],n.startsWith("--")||(n=vn(n)),e.style.setProperty(n,i)}),setTimeout(()=>{e.style.length===0&&e.removeAttribute("style")}),()=>{V(e,r)}}function bn(e,t){let r=e.getAttribute("style",t);return e.setAttribute("style",t),()=>{e.setAttribute("style",r||"")}}function vn(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function oe(e,t=()=>{}){let r=!1;return function(){r?t.apply(this,arguments):(r=!0,e.apply(this,arguments))}}d("transition",(e,{value:t,modifiers:r,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n?wn(e,n,t):En(e,r,t)});function wn(e,t,r){fr(e,ie,""),{enter:i=>{e._x_transition.enter.during=i},"enter-start":i=>{e._x_transition.enter.start=i},"enter-end":i=>{e._x_transition.enter.end=i},leave:i=>{e._x_transition.leave.during=i},"leave-start":i=>{e._x_transition.leave.start=i},"leave-end":i=>{e._x_transition.leave.end=i}}[r](t)}function En(e,t,r){fr(e,V);let n=!t.includes("in")&&!t.includes("out")&&!r,i=n||t.includes("in")||["enter"].includes(r),o=n||t.includes("out")||["leave"].includes(r);t.includes("in")&&!n&&(t=t.filter((h,b)=>b<t.indexOf("out"))),t.includes("out")&&!n&&(t=t.filter((h,b)=>b>t.indexOf("out")));let s=!t.includes("opacity")&&!t.includes("scale"),a=s||t.includes("opacity"),c=s||t.includes("scale"),l=a?0:1,u=c?se(t,"scale",95)/100:1,p=se(t,"delay",0),y=se(t,"origin","center"),M="opacity, transform",W=se(t,"duration",150)/1e3,pe=se(t,"duration",75)/1e3,f="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(e._x_transition.enter.during={transformOrigin:y,transitionDelay:p,transitionProperty:M,transitionDuration:`${W}s`,transitionTimingFunction:f},e._x_transition.enter.start={opacity:l,transform:`scale(${u})`},e._x_transition.enter.end={opacity:1,transform:"scale(1)"}),o&&(e._x_transition.leave.during={transformOrigin:y,transitionDelay:p,transitionProperty:M,transitionDuration:`${pe}s`,transitionTimingFunction:f},e._x_transition.leave.start={opacity:1,transform:"scale(1)"},e._x_transition.leave.end={opacity:l,transform:`scale(${u})`})}function fr(e,t,r={}){e._x_transition||(e._x_transition={enter:{during:r,start:r,end:r},leave:{during:r,start:r,end:r},in(n=()=>{},i=()=>{}){Me(e,t,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){Me(e,t,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(e,t,r,n){let i=()=>{document.visibilityState==="visible"?requestAnimationFrame(r):setTimeout(r)};if(t){e._x_transition&&(e._x_transition.enter||e._x_transition.leave)?e._x_transition.enter&&(Object.entries(e._x_transition.enter.during).length||Object.entries(e._x_transition.enter.start).length||Object.entries(e._x_transition.enter.end).length)?e._x_transition.in(r):i():e._x_transition?e._x_transition.in(r):i();return}e._x_hidePromise=e._x_transition?new Promise((o,s)=>{e._x_transition.out(()=>{},()=>o(n)),e._x_transitioning.beforeCancel(()=>s({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let o=dr(e);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(e)):queueMicrotask(()=>{let s=a=>{let c=Promise.all([a._x_hidePromise,...(a._x_hideChildren||[]).map(s)]).then(([l])=>l());return delete a._x_hidePromise,delete a._x_hideChildren,c};s(e).catch(a=>{if(!a.isFromCancelledTransition)throw a})})})};function dr(e){let t=e.parentNode;if(!!t)return t._x_hidePromise?t:dr(t)}function Me(e,t,{during:r,start:n,end:i}={},o=()=>{},s=()=>{}){if(e._x_transitioning&&e._x_transitioning.cancel(),Object.keys(r).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){o(),s();return}let a,c,l;Sn(e,{start(){a=t(e,n)},during(){c=t(e,r)},before:o,end(){a(),l=t(e,i)},after:s,cleanup(){c(),l()}})}function Sn(e,t){let r,n,i,o=oe(()=>{m(()=>{r=!0,n||t.before(),i||(t.end(),Oe()),t.after(),e.isConnected&&t.cleanup(),delete e._x_transitioning})});e._x_transitioning={beforeCancels:[],beforeCancel(s){this.beforeCancels.push(s)},cancel:oe(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();o()}),finish:o},m(()=>{t.start(),t.during()}),ir(),requestAnimationFrame(()=>{if(r)return;let s=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;s===0&&(s=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),m(()=>{t.before()}),n=!0,requestAnimationFrame(()=>{r||(m(()=>{t.end()}),Oe(),setTimeout(e._x_transitioning.finish,s+a),i=!0)})})}function se(e,t,r){if(e.indexOf(t)===-1)return r;let n=e[e.indexOf(t)+1];if(!n||t==="scale"&&isNaN(n))return r;if(t==="duration"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return t==="origin"&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[n,e[e.indexOf(t)+2]].join(" "):n}var _t=!1;function D(e,t=()=>{}){return(...r)=>_t?t(...r):e(...r)}function pr(e,t){t._x_dataStack||(t._x_dataStack=e._x_dataStack),_t=!0,On(()=>{An(t)}),_t=!1}function An(e){let t=!1;w(e,(n,i)=>{R(n,(o,s)=>{if(t&&lr(o))return s();t=!0,i(o,s)})})}function On(e){let t=K;Ze((r,n)=>{let i=t(r);return Y(i),()=>{}}),e(),Ze(t)}function ae(e,t,r,n=[]){switch(e._x_bindings||(e._x_bindings=A({})),e._x_bindings[t]=r,t=n.includes("camel")?kn(t):t,t){case"value":Tn(e,r);break;case"style":Rn(e,r);break;case"class":Cn(e,r);break;default:Mn(e,t,r);break}}function Tn(e,t){if(e.type==="radio")e.attributes.value===void 0&&(e.value=t),window.fromModel&&(e.checked=mr(e.value,t));else if(e.type==="checkbox")Number.isInteger(t)?e.value=t:!Number.isInteger(t)&&!Array.isArray(t)&&typeof t!="boolean"&&![null,void 0].includes(t)?e.value=String(t):Array.isArray(t)?e.checked=t.some(r=>mr(r,e.value)):e.checked=!!t;else if(e.tagName==="SELECT")Nn(e,t);else{if(e.value===t)return;e.value=t}}function Cn(e,t){e._x_undoAddedClasses&&e._x_undoAddedClasses(),e._x_undoAddedClasses=ie(e,t)}function Rn(e,t){e._x_undoAddedStyles&&e._x_undoAddedStyles(),e._x_undoAddedStyles=V(e,t)}function Mn(e,t,r){[null,void 0,!1].includes(r)&&In(t)?e.removeAttribute(t):(hr(t)&&(r=t),Pn(e,t,r))}function Pn(e,t,r){e.getAttribute(t)!=r&&e.setAttribute(t,r)}function Nn(e,t){let r=[].concat(t).map(n=>n+"");Array.from(e.options).forEach(n=>{n.selected=r.includes(n.value)})}function kn(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function mr(e,t){return e==t}function hr(e){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}function In(e){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(e)}function _r(e,t,r){if(e._x_bindings&&e._x_bindings[t]!==void 0)return e._x_bindings[t];let n=e.getAttribute(t);return n===null?typeof r=="function"?r():r:hr(t)?!![t,"true"].includes(n):n===""?!0:n}function ke(e,t){var r;return function(){var n=this,i=arguments,o=function(){r=null,e.apply(n,i)};clearTimeout(r),r=setTimeout(o,t)}}function Ne(e,t){let r;return function(){let n=this,i=arguments;r||(e.apply(n,i),r=!0,setTimeout(()=>r=!1,t))}}function gr(e){e(I)}var H={},xr=!1;function yr(e,t){if(xr||(H=A(H),xr=!0),t===void 0)return H[e];H[e]=t,typeof t=="object"&&t!==null&&t.hasOwnProperty("init")&&typeof t.init=="function"&&H[e].init(),ye(H[e])}function br(){return H}var vr={};function wr(e,t){vr[e]=typeof t!="function"?()=>t:t}function Er(e){return Object.entries(vr).forEach(([t,r])=>{Object.defineProperty(e,t,{get(){return(...n)=>r(...n)}})}),e}var Sr={};function Ar(e,t){Sr[e]=t}function Or(e,t){return Object.entries(Sr).forEach(([r,n])=>{Object.defineProperty(e,r,{get(){return(...i)=>n.bind(t)(...i)},enumerable:!1})}),e}var Dn={get reactive(){return A},get release(){return Y},get effect(){return K},get raw(){return Ye},version:"3.10.0",flushAndStopDeferringMutations:Vt,dontAutoEvaluateFunctions:Ut,disableEffectScheduling:Pt,setReactivityEngine:It,closestDataStack:N,skipDuringClone:D,addRootSelector:Ce,addInitSelector:Re,addScopeToNode:C,deferMutations:zt,mapAttributes:Z,evaluateLater:_,setEvaluator:Gt,mergeProxies:P,findClosest:Q,closestRoot:z,interceptor:be,transition:Me,setStyles:V,mutateDom:m,directive:d,throttle:Ne,debounce:ke,evaluate:k,initTree:w,nextTick:Te,prefixed:E,prefix:Yt,plugin:gr,magic:x,store:yr,start:sr,clone:pr,bound:_r,$data:xe,data:Ar,bind:wr},I=Dn;function gt(e,t){let r=Object.create(null),n=e.split(",");for(let i=0;i<n.length;i++)r[n[i]]=!0;return t?i=>!!r[i.toLowerCase()]:i=>!!r[i]}var ts={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"HYDRATE_EVENTS",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},rs={[1]:"STABLE",[2]:"DYNAMIC",[3]:"FORWARDED"};var $n="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";var ns=gt($n+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");var Tr={};var xt=Object.assign;var Ln=Object.prototype.hasOwnProperty,ce=(e,t)=>Ln.call(e,t),$=Array.isArray,le=e=>Cr(e)==="[object Map]";var Fn=e=>typeof e=="string",Pe=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object";var jn=Object.prototype.toString,Cr=e=>jn.call(e),Rr=e=>Cr(e).slice(8,-1);var Ie=e=>Fn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e;var De=e=>{let t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Kn=/-(\w)/g,is=De(e=>e.replace(Kn,(t,r)=>r?r.toUpperCase():"")),Bn=/\B([A-Z])/g,os=De(e=>e.replace(Bn,"-$1").toLowerCase()),zn=De(e=>e.charAt(0).toUpperCase()+e.slice(1)),ss=De(e=>e?`on${zn(e)}`:""),yt=(e,t)=>e!==t&&(e===e||t===t);var bt=new WeakMap,fe=[],q,U=Symbol(""),vt=Symbol("");function Vn(e){return e&&e._isEffect===!0}function Mr(e,t=Tr){Vn(e)&&(e=e.raw);let r=Hn(e,t);return t.lazy||r(),r}function Nr(e){e.active&&(kr(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var qn=0;function Hn(e,t){let r=function(){if(!r.active)return e();if(!fe.includes(r)){kr(r);try{return Un(),fe.push(r),q=r,e()}finally{fe.pop(),Pr(),q=fe[fe.length-1]}}};return r.id=qn++,r.allowRecurse=!!t.allowRecurse,r._isEffect=!0,r.active=!0,r.raw=e,r.deps=[],r.options=t,r}function kr(e){let{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}var X=!0,wt=[];function Wn(){wt.push(X),X=!1}function Un(){wt.push(X),X=!0}function Pr(){let e=wt.pop();X=e===void 0?!0:e}function T(e,t,r){if(!X||q===void 0)return;let n=bt.get(e);n||bt.set(e,n=new Map);let i=n.get(r);i||n.set(r,i=new Set),i.has(q)||(i.add(q),q.deps.push(i))}function L(e,t,r,n,i,o){let s=bt.get(e);if(!s)return;let a=new Set,c=u=>{u&&u.forEach(p=>{(p!==q||p.allowRecurse)&&a.add(p)})};if(t==="clear")s.forEach(c);else if(r==="length"&&$(e))s.forEach((u,p)=>{(p==="length"||p>=n)&&c(u)});else switch(r!==void 0&&c(s.get(r)),t){case"add":$(e)?Ie(r)&&c(s.get("length")):(c(s.get(U)),le(e)&&c(s.get(vt)));break;case"delete":$(e)||(c(s.get(U)),le(e)&&c(s.get(vt)));break;case"set":le(e)&&c(s.get(U));break}let l=u=>{u.options.scheduler?u.options.scheduler(u):u()};a.forEach(l)}var Gn=gt("__proto__,__v_isRef,__isVue"),Ir=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Pe)),Yn=$e(),Jn=$e(!1,!0),Zn=$e(!0),Qn=$e(!0,!0),Le={};["includes","indexOf","lastIndexOf"].forEach(e=>{let t=Array.prototype[e];Le[e]=function(...r){let n=g(this);for(let o=0,s=this.length;o<s;o++)T(n,"get",o+"");let i=t.apply(n,r);return i===-1||i===!1?t.apply(n,r.map(g)):i}});["push","pop","shift","unshift","splice"].forEach(e=>{let t=Array.prototype[e];Le[e]=function(...r){Wn();let n=t.apply(this,r);return Pr(),n}});function $e(e=!1,t=!1){return function(n,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_raw"&&o===(e?t?ei:$r:t?Xn:Dr).get(n))return n;let s=$(n);if(!e&&s&&ce(Le,i))return Reflect.get(Le,i,o);let a=Reflect.get(n,i,o);return(Pe(i)?Ir.has(i):Gn(i))||(e||T(n,"get",i),t)?a:Et(a)?!s||!Ie(i)?a.value:a:ue(a)?e?Lr(a):Fe(a):a}}var ti=Fr(),ri=Fr(!0);function Fr(e=!1){return function(r,n,i,o){let s=r[n];if(!e&&(i=g(i),s=g(s),!$(r)&&Et(s)&&!Et(i)))return s.value=i,!0;let a=$(r)&&Ie(n)?Number(n)<r.length:ce(r,n),c=Reflect.set(r,n,i,o);return r===g(o)&&(a?yt(i,s)&&L(r,"set",n,i,s):L(r,"add",n,i)),c}}function ni(e,t){let r=ce(e,t),n=e[t],i=Reflect.deleteProperty(e,t);return i&&r&&L(e,"delete",t,void 0,n),i}function ii(e,t){let r=Reflect.has(e,t);return(!Pe(t)||!Ir.has(t))&&T(e,"has",t),r}function oi(e){return T(e,"iterate",$(e)?"length":U),Reflect.ownKeys(e)}var jr={get:Yn,set:ti,deleteProperty:ni,has:ii,ownKeys:oi},Kr={get:Zn,set(e,t){return!0},deleteProperty(e,t){return!0}},ps=xt({},jr,{get:Jn,set:ri}),ms=xt({},Kr,{get:Qn}),St=e=>ue(e)?Fe(e):e,At=e=>ue(e)?Lr(e):e,Ot=e=>e,je=e=>Reflect.getPrototypeOf(e);function Ke(e,t,r=!1,n=!1){e=e.__v_raw;let i=g(e),o=g(t);t!==o&&!r&&T(i,"get",t),!r&&T(i,"get",o);let{has:s}=je(i),a=n?Ot:r?At:St;if(s.call(i,t))return a(e.get(t));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function Be(e,t=!1){let r=this.__v_raw,n=g(r),i=g(e);return e!==i&&!t&&T(n,"has",e),!t&&T(n,"has",i),e===i?r.has(e):r.has(e)||r.has(i)}function ze(e,t=!1){return e=e.__v_raw,!t&&T(g(e),"iterate",U),Reflect.get(e,"size",e)}function Br(e){e=g(e);let t=g(this);return je(t).has.call(t,e)||(t.add(e),L(t,"add",e,e)),this}function zr(e,t){t=g(t);let r=g(this),{has:n,get:i}=je(r),o=n.call(r,e);o||(e=g(e),o=n.call(r,e));let s=i.call(r,e);return r.set(e,t),o?yt(t,s)&&L(r,"set",e,t,s):L(r,"add",e,t),this}function Vr(e){let t=g(this),{has:r,get:n}=je(t),i=r.call(t,e);i||(e=g(e),i=r.call(t,e));let o=n?n.call(t,e):void 0,s=t.delete(e);return i&&L(t,"delete",e,void 0,o),s}function Hr(){let e=g(this),t=e.size!==0,r=void 0,n=e.clear();return t&&L(e,"clear",void 0,void 0,r),n}function Ve(e,t){return function(n,i){let o=this,s=o.__v_raw,a=g(s),c=t?Ot:e?At:St;return!e&&T(a,"iterate",U),s.forEach((l,u)=>n.call(i,c(l),c(u),o))}}function He(e,t,r){return function(...n){let i=this.__v_raw,o=g(i),s=le(o),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,l=i[e](...n),u=r?Ot:t?At:St;return!t&&T(o,"iterate",c?vt:U),{next(){let{value:p,done:y}=l.next();return y?{value:p,done:y}:{value:a?[u(p[0]),u(p[1])]:u(p),done:y}},[Symbol.iterator](){return this}}}}function F(e){return function(...t){return e==="delete"?!1:this}}var qr={get(e){return Ke(this,e)},get size(){return ze(this)},has:Be,add:Br,set:zr,delete:Vr,clear:Hr,forEach:Ve(!1,!1)},Ur={get(e){return Ke(this,e,!1,!0)},get size(){return ze(this)},has:Be,add:Br,set:zr,delete:Vr,clear:Hr,forEach:Ve(!1,!0)},Wr={get(e){return Ke(this,e,!0)},get size(){return ze(this,!0)},has(e){return Be.call(this,e,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:Ve(!0,!1)},Gr={get(e){return Ke(this,e,!0,!0)},get size(){return ze(this,!0)},has(e){return Be.call(this,e,!0)},add:F("add"),set:F("set"),delete:F("delete"),clear:F("clear"),forEach:Ve(!0,!0)},si=["keys","values","entries",Symbol.iterator];si.forEach(e=>{qr[e]=He(e,!1,!1),Wr[e]=He(e,!0,!1),Ur[e]=He(e,!1,!0),Gr[e]=He(e,!0,!0)});function qe(e,t){let r=t?e?Gr:Ur:e?Wr:qr;return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(ce(r,i)&&i in n?r:n,i,o)}var ai={get:qe(!1,!1)},hs={get:qe(!1,!0)},ci={get:qe(!0,!1)},_s={get:qe(!0,!0)};var Dr=new WeakMap,Xn=new WeakMap,$r=new WeakMap,ei=new WeakMap;function li(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ui(e){return e.__v_skip||!Object.isExtensible(e)?0:li(Rr(e))}function Fe(e){return e&&e.__v_isReadonly?e:Yr(e,!1,jr,ai,Dr)}function Lr(e){return Yr(e,!0,Kr,ci,$r)}function Yr(e,t,r,n,i){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let o=i.get(e);if(o)return o;let s=ui(e);if(s===0)return e;let a=new Proxy(e,s===2?n:r);return i.set(e,a),a}function g(e){return e&&g(e.__v_raw)||e}function Et(e){return Boolean(e&&e.__v_isRef===!0)}x("nextTick",()=>Te);x("dispatch",e=>B.bind(B,e));x("watch",(e,{evaluateLater:t,effect:r})=>(n,i)=>{let o=t(n),s=!0,a,c=r(()=>o(l=>{JSON.stringify(l),s?a=l:queueMicrotask(()=>{i(l,a),a=l}),s=!1}));e._x_effects.delete(c)});x("store",br);x("data",e=>xe(e));x("root",e=>z(e));x("refs",e=>(e._x_refs_proxy||(e._x_refs_proxy=P(fi(e))),e._x_refs_proxy));function fi(e){let t=[],r=e;for(;r;)r._x_refs&&t.push(r._x_refs),r=r.parentNode;return t}var Tt={};function Ct(e){return Tt[e]||(Tt[e]=0),++Tt[e]}function Jr(e,t){return Q(e,r=>{if(r._x_ids&&r._x_ids[t])return!0})}function Zr(e,t){e._x_ids||(e._x_ids={}),e._x_ids[t]||(e._x_ids[t]=Ct(t))}x("id",e=>(t,r=null)=>{let n=Jr(e,t),i=n?n._x_ids[t]:Ct(t);return r?`${t}-${i}-${r}`:`${t}-${i}`});x("el",e=>e);Qr("Focus","focus","focus");Qr("Persist","persist","persist");function Qr(e,t,r){x(t,n=>O(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}d("modelable",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t),o=()=>{let l;return i(u=>l=u),l},s=n(`${t} = __placeholder`),a=l=>s(()=>{},{scope:{__placeholder:l}}),c=o();a(c),queueMicrotask(()=>{if(!e._x_model)return;e._x_removeModelListeners.default();let l=e._x_model.get,u=e._x_model.set;r(()=>a(l())),r(()=>u(o()))})});d("teleport",(e,{expression:t},{cleanup:r})=>{e.tagName.toLowerCase()!=="template"&&O("x-teleport can only be used on a <template> tag",e);let n=document.querySelector(t);n||O(`Cannot find x-teleport element for selector: "${t}"`);let i=e.content.cloneNode(!0).firstElementChild;e._x_teleport=i,i._x_teleportBack=e,e._x_forwardEvents&&e._x_forwardEvents.forEach(o=>{i.addEventListener(o,s=>{s.stopPropagation(),e.dispatchEvent(new s.constructor(s.type,s))})}),C(i,{},e),m(()=>{n.appendChild(i),w(i),i._x_ignore=!0}),r(()=>i.remove())});var Xr=()=>{};Xr.inline=(e,{modifiers:t},{cleanup:r})=>{t.includes("self")?e._x_ignoreSelf=!0:e._x_ignore=!0,r(()=>{t.includes("self")?delete e._x_ignoreSelf:delete e._x_ignore})};d("ignore",Xr);d("effect",(e,{expression:t},{effect:r})=>r(_(e,t)));function de(e,t,r,n){let i=e,o=c=>n(c),s={},a=(c,l)=>u=>l(c,u);if(r.includes("dot")&&(t=di(t)),r.includes("camel")&&(t=pi(t)),r.includes("passive")&&(s.passive=!0),r.includes("capture")&&(s.capture=!0),r.includes("window")&&(i=window),r.includes("document")&&(i=document),r.includes("prevent")&&(o=a(o,(c,l)=>{l.preventDefault(),c(l)})),r.includes("stop")&&(o=a(o,(c,l)=>{l.stopPropagation(),c(l)})),r.includes("self")&&(o=a(o,(c,l)=>{l.target===e&&c(l)})),(r.includes("away")||r.includes("outside"))&&(i=document,o=a(o,(c,l)=>{e.contains(l.target)||l.target.isConnected!==!1&&(e.offsetWidth<1&&e.offsetHeight<1||e._x_isShown!==!1&&c(l))})),r.includes("once")&&(o=a(o,(c,l)=>{c(l),i.removeEventListener(t,o,s)})),o=a(o,(c,l)=>{mi(t)&&hi(l,r)||c(l)}),r.includes("debounce")){let c=r[r.indexOf("debounce")+1]||"invalid-wait",l=Rt(c.split("ms")[0])?Number(c.split("ms")[0]):250;o=ke(o,l)}if(r.includes("throttle")){let c=r[r.indexOf("throttle")+1]||"invalid-wait",l=Rt(c.split("ms")[0])?Number(c.split("ms")[0]):250;o=Ne(o,l)}return i.addEventListener(t,o,s),()=>{i.removeEventListener(t,o,s)}}function di(e){return e.replace(/-/g,".")}function pi(e){return e.toLowerCase().replace(/-(\w)/g,(t,r)=>r.toUpperCase())}function Rt(e){return!Array.isArray(e)&&!isNaN(e)}function _i(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function mi(e){return["keydown","keyup"].includes(e)}function hi(e,t){let r=t.filter(o=>!["window","document","prevent","stop","once"].includes(o));if(r.includes("debounce")){let o=r.indexOf("debounce");r.splice(o,Rt((r[o+1]||"invalid-wait").split("ms")[0])?2:1)}if(r.length===0||r.length===1&&en(e.key).includes(r[0]))return!1;let i=["ctrl","shift","alt","meta","cmd","super"].filter(o=>r.includes(o));return r=r.filter(o=>!i.includes(o)),!(i.length>0&&i.filter(s=>((s==="cmd"||s==="super")&&(s="meta"),e[`${s}Key`])).length===i.length&&en(e.key).includes(r[0]))}function en(e){if(!e)return[];e=_i(e);let t={ctrl:"control",slash:"/",space:"-",spacebar:"-",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"="};return t[e]=e,Object.keys(t).map(r=>{if(t[r]===e)return r}).filter(r=>r)}d("model",(e,{modifiers:t,expression:r},{effect:n,cleanup:i})=>{let o=_(e,r),s=`${r} = rightSideOfExpression($event, ${r})`,a=_(e,s);var c=e.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(e.type)||t.includes("lazy")?"change":"input";let l=gi(e,t,r),u=de(e,c,t,y=>{a(()=>{},{scope:{$event:y,rightSideOfExpression:l}})});e._x_removeModelListeners||(e._x_removeModelListeners={}),e._x_removeModelListeners.default=u,i(()=>e._x_removeModelListeners.default());let p=_(e,`${r} = __placeholder`);e._x_model={get(){let y;return o(M=>y=M),y},set(y){p(()=>{},{scope:{__placeholder:y}})}},e._x_forceModelUpdate=()=>{o(y=>{y===void 0&&r.match(/\./)&&(y=""),window.fromModel=!0,m(()=>ae(e,"value",y)),delete window.fromModel})},n(()=>{t.includes("unintrusive")&&document.activeElement.isSameNode(e)||e._x_forceModelUpdate()})});function gi(e,t,r){return e.type==="radio"&&m(()=>{e.hasAttribute("name")||e.setAttribute("name",r)}),(n,i)=>m(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail||n.target.value;if(e.type==="checkbox")if(Array.isArray(i)){let o=t.includes("number")?Mt(n.target.value):n.target.value;return n.target.checked?i.concat([o]):i.filter(s=>!xi(s,o))}else return n.target.checked;else{if(e.tagName.toLowerCase()==="select"&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map(o=>{let s=o.value||o.text;return Mt(s)}):Array.from(n.target.selectedOptions).map(o=>o.value||o.text);{let o=n.target.value;return t.includes("number")?Mt(o):t.includes("trim")?o.trim():o}}})}function Mt(e){let t=e?parseFloat(e):null;return yi(t)?t:e}function xi(e,t){return e==t}function yi(e){return!Array.isArray(e)&&!isNaN(e)}d("cloak",e=>queueMicrotask(()=>m(()=>e.removeAttribute(E("cloak")))));Re(()=>`[${E("init")}]`);d("init",D((e,{expression:t},{evaluate:r})=>typeof t=="string"?!!t.trim()&&r(t,{},!1):r(t,{},!1)));d("text",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{m(()=>{e.textContent=o})})})});d("html",(e,{expression:t},{effect:r,evaluateLater:n})=>{let i=n(t);r(()=>{i(o=>{m(()=>{e.innerHTML=o,e._x_ignoreSelf=!0,w(e),delete e._x_ignoreSelf})})})});Z(Ee(":",Se(E("bind:"))));d("bind",(e,{value:t,modifiers:r,expression:n,original:i},{effect:o})=>{if(!t)return bi(e,n,i,o);if(t==="key")return vi(e,n);let s=_(e,n);o(()=>s(a=>{a===void 0&&n.match(/\./)&&(a=""),m(()=>ae(e,t,a,r))}))});function bi(e,t,r,n){let i={};Er(i);let o=_(e,t),s=[];for(;s.length;)s.pop()();o(a=>{let c=Object.entries(a).map(([u,p])=>({name:u,value:p})),l=Xt(c);c=c.map(u=>l.find(p=>p.name===u.name)?{name:`x-bind:${u.name}`,value:`"${u.value}"`}:u),re(e,c,r).map(u=>{s.push(u.runCleanups),u()})},{scope:i})}function vi(e,t){e._x_keyExpression=t}Ce(()=>`[${E("data")}]`);d("data",D((e,{expression:t},{cleanup:r})=>{t=t===""?"{}":t;let n={};te(n,e);let i={};Or(i,n);let o=k(e,t,{scope:i});o===void 0&&(o={}),te(o,e);let s=A(o);ye(s);let a=C(e,s);s.init&&k(e,s.init),r(()=>{s.destroy&&k(e,s.destroy),a()})}));d("show",(e,{modifiers:t,expression:r},{effect:n})=>{let i=_(e,r);e._x_doHide||(e._x_doHide=()=>{m(()=>e.style.display="none")}),e._x_doShow||(e._x_doShow=()=>{m(()=>{e.style.length===1&&e.style.display==="none"?e.removeAttribute("style"):e.style.removeProperty("display")})});let o=()=>{e._x_doHide(),e._x_isShown=!1},s=()=>{e._x_doShow(),e._x_isShown=!0},a=()=>setTimeout(s),c=oe(p=>p?s():o(),p=>{typeof e._x_toggleAndCascadeWithTransitions=="function"?e._x_toggleAndCascadeWithTransitions(e,p,s,o):p?a():o()}),l,u=!0;n(()=>i(p=>{!u&&p===l||(t.includes("immediate")&&(p?a():o()),c(p),l=p,u=!1)}))});d("for",(e,{expression:t},{effect:r,cleanup:n})=>{let i=Ei(t),o=_(e,i.items),s=_(e,e._x_keyExpression||"index");e._x_prevKeys=[],e._x_lookup={},r(()=>wi(e,i,o,s)),n(()=>{Object.values(e._x_lookup).forEach(a=>a.remove()),delete e._x_prevKeys,delete e._x_lookup})});function wi(e,t,r,n){let i=s=>typeof s=="object"&&!Array.isArray(s),o=e;r(s=>{Si(s)&&s>=0&&(s=Array.from(Array(s).keys(),f=>f+1)),s===void 0&&(s=[]);let a=e._x_lookup,c=e._x_prevKeys,l=[],u=[];if(i(s))s=Object.entries(s).map(([f,h])=>{let b=tn(t,h,f,s);n(v=>u.push(v),{scope:{index:f,...b}}),l.push(b)});else for(let f=0;f<s.length;f++){let h=tn(t,s[f],f,s);n(b=>u.push(b),{scope:{index:f,...h}}),l.push(h)}let p=[],y=[],M=[],W=[];for(let f=0;f<c.length;f++){let h=c[f];u.indexOf(h)===-1&&M.push(h)}c=c.filter(f=>!M.includes(f));let pe="template";for(let f=0;f<u.length;f++){let h=u[f],b=c.indexOf(h);if(b===-1)c.splice(f,0,h),p.push([pe,f]);else if(b!==f){let v=c.splice(f,1)[0],S=c.splice(b-1,1)[0];c.splice(f,0,S),c.splice(b,0,v),y.push([v,S])}else W.push(h);pe=h}for(let f=0;f<M.length;f++){let h=M[f];a[h]._x_effects&&a[h]._x_effects.forEach(he),a[h].remove(),a[h]=null,delete a[h]}for(let f=0;f<y.length;f++){let[h,b]=y[f],v=a[h],S=a[b],G=document.createElement("div");m(()=>{S.after(G),v.after(S),S._x_currentIfEl&&S.after(S._x_currentIfEl),G.before(v),v._x_currentIfEl&&v.after(v._x_currentIfEl),G.remove()}),ot(S,l[u.indexOf(b)])}for(let f=0;f<p.length;f++){let[h,b]=p[f],v=h==="template"?o:a[h];v._x_currentIfEl&&(v=v._x_currentIfEl);let S=l[b],G=u[b],me=document.importNode(o.content,!0).firstElementChild;C(me,A(S),o),m(()=>{v.after(me),w(me)}),typeof G=="object"&&O("x-for key cannot be an object, it must be a string or an integer",o),a[G]=me}for(let f=0;f<W.length;f++)ot(a[W[f]],l[u.indexOf(W[f])]);o._x_prevKeys=u})}function Ei(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=e.match(n);if(!i)return;let o={};o.items=i[2].trim();let s=i[1].replace(r,"").trim(),a=s.match(t);return a?(o.item=s.replace(t,"").trim(),o.index=a[1].trim(),a[2]&&(o.collection=a[2].trim())):o.item=s,o}function tn(e,t,r,n){let i={};return/^\[.*\]$/.test(e.item)&&Array.isArray(t)?e.item.replace("[","").replace("]","").split(",").map(s=>s.trim()).forEach((s,a)=>{i[s]=t[a]}):/^\{.*\}$/.test(e.item)&&!Array.isArray(t)&&typeof t=="object"?e.item.replace("{","").replace("}","").split(",").map(s=>s.trim()).forEach(s=>{i[s]=t[s]}):i[e.item]=t,e.index&&(i[e.index]=r),e.collection&&(i[e.collection]=n),i}function Si(e){return!Array.isArray(e)&&!isNaN(e)}function rn(){}rn.inline=(e,{expression:t},{cleanup:r})=>{let n=z(e);n._x_refs||(n._x_refs={}),n._x_refs[t]=e,r(()=>delete n._x_refs[t])};d("ref",rn);d("if",(e,{expression:t},{effect:r,cleanup:n})=>{let i=_(e,t),o=()=>{if(e._x_currentIfEl)return e._x_currentIfEl;let a=e.content.cloneNode(!0).firstElementChild;return C(a,{},e),m(()=>{e.after(a),w(a)}),e._x_currentIfEl=a,e._x_undoIf=()=>{R(a,c=>{c._x_effects&&c._x_effects.forEach(he)}),a.remove(),delete e._x_currentIfEl},a},s=()=>{!e._x_undoIf||(e._x_undoIf(),delete e._x_undoIf)};r(()=>i(a=>{a?o():s()})),n(()=>e._x_undoIf&&e._x_undoIf())});d("id",(e,{expression:t},{evaluate:r})=>{r(t).forEach(i=>Zr(e,i))});Z(Ee("@",Se(E("on:"))));d("on",D((e,{value:t,modifiers:r,expression:n},{cleanup:i})=>{let o=n?_(e,n):()=>{};e.tagName.toLowerCase()==="template"&&(e._x_forwardEvents||(e._x_forwardEvents=[]),e._x_forwardEvents.includes(t)||e._x_forwardEvents.push(t));let s=de(e,t,r,a=>{o(()=>{},{scope:{$event:a},params:[a]})});i(()=>s())}));Ue("Collapse","collapse","collapse");Ue("Intersect","intersect","intersect");Ue("Focus","trap","focus");Ue("Mask","mask","mask");function Ue(e,t,r){d(t,n=>O(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,n))}I.setEvaluator(ct);I.setReactivityEngine({reactive:Fe,effect:Mr,release:Nr,raw:g});var kt=I;window.Alpine=kt;queueMicrotask(()=>{kt.start()});})();
