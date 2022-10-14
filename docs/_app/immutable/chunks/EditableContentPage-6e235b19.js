import{S as re,i as se,s as oe,k as H,q as te,a as M,w as P,l as q,m as W,r as ne,h as g,c as j,x as A,n as L,a8 as Se,b as E,H as I,y as U,J as ce,u as me,g as _e,t as m,d as ge,f as _,z as $,D as et,a9 as tt,B as p,T as Y,V as J,W as Z,X as Q,$ as ae,e as X,U as nt,a0 as Be}from"./index-cc9d6004.js";import{P as rt}from"./ProtectedPage-e37b22c0.js";import{L as De}from"./Loader-eb0e0db0.js";import{p as st,i as ot,f as it}from"./auth-6dbf0ee1.js";import{e as ue,a as lt,b as at,g as ut,_ as ct,C as ft,r as ve,c as dt,S as ht,F as pt}from"./index-0f9529d3-b2b6cfcf.js";import{I as be}from"./Icon-f906670f.js";import{F as mt}from"./Casing-aa5fc666.js";import{T as _t}from"./TodoContent-fbb15758.js";/**
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
 */const Le="firebasestorage.googleapis.com",Fe="storageBucket",gt=2*60*1e3,bt=10*60*1e3;/**
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
 */class w extends pt{constructor(e,r,n=0){super(fe(e),`Firebase Storage: ${r} (${fe(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,w.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fe(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function fe(t){return"storage/"+t}function ke(){const t="An unknown error occurred, please check the error payload for server response.";return new w("unknown",t)}function kt(t){return new w("object-not-found","Object '"+t+"' does not exist.")}function wt(t){return new w("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Tt(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new w("unauthenticated",t)}function yt(){return new w("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Rt(t){return new w("unauthorized","User does not have permission to access '"+t+"'.")}function Ct(){return new w("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function St(){return new w("canceled","User canceled the upload/download.")}function vt(t){return new w("invalid-url","Invalid URL '"+t+"'.")}function Et(t){return new w("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Pt(){return new w("no-default-bucket","No default bucket found. Did you set the '"+Fe+"' property when initializing the app?")}function At(){return new w("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ut(){return new w("no-download-url","The given file does not have any download URLs.")}function he(t){return new w("invalid-argument",t)}function Ne(){return new w("app-deleted","The Firebase app was deleted.")}function $t(t){return new w("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ee(t,e){return new w("invalid-format","String does not match format '"+t+"': "+e)}function x(t){throw new w("internal-error","Internal error: "+t)}/**
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
 */class O{constructor(e,r){this.bucket=e,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,r){let n;try{n=O.makeFromUrl(e,r)}catch{return new O(e,"")}if(n.path==="")return n;throw Et(e)}static makeFromUrl(e,r){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(f){f.path.charAt(f.path.length-1)==="/"&&(f.path_=f.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(f){f.path_=decodeURIComponent(f.path)}const c="v[A-Za-z0-9_]+",d=r.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",b=new RegExp(`^https?://${d}/${c}/b/${s}/o${y}`,"i"),R={bucket:1,path:3},B=r===Le?"(?:storage.googleapis.com|storage.cloud.google.com)":r,C="([^?#]*)",h=new RegExp(`^https?://${B}/${s}/${C}`,"i"),S=[{regex:a,indices:l,postModify:i},{regex:b,indices:R,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let f=0;f<S.length;f++){const k=S[f],D=k.regex.exec(e);if(D){const F=D[k.indices.bucket];let K=D[k.indices.path];K||(K=""),n=new O(F,K),k.postModify(n);break}}if(n==null)throw vt(e);return n}}class It{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ot(t,e,r){let n=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...C){u||(u=!0,e.apply(null,C))}function d(C){s=setTimeout(()=>{s=null,t(b,l())},C)}function y(){i&&clearTimeout(i)}function b(C,...h){if(u){y();return}if(C){y(),c.call(null,C,...h);return}if(l()||o){y(),c.call(null,C,...h);return}n<64&&(n*=2);let S;a===1?(a=2,S=0):S=(n+Math.random())*1e3,d(S)}let R=!1;function B(C){R||(R=!0,y(),!u&&(s!==null?(C||(a=2),clearTimeout(s),d(0)):C||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,B(!0)},r),B}function Bt(t){t(!1)}/**
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
 */function Dt(t){return t!==void 0}function Lt(t){return typeof t=="object"&&!Array.isArray(t)}function we(t){return typeof t=="string"||t instanceof String}function Ee(t){return Te()&&t instanceof Blob}function Te(){return typeof Blob<"u"}function Pe(t,e,r,n){if(n<e)throw he(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>r)throw he(`Invalid value for '${t}'. Expected ${r} or less.`)}/**
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
 */function ye(t,e,r){let n=e;return r==null&&(n=`https://${e}`),`${r}://${n}/v0${t}`}function Me(t){const e=encodeURIComponent;let r="?";for(const n in t)if(t.hasOwnProperty(n)){const s=e(n)+"="+e(t[n]);r=r+s+"&"}return r=r.slice(0,-1),r}/**
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
 */var V;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(V||(V={}));/**
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
 */function Ft(t,e){const r=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return r||s||i}/**
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
 */class Nt{constructor(e,r,n,s,i,o,a,l,u,c,d,y=!0){this.url_=e,this.method_=r,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,R)=>{this.resolve_=b,this.reject_=R,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new ie(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===V.NO_ERROR,l=i.getStatus();if((!a||Ft(l,this.additionalRetryCodes_))&&this.retry){const c=i.getErrorCode()===V.ABORT;n(!1,new ie(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;n(!0,new ie(u,i))})},r=(n,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Dt(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=ke();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ne():St();o(l)}else{const l=Ct();o(l)}};this.canceled_?r(!1,new ie(!1,null,!0)):this.backoffId_=Ot(e,r,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Bt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ie{constructor(e,r,n){this.wasSuccessCode=e,this.connection=r,this.canceled=!!n}}function Mt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function jt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Ht(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zt(t,e,r,n,s,i,o=!0){const a=Me(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Ht(u,e),Mt(u,r),jt(u,i),qt(u,n),new Nt(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Wt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xt(...t){const e=Wt();if(e!==void 0){const r=new e;for(let n=0;n<t.length;n++)r.append(t[n]);return r.getBlob()}else{if(Te())return new Blob(t);throw new w("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function Vt(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}/**
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
 */function Gt(t){return atob(t)}/**
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
 */const N={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class de{constructor(e,r){this.data=e,this.contentType=r||null}}function Kt(t,e){switch(t){case N.RAW:return new de(je(e));case N.BASE64:case N.BASE64URL:return new de(He(t,e));case N.DATA_URL:return new de(Jt(e),Zt(e))}throw ke()}function je(t){const e=[];for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(r<t.length-1&&(t.charCodeAt(r+1)&64512)===56320))e.push(239,191,189);else{const i=n,o=t.charCodeAt(++r);n=65536|(i&1023)<<10|o&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Yt(t){let e;try{e=decodeURIComponent(t)}catch{throw ee(N.DATA_URL,"Malformed data URL.")}return je(e)}function He(t,e){switch(t){case N.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ee(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case N.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ee(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=Gt(e)}catch{throw ee(t,"Invalid character found")}const n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n}class qe{constructor(e){this.base64=!1,this.contentType=null;const r=e.match(/^data:([^,]+)?,/);if(r===null)throw ee(N.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=r[1]||null;n!=null&&(this.base64=Qt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function Jt(t){const e=new qe(t);return e.base64?He(N.BASE64,e.rest):Yt(e.rest)}function Zt(t){return new qe(t).contentType}function Qt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class z{constructor(e,r){let n=0,s="";Ee(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(r?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(r?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,r){if(Ee(this.data_)){const n=this.data_,s=Vt(n,e,r);return s===null?null:new z(s)}else{const n=new Uint8Array(this.data_.buffer,e,r-e);return new z(n,!0)}}static getBlob(...e){if(Te()){const r=e.map(n=>n instanceof z?n.data_:n);return new z(Xt.apply(null,r))}else{const r=e.map(o=>we(o)?Kt(N.RAW,o).data:o.data_);let n=0;r.forEach(o=>{n+=o.byteLength});const s=new Uint8Array(n);let i=0;return r.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new z(s,!0)}}uploadData(){return this.data_}}/**
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
 */function ze(t){let e;try{e=JSON.parse(t)}catch{return null}return Lt(e)?e:null}/**
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
 */function xt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function en(t,e){const r=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?r:t+"/"+r}function We(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function tn(t,e){return e}class v{constructor(e,r,n,s){this.server=e,this.local=r||e,this.writable=!!n,this.xform=s||tn}}let le=null;function nn(t){return!we(t)||t.length<2?t:We(t)}function Xe(){if(le)return le;const t=[];t.push(new v("bucket")),t.push(new v("generation")),t.push(new v("metageneration")),t.push(new v("name","fullPath",!0));function e(i,o){return nn(o)}const r=new v("name");r.xform=e,t.push(r);function n(i,o){return o!==void 0?Number(o):o}const s=new v("size");return s.xform=n,t.push(s),t.push(new v("timeCreated")),t.push(new v("updated")),t.push(new v("md5Hash",null,!0)),t.push(new v("cacheControl",null,!0)),t.push(new v("contentDisposition",null,!0)),t.push(new v("contentEncoding",null,!0)),t.push(new v("contentLanguage",null,!0)),t.push(new v("contentType",null,!0)),t.push(new v("metadata","customMetadata",!0)),le=t,le}function rn(t,e){function r(){const n=t.bucket,s=t.fullPath,i=new O(n,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:r})}function sn(t,e,r){const n={};n.type="file";const s=r.length;for(let i=0;i<s;i++){const o=r[i];n[o.local]=o.xform(n,e[o.server])}return rn(n,t),n}function Ve(t,e,r){const n=ze(e);return n===null?null:sn(t,n,r)}function on(t,e,r,n){const s=ze(e);if(s===null||!we(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const c=t.bucket,d=t.fullPath,y="/b/"+o(c)+"/o/"+o(d),b=ye(y,r,n),R=Me({alt:"media",token:u});return b+R})[0]}function ln(t,e){const r={},n=e.length;for(let s=0;s<n;s++){const i=e[s];i.writable&&(r[i.server]=t[i.local])}return JSON.stringify(r)}class Ge{constructor(e,r,n,s){this.url=e,this.method=r,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ke(t){if(!t)throw ke()}function an(t,e){function r(n,s){const i=Ve(t,s,e);return Ke(i!==null),i}return r}function un(t,e){function r(n,s){const i=Ve(t,s,e);return Ke(i!==null),on(i,s,t.host,t._protocol)}return r}function Ye(t){function e(r,n){let s;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?s=yt():s=Tt():r.getStatus()===402?s=wt(t.bucket):r.getStatus()===403?s=Rt(t.path):s=n,s.status=r.getStatus(),s.serverResponse=n.serverResponse,s}return e}function cn(t){const e=Ye(t);function r(n,s){let i=e(n,s);return n.getStatus()===404&&(i=kt(t.path)),i.serverResponse=s.serverResponse,i}return r}function fn(t,e,r){const n=e.fullServerUrl(),s=ye(n,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ge(s,i,un(t,r),o);return a.errorHandler=cn(e),a}function dn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function hn(t,e,r){const n=Object.assign({},r);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=dn(null,e)),n}function pn(t,e,r,n,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let f=0;f<2;f++)S=S+Math.random().toString().slice(2);return S}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=hn(e,n,s),c=ln(u,r),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+l+"--",b=z.getBlob(d,n,y);if(b===null)throw At();const R={name:u.fullPath},B=ye(i,t.host,t._protocol),C="POST",h=t.maxUploadRetryTime,T=new Ge(B,C,an(t,r),h);return T.urlParams=R,T.headers=o,T.body=b.uploadData(),T.errorHandler=Ye(e),T}class mn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=V.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=V.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=V.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,r,n,s){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(r,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _n extends mn{initXhr(){this.xhr_.responseType="text"}}function Je(){return new _n}/**
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
 */class G{constructor(e,r){this._service=e,r instanceof O?this._location=r:this._location=O.makeFromUrl(r,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,r){return new G(e,r)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return We(this._location.path)}get storage(){return this._service}get parent(){const e=xt(this._location.path);if(e===null)return null;const r=new O(this._location.bucket,e);return new G(this._service,r)}_throwIfRoot(e){if(this._location.path==="")throw $t(e)}}function gn(t,e,r){t._throwIfRoot("uploadBytes");const n=pn(t.storage,t._location,Xe(),new z(e,!0),r);return t.storage.makeRequestWithTokens(n,Je).then(s=>({metadata:s,ref:t}))}function bn(t){t._throwIfRoot("getDownloadURL");const e=fn(t.storage,t._location,Xe());return t.storage.makeRequestWithTokens(e,Je).then(r=>{if(r===null)throw Ut();return r})}function kn(t,e){const r=en(t._location.path,e),n=new O(t._location.bucket,r);return new G(t.storage,n)}/**
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
 */function wn(t){return/^[A-Za-z]+:\/\//.test(t)}function Tn(t,e){return new G(t,e)}function Ze(t,e){if(t instanceof Re){const r=t;if(r._bucket==null)throw Pt();const n=new G(r,r._bucket);return e!=null?Ze(n,e):n}else return e!==void 0?kn(t,e):t}function yn(t,e){if(e&&wn(e)){if(t instanceof Re)return Tn(t,e);throw he("To use ref(service, url), the first argument must be a Storage instance.")}else return Ze(t,e)}function Ae(t,e){const r=e==null?void 0:e[Fe];return r==null?null:O.makeFromBucketSpec(r,t)}function Rn(t,e,r,n={}){t.host=`${e}:${r}`,t._protocol="http";const{mockUserToken:s}=n;s&&(t._overrideAuthToken=typeof s=="string"?s:dt(s,t.app.options.projectId))}class Re{constructor(e,r,n,s,i){this.app=e,this._authProvider=r,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Le,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gt,this._maxUploadRetryTime=bt,this._requests=new Set,s!=null?this._bucket=O.makeFromBucketSpec(s,this._host):this._bucket=Ae(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=Ae(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pe("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pe("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const r=await e.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new G(this,e)}_makeRequest(e,r,n,s,i=!0){if(this._deleted)return new It(Ne());{const o=zt(e,this._appId,n,s,r,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,r){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,r,n,s).getPromise()}}const Ue="@firebase/storage",$e="0.9.11";/**
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
 */const Qe="storage";function Cn(t,e,r){return t=ue(t),gn(t,e,r)}function Sn(t){return t=ue(t),bn(t)}function vn(t,e){return t=ue(t),yn(t,e)}function En(t=ut(),e){t=ue(t);const n=lt(t,Qe).getImmediate({identifier:e}),s=at("storage");return s&&Pn(n,...s),n}function Pn(t,e,r,n={}){Rn(t,e,r,n)}function An(t,{instanceIdentifier:e}){const r=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Re(r,n,s,e,ht)}function Un(){ct(new ft(Qe,An,"PUBLIC").setMultipleInstances(!0)),ve(Ue,$e,""),ve(Ue,$e,"esm2017")}Un();const $n=En(),In=t=>e=>t($n,e),On=(t,e)=>r=>t(r,e),Bn=({blob:t,id:e,source:r=null,type:n=null,isTeam:s=!1})=>st(ot({id:e,source:r,type:n,isTeam:s}),Ln,In(vn),On(Cn,t)),Dn=async t=>Sn(await(await Bn(t)).ref),Ln=t=>(console.log(t),t);function Fn(t){let e,r;return e=new be({props:{icon:"ic:round-cloud-done",width:Ce,color:"var(--primary)"}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function Nn(t){let e,r,n,s,i;return e=new be({props:{icon:"akar-icons:triangle-alert-fill",width:Ce,color:"var(--error)"}}),{c(){P(e.$$.fragment),r=M(),n=H("p"),s=te(t[3]),this.h()},l(o){A(e.$$.fragment,o),r=j(o),n=q(o,"P",{class:!0});var a=W(n);s=ne(a,t[3]),a.forEach(g),this.h()},h(){L(n,"class","error svelte-1ot7pra")},m(o,a){U(e,o,a),E(o,r,a),E(o,n,a),I(n,s),i=!0},p(o,a){(!i||a&8)&&me(s,o[3])},i(o){i||(_(e.$$.fragment,o),i=!0)},o(o){m(e.$$.fragment,o),i=!1},d(o){$(e,o),o&&g(r),o&&g(n)}}}function Mn(t){let e,r;return e=new De({}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function jn(t){let e,r;return e=new be({props:{icon:zn,width:Ce}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function Hn(t){let e,r,n,s,i,o,a,l,u,c,d,y,b,R,B,C;a=new mt({props:{src:t[0],alt:t[1],fallback:xe}});const h=[jn,Mn,Nn,Fn],T=[];function S(f,k){return f[4]=="ready"?0:f[4]=="uploading"?1:f[4]=="failed"?2:f[4]=="finished"?3:-1}return~(c=S(t))&&(d=T[c]=h[c](t)),{c(){e=H("section"),r=H("h1"),n=te("Change "),s=te(t[1]),i=M(),o=H("div"),P(a.$$.fragment),l=M(),u=H("div"),d&&d.c(),y=M(),b=H("input"),this.h()},l(f){e=q(f,"SECTION",{class:!0});var k=W(e);r=q(k,"H1",{class:!0});var D=W(r);n=ne(D,"Change "),s=ne(D,t[1]),D.forEach(g),i=j(k),o=q(k,"DIV",{class:!0});var F=W(o);A(a.$$.fragment,F),l=j(F),u=q(F,"DIV",{class:!0});var K=W(u);d&&d.l(K),K.forEach(g),F.forEach(g),y=j(k),b=q(k,"INPUT",{type:!0,accept:!0,class:!0}),k.forEach(g),this.h()},h(){L(r,"class","svelte-1ot7pra"),L(u,"class","upload svelte-1ot7pra"),Se(u,"status",t[4]!="ready"),L(o,"class","image-uploader-container svelte-1ot7pra"),L(b,"type","file"),L(b,"accept",qn),L(b,"class","svelte-1ot7pra"),L(e,"class","svelte-1ot7pra")},m(f,k){E(f,e,k),I(e,r),I(r,n),I(r,s),I(e,i),I(e,o),U(a,o,null),I(o,l),I(o,u),~c&&T[c].m(u,null),I(e,y),I(e,b),t[13](b),R=!0,B||(C=[ce(o,"click",t[6]),ce(o,"keypress",t[6]),ce(b,"change",t[5])],B=!0)},p(f,[k]){(!R||k&2)&&me(s,f[1]);const D={};k&1&&(D.src=f[0]),k&2&&(D.alt=f[1]),a.$set(D);let F=c;c=S(f),c===F?~c&&T[c].p(f,k):(d&&(_e(),m(T[F],1,1,()=>{T[F]=null}),ge()),~c?(d=T[c],d?d.p(f,k):(d=T[c]=h[c](f),d.c()),_(d,1),d.m(u,null)):d=null),(!R||k&16)&&Se(u,"status",f[4]!="ready")},i(f){R||(_(a.$$.fragment,f),_(d),R=!0)},o(f){m(a.$$.fragment,f),m(d),R=!1},d(f){f&&g(e),$(a),~c&&T[c].d(),t[13](null),B=!1,et(C)}}}const xe="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",qn=".jpg, .jpeg, .png, .svg",zn="akar-icons:cloud-upload",Ce="3rem";function Wn(t,e,r){let{id:n}=e,{source:s=null}=e,{type:i=null}=e,{isTeam:o}=e,{src:a=xe}=e,{alt:l}=e,{dest:u="picture"}=e,{oncomplete:c=()=>{}}=e,d,y=null,b="ready";const R=async h=>{const T=h.target.files[0],S=new FileReader;S.readAsDataURL(T),S.onload=f=>{r(0,a=f.target.result)},r(4,b="uploading");try{const f=(await Dn({type:i,source:s,isTeam:o,id:`${n}/${T.name}`,blob:T})).replace("https://firebasestorage.googleapis.com/v0/b/haja-project.appspot.com/o/","");await it({type:i,id:n,source:s,isTeam:o,content:{[u]:f},timestamp:"updatedOn"}),r(4,b="finished"),c()}catch(f){r(4,b="failed"),r(3,y=f)}},B=()=>{d.click()};function C(h){tt[h?"unshift":"push"](()=>{d=h,r(2,d)})}return t.$$set=h=>{"id"in h&&r(7,n=h.id),"source"in h&&r(8,s=h.source),"type"in h&&r(9,i=h.type),"isTeam"in h&&r(10,o=h.isTeam),"src"in h&&r(0,a=h.src),"alt"in h&&r(1,l=h.alt),"dest"in h&&r(11,u=h.dest),"oncomplete"in h&&r(12,c=h.oncomplete)},[a,l,d,y,b,R,B,n,s,i,o,u,c,C]}class pe extends re{constructor(e){super(),se(this,e,Wn,Hn,oe,{id:7,source:8,type:9,isTeam:10,src:0,alt:1,dest:11,oncomplete:12})}}function Xn(t){let e,r,n;const s=t[4].default,i=Y(s,t,t[3],null);return r=new pe({props:{src:t[0].picture,alt:"background",id:t[2],source:Vn,isTeam:t[1]}}),{c(){i&&i.c(),e=M(),P(r.$$.fragment)},l(o){i&&i.l(o),e=j(o),A(r.$$.fragment,o)},m(o,a){i&&i.m(o,a),E(o,e,a),U(r,o,a),n=!0},p(o,[a]){i&&i.p&&(!n||a&8)&&J(i,s,o,o[3],n?Q(s,o[3],a,null):Z(o[3]),null);const l={};a&1&&(l.src=o[0].picture),a&2&&(l.isTeam=o[1]),r.$set(l)},i(o){n||(_(i,o),_(r.$$.fragment,o),n=!0)},o(o){m(i,o),m(r.$$.fragment,o),n=!1},d(o){i&&i.d(o),o&&g(e),$(r,o)}}}const Vn=null;function Gn(t,e,r){let{$$slots:n={},$$scope:s}=e,{team:i}=e,{isTeam:o}=e;const{id:a}=i;return t.$$set=l=>{"team"in l&&r(0,i=l.team),"isTeam"in l&&r(1,o=l.isTeam),"$$scope"in l&&r(3,s=l.$$scope)},[i,o,a,s,n]}class Kn extends re{constructor(e){super(),se(this,e,Gn,Xn,oe,{team:0,isTeam:1})}}function Yn(t){let e,r,n;const s=t[4].default,i=Y(s,t,t[3],null);return r=new _t({props:{todo:t[0],source:t[1],isTeam:t[2]}}),{c(){i&&i.c(),e=M(),P(r.$$.fragment)},l(o){i&&i.l(o),e=j(o),A(r.$$.fragment,o)},m(o,a){i&&i.m(o,a),E(o,e,a),U(r,o,a),n=!0},p(o,[a]){i&&i.p&&(!n||a&8)&&J(i,s,o,o[3],n?Q(s,o[3],a,null):Z(o[3]),null);const l={};a&1&&(l.todo=o[0]),a&2&&(l.source=o[1]),a&4&&(l.isTeam=o[2]),r.$set(l)},i(o){n||(_(i,o),_(r.$$.fragment,o),n=!0)},o(o){m(i,o),m(r.$$.fragment,o),n=!1},d(o){i&&i.d(o),o&&g(e),$(r,o)}}}function Jn(t,e,r){let{$$slots:n={},$$scope:s}=e,{todo:i}=e,{source:o=null}=e,{isTeam:a}=e;return t.$$set=l=>{"todo"in l&&r(0,i=l.todo),"source"in l&&r(1,o=l.source),"isTeam"in l&&r(2,a=l.isTeam),"$$scope"in l&&r(3,s=l.$$scope)},[i,o,a,s,n]}class Zn extends re{constructor(e){super(),se(this,e,Jn,Yn,oe,{todo:0,source:1,isTeam:2})}}function Qn(t){let e,r,n,s,i;const o=t[4].default,a=Y(o,t,t[3],null);return r=new pe({props:{src:t[0].picture,alt:"profile",id:t[2],source:Ie,isTeam:t[1]}}),s=new pe({props:{src:t[0].background,dest:"background",alt:"background",id:t[2],source:Ie,isTeam:t[1]}}),{c(){a&&a.c(),e=M(),P(r.$$.fragment),n=M(),P(s.$$.fragment)},l(l){a&&a.l(l),e=j(l),A(r.$$.fragment,l),n=j(l),A(s.$$.fragment,l)},m(l,u){a&&a.m(l,u),E(l,e,u),U(r,l,u),E(l,n,u),U(s,l,u),i=!0},p(l,[u]){a&&a.p&&(!i||u&8)&&J(a,o,l,l[3],i?Q(o,l[3],u,null):Z(l[3]),null);const c={};u&1&&(c.src=l[0].picture),u&2&&(c.isTeam=l[1]),r.$set(c);const d={};u&1&&(d.src=l[0].background),u&2&&(d.isTeam=l[1]),s.$set(d)},i(l){i||(_(a,l),_(r.$$.fragment,l),_(s.$$.fragment,l),i=!0)},o(l){m(a,l),m(r.$$.fragment,l),m(s.$$.fragment,l),i=!1},d(l){a&&a.d(l),l&&g(e),$(r,l),l&&g(n),$(s,l)}}}const Ie=null;function xn(t,e,r){let{$$slots:n={},$$scope:s}=e,{user:i}=e,{isTeam:o}=e;const{id:a}=i;return t.$$set=l=>{"user"in l&&r(0,i=l.user),"isTeam"in l&&r(1,o=l.isTeam),"$$scope"in l&&r(3,s=l.$$scope)},[i,o,a,s,n]}class er extends re{constructor(e){super(),se(this,e,xn,Qn,oe,{user:0,isTeam:1})}}function tr(t){return{c:p,l:p,m:p,p,d:p}}function nr(t){let e,r=t[3]&&Oe(t);return{c(){r&&r.c(),e=X()},l(n){r&&r.l(n),e=X()},m(n,s){r&&r.m(n,s),E(n,e,s)},p(n,s){n[3]?r||(r=Oe(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(n){r&&r.d(n),n&&g(e)}}}function Oe(t){return document.title="Edit | "+t[3].title+" | Haja: Do Together",{c:p,l:p,m:p,d:p}}function rr(t){return{c:p,l:p,m:p,p,d:p}}function sr(t){var a;let e,r=((a=t[0])!=null?a:"Sorry, we can't find what you're looking for \u{1F50E}")+"",n,s,i,o;return{c(){e=H("p"),n=te(r),s=M(),i=H("p"),o=te("You may need to login to view this content"),this.h()},l(l){e=q(l,"P",{class:!0});var u=W(e);n=ne(u,r),u.forEach(g),s=j(l),i=q(l,"P",{class:!0});var c=W(i);o=ne(c,"You may need to login to view this content"),c.forEach(g),this.h()},h(){L(e,"class","svelte-1r5qp33"),L(i,"class","svelte-1r5qp33")},m(l,u){E(l,e,u),I(e,n),E(l,s,u),E(l,i,u),I(i,o)},p(l,u){var c;u&1&&r!==(r=((c=l[0])!=null?c:"Sorry, we can't find what you're looking for \u{1F50E}")+"")&&me(n,r)},i:p,o:p,d(l){l&&g(e),l&&g(s),l&&g(i)}}}function or(t){let e,r,n,s={ctx:t,current:null,token:null,hasCatch:!1,pending:pr,then:lr,catch:ir,value:3,blocks:[,,,]};return ae(r=t[3],s),{c(){e=X(),s.block.c()},l(i){e=X(),s.block.l(i)},m(i,o){E(i,e,o),s.block.m(i,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,n=!0},p(i,o){t=i,s.ctx=t,o&8&&r!==(r=t[3])&&ae(r,s)||Be(s,t,o)},i(i){n||(_(s.block),n=!0)},o(i){for(let o=0;o<3;o+=1){const a=s.blocks[o];m(a)}n=!1},d(i){i&&g(e),s.block.d(i),s.token=null,s=null}}}function ir(t){return{c:p,l:p,m:p,p,i:p,o:p,d:p}}function lr(t){let e,r,n,s;const i=[cr,ur,ar],o=[];function a(l,u){return l[3].contentType=="team"?0:l[3].contentType=="user"?1:l[3].contentType=="todo"?2:-1}return~(r=a(t))&&(n=o[r]=i[r](t)),{c(){e=H("div"),n&&n.c(),this.h()},l(l){e=q(l,"DIV",{class:!0});var u=W(e);n&&n.l(u),u.forEach(g),this.h()},h(){L(e,"class","edit svelte-1r5qp33")},m(l,u){E(l,e,u),~r&&o[r].m(e,null),s=!0},p(l,u){let c=r;r=a(l),r===c?~r&&o[r].p(l,u):(n&&(_e(),m(o[c],1,1,()=>{o[c]=null}),ge()),~r?(n=o[r],n?n.p(l,u):(n=o[r]=i[r](l),n.c()),_(n,1),n.m(e,null)):n=null)},i(l){s||(_(n),s=!0)},o(l){m(n),s=!1},d(l){l&&g(e),~r&&o[r].d()}}}function ar(t){let e,r;return e=new Zn({props:{todo:t[3],source:t[1],isTeam:t[2],$$slots:{default:[fr]},$$scope:{ctx:t}}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p(n,s){const i={};s&8&&(i.todo=n[3]),s&2&&(i.source=n[1]),s&4&&(i.isTeam=n[2]),s&32&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function ur(t){let e,r;return e=new er({props:{user:t[3],isTeam:t[2],$$slots:{default:[dr]},$$scope:{ctx:t}}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p(n,s){const i={};s&8&&(i.user=n[3]),s&4&&(i.isTeam=n[2]),s&32&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function cr(t){let e,r;return e=new Kn({props:{team:t[3],isTeam:t[2],$$slots:{default:[hr]},$$scope:{ctx:t}}}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p(n,s){const i={};s&8&&(i.team=n[3]),s&4&&(i.isTeam=n[2]),s&32&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function fr(t){let e;const r=t[4].default,n=Y(r,t,t[5],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&32)&&J(n,r,s,s[5],e?Q(r,s[5],i,null):Z(s[5]),null)},i(s){e||(_(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function dr(t){let e;const r=t[4].default,n=Y(r,t,t[5],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&32)&&J(n,r,s,s[5],e?Q(r,s[5],i,null):Z(s[5]),null)},i(s){e||(_(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function hr(t){let e;const r=t[4].default,n=Y(r,t,t[5],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&32)&&J(n,r,s,s[5],e?Q(r,s[5],i,null):Z(s[5]),null)},i(s){e||(_(n,s),e=!0)},o(s){m(n,s),e=!1},d(s){n&&n.d(s)}}}function pr(t){let e,r;return e=new De({}),{c(){P(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){m(e.$$.fragment,n),r=!1},d(n){$(e,n)}}}function mr(t){let e,r,n,s;const i=[or,sr],o=[];function a(l,u){return l[3]?0:1}return e=a(t),r=o[e]=i[e](t),{c(){r.c(),n=X()},l(l){r.l(l),n=X()},m(l,u){o[e].m(l,u),E(l,n,u),s=!0},p(l,u){let c=e;e=a(l),e===c?o[e].p(l,u):(_e(),m(o[c],1,1,()=>{o[c]=null}),ge(),r=o[e],r?r.p(l,u):(r=o[e]=i[e](l),r.c()),_(r,1),r.m(n.parentNode,n))},i(l){s||(_(r),s=!0)},o(l){m(r),s=!1},d(l){o[e].d(l),l&&g(n)}}}function _r(t){let e,r,n,s,i,o={ctx:t,current:null,token:null,hasCatch:!1,pending:rr,then:nr,catch:tr,value:3};return ae(r=t[3],o),s=new rt({props:{$$slots:{default:[mr]},$$scope:{ctx:t}}}),{c(){e=X(),o.block.c(),n=M(),P(s.$$.fragment)},l(a){const l=nt("svelte-a2tm1i",document.head);e=X(),o.block.l(l),l.forEach(g),n=j(a),A(s.$$.fragment,a)},m(a,l){I(document.head,e),o.block.m(document.head,o.anchor=null),o.mount=()=>e.parentNode,o.anchor=e,E(a,n,l),U(s,a,l),i=!0},p(a,[l]){t=a,o.ctx=t,l&8&&r!==(r=t[3])&&ae(r,o)||Be(o,t,l);const u={};l&47&&(u.$$scope={dirty:l,ctx:t}),s.$set(u)},i(a){i||(_(s.$$.fragment,a),i=!0)},o(a){m(s.$$.fragment,a),i=!1},d(a){g(e),o.block.d(),o.token=null,o=null,a&&g(n),$(s,a)}}}function gr(t,e,r){let{$$slots:n={},$$scope:s}=e,{content:i}=e,{errors:o=null}=e,{source:a=null}=e,{isTeam:l}=e;return t.$$set=u=>{"content"in u&&r(3,i=u.content),"errors"in u&&r(0,o=u.errors),"source"in u&&r(1,a=u.source),"isTeam"in u&&r(2,l=u.isTeam),"$$scope"in u&&r(5,s=u.$$scope)},[o,a,l,i,n,s]}class vr extends re{constructor(e){super(),se(this,e,gr,_r,oe,{content:3,errors:0,source:1,isTeam:2})}}export{vr as E};
