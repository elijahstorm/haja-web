import{S,i as j,s as q,v,w as h,x as k,f as w,t as E,y as C,N as y,k as F,q as f,a as I,l as N,m as O,r as g,h as p,c as P,b as _,I as $,u as d}from"../../chunks/paths-8e1e5da9.js";import{s as R}from"../../chunks/singletons-9ace37fc.js";import{C as T,F as z}from"../../chunks/Casing-838ed69b.js";const A=()=>{const a=R,e={page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},enumerable:!1},session:{get(){return D(),{}},enumerable:!1}}),e},B={subscribe(a){return A().page.subscribe(a)}};function D(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function G(a){let e,r=a[0].status+"",t,o,i=a[0].error.message+"",u,m,l,c;return l=new z({props:{alt:`${a[0].status}, ${a[0].error.message}`}}),{c(){e=F("center"),t=f(r),o=f(": "),u=f(i),m=I(),v(l.$$.fragment)},l(s){e=N(s,"CENTER",{});var n=O(e);t=g(n,r),o=g(n,": "),u=g(n,i),n.forEach(p),m=P(s),h(l.$$.fragment,s)},m(s,n){_(s,e,n),$(e,t),$(e,o),$(e,u),_(s,m,n),k(l,s,n),c=!0},p(s,n){(!c||n&1)&&r!==(r=s[0].status+"")&&d(t,r),(!c||n&1)&&i!==(i=s[0].error.message+"")&&d(u,i);const b={};n&1&&(b.alt=`${s[0].status}, ${s[0].error.message}`),l.$set(b)},i(s){c||(w(l.$$.fragment,s),c=!0)},o(s){E(l.$$.fragment,s),c=!1},d(s){s&&p(e),s&&p(m),C(l,s)}}}function H(a){let e,r;return e=new T({props:{$$slots:{default:[G]},$$scope:{ctx:a}}}),{c(){v(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,o){k(e,t,o),r=!0},p(t,[o]){const i={};o&3&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){r||(w(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){C(e,t)}}}function J(a,e,r){let t;return y(a,B,o=>r(0,t=o)),[t]}class Q extends S{constructor(e){super(),j(this,e,J,H,q,{})}}export{Q as default};