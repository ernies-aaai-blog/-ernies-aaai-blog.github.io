import{d as u,o as s,c as o,a as t,t as i,u as m,b as a,F as v,r as w,e as g,f as l,g as $,h as y,i as A,_ as F,j as f}from"./framework.CImiY3XN.js";const B=t("dt",{class:"sr-only"},"Published on",-1),C={class:"text-base leading-6 font-medium text-gray-500 dark:text-gray-300"},I=["datetime"],b=u({__name:"Date",props:{date:{}},setup(d){const e=d;function r(){return new Date(e.date.time).toISOString()}return(n,_)=>(s(),o("dl",null,[B,t("dd",C,[t("time",{datetime:r()},i(n.date.string),9,I)])]))}}),x=JSON.parse(`[{"title":"Grouse Mountain","url":"/posts/04-grousemountain","excerpt":"<p>We didn't ski.</p>\\n<p><img src=\\"/img/04-grousemountain/bear.webp\\" alt=\\"\\"></p>\\n","date":{"time":1708516800000,"string":"February 21, 2024"}},{"title":"Edgemont Village","url":"/posts/03-edgemont-village","excerpt":"<p>Edgemont Village is a warm little town next to the Grouse Mountain. Stores there are nothing special, but for a foreigner like me, this warm vibe is pretty refreshing.</p>\\n","date":{"time":1708516800000,"string":"February 21, 2024"}},{"title":"Capilano Suspension Bridge","url":"/posts/02-capilano","excerpt":"<p>We took a free shuttle bus to the Capilano Suspension Bridge. The entrance ticket was not cheap, probably because it includes the bus fee.</p>\\n<p><img src=\\"/img/02-capilano/bridge.webp\\" alt=\\"\\"></p>\\n<blockquote>\\n<p>Capilano Suspension Bridge (the only interesting thing in this spot)</p>\\n</blockquote>\\n","date":{"time":1708516800000,"string":"February 21, 2024"}},{"title":"3AM in the Hotel","url":"/posts/01-3am-in-the-hotel","excerpt":"<p>Due to my jet lag, I'm wide awake at 3AM. So I grabbed my camera and tried to look for something meaningful.</p>\\n<p><img src=\\"/img/01-3am-in-the-hotel/marriott.webp\\" alt=\\"\\"></p>\\n<blockquote>\\n<p>Marriott hotel (obviously better than mine)</p>\\n</blockquote>\\n","date":{"time":1708516800000,"string":"February 21, 2024"}},{"title":"Day Minus One","url":"/posts/00-init","excerpt":"<p>At this night before the trip, I stole a blogging site from <a href=\\"https://blog.vuejs.org\\" target=\\"_blank\\" rel=\\"noreferrer\\">https://blog.vuejs.org</a>.<br>\\nFinishing setting up the codebase, let's see what I can write in the following two weeks. 😃</p>\\n","date":{"time":1708430400000,"string":"February 20, 2024"}}]`),N={class:"divide-y divide-gray-200 dark:divide-slate-200/5"},S={class:"pt-6 pb-8 space-y-2 md:space-y-5"},M={class:"text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},D={class:"text-lg leading-7 text-gray-500 dark:text-white"},j={class:"divide-y divide-gray-200 dark:divide-slate-200/5"},T={class:"py-12"},E={class:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"},L={class:"space-y-5 xl:col-span-3"},P={class:"space-y-6"},V={class:"text-2xl leading-8 font-bold tracking-tight"},q=["href"],H=["innerHTML"],R={class:"text-base leading-6 font-medium"},O=["href"],G=u({__name:"Home",setup(d){const{frontmatter:e}=m();return(r,n)=>(s(),o("div",N,[t("div",S,[t("h1",M,i(a(e).title),1),t("p",D,i(a(e).subtext),1)]),t("ul",j,[(s(!0),o(v,null,w(a(x),({title:_,url:c,date:h,excerpt:p})=>(s(),o("li",T,[t("article",E,[g(b,{date:h},null,8,["date"]),t("div",L,[t("div",P,[t("h2",V,[t("a",{class:"text-gray-900 dark:text-white",href:c},i(_),9,q)]),p?(s(),o("div",{key:0,class:"prose dark:prose-invert max-w-none text-gray-500 dark:text-gray-300",innerHTML:p},null,8,H)):l("",!0)]),t("div",R,[t("a",{class:"link","aria-label":"read more",href:c},"Read more →",8,O)])])])]))),256))])]))}}),W={class:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 dark:xl:border-slate-200/5"},J=t("dt",{class:"sr-only"},"Authors",-1),z={class:"flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"},K={class:"flex items-center space-x-2"},Q=["src"],U=["src"],X={class:"text-sm font-medium leading-5 whitespace-nowrap"},Y=t("dt",{class:"sr-only"},"Name",-1),Z={class:"text-gray-900 dark:text-white"},tt={key:0,class:"sr-only"},et={key:1},st=["href"],at=u({__name:"Author",setup(d){const{frontmatter:e}=m();return(r,n)=>(s(),o("dl",W,[J,t("dd",null,[t("ul",z,[t("li",K,[a(e).gravatar?(s(),o("img",{key:0,src:"https://gravatar.com/avatar/"+a(e).gravatar,alt:"author image",class:"w-10 h-10 rounded-full"},null,8,Q)):a(e).avatar?(s(),o("img",{key:1,src:a(e).avatar,alt:"author image",class:"w-10 h-10 rounded-full"},null,8,U)):l("",!0),t("dl",X,[Y,t("dd",Z,i(a(e).author),1),a(e).twitter?(s(),o("dt",tt,"Twitter")):l("",!0),a(e).twitter?(s(),o("dd",et,[t("a",{href:"https://twitter.com/"+a(e).twitter,target:"_blank",rel:"noopnener noreferrer",class:"link"},i(a(e).twitter),9,st)])):l("",!0)])])])])]))}}),ot={class:"xl:divide-y xl:divide-gray-200 dark:xl:divide-slate-200/5"},it={class:"pt-6 xl:pb-10 space-y-1 text-center"},rt={class:"text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"},nt={class:"divide-y xl:divide-y-0 divide-gray-200 dark:divide-slate-200/5 xl:grid xl:grid-cols-4 xl:gap-x-10 pb-16 xl:pb-20",style:{"grid-template-rows":"auto 1fr"}},lt={class:"divide-y divide-gray-200 dark:divide-slate-200/5 xl:pb-0 xl:col-span-3 xl:row-span-2"},dt={class:"text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-slate-200/5 xl:col-start-1 xl:row-start-2"},ct={key:0,class:"py-8"},_t=t("h2",{class:"text-xs tracking-wide uppercase text-gray-500 dark:text-white"}," Next Article ",-1),ht={class:"link"},pt=["href"],xt={key:1,class:"py-8"},ut=t("h2",{class:"text-xs tracking-wide uppercase text-gray-500 dark:text-white"}," Previous Article ",-1),gt={class:"link"},mt=["href"],yt=t("div",{class:"pt-8"},[t("a",{class:"link",href:"/"},"← Back to the blog")],-1),ft=u({__name:"Article",setup(d){const{frontmatter:e}=m(),r=$();function n(){return x.findIndex(p=>p.url===r.path)}const _=y(()=>x[n()].date),c=y(()=>x[n()-1]),h=y(()=>x[n()+1]);return(p,Mt)=>{const k=A("Content");return s(),o("article",ot,[t("header",it,[g(b,{date:_.value},null,8,["date"]),t("h1",rt,i(a(e).title),1)]),t("div",nt,[g(at),t("div",lt,[g(k,{class:"prose dark:prose-invert max-w-none pt-10 pb-8"})]),t("footer",dt,[c.value?(s(),o("div",ct,[_t,t("div",ht,[t("a",{href:c.value.url},i(c.value.title),9,pt)])])):l("",!0),h.value?(s(),o("div",xt,[ut,t("div",gt,[t("a",{href:h.value.url},i(h.value.title),9,mt)])])):l("",!0),yt])])])}}}),bt={},kt={class:"text-3xl font-bold"};function vt(d,e){return s(),o("h1",kt,"404 Page Not Found")}const wt=F(bt,[["render",vt]]),$t={class:"antialiased dark:bg-slate-900"},At={class:"max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"},Ft={class:"flex justify-between items-center py-10 font-bold"},Bt={class:"text-xl",href:"/","aria-label":"Ernie's AAAI Blog"},Ct={key:0,class:"hidden md:inline dark:text-white"},It=t("div",{class:"text-sm text-gray-500 dark:text-white leading-5"},[t("a",{class:"hover:text-gray-700 dark:hover:text-gray-200",href:"https://ernestchu.github.io",target:"_blank",rel:"noopener"},"me →")],-1),Nt={class:"max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"},St=u({__name:"Layout",setup(d){const{page:e,frontmatter:r}=m();return(n,_)=>(s(),o("div",$t,[t("div",At,[t("nav",Ft,[t("a",Bt,[a(r).index?l("",!0):(s(),o("span",Ct,"Ernie's AAAI Blog"))]),It])]),t("main",Nt,[a(r).index?(s(),f(G,{key:0})):a(e).isNotFound?(s(),f(wt,{key:1})):(s(),f(ft,{key:2}))])]))}}),jt={Layout:St};export{jt as R};