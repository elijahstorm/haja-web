function E(){}const X=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function Et(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ut(t){return t()}function lt(){return Object.create(null)}function S(t){t.forEach(ut)}function q(t){return typeof t=="function"}function Ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Vt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function At(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Xt(t){let e;return ft(t,n=>e=n)(),e}function Yt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function Zt(t,e,n,i){if(t){const r=dt(t,e,n,i);return t[0](r)}}function dt(t,e,n,i){return t[1]&&i?vt(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function ee(t,e,n,i,r,c){if(r){const s=dt(e,n,i,c);t.p(s,r)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t){return t==null?"":t}function re(t){return t&&q(t.destroy)?t.destroy:E}const _t=typeof window<"u";let Y=_t?()=>window.performance.now():()=>Date.now(),Z=_t?t=>requestAnimationFrame(t):E;const j=new Set;function ht(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&Z(ht)}function tt(t){let e;return j.size===0&&Z(ht),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let J=!1;function St(){J=!0}function Ct(){J=!1}function jt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&l.push(d)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,d=(r>0&&e[n[r]].claim_order<=a?r+1:jt(1,r,u=>e[n[u]].claim_order,a))-1;i[l]=n[d]+1;const f=d+1;n[f]=l,r=Math.max(f,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<s.length;l++){for(;a<c.length&&s[l].claim_order>=c[a].claim_order;)a++;const d=a<c.length?c[a]:null;t.insertBefore(s[l],d)}}function mt(t,e){t.appendChild(e)}function pt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=et("style");return zt(pt(t),e),e.sheet}function zt(t,e){mt(t.head||t,e)}function Dt(t,e){if(J){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ce(t,e,n){J&&!n?Dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function yt(t){t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function qt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function nt(t){return document.createTextNode(t)}function oe(){return nt(" ")}function ae(){return nt("")}function ot(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ue(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function fe(t,e){for(const n in e)Pt(t,n,e[n])}function Rt(t){return Array.from(t.childNodes)}function Tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function gt(t,e,n,i,r=!1){Tt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function bt(t,e,n,i){return gt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function de(t,e,n){return bt(t,e,n,et)}function _e(t,e,n){return bt(t,e,n,qt)}function Ot(t,e){return gt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>nt(e),!0)}function he(t){return Ot(t," ")}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pe(t,e){t.value=e==null?"":e}function ye(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let O;function Lt(){if(O===void 0){O=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{O=!0}}return O}function ge(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=et("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Lt();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=ot(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=ot(i.contentWindow,"resize",e)}),mt(t,i),()=>{(r||c&&i.contentWindow)&&c(),yt(i)}}function be(t,e,n){t.classList[n?"add":"remove"](e)}function wt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function we(t,e=document.body){return Array.from(e.querySelectorAll(t))}const F=new Map;let I=0;function Wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Mt(e),rules:{}};return F.set(t,n),n}function H(t,e,n,i,r,c,s,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*c(m);a+=m*100+`%{${s(g,1-g)}}
`}const d=a+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Wt(d)}_${o}`,u=pt(t),{stylesheet:_,rules:h}=F.get(u)||Bt(u,t);h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,I+=1,f}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),I-=r,I||Ft())}function Ft(){Z(()=>{I||(F.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),F.clear())})}let D;function v(t){D=t}function C(){if(!D)throw new Error("Function called outside component initialization");return D}function xe(t){C().$$.on_mount.push(t)}function $e(t){C().$$.after_update.push(t)}function ke(t){C().$$.on_destroy.push(t)}function ve(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=wt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function Ee(t,e){return C().$$.context.set(t,e),e}function Ae(t){return C().$$.context.get(t)}function Se(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const z=[],at=[],W=[],U=[],xt=Promise.resolve();let V=!1;function $t(){V||(V=!0,xt.then(it))}function Ce(){return $t(),xt}function N(t){W.push(t)}function je(t){U.push(t)}const Q=new Set;let L=0;function it(){const t=D;do{for(;L<z.length;){const e=z[L];L++,v(e),It(e.$$)}for(v(null),z.length=0,L=0;at.length;)at.pop()();for(let e=0;e<W.length;e+=1){const n=W[e];Q.has(n)||(Q.add(n),n())}W.length=0}while(z.length);for(;U.length;)U.pop()();V=!1,Q.clear(),v(t)}function It(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let M;function st(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function A(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const B=new Set;let k;function Ht(){k={r:0,c:[],p:k}}function Gt(){k.r||S(k.c),k=k.p}function rt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function kt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),k.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ct={duration:0};function Ne(t,e,n){let i=e(t,n),r=!1,c,s,o=0;function l(){c&&G(t,c)}function a(){const{delay:f=0,duration:u=300,easing:_=X,tick:h=E,css:y}=i||ct;y&&(c=H(t,0,1,u,f,_,y,o++)),h(0,1);const m=Y()+f,g=m+u;s&&s.abort(),r=!0,N(()=>A(t,!0,"start")),s=tt(b=>{if(r){if(b>=g)return h(1,0),A(t,!0,"end"),l(),r=!1;if(b>=m){const w=_((b-m)/u);h(w,1-w)}}return r})}let d=!1;return{start(){d||(d=!0,G(t),q(i)?(i=i(),st().then(a)):a())},invalidate(){d=!1},end(){r&&(l(),r=!1)}}}function Me(t,e,n){let i=e(t,n),r=!0,c;const s=k;s.r+=1;function o(){const{delay:l=0,duration:a=300,easing:d=X,tick:f=E,css:u}=i||ct;u&&(c=H(t,1,0,a,l,d,u));const _=Y()+l,h=_+a;N(()=>A(t,!1,"start")),tt(y=>{if(r){if(y>=h)return f(0,1),A(t,!1,"end"),--s.r||S(s.c),!1;if(y>=_){const m=d((y-_)/a);f(1-m,m)}}return r})}return q(i)?st().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),r&&(c&&G(t,c),r=!1)}}}function ze(t,e,n,i){let r=e(t,n),c=i?0:1,s=null,o=null,l=null;function a(){l&&G(t,l)}function d(u,_){const h=u.b-c;return _*=Math.abs(h),{a:c,b:u.b,d:h,duration:_,start:u.start,end:u.start+_,group:u.group}}function f(u){const{delay:_=0,duration:h=300,easing:y=X,tick:m=E,css:g}=r||ct,b={start:Y()+_,b:u};u||(b.group=k,k.r+=1),s||o?o=b:(g&&(a(),l=H(t,c,u,h,_,y,g)),u&&m(0,1),s=d(b,h),N(()=>A(t,u,"start")),tt(w=>{if(o&&w>o.start&&(s=d(o,h),o=null,A(t,s.b,"start"),g&&(a(),l=H(t,c,s.b,s.duration,0,y,r.css))),s){if(w>=s.end)m(c=s.b,1-c),A(t,s.b,"end"),o||(s.b?a():--s.group.r||S(s.group.c)),s=null;else if(w>=s.start){const P=w-s.start;c=s.a+s.d*y(P/s.duration),m(c,1-c)}}return!!(s||o)}))}return{run(u){q(r)?st().then(()=>{r=r(),f(u)}):f(u)},end(){a(),s=o=null}}}function De(t,e){const n=e.token={};function i(r,c,s,o){if(e.token!==n)return;e.resolved=o;let l=e.ctx;s!==void 0&&(l=l.slice(),l[s]=o);const a=r&&(e.current=r)(l);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,u)=>{u!==c&&f&&(Ht(),kt(f,1,1,()=>{e.blocks[u]===f&&(e.blocks[u]=null)}),Gt())}):e.block.d(1),a.c(),rt(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[c]=a),d&&it()}if(Et(t)){const r=C();if(t.then(c=>{v(r),i(e.then,1,e.value,c),v(null)},c=>{if(v(r),i(e.catch,2,e.error,c),v(null),!e.hasCatch)throw c}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function qe(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}const Pe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Re(t,e){t.d(1),e.delete(t.key)}function Te(t,e){kt(t,1,1,()=>{e.delete(t.key)})}function Oe(t,e,n,i,r,c,s,o,l,a,d,f){let u=t.length,_=c.length,h=u;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,b=new Map;for(h=_;h--;){const p=f(r,c,h),x=n(p);let $=s.get(x);$?i&&$.p(p,e):($=a(x,p),$.c()),g.set(x,m[h]=$),x in y&&b.set(x,Math.abs(h-y[x]))}const w=new Set,P=new Set;function K(p){rt(p,1),p.m(o,d),s.set(p.key,p),d=p.first,_--}for(;u&&_;){const p=m[_-1],x=t[u-1],$=p.key,R=x.key;p===x?(d=p.first,u--,_--):g.has(R)?!s.has($)||w.has($)?K(p):P.has(R)?u--:b.get($)>b.get(R)?(P.add($),K(p)):(w.add(R),u--):(l(x,s),u--)}for(;u--;){const p=t[u];g.has(p.key)||l(p,s)}for(;_;)K(m[_-1]);return m}function Le(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],o=e[c];if(o){for(const l in s)l in o||(i[l]=1);for(const l in o)r[l]||(n[l]=o[l],r[l]=1);t[c]=o}else for(const l in s)r[l]=1}for(const s in i)s in n||(n[s]=void 0);return n}function We(t){return typeof t=="object"&&t!==null?t:{}}function Be(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Fe(t){t&&t.c()}function Ie(t,e){t&&t.l(e)}function Jt(t,e,n,i){const{fragment:r,on_mount:c,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||N(()=>{const l=c.map(ut).filter(q);s?s.push(...l):S(l),t.$$.on_mount=[]}),o.forEach(N)}function Kt(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Qt(t,e){t.$$.dirty[0]===-1&&(z.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function He(t,e,n,i,r,c,s,o=[-1]){const l=D;v(t);const a=t.$$={fragment:null,ctx:null,props:c,update:E,not_equal:r,bound:lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:lt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,..._)=>{const h=_.length?_[0]:u;return a.ctx&&r(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&Qt(t,f)),u}):[],a.update(),d=!0,S(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){St();const f=Rt(e.target);a.fragment&&a.fragment.l(f),f.forEach(yt)}else a.fragment&&a.fragment.c();e.intro&&rt(t.$$.fragment),Jt(t,e.target,e.anchor,e.customElement),Ct(),it()}v(l)}class Ge{$destroy(){Kt(this,1),this.$destroy=E}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!At(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{X as $,E as A,ft as B,S as C,q as D,Zt as E,we as F,Dt as G,ee as H,ne as I,te as J,Yt as K,ot as L,Vt as M,De as N,qe as O,ke as P,vt as Q,ie as R,Ge as S,qt as T,_e as U,fe as V,Le as W,ve as X,le as Y,N as Z,Ne as _,oe as a,be as a0,at as a1,pe as a2,ue as a3,Be as a4,je as a5,Me as a6,se as a7,Oe as a8,Te as a9,Xt as aa,Ee as ab,re as ac,ge as ad,Ae as ae,Y as af,tt as ag,We as ah,Se as ai,Re as aj,ze as ak,Pe as al,ce as b,he as c,Gt as d,ae as e,rt as f,Ht as g,yt as h,He as i,$e as j,et as k,de as l,Rt as m,Pt as n,xe as o,ye as p,nt as q,Ot as r,Ut as s,kt as t,me as u,Fe as v,Ie as w,Jt as x,Kt as y,Ce as z};