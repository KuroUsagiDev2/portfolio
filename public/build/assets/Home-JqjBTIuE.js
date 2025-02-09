import{d as x,c as s,o as r,a as f,f as t,u as v,m as h,F as n,l as y,n as b,t as i,i as d,h as k}from"./app-BSrZtk60.js";const p={class:"bg-gray-900 text-white py-24"},w={class:"px-6 max-w-screen-lg mx-auto"},S={class:"space-y-12"},L=["src","alt"],V={class:"md:w-1/2 px-6"},C={class:"text-2xl font-semibold text-gray-100"},F={class:"mt-4 text-gray-300"},N={class:"flex flex-wrap gap-2 mt-4"},B=["src","alt"],P={class:"mt-4 flex space-x-4"},T=["href"],H=["href"],Q=x({__name:"Home",props:{projects:Array},setup(g){const a=[{key:"Laravel",icon:"/icons/laravel.svg",alt:"Laravel",border:"border-red-600"},{key:"VueJS",icon:"/icons/vue.svg",alt:"VueJS",border:"border-green-600"},{key:"Tailwind CSS",icon:"/icons/tailwind.svg",alt:"Tailwind CSS",border:"border-blue-400"},{key:"Flutter",icon:"/icons/flutter.svg",alt:"Flutter",border:"border-blue-500"},{key:"MySQL",icon:"/icons/mysql.svg",alt:"MySQL",border:"border-yellow-600"},{key:"Svelte",icon:"/icons/svelte.svg",alt:"Svelte",border:"border-orange-500"},{key:"React",icon:"/icons/react.svg",alt:"React",border:"border-blue-600"},{key:"Symfony",icon:"/icons/symfony.svg",alt:"Symfony",border:"border-gray-700"}];return(J,c)=>(r(),s(n,null,[f(v(h),{title:"Projects"}),t("section",p,[t("div",w,[c[0]||(c[0]=t("h1",{class:"text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center text-gray-100"}," Projects ",-1)),t("div",S,[(r(!0),s(n,null,y(g.projects,(e,_)=>(r(),s("div",{key:e.id,class:"flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-6 rounded-lg shadow-lg"},[t("img",{src:e.image,alt:e.title,class:b(["w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0",_%2===0?"md:order-2":"md:order-1"])},null,10,L),t("div",V,[t("h2",C,i(e.title),1),t("p",F,i(e.description),1),t("div",N,[(r(!0),s(n,null,y(e.tech_stack.split(","),o=>{var m,u;return r(),s("div",{key:o,class:b(["px-3 py-1 border rounded-md text-sm flex items-center",((m=a.find(l=>l.key===o.trim()))==null?void 0:m.border)||"border-gray-500"])},[a.find(l=>l.key===o.trim())?(r(),s("img",{key:0,src:(u=a.find(l=>l.key===o.trim()))==null?void 0:u.icon,alt:o,class:"w-4 h-4 inline mr-1"},null,8,B)):d("",!0),k(" "+i(o.trim()),1)],2)}),128))]),t("div",P,[e.link?(r(),s("a",{key:0,href:e.link,class:"text-blue-400 hover:underline",target:"_blank"},"Live Project",8,T)):d("",!0),e.github?(r(),s("a",{key:1,href:e.github,class:"text-blue-400 hover:underline",target:"_blank"},"GitHub",8,H)):d("",!0)])])]))),128))])])])],64))}});export{Q as default};
