(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function M(){}function Z(e){return e()}function H(){return Object.create(null)}function L(e){e.forEach(Z)}function ie(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let j;function J(e,t){return j||(j=document.createElement("a")),j.href=t,e===j.href}function se(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function ue(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function O(){return I(" ")}function Q(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function fe(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let z;function A(e){z=e}const N=[],V=[],q=[],W=[],ae=Promise.resolve();let F=!1;function de(){F||(F=!0,ae.then(te))}function K(e){q.push(e)}const T=new Set;let S=0;function te(){const e=z;do{for(;S<N.length;){const t=N[S];S++,A(t),he(t.$$)}for(A(null),N.length=0,S=0;V.length;)V.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];T.has(n)||(T.add(n),n())}q.length=0}while(N.length);for(;W.length;)W.pop()();F=!1,T.clear(),A(e)}function he(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const B=new Set;let k;function me(){k={r:0,c:[],p:k}}function pe(){k.r||L(k.c),k=k.p}function P(e,t){e&&e.i&&(B.delete(e),e.i(t))}function R(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),k.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function _e(e){e&&e.c()}function ne(e,t,n,r){const{fragment:o,on_mount:c,on_destroy:s,after_update:_}=e.$$;o&&o.m(t,n),r||K(()=>{const h=c.map(Z).filter(ie);s?s.push(...h):L(h),e.$$.on_mount=[]}),_.forEach(K)}function re(e,t){const n=e.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(N.push(e),de(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,r,o,c,s,_=[-1]){const h=z;A(e);const i=e.$$={fragment:null,ctx:null,props:c,update:M,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:H(),dirty:_,skip_bound:!1,root:t.target||h.$$.root};s&&s(i.root);let b=!1;if(i.ctx=n?n(e,t.props||{},(m,g,...v)=>{const a=v.length?v[0]:g;return i.ctx&&o(i.ctx[m],i.ctx[m]=a)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](a),b&&ge(e,m)),g}):[],i.update(),b=!0,L(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const m=fe(t.target);i.fragment&&i.fragment.l(m),m.forEach(E)}else i.fragment&&i.fragment.c();t.intro&&P(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),te()}A(h)}class ce{$destroy(){re(this,1),this.$destroy=M}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function $e(e){let t,n,r,o,c,s,_,h=e[0].name+"",i,b,m,g=e[0].species+"",v;return{c(){t=$("div"),n=$("img"),c=O(),s=$("div"),_=$("p"),i=I(h),b=O(),m=$("p"),v=I(g),J(n.src,r=e[0].image)||y(n,"src",r),y(n,"alt",o=e[0].name),y(n,"srcset",""),y(s,"class","texto"),y(t,"class","img")},m(a,w){C(a,t,w),p(t,n),p(t,c),p(t,s),p(s,_),p(_,i),p(s,b),p(s,m),p(m,v)},p(a,[w]){w&1&&!J(n.src,r=a[0].image)&&y(n,"src",r),w&1&&o!==(o=a[0].name)&&y(n,"alt",o),w&1&&h!==(h=a[0].name+"")&&U(i,h),w&1&&g!==(g=a[0].species+"")&&U(v,g)},i:M,o:M,d(a){a&&E(t)}}}function ye(e,t,n){let{character:r}=t;return e.$$set=o=>{"character"in o&&n(0,r=o.character)},[r]}class ve extends ce{constructor(t){super(),oe(this,t,ye,$e,ee,{character:0})}}function X(e,t,n){const r=e.slice();return r[5]=t[n],r}function Y(e){let t,n;return t=new ve({props:{character:e[5]}}),{c(){_e(t.$$.fragment)},m(r,o){ne(t,r,o),n=!0},p(r,o){const c={};o&1&&(c.character=r[5]),t.$set(c)},i(r){n||(P(t.$$.fragment,r),n=!0)},o(r){R(t.$$.fragment,r),n=!1},d(r){re(t,r)}}}function be(e){let t,n,r,o,c,s,_,h,i,b,m,g,v,a,w,D,x=e[0],u=[];for(let l=0;l<x.length;l+=1)u[l]=Y(X(e,x,l));const le=l=>R(u[l],1,1,()=>{u[l]=null});return{c(){t=$("h1"),t.textContent="Rick and Morty",n=O(),r=$("div"),o=$("div"),c=$("button"),s=I("Prev"),h=O(),i=$("div"),b=$("button"),b.textContent="Next",m=O(),g=$("div"),v=$("div");for(let l=0;l<u.length;l+=1)u[l].c();y(t,"class","title"),c.disabled=_=e[1]===1,y(o,"class","btn"),y(i,"class","btn"),y(r,"class","content"),y(v,"class","grid"),y(g,"class","container__img")},m(l,d){C(l,t,d),C(l,n,d),C(l,r,d),p(r,o),p(o,c),p(c,s),p(r,h),p(r,i),p(i,b),C(l,m,d),C(l,g,d),p(g,v);for(let f=0;f<u.length;f+=1)u[f].m(v,null);a=!0,w||(D=[Q(c,"click",e[3]),Q(b,"click",e[2])],w=!0)},p(l,[d]){if((!a||d&2&&_!==(_=l[1]===1))&&(c.disabled=_),d&1){x=l[0];let f;for(f=0;f<x.length;f+=1){const G=X(l,x,f);u[f]?(u[f].p(G,d),P(u[f],1)):(u[f]=Y(G),u[f].c(),P(u[f],1),u[f].m(v,null))}for(me(),f=x.length;f<u.length;f+=1)le(f);pe()}},i(l){if(!a){for(let d=0;d<x.length;d+=1)P(u[d]);a=!0}},o(l){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)R(u[d]);a=!1},d(l){l&&E(t),l&&E(n),l&&E(r),l&&E(m),l&&E(g),ue(u,l),w=!1,L(D)}}}function we(e,t,n){let r=[],o=1;async function c(){const i=await(await fetch("https://rickandmortyapi.com/api/character?page="+o)).json();console.log(i.results),n(0,r=i.results)}c();function s(){n(1,o++,o),c()}function _(){n(1,o--,o),c()}return[r,o,s,_]}class xe extends ce{constructor(t){super(),oe(this,t,we,be,ee,{})}}new xe({target:document.getElementById("app")});
