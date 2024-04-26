import*as d from"react";import _,{useState as S,useEffect as G,useRef as j,useCallback as ue,lazy as $e,forwardRef as De,createContext as qe,Fragment as ze}from"react";import{jsx as r,jsxs as v}from"react/jsx-runtime";var W=function(e){return function(t){return Math.pow(t,e)}},U=function(e){return function(t){return 1-Math.abs(Math.pow(t-1,e))}},J=function(e){return function(t){return t<.5?W(e)(t*2)/2:U(e)(t*2-1)/2+.5}},je=function(e){return e},Be=W(2),He=U(2),We=J(2),Ue=W(3),Fe=U(3),Ve=J(3),Ge=W(4),Ke=U(4),Ye=J(4),Xe=W(5),Qe=U(5),Ze=J(5),Je=function(e){return 1+Math.sin(Math.PI/2*e-Math.PI/2)},et=function(e){return Math.sin(Math.PI/2*e)},tt=function(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2},se=function(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?(e-=1.5/n,t*e*e+.75):e<2.5/n?(e-=2.25/n,t*e*e+.9375):(e-=2.625/n,t*e*e+.984375)},Ce=function(e){return 1-se(1-e)},nt=function(e){return e<.5?Ce(e*2)*.5:se(e*2-1)*.5+.5},rt=Object.freeze({linear:je,quadIn:Be,quadOut:He,quadInOut:We,cubicIn:Ue,cubicOut:Fe,cubicInOut:Ve,quartIn:Ge,quartOut:Ke,quartInOut:Ye,quintIn:Xe,quintOut:Qe,quintInOut:Ze,sineIn:Je,sineOut:et,sineInOut:tt,bounceOut:se,bounceIn:Ce,bounceInOut:nt}),ee=function(t){var n=t.from,o=t.to,a=t.duration,i=t.delay,l=t.easing,s=t.onStart,u=t.onUpdate,m=t.onFinish;for(var p in n)o[p]===void 0&&(o[p]=n[p]);for(var h in o)n[h]===void 0&&(n[h]=o[h]);this.from=n,this.to=o,this.duration=a||500,this.delay=i||0,this.easing=l||"linear",this.onStart=s,this.onUpdate=u||function(){},this.onFinish=m,this.startTime=Date.now()+this.delay,this.started=!1,this.finished=!1,this.timer=null,this.keys={}};ee.prototype.update=function(){if(this.time=Date.now(),!(this.time<this.startTime)&&!this.finished){if(this.elapsed===this.duration){this.finished||(this.finished=!0,this.onFinish&&this.onFinish(this.keys));return}this.elapsed=this.time-this.startTime,this.elapsed=this.elapsed>this.duration?this.duration:this.elapsed;for(var t in this.to)this.keys[t]=this.from[t]+(this.to[t]-this.from[t])*rt[this.easing](this.elapsed/this.duration);this.started||(this.onStart&&this.onStart(this.keys),this.started=!0),this.onUpdate(this.keys)}};ee.prototype.start=function(){var t=this;this.startTime=Date.now()+this.delay;var n=function(){t.update(),t.timer=requestAnimationFrame(n),t.finished&&(cancelAnimationFrame(t.timer),t.timer=null)};n()};ee.prototype.stop=function(){cancelAnimationFrame(this.timer),this.timer=null};var ot=typeof global=="object"&&global&&global.Object===Object&&global;const at=ot;var it=typeof self=="object"&&self&&self.Object===Object&&self,st=at||it||Function("return this")();const Re=st;var ct=Re.Symbol;const K=ct;var Pe=Object.prototype,lt=Pe.hasOwnProperty,dt=Pe.toString,z=K?K.toStringTag:void 0;function ut(e){var t=lt.call(e,z),n=e[z];try{e[z]=void 0;var o=!0}catch{}var a=dt.call(e);return o&&(t?e[z]=n:delete e[z]),a}var ft=Object.prototype,mt=ft.toString;function ht(e){return mt.call(e)}var pt="[object Null]",vt="[object Undefined]",fe=K?K.toStringTag:void 0;function gt(e){return e==null?e===void 0?vt:pt:fe&&fe in Object(e)?ut(e):ht(e)}function wt(e){return e!=null&&typeof e=="object"}var bt="[object Symbol]";function _t(e){return typeof e=="symbol"||wt(e)&&gt(e)==bt}var yt=/\s/;function Et(e){for(var t=e.length;t--&&yt.test(e.charAt(t)););return t}var St=/^\s+/;function xt(e){return e&&e.slice(0,Et(e)+1).replace(St,"")}function Y(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var me=0/0,kt=/^[-+]0x[0-9a-f]+$/i,It=/^0b[01]+$/i,Tt=/^0o[0-7]+$/i,Ot=parseInt;function he(e){if(typeof e=="number")return e;if(_t(e))return me;if(Y(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Y(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=xt(e);var n=It.test(e);return n||Tt.test(e)?Ot(e.slice(2),n?2:8):kt.test(e)?me:+e}var Ct=function(){return Re.Date.now()};const ne=Ct;var Rt="Expected a function",Pt=Math.max,Nt=Math.min;function At(e,t,n){var o,a,i,l,s,u,m=0,p=!1,h=!1,I=!0;if(typeof e!="function")throw new TypeError(Rt);t=he(t)||0,Y(n)&&(p=!!n.leading,h="maxWait"in n,i=h?Pt(he(n.maxWait)||0,t):i,I="trailing"in n?!!n.trailing:I);function E(c){var f=o,k=a;return o=a=void 0,m=c,l=e.apply(k,f),l}function T(c){return m=c,s=setTimeout(g,t),p?E(c):l}function A(c){var f=c-u,k=c-m,de=t-f;return h?Nt(de,i-k):de}function b(c){var f=c-u,k=c-m;return u===void 0||f>=t||f<0||h&&k>=i}function g(){var c=ne();if(b(c))return x(c);s=setTimeout(g,A(c))}function x(c){return s=void 0,I&&o?E(c):(o=a=void 0,l)}function te(){s!==void 0&&clearTimeout(s),m=0,o=u=a=s=void 0}function D(){return s===void 0?l:x(ne())}function q(){var c=ne(),f=b(c);if(o=arguments,a=this,u=c,f){if(s===void 0)return T(u);if(h)return clearTimeout(s),s=setTimeout(g,t),E(u)}return s===void 0&&(s=setTimeout(g,t)),l}return q.cancel=te,q.flush=D,q}var Lt="Expected a function";function Mt(e,t,n){var o=!0,a=!0;if(typeof e!="function")throw new TypeError(Lt);return Y(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),At(e,t,{leading:o,maxWait:t,trailing:a})}function $t({backTop:e}){const t=e!=null?e:!0,n=()=>{const i=document.documentElement,l=i.scrollTop;new ee({from:{scrollTop:l},to:{scrollTop:0},easing:"quadIn",duration:500,onUpdate:u=>{i.scrollTop=Number(u==null?void 0:u.scrollTop)}}).start()},[o,a]=S(!1);return G(()=>{const i=Mt(()=>{const s=document.documentElement.scrollTop;a(s>=200)},500);return document.addEventListener("scroll",i),()=>{i.cancel(),document.removeEventListener("scroll",i)}}),t&&o?r("div",{className:"fixed bottom-10 right-30 z-10",display:"none md:block",onClick:n,children:r("button",{className:"w-10 h-10 rounded-full duration-300",style:{backgroundColor:"var(--island-c-bg)"},color:"gray hover:gray-500",bg:"~ gray-200 hover:gray-300",shadow:"sm hover:md",children:r("div",{flex:"~ center",children:r("div",{className:"i-carbon-chevron-up",text:"xl"})})})}):null}const Dt="modulepreload",qt=function(e){return"/"+e},pe={},w=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=qt(a),a in pe)return;pe[a]=!0;const i=a.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":Dt,i||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),i)return new Promise((u,m)=>{s.addEventListener("load",u),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},zt="_searchInput_y03a3_1",jt="_searchCommand_y03a3_7",Bt="_focus_y03a3_14",re={searchInput:zt,searchCommand:jt,focus:Bt},Ht=e=>d.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("path",{fill:"#888888",d:"m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"})),Wt=e=>d.createElement("svg",{width:32,height:32,viewBox:"0 0 24 24",...e},d.createElement("g",{fill:"none",stroke:"var(--island-c-brand)",strokeLinecap:"round",strokeWidth:2},d.createElement("path",{strokeDasharray:60,strokeDashoffset:60,strokeOpacity:.3,d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"},d.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"1.3s",values:"60;0"})),d.createElement("path",{strokeDasharray:15,strokeDashoffset:15,d:"M12 3C16.9706 3 21 7.02944 21 12"},d.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),d.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"}))));function Ut(e){const{suggestion:t,query:n}=e,o=()=>{if(t.type==="header"){const{header:i,headerHighlightIndex:l}=t,s=i.slice(0,l),u=i.slice(l+n.length);return v("div",{font:"medium",children:[r("span",{children:s}),r("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"text-1",children:n}),r("span",{children:u})]})}else return r("div",{font:"medium",children:t.header})},a=()=>{if(t.type!=="content")return;const{statementHighlightIndex:i,statement:l}=t,s=l.slice(0,i),u=l.slice(i+n.length);return v("div",{font:"normal",text:"sm gray-light",w:"100%",children:[r("span",{children:s}),r("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"[#000]",children:n}),r("span",{children:u})]})};return v("div",{"border-b-1":"","border-t-1":"","table-cell":"",p:"x-3 y-2",hover:"bg-[#f3f4f5] ",text:"#2c3e50",className:`border-right-none border-[#eaecef] ${e.isCurrent?"bg-[#f3f4f5]":"bg-white"}`,transition:"bg duration-200",children:[r("div",{font:"medium",text:"sm",children:o()}),t.type==="content"&&a()]})}const F={ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ENTER:"Enter",SEARCH:"KeyK"};function Ft(e){const[t,n]=S(""),[o,a]=S([]),[i,l]=S(!1),[s,u]=S(!1),[m,p]=S(!1),[h,I]=S(-1),E=j(),T=j(),[A,b]=S(!0),g=j(null),x=!i||s,te=!x&&o.length===0,D=ue(async()=>{if(E.current)return Promise.resolve();{const{PageSearcher:c}=await w(()=>import("./search.b9f37c6a.js"),[]);E.current=new c(e.langRoutePrefix),await E.current.init(),l(!0)}},[e.langRoutePrefix]),q=ue(async c=>{const f=c.target.value;n(f),T.current=T.current||D(),await T.current,u(!0);const k=await E.current.match(f);u(!1),a(k)},[D]);return G(()=>{const c=f=>{switch(f.code){case F.SEARCH:(f.ctrlKey||f.metaKey)&&g.current&&(f.preventDefault(),m?(p(!1),g.current.blur()):(p(!0),g.current.focus()));break;case F.ARROW_DOWN:f.preventDefault(),I((h+1)%o.length);break;case F.ARROW_UP:f.preventDefault(),I((h-1+o.length)%o.length);break;case F.ENTER:if(h>=0){const k=o[h];window.location.href=k.link}break}};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[h,m,o]),G(()=>{b(!1)},[]),v("div",{flex:"","items-center":"~",relative:"",mr:"2",font:"semibold",children:[r(Ht,{w:"5",h:"5",fill:"currentColor",onClick:()=>{p(!0),g.current.focus()}}),r("input",{disabled:A,cursor:"text focus:auto",placeholder:"Search",height:"8",border:"none",type:"text",text:"sm",p:"t-0 r-2 b-0 l-2",transition:"all duration-200 ease",className:`rounded-sm ${re.searchInput} ${m?re.focus:""}`,"aria-label":"Search",autoComplete:"off",onChange:q,onBlur:()=>setTimeout(()=>p(!1),200),onFocus:()=>{p(!0),T.current=D()},ref:g}),v("div",{m:"r-3",w:"10",h:"6",p:"x-1.5",rounded:"md",border:"1px solid gray-light-3",text:"xs gray-light-3",flex:"~","items-center":"~",justify:"around",className:re.searchCommand,children:[r("span",{children:"\u2318"}),r("span",{children:"K"})]}),m&&t&&v("ul",{pos:"fixed sm:absolute top-12 sm:top-8 left-0",z:"60","border-1":"",p:"2",list:"none",bg:"bg-default",className:"w-100% sm:min-w-500px sm:max-w-700px",children:[o.map((c,f)=>r("li",{rounded:"sm",cursor:"pointer",w:"100%",className:"border-collapse",children:r("a",{block:"",href:c.link,className:"whitespace-normal",children:v("div",{table:"",w:"100%",className:"border-collapse",children:[r("div",{w:"35%","border-t-1":"","border-b-1":"","border-r-1":"","border-left":"none","table-cell":"",align:"middle right",p:"1.2",text:"sm right [#2c3e50]",font:"semibold",className:"bg-[#f5f5f5] border-[#eaecef]",children:c.title}),r(Ut,{suggestion:c,query:t,isCurrent:f===h})]})})},c.title)),te&&r("li",{flex:"center",children:r("div",{p:"2",text:"sm #2c3e50",children:"No results found"})}),x&&r("li",{flex:"center",children:r("div",{p:"2",text:"sm",children:r(Wt,{})})})]})]})}const Vt="_navHamburger_14nz8_1",Gt="_container_14nz8_14",Kt="_top_14nz8_21",Yt="_middle_14nz8_27",Xt="_bottom_14nz8_33",Qt="_active_14nz8_39",L={navHamburger:Vt,container:Gt,top:Kt,middle:Yt,bottom:Xt,active:Qt},Zt="_navScreen_1mkpq_1",Jt="_active_1mkpq_17",en="_container_1mkpq_21",tn="_navMenu_1mkpq_27",nn="_navMenuItem_1mkpq_34",rn="_navAppearance_1mkpq_46",on="_socialAndAppearance_1mkpq_50",O={navScreen:Zt,active:Jt,container:en,navMenu:tn,navMenuItem:nn,navAppearance:rn,socialAndAppearance:on};function an(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}var ce=!1;if(typeof window<"u"){var ve={get passive(){ce=!0}};window.addEventListener("testPassive",null,ve),window.removeEventListener("testPassive",null,ve)}var X=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),M=[],Q=!1,le=-1,B=void 0,R=void 0,H=void 0,Ne=function(t){return M.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(t))})},Z=function(t){var n=t||window.event;return Ne(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},sn=function(t){if(H===void 0){var n=!!t&&t.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(n&&o>0){var a=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);H=document.body.style.paddingRight,document.body.style.paddingRight=a+o+"px"}}B===void 0&&(B=document.body.style.overflow,document.body.style.overflow="hidden")},cn=function(){H!==void 0&&(document.body.style.paddingRight=H,H=void 0),B!==void 0&&(document.body.style.overflow=B,B=void 0)},ln=function(){return window.requestAnimationFrame(function(){if(R===void 0){R={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,n=t.scrollY,o=t.scrollX,a=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var i=a-window.innerHeight;i&&n>=a&&(document.body.style.top=-(n+i))})},300)}})},dn=function(){if(R!==void 0){var t=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=R.position,document.body.style.top=R.top,document.body.style.left=R.left,window.scrollTo(n,t),R=void 0}},un=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},fn=function(t,n){var o=t.targetTouches[0].clientY-le;return Ne(t.target)?!1:n&&n.scrollTop===0&&o>0||un(n)&&o<0?Z(t):(t.stopPropagation(),!0)},mn=function(t,n){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!M.some(function(a){return a.targetElement===t})){var o={targetElement:t,options:n||{}};M=[].concat(an(M),[o]),X?ln():sn(n),X&&(t.ontouchstart=function(a){a.targetTouches.length===1&&(le=a.targetTouches[0].clientY)},t.ontouchmove=function(a){a.targetTouches.length===1&&fn(a,t)},Q||(document.addEventListener("touchmove",Z,ce?{passive:!1}:void 0),Q=!0))}},hn=function(){X&&(M.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),Q&&(document.removeEventListener("touchmove",Z,ce?{passive:!1}:void 0),Q=!1),le=-1),X?dn():cn(),M=[]};const pn="_navScreenMenuGroup_1xte3_1",vn="_open_1xte3_7",gn="_button_1xte3_12",wn="_buttonSpan_1xte3_25",bn="_items_1xte3_32",_n="_down_1xte3_40",C={navScreenMenuGroup:pn,open:vn,button:gn,buttonSpan:wn,items:bn,down:_n},yn=e=>d.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",...e},d.createElement("path",{fill:"currentColor",d:"M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"})),En=e=>d.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("path",{fill:"currentColor",d:"M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"})),Sn="_link_r3fql_1",xn={link:Sn},ae="island-theme-appearance",kn=["https://island-tutorial.sanyuan0704.top","https://island.sanyuan0704.top","https://islandjs.dev"],In=()=>typeof window<"u",Tn=/^(https?:)?\/\//;function Ae(e){const{href:t="/",children:n,className:o=""}=e,a=Tn.test(t),i=kn.some(u=>t.startsWith(u));return r("a",{href:t,target:a&&!i?"_blank":"",rel:a?"noopener noreferrer":void 0,className:`${xn.link} ${o}`,children:n})}function Le(e){const{activeIndex:t}=e,[n,o]=S(!1);return v("div",{relative:"",className:`${n?C.open:""} ${C.navScreenMenuGroup}`,children:[v("button",{className:C.button,onClick:()=>{o(!n)},children:[r("span",{className:C.buttonSpan,children:e.text}),r(yn,{className:`${n?C.open:""} ${C.down} `})]}),r("div",{children:r("div",{className:C.items,children:e.items.map((a,i)=>i===t?r("div",{className:"pa-1",children:r("span",{mr:"1",text:"brand",children:a.text})},a.link):r("div",{className:"pa-1",font:"medium",children:r(Ae,{href:a.link,children:r("div",{children:v("div",{flex:"",children:[r("span",{mr:"1",children:a.text}),r(En,{w:"11px",h:"11px",text:"text-3",m:"t-1 r-1"})]})})})},a.link))})})]})}function y(e){const t=$e(e);let n,o;const i=De(function(s,u){const p=j(n!=null?n:t).current;return r(p,{ref:u,...s})});return i.preload=()=>(o||(o=e().then(l=>(n=l.default,l))),o),i}const ge=y(()=>w(()=>import("./achievements.1c6eacd9.js"),[])),we=y(()=>w(()=>import("./base-info.badb655c.js"),[])),be=y(()=>w(()=>import("./edc.a1726248.js"),[])),_e=y(()=>w(()=>import("./project.3704a138.js"),[])),ye=y(()=>w(()=>import("./self-evaluation.b3a4d6eb.js"),[])),Ee=y(()=>w(()=>import("./skills.8ae805cd.js"),[])),Se=y(()=>w(()=>import("./works.f48998c4.js"),[])),xe=y(()=>w(()=>import("./index.62c50ba5.js"),[])),ke=y(()=>w(()=>import("./islandjs.c5483720.js"),[])),Ie=y(()=>w(()=>import("./vuepress.e8197411.js"),[])),Te=y(()=>w(()=>import("./summary.352c2c76.js"),[])),On=[{path:"/article/achievements",element:_.createElement(ge),filePath:"/Users/gaowei/workspace/good-resume/docs/article/achievements.md",preload:ge.preload},{path:"/article/base-info",element:_.createElement(we),filePath:"/Users/gaowei/workspace/good-resume/docs/article/base-info.md",preload:we.preload},{path:"/article/edc",element:_.createElement(be),filePath:"/Users/gaowei/workspace/good-resume/docs/article/edc.md",preload:be.preload},{path:"/article/project",element:_.createElement(_e),filePath:"/Users/gaowei/workspace/good-resume/docs/article/project.md",preload:_e.preload},{path:"/article/self-evaluation",element:_.createElement(ye),filePath:"/Users/gaowei/workspace/good-resume/docs/article/self-evaluation.md",preload:ye.preload},{path:"/article/skills",element:_.createElement(Ee),filePath:"/Users/gaowei/workspace/good-resume/docs/article/skills.md",preload:Ee.preload},{path:"/article/works",element:_.createElement(Se),filePath:"/Users/gaowei/workspace/good-resume/docs/article/works.md",preload:Se.preload},{path:"/",element:_.createElement(xe),filePath:"/Users/gaowei/workspace/good-resume/docs/index.md",preload:xe.preload},{path:"/online-resume/islandjs",element:_.createElement(ke),filePath:"/Users/gaowei/workspace/good-resume/docs/online-resume/islandjs.md",preload:ke.preload},{path:"/online-resume/vuepress",element:_.createElement(Ie),filePath:"/Users/gaowei/workspace/good-resume/docs/online-resume/vuepress.md",preload:Ie.preload},{path:"/others/summary",element:_.createElement(Te),filePath:"/Users/gaowei/workspace/good-resume/docs/others/summary.md",preload:Te.preload}];qe({data:In()?window==null?void 0:window.ISLAND_PAGE_DATA:null,setData:e=>{}});const Qn=(e=()=>!0)=>Promise.all(On.filter(e).map(async t=>({...await t.preload(),routePath:t.path})));function Cn(e){return e.charAt(0)==="/"?e:"/"+e}function Rn(e){if(!e)return"/";if(e.startsWith("http"))return e;let t="";return t+=".html",e.endsWith("/")&&(t="index"+t),Cn(`${e}${t}`)}function Pn(e){const{pathname:t}=e,n=new RegExp(e.activeMatch||e.link).test(t);return r("div",{text:"sm",font:"medium",m:"x-3",className:`${n?"text-brand":""}`,children:r(Ae,{href:Rn(e.link),children:e.text})},e.text)}const Nn="_check_1tqe3_17",An="_icon_1tqe3_34",Ln="_dark_1tqe3_29",oe={switch:"_switch_1tqe3_1",check:Nn,icon:An,dark:Ln};function Mn(e){var t;return r("button",{className:`${oe.switch} ${e.className}`,id:(t=e.id)!=null?t:"",type:"button",role:"switch",...e.onClick?{onClick:e.onClick}:{},children:r("span",{className:oe.check,children:r("span",{className:oe.icon,children:e.children})})})}const $n="_sun_8e60k_1",Dn="_moon_8e60k_5",Oe={sun:$n,moon:Dn},qn=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...e},d.createElement("path",{d:"M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"}),d.createElement("path",{d:"M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"}),d.createElement("path",{d:"M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"}),d.createElement("path",{d:"M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"}),d.createElement("path",{d:"M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"}),d.createElement("path",{d:"M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"}),d.createElement("path",{d:"M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"}),d.createElement("path",{d:"M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"}),d.createElement("path",{d:"M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"})),zn=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...e},d.createElement("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"}));let P=!0,V,N,$;typeof window<"u"&&typeof localStorage<"u"&&(N=localStorage.getItem(ae)||"auto",$=window.matchMedia("(prefers-color-scheme: dark)"),P=N==="auto"?$.matches:N==="dark",$.onchange=e=>{N==="auto"&&ie(P=e.matches)});const ie=e=>{V[e?"add":"remove"]("dark")},jn=()=>{if(typeof window<"u"&&V===void 0){V=document.documentElement.classList;const e=()=>{const t=localStorage.getItem(ae)||"auto";V&&(ie(t==="auto"?$.matches:t==="dark"),P=!P)};window.addEventListener("storage",e)}return()=>{ie(P=!P),typeof window<"u"&&typeof localStorage<"u"&&(P?N=$.matches?"auto":"dark":N=$.matches?"light":"auto",localStorage.setItem(ae,N))}};function Me(e){const t=jn();return v(Mn,{onClick:t,children:[r(qn,{className:Oe.sun}),r(zn,{className:Oe.moon})]})}const Bn=e=>d.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},d.createElement("path",{fill:"currentColor",d:"M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23zM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"})),Hn=e=>d.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("title",null,"GitHub"),d.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})),Wn={github:Hn},Un=({translationMenuData:e})=>r("div",{className:O.navTranslations,flex:"~",text:"sm",font:"bold",justify:"center",children:r("div",{m:"x-1.5",children:r(Le,{...e})})}),Fn=({socialLinks:e})=>r("div",{className:"social-links",flex:"","items-center":"",before:"menu-item-before",children:r("div",{flex:"","items-center":"",w:"9",h:"9",transition:"color duration-300",color:"hover:brand",children:e.map(t=>{const n=Wn[t.icon];return r("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",w:"5",h:"5",children:r(n,{fill:"currentColor"})},t.link)})})});function Vn(e){var A;const{isScreenOpen:t,localeData:n,siteData:o,pathname:a}=e,i=j(null),l=Object.values(o.themeConfig.locales||{}),s=l.length>1,u=n.nav||[],m=((A=o==null?void 0:o.themeConfig)==null?void 0:A.socialLinks)||[],p=o.appearance!==!1,h=m.length>0,I=s?{text:r(Bn,{w:"18px",h:"18px"}),items:l.map(b=>({text:b.label,link:`/${b.lang}`})),activeIndex:l.findIndex(b=>b.lang===n.lang)}:null,E=()=>r("div",{className:`items-center appearance pa-2 ${O.navAppearance}`,flex:"~",justify:"center",children:r(Me,{})}),T=({menuItems:b})=>r("div",{className:O.navMenu,children:b.map((g,x)=>r("div",{w:"100%",className:O.navMenuItem,children:"link"in g?r(Pn,{pathname:a,...g},x):r("div",{m:"x-3",last:"mr-0",children:r(Le,{...g})},x)},x))});return G(()=>(i.current&&t&&mn(i.current,{reserveScrollBarGap:!0}),()=>{hn()}),[t]),r("div",{className:`${O.navScreen} ${t?O.active:""}`,ref:i,id:"navScreen",children:v("div",{className:O.container,children:[r(T,{menuItems:u}),v("div",{className:O.socialAndAppearance,flex:"~",justify:"center","items-center":"center",children:[p&&r(E,{}),h&&r(Fn,{socialLinks:m})]}),s&&r(Un,{translationMenuData:I})]})})}function Gn(){const[e,t]=S(!1);function n(){t(!0),window.addEventListener("resize",i)}function o(){t(!1),window.removeEventListener("resize",i)}function a(){e?o():n()}function i(){window.outerWidth>=768&&o()}return{isScreenOpen:e,openScreen:n,closeScreen:o,toggleScreen:a}}function Kn(e){const{localeData:t,siteData:n,pathname:o}=e,{isScreenOpen:a,toggleScreen:i}=Gn();return v(ze,{children:[r("button",{onClick:i,className:`${a?L.active:""} ${L.navHamburger}`,children:v("span",{className:L.container,children:[r("span",{className:L.top}),r("span",{className:L.middle}),r("span",{className:L.bottom})]})}),r(Vn,{isScreenOpen:a,localeData:t,siteData:n,pathname:o})]})}window.ISLANDS={BackTop:$t,Search:Ft,NavHamburger:Kn,SwitchAppearance:Me};window.ISLAND_PROPS=JSON.parse(document.getElementById("island-props").textContent);export{K as S,Y as a,gt as b,wt as c,at as f,Qn as g,_t as i,Rn as n,Re as r};
