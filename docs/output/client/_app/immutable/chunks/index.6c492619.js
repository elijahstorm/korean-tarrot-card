function $(){}const Z=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(tt)}function F(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Jt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function xt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t){let e;return et(t,n=>e=n)(),e}function Qt(t,e,n){t.$$.on_destroy.push(et(e,n))}function Ut(t,e,n,i){if(t){const s=nt(t,e,n,i);return t[0](s)}}function nt(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,o){if(s){const r=nt(e,n,i,o);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const it=typeof window<"u";let st=it?()=>window.performance.now():()=>Date.now(),K=it?t=>requestAnimationFrame(t):$;const A=new Set;function rt(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&K(rt)}function ot(t){let e;return A.size===0&&K(rt),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}const bt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in bt;let H=!1;function $t(){H=!0}function vt(){H=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:Et(1,s,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let a=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function Nt(t,e){t.appendChild(e)}function lt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=at("style");return St(lt(t),e),e.sheet}function St(t,e){return Nt(t.head||t,e),e.sheet}function Mt(t,e){if(H){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function te(t,e,n){H&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function ne(){return Q(" ")}function ie(){return Q("")}function se(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){jt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Tt(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function oe(t,e,n){return Tt(t,e,n,at)}function Dt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function le(t){return Dt(t," ")}function ce(t,e){e=""+e,t.data!==e&&(t.data=e)}function ae(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function qt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function fe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function de(t,e){return new t(e)}const L=new Map;let z=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:At(e),rules:{}};return L.set(t,n),n}function ft(t,e,n,i,s,o,r,a=0){const c=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*o(p);l+=p*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Ot(f)}_${a}`,d=lt(t),{stylesheet:h,rules:_}=L.get(d)||Pt(d,t);_[u]||(_[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,z+=1,u}function I(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Rt())}function Rt(){K(()=>{z||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ct(e)}),L.clear())})}let D;function T(t){D=t}function dt(){if(!D)throw new Error("Function called outside component initialization");return D}function _e(t){dt().$$.on_mount.push(t)}function he(t){dt().$$.after_update.push(t)}const N=[],X=[];let S=[];const Y=[],_t=Promise.resolve();let J=!1;function ht(){J||(J=!0,_t.then(mt))}function me(){return ht(),_t}function q(t){S.push(t)}const G=new Set;let k=0;function mt(){if(k!==0)return;const t=D;do{try{for(;k<N.length;){const e=N[k];k++,T(e),Lt(e.$$)}}catch(e){throw N.length=0,k=0,e}for(T(null),N.length=0,k=0;X.length;)X.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];G.has(n)||(G.add(n),n())}S.length=0}while(N.length);for(;Y.length;)Y.pop()();J=!1,G.clear(),T(t)}function Lt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function zt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let j;function pt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function B(t,e,n){t.dispatchEvent(qt(`${e?"intro":"outro"}${n}`))}const R=new Set;let b;function pe(){b={r:0,c:[],p:b}}function ye(){b.r||v(b.c),b=b.p}function yt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),b.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const gt={duration:0};function ge(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,a,c=0;function l(){r&&I(t,r)}function f(){const{delay:d=0,duration:h=300,easing:_=Z,tick:g=$,css:p}=s||gt;p&&(r=ft(t,0,1,h,d,_,p,c++)),g(0,1);const y=st()+d,M=y+h;a&&a.abort(),o=!0,q(()=>B(t,!0,"start")),a=ot(E=>{if(o){if(E>=M)return g(1,0),B(t,!0,"end"),l(),o=!1;if(E>=y){const C=_((E-y)/h);g(C,1-C)}}return o})}let u=!1;return{start(){u||(u=!0,I(t),F(s)?(s=s(i),pt().then(f)):f())},invalidate(){u=!1},end(){o&&(l(),o=!1)}}}function we(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const a=b;a.r+=1;function c(){const{delay:l=0,duration:f=300,easing:u=Z,tick:d=$,css:h}=s||gt;h&&(r=ft(t,1,0,f,l,u,h));const _=st()+l,g=_+f;q(()=>B(t,!1,"start")),ot(p=>{if(o){if(p>=g)return d(0,1),B(t,!1,"end"),--a.r||v(a.c),!1;if(p>=_){const y=u((p-_)/f);d(1-y,y)}}return o})}return F(s)?pt().then(()=>{s=s(i),c()}):c(),{end(l){l&&s.tick&&s.tick(1,0),o&&(r&&I(t,r),o=!1)}}}function xe(t,e){t.d(1),e.delete(t.key)}function be(t,e){Bt(t,1,1,()=>{e.delete(t.key)})}function $e(t,e,n,i,s,o,r,a,c,l,f,u){let d=t.length,h=o.length,_=d;const g={};for(;_--;)g[t[_].key]=_;const p=[],y=new Map,M=new Map,E=[];for(_=h;_--;){const m=u(s,o,_),w=n(m);let x=r.get(w);x?i&&E.push(()=>x.p(m,e)):(x=l(w,m),x.c()),y.set(w,p[_]=x),w in g&&M.set(w,Math.abs(_-g[w]))}const C=new Set,U=new Set;function W(m){yt(m,1),m.m(a,f),r.set(m.key,m),f=m.first,h--}for(;d&&h;){const m=p[h-1],w=t[d-1],x=m.key,O=w.key;m===w?(f=m.first,d--,h--):y.has(O)?!r.has(x)||C.has(x)?W(m):U.has(O)?d--:M.get(x)>M.get(O)?(U.add(x),W(m)):(C.add(O),d--):(c(w,r),d--)}for(;d--;){const m=t[d];y.has(m.key)||c(m,r)}for(;h;)W(p[h-1]);return v(E),p}const Ft=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ft];function ve(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function Ht(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||q(()=>{const r=t.$$.on_mount.map(tt).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),o.forEach(q)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(zt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,n,i,s,o,r,a=[-1]){const c=D;T(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,d,...h)=>{const _=h.length?h[0]:d;return l.ctx&&s(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),f&&Gt(t,u)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){$t();const u=Ct(e.target);l.fragment&&l.fragment.l(u),u.forEach(ct)}else l.fragment&&l.fragment.c();e.intro&&yt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),vt(),mt()}T(c)}class Ne{$destroy(){Wt(this,1),this.$destroy=$}$on(e,n){if(!F(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ht as A,Wt as B,Ut as C,Xt as D,Yt as E,Vt as F,Mt as G,$ as H,Qt as I,Z as J,Zt as K,Kt as L,se as M,q as N,ge as O,we as P,ee as Q,Jt as R,Ne as S,v as T,$e as U,ue as V,xe as W,F as X,K as Y,fe as Z,be as _,ne as a,te as b,le as c,Bt as d,ie as e,ye as f,yt as g,ct as h,ke as i,he as j,at as k,oe as l,Ct as m,re as n,_e as o,ae as p,Q as q,Dt as r,It as s,me as t,ce as u,pe as v,X as w,de as x,ve as y,Ee as z};