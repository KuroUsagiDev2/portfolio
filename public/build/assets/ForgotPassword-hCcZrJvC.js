import{d,C as u,e as p,o as l,w as m,a as t,f as o,c,i as f,u as a,m as w,t as _,g,n as y,h as k}from"./app-BSrZtk60.js";import{_ as b}from"./GuestLayout.vue_vue_type_script_setup_true_lang-CbMSXVyH.js";import{_ as x,a as V,b as v}from"./TextInput.vue_vue_type_script_setup_true_lang-Cm9hX2sR.js";import{P as B}from"./PrimaryButton-CCe_R1aK.js";import"./ApplicationLogo-ZEWP-a6-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={key:0,class:"mb-4 text-sm font-medium text-green-600 dark:text-green-400"},N={class:"mt-4 flex items-center justify-end"},q=d({__name:"ForgotPassword",props:{status:{}},setup(P){const e=u({email:""}),i=()=>{e.post(route("password.email"))};return(r,s)=>(l(),p(b,null,{default:m(()=>[t(a(w),{title:"Forgot Password"}),s[2]||(s[2]=o("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),r.status?(l(),c("div",C,_(r.status),1)):f("",!0),o("form",{onSubmit:g(i,["prevent"])},[o("div",null,[t(x,{for:"email",value:"Email"}),t(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:a(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>a(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(v,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),o("div",N,[t(B,{class:y({"opacity-25":a(e).processing}),disabled:a(e).processing},{default:m(()=>s[1]||(s[1]=[k(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}});export{q as default};
