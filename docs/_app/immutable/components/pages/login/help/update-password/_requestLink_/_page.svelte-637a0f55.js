import{S as N,i as S,s as E,v as P,w as x,x as C,f as p,t as m,y as q,M as I,e as v,b as u,g as U,d as L,h as l,k as _,q as h,a as A,l as w,m as g,r as $,c as B,n as y,I as k,B as d}from"../../../../../../chunks/paths-8e1e5da9.js";import{S as D,F}from"../../../../../../chunks/SmallCenterContentOverBackground-8c3b5347.js";import{s as V}from"../../../../../../chunks/session-d226cc0b.js";import{g as M}from"../../../../../../chunks/navigation-3d72f2c8.js";function O(c){let e,s,t,o,n;return{c(){e=_("span"),s=h("Password updated."),t=A(),o=_("a"),n=h("Login"),this.h()},l(a){e=w(a,"SPAN",{});var i=g(e);s=$(i,"Password updated."),i.forEach(l),t=B(a),o=w(a,"A",{href:!0});var r=g(o);n=$(r,"Login"),r.forEach(l),this.h()},h(){y(o,"href",I+"/login")},m(a,i){u(a,e,i),k(e,s),u(a,t,i),u(a,o,i),k(o,n)},p:d,i:d,o:d,d(a){a&&l(e),a&&l(t),a&&l(o)}}}function R(c){let e,s;return e=new F({props:{callback:c[2],inputs:[...c[0]?[{text:"Current Password",id:"cur_password",type:"password",icon:"/icon/key.svg"}]:[],{text:"New Password",id:"password",type:"password",icon:"/icon/key.svg"},{text:"Confirm Password",id:"pass_confirm",type:"password",icon:"/icon/key.svg"}],$$slots:{button:[z],title:[j]},$$scope:{ctx:c}}}),{c(){P(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){C(e,t,o),s=!0},p(t,o){const n={};o&1&&(n.inputs=[...t[0]?[{text:"Current Password",id:"cur_password",type:"password",icon:"/icon/key.svg"}]:[],{text:"New Password",id:"password",type:"password",icon:"/icon/key.svg"},{text:"Confirm Password",id:"pass_confirm",type:"password",icon:"/icon/key.svg"}]),o&32&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function j(c){let e,s;return{c(){e=_("div"),s=h("Update Password"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var o=g(e);s=$(o,"Update Password"),o.forEach(l),this.h()},h(){y(e,"slot","title")},m(t,o){u(t,e,o),k(e,s)},p:d,d(t){t&&l(e)}}}function z(c){let e,s;return{c(){e=_("div"),s=h("Update"),this.h()},l(t){e=w(t,"DIV",{slot:!0});var o=g(e);s=$(o,"Update"),o.forEach(l),this.h()},h(){y(e,"slot","button")},m(t,o){u(t,e,o),k(e,s)},p:d,d(t){t&&l(e)}}}function G(c){let e,s,t,o;const n=[R,O],a=[];function i(r,f){return r[1]?1:0}return e=i(c),s=a[e]=n[e](c),{c(){s.c(),t=v()},l(r){s.l(r),t=v()},m(r,f){a[e].m(r,f),u(r,t,f),o=!0},p(r,f){let b=e;e=i(r),e===b?a[e].p(r,f):(U(),m(a[b],1,1,()=>{a[b]=null}),L(),s=a[e],s?s.p(r,f):(s=a[e]=n[e](r),s.c()),p(s,1),s.m(t.parentNode,t))},i(r){o||(p(s),o=!0)},o(r){m(s),o=!1},d(r){a[e].d(r),r&&l(t)}}}function H(c){let e,s;return e=new D({props:{$$slots:{default:[G]},$$scope:{ctx:c}}}),{c(){P(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){C(e,t,o),s=!0},p(t,[o]){const n={};o&35&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){m(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function J(c,e,s){let t,o,{data:n}=e,{requestLink:a}=n;const i=async r=>"Not handled in broswer. Please check your email for the next step.";return V.subscribe(async({user:r,ready:f})=>{s(0,o=!!(r&&f)),!o&&a===""&&M(`${I}/login`)}),c.$$set=r=>{"data"in r&&s(3,n=r.data)},c.$$.update=()=>{c.$$.dirty&8&&({requestLink:a}=n)},s(1,t=!1),s(0,o=!1),[o,t,i,n]}class X extends N{constructor(e){super(),S(this,e,J,H,E,{data:3})}}export{X as default};
