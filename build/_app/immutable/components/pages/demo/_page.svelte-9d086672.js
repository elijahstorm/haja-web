import{S as A,i as C,s as H,k as b,q as E,a as O,l as y,m as k,r as D,h as g,c as P,n as h,b as z,I as _,O as q,B as M,$ as B,D as G,o as J,P as N,M as T,a5 as V,a6 as W}from"../../../chunks/paths-d43acf8f.js";import{g as F}from"../../../chunks/navigation-8e9702f7.js";import"../../../chunks/singletons-44783790.js";function j(n,e,l){const s=n.slice();return s[7]=e[l],s[9]=l,s}function x(n){let e,l;return{c(){e=b("img"),this.h()},l(s){e=y(s,"IMG",{style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){h(e,"style",n[2]),N(e.src,l=T+n[7].src)||h(e,"src",l),h(e,"alt",n[7].alt),h(e,"class","svelte-xf95d2"),V(e,"shown",n[0]==n[9])},m(s,i){z(s,e,i),n[6](e)},p(s,i){i&4&&h(e,"style",s[2]),i&1&&V(e,"shown",s[0]==s[9])},d(s){s&&g(e),n[6](null)}}}function K(n){let e,l,s,i,f,c,m,d,p,v,u=n[3],o=[];for(let a=0;a<u.length;a+=1)o[a]=x(j(n,u,a));return{c(){e=b("section"),l=b("div"),s=b("div"),i=E("\xA0"),f=O(),c=b("div"),m=E("\xA0"),d=E(`
	>
	`);for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=y(a,"SECTION",{class:!0});var r=k(e);l=y(r,"DIV",{class:!0});var t=k(l);s=y(t,"DIV",{class:!0});var w=k(s);i=D(w,"\xA0"),w.forEach(g),f=P(t),c=y(t,"DIV",{class:!0});var S=k(c);m=D(S,"\xA0"),S.forEach(g),t.forEach(g),d=D(r,`
	>
	`);for(let I=0;I<o.length;I+=1)o[I].l(r);r.forEach(g),this.h()},h(){h(s,"class","svelte-xf95d2"),h(c,"class","svelte-xf95d2"),h(l,"class","background svelte-xf95d2"),h(e,"class","svelte-xf95d2")},m(a,r){z(a,e,r),_(e,l),_(l,s),_(s,i),_(l,f),_(l,c),_(c,m),_(e,d);for(let t=0;t<o.length;t+=1)o[t].m(e,null);p||(v=[q(window,"resize",n[5]),q(e,"click",n[4])],p=!0)},p(a,[r]){if(r&15){u=a[3];let t;for(t=0;t<u.length;t+=1){const w=j(a,u,t);o[t]?o[t].p(w,r):(o[t]=x(w),o[t].c(),o[t].m(e,null))}for(;t<o.length;t+=1)o[t].d(1);o.length=u.length}},i:M,o:M,d(a){a&&g(e),B(o,a),p=!1,G(v)}}}function L(n,e,l){const s=[{src:"/showcase/01-1.jpg",alt:"Share and connect with each other"},{src:"/showcase/01-2.jpg",alt:"Welcome to HAJA"}];let i=0,f,c="";const m=()=>{i==s.length-1&&F("/login"),l(0,i++,i)},d=()=>{l(2,c=`width: ${f.offsetHeight*6/9}px;`)};J(d);function p(v){W[v?"unshift":"push"](()=>{f=v,l(1,f)})}return[i,f,c,s,m,d,p]}class X extends A{constructor(e){super(),C(this,e,L,K,H,{})}}export{X as default};
