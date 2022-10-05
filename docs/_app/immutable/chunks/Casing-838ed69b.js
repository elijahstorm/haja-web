import{S as j,i as S,s as A,k as v,v as L,l as $,m as w,w as E,h as g,n as m,b as I,x as B,O as N,B as d,f as h,t as k,y as z,P as H,M as C,g as O,d as U,Q,e as T,R,q as M,a as D,r as P,c as V,I as p,G as W,J as X,K as Y,L as Z}from"./paths-8e1e5da9.js";import{I as q}from"./Icon-16b3e5ee.js";import{g as J}from"./navigation-69f3abe5.js";import{g as x,m as ee,s as te}from"./auth-da9b9bf2.js";import{s as le}from"./session-2289e753.js";function ne(a){let e,l,t,n,r;return l=new q({props:{icon:"akar-icons:chevron-left",color:"var(--primary)",height:34}}),{c(){e=v("div"),L(l.$$.fragment),this.h()},l(s){e=$(s,"DIV",{class:!0});var c=w(e);E(l.$$.fragment,c),c.forEach(g),this.h()},h(){m(e,"class","center svelte-1fzy1m")},m(s,c){I(s,e,c),B(l,e,null),t=!0,n||(r=N(e,"click",a[0]),n=!0)},p:d,i(s){t||(h(l.$$.fragment,s),t=!0)},o(s){k(l.$$.fragment,s),t=!1},d(s){s&&g(e),z(l),n=!1,r()}}}function re(a){return[()=>history.back()]}class se extends j{constructor(e){super(),S(this,e,re,ne,A,{})}}function ae(a){let e,l,t,n;return{c(){e=v("img"),this.h()},l(r){e=$(r,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){H(e.src,l=a[0])||m(e,"src",l),m(e,"alt",a[1]),m(e,"class","svelte-1bvtmi1")},m(r,s){I(r,e,s),t||(n=N(e,"error",a[2]),t=!0)},p(r,[s]){s&1&&!H(e.src,l=r[0])&&m(e,"src",l),s&2&&m(e,"alt",r[1])},i:d,o:d,d(r){r&&g(e),t=!1,n()}}}function ie(a,e,l){let{fallback:t=`${C}/404.png`}=e,{src:n=t}=e,{alt:r}=e;const s=c=>c.target.src=t;return a.$$set=c=>{"fallback"in c&&l(3,t=c.fallback),"src"in c&&l(0,n=c.src),"alt"in c&&l(1,r=c.alt)},[n,r,s,t]}class K extends j{constructor(e){super(),S(this,e,ie,ae,A,{fallback:3,src:0,alt:1})}}const ce=async({id:a})=>{var l,t,n;let e;try{e=await x({isTeam:!1,id:a})}catch(r){return r}if(e.exists()){const r=e.data();return{contentType:"user",id:(l=r.id)!=null?l:e.id,title:(t=r.title)==null?void 0:t.trim(),caption:(n=r.caption)==null?void 0:n.trim(),picture:`https://firebasestorage.googleapis.com/v0/b/haja-project.appspot.com/o/${r.picture}`,background:`https://firebasestorage.googleapis.com/v0/b/haja-project.appspot.com/o/${r.background}`,email:r.email,pronouns:r.pronouns,private:r.private,verified:r.verified,following:r.following}}return"This user does not exist!"};function oe(a){var t;let e,l;return e=new K({props:{src:(t=a[0])==null?void 0:t.picture,alt:"user profile",fallback:"/icon/person.svg"}}),{c(){L(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,r){B(e,n,r),l=!0},p(n,r){var c;const s={};r&1&&(s.src=(c=n[0])==null?void 0:c.picture),e.$set(s)},i(n){l||(h(e.$$.fragment,n),l=!0)},o(n){k(e.$$.fragment,n),l=!1},d(n){z(e,n)}}}function fe(a){let e,l,t={ctx:a,current:null,token:null,hasCatch:!1,pending:ge,then:_e,catch:ue,value:0,blocks:[,,,]};return Q(ce({id:ee()}),t),{c(){e=T(),t.block.c()},l(n){e=T(),t.block.l(n)},m(n,r){I(n,e,r),t.block.m(n,t.anchor=r),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(n,r){a=n,R(t,a,r)},i(n){l||(h(t.block),l=!0)},o(n){for(let r=0;r<3;r+=1){const s=t.blocks[r];k(s)}l=!1},d(n){n&&g(e),t.block.d(n),t.token=null,t=null}}}function ue(a){return{c:d,l:d,m:d,p:d,i:d,o:d,d}}function _e(a){let e,l,t=typeof a[0]!="string"&&me(a);return{c(){t&&t.c(),e=T()},l(n){t&&t.l(n),e=T()},m(n,r){t&&t.m(n,r),I(n,e,r),l=!0},p(n,r){typeof n[0]!="string"&&t.p(n,r)},i(n){l||(h(t),l=!0)},o(n){k(t),l=!1},d(n){t&&t.d(n),n&&g(e)}}}function me(a){let e,l;return e=new K({props:{src:a[0].picture,alt:"user profile",fallback:"/icon/person.svg"}}),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p:d,i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function ge(a){return{c:d,l:d,m:d,p:d,i:d,o:d,d}}function de(a){let e,l,t,n,r,s;const c=[fe,oe],o=[];function u(i,f){return i[0]==null?0:1}return l=u(a),t=o[l]=c[l](a),{c(){e=v("div"),t.c(),this.h()},l(i){e=$(i,"DIV",{class:!0,style:!0});var f=w(e);t.l(f),f.forEach(g),this.h()},h(){m(e,"class","profile svelte-j7mddr"),m(e,"style",a[1])},m(i,f){I(i,e,f),o[l].m(e,null),n=!0,r||(s=N(e,"click",a[2]),r=!0)},p(i,[f]){let _=l;l=u(i),l===_?o[l].p(i,f):(O(),k(o[_],1,1,()=>{o[_]=null}),U(),t=o[l],t?t.p(i,f):(t=o[l]=c[l](i),t.c()),h(t,1),t.m(e,null)),(!n||f&2)&&m(e,"style",i[1])},i(i){n||(h(t),n=!0)},o(i){k(t),n=!1},d(i){i&&g(e),o[l].d(),r=!1,s()}}}function he(a,e,l){let t,n,{user:r=null}=e,{size:s=2}=e;const c=()=>{J(t)};return a.$$set=o=>{"user"in o&&l(0,r=o.user),"size"in o&&l(3,s=o.size)},a.$$.update=()=>{a.$$.dirty&1&&(t=C+(r?`/user/${r.id}`:"/me")),a.$$.dirty&8&&l(1,n=`width: ${s}rem; height: ${s}rem;`)},[r,n,c,s]}class ke extends j{constructor(e){super(),S(this,e,he,de,A,{user:0,size:3})}}function pe(a){let e,l,t,n,r,s,c,o;return r=new q({props:{icon:"akar-icons:google-fill",width:22}}),{c(){e=v("div"),l=v("span"),t=M("Login"),n=D(),L(r.$$.fragment),this.h()},l(u){e=$(u,"DIV",{class:!0});var i=w(e);l=$(i,"SPAN",{class:!0});var f=w(l);t=P(f,"Login"),f.forEach(g),n=V(i),E(r.$$.fragment,i),i.forEach(g),this.h()},h(){m(l,"class","svelte-3lxkke"),m(e,"class","button color primary svelte-3lxkke")},m(u,i){I(u,e,i),p(e,l),p(l,t),p(e,n),B(r,e,null),s=!0,c||(o=N(e,"click",a[1]),c=!0)},p:d,i(u){s||(h(r.$$.fragment,u),s=!0)},o(u){k(r.$$.fragment,u),s=!1},d(u){u&&g(e),z(r),c=!1,o()}}}function be(a){let e,l,t,n,r,s,c,o,u,i;return e=new ke({}),c=new q({props:{icon:"fe:logout",width:22}}),{c(){L(e.$$.fragment),l=D(),t=v("div"),n=v("span"),r=M("Logout"),s=D(),L(c.$$.fragment),this.h()},l(f){E(e.$$.fragment,f),l=V(f),t=$(f,"DIV",{class:!0});var _=w(t);n=$(_,"SPAN",{class:!0});var b=w(n);r=P(b,"Logout"),b.forEach(g),s=V(_),E(c.$$.fragment,_),_.forEach(g),this.h()},h(){m(n,"class","hide-on-small svelte-3lxkke"),m(t,"class","button color primary svelte-3lxkke")},m(f,_){B(e,f,_),I(f,l,_),I(f,t,_),p(t,n),p(n,r),p(t,s),B(c,t,null),o=!0,u||(i=N(t,"click",a[2]),u=!0)},p:d,i(f){o||(h(e.$$.fragment,f),h(c.$$.fragment,f),o=!0)},o(f){k(e.$$.fragment,f),k(c.$$.fragment,f),o=!1},d(f){z(e,f),f&&g(l),f&&g(t),z(c),u=!1,i()}}}function ve(a){let e,l,t,n;const r=[be,pe],s=[];function c(o,u){return o[0]?0:1}return l=c(a),t=s[l]=r[l](a),{c(){e=v("section"),t.c(),this.h()},l(o){e=$(o,"SECTION",{class:!0});var u=w(e);t.l(u),u.forEach(g),this.h()},h(){m(e,"class","svelte-3lxkke")},m(o,u){I(o,e,u),s[l].m(e,null),n=!0},p(o,[u]){let i=l;l=c(o),l===i?s[l].p(o,u):(O(),k(s[i],1,1,()=>{s[i]=null}),U(),t=s[l],t?t.p(o,u):(t=s[l]=r[l](o),t.c()),h(t,1),t.m(e,null))},i(o){n||(h(t),n=!0)},o(o){k(t),n=!1},d(o){o&&g(e),s[l].d()}}}function $e(a,e,l){const t=()=>{J(`${C}/login`)};let n;return le.subscribe(async({user:s,ready:c})=>{l(0,n=s)}),[n,t,()=>te()]}class ye extends j{constructor(e){super(),S(this,e,$e,ve,A,{})}}function G(a){let e,l;return e=new se({}),{c(){L(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){z(e,t)}}}function we(a){let e,l,t,n,r,s,c,o,u,i,f,_=a[0]&&G();return i=new ye({}),{c(){e=v("div"),_&&_.c(),l=D(),t=v("a"),n=v("img"),c=D(),o=v("div"),u=D(),L(i.$$.fragment),this.h()},l(b){e=$(b,"DIV",{class:!0});var y=w(e);_&&_.l(y),l=V(y),t=$(y,"A",{href:!0});var F=w(t);n=$(F,"IMG",{src:!0,alt:!0,class:!0}),F.forEach(g),c=V(y),o=$(y,"DIV",{class:!0}),w(o).forEach(g),u=V(y),E(i.$$.fragment,y),y.forEach(g),this.h()},h(){H(n.src,r=a[2])||m(n,"src",r),m(n,"alt","HAJA"),m(n,"class","svelte-80eztu"),m(t,"href",s=C+a[1]),m(o,"class","center svelte-80eztu"),m(e,"class","flex svelte-80eztu")},m(b,y){I(b,e,y),_&&_.m(e,null),p(e,l),p(e,t),p(t,n),p(e,c),p(e,o),p(e,u),B(i,e,null),f=!0},p(b,[y]){b[0]?_?y&1&&h(_,1):(_=G(),_.c(),h(_,1),_.m(e,l)):_&&(O(),k(_,1,1,()=>{_=null}),U()),(!f||y&2&&s!==(s=C+b[1]))&&m(t,"href",s)},i(b){f||(h(_),h(i.$$.fragment,b),f=!0)},o(b){k(_),k(i.$$.fragment,b),f=!1},d(b){b&&g(e),_&&_.d(),z(i)}}}function Ie(a,e,l){let{backBtn:t=!0}=e,{logoLink:n="/"}=e;const r=`${C}/haja/logo_horizontal_full.png`;return a.$$set=s=>{"backBtn"in s&&l(0,t=s.backBtn),"logoLink"in s&&l(1,n=s.logoLink)},[t,n,r]}class Le extends j{constructor(e){super(),S(this,e,Ie,we,A,{backBtn:0,logoLink:1})}}function Ee(a){let e,l,t,n,r,s,c;t=new Le({props:{backBtn:a[0],logoLink:a[1]}});const o=a[3].default,u=W(o,a,a[2],null);return{c(){e=v("section"),l=v("div"),L(t.$$.fragment),n=D(),r=v("div"),s=D(),u&&u.c(),this.h()},l(i){e=$(i,"SECTION",{class:!0});var f=w(e);l=$(f,"DIV",{class:!0});var _=w(l);E(t.$$.fragment,_),n=V(_),r=$(_,"DIV",{class:!0}),w(r).forEach(g),s=V(_),u&&u.l(_),_.forEach(g),f.forEach(g),this.h()},h(){m(r,"class","padding-bottom svelte-19xwrm1"),m(l,"class","container svelte-19xwrm1"),m(e,"class","svelte-19xwrm1")},m(i,f){I(i,e,f),p(e,l),B(t,l,null),p(l,n),p(l,r),p(l,s),u&&u.m(l,null),c=!0},p(i,[f]){const _={};f&1&&(_.backBtn=i[0]),f&2&&(_.logoLink=i[1]),t.$set(_),u&&u.p&&(!c||f&4)&&X(u,o,i,i[2],c?Z(o,i[2],f,null):Y(i[2]),null)},i(i){c||(h(t.$$.fragment,i),h(u,i),c=!0)},o(i){k(t.$$.fragment,i),k(u,i),c=!1},d(i){i&&g(e),z(t),u&&u.d(i)}}}function Be(a,e,l){let{$$slots:t={},$$scope:n}=e,{backBtn:r=!0}=e,{logoLink:s="/"}=e;return a.$$set=c=>{"backBtn"in c&&l(0,r=c.backBtn),"logoLink"in c&&l(1,s=c.logoLink),"$$scope"in c&&l(2,n=c.$$scope)},[r,s,n,t]}class Se extends j{constructor(e){super(),S(this,e,Be,Ee,A,{backBtn:0,logoLink:1})}}export{Se as C,K as F,ke as U,ce as g};