import{_ as n,o as c,c as a,b as o,a as s,w as l,e as r,r as u,f as m}from"./index-BYGjUIKv.js";const p="/2024/05/FishingGuide/logo.webp",b={},_={class:"w-full top-0 left-0 right-0 header-background"},g={class:"flex items-center justify-end md:space-x-20 space-x-4 mt-2 mr-2 lg:mr-10"};function h(i,t){const e=u("router-link");return c(),a("header",_,[o("nav",g,[s(e,{to:"/",class:"text-black text-lg md:text-2xl lg:text-3xl font-bold"},{default:l(()=>t[0]||(t[0]=[r("ホーム")])),_:1}),s(e,{to:"/#Fish",class:"text-black text-lg md:text-2xl lg:text-3xl font-bold"},{default:l(()=>t[1]||(t[1]=[r("釣りについて")])),_:1}),s(e,{to:"/#How-To",class:"text-black text-lg md:text-2xl lg:text-3xl font-bold"},{default:l(()=>t[2]||(t[2]=[r("釣り方")])),_:1}),t[3]||(t[3]=o("a",{href:"https://project.ne.senshu-u.ac.jp/2024/05/#/"},[o("img",{src:p,alt:"Fish",class:"w-16 md:w-24"})],-1))])])}const S=n(b,[["render",h]]),w={},k={class:"w-full flex flex-col justify-end footer-background"};function T(i,t){return c(),a("footer",k,t[0]||(t[0]=[o("p",{class:"flex justify-center text-lg md:text-3xl mb-4"},"初心者向け釣りサイト - OtaProject2024",-1)]))}const $=n(w,[["render",T]]),v={data(){return{isVisible:!1}},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},checkScroll(){this.isVisible=window.scrollY>100}},mounted(){window.addEventListener("scroll",this.checkScroll)},beforeUnmount(){window.removeEventListener("scroll",this.checkScroll)}};function y(i,t,e,V,x,d){return x.isVisible?(c(),a("button",{key:0,onClick:t[0]||(t[0]=(...f)=>d.scrollToTop&&d.scrollToTop(...f)),class:"fixed bottom-5 right-5 !bg-white !bg-opacity-70 text-black rounded-full w-12 h-12 shadow-lg !transition-opacity duration-300 hover:!bg-gray-300 hover:!bg-opacity-90","aria-label":"Scroll to top"}," ↑ ")):m("",!0)}const F=n(v,[["render",y]]);export{$ as F,S as H,F as S};
