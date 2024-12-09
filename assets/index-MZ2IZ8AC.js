(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const de=(e,t)=>e===t,ce=Symbol("solid-track"),F={equals:de};let Z=ie;const k=1,_=2,ee={owned:null,cleanups:null,context:null,owner:null};var N=null;let W=null,ae=null,w=null,E=null,A=null,R=0;function v(e,t){const n=w,o=N,i=e.length===0,r=t===void 0?o:t,c=i?ee:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=i?e:()=>e(()=>D(()=>K(c)));N=c,w=null;try{return z(s,!0)}finally{w=n,N=o}}function L(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=i=>(typeof i=="function"&&(i=i(n.value)),oe(n,i));return[te.bind(n),o]}function O(e,t,n){const o=V(e,t,!1,k);G(o)}function fe(e,t,n){Z=ge;const o=V(e,t,!1,k);(!n||!n.render)&&(o.user=!0),A?A.push(o):G(o)}function $(e,t,n){n=n?Object.assign({},F,n):F;const o=V(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,G(o),te.bind(o)}function D(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function ue(e){fe(()=>D(e))}function ne(e){return N===null||(N.cleanups===null?N.cleanups=[e]:N.cleanups.push(e)),e}function te(){if(this.sources&&this.state)if(this.state===k)G(this);else{const e=E;E=null,z(()=>H(this),!1),E=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function oe(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&z(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],c=W&&W.running;c&&W.disposed.has(r),(c?!r.tState:!r.state)&&(r.pure?E.push(r):A.push(r),r.observers&&re(r)),c||(r.state=k)}if(E.length>1e6)throw E=[],new Error},!1)),t}function G(e){if(!e.fn)return;K(e);const t=R;pe(e,e.value,t)}function pe(e,t,n){let o;const i=N,r=w;w=N=e;try{o=e.fn(t)}catch(c){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(K),e.owned=null),e.updatedAt=n+1,se(c)}finally{w=r,N=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,o):e.value=o,e.updatedAt=n)}function V(e,t,n,o=k,i){const r={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:N,context:N?N.context:null,pure:n};return N===null||N!==ee&&(N.owned?N.owned.push(r):N.owned=[r]),r}function U(e){if(e.state===0)return;if(e.state===_)return H(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)G(e);else if(e.state===_){const o=E;E=null,z(()=>H(e,t[0]),!1),E=o}}function z(e,t){if(E)return e();let n=!1;t||(E=[]),A?n=!0:A=[],R++;try{const o=e();return he(n),o}catch(o){n||(A=null),E=null,se(o)}}function he(e){if(E&&(ie(E),E=null),e)return;const t=A;A=null,t.length&&z(()=>Z(t),!1)}function ie(e){for(let t=0;t<e.length;t++)U(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:U(o)}for(t=0;t<n;t++)U(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const i=o.state;i===k?o!==t&&(!o.updatedAt||o.updatedAt<R)&&U(o):i===_&&H(o,t)}}}function re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=_,n.pure?E.push(n):A.push(n),n.observers&&re(n))}}function K(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),c=n.observerSlots.pop();o<i.length&&(r.sourceSlots[c]=o,i[o]=r,n.observerSlots[o]=c)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)K(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ye(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function se(e,t=N){throw ye(e)}const me=Symbol("fallback");function Q(e){for(let t=0;t<e.length;t++)e[t]()}function be(e,t,n={}){let o=[],i=[],r=[],c=0,s=t.length>1?[]:null;return ne(()=>Q(r)),()=>{let g=e()||[],m,f;return g[ce],D(()=>{let p=g.length,h,l,a,d,y,b,C,x,B;if(p===0)c!==0&&(Q(r),r=[],o=[],i=[],c=0,s&&(s=[])),n.fallback&&(o=[me],i[0]=v(le=>(r[0]=le,n.fallback())),c=1);else if(c===0){for(i=new Array(p),f=0;f<p;f++)o[f]=g[f],i[f]=v(u);c=p}else{for(a=new Array(p),d=new Array(p),s&&(y=new Array(p)),b=0,C=Math.min(c,p);b<C&&o[b]===g[b];b++);for(C=c-1,x=p-1;C>=b&&x>=b&&o[C]===g[x];C--,x--)a[x]=i[C],d[x]=r[C],s&&(y[x]=s[C]);for(h=new Map,l=new Array(x+1),f=x;f>=b;f--)B=g[f],m=h.get(B),l[f]=m===void 0?-1:m,h.set(B,f);for(m=b;m<=C;m++)B=o[m],f=h.get(B),f!==void 0&&f!==-1?(a[f]=i[m],d[f]=r[m],s&&(y[f]=s[m]),f=l[f],h.set(B,f)):r[m]();for(f=b;f<p;f++)f in a?(i[f]=a[f],r[f]=d[f],s&&(s[f]=y[f],s[f](f))):i[f]=v(u);i=i.slice(0,c=p),o=g.slice(0)}return i});function u(p){if(r[f]=p,s){const[h,l]=L(f);return s[f]=l,t(g[f],h)}return t(g[f])}}}function T(e,t){return D(()=>e(t||{}))}const Ce=e=>`Stale read from <${e}>.`;function X(e){const t="fallback"in e&&{fallback:()=>e.fallback};return $(be(()=>e.each,e.children,t||void 0))}function we(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(o,i)=>t?o===i:!o==!i});return $(()=>{const o=n();if(o){const i=e.children;return typeof i=="function"&&i.length>0?D(()=>i(t?o:()=>{if(!D(n))throw Ce("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Ne(e,t,n){let o=n.length,i=t.length,r=o,c=0,s=0,g=t[i-1].nextSibling,m=null;for(;c<i||s<r;){if(t[c]===n[s]){c++,s++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===c){const f=r<o?s?n[s-1].nextSibling:n[r-s]:g;for(;s<r;)e.insertBefore(n[s++],f)}else if(r===s)for(;c<i;)(!m||!m.has(t[c]))&&t[c].remove(),c++;else if(t[c]===n[r-1]&&n[s]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[s++],t[c++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!m){m=new Map;let u=s;for(;u<r;)m.set(n[u],u++)}const f=m.get(t[c]);if(f!=null)if(s<f&&f<r){let u=c,p=1,h;for(;++u<i&&u<r&&!((h=m.get(t[u]))==null||h!==f+p);)p++;if(p>f-s){const l=t[c];for(;s<f;)e.insertBefore(n[s++],l)}else e.replaceChild(n[s++],t[c++])}else c++;else t[c++].remove()}}}const J="_$DX_DELEGATE";function Ee(e,t,n,o={}){let i;return v(r=>{i=r,t===document?e():I(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{i(),t.textContent=""}}function q(e,t,n){let o;const i=()=>{const c=document.createElement("template");return c.innerHTML=e,n?c.content.firstChild.firstChild:c.content.firstChild},r=t?()=>D(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return r.cloneNode=r,r}function xe(e,t=window.document){const n=t[J]||(t[J]=new Set);for(let o=0,i=e.length;o<i;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,Be))}}function S(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function I(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return M(e,t,o,n);O(i=>M(e,t(),i,n),o)}function Be(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const o=n[t];if(o&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?o.call(n,i,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function M(e,t,n,o,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,c=o!==void 0;if(e=c&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),c){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=P(e,n,o,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=P(e,n,o);else{if(r==="function")return O(()=>{let s=t();for(;typeof s=="function";)s=s();n=M(e,s,n,o)}),()=>n;if(Array.isArray(t)){const s=[],g=n&&Array.isArray(n);if(j(s,t,n,i))return O(()=>n=M(e,s,n,o,!0)),()=>n;if(s.length===0){if(n=P(e,n,o),c)return n}else g?n.length===0?Y(e,s,o):Ne(e,n,s):(n&&P(e),Y(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(c)return n=P(e,n,o,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function j(e,t,n,o){let i=!1;for(let r=0,c=t.length;r<c;r++){let s=t[r],g=n&&n[r],m;if(!(s==null||s===!0||s===!1))if((m=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))i=j(e,s,g)||i;else if(m==="function")if(o){for(;typeof s=="function";)s=s();i=j(e,Array.isArray(s)?s:[s],Array.isArray(g)?g:[g])||i}else e.push(s),i=!0;else{const f=String(s);g&&g.nodeType===3&&g.data===f?e.push(g):e.push(document.createTextNode(f))}}return i}function Y(e,t,n=null){for(let o=0,i=t.length;o<i;o++)e.insertBefore(t[o],n)}function P(e,t,n,o){if(n===void 0)return e.textContent="";const i=o||document.createTextNode("");if(t.length){let r=!1;for(let c=t.length-1;c>=0;c--){const s=t[c];if(i!==s){const g=s.parentNode===e;!r&&!c?g?e.replaceChild(i,s):e.insertBefore(i,n):g&&s.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var Ae=q('<div><ul id=parents-group tabindex=0><span> belongs to </span></ul><ul tabindex=0 id=option-nodes></ul><br><ul id=home tabindex=0 aria-live=assertive></ul><ul id=undo-text tabindex=0 aria-label="Pressing Undo"><span>Pressing Undo'),$e=q("<li tabindex=0><span aria-hidden=true> group"),De=q("<li>None"),ke=q("<li tabindex=0><span aria-hidden=true>");function Se(e){const[t,n]=L(e.nodeGraph[0].id),[o,i]=L(["0"]),[r,c]=L(new Map),s=$(()=>t()!==null?e.nodeGraph[t()]:e.nodeGraph[0]),g=u=>{if(o().length===1)return[];{const p=o()[o().length-2];return e.nodeGraph[p].children.filter(a=>a!==u)}},m=(u,p,h)=>{if(u==="-1"||p==="-1"||!u||!p)return;const l=g(u);let a=p;if(l.includes(p)){const d=o();d.pop(),i([...d,p])}else if(p===u){const d=e.nodeGraph[p].children;if(d.length>0){const y=d[0];i([...o(),y]),a=y}}else if(e.nodeGraph[u].parents.includes(p)&&h){const d=r().get(p);i([...d??["0"]])}else if(e.nodeGraph[u].parents.includes(p)&&!h){const d=o();d.pop(),d.pop(),i([...d,p,u]),a=u}n(a),setTimeout(()=>{const d=document.getElementById(`info-${a}`);d&&(d.hasAttribute("tabindex")||d.setAttribute("tabindex","0"),d.focus())},0)},f=u=>{if(u.key==="ArrowUp"&&u.shiftKey){const h=document.activeElement?.id,l=o();if(h==="parents-group")if(console.log("trying to select current parent node in focus"),l.length==2){l.pop();const a=l[l.length-1];if(a){i([...l]),n(a);const d=document.getElementById(`info-${a}`);d&&d.focus()}}else if(l.length>2){l.pop();const a=l[l.length-1],d=l[l.length-2];if(d&&e.nodeGraph[a].parents.includes(d))i([...l]),n(a);else{const b=r().get(a);i([...b??["0"]]),n(a)}const y=document.getElementById(`info-${a}`);y&&y.focus()}else document.getElementById("parents-group")?.focus();else if(h.startsWith("context-")){console.log("trying to select new node in focus"),l.pop(),l.pop();const a=h.split("-")[3],d=l[l.length-1];if(d&&e.nodeGraph[a].parents.includes(d))i([...l,a]),n(a);else{const b=r().get(a);i([...b??["0"]]),n(a)}const y=document.getElementById(`info-${a}`);y&&y.focus()}else if(e.nodeGraph[l[l.length-1]].parents.length===1)if(l.length==2){l.pop();const d=l[l.length-1];if(d){i([...l]),n(d);const y=document.getElementById(`info-${d}`);y&&y.focus()}}else if(l.length>2){l.pop();const d=l[l.length-1],y=l[l.length-2];if(y&&e.nodeGraph[d].parents.includes(y))i([...l]),n(d);else{const C=r().get(d);i([...C??["0"]]),n(d)}const b=document.getElementById(`info-${d}`);b&&b.focus()}else document.getElementById("parents-group")?.focus();else document.getElementById("parents-group")?.focus();u.preventDefault()}else if(u.key==="ArrowDown"&&u.shiftKey){if((document.activeElement?.id).startsWith("parents")){const l=document.getElementById(`info-${t()}`);l&&l.focus()}else{const l=e.nodeGraph[t()].children[0];if(l){i(d=>[...d,l]),n(l);const a=document.getElementById(`info-${l}`);a&&a.focus()}}u.preventDefault()}else if(u.key==="h"){const p=document.getElementById("home"),h=o()[o().length-1],l=document.getElementById(`info-${h}`);l?l.focus():p?.focus()}else if(u.key==="Backspace")i(p=>{const h=[...p];h.pop();const l=h[h.length-1];if(l){const a=document.getElementById("undo-text");a&&a.focus(),n(l),setTimeout(()=>{const d=document.getElementById(`info-${l}`);d&&d.focus()},1e3)}return h});else if(u.key==="ArrowLeft"||u.key==="ArrowRight"||u.key==="ArrowUp"||u.key==="ArrowDown"){const p=document.activeElement,h=p?.id;if(h.startsWith("info-")||h==="home"){const l=Array.from(document.querySelectorAll("#home li")),a=l.indexOf(p);let d=a;(u.key==="ArrowLeft"||u.key==="ArrowUp")&&a>0?d=a-1:(u.key==="ArrowRight"||u.key==="ArrowDown")&&a<l.length-1&&(d=a+1);const y=l[d]?.id.split("info-")[1];if(y){const b=o();b.pop(),i([...b,y]),n(y)}l[d]?.focus(),u.preventDefault()}else if(h.startsWith("context")){const l=Array.from(document.querySelectorAll("#parent-context li")),a=l.indexOf(p);let d=a;console.log(a),(u.key==="ArrowLeft"||u.key==="ArrowUp")&&a>0?(d=a-1,l[d]?.focus()):(u.key==="ArrowRight"||u.key==="ArrowDown")&&a<l.length-1?(d=a+1,l[d]?.focus()):((u.key==="ArrowLeft"||u.key==="ArrowUp")&&a<=0||(u.key==="ArrowRight"||u.key==="ArrowDown")&&a>=l.length-1)&&document.getElementById("parents-group")?.focus(),u.preventDefault()}else h==="parents-group"&&Array.from(document.querySelectorAll("#option-nodes li"))[0]?.focus(),u.preventDefault()}else if(u.key==="Enter"){const h=document.activeElement?.id;if(h.startsWith("info-")){const l=e.nodeGraph[t()].children[0];if(l){i(d=>[...d,l]),n(l);const a=document.getElementById(`info-${l}`);a&&a.focus()}}else if(h.startsWith("context")){const l=h.split("-")[3];let a=o();a.pop(),a.pop(),i(y=>[...a,l,t()]),n(t());const d=document.getElementById(`info-${t()}`);d&&d.focus()}else u.preventDefault()}else u.preventDefault()};return ue(()=>{const u=Pe(e.nodeGraph);c(u),window.addEventListener("keydown",f)}),ne(()=>{window.removeEventListener("keydown",f)}),T(we,{get when(){return t()},get children(){return T(Ie,{get history(){return o()},get parentFocusId(){return $(()=>o().length>1)()?o()[o().length-2]:"-1"},get node(){return s()},get nodeGraph(){return e.nodeGraph},onNodeClick:m})}})}function Ie(e){function t(r){if(e.history.length==1)return[r];{const c=e.history[e.history.length-2];return e.nodeGraph[c].children}}const n=$(()=>{const r=t(e.node.id);return Array.from(r).map(s=>e.nodeGraph[s]).sort((s,g)=>{const m=s.priority-g.priority;return m!==0?m:Number(s.id)-Number(g.id)})}),o=$(()=>{const r=e.node.parents;return e.history.length==1?[]:r.filter(s=>s!==e.parentFocusId)}),i=$(()=>o().map(r=>e.nodeGraph[r]));return(()=>{var r=Ae(),c=r.firstChild,s=c.firstChild,g=s.firstChild,m=c.nextSibling,f=m.nextSibling,u=f.nextSibling,p=u.nextSibling,h=p.firstChild;return s.$$click=()=>e.onNodeClick(e.node.id,e.parentFocusId,!0),S(s,"aria-hidden",!0),s.style.setProperty("font-weight","bold"),I(s,()=>e.node.displayName,g),I(s,()=>e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName,null),I(m,T(X,{get each(){return i()},children:(l,a)=>(()=>{var d=$e(),y=d.firstChild,b=y.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,l.id,!1),I(y,()=>l.displayName,b),O(C=>{var x=`context-${e.node.id}-${a()}-${l.id}`,B=`${a()+1} of ${o().length}. ${l.displayName} group. Press Enter to select this grouping.`;return x!==C.e&&S(d,"id",C.e=x),B!==C.t&&S(d,"aria-label",C.t=B),C},{e:void 0,t:void 0}),d})()})),I(u,T(X,{get each(){return n()},get fallback(){return(()=>{var l=De();return l.style.setProperty("color","grey"),l})()},children:(l,a)=>(()=>{var d=ke(),y=d.firstChild;return d.$$click=()=>e.onNodeClick(e.node.id,l.id),I(y,()=>`${l.displayName}; ${l.descriptionTokens?.longDescription}`),O(b=>{var C=`${a()+1} of ${n().length}. ${l.displayName}; ${l.descriptionTokens?.longDescription}`,x=`info-${l.id}`;return C!==b.e&&S(d,"aria-label",b.e=C),x!==b.t&&S(d,"id",b.t=x),b},{e:void 0,t:void 0}),d})()})),h.style.setProperty("font-weight","bold"),S(h,"aria-hidden",!0),O(()=>S(c,"aria-label",o().length===0?`${e.parentFocusId==="-1"?"No current groupings.":`Currently grouping by ${e.nodeGraph[e.parentFocusId].displayName}. `} ${e.node.displayName} belongs to 0 additional groups.`:`Currently grouping by ${e.nodeGraph[e.parentFocusId].displayName}. ${e.node.displayName} belongs to ${o().length} additional groups. Use arrow and enter keys to make selection.`)),r})()}function Pe(e,t="0"){const n=new Map,o=[[t,[t]]];for(;o.length>0;){const[i,r]=o.shift();if(n.has(i))continue;n.set(i,r);const c=e[i].children;for(const s of c)n.has(s)||o.push([s,[...r,s]])}return n}xe(["click"]);const Oe={0:{id:"0",displayName:"Aspirin",description:"Chemical diagram for aspirin. Contains benzene, ester, and carboxylic acid.",descriptionTokens:{label:"Aspirin",shortDescription:"Chemical diagram for aspirin. Contains benzene ring, ester, and carboxylic acid.",longDescription:"Molecule containing benzene ring, ester, and carboxylic acid."},parents:[],children:["1","2","3"],priority:0},1:{id:"1",displayName:"Benzene",description:"Benzene ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",descriptionTokens:{label:"Benzene",shortDescription:"Benzene ring with 6 carbons.",longDescription:"Ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid)."},parents:["0"],children:["4","5","6","7","8","9"],priority:1},2:{id:"2",displayName:"Ester",description:"Ester group bonded to C1 of benzene ring.",descriptionTokens:{label:"Ester",shortDescription:"Ester group bonded to C1 of benzene ring.",longDescription:"Group bonded to C1 of benzene ring."},parents:["0"],children:["4","10","11","12","13"],priority:2},3:{id:"3",displayName:"Carboxylic acid",description:"Carboxylic acid group bonded to C2 of benzene ring.",descriptionTokens:{label:"Carboxylic acid",shortDescription:"Carboxylic acid group bonded to C2 of benzene ring.",longDescription:"Group bonded to C2 of benzene ring."},parents:["0"],children:["5","14","15","16"],priority:2},4:{id:"4",displayName:"C1",description:"Bonded to C2 and C6 of benzene and O1 of ester.",descriptionTokens:{label:"C1",shortDescription:"Bonded to C2 and C6 of benzene and O1 of ester.",longDescription:"Bonded to C2 and C6 of benzene and O1 of ester."},parents:["1","2"],children:[],priority:2},5:{id:"5",displayName:"C2",description:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",descriptionTokens:{label:"C2",shortDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",longDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid."},parents:["1","3"],children:[],priority:2},6:{id:"6",displayName:"C3",description:"Bonded to C2 and C4 of benzene.",descriptionTokens:{label:"C3",shortDescription:"Bonded to C2 and C4 of benzene.",longDescription:"Bonded to C2 and C4 of benzene."},parents:["1"],children:[],priority:2},7:{id:"7",displayName:"C4",description:"Bonded to C3 and C5 of benzene.",descriptionTokens:{label:"C4",shortDescription:"Bonded to C3 and C5 of benzene.",longDescription:"Bonded to C3 and C5 of benzene."},parents:["1"],children:[],priority:2},8:{id:"8",displayName:"C5",description:"Bonded to C4 and C6 of benzene.",descriptionTokens:{label:"C5",shortDescription:"Bonded to C4 and C6 of benzene.",longDescription:"Bonded to C4 and C6 of benzene."},parents:["1"],children:[],priority:2},9:{id:"9",displayName:"C6",description:"Bonded to C1 and C5 of benzene.",descriptionTokens:{label:"C6",shortDescription:"Bonded to C1 and C5 of benzene.",longDescription:"Bonded to C1 and C5 of benzene."},parents:["1"],children:[],priority:2},10:{id:"10",displayName:"O1",description:"Bonded to C1 of benzene and C7 of ester.",descriptionTokens:{label:"O1",shortDescription:"Bonded to C1 of benzene and C7 of ester.",longDescription:"Bonded to C1 of benzene and C7 of ester."},parents:["2"],children:[],priority:3},11:{id:"11",displayName:"C7",description:"Bonded to O1, O2, and C8 of ester",descriptionTokens:{label:"C7",shortDescription:"Bonded to O1, O2, and C8 of ester",longDescription:"Bonded to O1, O2, and C8 of ester"},parents:["2"],children:[],priority:3},12:{id:"12",displayName:"O2",description:"Bonded to C7 of ester.",descriptionTokens:{label:"O2",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},13:{id:"13",displayName:"C8",description:"Bonded to C7 of ester.",descriptionTokens:{label:"C8",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},14:{id:"14",displayName:"C9",description:"Bonded to O3 and hydroxyl in carboxylic acid.",descriptionTokens:{label:"C9",shortDescription:"Bonded to O3 and hydroxyl in carboxylic acid.",longDescription:"Bonded to O3 and hydroxyl in carboxylic acid."},parents:["3"],children:[],priority:3},15:{id:"15",displayName:"O3",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"O3",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3},16:{id:"16",displayName:"Hydroxyl",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"Hydroxyl",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3}},Te=()=>T(Se,{nodeGraph:Oe,showHypergraph:!1}),Ge=document.getElementById("root");Ee(()=>T(Te,{}),Ge);
