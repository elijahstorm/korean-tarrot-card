function $(){}const Z=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(tt)}function F(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function Jt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function xt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t){let e;return et(t,n=>e=n)(),e}function Qt(t,e,n){t.$$.on_destroy.push(et(e,n))}function Ut(t,e,n,i){if(t){const s=nt(t,e,n,i);return t[0](s)}}function nt(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,c){if(s){const r=nt(e,n,i,c);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t,e,n){return t.set(n),e}function te(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const it=typeof window<"u";let st=it?()=>window.performance.now():()=>Date.now(),K=it?t=>requestAnimationFrame(t):$;const A=new Set;function rt(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&K(rt)}function ot(t){let e;return A.size===0&&K(rt),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}const bt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in bt;let H=!1;function $t(){H=!0}function vt(){H=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:kt(1,s,d=>e[n[d]].claim_order,a))-1;i[o]=n[f]+1;const u=f+1;n[u]=o,s=Math.max(u,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(r[o],f)}}function Nt(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=at("style");return St(ct(t),e),e.sheet}function St(t,e){return Nt(t.head||t,e),e.sheet}function Mt(t,e){if(H){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ee(t,e,n){H&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function ie(){return Q(" ")}function se(){return Q("")}function re(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function oe(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){Ct(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Tt(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ce(t,e,n){return Tt(t,e,n,at)}function Dt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function le(t){return Dt(t," ")}function ae(t,e){e=""+e,t.data!==e&&(t.data=e)}function ue(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function fe(t,e,n){t.classList[n?"add":"remove"](e)}function qt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function _e(t,e){return new t(e)}const L=new Map;let z=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:At(e),rules:{}};return L.set(t,n),n}function ft(t,e,n,i,s,c,r,l=0){const o=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*c(p);a+=p*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Ot(f)}_${l}`,d=ct(t),{stylesheet:h,rules:_}=L.get(d)||Pt(d,t);_[u]||(_[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,z+=1,u}function I(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Rt())}function Rt(){K(()=>{z||(L.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&lt(e)}),L.clear())})}let D;function T(t){D=t}function dt(){if(!D)throw new Error("Function called outside component initialization");return D}function he(t){dt().$$.on_mount.push(t)}function me(t){dt().$$.after_update.push(t)}const N=[],X=[];let S=[];const Y=[],_t=Promise.resolve();let J=!1;function ht(){J||(J=!0,_t.then(mt))}function pe(){return ht(),_t}function q(t){S.push(t)}const G=new Set;let E=0;function mt(){if(E!==0)return;const t=D;do{try{for(;E<N.length;){const e=N[E];E++,T(e),Lt(e.$$)}}catch(e){throw N.length=0,E=0,e}for(T(null),N.length=0,E=0;X.length;)X.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];G.has(n)||(G.add(n),n())}S.length=0}while(N.length);for(;Y.length;)Y.pop()();J=!1,G.clear(),T(t)}function Lt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function zt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let C;function pt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function B(t,e,n){t.dispatchEvent(qt(`${e?"intro":"outro"}${n}`))}const R=new Set;let b;function ye(){b={r:0,c:[],p:b}}function ge(){b.r||v(b.c),b=b.p}function yt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),b.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const gt={duration:0};function we(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,l,o=0;function a(){r&&I(t,r)}function f(){const{delay:d=0,duration:h=300,easing:_=Z,tick:g=$,css:p}=s||gt;p&&(r=ft(t,0,1,h,d,_,p,o++)),g(0,1);const y=st()+d,M=y+h;l&&l.abort(),c=!0,q(()=>B(t,!0,"start")),l=ot(k=>{if(c){if(k>=M)return g(1,0),B(t,!0,"end"),a(),c=!1;if(k>=y){const j=_((k-y)/h);g(j,1-j)}}return c})}let u=!1;return{start(){u||(u=!0,I(t),F(s)?(s=s(i),pt().then(f)):f())},invalidate(){u=!1},end(){c&&(a(),c=!1)}}}function xe(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const l=b;l.r+=1;function o(){const{delay:a=0,duration:f=300,easing:u=Z,tick:d=$,css:h}=s||gt;h&&(r=ft(t,1,0,f,a,u,h));const _=st()+a,g=_+f;q(()=>B(t,!1,"start")),ot(p=>{if(c){if(p>=g)return d(0,1),B(t,!1,"end"),--l.r||v(l.c),!1;if(p>=_){const y=u((p-_)/f);d(1-y,y)}}return c})}return F(s)?pt().then(()=>{s=s(i),o()}):o(),{end(a){a&&s.tick&&s.tick(1,0),c&&(r&&I(t,r),c=!1)}}}function be(t,e){t.d(1),e.delete(t.key)}function $e(t,e){Bt(t,1,1,()=>{e.delete(t.key)})}function ve(t,e,n,i,s,c,r,l,o,a,f,u){let d=t.length,h=c.length,_=d;const g={};for(;_--;)g[t[_].key]=_;const p=[],y=new Map,M=new Map,k=[];for(_=h;_--;){const m=u(s,c,_),w=n(m);let x=r.get(w);x?i&&k.push(()=>x.p(m,e)):(x=a(w,m),x.c()),y.set(w,p[_]=x),w in g&&M.set(w,Math.abs(_-g[w]))}const j=new Set,U=new Set;function W(m){yt(m,1),m.m(l,f),r.set(m.key,m),f=m.first,h--}for(;d&&h;){const m=p[h-1],w=t[d-1],x=m.key,O=w.key;m===w?(f=m.first,d--,h--):y.has(O)?!r.has(x)||j.has(x)?W(m):U.has(O)?d--:M.get(x)>M.get(O)?(U.add(x),W(m)):(j.add(O),d--):(o(w,r),d--)}for(;d--;){const m=t[d];y.has(m.key)||o(m,r)}for(;h;)W(p[h-1]);return v(k),p}function ke(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],l=e[c];if(l){for(const o in r)o in l||(i[o]=1);for(const o in l)s[o]||(n[o]=l[o],s[o]=1);t[c]=l}else for(const o in r)s[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ee(t){return typeof t=="object"&&t!==null?t:{}}const Ft=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ft];function Ne(t){t&&t.c()}function Ae(t,e){t&&t.l(e)}function Ht(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||q(()=>{const r=t.$$.on_mount.map(tt).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),c.forEach(q)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(zt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(N.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,i,s,c,r,l=[-1]){const o=D;T(t);const a=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:s,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:V(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,d,...h)=>{const _=h.length?h[0]:d;return a.ctx&&s(a.ctx[u],a.ctx[u]=_)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](_),f&&Gt(t,u)),d}):[],a.update(),f=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){$t();const u=jt(e.target);a.fragment&&a.fragment.l(u),u.forEach(lt)}else a.fragment&&a.fragment.c();e.intro&&yt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),vt(),mt()}T(o)}class Me{$destroy(){Wt(this,1),this.$destroy=$}$on(e,n){if(!F(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ne as $,Ht as A,Wt as B,Ut as C,Xt as D,Yt as E,Vt as F,Mt as G,$ as H,Qt as I,Z as J,te as K,Kt as L,re as M,q as N,we as O,xe as P,wt as Q,ke as R,Me as S,Ee as T,Jt as U,v as V,ve as W,fe as X,be as Y,F as Z,K as _,ie as a,de as a0,$e as a1,Zt as a2,ee as b,le as c,Bt as d,se as e,ge as f,yt as g,lt as h,Se as i,me as j,at as k,ce as l,jt as m,oe as n,he as o,ue as p,Q as q,Dt as r,It as s,pe as t,ae as u,ye as v,X as w,_e as x,Ne as y,Ae as z};