import{c as g,o as w,r as v,d as _,s as y,y as D,p as B,q as E,j as V,f as s,a as l,T as b,w as c,k as h,x as k,n as $,i as S,C as U,h as x,z as A,u as p,A as T}from"./app-BSrZtk60.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M,a as N,b as O}from"./TextInput.vue_vue_type_script_setup_true_lang-Cm9hX2sR.js";const P={},W={class:"inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 dark:focus:ring-offset-gray-800"};function j(u,r){return w(),g("button",W,[v(u.$slots,"default")])}const C=z(P,[["render",j]]),F={class:"fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0","scroll-region":""},I=_({__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(u,{emit:r}){const t=u,o=r,m=y(),d=y(t.show);D(()=>t.show,()=>{var a;t.show?(document.body.style.overflow="hidden",d.value=!0,(a=m.value)==null||a.showModal()):(document.body.style.overflow="",setTimeout(()=>{var f;(f=m.value)==null||f.close(),d.value=!1},200))});const i=()=>{t.closeable&&o("close")},n=a=>{a.key==="Escape"&&(a.preventDefault(),t.show&&i())};B(()=>document.addEventListener("keydown",n)),E(()=>{document.removeEventListener("keydown",n),document.body.style.overflow=""});const e=V(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(a,f)=>(w(),g("dialog",{class:"z-50 m-0 min-h-full min-w-full overflow-y-auto bg-transparent backdrop:bg-transparent",ref_key:"dialog",ref:m},[s("div",F,[l(b,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:c(()=>[h(s("div",{class:"fixed inset-0 transform transition-all",onClick:i},f[0]||(f[0]=[s("div",{class:"absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-900"},null,-1)]),512),[[k,a.show]])]),_:1}),l(b,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:c(()=>[h(s("div",{class:$(["mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800",e.value])},[d.value?v(a.$slots,"default",{key:0}):S("",!0)],2),[[k,a.show]])]),_:3})])],512))}}),K=["type"],L=_({__name:"SecondaryButton",props:{type:{default:"button"}},setup(u){return(r,t)=>(w(),g("button",{type:r.type,class:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"},[v(r.$slots,"default")],8,K))}}),q={class:"space-y-6"},G={class:"p-6"},H={class:"mt-6"},J={class:"mt-6 flex justify-end"},Y=_({__name:"DeleteUserForm",setup(u){const r=y(!1),t=y(null),o=U({password:""}),m=()=>{r.value=!0,T(()=>{var n;return(n=t.value)==null?void 0:n.focus()})},d=()=>{o.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>{var n;return(n=t.value)==null?void 0:n.focus()},onFinish:()=>{o.reset()}})},i=()=>{r.value=!1,o.clearErrors(),o.reset()};return(n,e)=>(w(),g("section",q,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Delete Account "),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),l(C,{onClick:m},{default:c(()=>e[1]||(e[1]=[x("Delete Account")])),_:1}),l(I,{show:r.value,onClose:i},{default:c(()=>[s("div",G,[e[4]||(e[4]=s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Are you sure you want to delete your account? ",-1)),e[5]||(e[5]=s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)),s("div",H,[l(M,{for:"password",value:"Password",class:"sr-only"}),l(N,{id:"password",ref_key:"passwordInput",ref:t,modelValue:p(o).password,"onUpdate:modelValue":e[0]||(e[0]=a=>p(o).password=a),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:A(d,["enter"])},null,8,["modelValue"]),l(O,{message:p(o).errors.password,class:"mt-2"},null,8,["message"])]),s("div",J,[l(L,{onClick:i},{default:c(()=>e[2]||(e[2]=[x(" Cancel ")])),_:1}),l(C,{class:$(["ms-3",{"opacity-25":p(o).processing}]),disabled:p(o).processing,onClick:d},{default:c(()=>e[3]||(e[3]=[x(" Delete Account ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}});export{Y as _};
