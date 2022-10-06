import{r as ts,i as Fa,_ as Pa,C as Ua,F as qa,g as ja,a as Ba,L as dt,S as $a,b as Ka,c as Ue,d as Ga,o as za,e as Ha,s as Qa,f as Wa,h as yr,G as Ya,j as Xa,k as Ja}from"./index-4dc22a28-8e87e0df.js";import{s as vr}from"./session-43aaf42a.js";var Za="firebase",eu="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ts(Za,eu,"app");const tu={apiKey:"AIzaSyBekHlkqR5KwKLl0vH_5CpwnkradmOt91Y",authDomain:"haja-project.firebaseapp.com",databaseURL:"https://haja-project-default-rtdb.firebaseio.com",projectId:"haja-project",storageBucket:"haja-project.appspot.com",messagingSenderId:"965643333791",appId:"1:965643333791:web:a799189abe33aa2c9972aa",measurementId:"G-N04NR104NT"},nu=Fa(tu);var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Is=Is||{},E=su||self;function nn(){}function vn(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ct(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iu(t){return Object.prototype.hasOwnProperty.call(t,Kn)&&t[Kn]||(t[Kn]=++ru)}var Kn="closure_uid_"+(1e9*Math.random()>>>0),ru=0;function ou(t,e,n){return t.call.apply(t.bind,arguments)}function au(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function W(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?W=ou:W=au,W.apply(null,arguments)}function Gt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function z(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Te(){this.s=this.s,this.o=this.o}var uu=0;Te.prototype.s=!1;Te.prototype.na=function(){!this.s&&(this.s=!0,this.M(),uu!=0)&&iu(this)};Te.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function As(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function bi(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(vn(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Y(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var hu=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",nn,e),E.removeEventListener("test",nn,e)}catch{}return t}();function sn(t){return/^[\s\xa0]*$/.test(t)}var Si=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Gn(t,e){return t<e?-1:t>e?1:0}function wn(){var t=E.navigator;return t&&(t=t.userAgent)?t:""}function ie(t){return wn().indexOf(t)!=-1}function bs(t){return bs[" "](t),t}bs[" "]=nn;function cu(t){var e=fu;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lu=ie("Opera"),qe=ie("Trident")||ie("MSIE"),Tr=ie("Edge"),ns=Tr||qe,Er=ie("Gecko")&&!(wn().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge"))&&!(ie("Trident")||ie("MSIE"))&&!ie("Edge"),du=wn().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge");function Ir(){var t=E.document;return t?t.documentMode:void 0}var rn;e:{var zn="",Hn=function(){var t=wn();if(Er)return/rv:([^\);]+)(\)|;)/.exec(t);if(Tr)return/Edge\/([\d\.]+)/.exec(t);if(qe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(du)return/WebKit\/(\S+)/.exec(t);if(lu)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hn&&(zn=Hn?Hn[1]:""),qe){var Qn=Ir();if(Qn!=null&&Qn>parseFloat(zn)){rn=String(Qn);break e}}rn=zn}var fu={};function pu(){return cu(function(){let t=0;const e=Si(String(rn)).split("."),n=Si("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Gn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Gn(i[2].length==0,r[2].length==0)||Gn(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var ss;if(E.document&&qe){var Ci=Ir();ss=Ci||parseInt(rn,10)||void 0}else ss=void 0;var mu=ss;function ft(t,e){if(Y.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Er){e:{try{bs(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gu[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ft.X.h.call(this)}}z(ft,Y);var gu={2:"touch",3:"pen",4:"mouse"};ft.prototype.h=function(){ft.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var kt="closure_listenable_"+(1e6*Math.random()|0),yu=0;function vu(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++yu,this.ba=this.ea=!1}function Tn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ss(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ar(t){const e={};for(const n in t)e[n]=t[n];return e}const ki="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function br(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ki.length;r++)n=ki[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function En(t){this.src=t,this.g={},this.h=0}En.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=rs(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vu(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function is(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=wr(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Tn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rs(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Cs="closure_lm_"+(1e6*Math.random()|0),Wn={};function Sr(t,e,n,s,i){if(s&&s.once)return kr(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Sr(t,e[r],n,s,i);return null}return n=Ns(n),t&&t[kt]?t.N(e,n,Ct(s)?!!s.capture:!!s,i):Cr(t,e,n,!1,s,i)}function Cr(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ct(i)?!!i.capture:!!i,a=Ds(t);if(a||(t[Cs]=a=new En(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=wu(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)hu||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Nr(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wu(){function t(n){return e.call(t.src,t.listener,n)}const e=Tu;return t}function kr(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)kr(t,e[r],n,s,i);return null}return n=Ns(n),t&&t[kt]?t.O(e,n,Ct(s)?!!s.capture:!!s,i):Cr(t,e,n,!0,s,i)}function Dr(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Dr(t,e[r],n,s,i);else s=Ct(s)?!!s.capture:!!s,n=Ns(n),t&&t[kt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=rs(r,n,s,i),-1<n&&(Tn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ds(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rs(e,n,s,i)),(n=-1<t?e[t]:null)&&ks(n))}function ks(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[kt])is(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Nr(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ds(e))?(is(n,t),n.h==0&&(n.src=null,e[Cs]=null)):Tn(t)}}}function Nr(t){return t in Wn?Wn[t]:Wn[t]="on"+t}function Tu(t,e){if(t.ba)t=!0;else{e=new ft(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ks(t),t=n.call(s,e)}return t}function Ds(t){return t=t[Cs],t instanceof En?t:null}var Yn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ns(t){return typeof t=="function"?t:(t[Yn]||(t[Yn]=function(e){return t.handleEvent(e)}),t[Yn])}function j(){Te.call(this),this.i=new En(this),this.P=this,this.I=null}z(j,Te);j.prototype[kt]=!0;j.prototype.removeEventListener=function(t,e,n,s){Dr(this,t,e,n,s)};function K(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Y(e,t);else if(e instanceof Y)e.target=e.target||t;else{var i=e;e=new Y(s,t),br(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=zt(o,s,!0,e)&&i}if(o=e.g=t,i=zt(o,s,!0,e)&&i,i=zt(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=zt(o,s,!1,e)&&i}j.prototype.M=function(){if(j.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Tn(n[s]);delete t.g[e],t.h--}}this.I=null};j.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};j.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function zt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&is(t.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var xs=E.JSON.stringify;function Eu(){var t=_r;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Iu{constructor(){this.h=this.g=null}add(e,n){const s=xr.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var xr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Au,t=>t.reset());class Au{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function bu(t){E.setTimeout(()=>{throw t},0)}function Rr(t,e){os||Su(),as||(os(),as=!0),_r.add(t,e)}var os;function Su(){var t=E.Promise.resolve(void 0);os=function(){t.then(Cu)}}var as=!1,_r=new Iu;function Cu(){for(var t;t=Eu();){try{t.h.call(t.g)}catch(n){bu(n)}var e=xr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}as=!1}function In(t,e){j.call(this),this.h=t||1,this.g=e||E,this.j=W(this.kb,this),this.l=Date.now()}z(In,j);y=In.prototype;y.ca=!1;y.R=null;y.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),K(this,"tick"),this.ca&&(Rs(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rs(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}y.M=function(){In.X.M.call(this),Rs(this),delete this.g};function _s(t,e,n){if(typeof t=="function")n&&(t=W(t,n));else if(t&&typeof t.handleEvent=="function")t=W(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function Lr(t){t.g=_s(()=>{t.g=null,t.i&&(t.i=!1,Lr(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ku extends Te{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(t){Te.call(this),this.h=t,this.g={}}z(pt,Te);var Di=[];function Mr(t,e,n,s){Array.isArray(n)||(n&&(Di[0]=n.toString()),n=Di);for(var i=0;i<n.length;i++){var r=Sr(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Or(t){Ss(t.g,function(e,n){this.g.hasOwnProperty(n)&&ks(e)},t),t.g={}}pt.prototype.M=function(){pt.X.M.call(this),Or(this)};pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function An(){this.g=!0}An.prototype.Aa=function(){this.g=!1};function Du(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&l[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Nu(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Me(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ru(t,n)+(s?" "+s:"")})}function xu(t,e){t.info(function(){return"TIMEOUT: "+e})}An.prototype.info=function(){};function Ru(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xs(n)}catch{return e}}var Ne={},Ni=null;function bn(){return Ni=Ni||new j}Ne.Oa="serverreachability";function Vr(t){Y.call(this,Ne.Oa,t)}z(Vr,Y);function mt(t){const e=bn();K(e,new Vr(e))}Ne.STAT_EVENT="statevent";function Fr(t,e){Y.call(this,Ne.STAT_EVENT,t),this.stat=e}z(Fr,Y);function X(t){const e=bn();K(e,new Fr(e,t))}Ne.Pa="timingevent";function Pr(t,e){Y.call(this,Ne.Pa,t),this.size=e}z(Pr,Y);function Dt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var Sn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Ur={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ls(){}Ls.prototype.h=null;function xi(t){return t.h||(t.h=t.i())}function qr(){}var Nt={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Ms(){Y.call(this,"d")}z(Ms,Y);function Os(){Y.call(this,"c")}z(Os,Y);var us;function Cn(){}z(Cn,Ls);Cn.prototype.g=function(){return new XMLHttpRequest};Cn.prototype.i=function(){return{}};us=new Cn;function xt(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new pt(this),this.O=_u,t=ns?125:void 0,this.T=new In(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new jr}function jr(){this.i=null,this.g="",this.h=!1}var _u=45e3,hs={},on={};y=xt.prototype;y.setTimeout=function(t){this.O=t};function cs(t,e,n){t.K=1,t.v=Dn(ce(e)),t.s=n,t.P=!0,Br(t,null)}function Br(t,e){t.F=Date.now(),Rt(t),t.A=ce(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Yr(n.i,"t",s),t.C=0,n=t.l.H,t.h=new jr,t.g=vo(t.l,n?e:null,!t.s),0<t.N&&(t.L=new ku(W(t.Ka,t,t.g),t.N)),Mr(t.S,t.g,"readystatechange",t.hb),e=t.H?Ar(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),mt(),Du(t.j,t.u,t.A,t.m,t.U,t.s)}y.hb=function(t){t=t.target;const e=this.L;e&&ae(t)==3?e.l():this.Ka(t)};y.Ka=function(t){try{if(t==this.g)e:{const c=ae(this.g);var e=this.g.Ea();const l=this.g.aa();if(!(3>c)&&(c!=3||ns||this.g&&(this.h.h||this.g.fa()||Mi(this.g)))){this.I||c!=4||e==7||(e==8||0>=l?mt(3):mt(2)),kn(this);var n=this.g.aa();this.Y=n;t:if($r(this)){var s=Mi(this.g);t="";var i=s.length,r=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ie(this),ut(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Nu(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sn(a)){var h=a;break t}}h=null}if(n=h)Me(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ls(this,n);else{this.i=!1,this.o=3,X(12),Ie(this),ut(this);break e}}this.P?(Kr(this,c,o),ns&&this.i&&c==3&&(Mr(this.S,this.T,"tick",this.gb),this.T.start())):(Me(this.j,this.m,o,null),ls(this,o)),c==4&&Ie(this),this.i&&!this.I&&(c==4?po(this.l,this):(this.i=!1,Rt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),Ie(this),ut(this)}}}catch{}finally{}};function $r(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Kr(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Lu(t,n),i==on){e==4&&(t.o=4,X(14),s=!1),Me(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hs){t.o=4,X(15),Me(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Me(t.j,t.m,i,null),ls(t,i);$r(t)&&i!=on&&i!=hs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,X(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bs(e),e.K=!0,X(11))):(Me(t.j,t.m,n,"[Invalid Chunked Response]"),Ie(t),ut(t))}y.gb=function(){if(this.g){var t=ae(this.g),e=this.g.fa();this.C<e.length&&(kn(this),Kr(this,t,e),this.i&&t!=4&&Rt(this))}};function Lu(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?on:(n=Number(e.substring(n,s)),isNaN(n)?hs:(s+=1,s+n>e.length?on:(e=e.substr(s,n),t.C=s+n,e)))}y.cancel=function(){this.I=!0,Ie(this)};function Rt(t){t.V=Date.now()+t.O,Gr(t,t.O)}function Gr(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Dt(W(t.fb,t),e)}function kn(t){t.B&&(E.clearTimeout(t.B),t.B=null)}y.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(xu(this.j,this.A),this.K!=2&&(mt(),X(17)),Ie(this),this.o=2,ut(this)):Gr(this,this.V-t)};function ut(t){t.l.G==0||t.I||po(t.l,t)}function Ie(t){kn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Rs(t.T),Or(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ls(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ds(n.h,t))){if(!t.J&&ds(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)hn(n),Rn(n);else break e;js(n),X(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Dt(W(n.bb,n),6e3));if(1>=Zr(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ae(n,11)}else if((t.J||n.g==t)&&hn(n),!sn(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.T=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.I=h[1],n.ka=h[2];const c=h[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const l=h[4];l!=null&&(n.Ca=l,n.j.info("SVER="+n.Ca));const p=h[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Vs(r,r.h),r.h=null))}if(s.D){const D=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.za=D,_(s.F,s.D,D))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=yo(s,s.H?s.ka:null,s.V),o.J){eo(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(kn(a),Rt(a)),s.g=o}else lo(s);0<n.i.length&&_n(n)}else h[0]!="stop"&&h[0]!="close"||Ae(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Ae(n,7):qs(n):h[0]!="noop"&&n.l&&n.l.wa(h),n.A=0)}}mt(4)}catch{}}function Mu(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vn(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ou(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vn(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function zr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vn(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ou(t),s=Mu(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Hr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vu(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Se(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Se){this.h=e!==void 0?e:t.h,an(this,t.j),this.s=t.s,this.g=t.g,un(this,t.m),this.l=t.l,e=t.i;var n=new gt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ri(this,n),this.o=t.o}else t&&(n=String(t).match(Hr))?(this.h=!!e,an(this,n[1]||"",!0),this.s=it(n[2]||""),this.g=it(n[3]||"",!0),un(this,n[4]),this.l=it(n[5]||"",!0),Ri(this,n[6]||"",!0),this.o=it(n[7]||"")):(this.h=!!e,this.i=new gt(null,this.h))}Se.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rt(e,_i,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rt(e,_i,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(rt(n,n.charAt(0)=="/"?Uu:Pu,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rt(n,ju)),t.join("")};function ce(t){return new Se(t)}function an(t,e,n){t.j=n?it(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function un(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ri(t,e,n){e instanceof gt?(t.i=e,Bu(t.i,t.h)):(n||(e=rt(e,qu)),t.i=new gt(e,t.h))}function _(t,e,n){t.i.set(e,n)}function Dn(t){return _(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function it(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fu),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fu(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _i=/[#\/\?@]/g,Pu=/[#\?:]/g,Uu=/[#\?]/g,qu=/[#\?@]/g,ju=/#/g;function gt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ee(t){t.g||(t.g=new Map,t.h=0,t.i&&Vu(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}y=gt.prototype;y.add=function(t,e){Ee(this),this.i=null,t=He(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Qr(t,e){Ee(t),e=He(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Wr(t,e){return Ee(t),e=He(t,e),t.g.has(e)}y.forEach=function(t,e){Ee(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};y.oa=function(){Ee(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};y.W=function(t){Ee(this);let e=[];if(typeof t=="string")Wr(this,t)&&(e=e.concat(this.g.get(He(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};y.set=function(t,e){return Ee(this),this.i=null,t=He(this,t),Wr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};y.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Yr(t,e,n){Qr(t,e),0<n.length&&(t.i=null,t.g.set(He(t,e),As(n)),t.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function He(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Bu(t,e){e&&!t.j&&(Ee(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Qr(this,s),Yr(this,i,n))},t)),t.j=e}var $u=class{constructor(t,e){this.h=t,this.g=e}};function Xr(t){this.l=t||Ku,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ku=10;function Jr(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Zr(t){return t.h?1:t.g?t.g.size:0}function ds(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vs(t,e){t.g?t.g.add(e):t.h=e}function eo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Xr.prototype.cancel=function(){if(this.i=to(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function to(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return As(t.i)}function Fs(){}Fs.prototype.stringify=function(t){return E.JSON.stringify(t,void 0)};Fs.prototype.parse=function(t){return E.JSON.parse(t,void 0)};function Gu(){this.g=new Fs}function zu(t,e,n){const s=n||"";try{zr(t,function(i,r){let o=i;Ct(i)&&(o=xs(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Hu(t,e){const n=new An;if(E.Image){const s=new Image;s.onload=Gt(Ht,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Gt(Ht,n,s,"TestLoadImage: error",!1,e),s.onabort=Gt(Ht,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Gt(Ht,n,s,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ht(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function _t(t){this.l=t.$b||null,this.j=t.ib||!1}z(_t,Ls);_t.prototype.g=function(){return new Nn(this.l,this.j)};_t.prototype.i=function(t){return function(){return t}}({});function Nn(t,e){j.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ps,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Nn,j);var Ps=0;y=Nn.prototype;y.open=function(t,e){if(this.readyState!=Ps)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yt(this)};y.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||E).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lt(this)),this.readyState=Ps};y.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yt(this)),this.g&&(this.readyState=3,yt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;no(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function no(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}y.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Lt(this):yt(this),this.readyState==3&&no(this)}};y.Ua=function(t){this.g&&(this.response=this.responseText=t,Lt(this))};y.Ta=function(t){this.g&&(this.response=t,Lt(this))};y.ga=function(){this.g&&Lt(this)};function Lt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yt(t)}y.setRequestHeader=function(t,e){this.v.append(t,e)};y.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Qu=E.JSON.parse;function V(t){j.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=so,this.K=this.L=!1}z(V,j);var so="",Wu=/^https?$/i,Yu=["POST","PUT"];y=V.prototype;y.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():us.g(),this.C=this.u?xi(this.u):xi(us),this.g.onreadystatechange=W(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Li(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=E.FormData&&t instanceof E.FormData,!(0<=wr(Yu,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{oo(this),0<this.B&&((this.K=Xu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=W(this.qa,this)):this.A=_s(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Li(this,r)}};function Xu(t){return qe&&pu()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}y.qa=function(){typeof Is<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Li(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,io(t),xn(t)}function io(t){t.D||(t.D=!0,K(t,"complete"),K(t,"error"))}y.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,K(this,"complete"),K(this,"abort"),xn(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xn(this,!0)),V.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?ro(this):this.eb())};y.eb=function(){ro(this)};function ro(t){if(t.h&&typeof Is<"u"&&(!t.C[1]||ae(t)!=4||t.aa()!=2)){if(t.v&&ae(t)==4)_s(t.Ha,0,t);else if(K(t,"readystatechange"),ae(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Hr)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!Wu.test(i?i.toLowerCase():"")}n=s}if(n)K(t,"complete"),K(t,"success");else{t.m=6;try{var o=2<ae(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",io(t)}}finally{xn(t)}}}}function xn(t,e){if(t.g){oo(t);const n=t.g,s=t.C[0]?nn:null;t.g=null,t.C=null,e||K(t,"ready");try{n.onreadystatechange=s}catch{}}}function oo(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}function ae(t){return t.g?t.g.readyState:0}y.aa=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Qu(e)}};function Mi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case so:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function ao(t){let e="";return Ss(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Us(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ao(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_(t,e,n))}function st(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uo(t){this.Ca=0,this.i=[],this.j=new An,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=st("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=st("baseRetryDelayMs",5e3,t),this.ab=st("retryDelaySeedMs",1e4,t),this.Za=st("forwardChannelMaxRetries",2,t),this.ta=st("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Xr(t&&t.concurrentRequestLimit),this.Fa=new Gu,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=uo.prototype;y.ma=8;y.G=1;function qs(t){if(ho(t),t.G==3){var e=t.U++,n=ce(t.F);_(n,"SID",t.I),_(n,"RID",e),_(n,"TYPE","terminate"),Mt(t,n),e=new xt(t,t.j,e,void 0),e.K=2,e.v=Dn(ce(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(e.v.toString(),"")),!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=vo(e.l,null),e.g.da(e.v)),e.F=Date.now(),Rt(e)}go(t)}function Rn(t){t.g&&(Bs(t),t.g.cancel(),t.g=null)}function ho(t){Rn(t),t.u&&(E.clearTimeout(t.u),t.u=null),hn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function _n(t){Jr(t.h)||t.m||(t.m=!0,Rr(t.Ja,t),t.C=0)}function Ju(t,e){return Zr(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=Dt(W(t.Ja,t,e),mo(t,t.C)),t.C++,!0)}y.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new xt(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Ar(r),br(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=co(this,i,e),n=ce(this.F),_(n,"RID",t),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Mt(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(ao(r)))+"&"+e:this.o&&Us(n,this.o,r)),Vs(this.h,i),this.Xa&&_(n,"TYPE","init"),this.O?(_(n,"$req",e),_(n,"SID","null"),i.Z=!0,cs(i,n,null)):cs(i,n,e),this.G=2}}else this.G==3&&(t?Oi(this,t):this.i.length==0||Jr(this.h)||Oi(this))};function Oi(t,e){var n;e?n=e.m:n=t.U++;const s=ce(t.F);_(s,"SID",t.I),_(s,"RID",n),_(s,"AID",t.T),Mt(t,s),t.o&&t.s&&Us(s,t.o,t.s),n=new xt(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=co(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Vs(t.h,n),cs(n,s,e)}function Mt(t,e){t.ia&&Ss(t.ia,function(n,s){_(e,s,n)}),t.l&&zr({},function(n,s){_(e,s,n)})}function co(t,e,n){n=Math.min(t.i.length,n);var s=t.l?W(t.l.Qa,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let h=i[u].h;const c=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),a=!1;else try{zu(c,o,"req"+h+"_")}catch{s&&s(c)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function lo(t){t.g||t.u||(t.Z=1,Rr(t.Ia,t),t.A=0)}function js(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Dt(W(t.Ia,t),mo(t,t.A)),t.A++,!0)}y.Ia=function(){if(this.u=null,fo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Dt(W(this.cb,this),t)}};y.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,X(10),Rn(this),fo(this))};function Bs(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function fo(t){t.g=new xt(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ce(t.sa);_(e,"RID","rpc"),_(e,"SID",t.I),_(e,"CI",t.L?"0":"1"),_(e,"AID",t.T),_(e,"TYPE","xmlhttp"),Mt(t,e),t.o&&t.s&&Us(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Dn(ce(e)),n.s=null,n.P=!0,Br(n,t)}y.bb=function(){this.v!=null&&(this.v=null,Rn(this),js(this),X(19))};function hn(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function po(t,e){var n=null;if(t.g==e){hn(t),Bs(t),t.g=null;var s=2}else if(ds(t.h,e))n=e.D,eo(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=bn(),K(s,new Pr(s,n)),_n(t)}else lo(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Ju(t,e)||s==2&&js(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ae(t,5);break;case 4:Ae(t,10);break;case 3:Ae(t,6);break;default:Ae(t,2)}}}function mo(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Ae(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=W(t.jb,t);n||(n=new Se("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||an(n,"https"),Dn(n)),Hu(n.toString(),s)}else X(2);t.G=0,t.l&&t.l.va(e),go(t),ho(t)}y.jb=function(t){t?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function go(t){if(t.G=0,t.la=[],t.l){const e=to(t.h);(e.length!=0||t.i.length!=0)&&(bi(t.la,e),bi(t.la,t.i),t.h.i.length=0,As(t.i),t.i.length=0),t.l.ua()}}function yo(t,e,n){var s=n instanceof Se?ce(n):new Se(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),un(s,s.m);else{var i=E.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Se(null,void 0);s&&an(r,s),e&&(r.g=e),i&&un(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&_(s,n,e),_(s,"VER",t.ma),Mt(t,s),s}function vo(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new V(new _t({ib:!0})):new V(t.ra),e.L=t.H,e}function wo(){}y=wo.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Qa=function(){};function cn(){if(qe&&!(10<=Number(mu)))throw Error("Environmental error: no available transport.")}cn.prototype.g=function(t,e){return new te(t,e)};function te(t,e){j.call(this),this.g=new uo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!sn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!sn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qe(this)}z(te,j);te.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;X(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=yo(t,null,t.V),_n(t)};te.prototype.close=function(){qs(this.g)};te.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xs(t),t=n);e.i.push(new $u(e.$a++,t)),e.G==3&&_n(e)};te.prototype.M=function(){this.g.l=null,delete this.j,qs(this.g),delete this.g,te.X.M.call(this)};function To(t){Ms.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}z(To,Ms);function Eo(){Os.call(this),this.status=1}z(Eo,Os);function Qe(t){this.g=t}z(Qe,wo);Qe.prototype.xa=function(){K(this.g,"a")};Qe.prototype.wa=function(t){K(this.g,new To(t))};Qe.prototype.va=function(t){K(this.g,new Eo)};Qe.prototype.ua=function(){K(this.g,"b")};cn.prototype.createWebChannel=cn.prototype.g;te.prototype.send=te.prototype.u;te.prototype.open=te.prototype.m;te.prototype.close=te.prototype.close;Sn.NO_ERROR=0;Sn.TIMEOUT=8;Sn.HTTP_ERROR=6;Ur.COMPLETE="complete";qr.EventType=Nt;Nt.OPEN="a";Nt.CLOSE="b";Nt.ERROR="c";Nt.MESSAGE="d";j.prototype.listen=j.prototype.N;V.prototype.listenOnce=V.prototype.O;V.prototype.getLastError=V.prototype.Na;V.prototype.getLastErrorCode=V.prototype.Ea;V.prototype.getStatus=V.prototype.aa;V.prototype.getResponseJson=V.prototype.Ra;V.prototype.getResponseText=V.prototype.fa;V.prototype.send=V.prototype.da;var Zu=function(){return new cn},eh=function(){return bn()},Xn=Sn,th=Ur,nh=Ne,Vi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},sh=_t,Qt=qr,ih=V;const Fi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Ka("@firebase/firestore");function Pi(){return ke.logLevel}function w(t,...e){if(ke.logLevel<=dt.DEBUG){const n=e.map($s);ke.debug(`Firestore (${We}): ${t}`,...n)}}function le(t,...e){if(ke.logLevel<=dt.ERROR){const n=e.map($s);ke.error(`Firestore (${We}): ${t}`,...n)}}function Ui(t,...e){if(ke.logLevel<=dt.WARN){const n=e.map($s);ke.warn(`Firestore (${We}): ${t}`,...n)}}function $s(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t="Unexpected state"){const e=`FIRESTORE (${We}) INTERNAL ASSERTION FAILED: `+t;throw le(e),new Error(e)}function x(t,e){t||I()}function A(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class g extends qa{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class ah{constructor(e){this.t=e,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ue,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ue)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(x(typeof s.accessToken=="string"),new rh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return x(e===null||typeof e=="string"),new Z(e)}}class uh{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(x(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class hh{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new uh(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ch{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lh{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(x(typeof n.token=="string"),this.A=n.token,new ch(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=dh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function N(t,e){return t<e?-1:t>e?1:0}function je(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new g(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new g(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new g(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new g(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new F(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new F(0,0))}static max(){return new b(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,s){n===void 0?n=0:n>e.length&&I(),s===void 0?s=e.length-n:s>e.length-n&&I(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class R extends vt{construct(e,n,s){return new R(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new g(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new R(n)}static emptyPath(){return new R([])}}const fh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends vt{construct(e,n,s){return new Q(e,n,s)}static isValidIdentifier(e){return fh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new g(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new g(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new g(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new g(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(R.fromString(e))}static fromName(e){return new T(R.fromString(e).popFirst(5))}static empty(){return new T(R.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&R.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return R.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new R(e.slice()))}}function ph(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=b.fromTimestamp(s===1e9?new F(n+1,0):new F(n,s));return new ge(i,T.empty(),e)}function mh(t){return new ge(t.readTime,t.key,-1)}class ge{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ge(b.min(),T.empty(),-1)}static max(){return new ge(b.max(),T.empty(),-1)}}function gh(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=T.comparator(t.documentKey,e.documentKey),n!==0?n:N(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(t){if(t.code!==d.FAILED_PRECONDITION||t.message!==yh)throw t;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):f.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):f.reject(n)}static resolve(e){return new f((n,s)=>{n(e)})}static reject(e){return new f((n,s)=>{s(e)})}static waitFor(e){return new f((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(e){let n=f.resolve(!1);for(const s of e)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new f((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const h=u;n(e[h]).next(c=>{o[h]=c,++a,a===r&&s(o)},c=>i(c))}})}static doWhile(e,n){return new f((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Vt(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ye(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ao(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ks.at=-1;class U{constructor(e,n){this.comparator=e,this.root=n||B.EMPTY}insert(e,n){return new U(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,B.BLACK,null,null))}remove(e){return new U(this.comparator,this.root.remove(e,this.comparator).copy(null,null,B.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wt(this.root,e,this.comparator,!0)}}class Wt{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class B{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:B.RED,this.left=i!=null?i:B.EMPTY,this.right=r!=null?r:B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new B(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return B.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,n,s,i){return this}insert(t,e,n){return new B(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.comparator=e,this.data=new U(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ji(this.data.getIterator())}getIteratorFrom(e){return new ji(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof P)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new P(this.comparator);return n.data=e,n}}class ji{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.fields=e,e.sort(Q.comparator)}static empty(){return new re([])}unionWith(e){let n=new P(Q.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new re(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return je(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new G(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new G(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const wh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ye(t){if(x(!!t),typeof t=="string"){let e=0;const n=wh.exec(t);if(x(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:O(t.seconds),nanos:O(t.nanos)}}function O(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Be(t){return typeof t=="string"?G.fromBase64String(t):G.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function So(t){const e=t.mapValue.fields.__previous_value__;return bo(e)?So(e):e}function wt(t){const e=ye(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,s,i,r,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Tt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tt&&e.projectId===this.projectId&&e.database===this.database}}function Ln(t){return t==null}function ln(t){return t===0&&1/t==-1/0}function Eh(t){return typeof t=="number"&&Number.isInteger(t)&&!ln(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function De(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bo(t)?4:Ih(t)?9007199254740991:10:I()}function oe(t,e){if(t===e)return!0;const n=De(t);if(n!==De(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wt(t).isEqual(wt(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=ye(s.timestampValue),o=ye(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Be(s.bytesValue).isEqual(Be(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return O(s.geoPointValue.latitude)===O(i.geoPointValue.latitude)&&O(s.geoPointValue.longitude)===O(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return O(s.integerValue)===O(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=O(s.doubleValue),o=O(i.doubleValue);return r===o?ln(r)===ln(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return je(t.arrayValue.values||[],e.arrayValue.values||[],oe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(qi(r)!==qi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!oe(r[a],o[a])))return!1;return!0}(t,e);default:return I()}}function Et(t,e){return(t.values||[]).find(n=>oe(n,e))!==void 0}function $e(t,e){if(t===e)return 0;const n=De(t),s=De(e);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=O(i.integerValue||i.doubleValue),a=O(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bi(t.timestampValue,e.timestampValue);case 4:return Bi(wt(t),wt(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Be(i),a=Be(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const h=N(o[u],a[u]);if(h!==0)return h}return N(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=N(O(i.latitude),O(r.latitude));return o!==0?o:N(O(i.longitude),O(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const h=$e(o[u],a[u]);if(h)return h}return N(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Yt.mapValue&&r===Yt.mapValue)return 0;if(i===Yt.mapValue)return 1;if(r===Yt.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},h=Object.keys(u);a.sort(),h.sort();for(let c=0;c<a.length&&c<h.length;++c){const l=N(a[c],h[c]);if(l!==0)return l;const p=$e(o[a[c]],u[h[c]]);if(p!==0)return p}return N(a.length,h.length)}(t.mapValue,e.mapValue);default:throw I()}}function Bi(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=ye(t),s=ye(e),i=N(n.seconds,s.seconds);return i!==0?i:N(n.nanos,s.nanos)}function Ve(t){return fs(t)}function fs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=ye(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Be(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,T.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=fs(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${fs(s.fields[a])}`;return r+"}"}(t.mapValue):I();var e,n}function $i(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ps(t){return!!t&&"integerValue"in t}function Gs(t){return!!t&&"arrayValue"in t}function Ki(t){return!!t&&"nullValue"in t}function Gi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jt(t){return!!t&&"mapValue"in t}function ht(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ye(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ht(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ht(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ih(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.value=e}static empty(){return new ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Jt(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ht(n)}setAll(e){let n=Q.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ht(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Jt(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return oe(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Jt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){Ye(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ne(ht(this.value))}}function Co(t){const e=[];return Ye(t.fields,(n,s)=>{const i=new Q([n]);if(Jt(s)){const r=Co(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new re(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,n,s,i,r,o){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new $(e,0,b.min(),b.min(),ne.empty(),0)}static newFoundDocument(e,n,s){return new $(e,1,n,b.min(),s,0)}static newNoDocument(e,n){return new $(e,2,n,b.min(),ne.empty(),0)}static newUnknownDocument(e,n){return new $(e,3,n,b.min(),ne.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function zi(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ah(t,e,n,s,i,r,o)}function zs(t){const e=A(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Ve(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ln(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ve(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ve(s)).join(",")),e.ht=n}return e.ht}function bh(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Ve(s.value)}`;var s}).join(", ")}]`),Ln(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ve(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ve(n)).join(",")),`Target(${e})`}function Hs(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!_h(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!oe(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qi(t.startAt,e.startAt)&&Qi(t.endAt,e.endAt)}function ms(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class J extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new Sh(e,n,s):n==="array-contains"?new Dh(e,s):n==="in"?new Nh(e,s):n==="not-in"?new xh(e,s):n==="array-contains-any"?new Rh(e,s):new J(e,n,s)}static lt(e,n,s){return n==="in"?new Ch(e,s):new kh(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft($e(n,this.value)):n!==null&&De(this.value)===De(n)&&this.ft($e(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return I()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Sh extends J{constructor(e,n,s){super(e,n,s),this.key=T.fromName(s.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.ft(n)}}class Ch extends J{constructor(e,n){super(e,"in",n),this.keys=ko("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kh extends J{constructor(e,n){super(e,"not-in",n),this.keys=ko("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ko(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class Dh extends J{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gs(n)&&Et(n.arrayValue,this.value)}}class Nh extends J{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Et(this.value.arrayValue,n)}}class xh extends J{constructor(e,n){super(e,"not-in",n)}matches(e){if(Et(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Et(this.value.arrayValue,n)}}class Rh extends J{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Et(this.value.arrayValue,s))}}class dn{constructor(e,n){this.position=e,this.inclusive=n}}class Fe{constructor(e,n="asc"){this.field=e,this.dir=n}}function _h(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Hi(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=$e(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qi(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!oe(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function Lh(t,e,n,s,i,r,o,a){return new Xe(t,e,n,s,i,r,o,a)}function Qs(t){return new Xe(t)}function Wi(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ws(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ys(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Do(t){return t.collectionGroup!==null}function It(t){const e=A(t);if(e._t===null){e._t=[];const n=Ys(e),s=Ws(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new Fe(n)),e._t.push(new Fe(Q.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Fe(Q.keyField(),r))}}}return e._t}function de(t){const e=A(t);if(!e.wt)if(e.limitType==="F")e.wt=zi(e.path,e.collectionGroup,It(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of It(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Fe(r.field,o))}const s=e.endAt?new dn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new dn(e.startAt.position,e.startAt.inclusive):null;e.wt=zi(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function fn(t,e,n){return new Xe(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mn(t,e){return Hs(de(t),de(e))&&t.limitType===e.limitType}function No(t){return`${zs(de(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${bh(de(t))}; limitType=${t.limitType})`}function Xs(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Hi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,It(n),s)||n.endAt&&!function(i,r,o){const a=Hi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,It(n),s))}(t,e)}function Mh(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xo(t){return(e,n)=>{let s=!1;for(const i of It(t)){const r=Oh(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Oh(t,e,n){const s=t.field.isKeyField()?T.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?$e(a,u):I()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ln(e)?"-0":e}}function _o(t){return{integerValue:""+t}}function Vh(t,e){return Eh(e)?_o(e):Ro(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this._=void 0}}function Fh(t,e,n){return t instanceof At?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof bt?Mo(t,e):t instanceof St?Oo(t,e):function(s,i){const r=Lo(s,i),o=Yi(r)+Yi(s.yt);return ps(r)&&ps(s.yt)?_o(o):Ro(s.It,o)}(t,e)}function Ph(t,e,n){return t instanceof bt?Mo(t,e):t instanceof St?Oo(t,e):n}function Lo(t,e){return t instanceof pn?ps(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class At extends On{}class bt extends On{constructor(e){super(),this.elements=e}}function Mo(t,e){const n=Vo(e);for(const s of t.elements)n.some(i=>oe(i,s))||n.push(s);return{arrayValue:{values:n}}}class St extends On{constructor(e){super(),this.elements=e}}function Oo(t,e){let n=Vo(e);for(const s of t.elements)n=n.filter(i=>!oe(i,s));return{arrayValue:{values:n}}}class pn extends On{constructor(e,n){super(),this.It=e,this.yt=n}}function Yi(t){return O(t.integerValue||t.doubleValue)}function Vo(t){return Gs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.field=e,this.transform=n}}function qh(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof bt&&s instanceof bt||n instanceof St&&s instanceof St?je(n.elements,s.elements,oe):n instanceof pn&&s instanceof pn?oe(n.yt,s.yt):n instanceof At&&s instanceof At}(t.transform,e.transform)}class jh{constructor(e,n){this.version=e,this.transformResults=n}}class se{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new se}static exists(e){return new se(void 0,e)}static updateTime(e){return new se(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zt(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vn{}function Fo(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Js(t.key,se.none()):new Ft(t.key,t.data,se.none());{const n=t.data,s=ne.empty();let i=new P(Q.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new xe(t.key,s,new re(i.toArray()),se.none())}}function Bh(t,e,n){t instanceof Ft?function(s,i,r){const o=s.value.clone(),a=Ji(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof xe?function(s,i,r){if(!Zt(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ji(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Po(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ct(t,e,n,s){return t instanceof Ft?function(i,r,o,a){if(!Zt(i.precondition,r))return o;const u=i.value.clone(),h=Zi(i.fieldTransforms,a,r);return u.setAll(h),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof xe?function(i,r,o,a){if(!Zt(i.precondition,r))return o;const u=Zi(i.fieldTransforms,a,r),h=r.data;return h.setAll(Po(i)),h.setAll(u),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,s):function(i,r,o){return Zt(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function $h(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Lo(s.transform,i||null);r!=null&&(n===null&&(n=ne.empty()),n.set(s.field,r))}return n||null}function Xi(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&je(n,s,(i,r)=>qh(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ft extends Vn{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xe extends Vn{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Po(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Ji(t,e,n){const s=new Map;x(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ph(o,a,n[i]))}return s}function Zi(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Fh(r,o,e))}return s}class Js extends Vn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kh extends Vn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,k;function zh(t){switch(t){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Uo(t){if(t===void 0)return le("GRPC error has no .code"),d.UNKNOWN;switch(t){case M.OK:return d.OK;case M.CANCELLED:return d.CANCELLED;case M.UNKNOWN:return d.UNKNOWN;case M.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case M.INTERNAL:return d.INTERNAL;case M.UNAVAILABLE:return d.UNAVAILABLE;case M.UNAUTHENTICATED:return d.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case M.NOT_FOUND:return d.NOT_FOUND;case M.ALREADY_EXISTS:return d.ALREADY_EXISTS;case M.PERMISSION_DENIED:return d.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case M.ABORTED:return d.ABORTED;case M.OUT_OF_RANGE:return d.OUT_OF_RANGE;case M.UNIMPLEMENTED:return d.UNIMPLEMENTED;case M.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(k=M||(M={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ye(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Ao(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new U(T.comparator);function fe(){return Hh}const qo=new U(T.comparator);function ot(...t){let e=qo;for(const n of t)e=e.insert(n.key,n);return e}function jo(t){let e=qo;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function be(){return lt()}function Bo(){return lt()}function lt(){return new Je(t=>t.toString(),(t,e)=>t.isEqual(e))}const Qh=new U(T.comparator),Wh=new P(T.comparator);function S(...t){let e=Wh;for(const n of t)e=e.add(n);return e}const Yh=new P(N);function $o(){return Yh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Pt.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fn(b.min(),s,$o(),fe(),S())}}class Pt{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Pt(G.EMPTY_BYTE_STRING,n,S(),S(),S())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}class Ko{constructor(e,n){this.targetId=e,this.At=n}}class Go{constructor(e,n,s=G.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class er{constructor(){this.Rt=0,this.bt=nr(),this.Pt=G.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=S(),n=S(),s=S();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Pt(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=nr()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Xh{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=fe(),this.qt=tr(),this.Kt=new P(N)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:I()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(ms(r))if(s===0){const o=new T(r.path);this.jt(n,o,$.newNoDocument(o,b.min()))}else x(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&ms(a.target)){const u=new T(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,$.newNoDocument(u,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let s=S();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Xt(u);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new Fn(e,n,this.Kt,this.Ut,s);return this.Ut=fe(),this.qt=tr(),this.Kt=new P(N),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new er,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new P(N),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||w("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new er),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function tr(){return new U(T.comparator)}function nr(){return new U(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ec{constructor(e,n){this.databaseId=e,this.gt=n}}function mn(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zo(t,e){return t.gt?e.toBase64():e.toUint8Array()}function tc(t,e){return mn(t,e.toTimestamp())}function he(t){return x(!!t),b.fromTimestamp(function(e){const n=ye(e);return new F(n.seconds,n.nanos)}(t))}function Zs(t,e){return function(n){return new R(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ho(t){const e=R.fromString(t);return x(Yo(e)),e}function ys(t,e){return Zs(t.databaseId,e.path)}function Jn(t,e){const n=Ho(e);if(n.get(1)!==t.databaseId.projectId)throw new g(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new g(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(Qo(n))}function vs(t,e){return Zs(t.databaseId,e)}function nc(t){const e=Ho(t);return e.length===4?R.emptyPath():Qo(e)}function ws(t){return new R(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qo(t){return x(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sr(t,e,n){return{name:ys(t,e),fields:n.value.mapValue.fields}}function sc(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.gt?(x(h===void 0||typeof h=="string"),G.fromBase64String(h||"")):(x(h===void 0||h instanceof Uint8Array),G.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?d.UNKNOWN:Uo(u.code);return new g(h,u.message||"")}(o);n=new Go(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Jn(t,s.document.name),r=he(s.document.updateTime),o=new ne({mapValue:{fields:s.document.fields}}),a=$.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new en(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Jn(t,s.document),r=s.readTime?he(s.readTime):b.min(),o=$.newNoDocument(i,r),a=s.removedTargetIds||[];n=new en([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Jn(t,s.document),r=s.removedTargetIds||[];n=new en([],r,i,null)}else{if(!("filter"in e))return I();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Gh(i),o=s.targetId;n=new Ko(o,r)}}return n}function ic(t,e){let n;if(e instanceof Ft)n={update:sr(t,e.key,e.value)};else if(e instanceof Js)n={delete:ys(t,e.key)};else if(e instanceof xe)n={update:sr(t,e.key,e.data),updateMask:pc(e.fieldMask)};else{if(!(e instanceof Kh))return I();n={verify:ys(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof At)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof St)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pn)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw I()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tc(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(t,e.precondition)),n}function rc(t,e){return t&&t.length>0?(x(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?he(s.updateTime):he(i);return r.isEqual(b.min())&&(r=he(i)),new jh(r,s.transformResults||[])}(n,e))):[]}function oc(t,e){return{documents:[vs(t,e.path)]}}function ac(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=vs(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vs(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const h=u.map(c=>function(l){if(l.op==="=="){if(Gi(l.value))return{unaryFilter:{field:Le(l.field),op:"IS_NAN"}};if(Ki(l.value))return{unaryFilter:{field:Le(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Gi(l.value))return{unaryFilter:{field:Le(l.field),op:"IS_NOT_NAN"}};if(Ki(l.value))return{unaryFilter:{field:Le(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Le(l.field),op:lc(l.op),value:l.value}}}(c));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(c){return{field:Le(c.field),direction:cc(c.dir)}}(h))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.gt||Ln(h)?h:{value:h}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function uc(t){let e=nc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){x(s===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let r=[];n.where&&(r=Wo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(l){return new Fe(Oe(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(c)));let a=null;n.limit&&(a=function(c){let l;return l=typeof c=="object"?c.value:c,Ln(l)?null:l}(n.limit));let u=null;n.startAt&&(u=function(c){const l=!!c.before,p=c.values||[];return new dn(p,l)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const l=!c.before,p=c.values||[];return new dn(p,l)}(n.endAt)),Lh(e,i,o,r,a,"F",u,h)}function hc(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wo(t){return t?t.unaryFilter!==void 0?[fc(t)]:t.fieldFilter!==void 0?[dc(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Wo(e)).reduce((e,n)=>e.concat(n)):I():[]}function cc(t){return Jh[t]}function lc(t){return Zh[t]}function Le(t){return{fieldPath:t.canonicalString()}}function Oe(t){return Q.fromServerFormat(t.fieldPath)}function dc(t){return J.create(Oe(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value)}function fc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Oe(t.unaryFilter.field);return J.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Oe(t.unaryFilter.field);return J.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oe(t.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Oe(t.unaryFilter.field);return J.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function pc(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yo(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Bh(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ct(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ct(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Bo();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Fo(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),S())}isEqual(e){return this.batchId===e.batchId&&je(this.mutations,e.mutations,(n,s)=>Xi(n,s))&&je(this.baseMutations,e.baseMutations,(n,s)=>Xi(n,s))}}class ei{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){x(e.mutations.length===s.length);let i=Qh;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ei(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,s,i,r=b.min(),o=b.min(),a=G.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ce(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ce(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.re=e}}function vc(t){const e=uc({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fn(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Ye=new Tc}addToCollectionParentIndex(e,n){return this.Ye.add(n),f.resolve()}getCollectionParents(e,n){return f.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return f.resolve()}deleteFieldIndex(e,n){return f.resolve()}getDocumentsMatchingTarget(e,n){return f.resolve(null)}getIndexType(e,n){return f.resolve(0)}getFieldIndexes(e,n){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,n){return f.resolve(ge.min())}getMinOffsetFromCollectionGroup(e,n){return f.resolve(ge.min())}updateCollectionGroup(e,n,s){return f.resolve()}updateIndexEntries(e,n){return f.resolve()}}class Tc{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new P(R.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new P(R.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ke(0)}static vn(){return new Ke(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.changes=new Je(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&ct(s.mutation,i,re.empty(),F.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,S()).next(()=>s))}getLocalViewOfDocuments(e,n,s=S()){const i=be();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ot();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=be();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,S()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=fe();const o=lt(),a=lt();return n.forEach((u,h)=>{const c=s.get(h.key);i.has(h.key)&&(c===void 0||c.mutation instanceof xe)?r=r.insert(h.key,h):c!==void 0&&(o.set(h.key,c.mutation.getFieldMask()),ct(c.mutation,h,c.mutation.getFieldMask(),F.now()))}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((h,c)=>o.set(h,c)),n.forEach((h,c)=>{var l;return a.set(h,new Ic(c,(l=o.get(h))!==null&&l!==void 0?l:null))}),a))}recalculateAndSaveOverlays(e,n){const s=lt();let i=new U((o,a)=>o-a),r=S();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let c=s.get(u)||re.empty();c=a.applyToLocalView(h,c),s.set(u,c);const l=(i.get(a.batchId)||S()).add(u);i=i.insert(a.batchId,l)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,c=u.value,l=Bo();c.forEach(p=>{if(!r.has(p)){const m=Fo(n.get(p),s.get(p));m!==null&&l.set(p,m),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,l))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Do(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):f.resolve(be());let a=-1,u=r;return o.next(h=>f.forEach(h,(c,l)=>(a<l.largestBatchId&&(a=l.largestBatchId),r.get(c)?f.resolve():this.getBaseDocument(e,c,l).next(p=>{u=u.insert(c,p)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,u,h,S())).next(c=>({batchId:a,changes:jo(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new T(n)).next(s=>{let i=ot();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ot();return this.indexManager.getCollectionParents(e,i).next(o=>f.forEach(o,a=>{const u=function(h,c){return new Xe(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(h=>{h.forEach((c,l)=>{r=r.insert(c,l)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,u)=>{const h=u.getKey();i.get(h)===null&&(i=i.insert(h,$.newInvalidDocument(h)))});let o=ot();return i.forEach((a,u)=>{const h=r.get(a);h!==void 0&&ct(h.mutation,u,re.empty(),F.now()),Xs(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):f.resolve($.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return f.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:he(s.createTime)}),f.resolve()}getNamedQuery(e,n){return f.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:vc(s.bundledQuery),readTime:he(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.overlays=new U(T.comparator),this.es=new Map}getOverlay(e,n){return f.resolve(this.overlays.get(n))}getOverlays(e,n){const s=be();return f.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),f.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),f.resolve()}getOverlaysForCollection(e,n,s){const i=be(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return f.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new U((h,c)=>h-c);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let c=r.get(h.largestBatchId);c===null&&(c=be(),r=r.insert(h.largestBatchId,c)),c.set(h.getKey(),h)}}const a=be(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,c)=>a.set(h,c)),!(a.size()>=i)););return f.resolve(a)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new gc(n,s));let r=this.es.get(n);r===void 0&&(r=S(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.ns=new P(q.ss),this.rs=new P(q.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new q(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new q(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new T(new R([])),s=new q(n,e),i=new q(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new T(new R([])),s=new q(n,e),i=new q(n,e+1);let r=S();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new q(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class q{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return T.comparator(e.key,n.key)||N(e._s,n._s)}static os(e,n){return N(e._s,n._s)||T.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new P(q.ss)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mc(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new q(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,n){return f.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new q(n,0),i=new q(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new P(N);return n.forEach(i=>{const r=new q(i,0),o=new q(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),f.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new q(new T(r),0);let a=new P(N);return this.gs.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(u._s)),!0)},o),f.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){x(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return f.forEach(n.mutations,i=>{const r=new q(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new q(n,0),i=this.gs.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.Es=e,this.docs=new U(T.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():$.newInvalidDocument(n))}getEntries(e,n){let s=fe();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():$.newInvalidDocument(i))}),f.resolve(s)}getAllFromCollection(e,n,s){let i=fe();const r=new T(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||gh(mh(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,n,s,i){I()}As(e,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Dc(this)}getSize(e){return f.resolve(this.size)}}class Dc extends Ec{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),f.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.persistence=e,this.Rs=new Je(n=>zs(n),Hs),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ti,this.targetCount=0,this.vs=Ke.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),f.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ke(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,f.resolve()}updateTargetData(e,n){return this.Dn(n),f.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return f.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),f.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),f.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return f.resolve(s)}containsKey(e,n){return f.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ks(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Nc(this),this.indexManager=new wc,this.remoteDocumentCache=function(s){return new kc(s)}(s=>this.referenceDelegate.xs(s)),this.It=new yc(n),this.Ns=new bc(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Sc,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Cc(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){w("MemoryPersistence","Starting transaction:",e);const i=new Rc(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Ms(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return f.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class Rc extends vh{constructor(e){super(),this.currentSequenceNumber=e}}class ni{constructor(e){this.persistence=e,this.Fs=new ti,this.$s=null}static Bs(e){return new ni(e)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),f.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),f.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,s=>{const i=T.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,b.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return f.or([()=>f.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=S(),i=S();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new si(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Mi(e,n,i,s)).next(r=>r||this.Oi(e,n))}ki(e,n){if(Wi(n))return f.resolve(null);let s=de(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fn(n,null,"F"),s=de(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=S(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.Fi(n,a);return this.$i(n,h,o,u.readTime)?this.ki(e,fn(n,null,"F")):this.Bi(e,h,n,u)}))})))}Mi(e,n,s,i){return Wi(n)||i.isEqual(b.min())?this.Oi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Oi(e,n):(Pi()<=dt.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.Bi(e,o,n,ph(i,-1)))})}Fi(e,n){let s=new P(xo(e));return n.forEach((i,r)=>{Xs(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return Pi()<=dt.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Ni.getDocumentsMatchingQuery(e,n,ge.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new U(N),this.qi=new Je(r=>zs(r),Hs),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ac(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function Mc(t,e,n,s){return new Lc(t,e,n,s)}async function Xo(t,e){const n=A(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=S();for(const h of i){o.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}for(const h of r){a.push(h.batchId);for(const c of h.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(s,u).next(h=>({ji:h,removedBatchIds:o,addedBatchIds:a}))})})}function Oc(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,h){const c=u.batch,l=c.keys();let p=f.resolve();return l.forEach(m=>{p=p.next(()=>h.getEntry(a,m)).next(v=>{const D=u.docVersions.get(m);x(D!==null),v.version.compareTo(D)<0&&(c.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=S();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Jo(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function Vc(t,e){const n=A(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,l)=>{const p=i.get(l);if(!p)return;a.push(n.Cs.removeMatchingKeys(r,c.removedDocuments,l).next(()=>n.Cs.addMatchingKeys(r,c.addedDocuments,l)));let m=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(l)?m=m.withResumeToken(G.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,s)),i=i.insert(l,m),function(v,D,C){return v.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(p,m,c)&&a.push(n.Cs.updateTargetData(r,m))});let u=fe(),h=S();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(Fc(r,o,e.documentUpdates).next(c=>{u=c.Wi,h=c.zi})),!s.isEqual(b.min())){const c=n.Cs.getLastRemoteSnapshotVersion(r).next(l=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return f.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.Ui=i,r))}function Fc(t,e,n){let s=S(),i=S();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=fe();return n.forEach((a,u)=>{const h=r.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(b.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function Pc(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Uc(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,f.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Ce(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Ts(t,e,n){const s=A(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vt(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function ir(t,e,n){const s=A(t);let i=b.min(),r=S();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,h){const c=A(a),l=c.qi.get(h);return l!==void 0?f.resolve(c.Ui.get(l)):c.Cs.getTargetData(u,h)}(s,o,de(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:b.min(),n?r:S())).next(a=>(qc(s,Mh(e),a),{documents:a,Hi:r})))}function qc(t,e,n){let s=b.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class rr{constructor(){this.activeTargetIds=$o()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jc{constructor(){this.Lr=new rr,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new rr,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,s,i,r){const o=this.ao(e,n);w("RestConnection","Sending: ",o,s);const a={};return this.ho(a,i,r),this.lo(e,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw Ui("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+We,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=$c[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){return new Promise((r,o)=>{const a=new ih;a.listenOnce(th.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xn.NO_ERROR:const h=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(h)),r(h);break;case Xn.TIMEOUT:w("Connection",'RPC "'+e+'" timed out'),o(new g(d.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const c=a.getStatus();if(w("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new g(p,l.message))}else o(new g(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new g(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{w("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}_o(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Zu(),o=eh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new sh({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");w("Connection","Creating WebChannel: "+u,a);const h=r.createWebChannel(u,a);let c=!1,l=!1;const p=new Kc({Hr:v=>{l?w("Connection","Not sending because WebChannel is closed:",v):(c||(w("Connection","Opening WebChannel transport."),h.open(),c=!0),w("Connection","WebChannel sending:",v),h.send(v))},Jr:()=>h.close()}),m=(v,D,C)=>{v.listen(D,L=>{try{C(L)}catch(H){setTimeout(()=>{throw H},0)}})};return m(h,Qt.EventType.OPEN,()=>{l||w("Connection","WebChannel transport opened.")}),m(h,Qt.EventType.CLOSE,()=>{l||(l=!0,w("Connection","WebChannel transport closed"),p.io())}),m(h,Qt.EventType.ERROR,v=>{l||(l=!0,Ui("Connection","WebChannel transport errored:",v),p.io(new g(d.UNAVAILABLE,"The operation could not be completed")))}),m(h,Qt.EventType.MESSAGE,v=>{var D;if(!l){const C=v.data[0];x(!!C);const L=C,H=L.error||((D=L[0])===null||D===void 0?void 0:D.error);if(H){w("Connection","WebChannel received error:",H);const tt=H.status;let nt=function(Va){const Ai=M[Va];if(Ai!==void 0)return Uo(Ai)}(tt),Ii=H.message;nt===void 0&&(nt=d.INTERNAL,Ii="Unknown error status: "+tt+" with message "+H.message),l=!0,p.io(new g(nt,Ii)),h.close()}else w("Connection","WebChannel received:",C),p.ro(C)}}),m(o,nh.STAT_EVENT,v=>{v.stat===Vi.PROXY?w("Connection","Detected buffering proxy"):v.stat===Vi.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Zn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){return new ec(t,!0)}class Zo{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.wo=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,s,i,r,o,a,u){this.Hs=e,this.Po=s,this.vo=i,this.Vo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Zo(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(le(n.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new g(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return w("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zc extends ea{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.It=r}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=sc(this.It,e),s=function(i){if(!("targetChange"in i))return b.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?b.min():r.readTime?he(r.readTime):b.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=ws(this.It),n.addTarget=function(i,r){let o;const a=r.target;return o=ms(a)?{documents:oc(i,a)}:{query:ac(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=zo(i,r.resumeToken):r.snapshotVersion.compareTo(b.min())>0&&(o.readTime=mn(i,r.snapshotVersion.toTimestamp())),o}(this.It,e);const s=hc(this.It,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=ws(this.It),n.removeTarget=e,this.Bo(n)}}class Hc extends ea{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(x(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=rc(e.writeResults,e.commitTime),s=he(e.commitTime);return this.listener.Zo(s,n)}return x(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ws(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ic(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=s,this.It=i,this.nu=!1}su(){if(this.nu)throw new g(d.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.Vo.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new g(d.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.Vo.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new g(d.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class Wc{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(le(n),this.ou=!1):w("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{s.enqueueAndForget(async()=>{Re(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=A(a);u._u.add(4),await Ut(u),u.gu.set("Unknown"),u._u.delete(4),await Un(u)}(this))})}),this.gu=new Wc(s,i)}}async function Un(t){if(Re(t))for(const e of t.wu)await e(!0)}async function Ut(t){for(const e of t.wu)await e(!1)}function ta(t,e){const n=A(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),oi(n)?ri(n):Ze(n).ko()&&ii(n,e))}function na(t,e){const n=A(t),s=Ze(n);n.du.delete(e),s.ko()&&sa(n,e),n.du.size===0&&(s.ko()?s.Fo():Re(n)&&n.gu.set("Unknown"))}function ii(t,e){t.yu.Ot(e.targetId),Ze(t).zo(e)}function sa(t,e){t.yu.Ot(e),Ze(t).Ho(e)}function ri(t){t.yu=new Xh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Ze(t).start(),t.gu.uu()}function oi(t){return Re(t)&&!Ze(t).No()&&t.du.size>0}function Re(t){return A(t)._u.size===0}function ia(t){t.yu=void 0}async function Xc(t){t.du.forEach((e,n)=>{ii(t,e)})}async function Jc(t,e){ia(t),oi(t)?(t.gu.hu(e),ri(t)):t.gu.set("Unknown")}async function Zc(t,e,n){if(t.gu.set("Online"),e instanceof Go&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gn(t,s)}else if(e instanceof en?t.yu.Gt(e):e instanceof Ko?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(b.min()))try{const s=await Jo(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.te(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.du.get(u);h&&i.du.set(u,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(G.EMPTY_BYTE_STRING,u.snapshotVersion)),sa(i,a);const h=new Ce(u.target,a,1,u.sequenceNumber);ii(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await gn(t,s)}}async function gn(t,e,n){if(!Vt(e))throw e;t._u.add(1),await Ut(t),t.gu.set("Offline"),n||(n=()=>Jo(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Un(t)})}function ra(t,e){return e().catch(n=>gn(t,n,e))}async function qn(t){const e=A(t),n=ve(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;el(e);)try{const i=await Pc(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,tl(e,i)}catch(i){await gn(e,i)}oa(e)&&aa(e)}function el(t){return Re(t)&&t.fu.length<10}function tl(t,e){t.fu.push(e);const n=ve(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function oa(t){return Re(t)&&!ve(t).No()&&t.fu.length>0}function aa(t){ve(t).start()}async function nl(t){ve(t).eu()}async function sl(t){const e=ve(t);for(const n of t.fu)e.Xo(n.mutations)}async function il(t,e,n){const s=t.fu.shift(),i=ei.from(s,e,n);await ra(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qn(t)}async function rl(t,e){e&&ve(t).Yo&&await async function(n,s){if(i=s.code,zh(i)&&i!==d.ABORTED){const r=n.fu.shift();ve(n).Oo(),await ra(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await qn(n)}var i}(t,e),oa(t)&&aa(t)}async function ar(t,e){const n=A(t);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Re(n);n._u.add(3),await Ut(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Un(n)}async function ol(t,e){const n=A(t);e?(n._u.delete(2),await Un(n)):e||(n._u.add(2),await Ut(n),n.gu.set("Unknown"))}function Ze(t){return t.pu||(t.pu=function(e,n,s){const i=A(e);return i.su(),new zc(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:Xc.bind(null,t),Zr:Jc.bind(null,t),Wo:Zc.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),oi(t)?ri(t):t.gu.set("Unknown")):(await t.pu.stop(),ia(t))})),t.pu}function ve(t){return t.Iu||(t.Iu=function(e,n,s){const i=A(e);return i.su(),new Hc(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:nl.bind(null,t),Zr:rl.bind(null,t),tu:sl.bind(null,t),Zo:il.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await qn(t)):(await t.Iu.stop(),t.fu.length>0&&(w("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ai(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new g(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ui(t,e){if(le("AsyncQueue",`${e}: ${t}`),Vt(t))return new g(d.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e?(n,s)=>e(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=ot(),this.sortedSet=new U(this.comparator)}static emptySet(e){return new Pe(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Pe;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.Tu=new U(T.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):I():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ge{constructor(e,n,s,i,r,o,a,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Ge(e,n,Pe.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.Au=void 0,this.listeners=[]}}class ul{constructor(){this.queries=new Je(e=>No(e),Mn),this.onlineState="Unknown",this.Ru=new Set}}async function ua(t,e){const n=A(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new al),i)try{r.Au=await n.onListen(s)}catch(o){const a=ui(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&hi(n)}async function ha(t,e){const n=A(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function hl(t,e){const n=A(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&hi(n)}function cl(t,e,n){const s=A(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function hi(t){t.Ru.forEach(e=>{e.next()})}class ca{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ge(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ge.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.key=e}}class da{constructor(e){this.key=e}}class ll{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=S(),this.mutatedKeys=S(),this.Ku=xo(e),this.Gu=new Pe(this.Ku)}get Qu(){return this.Lu}ju(e,n){const s=n?n.Wu:new ur,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,l)=>{const p=i.get(c),m=Xs(this.query,l)?l:null,v=!!p&&this.mutatedKeys.has(p.key),D=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;p&&m?p.data.isEqual(m.data)?v!==D&&(s.track({type:3,doc:m}),C=!0):this.zu(p,m)||(s.track({type:2,doc:m}),C=!0,(u&&this.Ku(m,u)>0||h&&this.Ku(m,h)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),C=!0):p&&!m&&(s.track({type:1,doc:p}),C=!0,(u||h)&&(a=!0)),C&&(m?(o=o.add(m),r=D?r.add(c):r.delete(c)):(o=o.delete(c),r=r.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),r=r.delete(c.key),s.track({type:1,doc:c})}return{Gu:o,Wu:s,$i:a,mutatedKeys:r}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.Wu.Eu();r.sort((h,c)=>function(l,p){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(p)}(h.type,c.type)||this.Ku(h.doc,c.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new Ge(this.query,e.Gu,i,r,e.mutatedKeys,a===0,u,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new ur,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=S(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return e.forEach(s=>{this.qu.has(s)||n.push(new da(s))}),this.qu.forEach(s=>{e.has(s)||n.push(new la(s))}),n}Zu(e){this.Lu=e.Hi,this.qu=S();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Ge.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class dl{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class fl{constructor(e){this.key=e,this.ec=!1}}class pl{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Je(a=>No(a),Mn),this.ic=new Map,this.rc=new Set,this.oc=new U(T.comparator),this.uc=new Map,this.cc=new ti,this.ac={},this.hc=new Map,this.lc=Ke.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function ml(t,e){const n=Sl(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await Uc(n.localStore,de(e));n.isPrimaryClient&&ta(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await gl(n,e,s,a==="current")}return i}async function gl(t,e,n,s){t.dc=(c,l,p)=>async function(m,v,D,C){let L=v.view.ju(D);L.$i&&(L=await ir(m.localStore,v.query,!1).then(({documents:nt})=>v.view.ju(nt,L)));const H=C&&C.targetChanges.get(v.targetId),tt=v.view.applyChanges(L,m.isPrimaryClient,H);return cr(m,v.targetId,tt.Yu),tt.snapshot}(t,c,l,p);const i=await ir(t.localStore,e,!0),r=new ll(e,i.Hi),o=r.ju(i.documents),a=Pt.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),u=r.applyChanges(o,t.isPrimaryClient,a);cr(t,n,u.Yu);const h=new dl(e,n,r);return t.sc.set(e,h),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function yl(t,e){const n=A(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Mn(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ts(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),na(n.remoteStore,s.targetId),Es(n,s.targetId)}).catch(Ot)):(Es(n,s.targetId),await Ts(n.localStore,s.targetId,!0))}async function vl(t,e,n){const s=Cl(t);try{const i=await function(r,o){const a=A(r),u=F.now(),h=o.reduce((p,m)=>p.add(m.key),S());let c,l;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=fe(),v=S();return a.Gi.getEntries(p,h).next(D=>{m=D,m.forEach((C,L)=>{L.isValidDocument()||(v=v.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,m)).next(D=>{c=D;const C=[];for(const L of o){const H=$h(L,c.get(L.key).overlayedDocument);H!=null&&C.push(new xe(L.key,H,Co(H.value.mapValue),se.exists(!0)))}return a.mutationQueue.addMutationBatch(p,u,C,o)}).next(D=>{l=D;const C=D.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(p,D.batchId,C)})}).then(()=>({batchId:l.batchId,changes:jo(c)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.ac[r.currentUser.toKey()];u||(u=new U(N)),u=u.insert(o,a),r.ac[r.currentUser.toKey()]=u}(s,i.batchId,n),await qt(s,i.changes),await qn(s.remoteStore)}catch(i){const r=ui(i,"Failed to persist write");n.reject(r)}}async function fa(t,e){const n=A(t);try{const s=await Vc(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(x(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?x(o.ec):i.removedDocuments.size>0&&(x(o.ec),o.ec=!1))}),await qt(n,s,e)}catch(s){await Ot(s)}}function hr(t,e,n){const s=A(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=A(r);a.onlineState=o;let u=!1;a.queries.forEach((h,c)=>{for(const l of c.listeners)l.bu(o)&&(u=!0)}),u&&hi(a)}(s.eventManager,e),i.length&&s.nc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function wl(t,e,n){const s=A(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new U(T.comparator);o=o.insert(r,$.newNoDocument(r,b.min()));const a=S().add(r),u=new Fn(b.min(),new Map,new P(N),o,a);await fa(s,u),s.oc=s.oc.remove(r),s.uc.delete(e),ci(s)}else await Ts(s.localStore,e,!1).then(()=>Es(s,e,n)).catch(Ot)}async function Tl(t,e){const n=A(t),s=e.batch.batchId;try{const i=await Oc(n.localStore,e);ma(n,s,null),pa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await qt(n,i)}catch(i){await Ot(i)}}async function El(t,e,n){const s=A(t);try{const i=await function(r,o){const a=A(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(x(c!==null),h=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>a.localDocuments.getDocuments(u,h))})}(s.localStore,e);ma(s,e,n),pa(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await qt(s,i)}catch(i){await Ot(i)}}function pa(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function ma(t,e,n){const s=A(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Es(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(s=>{t.cc.containsKey(s)||ga(t,s)})}function ga(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(na(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ci(t))}function cr(t,e,n){for(const s of n)s instanceof la?(t.cc.addReference(s.key,e),Il(t,s)):s instanceof da?(w("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||ga(t,s.key)):I()}function Il(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(w("SyncEngine","New document in limbo: "+n),t.rc.add(s),ci(t))}function ci(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new T(R.fromString(e)),s=t.lc.next();t.uc.set(s,new fl(n)),t.oc=t.oc.insert(n,s),ta(t.remoteStore,new Ce(de(Qs(n.path)),s,2,Ks.at))}}async function qt(t,e,n){const s=A(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,u)=>{o.push(s.dc(u,e,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h.fromCache?"not-current":"current"),i.push(h);const c=si.Ci(u.targetId,h);r.push(c)}}))}),await Promise.all(o),s.nc.Wo(i),await async function(a,u){const h=A(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(u,l=>f.forEach(l.Si,p=>h.persistence.referenceDelegate.addReference(c,l.targetId,p)).next(()=>f.forEach(l.Di,p=>h.persistence.referenceDelegate.removeReference(c,l.targetId,p)))))}catch(c){if(!Vt(c))throw c;w("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const l=c.targetId;if(!c.fromCache){const p=h.Ui.get(l),m=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(m);h.Ui=h.Ui.insert(l,v)}}}(s.localStore,r))}async function Al(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){w("SyncEngine","User change. New user:",e.toKey());const s=await Xo(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new g(d.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qt(n,s.ji)}}function bl(t,e){const n=A(t),s=n.uc.get(e);if(s&&s.ec)return S().add(s.key);{let i=S();const r=n.ic.get(e);if(!r)return i;for(const o of r){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Sl(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fa.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wl.bind(null,e),e.nc.Wo=hl.bind(null,e.eventManager),e.nc._c=cl.bind(null,e.eventManager),e}function Cl(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Tl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=El.bind(null,e),e}class kl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Pn(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return Mc(this.persistence,new _c,e.initialUser,this.It)}gc(e){return new xc(ni.Bs,this.It)}mc(e){return new jc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Dl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Al.bind(null,this.syncEngine),await ol(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ul}createDatastore(e){const n=Pn(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Gc(i));var i;return function(r,o,a,u){return new Qc(r,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>hr(this.syncEngine,a,0),o=or.C()?new or:new Bc,new Yc(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,u,h){const c=new pl(s,i,r,o,a,u);return h&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);w("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Ut(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):le("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=Io.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new g(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ui(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xl(t,e){t.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Xo(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Rl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _l(t);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ar(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ar(e.remoteStore,r)),t.onlineComponents=e}async function _l(t){return t.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await xl(t,new kl)),t.offlineComponents}async function va(t){return t.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await Rl(t,new Dl)),t.onlineComponents}function Ll(t){return va(t).then(e=>e.syncEngine)}async function wa(t){const e=await va(t),n=e.eventManager;return n.onListen=ml.bind(null,e.syncEngine),n.onUnlisten=yl.bind(null,e.syncEngine),n}function Ml(t,e,n={}){const s=new ue;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new ya({next:l=>{r.enqueueAndForget(()=>ha(i,c));const p=l.docs.has(o);!p&&l.fromCache?u.reject(new g(d.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&l.fromCache&&a&&a.source==="server"?u.reject(new g(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new ca(Qs(o.path),h,{includeMetadataChanges:!0,Nu:!0});return ua(i,c)}(await wa(t),t.asyncQueue,e,n,s)),s.promise}function Ol(t,e,n={}){const s=new ue;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const h=new ya({next:l=>{r.enqueueAndForget(()=>ha(i,c)),l.fromCache&&a.source==="server"?u.reject(new g(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(l)},error:l=>u.reject(l)}),c=new ca(o,h,{includeMetadataChanges:!0,Nu:!0});return ua(i,c)}(await wa(t),t.asyncQueue,e,n,s)),s.promise}const lr=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t,e,n){if(!n)throw new g(d.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vl(t,e,n,s){if(e===!0&&s===!0)throw new g(d.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dr(t){if(!T.isDocumentKey(t))throw new g(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fr(t){if(T.isDocumentKey(t))throw new g(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jn(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":I()}function we(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new g(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jn(t);throw new g(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Fl(t,e){if(e<=0)throw new g(d.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new g(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new g(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Vl("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new g(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new g(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pr(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oh;switch(n.type){case"gapi":const s=n.client;return new hh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new g(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lr.get(e);n&&(w("ComponentProvider","Removing Datastore"),lr.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ee(this.firestore,e,this._key)}}class _e{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _e(this.firestore,e,this._query)}}class me extends _e{constructor(e,n,s){super(e,n,Qs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ee(this.firestore,null,new T(e))}withConverter(e){return new me(this.firestore,e,this._path)}}function Ea(t,e,...n){if(t=Ue(t),Ta("collection","path",e),t instanceof li){const s=R.fromString(e,...n);return fr(s),new me(t,null,s)}{if(!(t instanceof ee||t instanceof me))throw new g(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(R.fromString(e,...n));return fr(s),new me(t.firestore,null,s)}}function Bn(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Io.R()),Ta("doc","path",e),t instanceof li){const s=R.fromString(e,...n);return dr(s),new ee(t,null,new T(s))}{if(!(t instanceof ee||t instanceof me))throw new g(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(R.fromString(e,...n));return dr(s),new ee(t.firestore,t instanceof me?t.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Zo(this,"async_queue_retry"),this.jc=()=>{const n=Zn();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Zn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Zn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new ue;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Vt(e))throw e;w("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(s=>{this.qc=s,this.Kc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw le("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(e,n,s){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=ai.createAndSchedule(this,e,n,s,r=>this.Jc(r));return this.Uc.push(i),i}Wc(){this.qc&&I()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class et extends li{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Pl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ia(this),this._firestoreClient.terminate()}}function Ul(t,e){const n=typeof t=="object"?t:ja(),s=typeof t=="string"?t:e||"(default)";return Ba(n,"firestore").getImmediate({identifier:s})}function di(t){return t._firestoreClient||Ia(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ia(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Th(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Nl(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new g(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ze(G.fromBase64String(e))}catch(n){throw new g(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ze(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new g(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new g(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=/^__.*__$/;class jl{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new xe(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ft(e,this.data,n,this.fieldTransforms)}}function Aa(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class gi{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new gi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:s,ra:!1});return i.oa(e),i}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:s,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return yn(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(Aa(this.na)&&ql.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class Bl{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||Pn(e)}fa(e,n,s,i=!1){return new gi({na:e,methodName:n,la:s,path:Q.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function yi(t){const e=t._freezeSettings(),n=Pn(t._databaseId);return new Bl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ba(t,e,n,s,i,r={}){const o=t.fa(r.merge||r.mergeFields?2:0,e,n,i);ka("Data must be an object, but it was:",o,s);const a=Sa(s,o);let u,h;if(r.merge)u=new re(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const c=[];for(const l of r.mergeFields){const p=Kl(e,l,n);if(!o.contains(p))throw new g(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);zl(c,p)||c.push(p)}u=new re(c),h=o.fieldTransforms.filter(l=>u.covers(l.field))}else u=null,h=o.fieldTransforms;return new jl(new ne(a),u,h)}class vi extends pi{_toFieldTransform(e){return new Uh(e.path,new At)}isEqual(e){return e instanceof vi}}function $l(t,e,n,s=!1){return wi(n,t.fa(s?4:3,e))}function wi(t,e){if(Ca(t=Ue(t)))return ka("Unsupported field value:",e,t),Sa(t,e);if(t instanceof pi)return function(n,s){if(!Aa(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=wi(o,s.ca(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ue(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vh(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=F.fromDate(n);return{timestampValue:mn(s.It,i)}}if(n instanceof F){const i=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mn(s.It,i)}}if(n instanceof mi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ze)return{bytesValue:zo(s.It,n._byteString)};if(n instanceof ee){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zs(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${jn(n)}`)}(t,e)}function Sa(t,e){const n={};return Ao(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ye(t,(s,i)=>{const r=wi(i,e.ia(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ca(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof F||t instanceof mi||t instanceof ze||t instanceof ee||t instanceof pi)}function ka(t,e,n){if(!Ca(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=jn(n);throw s==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+s)}}function Kl(t,e,n){if((e=Ue(e))instanceof fi)return e._internalPath;if(typeof e=="string")return Da(t,e);throw yn("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gl=new RegExp("[~\\*/\\[\\]]");function Da(t,e,n){if(e.search(Gl)>=0)throw yn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fi(...e.split("."))._internalPath}catch{throw yn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yn(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new g(d.INVALID_ARGUMENT,a+t+u)}function zl(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($n("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hl extends Na{data(){return super.data()}}function $n(t,e){return typeof e=="string"?Da(t,e):e instanceof fi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xa extends Na{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field($n("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class tn extends xa{data(e={}){return super.data(e)}}class Ql{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new at(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new tn(this._firestore,this._userDataWriter,s.key,s,new at(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new g(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new tn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new at(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new tn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new at(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Wl(o.type),doc:a,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Wl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new g(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ti{}function Xl(t,...e){for(const n of e)t=n._apply(t);return t}class Jl extends Ti{constructor(e,n,s){super(),this.wa=e,this.ma=n,this.ga=s,this.type="where"}_apply(e){const n=yi(e.firestore),s=function(i,r,o,a,u,h,c){let l;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new g(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){gr(c,h);const m=[];for(const v of c)m.push(mr(a,i,v));l={arrayValue:{values:m}}}else l=mr(a,i,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||gr(c,h),l=$l(o,r,c,h==="in"||h==="not-in");const p=J.create(u,h,l);return function(m,v){if(v.dt()){const C=Ys(m);if(C!==null&&!C.isEqual(v.field))throw new g(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${v.field.toString()}'`);const L=Ws(m);L!==null&&Ra(m,v.field,L)}const D=function(C,L){for(const H of C.filters)if(L.indexOf(H.op)>=0)return H.op;return null}(m,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(D!==null)throw D===v.op?new g(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new g(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${D.toString()}' filters.`)}(i,p),p}(e._query,"where",n,e.firestore._databaseId,this.wa,this.ma,this.ga);return new _e(e.firestore,e.converter,function(i,r){const o=i.filters.concat([r]);return new Xe(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,s))}}function Zl(t,e,n){const s=e,i=$n("where",t);return new Jl(i,s,n)}class ed extends Ti{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new g(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new g(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Fe(i,r);return function(a,u){if(Ws(a)===null){const h=Ys(a);h!==null&&Ra(a,h,u.field)}}(s,o),o}(e._query,this.wa,this.ya);return new _e(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Xe(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function td(t,e="asc"){const n=e,s=$n("orderBy",t);return new ed(s,n)}class nd extends Ti{constructor(e,n,s){super(),this.type=e,this.pa=n,this.Ia=s}_apply(e){return new _e(e.firestore,e.converter,fn(e._query,this.pa,this.Ia))}}function sd(t){return Fl("limit",t),new nd("limit",t,"F")}function mr(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new g(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Do(e)&&n.indexOf("/")!==-1)throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(R.fromString(n));if(!T.isDocumentKey(s))throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $i(t,new T(s))}if(n instanceof ee)return $i(t,n._key);throw new g(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jn(n)}.`)}function gr(t,e){if(!Array.isArray(t)||t.length===0)throw new g(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new g(d.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ra(t,e,n){if(!n.isEqual(e))throw new g(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{convertValue(e,n="none"){switch(De(e)){case 0:return null;case 1:return e.booleanValue;case 2:return O(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Be(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw I()}}convertObject(e,n){const s={};return Ye(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new mi(O(e.latitude),O(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=So(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(wt(e));default:return null}}convertTimestamp(e){const n=ye(e);return new F(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=R.fromString(e);x(Yo(s));const i=new Tt(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(n)||le(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){t=we(t,ee);const e=we(t.firestore,et);return Ml(di(e),t._key).then(n=>cd(e,t,n))}class La extends id{constructor(e){super(),this.firestore=e}convertBytes(e){return new ze(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ee(this.firestore,null,n)}}function od(t){t=we(t,_e);const e=we(t.firestore,et),n=di(e),s=new La(e);return Yl(t._query),Ol(n,t._query).then(i=>new Ql(e,s,t,i))}function ad(t,e,n){t=we(t,ee);const s=we(t.firestore,et),i=_a(t.converter,e,n);return Ei(s,[ba(yi(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,se.none())])}function ud(t){return Ei(we(t.firestore,et),[new Js(t._key,se.none())])}function hd(t,e){const n=we(t.firestore,et),s=Bn(t),i=_a(t.converter,e);return Ei(n,[ba(yi(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,se.exists(!1))]).then(()=>s)}function Ei(t,e){return function(n,s){const i=new ue;return n.asyncQueue.enqueueAndForget(async()=>vl(await Ll(n),s,i)),i.promise}(di(t),e)}function cd(t,e,n){const s=n.docs.get(e._key),i=new La(t);return new xa(t,i,e._key,s,new at(n.hasPendingWrites,n.fromCache),e.converter)}function ld(){return new vi("serverTimestamp")}(function(t,e=!0){(function(n){We=n})($a),Pa(new Ua("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new et(new ah(n.getProvider("auth-internal")),new lh(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new g(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tt(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ts(Fi,"3.5.0",t),ts(Fi,"3.5.0","esm2017")})();const jt=(...t)=>t.reduce((e,n)=>n(e),null),dd=Ul(nu),Bt=({source:t=null,isTeam:e=!1,type:n=null,id:s=null})=>{let i=e?"teams":"users";return t!=null&&n!=null&&(i+=`/${t}/${n}`),s!=null&&(i+=`/${s}`),()=>i},$t=t=>e=>t(dd,e),Ma=(t,e)=>n=>(delete t.id,delete t.contentType,t[e]=ld(),{location:n,content:t}),Oa=(t,e=null)=>n=>t(n.location,n.content,e),yd=({source:t=null,isTeam:e=!1,type:n=null,id:s})=>jt(Bt({source:t,isTeam:e,type:n,id:s}),$t(Bn),rd),vd=({source:t=null,isTeam:e=!1,type:n=null,id:s})=>jt(Bt({source:t,isTeam:e,type:n,id:s}),$t(Bn),ud),es=({content:t,source:e=null,type:n=null,isTeam:s=!1,timestamp:i="created"})=>jt(Bt({source:e,type:n,isTeam:s}),$t(Ea),Ma(t,i),Oa(hd)),wd=({id:t,content:e,source:n=null,type:s=null,isTeam:i=!1,timestamp:r="edited"})=>jt(Bt({source:n,type:s,isTeam:i,id:t}),$t(Bn),Ma(e,r),Oa(ad,{merge:!0})),Td=({source:t=null,isTeam:e=!1,type:n=null,amount:s=50,timestamp:i="date",queries:r})=>jt(Bt({source:t,isTeam:e,type:n}),$t(Ea),o=>Xl(o,...r.map(a=>Zl(a.type,a.compare,a.value)),td(i,"desc"),sd(s)),od),fd=t=>{var n;return(n={"auth/wrong-password":"The password is invalid or the user does not have a password.","auth/claims-too-large":"The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.","auth/email-already-exists":"The provided email is already in use by an existing user. Each user must have a unique email.","auth/id-token-expired":"The provided Firebase ID token is expired.","auth/id-token-revoked":"The Firebase ID token has been revoked.","auth/insufficient-permission":"The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.","auth/invalid-argument":"An invalid argument was provided to an Authentication method. The error message should contain additional information.","auth/invalid-claims":"The custom claim attributes provided to setCustomUserClaims() are invalid.","auth/invalid-creation-time":"The creation time must be a valid UTC date string.","auth/invalid-disabled-field":"The provided value for the disabled user property is invalid. It must be a boolean.","auth/invalid-display-name":"The provided value for the displayName user property is invalid. It must be a non-empty string.","auth/invalid-email-verified":"The provided value for the emailVerified user property is invalid. It must be a boolean.","auth/invalid-hash-algorithm":"The hash algorithm must match one of the strings in the list of supported algorithms.","auth/invalid-hash-block-size":"The hash block size must be a valid number.","auth/invalid-hash-derived-key-length":"The hash derived key length must be a valid number.","auth/invalid-hash-key":"The hash key must a valid byte buffer.","auth/invalid-hash-memory-cost":"The hash memory cost must be a valid number.","auth/invalid-hash-parallelization":"The hash parallelization must be a valid number.","auth/invalid-hash-rounds":"The hash rounds must be a valid number.","auth/invalid-hash-salt-separator":"The hashing algorithm salt separator field must be a valid byte buffer.","auth/invalid-id-token":"The provided ID token is not a valid Firebase ID token.","auth/invalid-last-sign-in-time":"The last sign-in time must be a valid UTC date string.","auth/invalid-page-token":"The provided next page token in listUsers() is invalid. It must be a valid non-empty string.","auth/invalid-password":"The provided value for the password user property is invalid. It must be a string with at least six characters.","auth/invalid-password-hash":"The password hash must be a valid byte buffer.","auth/invalid-password-salt":"The password salt must be a valid byte buffer","auth/invalid-photo-url":"The provided value for the photoURL user property is invalid. It must be a string URL.","auth/invalid-provider-data":"The providerData must be a valid array of UserInfo objects.","auth/invalid-oauth-responsetype":"Only exactly one OAuth responseType should be set to true.","auth/invalid-session-cookie-duration":"The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.","auth/invalid-uid":"The provided uid must be a non-empty string with at most 128 characters.","auth/invalid-user-import":"The user record to import is invalid.","auth/maximum-user-count-exceeded":"The maximum allowed number of users to import has been exceeded.","auth/missing-hash-algorithm":"Importing users with password hashes requires that the hashing algorithm and its parameters be provided.","auth/missing-uid":"A uid identifier is required for the current operation.","auth/missing-oauth-client-secret":"The OAuth configuration client secret is required to enable OIDC code flow.","auth/phone-number-already-exists":"The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.","auth/project-not-found":"No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.","auth/reserved-claims":"One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.","auth/session-cookie-expired":"The provided Firebase session cookie is expired.","auth/session-cookie-revoked":"The Firebase session cookie has been revoked.","auth/uid-already-exists":"The provided uid is already in use by an existing user. Each user must have a unique uid.","auth/admin-restricted-operation":"This operation is restricted to administrators only.","auth/app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","auth/app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","auth/captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","auth/code-expired":"The SMS code has expired. Please re-send the verification code to try again.","auth/cordova-not-ready":"Cordova framework is not ready.","auth/cors-unsupported":"This browser is not supported.","auth/credential-already-in-use":"This credential is already associated with a different user account.","auth/custom-token-mismatch":"The custom token corresponds to a different audience.","auth/requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","auth/dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","auth/dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","auth/email-change-needs-verification":"Multi-factor users must always have a verified email.","auth/email-already-in-use":"The email address is already in use by another account.","auth/emulator-config-failed":"Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling 'connectAuthEmulator()' sooner.","auth/expired-action-code":"The action code has expired.","auth/cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","auth/internal-error":"An internal AuthError has occurred.","auth/invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","auth/invalid-app-id":"The mobile app identifier is not registed for the current project.","auth/invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","auth/invalid-auth-event":"An internal AuthError has occurred.","auth/invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","auth/invalid-continue-uri":"The continue URL provided in the request is invalid.","auth/invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","auth/invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","auth/invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","auth/invalid-email":"The email address is badly formatted.","auth/invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","auth/invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","auth/invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","auth/invalid-credential":"The supplied auth credential is malformed or has expired.","auth/invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","auth/invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","auth/invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","auth/invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","auth/unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","auth/invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","auth/invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","auth/invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","auth/invalid-provider-id":"The specified provider ID is invalid.","auth/invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","auth/invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","auth/invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","auth/invalid-tenant-id":"The Auth instance's tenant ID is invalid.","auth/missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth/auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","auth/missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","auth/missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","auth/missing-continue-uri":"A continue URL must be provided in the request.","auth/missing-iframe-start":"An internal AuthError has occurred.","auth/missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","auth/missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","auth/missing-multi-factor-info":"No second factor identifier is provided.","auth/missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","auth/missing-phone-number":"To send verification codes, provide a phone number for the recipient.","auth/missing-verification-id":"The phone auth credential was created with an empty verification ID.","auth/app-deleted":"This instance of FirebaseApp has been deleted.","auth/multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","auth/multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","auth/account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","auth/network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","auth/no-auth-event":"An internal AuthError has occurred.","auth/no-such-provider":"User was not linked to an account with the given provider.","auth/null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","auth/operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","auth/operation-not-supported-in-this-environment":"This operation is not supported in the environment this application is running on. 'location.protocol' must be http, https or chrome-extension and web storage must be enabled.","auth/popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","auth/popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","auth/provider-already-linked":"User can only be linked to one identity for the given provider.","auth/quota-exceeded":"The project's quota for this operation has been exceeded.","auth/redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","auth/redirect-operation-pending":"A redirect sign-in operation is already pending.","auth/rejected-credential":"The request contains malformed or mismatching credentials.","auth/second-factor-already-in-use":"The second factor is already enrolled on this account.","auth/maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","auth/tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID","auth/timeout":"The operation has timed out.","auth/user-token-expired":"The user's credential is no longer valid. The user must sign in again.","auth/too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","auth/unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","auth/unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","auth/unsupported-persistence-type":"The current environment does not support the specified persistence type.","auth/unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","auth/unverified-email":"The operation requires a verified email.","auth/user-cancelled":"The user did not grant your application the permissions it requested.","auth/user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","auth/user-disabled":"The user account has been disabled by an administrator.","auth/user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","auth/weak-password":"The password must be 6 characters long or more.","auth/web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","auth/already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",cancelled:"The operation was cancelled (typically by the caller).",unknown:"Unknown error or an error from a different error domain.","invalid-argument":"Client specified an invalid argument. Note that this differs from 'failed-precondition'. 'invalid-argument' indicates arguments that are problematic regardless of the state of the system (e.g. an invalid field name).","deadline-exceeded":"Deadline expired before operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire.","not-found":"Some requested document was not found.","already-exists":"Some document that we attempted to create already exists.","permission-denied":"The caller does not have permission to execute the specified operation.","resource-exhausted":"Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space.","failed-precondition":"Operation was rejected because the system is not in a state required for the operation's execution.",aborted:"The operation was aborted, typically due to a concurrency issue like transaction aborts, etc.","out-of-range":"Operation was attempted past the valid range.",unimplemented:"Operation is not implemented or not supported/enabled.",internal:"Internal errors. Means some invariants expected by underlying system has been broken. If you see one of these errors, something is very broken.",unavailable:"The service is currently unavailable. This is most likely a transient condition and may be corrected by retrying with a backoff.","data-loss":"Unrecoverable data loss or corruption.",unauthenticated:"The request does not have valid authentication credentials for the operation."}[t])!=null?n:"unknown error"},pe=Ga(),Kt=async t=>await new Promise(e=>{t().then(()=>{e({})}).catch(n=>{e({error:fd(n.code)})})}),Xt=()=>new Promise(t=>{const e=pd();if(e!=null){t(e);return}vr.subscribe(async({user:n,ready:s})=>{var i;!s||t((i=n==null?void 0:n.uid)!=null?i:"")})}),pd=()=>{var t;return(t=pe.currentUser)==null?void 0:t.uid},Ed=()=>Kt(async()=>{await yr(pe,new Ya)}),Id=()=>Kt(async()=>{await yr(pe,new Xa)}),Ad=(t,e)=>Kt(async()=>{await Ja(pe,t,e)}),bd=(t,e)=>Kt(async()=>{await Ha(pe,t,e),await Qa(pe.currentUser);const n={contentType:"user",email:t,id:await Xt()},s={contentType:"todo",id:"",title:"Welcome to Haja! Get started by tapping (+) Add",caption:"We are glad to help you :)",status:"todo",type:"from_haja",date:new Date},i={contentType:"todo",id:"",title:"Happy Aniversary!!",caption:"Thanks for using Haja for 1 year :)",status:"todo",type:"from_haja",date:new Date};es({isTeam:!1,id:await Xt(),content:n}),es({source:await Xt(),isTeam:!1,content:s,type:"todo"}),es({source:await Xt(),isTeam:!1,content:i,type:"todo"})}),Sd=t=>Kt(async()=>{await Wa(pe,t)}),Cd=()=>{pe.signOut()};za(pe,t=>{vr.set({user:t,ready:!0})});export{Ed as a,Id as b,Sd as c,Xt as d,Td as e,wd as f,yd as g,vd as h,Bt as i,Ad as l,bd as n,jt as p,Cd as s,es as u};
