(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1780)}])},9749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(6495).Z,n=a(2648).Z,r=a(1598).Z,s=a(7273).Z,o=r(a(7294)),l=n(a(3121)),c=a(2675),d=a(139),u=a(8730);a(7238);var h=n(a(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,a,n,r,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===a&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,r=!1;n.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let v=o.forwardRef((e,t)=>{var{imgAttributes:a,heightInt:n,widthInt:r,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:h,fill:m,placeholder:g,loading:f,srcString:v,config:b,unoptimized:x,loader:A,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:C,onLoad:z,onError:y}=e,N=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=h?"lazy":f,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},N,a,{width:r,height:n,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:f,style:i({},d,u),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(y&&(e.src=e.src),e.complete&&p(e,v,g,j,w,_,x))},[v,g,j,w,_,y,x,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,g,j,w,_,x)},onError:e=>{C(!0),"blur"===g&&_(!0),y&&y(e)}})))}),b=o.forwardRef((e,t)=>{let a,n;var r,{src:p,sizes:b,unoptimized:x=!1,priority:A=!1,loading:j,className:w,quality:_,width:C,height:z,fill:y,style:N,onLoad:k,onLoadingComplete:E,placeholder:I="empty",blurDataURL:S,layout:O,objectFit:R,objectPosition:H,lazyBoundary:B,lazyRoot:U}=e,D=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let Q=o.useContext(u.ImageConfigContext),L=o.useMemo(()=>{let e=m||Q||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:a})},[Q]),V=D,P=V.loader||h.default;delete V.loader;let M="__next_img_default"in P;if(M){if("custom"===L.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=P;P=t=>{let{config:a}=t,i=s(t,["config"]);return e(i)}}if(O){"fill"===O&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(N=i({},N,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!b&&(b=t)}let W="",J=f(C),T=f(z);if("object"==typeof(r=p)&&(g(r)||void 0!==r.src)){let e=g(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(a=e.blurWidth,n=e.blurHeight,S=S||e.blurDataURL,W=e.src,!y){if(J||T){if(J&&!T){let t=J/e.width;T=Math.round(e.height*t)}else if(!J&&T){let t=T/e.height;J=Math.round(e.width*t)}}else J=e.width,T=e.height}}let X=!A&&("lazy"===j||void 0===j);((p="string"==typeof p?p:W).startsWith("data:")||p.startsWith("blob:"))&&(x=!0,X=!1),L.unoptimized&&(x=!0),M&&p.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(x=!0);let[G,F]=o.useState(!1),[Z,q]=o.useState(!1),Y=f(_),K=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:H}:{},Z?{}:{color:"transparent"},N),$="blur"===I&&S&&!G?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:T,blurWidth:a,blurHeight:n,blurDataURL:S}),'")')}:{},ee=function(e){let{config:t,src:a,unoptimized:i,width:n,quality:r,sizes:s,loader:o}=e;if(i)return{src:a,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,a){let{deviceSizes:i,allSizes:n}=e;if(a){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(a);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let r=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:r,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,i)=>"".concat(o({config:t,src:a,quality:r,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:o({config:t,src:a,quality:r,width:l[d]})}}({config:L,src:p,unoptimized:x,width:J,quality:Y,sizes:b,loader:P}),et=p,ea={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:V.crossOrigin},ei=o.useRef(k);o.useEffect(()=>{ei.current=k},[k]);let en=o.useRef(E);o.useEffect(()=>{en.current=E},[E]);let er=i({isLazy:X,imgAttributes:ee,heightInt:T,widthInt:J,qualityInt:Y,className:w,imgStyle:K,blurStyle:$,loading:j,config:L,fill:y,unoptimized:x,placeholder:I,loader:P,srcString:et,onLoadRef:ei,onLoadingCompleteRef:en,setBlurComplete:F,setShowAltText:q},V);return o.default.createElement(o.default.Fragment,null,o.default.createElement(v,Object.assign({},er,{ref:t})),A?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ea))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:i,blurHeight:n,blurDataURL:r}=e,s=i||t,o=n||a,l=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function a(e){let{config:t,src:a,width:i,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},1780:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return G}});var i,n,r,s,o,l=a(5893),c=a(9008),d=a.n(c),u=a(9998),h=a.n(u);function m(){return(0,l.jsx)("footer",{className:h().footer,children:(0,l.jsx)("p",{children:"Don't Worry di Marina Brognoli - Via Trento 14, 25060 Collebeato (BS) - P.IVA 04412200984"})})}var g=a(5675),f=a.n(g),p=a(55),v=a.n(p),b=a(7294);function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var A=function(e){return b.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),i||(i=b.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"})))};function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var w=function(e){return b.createElement("svg",j({clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=b.createElement("path",{d:"M22 16.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 .75-.75zm0-5a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 .75-.75zm0-5a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 .75-.75z",fillRule:"nonzero"})))};function _(){return(0,l.jsx)("header",{className:v().header,children:(0,l.jsxs)("div",{className:v().container,children:[(0,l.jsx)("a",{href:"/",children:(0,l.jsx)(f(),{alt:"Company logo",src:"logo-green.svg",width:"120",height:"60"})}),(0,l.jsxs)("nav",{className:v().navigation,children:[(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:"Chi siamo"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:"Eventi"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:"Gadget"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:"Use Cases"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#",children:"Contatti"})})]}),(0,l.jsx)("div",{className:v().menubar,children:(0,l.jsx)(w,{})})]}),(0,l.jsx)("a",{href:"https://www.instagram.com/marina.brognoli/",target:"_blank",className:v().instagram,rel:"noopener noreferrer",children:(0,l.jsx)(A,{})})]})})}var C=a(5589),z=a.n(C),y={src:"/dontworry//_next/static/media/take-care.920e2784.webp",height:2685,width:4033,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JQBOgB6HMWwIAAD8sK+TY4Jj+FPLYZ4hQfnP92a1Qug5olkTvIyb3JtlR7Zeh8PAAA==",blurWidth:8,blurHeight:5},N={src:"/dontworry//_next/static/media/magliette.56eb15bc.webp",height:427,width:640,blurDataURL:"data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAUAAkA4JagCdAD0ING1QAD+m66Cevutnt26oEuqS5xTZ5nLnSKIGXLqUjIi4sXoLzA/cl/gdq2VUskn6VjFAAA=",blurWidth:8,blurHeight:5},k={src:"/dontworry//_next/static/media/vetrofania.56f8141e.webp",height:959,width:640,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoFAAgAAkA4JQBOgCHWriYAAP7mqN3zl2WdXWQqBofVvRZCe+SfXM8ijspqyteNb2t7uWWhEAAAAA==",blurWidth:5,blurHeight:8},E={src:"/dontworry//_next/static/media/festa.6c63c5b7.webp",height:427,width:640,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAUAAkA4JYgCdAD0h/vOAAD+Shrndtub/4PN4iOp/MOWhWVYbLfdN1uQbyvyLHZuSY6wFxJxE7W44FU9mAAA",blurWidth:8,blurHeight:5},I={src:"/dontworry//_next/static/media/work-togheter.8c73c0ad.webp",height:1600,width:2400,blurDataURL:"data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAkA4JZQCdAD0lbiQQAD++WObtBRwmRppXeh4121dVZJjMNu5qVzuJrFT3wZWBxcpYuLJBs4A",blurWidth:8,blurHeight:5},S=a(3775),O=a.n(S),R=a(7595),H=a.n(R);function B(e){let{params:t}=e,{title:a,bgImg:i,text:n,link:r}=t;return(0,l.jsx)("div",{className:H().service,children:(0,l.jsxs)("div",{className:H().serviceContainer,children:[(0,l.jsx)("div",{className:H().front,style:{backgroundImage:"url(".concat(i.src,")")},children:(0,l.jsx)("p",{children:a})}),(0,l.jsx)("div",{className:H().back,children:(0,l.jsxs)("div",{className:H().serviceContent,children:[(0,l.jsx)("h3",{children:a}),(0,l.jsx)("p",{children:n}),(0,l.jsx)("button",{children:"Scopri di pi\xf9"})]})})]})})}let U=[{title:"Gadget",bgImg:{src:"/dontworry//_next/static/media/gadget.db2e2144.webp",height:1280,width:1920,blurDataURL:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAACQAQCdASoIAAUAAkA4JQBOgB5P3tAA+OUpIC4VOrD9poH0F+C1cKUVL3MMEU9i6PiBKEUIrtDVN4/piB9zH94meLuuQAAA",blurWidth:8,blurHeight:5},text:"Ti aiutiamo a scegliere il gadget pi\xf9 adatto e ti supportiamo dall'idea alla realizzazione",link:"#"},{title:"Eventi",bgImg:{src:"/dontworry//_next/static/media/events.78633b81.webp",height:1280,width:1920,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAkA4JQBOgB6Q9drgAPwbZ8deXiZO1kRM9Zu8w/fToh/1KEOxs+3CSdvuHChYjhQAAAA=",blurWidth:8,blurHeight:5},text:"Ti forniamo tutti i servizi necessari per realizzare al meglio il tuo evento",link:"#"}];function D(){return(0,l.jsx)("div",{className:O().services,children:U.map(e=>(0,l.jsx)(B,{params:e},"service-".concat(e.title.toLowerCase())))})}var Q=a(8086),L=a.n(Q);function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var P=function(e){return b.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),r||(r=b.createElement("path",{d:"M19 2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2zm-8.5 0h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM12 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5-3H7V4.976h10V19z"})))};function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var W=function(e){return b.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),s||(s=b.createElement("path",{d:"M12 12.713.015 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5.562l-12 9.725z"})))};function J(){return(J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var T=function(e){return b.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},e),o||(o=b.createElement("path",{d:"M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})))};function X(){return(0,l.jsxs)("div",{className:L().contacts,children:[(0,l.jsxs)("div",{className:L().contact,children:[(0,l.jsx)(T,{}),(0,l.jsx)("p",{children:"Via Trento 14, 25060 Collebeato (BS)"})]}),(0,l.jsxs)("div",{className:L().contact,children:[(0,l.jsx)(P,{}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"tel:+393496420720",children:"0039.3496420720"})})]}),(0,l.jsxs)("div",{className:L().contact,children:[(0,l.jsx)(W,{}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"mail:marina.brognoli@alice.it",children:"marina.brognoli@alice.it"})})]})]})}function G(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(d(),{children:[(0,l.jsx)("title",{children:"Marina Brognoli - Don't Worry"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("main",{children:[(0,l.jsxs)("section",{className:z().heroContainer,children:[(0,l.jsx)(_,{}),(0,l.jsx)("div",{className:z().hero,style:{backgroundImage:"url(".concat(y.src,")")}})]}),(0,l.jsx)("section",{className:z().about,children:(0,l.jsxs)("div",{className:z().box,children:[(0,l.jsx)("div",{className:z().logo,children:(0,l.jsx)(f(),{src:"logo-white.svg",width:"200",height:"100",alt:"logo"})}),(0,l.jsxs)("div",{className:z().content,children:[(0,l.jsx)("h1",{children:"I take care of you"}),(0,l.jsx)("p",{children:"Diamo forma alle vostre idee restando al vostro fianco in ogni progetto. Rendiamo ogni vostro evento unico e speciale. Ci prendiamo cura dei vostri progetti."})]})]})}),(0,l.jsxs)("section",{className:z().section,children:[(0,l.jsxs)("div",{className:z().sectionHead,children:[(0,l.jsx)("h2",{children:"Cosa facciamo"}),(0,l.jsx)("h3",{children:"I nostri servizi"})]}),(0,l.jsx)("div",{className:z().container,children:(0,l.jsx)(D,{})})]}),(0,l.jsxs)("section",{className:z().workTogheter,style:{backgroundImage:"url(".concat(I.src,")")},children:[(0,l.jsx)("div",{className:z().sectionHead,children:(0,l.jsx)("h3",{children:"Lavoriamo insieme"})}),(0,l.jsx)("div",{className:z().container,children:(0,l.jsx)("button",{children:"Contattami"})})]}),(0,l.jsxs)("section",{className:z().section,children:[(0,l.jsxs)("div",{className:z().sectionHead,children:[(0,l.jsx)("h2",{children:"Cosa abbiamo fatto"}),(0,l.jsx)("h3",{children:"I nostri lavori"})]}),(0,l.jsx)("div",{className:z().container,children:(0,l.jsxs)("div",{className:z().useCases,children:[(0,l.jsxs)("div",{className:z().useCase,children:[(0,l.jsx)("div",{className:z().useCaseImg,style:{backgroundImage:"url(".concat(N.src,")")}}),(0,l.jsxs)("div",{className:z().useCaseContent,children:[(0,l.jsx)("p",{children:"Abbiamo aiutato l'azienda ABC a creare magliette personalizzate di alta qualit\xe0 utilizzando la nostra tecnologia di stampa avanzata. Grazie alla nostra soluzione personalizzata, l'azienda \xe8 riuscita a creare un'immagine di marca unica e a differenziarsi dai concorrenti, ottenendo anche una maggiore visibilit\xe0 sul mercato. La nostra soluzione di stampa personalizzata su magliette pu\xf2 fare lo stesso per la tua azienda."}),(0,l.jsx)("button",{children:"Scopri di pi\xf9"})]})]}),(0,l.jsxs)("div",{className:z().useCase,children:[(0,l.jsx)("div",{className:z().useCaseImg,style:{backgroundImage:"url(".concat(k.src,")")}}),(0,l.jsxs)("div",{className:z().useCaseContent,children:[(0,l.jsx)("p",{children:"Aiutiamo la tua azienda a creare un'immagine accattivante e di impatto con le nostre vetrofanie personalizzate. Utilizziamo materiali di alta qualit\xe0 e una tecnologia di stampa avanzata per garantire un'alta risoluzione dei colori. Grazie alla nostra soluzione, la tua azienda pu\xf2 creare un'immagine di marca unica e rafforzare la propria presenza sul mercato."}),(0,l.jsx)("button",{children:"Scopri di pi\xf9"})]})]}),(0,l.jsxs)("div",{className:z().useCase,children:[(0,l.jsx)("div",{className:z().useCaseImg,style:{backgroundImage:"url(".concat(E.src,")")}}),(0,l.jsxs)("div",{className:z().useCaseContent,children:[(0,l.jsx)("p",{children:"Aiutiamo la tua azienda a creare eventi indimenticabili per i tuoi dipendenti e i tuoi clienti. Abbiamo lavorato con l'azienda ABC per organizzare un evento aziendale su misura per le loro esigenze, fornendo servizi di pianificazione, coordinamento, e gestione logistica. Grazie alla nostra soluzione personalizzata, l'azienda ABC \xe8 stata in grado di creare un'esperienza di evento coinvolgente e memorabile per i propri ospiti. La nostra soluzione di eventi aziendali su misura pu\xf2 fare lo stesso per la tua azienda, fornendo una gestione professionale e personalizzata per i tuoi eventi aziendali."}),(0,l.jsx)("button",{children:"Scopri di pi\xf9"})]})]})]})})]}),(0,l.jsxs)("section",{className:z().section,children:[(0,l.jsxs)("div",{className:z().sectionHead,children:[(0,l.jsx)("h2",{children:"Restiamo in contatto"}),(0,l.jsx)("h3",{children:"Contatti"})]}),(0,l.jsx)("div",{className:z().container,children:(0,l.jsx)("div",{className:z().contacts,children:(0,l.jsx)(X,{})})})]}),(0,l.jsx)(m,{})]})]})}},8086:function(e){e.exports={contacts:"Contacts_contacts__jUIpB",contact:"Contacts_contact__F_ZvS"}},9998:function(e){e.exports={footer:"Footer_footer__BH5s_"}},55:function(e){e.exports={header:"Header_header__ubBbX",container:"Header_container__nuYkc",navigation:"Header_navigation__tIj70",menubar:"Header_menubar__V3jeX",instagram:"Header_instagram__1VaYB"}},5589:function(e){e.exports={heroContainer:"Home_heroContainer__jnbOx",hero:"Home_hero__NQ1he",section:"Home_section__EaDnq",about:"Home_about__On45r Home_section__EaDnq",box:"Home_box__1j7_f",logo:"Home_logo__FLQOc",sectionHead:"Home_sectionHead__i9CLR",container:"Home_container__97eC3",workTogheter:"Home_workTogheter__lJjXH",useCases:"Home_useCases__xYAuB",useCase:"Home_useCase__HvsBW",useCaseContent:"Home_useCaseContent__SXnc_",useCaseImg:"Home_useCaseImg__tV7g8"}},7595:function(e){e.exports={serviceContainer:"Service_serviceContainer__BsRDN",service:"Service_service__YIldH",front:"Service_front__VKVXT",back:"Service_back__ihAc0",serviceContent:"Service_serviceContent__h2DUr"}},3775:function(e){e.exports={services:"Services_services__Annep"}},9008:function(e,t,a){e.exports=a(3121)},5675:function(e,t,a){e.exports=a(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);