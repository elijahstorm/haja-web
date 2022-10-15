import{S as O,i as S,s as U,k as b,l as y,m as E,h as m,n as k,b as d,H as I,J as K,g as z,t as v,d as B,f as h,D as Y,a as L,q as N,c as V,r as j,_ as Z,B as _,w as T,x as P,y as D,z as C,e as q,O as x,ag as ee,u as te,$ as re,a0 as se}from"../../../chunks/index-cc9d6004.js";import{e as le,d as ae}from"../../../chunks/auth-6dbf0ee1.js";import{g as ne}from"../../../chunks/navigation-52c349ec.js";import{U as oe}from"../../../chunks/UserIconList-99296e92.js";import{F as ie,C as ce}from"../../../chunks/Casing-69e2d7c0.js";import{b as ue}from"../../../chunks/paths-d365ba56.js";import{P as fe}from"../../../chunks/ProtectedPage-4f04260b.js";import{L as pe}from"../../../chunks/Loader-eb0e0db0.js";const me=async({query:o="users",value:t=ae(),amount:r=10})=>{const s="updatedOn";let n,c=[];t=await t;try{n=await le({isTeam:!0,amount:r,timestamp:s,queries:[{type:o,compare:"array-contains",value:t}]})}catch(l){return l}return n.forEach(l=>{var i,p,u;const a=l.data();c.push({contentType:"team",id:(i=a.id)!=null?i:l.id,title:(p=a.title)==null?void 0:p.trim(),caption:(u=a.caption)==null?void 0:u.trim(),picture:`https://firebasestorage.googleapis.com/v0/b/haja-project.appspot.com/o/${a.picture}`,private:a.private,users:a.users})}),c};function _e(o){let t,r,e,s,n,c;return{c(){t=b("div"),r=b("img"),s=L(),n=b("p"),c=N("Team not found"),this.h()},l(l){t=y(l,"DIV",{class:!0});var a=E(t);r=y(a,"IMG",{src:!0,alt:!0}),a.forEach(m),s=V(l),n=y(l,"P",{class:!0});var i=E(n);c=j(i,"Team not found"),i.forEach(m),this.h()},h(){Z(r.src,e=X)||k(r,"src",e),k(r,"alt","team not found"),k(t,"class","background svelte-4vpts7"),k(n,"class","caption bold alert svelte-4vpts7")},m(l,a){d(l,t,a),I(t,r),d(l,s,a),d(l,n,a),I(n,c)},p:_,i:_,o:_,d(l){l&&m(t),l&&m(s),l&&m(n)}}}function de(o){let t,r,e,s,n,c,l,a,i,p,u,g,$,G=o[3].length+"",F,M;return r=new ie({props:{src:o[4],alt:`team ${o[1]}`}}),u=new oe({props:{users:o[3],hideMe:!0}}),{c(){t=b("div"),T(r.$$.fragment),e=L(),s=b("p"),n=N(o[1]),c=L(),l=b("p"),a=N(o[2]),i=L(),p=b("div"),T(u.$$.fragment),g=L(),$=b("p"),F=N(G),this.h()},l(f){t=y(f,"DIV",{class:!0});var w=E(t);P(r.$$.fragment,w),w.forEach(m),e=V(f),s=y(f,"P",{class:!0});var H=E(s);n=j(H,o[1]),H.forEach(m),c=V(f),l=y(f,"P",{class:!0});var J=E(l);a=j(J,o[2]),J.forEach(m),i=V(f),p=y(f,"DIV",{class:!0});var A=E(p);P(u.$$.fragment,A),g=V(A),$=y(A,"P",{class:!0});var Q=E($);F=j(Q,G),Q.forEach(m),A.forEach(m),this.h()},h(){k(t,"class","background svelte-4vpts7"),k(s,"class","title bold svelte-4vpts7"),k(l,"class","caption svelte-4vpts7"),k($,"class","bold svelte-4vpts7"),k(p,"class","info svelte-4vpts7")},m(f,w){d(f,t,w),D(r,t,null),d(f,e,w),d(f,s,w),I(s,n),d(f,c,w),d(f,l,w),I(l,a),d(f,i,w),d(f,p,w),D(u,p,null),I(p,g),I(p,$),I($,F),M=!0},p:_,i(f){M||(h(r.$$.fragment,f),h(u.$$.fragment,f),M=!0)},o(f){v(r.$$.fragment,f),v(u.$$.fragment,f),M=!1},d(f){f&&m(t),C(r),f&&m(e),f&&m(s),f&&m(c),f&&m(l),f&&m(i),f&&m(p),C(u)}}}function $e(o){let t,r,e,s,n,c,l;const a=[de,_e],i=[];function p(u,g){return typeof u[0]!="string"?0:1}return e=p(o),s=i[e]=a[e](o),{c(){t=b("div"),r=b("div"),s.c(),this.h()},l(u){t=y(u,"DIV",{class:!0});var g=E(t);r=y(g,"DIV",{class:!0});var $=E(r);s.l($),$.forEach(m),g.forEach(m),this.h()},h(){k(r,"class","grid svelte-4vpts7"),k(t,"class","card svelte-4vpts7")},m(u,g){d(u,t,g),I(t,r),i[e].m(r,null),n=!0,c||(l=[K(t,"click",o[5]),K(t,"keypress",o[5])],c=!0)},p(u,[g]){let $=e;e=p(u),e===$?i[e].p(u,g):(z(),v(i[$],1,1,()=>{i[$]=null}),B(),s=i[e],s?s.p(u,g):(s=i[e]=a[e](u),s.c()),h(s,1),s.m(r,null))},i(u){n||(h(s),n=!0)},o(u){v(s),n=!1},d(u){u&&m(t),i[e].d(),c=!1,Y(l)}}}const X="/404.png";function ve(o,t,r){let{team:e}=t;const{title:s,caption:n,picture:c,users:l}=typeof e=="string"?{title:"",caption:"",picture:X,users:[]}:e,a=c,i=()=>{typeof e!="string"&&ne(`${ue}/team/${e.id}`)};return o.$$set=p=>{"team"in p&&r(0,e=p.team)},[e,s,n,l,a,i]}class he extends O{constructor(t){super(),S(this,t,ve,$e,U,{team:0})}}function R(o,t,r){const e=o.slice();return e[1]=t[r],e}function ge(o){let t=[],r=new Map,e,s,n=o[0];const c=l=>l[1].id;for(let l=0;l<n.length;l+=1){let a=R(o,n,l),i=c(a);r.set(i,t[l]=W(i,a))}return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=q()},l(l){for(let a=0;a<t.length;a+=1)t[a].l(l);e=q()},m(l,a){for(let i=0;i<t.length;i+=1)t[i].m(l,a);d(l,e,a),s=!0},p(l,a){a&1&&(n=l[0],z(),t=x(t,a,c,1,l,n,r,e.parentNode,ee,W,e,R),B())},i(l){if(!s){for(let a=0;a<n.length;a+=1)h(t[a]);s=!0}},o(l){for(let a=0;a<t.length;a+=1)v(t[a]);s=!1},d(l){for(let a=0;a<t.length;a+=1)t[a].d(l);l&&m(e)}}}function ke(o){let t;return{c(){t=N("No teams joined!")},l(r){t=j(r,"No teams joined!")},m(r,e){d(r,t,e)},p:_,i:_,o:_,d(r){r&&m(t)}}}function be(o){let t;return{c(){t=N(o[0])},l(r){t=j(r,o[0])},m(r,e){d(r,t,e)},p(r,e){e&1&&te(t,r[0])},i:_,o:_,d(r){r&&m(t)}}}function W(o,t){let r,e,s,n;return e=new he({props:{team:t[1]}}),{key:o,first:null,c(){r=b("div"),T(e.$$.fragment),s=L(),this.h()},l(c){r=y(c,"DIV",{class:!0});var l=E(r);P(e.$$.fragment,l),s=V(l),l.forEach(m),this.h()},h(){k(r,"class","svelte-1g76rm0"),this.first=r},m(c,l){d(c,r,l),D(e,r,null),I(r,s),n=!0},p(c,l){t=c;const a={};l&1&&(a.team=t[1]),e.$set(a)},i(c){n||(h(e.$$.fragment,c),n=!0)},o(c){v(e.$$.fragment,c),n=!1},d(c){c&&m(r),C(e)}}}function ye(o){let t,r,e,s,n;const c=[be,ke,ge],l=[];function a(i,p){return p&1&&(t=null),t==null&&(t=typeof i[0]=="string"||!Array.isArray(i[0])),t?0:i[0].length==0?1:2}return r=a(o,-1),e=l[r]=c[r](o),{c(){e.c(),s=q()},l(i){e.l(i),s=q()},m(i,p){l[r].m(i,p),d(i,s,p),n=!0},p(i,[p]){let u=r;r=a(i,p),r===u?l[r].p(i,p):(z(),v(l[u],1,1,()=>{l[u]=null}),B(),e=l[r],e?e.p(i,p):(e=l[r]=c[r](i),e.c()),h(e,1),e.m(s.parentNode,s))},i(i){n||(h(e),n=!0)},o(i){v(e),n=!1},d(i){l[r].d(i),i&&m(s)}}}function we(o,t,r){let{teams:e=[]}=t;return o.$$set=s=>{"teams"in s&&r(0,e=s.teams)},[e]}class Ee extends O{constructor(t){super(),S(this,t,we,ye,U,{teams:0})}}function Ie(o){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function Te(o){let t,r;return t=new Ee({props:{teams:o[0]}}),{c(){T(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){D(t,e,s),r=!0},p:_,i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function Pe(o){let t,r;return t=new pe({props:{top:4}}),{c(){T(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){D(t,e,s),r=!0},p:_,i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function De(o){let t,r,e={ctx:o,current:null,token:null,hasCatch:!1,pending:Pe,then:Te,catch:Ie,value:0,blocks:[,,,]};return re(me({}),e),{c(){t=q(),e.block.c()},l(s){t=q(),e.block.l(s)},m(s,n){d(s,t,n),e.block.m(s,e.anchor=n),e.mount=()=>t.parentNode,e.anchor=t,r=!0},p(s,n){o=s,se(e,o,n)},i(s){r||(h(e.block),r=!0)},o(s){for(let n=0;n<3;n+=1){const c=e.blocks[n];v(c)}r=!1},d(s){s&&m(t),e.block.d(s),e.token=null,e=null}}}function Ce(o){let t,r;return t=new ce({props:{$$slots:{default:[De]},$$scope:{ctx:o}}}),{c(){T(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){D(t,e,s),r=!0},p(e,s){const n={};s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}function Le(o){let t,r;return t=new fe({props:{$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){T(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){D(t,e,s),r=!0},p(e,[s]){const n={};s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){v(t.$$.fragment,e),r=!1},d(e){C(t,e)}}}class Se extends O{constructor(t){super(),S(this,t,null,Le,U,{})}}export{Se as default};
