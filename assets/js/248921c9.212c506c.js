"use strict";(self.webpackChunkds_documentation=self.webpackChunkds_documentation||[]).push([[616],{1284:(e,l,t)=>{t.d(l,{Z:()=>i});var o=t(7294),a=t(4184),r=t.n(a),p=t(9626),c=t(8491);const u={light:"light_TCKR",dark:"dark_ybG8",color:"color_XsdA",card:"card_FClT",colorValue:"colorValue_eUwu",title:"title_Zxlw",values:"values_gJpV",values_mb:"values_mb_qFOA"},i=e=>{const{title:l,name:t,subtitles:a=[],valueComp:i,colorMode:n}=e,{colorMode:v}=(0,c.A)(),y=n||v;return o.createElement("div",{className:r()(u.card,u[y])},i,o.createElement("span",{className:u.title},l.toLowerCase()),!!a.length&&o.createElement("div",{className:r()(u.values,{[u.values_mb]:!!t})},a.map((e=>o.createElement("span",{key:e},e)))),!!t&&o.createElement(p.C,{colorMode:y},t))}},4964:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>E,contentTitle:()=>k,default:()=>A,frontMatter:()=>x,metadata:()=>b,toc:()=>g});var o=t(7462),a=t(7294),r=t(3905);const p=t.p+"assets/images/header-4822f99cf983c7b04b0c918085b36f7a.png";var c=t(1284);const u="colorValue_xxIU",i=e=>{const{style:l}=e;return a.createElement("div",{className:u,style:l})};var n=t(5908);var v=t(2821);const y=n.VO.o.$_,d=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,s=/^.*-[1-9]00$/,m=e=>{const{red:l,green:t,blue:o,alpha:a}=(0,v.Z)(e);return`rgba(${l}, ${t}, ${o}, ${a})`},F=e=>`#${function(e,l,t,o){const a=(e+(o||"")).toString().includes("%");if("string"==typeof e?[e,l,t,o]=e.match(/(0?\.?\d{1,3})%?\b/g).map((e=>Number(e))):void 0!==o&&(o=Number.parseFloat(o)),"number"!=typeof e||"number"!=typeof l||"number"!=typeof t||e>255||l>255||t>255)throw new TypeError("Expected three numbers below 256");if("number"==typeof o){if(!a&&o>=0&&o<=1)o=Math.round(255*o);else{if(!(a&&o>=0&&o<=100))throw new TypeError(`Expected alpha value (${o}) as a fraction or percentage`);o=Math.round(255*o/100)}o=(256|o).toString(16).slice(1)}else o="";return(t|l<<8|e<<16|1<<24).toString(16).slice(1)+o}(e)}`,C=Object.fromEntries(["neutral","accent-1","accent-2","primary","informative","secondary","positive","attention","negative"].map((e=>{const l=[];for(const t in y)if(t.includes(e)&&s.test(t)){const e=d.test(y[t].value),o=e?y[t].value:F(y[t].value),a=`HEX: ${o}`,r=`RGB: ${e?m(y[t].value):y[t].value}`;l.push({title:t,subtitles:[a,r],name:`color/${t}`,valueStyle:{backgroundColor:o}})}return[e,l]}))),x={sidebar_label:"Color",sidebar_position:2,title:"Color",description:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0446\u0432\u0435\u0442\u043e\u043c"},k=void 0,b={unversionedId:"style/color/color",id:"style/color/color",title:"Color",description:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0446\u0432\u0435\u0442\u043e\u043c",source:"@site/docs/style/color/color.mdx",sourceDirName:"style/color",slug:"/style/color/",permalink:"/ds-documentation/docs/style/color/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Color",sidebar_position:2,title:"Color",description:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0446\u0432\u0435\u0442\u043e\u043c"},sidebar:"dsSidebar",previous:{title:"Palette",permalink:"/ds-documentation/docs/style/palette/"},next:{title:"Border",permalink:"/ds-documentation/docs/style/border/"}},E={},g=[{value:"Neutral",id:"neutral",level:2},{value:"Accent-1",id:"accent-1",level:2},{value:"Accent-2",id:"accent-2",level:2},{value:"Informative",id:"informative",level:2},{value:"Positive",id:"positive",level:2},{value:"Attention",id:"attention",level:2},{value:"Negative",id:"negative",level:2}],f={toc:g},h="wrapper";function A(e){let{components:l,...t}=e;return(0,r.kt)(h,(0,o.Z)({},f,t,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("headermeta",{title:"Color",description:"\u041e\u0431\u0449\u0430\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0446\u0432\u0435\u0442\u043e\u043c",designer:"\u041e\u043b\u0435\u0433 \u0410\u0441\u0442\u0430\u0445\u043e\u0432",developer:"\u041a\u0438\u0440\u0438\u043b\u043b \u0410\u0440\u0442\u0443\u0440\u043e\u0432",versions:["1.0"],actualVersion:"1.0",status:"Work in progress",json:"JSON",sass:"SASS",bitbucketLink:"https://google.com",figmaLink:"https://google.com",jiraLink:"https://google.com",headerImage:p}),(0,r.kt)("h2",{id:"neutral"},"Neutral"),(0,r.kt)("docviewport",null,(0,r.kt)("examples",{cols:3,mb:32},C.neutral.slice(0,3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,r.kt)("examples",{cols:4},C.neutral.slice(3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,r.kt)("divider",null),(0,r.kt)("h2",{id:"accent-1"},"Accent-1"),(0,r.kt)("docviewport",null,(0,r.kt)("examples",{cols:3,mb:32},C["accent-1"].slice(0,3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,r.kt)("examples",{cols:4},C["accent-1"].slice(3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,r.kt)("divider",null),(0,r.kt)("h2",{id:"accent-2"},"Accent-2"),(0,r.kt)("docviewport",null,(0,r.kt)("examples",{cols:3,mb:32},C["accent-2"].slice(0,3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,r.kt)("examples",{cols:4},C["accent-2"].slice(3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,r.kt)("divider",null),(0,r.kt)("h2",{id:"informative"},"Informative"),(0,r.kt)("docviewport",null,(0,r.kt)("examples",{cols:3,mb:32},C.informative.slice(0,3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,r.kt)("examples",{cols:4},C.informative.slice(3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,r.kt)("divider",null),(0,r.kt)("h2",{id:"positive"},"Positive"),(0,r.kt)("docviewport",null,(0,r.kt)("examples",{cols:3,mb:32},C.positive.slice(0,3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,r.kt)("examples",{cols:4},C.positive.slice(3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,r.kt)("divider",null),(0,r.kt)("h2",{id:"attention"},"Attention"),(0,r.kt)("docviewport",null,(0,r.kt)("examples",{cols:3,mb:32},C.attention.slice(0,3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,r.kt)("examples",{cols:4},C.attention.slice(3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,r.kt)("divider",null),(0,r.kt)("h2",{id:"negative"},"Negative"),(0,r.kt)("docviewport",null,(0,r.kt)("examples",{cols:3,mb:32},C.negative.slice(0,3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,r.kt)("examples",{cols:4},C.negative.slice(3).map((e=>(0,r.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,r.kt)(c.Z,(0,o.Z)({},e,{valueComp:(0,r.kt)(i,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,r.kt)("divider",{marginTop:128,marginBottom:0}))}A.isMDXComponent=!0},2821:(e,l,t)=>{t.d(l,{Z:()=>u});const o="a-f\\d",a=`#?[${o}]{3}[${o}]?`,r=`#?[${o}]{6}([${o}]{2})?`,p=new RegExp(`[^#${o}]`,"gi"),c=new RegExp(`^${a}$|^${r}$`,"i");function u(e,l={}){if("string"!=typeof e||p.test(e)||!c.test(e))throw new TypeError("Expected a valid hex string");let t=1;8===(e=e.replace(/^#/,"")).length&&(t=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(t=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const o=Number.parseInt(e,16),a=o>>16,r=o>>8&255,u=255&o,i="number"==typeof l.alpha?l.alpha:t;if("array"===l.format)return[a,r,u,i];if("css"===l.format){return`rgb(${a} ${r} ${u}${1===i?"":` / ${Number((100*i).toFixed(2))}%`})`}return{red:a,green:r,blue:u,alpha:i}}},5908:e=>{e.exports=JSON.parse('{"VO":{"o":{"DG":{"transparent":{"value":"rgba(0, 0, 0, 0)","type":"color"},"black":{"value":"#000000","type":"color"},"white":{"value":"#ffffff","type":"color"},"blue-700":{"value":"#0060FF","type":"color"},"blue-600":{"value":"#146DFF","type":"color"},"blue-500":{"value":"#3D86FF","type":"color"},"blue-400":{"value":"#7AACFF","type":"color"},"blue-300":{"value":"#ADCCFF","type":"color"},"blue-200":{"value":"#D6E6FF","type":"color"},"blue-100":{"value":"#EBF2FF","type":"color"},"purple-700":{"value":"#6020E0","type":"color"},"purple-600":{"value":"#6D32E2","type":"color"},"purple-500":{"value":"#8656E7","type":"color"},"purple-400":{"value":"#AC8BEF","type":"color"},"purple-300":{"value":"#CCB8F5","type":"color"},"purple-200":{"value":"#E6DBFA","type":"color"},"purple-100":{"value":"#F2EDFD","type":"color"},"neutral-700":{"value":"#0A0A0A","type":"color"},"neutral-600":{"value":"#141414","type":"color"},"neutral-500":{"value":"#292929","type":"color"},"neutral-400":{"value":"#858585","type":"color"},"neutral-300":{"value":"#E0E0E0","type":"color"},"neutral-200":{"value":"#F5F5F5","type":"color"},"neutral-100":{"value":"#FFFFFF","type":"color"},"indigo-700":{"value":"#4020E0","type":"color"},"indigo-600":{"value":"#4F32E2","type":"color"},"indigo-500":{"value":"#6E56E7","type":"color"},"indigo-400":{"value":"#9C8BEF","type":"color"},"indigo-300":{"value":"#C2B8F5","type":"color"},"indigo-200":{"value":"#E0DBFA","type":"color"},"indigo-100":{"value":"#F0EDFD","type":"color"},"green-700":{"value":"#00C060","type":"color"},"green-600":{"value":"#14C56D","type":"color"},"green-500":{"value":"#3DCF86","type":"color"},"green-400":{"value":"#7ADEAC","type":"color"},"green-300":{"value":"#ADEBCC","type":"color"},"green-200":{"value":"#D6F5E6","type":"color"},"green-100":{"value":"#EBFAF2","type":"color"},"yellow-700":{"value":"#FFA020","type":"color"},"yellow-600":{"value":"#FFA832","type":"color"},"yellow-500":{"value":"#FFB756","type":"color"},"yellow-400":{"value":"#FFCE8B","type":"color"},"yellow-300":{"value":"#FFE1B8","type":"color"},"yellow-200":{"value":"#FFF0DB","type":"color"},"yellow-100":{"value":"#FFF7ED","type":"color"},"red-700":{"value":"#FF6040","type":"color"},"red-600":{"value":"#FF6D4F","type":"color"},"red-500":{"value":"#FF866E","type":"color"},"red-400":{"value":"#FFAC9C","type":"color"},"red-300":{"value":"#FFCCC2","type":"color"},"red-200":{"value":"#FFE6E0","type":"color"},"red-100":{"value":"#FFF2F0","type":"color"}},"$_":{"transparent":{"value":"rgba(0, 0, 0, 0)","type":"color"},"black":{"value":"rgba(0, 0, 0, 1)","type":"color"},"white":{"value":"rgba(255, 255, 255, 1)","type":"color"},"accent-1-700":{"value":"#0060FF","type":"color"},"accent-1-600":{"value":"#146DFF","type":"color"},"accent-1-500":{"value":"#3D86FF","type":"color"},"accent-1-400":{"value":"#7AACFF","type":"color"},"accent-1-300":{"value":"#ADCCFF","type":"color"},"accent-1-200":{"value":"#D6E6FF","type":"color"},"accent-1-100":{"value":"#EBF2FF","type":"color"},"accent-2-700":{"value":"#6020E0","type":"color"},"accent-2-600":{"value":"#6D32E2","type":"color"},"accent-2-500":{"value":"#8656E7","type":"color"},"accent-2-400":{"value":"#AC8BEF","type":"color"},"accent-2-300":{"value":"#CCB8F5","type":"color"},"accent-2-200":{"value":"#E6DBFA","type":"color"},"accent-2-100":{"value":"#F2EDFD","type":"color"},"neutral-700":{"value":"#0A0A0A","type":"color"},"neutral-600":{"value":"#141414","type":"color"},"neutral-500":{"value":"#292929","type":"color"},"neutral-400":{"value":"#858585","type":"color"},"neutral-300":{"value":"#E0E0E0","type":"color"},"neutral-200":{"value":"#F5F5F5","type":"color"},"neutral-100":{"value":"#FFFFFF","type":"color"},"informative-700":{"value":"#4020E0","type":"color"},"informative-600":{"value":"#4F32E2","type":"color"},"informative-500":{"value":"#6E56E7","type":"color"},"informative-400":{"value":"#9C8BEF","type":"color"},"informative-300":{"value":"#C2B8F5","type":"color"},"informative-200":{"value":"#E0DBFA","type":"color"},"informative-100":{"value":"#F0EDFD","type":"color"},"positive-700":{"value":"#00C060","type":"color"},"positive-600":{"value":"#14C56D","type":"color"},"positive-500":{"value":"#3DCF86","type":"color"},"positive-400":{"value":"#7ADEAC","type":"color"},"positive-300":{"value":"#ADEBCC","type":"color"},"positive-200":{"value":"#D6F5E6","type":"color"},"positive-100":{"value":"#EBFAF2","type":"color"},"attention-700":{"value":"#FFA020","type":"color"},"attention-600":{"value":"#FFA832","type":"color"},"attention-500":{"value":"#FFB756","type":"color"},"attention-400":{"value":"#FFCE8B","type":"color"},"attention-300":{"value":"#FFE1B8","type":"color"},"attention-200":{"value":"#FFF0DB","type":"color"},"attention-100":{"value":"#FFF7ED","type":"color"},"negative-700":{"value":"#FF6040","type":"color"},"negative-600":{"value":"#FF6D4F","type":"color"},"negative-500":{"value":"#FF866E","type":"color"},"negative-400":{"value":"#FFAC9C","type":"color"},"negative-300":{"value":"#FFCCC2","type":"color"},"negative-200":{"value":"#FFE6E0","type":"color"},"negative-100":{"value":"#FFF2F0","type":"color"}},"s6":{"xl":{"value":"32px","type":"borderWidth"},"l":{"value":"16px","type":"borderWidth"},"m":{"value":"12px","type":"borderWidth"},"s":{"value":"8px","type":"borderWidth"},"xs":{"value":"4px","type":"borderWidth"},"none":{"value":"0px","type":"borderWidth"}},"qP":{"xl":{"value":"32px","type":"borderWidth"},"l":{"value":"16px","type":"borderWidth"},"m":{"value":"8px","type":"borderWidth"},"s":{"value":"4px","type":"borderWidth"},"xs":{"value":"2px","type":"borderWidth"},"none":{"value":"0px","type":"borderWidth"}},"SE":{"solid":{"value":"solid","type":"borderStyle"},"dash":{"value":"dashed","type":"borderStyle"}},"Oh":{"100%":{"value":"100%","type":"opacity"},"90%":{"value":"90%","type":"opacity"},"80%":{"value":"80%","type":"opacity"},"70%":{"value":"70%","type":"opacity"},"60%":{"value":"60%","type":"opacity"},"50%":{"value":"50%","type":"opacity"},"40%":{"value":"40%","type":"opacity"},"30%":{"value":"30%","type":"opacity"},"20%":{"value":"20%","type":"opacity"},"10%":{"value":"10%","type":"opacity"},"0%":{"value":"0%","type":"opacity"}}}}}')}}]);