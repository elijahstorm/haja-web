import{S as q,i as F,s as N,w as h,x as k,y as v,f as C,t as E,z as w,N as S,k as y,q as $,a as z,l as H,m as I,r as u,h as p,c as R,b as d,H as _,u as b}from"../../chunks/index-cc9d6004.js";import{p as T}from"../../chunks/stores-6828d0ac.js";import{C as j,F as A}from"../../chunks/Casing-aa5fc666.js";function B(o){let e,s=o[0].status+"",a,n,l=o[0].error.message+"",c,f,m,i;return m=new A({props:{alt:`${o[0].status}, ${o[0].error.message}`}}),{c(){e=y("center"),a=$(s),n=$(": "),c=$(l),f=z(),h(m.$$.fragment)},l(t){e=H(t,"CENTER",{});var r=I(e);a=u(r,s),n=u(r,": "),c=u(r,l),r.forEach(p),f=R(t),k(m.$$.fragment,t)},m(t,r){d(t,e,r),_(e,a),_(e,n),_(e,c),d(t,f,r),v(m,t,r),i=!0},p(t,r){(!i||r&1)&&s!==(s=t[0].status+"")&&b(a,s),(!i||r&1)&&l!==(l=t[0].error.message+"")&&b(c,l);const g={};r&1&&(g.alt=`${t[0].status}, ${t[0].error.message}`),m.$set(g)},i(t){i||(C(m.$$.fragment,t),i=!0)},o(t){E(m.$$.fragment,t),i=!1},d(t){t&&p(e),t&&p(f),w(m,t)}}}function D(o){let e,s;return e=new j({props:{$$slots:{default:[B]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment)},l(a){k(e.$$.fragment,a)},m(a,n){v(e,a,n),s=!0},p(a,[n]){const l={};n&3&&(l.$$scope={dirty:n,ctx:a}),e.$set(l)},i(a){s||(C(e.$$.fragment,a),s=!0)},o(a){E(e.$$.fragment,a),s=!1},d(a){w(e,a)}}}function G(o,e,s){let a;return S(o,T,n=>s(0,a=n)),[a]}class M extends q{constructor(e){super(),F(this,e,G,D,N,{})}}export{M as default};
