"use strict";(self.webpackChunkds_documentation=self.webpackChunkds_documentation||[]).push([[955],{1343:(e,t,a)=>{a.d(t,{q:()=>v});var r=a(7294),l=a(4184),n=a.n(l);var o="UIKit.Avatar";const s={wrapper:"wrapper_NKau",avatar:"avatar_DLS2",avatar_borderOff:"avatar_borderOff_Xb1g",image:"image_vFxp",text:"text_fn5I",notion:"notion_Jcpw",online:"online_d4Ru","top-left":"top-left_k_Rw","top-right":"top-right_Qzta","bottom-right":"bottom-right_o8Fx","bottom-left":"bottom-left_OwCP",content:"content_iF03",username:"username_hNv5",subline:"subline_dUWK"};var i=function(e){var t,a=e.src,l=e.initials,i=void 0===l?"CA":l,c=e.alt,d=e.title,m=e.username,u=e.subline,p=e.online,_=e.notion,v=e.cancelableBorder,k=e.notionPlacement,b=void 0===k?"bottom-right":k,g=e.disabled,f=e.dataTestId,y=void 0===f?o:f,x=e.className;return r.createElement("div",{"data-testid":y,"data-analytics":o,"data-version":"@kit-base/avatar-0.2.0",className:n()(s.wrapper,x)},r.createElement("div",{className:n()(s.avatar,(t={},t[s.avatar_borderOff]=v&&a,t))},a&&r.createElement("img",{"data-testid":"".concat(y,".Image"),className:s.image,src:a,alt:c,title:d}),!a&&r.createElement("span",{"data-testid":"".concat(y,".Text"),className:s.text},i.slice(0,2).toUpperCase()),p&&!g&&r.createElement("div",{"data-testid":"".concat(y,".Online"),className:n()(s.online,s[b])}),!!_&&r.createElement("div",{"data-testid":"".concat(y,".Notion"),className:n()(s.notion,s[b])},_)),m&&r.createElement("div",{className:n()(s.content)},r.createElement("span",{"data-testid":"".concat(y,".Username"),className:s.username},m),u&&r.createElement("span",{"data-testid":"".concat(y,".Subline"),className:s.subline},u)))};const c={avatarStyle:"avatarStyle_bozG",rectangular:"rectangular_Of6M",circular:"circular_pGh0",size_large:"size_large_h0AR",size_medium:"size_medium_ht3w",size_small:"size_small_qbqx","color-primary-solid":"color-primary-solid_EFqc","state-disabled-solid":"state-disabled-solid_Rklj",skeleton:"skeleton_Pi3r",skeleton__person:"skeleton__person_Boc0",skeleton__person_large:"skeleton__person_large_q3ZZ",skeleton__person_medium:"skeleton__person_medium_nBmv",skeleton__person_small:"skeleton__person_small_UJ48",skeleton_large:"skeleton_large_l932",skeleton__avatar_circular_large:"skeleton__avatar_circular_large_mK2T",skeleton__avatar_rectangular_large:"skeleton__avatar_rectangular_large_mHLr",skeleton_medium:"skeleton_medium_Knl2",skeleton__avatar_circular_medium:"skeleton__avatar_circular_medium_G9Sv",skeleton__avatar_rectangular_medium:"skeleton__avatar_rectangular_medium_IAcB",skeleton_small:"skeleton_small_qi7r",skeleton__avatar_circular_small:"skeleton__avatar_circular_small_VbVf",skeleton__avatar_rectangular_small:"skeleton__avatar_rectangular_small_skLy"};var d=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,l,n=a.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)o.push(r.value)}catch(s){l={error:s}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(l)throw l.error}}return o},m=function(){return m=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},m.apply(this,arguments)},u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a},p=function(e){var t=e.src,a=e.person,l=u(e,["src","person"]),n=function(e){var t=d((0,r.useState)(""),2),a=t[0],l=t[1],n=d((0,r.useState)(!1),2),o=n[0],s=n[1];return(0,r.useEffect)((function(){if(!e)return s(!1),void l("");var t=new Image;t.src=e,t.onload=function(){s(!1),l(e)},t.onerror=function(){s(!0)}}),[e]),{dataImg:a,error:o}}(t||""),o=n.dataImg,s=n.error;return m(m({},l),{username:a,src:s?"":o})},_=function(){return _=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},_.apply(this,arguments)},v=function(e){var t=function(e){var t,a=e.size,r=void 0===a?"large":a,l=e.shape,o=void 0===l?"rectangular":l,s=e.className,i=e.disabled,d=function(e){return e.disabled?"state-disabled-solid":"color-primary-solid"}(e);return n()(c.avatarStyle,c["size_".concat(r)],c[o],c[d],s,((t={})[c.wrapper_disabled]=i,t))}(e),a=p(e);return r.createElement(i,_({},a,{className:t,dataTestId:e.dataTestId||"CLSKit.Avatar"}))}},7091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>_,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=a(7462),l=(a(7294),a(3905)),n=a(1343),o=a(7848);const s={sidebar_label:"Avatar",title:"Avatar",description:"Avatar"},i=void 0,c={unversionedId:"components/Avatar",id:"components/Avatar",title:"Avatar",description:"Avatar",source:"@site/docs/components/Avatar.mdx",sourceDirName:"components",slug:"/components/Avatar",permalink:"/ds-documentation/docs/next/components/Avatar",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Avatar",title:"Avatar",description:"Avatar"},sidebar:"dsSidebar",previous:{title:"Components",permalink:"/ds-documentation/docs/next/category/components"},next:{title:"Typography",permalink:"/ds-documentation/docs/next/typography/"}},d={},m=[{value:"Base",id:"base",level:2},{value:"Size",id:"size",level:2},{value:"Content",id:"content",level:2}],u={toc:m},p="wrapper";function _(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("headermeta",{title:"Avatar",description:"Avatar",designer:"\u041e\u043b\u0435\u0433 \u0410\u0441\u0442\u0430\u0445\u043e\u0432",developer:"\u041a\u0438\u0440\u0438\u043b\u043b \u0410\u0440\u0442\u0443\u0440\u043e\u0432",versions:[o.i8],actualVersion:o.i8,status:"Work in progress",json:"JSON",sass:"SASS",bitbucketLink:"https://google.com",figmaLink:"https://google.com",jiraLink:"https://google.com"}),(0,l.kt)("h2",{id:"base"},"Base"),(0,l.kt)("p",null,"\u0411\u0430\u0437\u043e\u0432\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("docviewport",{codeBlock:void 0},(0,l.kt)("examples",{cols:1,mb:32},(0,l.kt)("example",{exampleCode:void 0},(0,l.kt)(n.q,{size:"large",mdxType:"Avatar"})))),(0,l.kt)("divider",null),(0,l.kt)("h2",{id:"size"},"Size"),(0,l.kt)("p",null,"\u0420\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u043f ",(0,l.kt)("b",null,"size")),(0,l.kt)("docviewport",{codeBlock:void 0},(0,l.kt)("examples",{cols:3,mb:32},(0,l.kt)("example",{exampleCode:void 0},(0,l.kt)(n.q,{size:"large",mdxType:"Avatar"})),(0,l.kt)("example",{exampleCode:void 0},(0,l.kt)(n.q,{size:"medium",mdxType:"Avatar"})),(0,l.kt)("example",{exampleCode:void 0},(0,l.kt)(n.q,{size:"small",mdxType:"Avatar"})))),(0,l.kt)("divider",null),(0,l.kt)("h2",{id:"content"},"Content"),(0,l.kt)("p",null,"\u041f\u0430\u043a\u0435\u0442 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 2 \u043f\u0440\u0435\u0441\u0435\u0442\u0430 - \u043f\u0440\u043e\u0441\u0442\u043e\u0439 ",(0,l.kt)("b",null,"Avatar")," \u0438 ",(0,l.kt)("b",null,"AvatarWithThumb"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443."),(0,l.kt)("p",null,"\u041e\u0431\u0449\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u0435\u0441\u0435\u0442\u043e\u0432 props:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"person")," - \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"subline")," - \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u044c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"src")," - \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"initials")," - \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u044b \u0432 \u0430\u0432\u0430\u0442\u0430\u0440\u0435, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u0442 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443. \u0411\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043e \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 2\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"title")," - \u0430\u0442\u0440\u0438\u0431\u0443\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0434\u043b\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("b",null,"disabled")," - \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043a\u0430\u043a \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439")),(0,l.kt)("p",null,"\u0422\u0430\u043a \u0436\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043c\u0430\u043a\u0435\u0442\u0443 ",(0,l.kt)("b",null,"AvatarWithThumb")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u043e\u0440\u043c\u044b rectangular \u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 large, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0443 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0435\u0441\u0435\u0442\u0430 \u043f\u0440\u043e\u043f\u0441 size \u0438 shape \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b"),(0,l.kt)("docviewport",{codeBlock:void 0},(0,l.kt)("examples",{cols:3,mb:32},(0,l.kt)("example",{exampleCode:void 0},(0,l.kt)(n.q,{size:"large",mdxType:"Avatar"})),(0,l.kt)("example",{exampleCode:void 0},(0,l.kt)(n.q,{size:"medium",mdxType:"Avatar"})),(0,l.kt)("example",{exampleCode:void 0},(0,l.kt)(n.q,{size:"small",mdxType:"Avatar"})))),(0,l.kt)("divider",null))}_.isMDXComponent=!0},7848:e=>{e.exports={i8:"0.3.0"}}}]);