import{S as Ye,i as Xe,s as Ze,a as Qe,e as V,c as xe,b as J,g as Z,t as U,d as Q,f as q,h as F,j as et,o as ve,k as tt,l as rt,m as nt,n as be,p as W,q as at,r as ot,u as st,v as G,w as K,x as ae,y as z,z as M,A as Be}from"./chunks/index-cc9d6004.js";import{g as Fe,f as Je,s as X,a as ke,i as it}from"./chunks/singletons-ac5849d3.js";import{s as lt}from"./chunks/paths-d365ba56.js";function ct(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ft(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(n,e){const r=new URL(n);for(const o of ut){let a=r[o];Object.defineProperty(r,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return r[Symbol.for("nodejs.util.inspect.custom")]=(o,a,l)=>l(n,a),dt(r),r}function dt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(n){let e=5381;if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)e=e*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ue.delete(o)}return pe(n,e)};const ue=new Map;function _t(n,e,r){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(r==null?void 0:r.body)&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&(a+=`[data-hash="${mt(r.body)}"]`);const l=document.querySelector(a);if(l!=null&&l.textContent){const{body:t,...i}=JSON.parse(l.textContent),f=l.getAttribute("data-ttl");return f&&ue.set(e,{body:t,init:i,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,i))}return pe(n,r)}function ht(n,e){const r=ue.get(n);if(r){if(performance.now()<r.ttl)return new Response(r.body,r.init);ue.delete(n)}return pe(n,e)}const gt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function wt(n){const e=[],r=[];let o=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(yt).map((l,t,i)=>{const f=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(d)return e.push(d[1]),r.push(d[2]),"(?:/(.*))?";const g=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((y,j)=>{if(j%2){const v=gt.exec(y);if(!v)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,B,H,C]=v;return e.push(H),r.push(C),B?"(.*?)":"([^/]+?)"}return g&&y.includes(".")&&(o=!1),y.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:r}}function yt(n){return!/^\([^)]+\)$/.test(n)}function bt(n,e,r,o){const a={};for(let l=0;l<e.length;l+=1){const t=e[l],i=r[l],f=n[l+1]||"";if(i){const d=o[i];if(!d)throw new Error(`Missing "${i}" param matcher`);if(!d(f))return}a[t]=f}return a}function Et(n,e,r,o){const a=new Set(e);return Object.entries(r).map(([i,[f,d,g]])=>{const{pattern:y,names:j,types:v}=wt(i),B={id:i,exec:H=>{const C=y.exec(H);if(C)return bt(C,j,v,o)},errors:[1,...g||[]].map(H=>n[H]),layouts:[0,...d||[]].map(t),leaf:l(f)};return B.errors.length=B.layouts.length=Math.max(B.errors.length,B.layouts.length),B});function l(i){const f=i<0;return f&&(i=~i),[f,n[i]]}function t(i){return i===void 0?i:[a.has(i),n[i]]}}function vt(n){let e,r,o;var a=n[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return a&&(e=G(a,l(n))),{c(){e&&K(e.$$.fragment),r=V()},l(t){e&&ae(e.$$.fragment,t),r=V()},m(t,i){e&&z(e,t,i),J(t,r,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&2&&(f.form=t[1]),a!==(a=t[0][0])){if(e){Z();const d=e;U(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}a?(e=G(a,l(t)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function kt(n){let e,r,o;var a=n[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[Lt]},$$scope:{ctx:t}}}}return a&&(e=G(a,l(n))),{c(){e&&K(e.$$.fragment),r=V()},l(t){e&&ae(e.$$.fragment,t),r=V()},m(t,i){e&&z(e,t,i),J(t,r,i),o=!0},p(t,i){const f={};if(i&4&&(f.data=t[2]),i&1051&&(f.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){Z();const d=e;U(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}a?(e=G(a,l(t)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function $t(n){let e,r,o;var a=n[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return a&&(e=G(a,l(n))),{c(){e&&K(e.$$.fragment),r=V()},l(t){e&&ae(e.$$.fragment,t),r=V()},m(t,i){e&&z(e,t,i),J(t,r,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&2&&(f.form=t[1]),a!==(a=t[0][1])){if(e){Z();const d=e;U(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}a?(e=G(a,l(t)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function Rt(n){let e,r,o;var a=n[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Ot]},$$scope:{ctx:t}}}}return a&&(e=G(a,l(n))),{c(){e&&K(e.$$.fragment),r=V()},l(t){e&&ae(e.$$.fragment,t),r=V()},m(t,i){e&&z(e,t,i),J(t,r,i),o=!0},p(t,i){const f={};if(i&8&&(f.data=t[3]),i&1043&&(f.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){Z();const d=e;U(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}a?(e=G(a,l(t)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function Ot(n){let e,r,o;var a=n[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return a&&(e=G(a,l(n))),{c(){e&&K(e.$$.fragment),r=V()},l(t){e&&ae(e.$$.fragment,t),r=V()},m(t,i){e&&z(e,t,i),J(t,r,i),o=!0},p(t,i){const f={};if(i&16&&(f.data=t[4]),i&2&&(f.form=t[1]),a!==(a=t[0][2])){if(e){Z();const d=e;U(d.$$.fragment,1,0,()=>{M(d,1)}),Q()}a?(e=G(a,l(t)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,r.parentNode,r)):e=null}else a&&e.$set(f)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&U(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&M(e,t)}}}function Lt(n){let e,r,o,a;const l=[Rt,$t],t=[];function i(f,d){return f[0][2]?0:1}return e=i(n),r=t[e]=l[e](n),{c(){r.c(),o=V()},l(f){r.l(f),o=V()},m(f,d){t[e].m(f,d),J(f,o,d),a=!0},p(f,d){let g=e;e=i(f),e===g?t[e].p(f,d):(Z(),U(t[g],1,1,()=>{t[g]=null}),Q(),r=t[e],r?r.p(f,d):(r=t[e]=l[e](f),r.c()),q(r,1),r.m(o.parentNode,o))},i(f){a||(q(r),a=!0)},o(f){U(r),a=!1},d(f){t[e].d(f),f&&F(o)}}}function Ge(n){let e,r=n[6]&&Ke(n);return{c(){e=tt("div"),r&&r.c(),this.h()},l(o){e=rt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=nt(e);r&&r.l(a),a.forEach(F),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),W(e,"position","absolute"),W(e,"left","0"),W(e,"top","0"),W(e,"clip","rect(0 0 0 0)"),W(e,"clip-path","inset(50%)"),W(e,"overflow","hidden"),W(e,"white-space","nowrap"),W(e,"width","1px"),W(e,"height","1px")},m(o,a){J(o,e,a),r&&r.m(e,null)},p(o,a){o[6]?r?r.p(o,a):(r=Ke(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&F(e),r&&r.d()}}}function Ke(n){let e;return{c(){e=at(n[7])},l(r){e=ot(r,n[7])},m(r,o){J(r,e,o)},p(r,o){o&128&&st(e,r[7])},d(r){r&&F(e)}}}function It(n){let e,r,o,a,l;const t=[kt,vt],i=[];function f(g,y){return g[0][1]?0:1}e=f(n),r=i[e]=t[e](n);let d=n[5]&&Ge(n);return{c(){r.c(),o=Qe(),d&&d.c(),a=V()},l(g){r.l(g),o=xe(g),d&&d.l(g),a=V()},m(g,y){i[e].m(g,y),J(g,o,y),d&&d.m(g,y),J(g,a,y),l=!0},p(g,[y]){let j=e;e=f(g),e===j?i[e].p(g,y):(Z(),U(i[j],1,1,()=>{i[j]=null}),Q(),r=i[e],r?r.p(g,y):(r=i[e]=t[e](g),r.c()),q(r,1),r.m(o.parentNode,o)),g[5]?d?d.p(g,y):(d=Ge(g),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(g){l||(q(r),l=!0)},o(g){U(r),l=!1},d(g){i[e].d(g),g&&F(o),d&&d.d(g),g&&F(a)}}}function At(n,e,r){let{stores:o}=e,{page:a}=e,{components:l}=e,{form:t}=e,{data_0:i=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;et(o.page.notify);let g=!1,y=!1,j=null;return ve(()=>{const v=o.page.subscribe(()=>{g&&(r(6,y=!0),r(7,j=document.title||"untitled page"))});return r(5,g=!0),v}),n.$$set=v=>{"stores"in v&&r(8,o=v.stores),"page"in v&&r(9,a=v.page),"components"in v&&r(0,l=v.components),"form"in v&&r(1,t=v.form),"data_0"in v&&r(2,i=v.data_0),"data_1"in v&&r(3,f=v.data_1),"data_2"in v&&r(4,d=v.data_2)},n.$$.update=()=>{n.$$.dirty&768&&o.page.set(a)},[l,t,i,f,d,g,y,j,o,a]}class St extends Ye{constructor(e){super(),Xe(this,e,At,It,Ze,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Pt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Tt=function(n,e){return new URL(n,e).href},ze={},P=function(e,r,o){return!r||r.length===0?e():Promise.all(r.map(a=>{if(a=Tt(a,o),a in ze)return;ze[a]=!0;const l=a.endsWith(".css"),t=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":Pt,l||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),l)return new Promise((f,d)=>{i.addEventListener("load",f),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},Dt={},de=[()=>P(()=>import("./chunks/0-92abf0f5.js"),["chunks/0-92abf0f5.js","chunks/_layout-26cd314b.js","components/pages/_layout.svelte-be1afae9.js","assets/_layout-e92bd9b8.css","chunks/index-cc9d6004.js","chunks/paths-d365ba56.js","chunks/stores-e54d50ee.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css","chunks/index-6db6d14e.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css"],import.meta.url),()=>P(()=>import("./chunks/1-b4fc6665.js"),["chunks/1-b4fc6665.js","components/pages/_error.svelte-0190c8a3.js","chunks/index-cc9d6004.js","chunks/stores-e54d50ee.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/paths-d365ba56.js","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/Icon-f906670f.js","chunks/navigation-b18dd8a0.js","chunks/session-33c98699.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js"],import.meta.url),()=>P(()=>import("./chunks/2-8b994684.js"),["chunks/2-8b994684.js","components/pages/login/_layout.svelte-a89d9d7d.js","chunks/index-cc9d6004.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/paths-d365ba56.js","chunks/session-33c98699.js"],import.meta.url),()=>P(()=>import("./chunks/3-d872b78d.js"),["chunks/3-d872b78d.js","components/pages/_page.svelte-18d8e617.js","assets/_page-f663e9e7.css","chunks/index-cc9d6004.js","chunks/paths-d365ba56.js","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/Icon-f906670f.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/session-33c98699.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/index-6db6d14e.js"],import.meta.url),()=>P(()=>import("./chunks/4-a2527ddd.js"),["chunks/4-a2527ddd.js","components/pages/demo/_page.svelte-ce52faf1.js","assets/_page-ded84af7.css","chunks/index-cc9d6004.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/paths-d365ba56.js"],import.meta.url),()=>P(()=>import("./chunks/5-f7d6152d.js"),["chunks/5-f7d6152d.js","components/pages/login/_page.svelte-65e888b3.js","assets/_page-695bb315.css","chunks/index-cc9d6004.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/index-289acb0e.js","chunks/index-6db6d14e.js","chunks/Icon-f906670f.js","chunks/paths-d365ba56.js","chunks/Logo-27a32ea3.js","assets/Logo-9b0a0540.css"],import.meta.url),()=>P(()=>import("./chunks/6-02b3f322.js"),["chunks/6-02b3f322.js","components/pages/login/help/forgot-password/_page.svelte-f5763062.js","chunks/index-cc9d6004.js","chunks/SmallCenterContentOverBackground-1fefe2ba.js","assets/SmallCenterContentOverBackground-13336779.css","chunks/paths-d365ba56.js","chunks/Logo-27a32ea3.js","assets/Logo-9b0a0540.css","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/index-289acb0e.js","chunks/InfoCard-1735e4c6.js","assets/InfoCard-75528f57.css"],import.meta.url),()=>P(()=>import("./chunks/7-98e717c9.js"),["chunks/7-98e717c9.js","components/pages/login/help/lost-email/_page.svelte-63827ecc.js","assets/_page-d50bc7b1.css","chunks/index-cc9d6004.js","chunks/SmallCenterContentOverBackground-1fefe2ba.js","assets/SmallCenterContentOverBackground-13336779.css","chunks/paths-d365ba56.js","chunks/Logo-27a32ea3.js","assets/Logo-9b0a0540.css","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/index-289acb0e.js","chunks/InfoCard-1735e4c6.js","assets/InfoCard-75528f57.css"],import.meta.url),()=>P(()=>import("./chunks/8-91fca360.js"),["chunks/8-91fca360.js","components/pages/login/help/update-password/_requestLink_/_page.svelte-b8ab04cf.js","chunks/index-cc9d6004.js","chunks/SmallCenterContentOverBackground-1fefe2ba.js","assets/SmallCenterContentOverBackground-13336779.css","chunks/paths-d365ba56.js","chunks/Logo-27a32ea3.js","assets/Logo-9b0a0540.css","chunks/index-0f9529d3-b2b6cfcf.js"],import.meta.url),()=>P(()=>import("./chunks/9-b8cb336a.js"),["chunks/9-b8cb336a.js","components/pages/login/signup/_page.svelte-a925580b.js","chunks/index-cc9d6004.js","chunks/SmallCenterContentOverBackground-1fefe2ba.js","assets/SmallCenterContentOverBackground-13336779.css","chunks/paths-d365ba56.js","chunks/Logo-27a32ea3.js","assets/Logo-9b0a0540.css","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/index-289acb0e.js"],import.meta.url),()=>P(()=>import("./chunks/10-8d4dacd8.js"),["chunks/10-8d4dacd8.js","components/pages/me/_page.svelte-96bba14d.js","assets/_page-f0926f3a.css","chunks/index-cc9d6004.js","chunks/paths-d365ba56.js","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/Icon-f906670f.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/session-33c98699.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/UserContent-375b47e8.js","assets/UserContent-d1f33446.css","chunks/InfoCard-1735e4c6.js","assets/InfoCard-75528f57.css","chunks/TodoList-4f6b895b.js","assets/TodoList-bff30a64.css","chunks/TodoContent-6764fac6.js","assets/TodoContent-1e685663.css","chunks/index-6db6d14e.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css","chunks/stores-e54d50ee.js","chunks/EditableContentPage-29a54351.js","assets/EditableContentPage-0ba49487.css","chunks/ProtectedPage-848a1f9a.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css"],import.meta.url),()=>P(()=>import("./chunks/11-ef689246.js"),["chunks/11-ef689246.js","components/pages/team/_page.svelte-dcfaabdd.js","assets/_page-d59d6951.css","chunks/index-cc9d6004.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/index-289acb0e.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/paths-d365ba56.js","chunks/UserIconList-113026dc.js","assets/UserIconList-3be6faa1.css","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/Icon-f906670f.js","chunks/ProtectedPage-848a1f9a.js"],import.meta.url),()=>P(()=>import("./chunks/12-40317edb.js"),["chunks/12-40317edb.js","components/pages/team/_id_/_page.svelte-6ad3985a.js","chunks/index-cc9d6004.js","chunks/ContentContainer-9c562992.js","assets/ContentContainer-cd7f7dc3.css","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/paths-d365ba56.js","chunks/Icon-f906670f.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/session-33c98699.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css","chunks/UserContent-375b47e8.js","assets/UserContent-d1f33446.css","chunks/InfoCard-1735e4c6.js","assets/InfoCard-75528f57.css","chunks/TodoList-4f6b895b.js","assets/TodoList-bff30a64.css","chunks/TodoContent-6764fac6.js","assets/TodoContent-1e685663.css","chunks/index-6db6d14e.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css","chunks/stores-e54d50ee.js","chunks/EditableContentPage-29a54351.js","assets/EditableContentPage-0ba49487.css","chunks/ProtectedPage-848a1f9a.js","chunks/UserIconList-113026dc.js","assets/UserIconList-3be6faa1.css"],import.meta.url),()=>P(()=>import("./chunks/13-4b47e32a.js"),["chunks/13-4b47e32a.js","components/pages/team/_id_/edit/_page.svelte-bb347fb0.js","chunks/index-cc9d6004.js","chunks/EditableContentPage-29a54351.js","assets/EditableContentPage-0ba49487.css","chunks/ProtectedPage-848a1f9a.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/paths-d365ba56.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css","chunks/Icon-f906670f.js","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/TodoContent-6764fac6.js","assets/TodoContent-1e685663.css","chunks/index-6db6d14e.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css","chunks/stores-e54d50ee.js"],import.meta.url),()=>P(()=>import("./chunks/14-a9bf5717.js"),["chunks/14-a9bf5717.js","components/pages/test/_page.svelte-1d453391.js","chunks/index-cc9d6004.js"],import.meta.url),()=>P(()=>import("./chunks/15-61b448e5.js"),["chunks/15-61b448e5.js","components/pages/test/colors/_page.svelte-5d9185ba.js","assets/_page-b28fd92e.css","chunks/index-cc9d6004.js","chunks/paths-d365ba56.js"],import.meta.url),()=>P(()=>import("./chunks/16-48b0b345.js"),["chunks/16-48b0b345.js","components/pages/todo/_page.svelte-f40e5163.js","chunks/index-cc9d6004.js","chunks/TodoList-4f6b895b.js","assets/TodoList-bff30a64.css","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/index-289acb0e.js","chunks/Icon-f906670f.js","chunks/TodoContent-6764fac6.js","assets/TodoContent-1e685663.css","chunks/index-6db6d14e.js","chunks/paths-d365ba56.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css","chunks/stores-e54d50ee.js","chunks/singletons-ac5849d3.js","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/navigation-b18dd8a0.js","chunks/ProtectedPage-848a1f9a.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css"],import.meta.url),()=>P(()=>import("./chunks/17-b36e2bee.js"),["chunks/17-b36e2bee.js","components/pages/todo/_source_-_isTeam_/_id_/_page.svelte-3c0710bb.js","chunks/index-cc9d6004.js","chunks/ContentContainer-9c562992.js","assets/ContentContainer-cd7f7dc3.css","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/paths-d365ba56.js","chunks/Icon-f906670f.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/session-33c98699.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css","chunks/UserContent-375b47e8.js","assets/UserContent-d1f33446.css","chunks/InfoCard-1735e4c6.js","assets/InfoCard-75528f57.css","chunks/TodoList-4f6b895b.js","assets/TodoList-bff30a64.css","chunks/TodoContent-6764fac6.js","assets/TodoContent-1e685663.css","chunks/index-6db6d14e.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css","chunks/stores-e54d50ee.js","chunks/EditableContentPage-29a54351.js","assets/EditableContentPage-0ba49487.css","chunks/ProtectedPage-848a1f9a.js","chunks/UserIconList-113026dc.js","assets/UserIconList-3be6faa1.css"],import.meta.url),()=>P(()=>import("./chunks/18-c9539c11.js"),["chunks/18-c9539c11.js","components/pages/user/_page.svelte-49084a35.js","chunks/index-cc9d6004.js","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/paths-d365ba56.js","chunks/Icon-f906670f.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/session-33c98699.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/ProtectedPage-848a1f9a.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css"],import.meta.url),()=>P(()=>import("./chunks/19-ae244ee9.js"),["chunks/19-ae244ee9.js","components/pages/user/_id_/_page.svelte-d6879cb9.js","chunks/index-cc9d6004.js","chunks/ContentContainer-9c562992.js","assets/ContentContainer-cd7f7dc3.css","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/paths-d365ba56.js","chunks/Icon-f906670f.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/session-33c98699.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css","chunks/UserContent-375b47e8.js","assets/UserContent-d1f33446.css","chunks/InfoCard-1735e4c6.js","assets/InfoCard-75528f57.css","chunks/TodoList-4f6b895b.js","assets/TodoList-bff30a64.css","chunks/TodoContent-6764fac6.js","assets/TodoContent-1e685663.css","chunks/index-6db6d14e.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css","chunks/stores-e54d50ee.js","chunks/EditableContentPage-29a54351.js","assets/EditableContentPage-0ba49487.css","chunks/ProtectedPage-848a1f9a.js","chunks/UserIconList-113026dc.js","assets/UserIconList-3be6faa1.css"],import.meta.url),()=>P(()=>import("./chunks/20-aba094e7.js"),["chunks/20-aba094e7.js","components/pages/user/_id_/edit/_page.svelte-1be53cc7.js","chunks/index-cc9d6004.js","chunks/EditableContentPage-29a54351.js","assets/EditableContentPage-0ba49487.css","chunks/ProtectedPage-848a1f9a.js","chunks/navigation-b18dd8a0.js","chunks/singletons-ac5849d3.js","chunks/index-289acb0e.js","chunks/paths-d365ba56.js","chunks/auth-6dbf0ee1.js","chunks/index-0f9529d3-b2b6cfcf.js","chunks/session-33c98699.js","chunks/Loader-eb0e0db0.js","assets/Loader-41151d52.css","chunks/Icon-f906670f.js","chunks/Casing-d9eaf229.js","assets/Casing-e8be0ced.css","chunks/TodoContent-6764fac6.js","assets/TodoContent-1e685663.css","chunks/index-6db6d14e.js","chunks/Toasts.svelte_svelte_type_style_lang-e3df2f20.js","assets/Toasts-908a86e5.css","chunks/stores-e54d50ee.js"],import.meta.url)],Nt=[],jt={"":[3],demo:[4],login:[5,[2]],me:[10],team:[11],test:[14],todo:[16],user:[18],"login/signup":[9,[2]],"test/colors":[15],"login/help/forgot-password":[6,[2]],"login/help/lost-email":[7,[2]],"login/help/update-password/[requestLink]":[-9,[2]],"todo/[source]-[isTeam]/[id]":[-18],"team/[id]":[-13],"user/[id]":[-20],"team/[id]/edit":[-14],"user/[id]/edit":[-21]},Vt={handleError:({error:n})=>{console.error(n)}};class $e{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,r){this.status=e,this.location=r}}const Ut="/__data.json";async function qt(n){var e;for(const r in n)if(typeof((e=n[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([o,a])=>[o,await a])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ct=-1,Bt=-2,Ft=-3,Jt=-4,Gt=-5,Kt=-6;function zt(n){const e=JSON.parse(n);if(typeof e=="number")return a(e);const r=e,o=Array(r.length);function a(l){if(l===Ct)return;if(l===Ft)return NaN;if(l===Jt)return 1/0;if(l===Gt)return-1/0;if(l===Kt)return-0;if(l in o)return o[l];const t=r[l];if(!t||typeof t!="object")o[l]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":o[l]=new Date(t[1]);break;case"Set":const f=new Set;o[l]=f;for(let y=1;y<t.length;y+=1)f.add(a(t[y]));break;case"Map":const d=new Map;o[l]=d;for(let y=1;y<t.length;y+=2)d.set(a(t[y]),a(t[y+1]));break;case"RegExp":o[l]=new RegExp(t[1],t[2]);break;case"Object":o[l]=Object(t[1]);break;case"BigInt":o[l]=BigInt(t[1]);break;case"null":const g=Object.create(null);o[l]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=a(t[y+1]);break}else{const i=new Array(t.length);o[l]=i;for(let f=0;f<t.length;f+=1){const d=t[f];d!==Bt&&(i[f]=a(d))}}else{const i={};o[l]=i;for(const f in t){const d=t[f];i[f]=a(d)}}return o[l]}return a(0)}const We="sveltekit:scroll",Y="sveltekit:index",le=Et(de,Nt,jt,Dt),Re=de[0],Oe=de[1];Re();Oe();let ne={};try{ne=JSON.parse(sessionStorage[We])}catch{}function Ee(n){ne[n]=ke()}function Mt({target:n,base:e,trailing_slash:r}){var Ue;const o=[];let a=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},i=!1,f=!1,d=!0,g=!1,y=!1,j,v=(Ue=history.state)==null?void 0:Ue[Y];v||(v=Date.now(),history.replaceState({...history.state,[Y]:v},"",location.href));const B=ne[v];B&&(history.scrollRestoration="manual",scrollTo(B.x,B.y));let H=!1,C,Le,oe;async function Ie(){oe=oe||Promise.resolve(),await oe,oe=null;const s=new URL(location.href),p=ge(s,!0);a=null,await Se(p,s,[])}async function me(s,{noscroll:p=!1,replaceState:m=!1,keepfocus:c=!1,state:u={}},_,h){return typeof s=="string"&&(s=new URL(s,Fe(document))),we({url:s,scroll:p?ke():null,keepfocus:c,redirect_chain:_,details:{state:u,replaceState:m},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ae(s){const p=ge(s,!1);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a={id:p.id,promise:De(p)},a.promise}async function Se(s,p,m,c,u={},_){var $,k;Le=u;let h=s&&await De(s);if(h||(h=await Ve(p,null,re(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(s==null?void 0:s.url)||p,Le!==u)return!1;if(h.type==="redirect")if(m.length>10||m.includes(p.pathname))h=await se({status:500,error:re(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return me(new URL(h.location,p).href,{},[...m,p.pathname],u),!1;else((k=($=h.props)==null?void 0:$.page)==null?void 0:k.status)>=400&&await X.updated.check()&&await ie(p);if(o.length=0,y=!1,g=!0,c&&c.details){const{details:b}=c,E=b.replaceState?0:1;b.state[Y]=v+=E,history[b.replaceState?"replaceState":"pushState"](b.state,"",p)}if(a=null,f){t=h.state,h.props.page&&(h.props.page.url=p);const b=fe();j.$set(h.props),b()}else Pe(h);if(c){const{scroll:b,keepfocus:E}=c;if(!E){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var A;(A=getSelection())==null||A.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Be(),d){const O=p.hash&&document.getElementById(p.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Be();d=!0,h.props.page&&(C=h.props.page),_&&_(),g=!1}function Pe(s){var u,_;t=s.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),C=s.props.page;const m=fe();j=new St({target:n,props:{...s.props,stores:X},hydrate:!0}),m();const c={from:null,to:ce("to",{params:t.params,routeId:(_=(u=t.route)==null?void 0:u.id)!=null?_:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(h=>h(c)),f=!0}async function ee({url:s,params:p,branch:m,status:c,error:u,route:_,form:h}){var I;const $=m.filter(Boolean),k={type:"loaded",state:{url:s,params:p,branch:m,error:u,route:_},props:{components:$.map(A=>A.node.component)}};h!==void 0&&(k.props.form=h);let b={},E=!C;for(let A=0;A<$.length;A+=1){const D=$[A];b={...b,...D.data},(E||!t.branch.some(N=>N===D))&&(k.props[`data_${A}`]=b,E=E||Object.keys((I=D.data)!=null?I:{}).length>0)}if(E||(E=Object.keys(C.data).length!==Object.keys(b).length),!t.url||s.href!==t.url.href||t.error!==u||h!==void 0||E){k.props.page={error:u,params:p,routeId:_&&_.id,status:c,url:s,form:h,data:E?b:C.data};const A=(D,N)=>{Object.defineProperty(k.props.page,D,{get:()=>{throw new Error(`$page.${D} has been replaced by $page.url.${N}`)}})};A("origin","origin"),A("path","pathname"),A("query","searchParams")}return k}async function _e({loader:s,parent:p,url:m,params:c,routeId:u,server_data_node:_}){var b,E,O,I,A;let h=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await s();if((b=k.shared)!=null&&b.load){let D=function(...L){for(const w of L){const{href:R}=new URL(w,m);$.dependencies.add(R)}};const N={routeId:u,params:new Proxy(c,{get:(L,w)=>($.params.add(w),L[w])}),data:(E=_==null?void 0:_.data)!=null?E:null,url:pt(m,()=>{$.url=!0}),async fetch(L,w){let R;L instanceof Request?(R=L.url,w={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...w}):R=L;const T=new URL(R,m).href;return D(T),f?ht(T,w):_t(R,T,w)},setHeaders:()=>{},depends:D,parent(){return $.parent=!0,p()}};Object.defineProperties(N,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(O=await k.shared.load.call(null,N))!=null?O:null,h=h?await qt(h):null}return{node:k,loader:s,server:_,shared:(I=k.shared)!=null&&I.load?{type:"data",data:h,uses:$}:null,data:(A=h!=null?h:_==null?void 0:_.data)!=null?A:null}}function Te(s,p,m,c){if(y)return!0;if(!m)return!1;if(m.parent&&p||m.url&&s)return!0;for(const u of m.params)if(c[u]!==t.params[u])return!0;for(const u of m.dependencies)if(o.some(_=>_(new URL(u))))return!0;return!1}function he(s,p){var m,c;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((m=s.uses.dependencies)!=null?m:[]),params:new Set((c=s.uses.params)!=null?c:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&p!=null?p:null}async function De({id:s,invalidating:p,url:m,params:c,route:u}){var L;if((a==null?void 0:a.id)===s)return a.promise;const{errors:_,layouts:h,leaf:$}=u,k=[...h,$];_.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let b=null;const E=t.url?s!==t.url.pathname+t.url.search:!1,O=k.reduce((w,R,T)=>{var te;const S=t.branch[T],x=!!(R!=null&&R[0])&&((S==null?void 0:S.loader)!==R[1]||Te(E,w.some(Boolean),(te=S.server)==null?void 0:te.uses,c));return w.push(x),w},[]);if(O.some(Boolean)){try{b=await He(m,O)}catch(w){return se({status:500,error:re(w,{url:m,params:c,routeId:u.id}),url:m,routeId:u.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let A=!1;const D=k.map(async(w,R)=>{var te;if(!w)return;const T=t.branch[R],S=I==null?void 0:I[R];if((!S||S.type==="skip")&&w[1]===(T==null?void 0:T.loader)&&!Te(E,A,(te=T.shared)==null?void 0:te.uses,c))return T;if(A=!0,(S==null?void 0:S.type)==="error")throw S;return _e({loader:w[1],url:m,params:c,routeId:u.id,parent:async()=>{var Ce;const qe={};for(let ye=0;ye<R;ye+=1)Object.assign(qe,(Ce=await D[ye])==null?void 0:Ce.data);return qe},server_data_node:he(S===void 0&&w[0]?{type:"skip"}:S!=null?S:null,T==null?void 0:T.server)})});for(const w of D)w.catch(()=>{});const N=[];for(let w=0;w<k.length;w+=1)if(k[w])try{N.push(await D[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let T=500,S;I!=null&&I.includes(R)?(T=(L=R.status)!=null?L:T,S=R.error):R instanceof $e?(T=R.status,S=R.body):S=re(R,{params:c,url:m,routeId:u.id});const x=await Ne(w,N,_);return x?await ee({url:m,params:c,branch:N.slice(0,x.idx).concat(x.node),status:T,error:S,route:u}):await Ve(m,u.id,S,T)}else N.push(void 0);return await ee({url:m,params:c,branch:N,status:200,error:null,route:u,form:p?void 0:null})}async function Ne(s,p,m){for(;s--;)if(m[s]){let c=s;for(;!p[c];)c-=1;try{return{idx:c+1,node:{node:await m[s](),loader:m[s],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:s,error:p,url:m,routeId:c}){var b;const u={},_=await Re();let h=null;if(_.server)try{const E=await He(m,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;h=(b=E.nodes[0])!=null?b:null}catch{(m.origin!==location.origin||m.pathname!==location.pathname||i)&&await ie(m)}const $=await _e({loader:Re,url:m,params:u,routeId:c,parent:()=>Promise.resolve({}),server_data_node:he(h)}),k={node:await Oe(),loader:Oe,shared:null,server:null,data:null};return await ee({url:m,params:u,branch:[$,k],status:s,error:p,route:null})}function ge(s,p){if(je(s))return;const m=decodeURI(s.pathname.slice(e.length)||"/");for(const c of le){const u=c.exec(m);if(u){const _=new URL(s.origin+ct(s.pathname,r)+s.search+s.hash);return{id:_.pathname+_.search,invalidating:p,route:c,params:ft(u),url:_}}}}function je(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}async function we({url:s,scroll:p,keepfocus:m,redirect_chain:c,details:u,type:_,delta:h,nav_token:$,accepted:k,blocked:b}){var D,N,L,w;let E=!1;const O=ge(s,!1),I={from:ce("from",{params:t.params,routeId:(N=(D=t.route)==null?void 0:D.id)!=null?N:null,url:t.url}),to:ce("to",{params:(L=O==null?void 0:O.params)!=null?L:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:s}),type:_};h!==void 0&&(I.delta=h);const A={...I,cancel:()=>{E=!0}};if(l.before_navigate.forEach(R=>R(A)),E){b();return}Ee(v),k(),f&&X.navigating.set(I),await Se(O,s,c,{scroll:p,keepfocus:m,details:u},$,()=>{l.after_navigate.forEach(R=>R(I)),X.navigating.set(null)})}async function Ve(s,p,m,c){return s.origin===location.origin&&s.pathname===location.pathname&&!i?await se({status:c,error:m,url:s,routeId:p}):await ie(s)}function ie(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{ve(()=>(l.after_navigate.push(s),()=>{const p=l.after_navigate.indexOf(s);l.after_navigate.splice(p,1)}))},before_navigate:s=>{ve(()=>(l.before_navigate.push(s),()=>{const p=l.before_navigate.indexOf(s);l.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(s,p={})=>me(s,p,[]),invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:p}=new URL(s,location.href);o.push(m=>m.href===p)}return Ie()},invalidateAll:()=>(y=!0,Ie()),prefetch:async s=>{const p=new URL(s,Fe(document));await Ae(p)},prefetch_routes:async s=>{const m=(s?le.filter(c=>s.some(u=>c.exec(u))):le).map(c=>Promise.all([...c.layouts,c.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(m)},apply_action:async s=>{if(s.type==="error"){const p=new URL(location.href),{branch:m,route:c}=t;if(!c)return;const u=await Ne(t.branch.length,m,c.errors);if(u){const _=await ee({url:p,params:t.params,branch:m.slice(0,u.idx).concat(u.node),status:500,error:s.error,route:c});t=_.state;const h=fe();j.$set(_.props),h()}}else if(s.type==="redirect")me(s.location,{},[]);else{const p={form:s.data,page:{...C,form:s.data,status:s.status}},m=fe();j.$set(p),m()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{var h,$;let u=!1;const _={from:ce("from",{params:t.params,routeId:($=(h=t.route)==null?void 0:h.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};l.before_navigate.forEach(k=>k(_)),u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(v);try{sessionStorage[We]=JSON.stringify(ne)}catch{}}});const s=c=>{const{url:u,options:_}=Je(c);if(u&&_.prefetch){if(je(u))return;Ae(u)}};let p;const m=c=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=c.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",m),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",c=>{if(c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const{a:u,url:_,options:h}=Je(c);if(!u||!_)return;const $=u instanceof SVGAElement;if(!$&&!(_.protocol==="https:"||_.protocol==="http:"))return;const k=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||k.includes("external")||h.reload||($?u.target.baseVal:u.target))return;const[b,E]=_.href.split("#");if(E!==void 0&&b===location.href.split("#")[0]){H=!0,Ee(v),t.url=_,X.page.set({...C,url:_}),X.page.notify();return}we({url:_,scroll:h.noscroll?ke():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault(),type:"link"})}),addEventListener("popstate",c=>{if(c.state){if(c.state[Y]===v)return;const u=c.state[Y]-v;we({url:new URL(location.href),scroll:ne[c.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{v=c.state[Y]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[Y]:++v},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&X.navigating.set(null)})},_hydrate:async({status:s,error:p,node_ids:m,params:c,routeId:u,data:_,form:h})=>{var b;i=!0;const $=new URL(location.href);let k;try{const E=m.map(async(O,I)=>{const A=_[I];return _e({loader:de[O],url:$,params:c,routeId:u,parent:async()=>{const D={};for(let N=0;N<I;N+=1)Object.assign(D,(await E[N]).data);return D},server_data_node:he(A)})});k=await ee({url:$,params:c,branch:await Promise.all(E),status:s,error:p,form:h,route:(b=le.find(O=>O.id===u))!=null?b:null})}catch(E){if(E instanceof Me){await ie(new URL(E.location,location.href));return}k=await se({status:E instanceof $e?E.status:500,error:re(E,{url:$,params:c,routeId:u}),url:$,routeId:u})}Pe(k)}}}async function He(n,e){const r=new URL(n);r.pathname=n.pathname.replace(/\/$/,"")+Ut;const o=await pe(r.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),a=await o.text();if(!o.ok)throw new Error(JSON.parse(a));return zt(a)}function re(n,e){var r;return n instanceof $e?n.body:(r=Vt.handleError({error:n,event:e}))!=null?r:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Ht=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(n,e){for(const r of Ht)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${n}.${r} should now be ${n}.url.${r}`)},enumerable:!1});return e}function fe(){return()=>{}}async function Zt({env:n,hydrate:e,paths:r,target:o,trailing_slash:a}){lt(r);const l=Mt({target:o,base:r.base,trailing_slash:a});it({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Zt as start};
