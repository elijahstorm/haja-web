import{S as q,i as C,s as I,w as b,x as y,y as x,f as S,t as k,z as E,k as l,q as p,l as u,m as d,r as f,h as s,n as h,b as _,H as i,B as $,a as A,c as D}from"../../../../chunks/index-cc9d6004.js";import{S as P,F as V}from"../../../../chunks/SmallCenterContentOverBackground-44afef33.js";import{n as H}from"../../../../chunks/auth-6dbf0ee1.js";import{b as j}from"../../../../chunks/paths-d365ba56.js";function B(r){let t,a;return{c(){t=l("div"),a=p("Signup"),this.h()},l(e){t=u(e,"DIV",{slot:!0});var n=d(t);a=f(n,"Signup"),n.forEach(s),this.h()},h(){h(t,"slot","title")},m(e,n){_(e,t,n),i(t,a)},p:$,d(e){e&&s(t)}}}function F(r){let t,a;return{c(){t=l("div"),a=p("Signup"),this.h()},l(e){t=u(e,"DIV",{slot:!0});var n=d(t);a=f(n,"Signup"),n.forEach(s),this.h()},h(){h(t,"slot","button")},m(e,n){_(e,t,n),i(t,a)},p:$,d(e){e&&s(t)}}}function L(r){let t,a;return{c(){t=l("div"),a=p("Start using Haja today! Enter your email and create a new password"),this.h()},l(e){t=u(e,"DIV",{slot:!0});var n=d(t);a=f(n,"Start using Haja today! Enter your email and create a new password"),n.forEach(s),this.h()},h(){h(t,"slot","help")},m(e,n){_(e,t,n),i(t,a)},p:$,d(e){e&&s(t)}}}function z(r){let t,a,e,n,o,g;return{c(){t=l("div"),a=l("span"),e=p("Already have an account?"),n=A(),o=l("a"),g=p("Login"),this.h()},l(m){t=u(m,"DIV",{slot:!0});var c=d(t);a=u(c,"SPAN",{});var v=d(a);e=f(v,"Already have an account?"),v.forEach(s),n=D(c),o=u(c,"A",{href:!0});var w=d(o);g=f(w,"Login"),w.forEach(s),c.forEach(s),this.h()},h(){h(o,"href",j+"/login"),h(t,"slot","bottom")},m(m,c){_(m,t,c),i(t,a),i(a,e),i(t,n),i(t,o),i(o,g)},p:$,d(m){m&&s(t)}}}function N(r){let t,a;return t=new V({props:{callback:r[0],inputs:[{text:"Email",id:"email",type:"email",icon:"/icon/person.svg"},{text:"Password",id:"password",type:"password",icon:"/icon/key.svg"},{text:"Confirm Password",id:"pass_confirm",type:"password",icon:"/icon/key.svg"}],$$slots:{bottom:[z],help:[L],button:[F],title:[B]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,n){x(t,e,n),a=!0},p(e,n){const o={};n&2&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(S(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function O(r){let t,a;return t=new P({props:{$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){b(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,n){x(t,e,n),a=!0},p(e,[n]){const o={};n&2&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){a||(S(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function R(r){return[async a=>{const{error:e}=await H(a.email,a.password);return e}]}class M extends q{constructor(t){super(),C(this,t,R,O,I,{})}}export{M as default};