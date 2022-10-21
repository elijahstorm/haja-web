import{S as oe,i as ie,s as ae,k as E,q as G,a as B,l as C,m as D,r as K,h as b,c as L,n as k,a8 as be,b as H,H as g,u as se,B as P,w as z,x as V,y as X,J as te,g as Ce,t as A,d as Pe,f as I,z as W,D as Ae,a9 as we,T as le,V as ue,W as ce,X as fe,$ as ke,e as ee,U as _t,a0 as Ke,ac as Ie,ad as Ue}from"./index-cc9d6004.js";import{P as gt}from"./ProtectedPage-a624484b.js";import{L as Je}from"./Loader-eb0e0db0.js";import{p as bt,i as kt,f as Oe}from"./auth-b78ecccb.js";import{e as ve,a as wt,b as vt,g as Tt,_ as yt,C as Rt,r as ze,c as St,S as Et,F as Ct}from"./index-0f9529d3-b2b6cfcf.js";import{I as De}from"./Icon-f906670f.js";import{F as Pt}from"./Casing-ee02cc53.js";import{T as At}from"./TodoContent-93853010.js";/**
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
 */const Ze="firebasestorage.googleapis.com",Qe="storageBucket",It=2*60*1e3,Ut=10*60*1e3;/**
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
 */class N extends Ct{constructor(e,r,n=0){super(Te(e),`Firebase Storage: ${r} (${Te(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,N.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Te(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Te(t){return"storage/"+t}function qe(){const t="An unknown error occurred, please check the error payload for server response.";return new N("unknown",t)}function Ot(t){return new N("object-not-found","Object '"+t+"' does not exist.")}function Dt(t){return new N("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new N("unauthenticated",t)}function Bt(){return new N("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Lt(t){return new N("unauthorized","User does not have permission to access '"+t+"'.")}function Nt(){return new N("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ft(){return new N("canceled","User canceled the upload/download.")}function jt(t){return new N("invalid-url","Invalid URL '"+t+"'.")}function Mt(t){return new N("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Ht(){return new N("no-default-bucket","No default bucket found. Did you set the '"+Qe+"' property when initializing the app?")}function zt(){return new N("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Vt(){return new N("no-download-url","The given file does not have any download URLs.")}function Re(t){return new N("invalid-argument",t)}function xe(){return new N("app-deleted","The Firebase app was deleted.")}function Xt(t){return new N("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function he(t,e){return new N("invalid-format","String does not match format '"+t+"': "+e)}function de(t){throw new N("internal-error","Internal error: "+t)}/**
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
 */class ${constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let n;try{n=$.makeFromUrl(e,r)}catch{return new $(e,"")}if(n.path==="")return n;throw Mt(e)}static makeFromUrl(e,r){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const h="v[A-Za-z0-9_]+",c=r.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",p=new RegExp(`^https?://${c}/${h}/b/${s}/o${m}`,"i"),_={bucket:1,path:3},R=r===Ze?"(?:storage.googleapis.com|storage.cloud.google.com)":r,w="([^?#]*)",U=new RegExp(`^https?://${R}/${s}/${w}`,"i"),d=[{regex:l,indices:a,postModify:i},{regex:p,indices:_,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<d.length;v++){const S=d[v],T=S.regex.exec(e);if(T){const O=T[S.indices.bucket];let q=T[S.indices.path];q||(q=""),n=new $(O,q),S.postModify(n);break}}if(n==null)throw jt(e);return n}}class Wt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $t(t,e,r){let n=1,s=null,i=null,o=!1,l=0;function a(){return l===2}let u=!1;function h(...w){u||(u=!0,e.apply(null,w))}function c(w){s=setTimeout(()=>{s=null,t(p,a())},w)}function m(){i&&clearTimeout(i)}function p(w,...U){if(u){m();return}if(w){m(),h.call(null,w,...U);return}if(a()||o){m(),h.call(null,w,...U);return}n<64&&(n*=2);let d;l===1?(l=2,d=0):d=(n+Math.random())*1e3,c(d)}let _=!1;function R(w){_||(_=!0,m(),!u&&(s!==null?(w||(l=2),clearTimeout(s),c(0)):w||(l=1)))}return c(0),i=setTimeout(()=>{o=!0,R(!0)},r),R}function Yt(t){t(!1)}/**
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
 */function Gt(t){return t!==void 0}function Kt(t){return typeof t=="object"&&!Array.isArray(t)}function Be(t){return typeof t=="string"||t instanceof String}function Ve(t){return Le()&&t instanceof Blob}function Le(){return typeof Blob<"u"}function Xe(t,e,r,n){if(n<e)throw Re(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>r)throw Re(`Invalid value for '${t}'. Expected ${r} or less.`)}/**
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
 */function Ne(t,e,r){let n=e;return r==null&&(n=`https://${e}`),`${r}://${n}/v0${t}`}function et(t){const e=encodeURIComponent;let r="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);r=r+s+"&"}return r=r.slice(0,-1),r}/**
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
 */var ne;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ne||(ne={}));/**
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
 */function Jt(t,e){const r=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return r||s||i}/**
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
 */class Zt{constructor(e,r,n,s,i,o,l,a,u,h,c,m=!0){this.url_=e,this.method_=r,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=c,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new _e(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ne.NO_ERROR,a=i.getStatus();if((!l||Jt(a,this.additionalRetryCodes_))&&this.retry){const h=i.getErrorCode()===ne.ABORT;n(!1,new _e(!1,null,h));return}const u=this.successCodes_.indexOf(a)!==-1;n(!0,new _e(u,i))})},r=(n,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Gt(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=qe();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?xe():Ft();o(a)}else{const a=Nt();o(a)}};this.canceled_?r(!1,new _e(!1,null,!0)):this.backoffId_=$t(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _e{constructor(e,r,n){this.wasSuccessCode=e,this.connection=r,this.canceled=!!n}}function Qt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function en(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tn(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nn(t,e,r,n,s,i,o=!0){const l=et(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return en(u,e),Qt(u,r),xt(u,i),tn(u,n),new Zt(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function rn(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sn(...t){const e=rn();if(e!==void 0){const r=new e;for(let n=0;n<t.length;n++)r.append(t[n]);return r.getBlob()}else{if(Le())return new Blob(t);throw new N("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function on(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function an(t){return atob(t)}/**
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
 */const J={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ye{constructor(e,r){this.data=e,this.contentType=r||null}}function ln(t,e){switch(t){case J.RAW:return new ye(tt(e));case J.BASE64:case J.BASE64URL:return new ye(nt(t,e));case J.DATA_URL:return new ye(cn(e),fn(e))}throw qe()}function tt(t){const e=[];for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(r<t.length-1&&(t.charCodeAt(r+1)&64512)===56320))e.push(239,191,189);else{const i=n,o=t.charCodeAt(++r);n=65536|(i&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function un(t){let e;try{e=decodeURIComponent(t)}catch{throw he(J.DATA_URL,"Malformed data URL.")}return tt(e)}function nt(t,e){switch(t){case J.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw he(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case J.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw he(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=an(e)}catch{throw he(t,"Invalid character found")}const n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n}class rt{constructor(e){this.base64=!1,this.contentType=null;const r=e.match(/^data:([^,]+)?,/);if(r===null)throw he(J.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=r[1]||null;n!=null&&(this.base64=dn(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function cn(t){const e=new rt(t);return e.base64?nt(J.BASE64,e.rest):un(e.rest)}function fn(t){return new rt(t).contentType}function dn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class x{constructor(e,r){let n=0,s="";Ve(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(r?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(r?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,r){if(Ve(this.data_)){const n=this.data_,s=on(n,e,r);return s===null?null:new x(s)}else{const n=new Uint8Array(this.data_.buffer,e,r-e);return new x(n,!0)}}static getBlob(...e){if(Le()){const r=e.map(n=>n instanceof x?n.data_:n);return new x(sn.apply(null,r))}else{const r=e.map(o=>Be(o)?ln(J.RAW,o).data:o.data_);let n=0;r.forEach(o=>{n+=o.byteLength});const s=new Uint8Array(n);let i=0;return r.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new x(s,!0)}}uploadData(){return this.data_}}/**
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
 */function st(t){let e;try{e=JSON.parse(t)}catch{return null}return Kt(e)?e:null}/**
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
 */function hn(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pn(t,e){const r=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?r:t+"/"+r}function ot(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function mn(t,e){return e}class M{constructor(e,r,n,s){this.server=e,this.local=r||e,this.writable=!!n,this.xform=s||mn}}let ge=null;function _n(t){return!Be(t)||t.length<2?t:ot(t)}function it(){if(ge)return ge;const t=[];t.push(new M("bucket")),t.push(new M("generation")),t.push(new M("metageneration")),t.push(new M("name","fullPath",!0));function e(i,o){return _n(o)}const r=new M("name");r.xform=e,t.push(r);function n(i,o){return o!==void 0?Number(o):o}const s=new M("size");return s.xform=n,t.push(s),t.push(new M("timeCreated")),t.push(new M("updated")),t.push(new M("md5Hash",null,!0)),t.push(new M("cacheControl",null,!0)),t.push(new M("contentDisposition",null,!0)),t.push(new M("contentEncoding",null,!0)),t.push(new M("contentLanguage",null,!0)),t.push(new M("contentType",null,!0)),t.push(new M("metadata","customMetadata",!0)),ge=t,ge}function gn(t,e){function r(){const n=t.bucket,s=t.fullPath,i=new $(n,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:r})}function bn(t,e,r){const n={};n.type="file";const s=r.length;for(let i=0;i<s;i++){const o=r[i];n[o.local]=o.xform(n,e[o.server])}return gn(n,t),n}function at(t,e,r){const n=st(e);return n===null?null:bn(t,n,r)}function kn(t,e,r,n){const s=st(e);if(s===null||!Be(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,c=t.fullPath,m="/b/"+o(h)+"/o/"+o(c),p=Ne(m,r,n),_=et({alt:"media",token:u});return p+_})[0]}function wn(t,e){const r={},n=e.length;for(let s=0;s<n;s++){const i=e[s];i.writable&&(r[i.server]=t[i.local])}return JSON.stringify(r)}class lt{constructor(e,r,n,s){this.url=e,this.method=r,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ut(t){if(!t)throw qe()}function vn(t,e){function r(n,s){const i=at(t,s,e);return ut(i!==null),i}return r}function Tn(t,e){function r(n,s){const i=at(t,s,e);return ut(i!==null),kn(i,s,t.host,t._protocol)}return r}function ct(t){function e(r,n){let s;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?s=Bt():s=qt():r.getStatus()===402?s=Dt(t.bucket):r.getStatus()===403?s=Lt(t.path):s=n,s.status=r.getStatus(),s.serverResponse=n.serverResponse,s}return e}function yn(t){const e=ct(t);function r(n,s){let i=e(n,s);return n.getStatus()===404&&(i=Ot(t.path)),i.serverResponse=s.serverResponse,i}return r}function Rn(t,e,r){const n=e.fullServerUrl(),s=Ne(n,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new lt(s,i,Tn(t,r),o);return l.errorHandler=yn(e),l}function Sn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function En(t,e,r){const n=Object.assign({},r);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=Sn(null,e)),n}function Cn(t,e,r,n,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let d="";for(let v=0;v<2;v++)d=d+Math.random().toString().slice(2);return d}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=En(e,n,s),h=wn(u,r),c="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+a+"--",p=x.getBlob(c,n,m);if(p===null)throw zt();const _={name:u.fullPath},R=Ne(i,t.host,t._protocol),w="POST",U=t.maxUploadRetryTime,f=new lt(R,w,vn(t,r),U);return f.urlParams=_,f.headers=o,f.body=p.uploadData(),f.errorHandler=ct(e),f}class Pn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ne.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ne.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ne.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,r,n,s){if(this.sent_)throw de("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw de("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw de("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw de("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw de("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class An extends Pn{initXhr(){this.xhr_.responseType="text"}}function ft(){return new An}/**
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
 */class re{constructor(e,r){this._service=e,r instanceof $?this._location=r:this._location=$.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new re(e,r)}get root(){const e=new $(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ot(this._location.path)}get storage(){return this._service}get parent(){const e=hn(this._location.path);if(e===null)return null;const r=new $(this._location.bucket,e);return new re(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw Xt(e)}}function In(t,e,r){t._throwIfRoot("uploadBytes");const n=Cn(t.storage,t._location,it(),new x(e,!0),r);return t.storage.makeRequestWithTokens(n,ft).then(s=>({metadata:s,ref:t}))}function Un(t){t._throwIfRoot("getDownloadURL");const e=Rn(t.storage,t._location,it());return t.storage.makeRequestWithTokens(e,ft).then(r=>{if(r===null)throw Vt();return r})}function On(t,e){const r=pn(t._location.path,e),n=new $(t._location.bucket,r);return new re(t.storage,n)}/**
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
 */function Dn(t){return/^[A-Za-z]+:\/\//.test(t)}function qn(t,e){return new re(t,e)}function dt(t,e){if(t instanceof Fe){const r=t;if(r._bucket==null)throw Ht();const n=new re(r,r._bucket);return e!=null?dt(n,e):n}else return e!==void 0?On(t,e):t}function Bn(t,e){if(e&&Dn(e)){if(t instanceof Fe)return qn(t,e);throw Re("To use ref(service, url), the first argument must be a Storage instance.")}else return dt(t,e)}function We(t,e){const r=e==null?void 0:e[Qe];return r==null?null:$.makeFromBucketSpec(r,t)}function Ln(t,e,r,n={}){t.host=`${e}:${r}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:St(s,t.app.options.projectId))}class Fe{constructor(e,r,n,s,i){this.app=e,this._authProvider=r,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ze,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=It,this._maxUploadRetryTime=Ut,this._requests=new Set,s!=null?this._bucket=$.makeFromBucketSpec(s,this._host):this._bucket=We(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$.makeFromBucketSpec(this._url,e):this._bucket=We(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xe("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xe("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new re(this,e)}_makeRequest(e,r,n,s,i=!0){if(this._deleted)return new Wt(xe());{const o=nn(e,this._appId,n,s,r,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,r){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,n,s).getPromise()}}const $e="@firebase/storage",Ye="0.9.11";/**
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
 */const ht="storage";function Nn(t,e,r){return t=ve(t),In(t,e,r)}function Fn(t){return t=ve(t),Un(t)}function jn(t,e){return t=ve(t),Bn(t,e)}function Mn(t=Tt(),e){t=ve(t);const n=wt(t,ht).getImmediate({identifier:e}),s=vt("storage");return s&&Hn(n,...s),n}function Hn(t,e,r,n={}){Ln(t,e,r,n)}function zn(t,{instanceIdentifier:e}){const r=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fe(r,n,s,e,Et)}function Vn(){yt(new Rt(ht,zn,"PUBLIC").setMultipleInstances(!0)),ze($e,Ye,""),ze($e,Ye,"esm2017")}Vn();const Xn=Mn(),Wn=t=>e=>t(Xn,e),$n=(t,e)=>r=>t(r,e),Yn=({blob:t,id:e,source:r=null,type:n=null,isTeam:s=!1})=>bt(kt({id:e,source:r,type:n,isTeam:s}),Wn(jn),$n(Nn,t)),Gn=async t=>Fn(await(await Yn(t)).ref);function Kn(t){let e,r,n,s,i,o,l,a,u,h,c,m;return{c(){e=E("div"),r=E("p"),n=G(t[0]),s=B(),i=E("p"),o=G(t[1]),l=B(),a=E("p"),u=G(t[2]),h=B(),c=E("p"),m=G(t[3]),this.h()},l(p){e=C(p,"DIV",{class:!0});var _=D(e);r=C(_,"P",{class:!0});var R=D(r);n=K(R,t[0]),R.forEach(b),s=L(_),i=C(_,"P",{class:!0});var w=D(i);o=K(w,t[1]),w.forEach(b),l=L(_),a=C(_,"P",{class:!0});var U=D(a);u=K(U,t[2]),U.forEach(b),h=L(_),c=C(_,"P",{class:!0});var f=D(c);m=K(f,t[3]),f.forEach(b),_.forEach(b),this.h()},h(){k(r,"class","title svelte-11murog"),k(i,"class","info svelte-11murog"),k(a,"class","extension svelte-11murog"),k(c,"class","file svelte-11murog"),k(e,"class","overlay svelte-11murog"),be(e,"failed",t[4]==="failed")},m(p,_){H(p,e,_),g(e,r),g(r,n),g(e,s),g(e,i),g(i,o),g(e,l),g(e,a),g(a,u),g(e,h),g(e,c),g(c,m)},p(p,[_]){_&1&&se(n,p[0]),_&2&&se(o,p[1]),_&4&&se(u,p[2]),_&8&&se(m,p[3]),_&16&&be(e,"failed",p[4]==="failed")},i:P,o:P,d(p){p&&b(e)}}}function Jn(t,e,r){let{title:n}=e,{info:s}=e,{fileType:i}=e,{fileName:o}=e,{state:l="ready"}=e;return t.$$set=a=>{"title"in a&&r(0,n=a.title),"info"in a&&r(1,s=a.info),"fileType"in a&&r(2,i=a.fileType),"fileName"in a&&r(3,o=a.fileName),"state"in a&&r(4,l=a.state)},[n,s,i,o,l]}class Zn extends oe{constructor(e){super(),ie(this,e,Jn,Kn,ae,{title:0,info:1,fileType:2,fileName:3,state:4})}}function Qn(t){let e,r;return e=new De({props:{icon:ir,width:je,color:"var(--primary)"}}),{c(){z(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){X(e,n,s),r=!0},p:P,i(n){r||(I(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function xn(t){let e,r,n,s,i;return e=new De({props:{icon:or,width:je,color:"var(--error)"}}),{c(){z(e.$$.fragment),r=B(),n=E("p"),s=G(t[6]),this.h()},l(o){V(e.$$.fragment,o),r=L(o),n=C(o,"P",{class:!0});var l=D(n);s=K(l,t[6]),l.forEach(b),this.h()},h(){k(n,"class","error svelte-1d3jir2")},m(o,l){X(e,o,l),H(o,r,l),H(o,n,l),g(n,s),i=!0},p(o,l){(!i||l&64)&&se(s,o[6])},i(o){i||(I(e.$$.fragment,o),i=!0)},o(o){A(e.$$.fragment,o),i=!1},d(o){W(e,o),o&&b(r),o&&b(n)}}}function er(t){let e,r;return e=new Je({}),{c(){z(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){X(e,n,s),r=!0},p:P,i(n){r||(I(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function tr(t){let e,r;return e=new De({props:{icon:sr,width:je}}),{c(){z(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){X(e,n,s),r=!0},p:P,i(n){r||(I(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function nr(t){let e,r,n,s,i,o,l,a,u,h,c,m,p,_;n=new Pt({props:{src:t[0],alt:t[1],fallback:pt}}),i=new Zn({props:{title:"Your "+t[2],info:"",fileType:t[5],fileName:t[4],state:t[7]}});const R=[tr,er,xn,Qn],w=[];function U(f,d){return f[7]=="ready"?0:f[7]=="uploading"?1:f[7]=="failed"?2:f[7]=="finished"?3:-1}return~(a=U(t))&&(u=w[a]=R[a](t)),{c(){e=E("section"),r=E("div"),z(n.$$.fragment),s=B(),z(i.$$.fragment),o=B(),l=E("div"),u&&u.c(),h=B(),c=E("input"),this.h()},l(f){e=C(f,"SECTION",{class:!0});var d=D(e);r=C(d,"DIV",{class:!0});var v=D(r);V(n.$$.fragment,v),s=L(v),V(i.$$.fragment,v),o=L(v),l=C(v,"DIV",{class:!0});var S=D(l);u&&u.l(S),S.forEach(b),v.forEach(b),h=L(d),c=C(d,"INPUT",{type:!0,accept:!0,class:!0}),d.forEach(b),this.h()},h(){k(l,"class","upload svelte-1d3jir2"),be(l,"status",t[7]!="ready"),k(r,"class","image-uploader-container svelte-1d3jir2"),k(c,"type","file"),k(c,"accept",rr),k(c,"class","svelte-1d3jir2"),k(e,"class","svelte-1d3jir2")},m(f,d){H(f,e,d),g(e,r),X(n,r,null),g(r,s),X(i,r,null),g(r,o),g(r,l),~a&&w[a].m(l,null),g(e,h),g(e,c),t[15](c),m=!0,p||(_=[te(r,"click",t[9]),te(r,"keypress",t[9]),te(c,"change",t[8])],p=!0)},p(f,[d]){const v={};d&1&&(v.src=f[0]),d&2&&(v.alt=f[1]),n.$set(v);const S={};d&4&&(S.title="Your "+f[2]),d&32&&(S.fileType=f[5]),d&16&&(S.fileName=f[4]),d&128&&(S.state=f[7]),i.$set(S);let T=a;a=U(f),a===T?~a&&w[a].p(f,d):(u&&(Ce(),A(w[T],1,1,()=>{w[T]=null}),Pe()),~a?(u=w[a],u?u.p(f,d):(u=w[a]=R[a](f),u.c()),I(u,1),u.m(l,null)):u=null),(!m||d&128)&&be(l,"status",f[7]!="ready")},i(f){m||(I(n.$$.fragment,f),I(i.$$.fragment,f),I(u),m=!0)},o(f){A(n.$$.fragment,f),A(i.$$.fragment,f),A(u),m=!1},d(f){f&&b(e),W(n),W(i),~a&&w[a].d(),t[15](null),p=!1,Ae(_)}}}const pt="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",rr=".jpg, .jpeg, .png, .svg",sr="akar-icons:cloud-upload",or="akar-icons:triangle-alert-fill",ir="ic:round-cloud-done",je="3rem";function ar(t,e,r){let{id:n}=e,{source:s=null}=e,{type:i=null}=e,{isTeam:o}=e,{src:l=pt}=e,{alt:a}=e,{dest:u="picture"}=e,{oncomplete:h=()=>{}}=e,c,m="",p="",_=null,R="ready";const w=async d=>{const v=d.target.files[0],S=new FileReader;S.readAsDataURL(v),S.onload=T=>{r(0,l=T.target.result)},r(7,R="uploading");try{const T=(await Gn({type:i,source:s,isTeam:o,id:`${n}/${v.name}`,blob:v})).replace("https://firebasestorage.googleapis.com/v0/b/haja-project.appspot.com/o/","");await Oe({type:i,id:n,source:s,isTeam:o,content:{[u]:T},timestamp:"updatedOn"}),r(7,R="finished"),h()}catch(T){r(7,R="failed"),r(6,_=T)}},U=()=>{c.click()};function f(d){we[d?"unshift":"push"](()=>{c=d,r(3,c)})}return t.$$set=d=>{"id"in d&&r(10,n=d.id),"source"in d&&r(11,s=d.source),"type"in d&&r(12,i=d.type),"isTeam"in d&&r(13,o=d.isTeam),"src"in d&&r(0,l=d.src),"alt"in d&&r(1,a=d.alt),"dest"in d&&r(2,u=d.dest),"oncomplete"in d&&r(14,h=d.oncomplete)},t.$$.update=()=>{t.$$.dirty&1&&(r(4,m=decodeURIComponent(l).split("/").pop().split("?").shift()),r(5,p=`.${l.split(".").pop().split("?").shift()}`))},[l,a,u,c,m,p,_,R,w,U,n,s,i,o,h,f]}class Se extends oe{constructor(e){super(),ie(this,e,ar,nr,ae,{id:10,source:11,type:12,isTeam:13,src:0,alt:1,dest:2,oncomplete:14})}}function lr(t){let e,r,n,s,i,o,l,a,u,h,c,m,p,_,R,w,U,f,d,v;const S=t[6].default,T=le(S,t,t[5],null);return U=new Se({props:{src:t[0].picture,dest:"picture",alt:"picture",id:t[2],source:mt,isTeam:t[1]}}),{c(){e=E("div"),T&&T.c(),r=B(),n=E("div"),s=E("label"),i=G("Name"),o=B(),l=E("input"),u=B(),h=E("div"),c=E("label"),m=G("Description"),p=B(),_=E("textarea"),w=B(),z(U.$$.fragment),this.h()},l(O){e=C(O,"DIV",{class:!0});var q=D(e);T&&T.l(q),r=L(q),n=C(q,"DIV",{class:!0});var Y=D(n);s=C(Y,"LABEL",{for:!0});var j=D(s);i=K(j,"Name"),j.forEach(b),o=L(Y),l=C(Y,"INPUT",{name:!0,placeholder:!0}),Y.forEach(b),u=L(q),h=C(q,"DIV",{class:!0});var y=D(h);c=C(y,"LABEL",{for:!0});var F=D(c);m=K(F,"Description"),F.forEach(b),p=L(y),_=C(y,"TEXTAREA",{name:!0,rows:!0,placeholder:!0}),D(_).forEach(b),y.forEach(b),w=L(q),V(U.$$.fragment,q),q.forEach(b),this.h()},h(){k(s,"for","name"),k(l,"name","name"),l.value=a=t[0].title,k(l,"placeholder","Your team name"),k(n,"class","data-input"),k(c,"for","caption"),k(_,"name","caption"),_.value=R=t[0].caption,k(_,"rows",3),k(_,"placeholder","More about this team"),k(h,"class","data-input"),k(e,"class","col")},m(O,q){H(O,e,q),T&&T.m(e,null),g(e,r),g(e,n),g(n,s),g(s,i),g(n,o),g(n,l),g(e,u),g(e,h),g(h,c),g(c,m),g(h,p),g(h,_),g(e,w),X(U,e,null),f=!0,d||(v=[te(l,"input",t[3]("title")),te(_,"input",t[3]("caption"))],d=!0)},p(O,[q]){T&&T.p&&(!f||q&32)&&ue(T,S,O,O[5],f?fe(S,O[5],q,null):ce(O[5]),null),(!f||q&1&&a!==(a=O[0].title)&&l.value!==a)&&(l.value=a),(!f||q&1&&R!==(R=O[0].caption))&&(_.value=R);const Y={};q&1&&(Y.src=O[0].picture),q&2&&(Y.isTeam=O[1]),U.$set(Y)},i(O){f||(I(T,O),I(U.$$.fragment,O),f=!0)},o(O){A(T,O),A(U.$$.fragment,O),f=!1},d(O){O&&b(e),T&&T.d(O),W(U),d=!1,Ae(v)}}}const mt=null;function ur(t,e,r){let{$$slots:n={},$$scope:s}=e,{team:i}=e,{isTeam:o}=e;const{id:l}=i;let a={title:i.title,caption:i.caption};const u=c=>m=>{a[c]=m.target.value},h=()=>{let c=!1;const m={title:i.title,caption:i.caption};a.title&&a.title!==""&&a.title!==i.title&&(c=!0,m.title=a.title),a.caption&&a.caption!==""&&a.caption!==i.caption&&(c=!0,m.caption=a.caption),c&&(Oe({type:"team",id:i.id,isTeam:o,source:mt,content:{...m},timestamp:"updatedOn"}),r(0,i.title=m.title,i),r(0,i.caption=m.caption,i))};return t.$$set=c=>{"team"in c&&r(0,i=c.team),"isTeam"in c&&r(1,o=c.isTeam),"$$scope"in c&&r(5,s=c.$$scope)},[i,o,l,u,h,s,n]}class cr extends oe{constructor(e){super(),ie(this,e,ur,lr,ae,{team:0,isTeam:1,requestSave:4})}get requestSave(){return this.$$.ctx[4]}}function fr(t){let e,r,n;const s=t[5].default,i=le(s,t,t[4],null);return r=new At({props:{todo:t[0],source:t[1],isTeam:t[2]}}),{c(){i&&i.c(),e=B(),z(r.$$.fragment)},l(o){i&&i.l(o),e=L(o),V(r.$$.fragment,o)},m(o,l){i&&i.m(o,l),H(o,e,l),X(r,o,l),n=!0},p(o,[l]){i&&i.p&&(!n||l&16)&&ue(i,s,o,o[4],n?fe(s,o[4],l,null):ce(o[4]),null);const a={};l&1&&(a.todo=o[0]),l&2&&(a.source=o[1]),l&4&&(a.isTeam=o[2]),r.$set(a)},i(o){n||(I(i,o),I(r.$$.fragment,o),n=!0)},o(o){A(i,o),A(r.$$.fragment,o),n=!1},d(o){i&&i.d(o),o&&b(e),W(r,o)}}}function dr(t,e,r){let{$$slots:n={},$$scope:s}=e,{todo:i}=e,{source:o=null}=e,{isTeam:l}=e,{requestSave:a=()=>{}}=e;return t.$$set=u=>{"todo"in u&&r(0,i=u.todo),"source"in u&&r(1,o=u.source),"isTeam"in u&&r(2,l=u.isTeam),"requestSave"in u&&r(3,a=u.requestSave),"$$scope"in u&&r(4,s=u.$$scope)},[i,o,l,a,s,n]}class hr extends oe{constructor(e){super(),ie(this,e,dr,fr,ae,{todo:0,source:1,isTeam:2,requestSave:3})}}function pr(t){let e,r,n,s,i,o,l,a,u,h,c,m,p,_,R,w,U,f,d,v,S,T,O,q;const Y=t[6].default,j=le(Y,t,t[5],null);return s=new Se({props:{src:t[0].picture,alt:"profile",id:t[2],source:Ee,isTeam:t[1]}}),S=new Se({props:{src:t[0].background,dest:"background",alt:"background",id:t[2],source:Ee,isTeam:t[1]}}),{c(){e=E("div"),j&&j.c(),r=B(),n=E("div"),z(s.$$.fragment),i=B(),o=E("div"),l=E("div"),a=E("label"),u=G("Name"),h=B(),c=E("input"),p=B(),_=E("div"),R=E("label"),w=G("Description"),U=B(),f=E("textarea"),v=B(),z(S.$$.fragment),this.h()},l(y){e=C(y,"DIV",{class:!0});var F=D(e);j&&j.l(F),r=L(F),n=C(F,"DIV",{class:!0});var Z=D(n);V(s.$$.fragment,Z),i=L(Z),o=C(Z,"DIV",{class:!0});var Q=D(o);l=C(Q,"DIV",{class:!0});var pe=D(l);a=C(pe,"LABEL",{for:!0});var Me=D(a);u=K(Me,"Name"),Me.forEach(b),h=L(pe),c=C(pe,"INPUT",{name:!0,placeholder:!0}),pe.forEach(b),p=L(Q),_=C(Q,"DIV",{class:!0});var me=D(_);R=C(me,"LABEL",{for:!0});var He=D(R);w=K(He,"Description"),He.forEach(b),U=L(me),f=C(me,"TEXTAREA",{name:!0,rows:!0,placeholder:!0}),D(f).forEach(b),me.forEach(b),Q.forEach(b),Z.forEach(b),v=L(F),V(S.$$.fragment,F),F.forEach(b),this.h()},h(){k(a,"for","name"),k(c,"name","name"),c.value=m=t[0].title,k(c,"placeholder","Your user name"),k(l,"class","data-input"),k(R,"for","caption"),k(f,"name","caption"),f.value=d=t[0].caption,k(f,"rows",3),k(f,"placeholder","More about you"),k(_,"class","data-input"),k(o,"class","col"),k(n,"class","row"),k(e,"class","col")},m(y,F){H(y,e,F),j&&j.m(e,null),g(e,r),g(e,n),X(s,n,null),g(n,i),g(n,o),g(o,l),g(l,a),g(a,u),g(l,h),g(l,c),g(o,p),g(o,_),g(_,R),g(R,w),g(_,U),g(_,f),g(e,v),X(S,e,null),T=!0,O||(q=[te(c,"input",t[3]("title")),te(f,"input",t[3]("caption"))],O=!0)},p(y,[F]){j&&j.p&&(!T||F&32)&&ue(j,Y,y,y[5],T?fe(Y,y[5],F,null):ce(y[5]),null);const Z={};F&1&&(Z.src=y[0].picture),F&2&&(Z.isTeam=y[1]),s.$set(Z),(!T||F&1&&m!==(m=y[0].title)&&c.value!==m)&&(c.value=m),(!T||F&1&&d!==(d=y[0].caption))&&(f.value=d);const Q={};F&1&&(Q.src=y[0].background),F&2&&(Q.isTeam=y[1]),S.$set(Q)},i(y){T||(I(j,y),I(s.$$.fragment,y),I(S.$$.fragment,y),T=!0)},o(y){A(j,y),A(s.$$.fragment,y),A(S.$$.fragment,y),T=!1},d(y){y&&b(e),j&&j.d(y),W(s),W(S),O=!1,Ae(q)}}}const Ee=null;function mr(t,e,r){let{$$slots:n={},$$scope:s}=e,{user:i}=e,{isTeam:o}=e;const{id:l}=i;let a={title:i.title,caption:i.caption};const u=c=>m=>{a[c]=m.target.value},h=()=>{let c=!1;const m={title:i.title,caption:i.caption};a.title&&a.title!==""&&a.title!==i.title&&(c=!0,m.title=a.title),a.caption&&a.caption!==""&&a.caption!==i.caption&&(c=!0,m.caption=a.caption),c&&(Oe({type:"user",id:i.id,isTeam:o,source:Ee,content:{...m},timestamp:"updatedOn"}),r(0,i.title=m.title,i),r(0,i.caption=m.caption,i))};return t.$$set=c=>{"user"in c&&r(0,i=c.user),"isTeam"in c&&r(1,o=c.isTeam),"$$scope"in c&&r(5,s=c.$$scope)},[i,o,l,u,h,s,n]}class _r extends oe{constructor(e){super(),ie(this,e,mr,pr,ae,{user:0,isTeam:1,requestSave:4})}get requestSave(){return this.$$.ctx[4]}}function gr(t){return{c:P,l:P,m:P,p:P,d:P}}function br(t){let e,r=t[4]&&Ge(t);return{c(){r&&r.c(),e=ee()},l(n){r&&r.l(n),e=ee()},m(n,s){r&&r.m(n,s),H(n,e,s)},p(n,s){n[4]?r||(r=Ge(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(n){r&&r.d(n),n&&b(e)}}}function Ge(t){return document.title="Edit | "+t[4].title+" | Haja: Do Together",{c:P,l:P,m:P,d:P}}function kr(t){return{c:P,l:P,m:P,p:P,d:P}}function wr(t){var l;let e,r=((l=t[1])!=null?l:"Sorry, we can't find what you're looking for \u{1F50E}")+"",n,s,i,o;return{c(){e=E("p"),n=G(r),s=B(),i=E("p"),o=G("You may need to login to view this content"),this.h()},l(a){e=C(a,"P",{class:!0});var u=D(e);n=K(u,r),u.forEach(b),s=L(a),i=C(a,"P",{class:!0});var h=D(i);o=K(h,"You may need to login to view this content"),h.forEach(b),this.h()},h(){k(e,"class","svelte-1wi7b2z"),k(i,"class","svelte-1wi7b2z")},m(a,u){H(a,e,u),g(e,n),H(a,s,u),H(a,i,u),g(i,o)},p(a,u){var h;u&2&&r!==(r=((h=a[1])!=null?h:"Sorry, we can't find what you're looking for \u{1F50E}")+"")&&se(n,r)},i:P,o:P,d(a){a&&b(e),a&&b(s),a&&b(i)}}}function vr(t){let e,r,n,s={ctx:t,current:null,token:null,hasCatch:!1,pending:Ir,then:yr,catch:Tr,value:4,blocks:[,,,]};return ke(r=t[4],s),{c(){e=ee(),s.block.c()},l(i){e=ee(),s.block.l(i)},m(i,o){H(i,e,o),s.block.m(i,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,n=!0},p(i,o){t=i,s.ctx=t,o&16&&r!==(r=t[4])&&ke(r,s)||Ke(s,t,o)},i(i){n||(I(s.block),n=!0)},o(i){for(let o=0;o<3;o+=1){const l=s.blocks[o];A(l)}n=!1},d(i){i&&b(e),s.block.d(i),s.token=null,s=null}}}function Tr(t){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function yr(t){let e,r,n,s;const i=[Er,Sr,Rr],o=[];function l(a,u){return a[4].contentType=="team"?0:a[4].contentType=="user"?1:a[4].contentType=="todo"?2:-1}return~(r=l(t))&&(n=o[r]=i[r](t)),{c(){e=E("div"),n&&n.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var u=D(e);n&&n.l(u),u.forEach(b),this.h()},h(){k(e,"class","edit svelte-1wi7b2z")},m(a,u){H(a,e,u),~r&&o[r].m(e,null),s=!0},p(a,u){let h=r;r=l(a),r===h?~r&&o[r].p(a,u):(n&&(Ce(),A(o[h],1,1,()=>{o[h]=null}),Pe()),~r?(n=o[r],n?n.p(a,u):(n=o[r]=i[r](a),n.c()),I(n,1),n.m(e,null)):n=null)},i(a){s||(I(n),s=!0)},o(a){A(n),s=!1},d(a){a&&b(e),~r&&o[r].d()}}}function Rr(t){let e,r,n;function s(o){t[8](o)}let i={todo:t[4],source:t[2],isTeam:t[3],$$slots:{default:[Cr]},$$scope:{ctx:t}};return t[0]!==void 0&&(i.requestSave=t[0]),e=new hr({props:i}),we.push(()=>Ie(e,"requestSave",s)),{c(){z(e.$$.fragment)},l(o){V(e.$$.fragment,o)},m(o,l){X(e,o,l),n=!0},p(o,l){const a={};l&16&&(a.todo=o[4]),l&4&&(a.source=o[2]),l&8&&(a.isTeam=o[3]),l&512&&(a.$$scope={dirty:l,ctx:o}),!r&&l&1&&(r=!0,a.requestSave=o[0],Ue(()=>r=!1)),e.$set(a)},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){W(e,o)}}}function Sr(t){let e,r,n;function s(o){t[7](o)}let i={user:t[4],isTeam:t[3],$$slots:{default:[Pr]},$$scope:{ctx:t}};return t[0]!==void 0&&(i.requestSave=t[0]),e=new _r({props:i}),we.push(()=>Ie(e,"requestSave",s)),{c(){z(e.$$.fragment)},l(o){V(e.$$.fragment,o)},m(o,l){X(e,o,l),n=!0},p(o,l){const a={};l&16&&(a.user=o[4]),l&8&&(a.isTeam=o[3]),l&512&&(a.$$scope={dirty:l,ctx:o}),!r&&l&1&&(r=!0,a.requestSave=o[0],Ue(()=>r=!1)),e.$set(a)},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){W(e,o)}}}function Er(t){let e,r,n;function s(o){t[6](o)}let i={team:t[4],isTeam:t[3],$$slots:{default:[Ar]},$$scope:{ctx:t}};return t[0]!==void 0&&(i.requestSave=t[0]),e=new cr({props:i}),we.push(()=>Ie(e,"requestSave",s)),{c(){z(e.$$.fragment)},l(o){V(e.$$.fragment,o)},m(o,l){X(e,o,l),n=!0},p(o,l){const a={};l&16&&(a.team=o[4]),l&8&&(a.isTeam=o[3]),l&512&&(a.$$scope={dirty:l,ctx:o}),!r&&l&1&&(r=!0,a.requestSave=o[0],Ue(()=>r=!1)),e.$set(a)},i(o){n||(I(e.$$.fragment,o),n=!0)},o(o){A(e.$$.fragment,o),n=!1},d(o){W(e,o)}}}function Cr(t){let e;const r=t[5].default,n=le(r,t,t[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&512)&&ue(n,r,s,s[9],e?fe(r,s[9],i,null):ce(s[9]),null)},i(s){e||(I(n,s),e=!0)},o(s){A(n,s),e=!1},d(s){n&&n.d(s)}}}function Pr(t){let e;const r=t[5].default,n=le(r,t,t[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&512)&&ue(n,r,s,s[9],e?fe(r,s[9],i,null):ce(s[9]),null)},i(s){e||(I(n,s),e=!0)},o(s){A(n,s),e=!1},d(s){n&&n.d(s)}}}function Ar(t){let e;const r=t[5].default,n=le(r,t,t[9],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&512)&&ue(n,r,s,s[9],e?fe(r,s[9],i,null):ce(s[9]),null)},i(s){e||(I(n,s),e=!0)},o(s){A(n,s),e=!1},d(s){n&&n.d(s)}}}function Ir(t){let e,r;return e=new Je({}),{c(){z(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){X(e,n,s),r=!0},p:P,i(n){r||(I(e.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),r=!1},d(n){W(e,n)}}}function Ur(t){let e,r,n,s;const i=[vr,wr],o=[];function l(a,u){return a[4]?0:1}return e=l(t),r=o[e]=i[e](t),{c(){r.c(),n=ee()},l(a){r.l(a),n=ee()},m(a,u){o[e].m(a,u),H(a,n,u),s=!0},p(a,u){let h=e;e=l(a),e===h?o[e].p(a,u):(Ce(),A(o[h],1,1,()=>{o[h]=null}),Pe(),r=o[e],r?r.p(a,u):(r=o[e]=i[e](a),r.c()),I(r,1),r.m(n.parentNode,n))},i(a){s||(I(r),s=!0)},o(a){A(r),s=!1},d(a){o[e].d(a),a&&b(n)}}}function Or(t){let e,r,n,s,i,o={ctx:t,current:null,token:null,hasCatch:!1,pending:kr,then:br,catch:gr,value:4};return ke(r=t[4],o),s=new gt({props:{$$slots:{default:[Ur]},$$scope:{ctx:t}}}),{c(){e=ee(),o.block.c(),n=B(),z(s.$$.fragment)},l(l){const a=_t("svelte-a2tm1i",document.head);e=ee(),o.block.l(a),a.forEach(b),n=L(l),V(s.$$.fragment,l)},m(l,a){g(document.head,e),o.block.m(document.head,o.anchor=null),o.mount=()=>e.parentNode,o.anchor=e,H(l,n,a),X(s,l,a),i=!0},p(l,[a]){t=l,o.ctx=t,a&16&&r!==(r=t[4])&&ke(r,o)||Ke(o,t,a);const u={};a&543&&(u.$$scope={dirty:a,ctx:t}),s.$set(u)},i(l){i||(I(s.$$.fragment,l),i=!0)},o(l){A(s.$$.fragment,l),i=!1},d(l){b(e),o.block.d(),o.token=null,o=null,l&&b(n),W(s,l)}}}function Dr(t,e,r){let{$$slots:n={},$$scope:s}=e,{content:i}=e,{errors:o=null}=e,{source:l=null}=e,{isTeam:a}=e,{requestSave:u}=e;function h(p){u=p,r(0,u)}function c(p){u=p,r(0,u)}function m(p){u=p,r(0,u)}return t.$$set=p=>{"content"in p&&r(4,i=p.content),"errors"in p&&r(1,o=p.errors),"source"in p&&r(2,l=p.source),"isTeam"in p&&r(3,a=p.isTeam),"requestSave"in p&&r(0,u=p.requestSave),"$$scope"in p&&r(9,s=p.$$scope)},[u,o,l,a,i,n,h,c,m,s]}class zr extends oe{constructor(e){super(),ie(this,e,Dr,Or,ae,{content:4,errors:1,source:2,isTeam:3,requestSave:0})}}export{zr as E};
