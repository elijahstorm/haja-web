import{A as b,s as R,B as A,C as T,D as k}from"./index-1ec07f8a.js";const l=[];function q(e,s){return{subscribe:d(e,s).subscribe}}function d(e,s=b){let t;const o=new Set;function i(n){if(R(e,n)&&(e=n,t)){const c=!l.length;for(const r of o)r[1](),l.push(r,e);if(c){for(let r=0;r<l.length;r+=2)l[r][0](l[r+1]);l.length=0}}}function u(n){i(n(e))}function a(n,c=b){const r=[n,c];return o.add(r),o.size===1&&(t=s(i)||b),n(e),()=>{o.delete(r),o.size===0&&(t(),t=null)}}return{set:i,update:u,subscribe:a}}function N(e,s,t){const o=!Array.isArray(e),i=o?[e]:e,u=s.length<2;return q(t,a=>{let n=!1;const c=[];let r=0,p=b;const g=()=>{if(r)return;p();const f=s(o?c[0]:c,a);u?a(f):p=k(f)?f:b},w=i.map((f,h)=>A(f,U=>{c[h]=U,r&=~(1<<h),n&&g()},()=>{r|=1<<h}));return n=!0,g(),function(){T(w),p()}})}let _="",y="";function V(e){_=e.base,y=e.assets||_}function $(e){let s=e.baseURI;if(!s){const t=e.getElementsByTagName("base");s=t.length?t[0].href:e.URL}return s}function j(){return{x:pageXOffset,y:pageYOffset}}function x(e){return e.composedPath().find(t=>t instanceof Node&&t.nodeName.toUpperCase()==="A")}function z(e){return e instanceof SVGAElement?new URL(e.href.baseVal,document.baseURI):new URL(e.href)}function m(e){const s=d(e);let t=!0;function o(){t=!0,s.update(a=>a)}function i(a){t=!1,s.set(a)}function u(a){let n;return s.subscribe(c=>{(n===void 0||t&&c!==n)&&a(n=c)})}return{notify:o,set:i,subscribe:u}}function E(){const{set:e,subscribe:s}=d(!1);let t;async function o(){clearTimeout(t);const i=await fetch(`${y}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(i.ok){const{version:u}=await i.json(),a=u!=="1661139023137";return a&&(e(!0),clearTimeout(t)),a}else throw new Error(`Version check failed: ${i.status}`)}return{subscribe:s,check:o}}let I;function B(e){I=e.client}const C={url:m({}),page:m({}),navigating:d(null),updated:E()};export{z as a,j as b,V as c,I as d,N as e,x as f,$ as g,B as i,q as r,C as s,d as w};