import{S as R,i as N,s as A,v as h,w as g,x as v,f as _,t as p,y as w,e as m,b as f,g as B,d as D,h as c,k as q,q as d,l as S,m as C,r as $,n as I,I as E,B as i,Q as y,R as F,u as L}from"../../../../../chunks/paths-d43acf8f.js";import{S as P,F as V}from"../../../../../chunks/SmallCenterContentOverBackground-5c2e3d66.js";import{c as x}from"../../../../../chunks/auth-3e85171e.js";import{I as O}from"../../../../../chunks/InfoCard-a9d56baa.js";import{g as Q}from"../../../../../chunks/navigation-8e9702f7.js";import{s as j}from"../../../../../chunks/session-dfb1bba7.js";import"../../../../../chunks/Logo-61a61a74.js";import"../../../../../chunks/singletons-44783790.js";function z(l){let t,n;return t=new V({props:{callback:l[2],inputs:[{text:"Email",id:"email",type:"email",icon:"/icon/person.svg"}],$$slots:{button:[J],title:[H]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,r){v(t,e,r),n=!0},p(e,r){const o={};r&16&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function G(l){let t,n;return t=new O({props:{$$slots:{default:[X]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,r){v(t,e,r),n=!0},p(e,r){const o={};r&17&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function H(l){let t,n;return{c(){t=q("div"),n=d("Lost Email"),this.h()},l(e){t=S(e,"DIV",{slot:!0});var r=C(t);n=$(r,"Lost Email"),r.forEach(c),this.h()},h(){I(t,"slot","title")},m(e,r){f(e,t,r),E(t,n)},p:i,d(e){e&&c(t)}}}function J(l){let t,n;return{c(){t=q("div"),n=d("Request email"),this.h()},l(e){t=S(e,"DIV",{slot:!0});var r=C(t);n=$(r,"Request email"),r.forEach(c),this.h()},h(){I(t,"slot","button")},m(e,r){f(e,t,r),E(t,n)},p:i,d(e){e&&c(t)}}}function K(l){return{c:i,l:i,m:i,p:i,d:i}}function M(l){let t;function n(o,s){return o[3].error?U:T}let e=n(l),r=e(l);return{c(){r.c(),t=m()},l(o){r.l(o),t=m()},m(o,s){r.m(o,s),f(o,t,s)},p(o,s){e===(e=n(o))&&r?r.p(o,s):(r.d(1),r=e(o),r&&(r.c(),r.m(t.parentNode,t)))},d(o){r.d(o),o&&c(t)}}}function T(l){let t;return{c(){t=d("A password change email was sent")},l(n){t=$(n,"A password change email was sent")},m(n,e){f(n,t,e)},p:i,d(n){n&&c(t)}}}function U(l){let t=l[3].error+"",n;return{c(){n=d(t)},l(e){n=$(e,t)},m(e,r){f(e,n,r)},p(e,r){r&1&&t!==(t=e[3].error+"")&&L(n,t)},d(e){e&&c(n)}}}function W(l){let t;return{c(){t=d("Sending....")},l(n){t=$(n,"Sending....")},m(n,e){f(n,t,e)},p:i,d(n){n&&c(t)}}}function X(l){let t,n,e={ctx:l,current:null,token:null,hasCatch:!1,pending:W,then:M,catch:K,value:3};return y(n=l[0],e),{c(){t=m(),e.block.c()},l(r){t=m(),e.block.l(r)},m(r,o){f(r,t,o),e.block.m(r,e.anchor=o),e.mount=()=>t.parentNode,e.anchor=t},p(r,o){l=r,e.ctx=l,o&1&&n!==(n=l[0])&&y(n,e)||F(e,l,o)},d(r){r&&c(t),e.block.d(r),e.token=null,e=null}}}function Y(l){let t,n,e,r;const o=[G,z],s=[];function b(a,u){return a[1]?0:1}return t=b(l),n=s[t]=o[t](l),{c(){n.c(),e=m()},l(a){n.l(a),e=m()},m(a,u){s[t].m(a,u),f(a,e,u),r=!0},p(a,u){let k=t;t=b(a),t===k?s[t].p(a,u):(B(),p(s[k],1,1,()=>{s[k]=null}),D(),n=s[t],n?n.p(a,u):(n=s[t]=o[t](a),n.c()),_(n,1),n.m(e.parentNode,e))},i(a){r||(_(n),r=!0)},o(a){p(n),r=!1},d(a){s[t].d(a),a&&c(e)}}}function Z(l){let t,n;return t=new P({props:{$$slots:{default:[Y]},$$scope:{ctx:l}}}),{c(){h(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,r){v(t,e,r),n=!0},p(e,[r]){const o={};r&19&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){p(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function ee(l,t,n){let e;const r=async s=>{n(0,o=x(s.email.value)),n(1,e=!0)};let o;return j.subscribe(async({user:s,ready:b})=>{s&&b&&Q("/me")}),n(1,e=!1),[o,e,r]}class ie extends R{constructor(t){super(),N(this,t,ee,Z,A,{})}}export{ie as default};