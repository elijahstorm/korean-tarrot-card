import{S as C,i as N,d as q,s as O,K as R,L as z,v as A,p as h,y as g,c as B,q as E,r as $,z as w,l as d,f as D,x as S,g as m,M as j,A as k,N as x}from"../chunks/index.83796d58.js";import{s as H}from"../chunks/singletons.8d4982ca.js";const K=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},_={subscribe(s){return K().page.subscribe(s)}},y="node_modules/.pnpm/@sveltejs+kit@1.20.1_svelte@3.59.1+vite@4.3.9/node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(s){var b;let e,i=s[0].status+"",r,l,n,c=((b=s[0].error)==null?void 0:b.message)+"",a;const v={c:function(){e=h("h1"),r=g(i),l=B(),n=h("p"),a=g(c),this.h()},l:function(t){e=E(t,"H1",{});var o=$(e);r=w(o,i),o.forEach(d),l=D(t),n=E(t,"P",{});var u=$(n);a=w(u,c),u.forEach(d),this.h()},h:function(){S(e,y,4,0,57),S(n,y,5,0,81)},m:function(t,o){m(t,e,o),j(e,r),m(t,l,o),m(t,n,o),j(n,a)},p:function(t,[o]){var u;o&1&&i!==(i=t[0].status+"")&&k(r,i),o&1&&c!==(c=((u=t[0].error)==null?void 0:u.message)+"")&&k(a,c)},i:x,o:x,d:function(t){t&&d(e),t&&d(l),t&&d(n)}};return q("SvelteRegisterBlock",{block:v,id:f.name,type:"component",source:"",ctx:s}),v}function L(s,e,i){let r;R(_,"page"),z(s,_,a=>i(0,r=a));let{$$slots:l={},$$scope:n}=e;A("Error",l,[]);const c=[];return Object.keys(e).forEach(a=>{!~c.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Error> was created with unknown prop '${a}'`)}),s.$capture_state=()=>({page:_,$page:r}),[r]}let F=class extends C{constructor(e){super(e),N(this,e,L,f,O,{}),q("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}};export{F as component};