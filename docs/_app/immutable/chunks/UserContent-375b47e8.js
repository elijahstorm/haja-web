import{S as le,i as ae,s as oe,a9 as ue,ac as ce,k as E,w as A,a as Y,q as W,l as w,m as D,x as R,h as d,c as F,r as J,n as T,b as U,H as g,y as G,J as M,ad as de,f as V,t as S,z as K,D as pe,u as Ae,K as he,L as ge,M as ve,B,C as Ye,T as Q,e as _e,V as Z,W as x,X as ee,g as Fe,d as Oe,p as re,a8 as fe,ab as De,ae as me,af as Ie,E as ie,N as Re,$ as Te,a0 as Ge}from"./index-cc9d6004.js";import{F as Ke,U as We}from"./Casing-d9eaf229.js";import{I as Je}from"./InfoCard-1735e4c6.js";import{g as Ve,T as Xe}from"./TodoList-4f6b895b.js";import{s as Qe}from"./session-33c98699.js";import{D as Ze}from"./TodoContent-6764fac6.js";import{E as xe}from"./EditableContentPage-29a54351.js";import{p as Se}from"./auth-6dbf0ee1.js";import{f as Ce,a as ze}from"./index-6db6d14e.js";import{I as et}from"./Icon-f906670f.js";function tt(t){var u,f;let e,n=((f=(u=t[1])==null?void 0:u.selected)!=null?f:new Date).toLocaleDateString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric"})+"",s,l,a,o;return{c(){e=E("div"),s=W(n),this.h()},l(r){e=w(r,"DIV",{class:!0});var i=D(e);s=J(i,n),i.forEach(d),this.h()},h(){T(e,"class","display svelte-1x6n994")},m(r,i){U(r,e,i),g(e,s),o=!0},p(r,i){var _,b;t=r,(!o||i&2)&&n!==(n=((b=(_=t[1])==null?void 0:_.selected)!=null?b:new Date).toLocaleDateString("en-us",{weekday:"short",year:"numeric",month:"short",day:"numeric"})+"")&&Ae(s,n)},i(r){o||(r&&he(()=>{a&&a.end(1),l=ge(e,t[10],{key:t[8]}),l.start()}),o=!0)},o(r){l&&l.invalidate(),r&&(a=ve(e,t[9],{key:t[8]})),o=!1},d(r){r&&d(e),r&&a&&a.end()}}}function st(t){let e,n,s,l,a,o,u,f,r,i,_,b,v,q;function N(y){t[5](y)}let L={theme:t[2],format:nt,$$slots:{default:[tt,({key:y,send:k,receive:H})=>({8:y,9:k,10:H}),({key:y,send:k,receive:H})=>(y?256:0)|(k?512:0)|(H?1024:0)]},$$scope:{ctx:t}};return t[0]!==void 0&&(L.store=t[0]),s=new Ze({props:L}),ue.push(()=>ce(s,"store",N)),{c(){e=E("section"),n=E("div"),A(s.$$.fragment),a=Y(),o=E("div"),u=E("button"),f=W("-\xA0week"),r=Y(),i=E("button"),_=W("+\xA0week"),this.h()},l(y){e=w(y,"SECTION",{class:!0});var k=D(e);n=w(k,"DIV",{class:!0});var H=D(n);R(s.$$.fragment,H),H.forEach(d),a=F(k),o=w(k,"DIV",{class:!0});var m=D(o);u=w(m,"BUTTON",{class:!0});var $=D(u);f=J($,"-\xA0week"),$.forEach(d),r=F(m),i=w(m,"BUTTON",{class:!0});var P=D(i);_=J(P,"+\xA0week"),P.forEach(d),m.forEach(d),k.forEach(d),this.h()},h(){T(n,"class","flex remove-defaults svelte-1x6n994"),T(u,"class","button color primary svelte-1x6n994"),T(i,"class","button color primary svelte-1x6n994"),T(o,"class","flex svelte-1x6n994"),T(e,"class","flex svelte-1x6n994")},m(y,k){U(y,e,k),g(e,n),G(s,n,null),g(e,a),g(e,o),g(o,u),g(u,f),g(o,r),g(o,i),g(i,_),b=!0,v||(q=[M(u,"click",t[6]),M(i,"click",t[7])],v=!0)},p(y,[k]){const H={};k&2306&&(H.$$scope={dirty:k,ctx:y}),!l&&k&1&&(l=!0,H.store=y[0],de(()=>l=!1)),s.$set(H)},i(y){b||(V(s.$$.fragment,y),b=!0)},o(y){S(s.$$.fragment,y),b=!1},d(y){y&&d(e),K(s),v=!1,pe(q)}}}const nt="ddd, MMM D, YYYY";function lt(t,e,n){let s,l=B,a=()=>(l(),l=Ye(u,v=>n(1,s=v)),u);t.$$.on_destroy.push(()=>l());const o={calendar:{shadow:"0 0.5rem 1rem rgba(0, 0, 0, 0.1)",colors:{background:{highlight:"var(--primary)"}}}};let{date:u}=e;a();const f=v=>u.add(1,v),r=v=>u.add(-1,v);function i(v){u=v,a(n(0,u))}const _=()=>r("week"),b=()=>f("week");return t.$$set=v=>{"date"in v&&a(n(0,u=v.date))},[u,s,o,f,r,i,_,b]}class at extends le{constructor(e){super(),ae(this,e,lt,st,oe,{date:0})}}const ot=t=>({}),He=t=>({update:t[2]}),it=t=>({}),Pe=t=>({update:t[2]}),rt=t=>({}),je=t=>({update:t[2]}),ft=t=>({}),qe=t=>({update:t[2]});function Ne(t){let e,n,s,l,a,o,u,f,r,i,_,b,v,q,N;const L=t[10].left,y=Q(L,t,t[9],je),k=y||ut(),H=t[10].right,m=Q(H,t,t[9],Pe),$=m||ct(),P=t[10].default,C=Q(P,t,t[9],He);return{c(){e=E("div"),n=E("div"),s=E("div"),k&&k.c(),l=Y(),a=E("div"),o=Y(),$&&$.c(),u=Y(),f=E("div"),C&&C.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var h=D(e);n=w(h,"DIV",{class:!0,style:!0});var j=D(n);s=w(j,"DIV",{class:!0});var I=D(s);k&&k.l(I),l=F(I),a=w(I,"DIV",{class:!0}),D(a).forEach(d),o=F(I),$&&$.l(I),I.forEach(d),u=F(j),f=w(j,"DIV",{class:!0});var se=D(f);C&&C.l(se),se.forEach(d),j.forEach(d),h.forEach(d),this.h()},h(){T(a,"class","draggable-line svelte-73ndgg"),T(s,"class","interaction-header svelte-73ndgg"),T(f,"class","inner-content svelte-73ndgg"),T(n,"class","card svelte-73ndgg"),re(n,"max-height",t[0]+"vh"),re(n,"min-height",t[1]+"vh"),T(e,"class","container svelte-73ndgg"),fe(e,"full",t[3]==="full"),fe(e,"open",t[3]==="open")},m(c,h){U(c,e,h),g(e,n),g(n,s),k&&k.m(s,null),g(s,l),g(s,a),g(s,o),$&&$.m(s,null),g(n,u),g(n,f),C&&C.m(f,null),v=!0,q||(N=[M(s,"touchstart",t[7]),M(s,"touchmove",De(t[8])),M(s,"dblclick",De(t[6])),M(n,"click",me(t[11])),M(n,"keypress",me(t[12])),M(e,"click",t[4]),M(e,"keypress",t[5])],q=!0)},p(c,h){y&&y.p&&(!v||h&512)&&Z(y,L,c,c[9],v?ee(L,c[9],h,rt):x(c[9]),je),m&&m.p&&(!v||h&512)&&Z(m,H,c,c[9],v?ee(H,c[9],h,it):x(c[9]),Pe),C&&C.p&&(!v||h&512)&&Z(C,P,c,c[9],v?ee(P,c[9],h,ot):x(c[9]),He),(!v||h&1)&&re(n,"max-height",c[0]+"vh"),(!v||h&2)&&re(n,"min-height",c[1]+"vh"),(!v||h&8)&&fe(e,"full",c[3]==="full"),(!v||h&8)&&fe(e,"open",c[3]==="open")},i(c){v||(V(k,c),V($,c),V(C,c),he(()=>{i&&i.end(1),r=ge(n,Ce,{y:2e3,duration:250}),r.start()}),he(()=>{b&&b.end(1),_=ge(e,ze,{duration:250}),_.start()}),v=!0)},o(c){S(k,c),S($,c),S(C,c),r&&r.invalidate(),i=ve(n,Ce,{y:1e3,duration:750}),_&&_.invalidate(),b=ve(e,ze,{duration:350}),v=!1},d(c){c&&d(e),k&&k.d(c),$&&$.d(c),C&&C.d(c),c&&i&&i.end(),c&&b&&b.end(),q=!1,pe(N)}}}function ut(t){let e,n;return{c(){e=E("p"),n=W("\xA0")},l(s){e=w(s,"P",{});var l=D(e);n=J(l,"\xA0"),l.forEach(d)},m(s,l){U(s,e,l),g(e,n)},p:B,d(s){s&&d(e)}}}function ct(t){let e,n;return{c(){e=E("p"),n=W("\xA0")},l(s){e=w(s,"P",{});var l=D(e);n=J(l,"\xA0"),l.forEach(d)},m(s,l){U(s,e,l),g(e,n)},p:B,d(s){s&&d(e)}}}function dt(t){let e,n,s,l,a;const o=t[10].button,u=Q(o,t,t[9],qe);let f=t[3]!=="closed"&&Ne(t);return{c(){u&&u.c(),e=Y(),f&&f.c(),n=_e()},l(r){u&&u.l(r),e=F(r),f&&f.l(r),n=_e()},m(r,i){u&&u.m(r,i),U(r,e,i),f&&f.m(r,i),U(r,n,i),s=!0,l||(a=M(window,"keypress",t[5]),l=!0)},p(r,[i]){u&&u.p&&(!s||i&512)&&Z(u,o,r,r[9],s?ee(o,r[9],i,ft):x(r[9]),qe),r[3]!=="closed"?f?(f.p(r,i),i&8&&V(f,1)):(f=Ne(r),f.c(),V(f,1),f.m(n.parentNode,n)):f&&(Fe(),S(f,1,1,()=>{f=null}),Oe())},i(r){s||(V(u,r),V(f),s=!0)},o(r){S(u,r),S(f),s=!1},d(r){u&&u.d(r),r&&d(e),f&&f.d(r),r&&d(n),l=!1,a()}}}function _t(t,e,n){let{$$slots:s={},$$scope:l}=e,a="closed",{maxVH:o=90}=e,{minVH:u=85}=e;const f=m=>()=>{n(3,a=m)},r=()=>n(3,a="closed"),i=()=>n(3,a="open"),_=()=>n(3,a="full"),b=m=>()=>{(m.key==="Enter"||m.key==="Escape"||m.key==="`")&&r()},v=()=>{a==="closed"?i():a==="open"?_():a==="full"&&i()},q=m=>{var P;const[$]=m.touches;return(P=$==null?void 0:$.clientY)!=null?P:0};let N=0;const L=m=>Se(()=>m,q,$=>N=$),y=m=>Se(()=>m,q,$=>{!N||(N-$>30?_():N-$<-30&&(a==="full"?(i(),L(m)):r()))});function k(m){Ie.call(this,t,m)}function H(m){Ie.call(this,t,m)}return t.$$set=m=>{"maxVH"in m&&n(0,o=m.maxVH),"minVH"in m&&n(1,u=m.minVH),"$$scope"in m&&n(9,l=m.$$scope)},t.$$.update=()=>{t.$$.dirty&8&&(document.body.style.overflow=a==="closed"?"inherit":"hidden")},[o,u,f,a,r,b,v,L,y,l,s,k,H]}class mt extends le{constructor(e){super(),ae(this,e,_t,dt,oe,{maxVH:0,minVH:1,update:2})}get update(){return this.$$.ctx[2]}}function pt(t){let e,n,s,l,a;return n=new et({props:{icon:t[0],width:t[1]}}),{c(){e=E("button"),A(n.$$.fragment),this.h()},l(o){e=w(o,"BUTTON",{class:!0});var u=D(e);R(n.$$.fragment,u),u.forEach(d),this.h()},h(){T(e,"class","svelte-1qcx670")},m(o,u){U(o,e,u),G(n,e,null),s=!0,l||(a=M(e,"click",function(){ie(t[2])&&t[2].apply(this,arguments)}),l=!0)},p(o,[u]){t=o;const f={};u&1&&(f.icon=t[0]),u&2&&(f.width=t[1]),n.$set(f)},i(o){s||(V(n.$$.fragment,o),s=!0)},o(o){S(n.$$.fragment,o),s=!1},d(o){o&&d(e),K(n),l=!1,a()}}}function ht(t,e,n){let{icon:s="typcn:edit"}=e,{width:l="20px"}=e,{callback:a}=e;return t.$$set=o=>{"icon"in o&&n(0,s=o.icon),"width"in o&&n(1,l=o.width),"callback"in o&&n(2,a=o.callback)},[s,l,a]}class gt extends le{constructor(e){super(),ae(this,e,ht,pt,oe,{icon:0,width:1,callback:2})}}function vt(t){let e,n,s,l;function a(f){t[5](f)}function o(f){t[6](f)}let u={isTeam:t[1]};return t[0]!==void 0&&(u.content=t[0]),t[2]!==void 0&&(u.requestSave=t[2]),e=new xe({props:u}),ue.push(()=>ce(e,"content",a)),ue.push(()=>ce(e,"requestSave",o)),{c(){A(e.$$.fragment)},l(f){R(e.$$.fragment,f)},m(f,r){G(e,f,r),l=!0},p(f,r){const i={};r&2&&(i.isTeam=f[1]),!n&&r&1&&(n=!0,i.content=f[0],de(()=>n=!1)),!s&&r&4&&(s=!0,i.requestSave=f[2],de(()=>s=!1)),e.$set(i)},i(f){l||(V(e.$$.fragment,f),l=!0)},o(f){S(e.$$.fragment,f),l=!1},d(f){K(e,f)}}}function bt(t){let e,n,s;return n=new gt({props:{callback:t[7]("open")}}),{c(){e=E("div"),A(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{slot:!0});var a=D(e);R(n.$$.fragment,a),a.forEach(d),this.h()},h(){T(e,"slot","button")},m(l,a){U(l,e,a),G(n,e,null),s=!0},p(l,a){const o={};a&128&&(o.callback=l[7]("open")),n.$set(o)},i(l){s||(V(n.$$.fragment,l),s=!0)},o(l){S(n.$$.fragment,l),s=!1},d(l){l&&d(e),K(n)}}}function kt(t){let e,n,s,l;return{c(){e=E("span"),n=W("Cancel"),this.h()},l(a){e=w(a,"SPAN",{slot:!0});var o=D(e);n=J(o,"Cancel"),o.forEach(d),this.h()},h(){T(e,"slot","left")},m(a,o){U(a,e,o),g(e,n),s||(l=[M(e,"click",me(function(){ie(t[7]("closed"))&&t[7]("closed").apply(this,arguments)})),M(e,"keypress",function(){ie(t[4](t[7]("closed")))&&t[4](t[7]("closed")).apply(this,arguments)})],s=!0)},p(a,o){t=a},d(a){a&&d(e),s=!1,pe(l)}}}function $t(t){let e,n,s,l;return{c(){e=E("span"),n=W("Submit"),this.h()},l(a){e=w(a,"SPAN",{slot:!0,class:!0});var o=D(e);n=J(o,"Submit"),o.forEach(d),this.h()},h(){T(e,"slot","right"),T(e,"class","primary svelte-dfyigr")},m(a,o){U(a,e,o),g(e,n),s||(l=[M(e,"click",me(function(){ie(t[3](t[7]("closed")))&&t[3](t[7]("closed")).apply(this,arguments)})),M(e,"keypress",function(){ie(t[4](t[3](t[7]("closed"))))&&t[4](t[3](t[7]("closed"))).apply(this,arguments)})],s=!0)},p(a,o){t=a},d(a){a&&d(e),s=!1,pe(l)}}}function yt(t){let e,n;return e=new mt({props:{maxVH:Et,minVH:wt,$$slots:{right:[$t,({update:s})=>({7:s}),({update:s})=>s?128:0],left:[kt,({update:s})=>({7:s}),({update:s})=>s?128:0],button:[bt,({update:s})=>({7:s}),({update:s})=>s?128:0],default:[vt,({update:s})=>({7:s}),({update:s})=>s?128:0]},$$scope:{ctx:t}}}),{c(){A(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,l){G(e,s,l),n=!0},p(s,[l]){const a={};l&391&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){K(e,s)}}}let Et=70,wt=65;function Dt(t,e,n){let{entity:s}=e,{isTeam:l=!1}=e,a;const o=i=>()=>{a(),i()},u=i=>_=>{_.stopPropagation(),_.preventDefault(),_.key==="Enter"&&i()};function f(i){s=i,n(0,s)}function r(i){a=i,n(2,a)}return t.$$set=i=>{"entity"in i&&n(0,s=i.entity),"isTeam"in i&&n(1,l=i.isTeam)},[s,l,a,o,u,f,r]}class It extends le{constructor(e){super(),ae(this,e,Dt,yt,oe,{entity:0,isTeam:1})}}const Tt=t=>({}),Be=t=>({}),Vt=t=>({}),Ue=t=>({});function Le(t){let e,n,s;return n=new It({props:{entity:t[9],isTeam:t[0]}}),{c(){e=E("div"),A(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var a=D(e);R(n.$$.fragment,a),a.forEach(d),this.h()},h(){T(e,"class","btn svelte-4enajz")},m(l,a){U(l,e,a),G(n,e,null),s=!0},p(l,a){const o={};a&1&&(o.isTeam=l[0]),n.$set(o)},i(l){s||(V(n.$$.fragment,l),s=!0)},o(l){S(n.$$.fragment,l),s=!1},d(l){l&&d(e),K(n)}}}function St(t){return{c:B,l:B,m:B,p:B,i:B,o:B,d:B}}function Ct(t){let e,n;return e=new Xe({props:{todos:t[20],source:t[8],isTeam:t[0]}}),{c(){A(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,l){G(e,s,l),n=!0},p(s,l){const a={};l&11&&(a.todos=s[20]),l&1&&(a.isTeam=s[0]),e.$set(a)},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){K(e,s)}}}function zt(t){return{c:B,l:B,m:B,p:B,i:B,o:B,d:B}}function Ht(t){let e,n,s,l,a,o;function u(i){t[15](i)}let f={};t[2]!==void 0&&(f.date=t[2]),e=new at({props:f}),ue.push(()=>ce(e,"date",u));let r={ctx:t,current:null,token:null,hasCatch:!1,pending:zt,then:Ct,catch:St,value:20,blocks:[,,,]};return Te(a=Ve({source:t[8],isTeam:t[0],amount:t[1],dateRange:t[3]}),r),{c(){A(e.$$.fragment),s=Y(),l=_e(),r.block.c()},l(i){R(e.$$.fragment,i),s=F(i),l=_e(),r.block.l(i)},m(i,_){G(e,i,_),U(i,s,_),U(i,l,_),r.block.m(i,r.anchor=_),r.mount=()=>l.parentNode,r.anchor=l,o=!0},p(i,_){t=i;const b={};!n&&_&4&&(n=!0,b.date=t[2],de(()=>n=!1)),e.$set(b),r.ctx=t,_&11&&a!==(a=Ve({source:t[8],isTeam:t[0],amount:t[1],dateRange:t[3]}))&&Te(a,r)||Ge(r,t,_)},i(i){o||(V(e.$$.fragment,i),V(r.block),o=!0)},o(i){S(e.$$.fragment,i);for(let _=0;_<3;_+=1){const b=r.blocks[_];S(b)}o=!1},d(i){K(e,i),i&&d(s),i&&d(l),r.block.d(i),r.token=null,r=null}}}function Pt(t){let e,n,s;return{c(){e=E("p"),n=W(t[6]),s=W("'s todos!"),this.h()},l(l){e=w(l,"P",{slot:!0});var a=D(e);n=J(a,t[6]),s=J(a,"'s todos!"),a.forEach(d),this.h()},h(){T(e,"slot","title")},m(l,a){U(l,e,a),g(e,n),g(e,s)},p:B,d(l){l&&d(e)}}}function jt(t){let e,n,s,l,a,o,u,f,r,i,_,b,v,q,N,L,y,k,H,m,$,P;const C=t[14].default,c=Q(C,t,t[16],null),h=t[14].info,j=Q(h,t,t[16],Ue);b=new Ke({props:{src:t[4],alt:`${t[0]?"team":"user"} ${t[6]}`}});let I=(t[0]||t[8]===t[5])&&Le(t);const se=t[14].picture,O=Q(se,t,t[16],Be);return $=new Je({props:{$$slots:{title:[Pt],default:[Ht]},$$scope:{ctx:t}}}),{c(){e=E("section"),n=E("div"),s=E("div"),l=E("p"),a=W(t[7]),o=Y(),c&&c.c(),u=Y(),f=E("div"),j&&j.c(),r=Y(),i=E("div"),_=E("div"),A(b.$$.fragment),v=Y(),q=E("div"),N=W("\xA0"),L=Y(),I&&I.c(),y=Y(),k=E("div"),O&&O.c(),H=Y(),m=E("div"),A($.$$.fragment),this.h()},l(p){e=w(p,"SECTION",{class:!0});var z=D(e);n=w(z,"DIV",{class:!0});var X=D(n);s=w(X,"DIV",{class:!0});var te=D(s);l=w(te,"P",{class:!0});var be=D(l);a=J(be,t[7]),be.forEach(d),o=F(te),c&&c.l(te),te.forEach(d),u=F(X),f=w(X,"DIV",{class:!0});var ke=D(f);j&&j.l(ke),ke.forEach(d),X.forEach(d),r=F(z),i=w(z,"DIV",{class:!0});var ne=D(i);_=w(ne,"DIV",{class:!0});var $e=D(_);R(b.$$.fragment,$e),$e.forEach(d),v=F(ne),q=w(ne,"DIV",{class:!0});var ye=D(q);N=J(ye,"\xA0"),ye.forEach(d),L=F(ne),I&&I.l(ne),ne.forEach(d),y=F(z),k=w(z,"DIV",{class:!0});var Ee=D(k);O&&O.l(Ee),Ee.forEach(d),H=F(z),m=w(z,"DIV",{class:!0});var we=D(m);R($.$$.fragment,we),we.forEach(d),z.forEach(d),this.h()},h(){T(l,"class","svelte-4enajz"),T(s,"class","description svelte-4enajz"),T(f,"class","info"),T(n,"class","header svelte-4enajz"),T(_,"class","svelte-4enajz"),T(q,"class","overlay svelte-4enajz"),T(i,"class","background svelte-4enajz"),T(k,"class","picture svelte-4enajz"),T(m,"class","card svelte-4enajz"),T(e,"class","svelte-4enajz")},m(p,z){U(p,e,z),g(e,n),g(n,s),g(s,l),g(l,a),g(s,o),c&&c.m(s,null),g(n,u),g(n,f),j&&j.m(f,null),g(e,r),g(e,i),g(i,_),G(b,_,null),g(i,v),g(i,q),g(q,N),g(i,L),I&&I.m(i,null),g(e,y),g(e,k),O&&O.m(k,null),g(e,H),g(e,m),G($,m,null),P=!0},p(p,[z]){c&&c.p&&(!P||z&65536)&&Z(c,C,p,p[16],P?ee(C,p[16],z,null):x(p[16]),null),j&&j.p&&(!P||z&65536)&&Z(j,h,p,p[16],P?ee(h,p[16],z,Vt):x(p[16]),Ue);const X={};z&16&&(X.src=p[4]),z&1&&(X.alt=`${p[0]?"team":"user"} ${p[6]}`),b.$set(X),p[0]||p[8]===p[5]?I?(I.p(p,z),z&33&&V(I,1)):(I=Le(p),I.c(),V(I,1),I.m(i,null)):I&&(Fe(),S(I,1,1,()=>{I=null}),Oe()),O&&O.p&&(!P||z&65536)&&Z(O,se,p,p[16],P?ee(se,p[16],z,Tt):x(p[16]),Be);const te={};z&65551&&(te.$$scope={dirty:z,ctx:p}),$.$set(te)},i(p){P||(V(c,p),V(j,p),V(b.$$.fragment,p),V(I),V(O,p),V($.$$.fragment,p),P=!0)},o(p){S(c,p),S(j,p),S(b.$$.fragment,p),S(I),S(O,p),S($.$$.fragment,p),P=!1},d(p){p&&d(e),c&&c.d(p),j&&j.d(p),K(b),I&&I.d(),O&&O.d(p),K($)}}}const Me=6048e5;function qt(t,e,n){let s,l,a,o,u=B,f=()=>(u(),u=Ye(C,h=>n(12,o=h)),C),r;Re(t,Qe,h=>n(13,r=h)),t.$$.on_destroy.push(()=>u());let{$$slots:i={},$$scope:_}=e,{entity:b}=e,{isTeam:v=!1}=e,{amount:q=100}=e,{background:N=null}=e;const L=Me/7,{id:y,title:k,caption:H,picture:m}=b,$=y;let P=new Promise(h=>h(b)),C;function c(h){C=h,f(n(2,C))}return t.$$set=h=>{"entity"in h&&n(10,b=h.entity),"isTeam"in h&&n(0,v=h.isTeam),"amount"in h&&n(1,q=h.amount),"background"in h&&n(11,N=h.background),"$$scope"in h&&n(16,_=h.$$scope)},t.$$.update=()=>{var h,j,I;t.$$.dirty&8192&&n(5,s=(h=r==null?void 0:r.user)==null?void 0:h.uid),t.$$.dirty&2048&&n(4,l=N!=null?N:m),t.$$.dirty&4096&&n(3,a={start:new Date(((j=o==null?void 0:o.selected)!=null?j:new Date)-Me),end:new Date(((I=o==null?void 0:o.selected)!=null?I:new Date)+L)})},[v,q,C,a,l,s,k,H,$,P,b,N,o,r,i,c,_]}class Nt extends le{constructor(e){super(),ae(this,e,qt,jt,oe,{entity:10,isTeam:0,amount:1,background:11})}}function Bt(t){let e,n,s;return n=new We({props:{user:t[0],size:4}}),{c(){e=E("div"),A(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{slot:!0});var a=D(e);R(n.$$.fragment,a),a.forEach(d),this.h()},h(){T(e,"slot","picture")},m(l,a){U(l,e,a),G(n,e,null),s=!0},p(l,a){const o={};a&1&&(o.user=l[0]),n.$set(o)},i(l){s||(V(n.$$.fragment,l),s=!0)},o(l){S(n.$$.fragment,l),s=!1},d(l){l&&d(e),K(n)}}}function Ut(t){let e,n;const s=t[2].default,l=Q(s,t,t[3],null);return{c(){e=E("div"),l&&l.c(),this.h()},l(a){e=w(a,"DIV",{slot:!0});var o=D(e);l&&l.l(o),o.forEach(d),this.h()},h(){T(e,"slot","info")},m(a,o){U(a,e,o),l&&l.m(e,null),n=!0},p(a,o){l&&l.p&&(!n||o&8)&&Z(l,s,a,a[3],n?ee(s,a[3],o,null):x(a[3]),null)},i(a){n||(V(l,a),n=!0)},o(a){S(l,a),n=!1},d(a){a&&d(e),l&&l.d(a)}}}function Lt(t){let e,n;return e=new Nt({props:{entity:t[0],background:t[1],$$slots:{info:[Ut],picture:[Bt]},$$scope:{ctx:t}}}),{c(){A(e.$$.fragment)},l(s){R(e.$$.fragment,s)},m(s,l){G(e,s,l),n=!0},p(s,[l]){const a={};l&1&&(a.entity=s[0]),l&9&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(s){n||(V(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){K(e,s)}}}function Mt(t,e,n){let{$$slots:s={},$$scope:l}=e,{user:a}=e;const{background:o}=a;return t.$$set=u=>{"user"in u&&n(0,a=u.user),"$$scope"in u&&n(3,l=u.$$scope)},[a,o,s,l]}class Qt extends le{constructor(e){super(),ae(this,e,Mt,Lt,oe,{user:0})}}export{Nt as F,Qt as U};