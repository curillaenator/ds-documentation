(self.webpackChunkds_documentation=self.webpackChunkds_documentation||[]).push([[134],{9312:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var l=o(7294),r=o(4184),a=o.n(r),i=o(9626),n=o(8491);const c={light:"light_W9DS",dark:"dark_r7ub",color:"color_ECRp",card:"card_AIyd",colorValue:"colorValue_icfy",title:"title_K1UJ",values:"values_FwxO",values_mb:"values_mb_mTJ2"},p=e=>{const{title:t,name:o,subtitles:r=[],valueComp:p,colorMode:s}=e,{colorMode:u}=(0,n.A)(),d=s||u;return l.createElement("div",{className:a()(c.card,c[d])},p,l.createElement("span",{className:c.title},t.toLowerCase()),!!r.length&&l.createElement("div",{className:a()(c.values,{[c.values_mb]:!!o})},r.map((e=>l.createElement("span",{key:e},e)))),!!o&&l.createElement(i.C,{colorMode:d},o))}},7388:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>K,contentTitle:()=>q,default:()=>oe,frontMatter:()=>J,metadata:()=>U,toc:()=>Q});var l=o(7462),r=o(7294),a=o(3905);const i="import React, { FC } from 'react';\nimport cn from 'classnames';\n\nimport { Badge } from '@site/src/components/Badge';\nimport { useViewportContext } from '@site/src/components/DocViewport';\n\nimport { CardProps } from './interfaces';\nimport styles from './card.module.scss';\n\nexport const Card: FC<CardProps> = (props) => {\n  const { title, name, subtitles = [], valueComp, colorMode: extarnalColorMode } = props;\n\n  const { colorMode: viewportColorMode } = useViewportContext();\n  const colorMode = extarnalColorMode || viewportColorMode;\n\n  return (\n    <div className={cn(styles.card, styles[colorMode])}>\n      {valueComp}\n\n      <span className={styles.title}>{title.toLowerCase()}</span>\n\n      {!!subtitles.length && (\n        <div\n          className={cn(styles.values, {\n            [styles.values_mb]: !!name,\n          })}\n        >\n          {subtitles.map((subtitle) => (\n            <span key={subtitle}>{subtitle}</span>\n          ))}\n        </div>\n      )}\n\n      {!!name && <Badge colorMode={colorMode}>{name}</Badge>}\n    </div>\n  );\n};\n";var n=o(9312),c=o(4184),p=o.n(c);const s="opacities_s4Iv",u="opacity_EJ3U",d="value_i0YX",v="title_Dji_",y=new Array(26).fill(100).map(((e,t)=>e-4*t)),m=e=>{const{color:t,blendMode:o="normal"}=e;return r.createElement("div",{className:p()(s)},y.map((e=>r.createElement("div",{key:`opacity-${e}`,className:u},r.createElement("div",{className:d,style:{backgroundColor:t,opacity:""+e/100,mixBlendMode:o}}),r.createElement("span",{className:v},String(e))))))};var F=o(8491);const b={light:"light_WVHl",dark:"dark_xsPc",color:"color_r7Uy",container:"container_F132",container_matrix:"container_matrix_FDOC",container_row:"container_row_I67H",tile:"tile_cb71",tile_matrix:"tile_matrix_b8_c",tile_row:"tile_row_sFms",dot:"dot_Awl1",dot_matrix:"dot_matrix_qTwb",dot_row:"dot_row_zd5I",dot_visible:"dot_visible_GcwH"},x=e=>{const{colorMatrix:t,dotsPositions:o,mb:l=48,type:a="row"}=e,{colorMode:i}=(0,F.A)();return r.createElement("div",{className:p()(b.container,b[i],b[`container_${a}`]),style:{marginBottom:l}},t.map(((e,t)=>{const{x:l,y:i}=e.position;return r.createElement("div",{key:`${e}-${t}`,className:p()(b.tile,b[`tile_${a}`]),style:{backgroundColor:e.value}},r.createElement("div",{className:p()(b.dot,b[`dot_${a}`],{[b.dot_visible]:o.includes(`${l}_${i}`)})}))})))},g="colorValue_XnoY",h=e=>{const{style:t}=e;return r.createElement("div",{className:g,style:t})},k={light:"light_ziuy",dark:"dark_UEMj",color:"color_PMSk",container:"container_lXjV",content:"content_kmkz",row:"row_PTy2",tileWrapper:"tileWrapper_GqE_",tile:"tile_ONMd","tile_white-60":"tile_white-60_waWW","tile_white-80":"tile_white-80_B2sm","tile_black-20":"tile_black-20_gy0q","tile_black-40":"tile_black-40_GjBi",tile_accent:"tile_accent_h6ir",title:"title_S7FP"},C=o.p+"assets/images/effectSettings-59f9c1f4c47773d8e9382538e7ddd835.png",f=[{title:"effect-4",color:"white-60",zIndex:40},{title:"effect-3",color:"white-80",zIndex:30},{title:"effect-2",color:"black-20",zIndex:20},{title:"effect-1",color:"black-40",zIndex:10},{title:"palette/basic",color:"accent",zIndex:0}],_=e=>{const{title:t,color:o,zIndex:l}=e;return r.createElement("div",{className:k.row,style:{zIndex:l}},r.createElement("div",{className:k.tileWrapper},r.createElement("div",{className:p()(k.tile,k[`tile_${o}`])})),r.createElement("span",{className:k.title},t))},E=()=>{const{colorMode:e}=(0,F.A)();return r.createElement("div",{className:p()(k.container,k[e])},r.createElement("div",{className:k.content},f.map((e=>r.createElement(_,(0,l.Z)({key:e.title},e))))),r.createElement("img",{src:C,alt:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u043b\u043e\u0435\u0432 \u044d\u0444\u0444\u0435\u043a\u0441\u0442\u043e\u0432"}))};var w=o(8222),M=o.n(w),D=o(2821);const B=o(5908).VO.o.DG,A=e=>B[e].value,$=[{title:"black",hex:A("black"),exampleCode:"export const Code = () => {\n  console.log('this is code for black example');\n};\n"},{title:"white",hex:A("white"),exampleCode:"export const Code = () => {\n  console.log('this is code for white example');\n};\n"},{title:"indigo",hex:A("indigo-700"),exampleCode:"export const Code = () => {\n  console.log('this is code for color example');\n};\n"},{title:"purple",hex:A("purple-700")},{title:"blue",hex:A("blue-700")},{title:"green",hex:A("green-700")},{title:"yellow",hex:A("yellow-700")},{title:"red",hex:A("red-700"),exampleCode:i}],N=e=>{const{red:t,green:o,blue:l,alpha:r}=(0,D.Z)(e);return`rgba(${t}, ${o}, ${l}, ${r})`},T=$.map((e=>({...e,title:e.title,subtitles:[`HEX: ${e.hex}`,`RGB: ${N(e.hex)}`],name:`palette-${e.title}`,valueStyle:{backgroundColor:e.hex}}))),S=function(e,t,o){return void 0===o&&(o=25),[e,...(new(M())).setColorGradient(e,t).setMidpoint(o).getColors()]},P=["25_3","25_12","25_21","25_23","25_24"],W=((e,t,o)=>{const l=S(e,t),r=S(o,t);return l.map(((e,t)=>S(e,r[t]).map(((e,o)=>({value:e,position:{x:o,y:t}}))))).flat()})(A("blue-700"),A("neutral-700"),A("white")),I=e=>{const t=A("neutral-700"),o=A("white"),l=S(t,e,25);l.pop();const r=S(e,o,25);return[...l,...r].map(((e,t)=>({value:e,position:{x:t,y:0}})))},Z=["25_0","27_0","31_0","37_0","42_0","46_0","48_0"],X=I(A("indigo-700")),G=I(A("purple-700")),O=I(A("blue-700")),V=I(A("green-700")),z=I(A("yellow-700")),H=I(A("red-700")),L=o.p+"assets/images/palette-558f9870b87335b17d82063aa380ed64.png",R={toc:[{value:"Basic color",id:"basic-color",level:2},{value:"Effect",id:"effect",level:2},{value:"Sample",id:"sample",level:2},{value:"Sample combination",id:"sample-combination",level:2}]},j="wrapper";function Y(e){let{components:t,...o}=e;return(0,a.kt)(j,(0,l.Z)({},R,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"basic-color"},"Basic color"),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0446\u0432\u0435\u0442\u0430 \u0432 X.Y.Z \u0434\u043b\u044f \u043d\u0430\u0431\u043e\u0440\u0430 \u0441\u0442\u0438\u043b\u0435\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u044f\u044e\u0449\u0438\u0445 \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438 \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f"),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"\u0422\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0447\u0435\u0440\u0435\u0437 \u0447\u0435\u0440\u043d\u044b\u0439 \u0438 \u0431\u0435\u043b\u044b\u0439 \u0441\u043b\u043e\u0439, c\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0434\u0438\u0437\u0430\u0439\u043d \u0441\u0438\u0441\u0442\u0435\u043c\u0435 X.Y.Z \u0438\u043c\u0435\u0435\u0442 \u0448\u0430\u0433 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438 \u0432 4%, \u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u0448\u0430\u0433\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043f\u043e\u0434 \u043f\u0440\u043e\u0435\u043a\u0442"),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0441\u043b\u043e\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0432\u0435\u0440\u0445 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430, \u0438 \u0434\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0442\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430"),(0,a.kt)("h2",{id:"sample-combination"},"Sample combination"),(0,a.kt)("p",null,"\u0421\u043e\u0432\u043c\u0435\u0449\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u043b\u0438\u0442\u0440\u0430, \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0446\u0432\u0435\u0442\u043e\u0432 \u0438 \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u043e\u0432, \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0445 \u043e\u0442\u0442\u0435\u043d\u043a\u043e\u0432"))}Y.isMDXComponent=!0;const J={sidebar_label:"Palette",sidebar_position:1,title:"Palette",description:"\u041d\u0430\u0431\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"},q=void 0,U={unversionedId:"style/palette/palette",id:"version-0.0.1_alpha_release/style/palette/palette",title:"Palette",description:"\u041d\u0430\u0431\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",source:"@site/versioned_docs/version-0.0.1_alpha_release/style/palette/palette.mdx",sourceDirName:"style/palette",slug:"/style/palette/",permalink:"/ds-documentation/docs/style/palette/",draft:!1,tags:[],version:"0.0.1_alpha_release",sidebarPosition:1,frontMatter:{sidebar_label:"Palette",sidebar_position:1,title:"Palette",description:"\u041d\u0430\u0431\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"},sidebar:"tutorialSidebar",previous:{title:"Style",permalink:"/ds-documentation/docs/category/style"},next:{title:"Color",permalink:"/ds-documentation/docs/style/color/"}},K={},Q=[{value:"Basic color",id:"basic-color",level:2},{value:"Effect",id:"effect",level:2},{value:"Sample",id:"sample",level:2},{value:"Sample combination",id:"sample-combination",level:2}],ee={toc:Q},te="wrapper";function oe(e){let{components:t,...o}=e;return(0,a.kt)(te,(0,l.Z)({},ee,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("headermeta",{title:"Palette",description:"\u0420\u0430\u0437\u0434\u0435\u043b \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f, \u043d\u0430\u0431\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u041e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0446\u0432\u0435\u0442\u0430\u043c\u0438 \u0438 \u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u044b \u0434\u043b\u044f \u0446\u0432\u0435\u0442\u0430.",designer:"\u041e\u043b\u0435\u0433 \u0410\u0441\u0442\u0430\u0445\u043e\u0432",developer:"\u041a\u0438\u0440\u0438\u043b\u043b \u0410\u0440\u0442\u0443\u0440\u043e\u0432",versions:["1.0","1.1"],actualVersion:"1.0",status:"Work in progress",json:"JSON",sass:"SASS",bitbucketLink:"https://google.com",figmaLink:"https://google.com",jiraLink:"https://google.com",headerImage:L}),(0,a.kt)("versionselector",{versionPages:[{version:"1.1",page:(0,a.kt)(Y,{mdxType:"Palette11"})}]},(0,a.kt)("crutch",null),(0,a.kt)("h2",{id:"basic-color"},"Basic color"),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0446\u0432\u0435\u0442\u0430 \u0432 X.Y.Z \u0434\u043b\u044f \u043d\u0430\u0431\u043e\u0440\u0430 \u0441\u0442\u0438\u043b\u0435\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u044f\u044e\u0449\u0438\u0445 \u043d\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438 \u0444\u0438\u0440\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0438\u043b\u044f"),(0,a.kt)("docviewport",{codeBlock:i},(0,a.kt)("examples",{cols:2,mb:32},T.slice(0,4).map((e=>(0,a.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,a.kt)(n.Z,(0,l.Z)({},e,{valueComp:(0,a.kt)(h,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"})))))),(0,a.kt)("examples",{cols:4},T.slice(4).map((e=>(0,a.kt)("example",{key:e.name,exampleCode:e.exampleCode},(0,a.kt)(n.Z,(0,l.Z)({},e,{valueComp:(0,a.kt)(h,{style:e.valueStyle,mdxType:"Color"}),mdxType:"Card"}))))))),(0,a.kt)("divider",null),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"\u0422\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0447\u0435\u0440\u0435\u0437 \u0447\u0435\u0440\u043d\u044b\u0439 \u0438 \u0431\u0435\u043b\u044b\u0439 \u0441\u043b\u043e\u0439, c\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0434\u0438\u0437\u0430\u0439\u043d \u0441\u0438\u0441\u0442\u0435\u043c\u0435 X.Y.Z \u0438\u043c\u0435\u0435\u0442 \u0448\u0430\u0433 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438 \u0432 4%, \u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u0448\u0430\u0433\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043f\u043e\u0434 \u043f\u0440\u043e\u0435\u043a\u0442"),(0,a.kt)("docviewport",null,(0,a.kt)("examples",{cols:1},(0,a.kt)("example",{colorMode:"dark",style:{backgroundColor:"var(--color-neutral-500)"}},(0,a.kt)(n.Z,{title:"white",colorMode:"dark",subtitles:["color name: neutral-100","HEX: #ffffff"],valueComp:(0,a.kt)(m,{color:"#ffffff",mdxType:"Opacities"}),mdxType:"Card"})),(0,a.kt)("example",{colorMode:"dark",style:{backgroundColor:"var(--color-neutral-500)"}},(0,a.kt)(n.Z,{title:"white overlay",colorMode:"dark",subtitles:["color name: neutral-100","HEX: #ffffff"],valueComp:(0,a.kt)(m,{color:"#ffffff",blendMode:"overlay",mdxType:"Opacities"}),mdxType:"Card"})),(0,a.kt)("example",{colorMode:"dark",style:{backgroundColor:"var(--color-neutral-500)"}},(0,a.kt)(n.Z,{title:"black",colorMode:"dark",subtitles:["color name: neutral-700","HEX: #0a0a0a"],valueComp:(0,a.kt)(m,{color:"#0a0a0a",mdxType:"Opacities"}),mdxType:"Card"})),(0,a.kt)("example",{colorMode:"dark",style:{backgroundColor:"var(--color-neutral-500)"}},(0,a.kt)(n.Z,{title:"black overlay",colorMode:"dark",subtitles:["color name: neutral-700","HEX: #0a0a0a"],valueComp:(0,a.kt)(m,{color:"#0a0a0a",blendMode:"overlay",mdxType:"Opacities"}),mdxType:"Card"})))),(0,a.kt)("divider",null),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0441\u043b\u043e\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0432\u0435\u0440\u0445 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430, \u0438 \u0434\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0442\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u0435\u043a\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430"),(0,a.kt)("docviewport",null,(0,a.kt)(E,{mdxType:"Effect"})),(0,a.kt)("divider",null),(0,a.kt)("h2",{id:"sample-combination"},"Sample combination"),(0,a.kt)("p",null,"\u0421\u043e\u0432\u043c\u0435\u0449\u0435\u043d\u043d\u0430\u044f \u043f\u0430\u043b\u0438\u0442\u0440\u0430, \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0446\u0432\u0435\u0442\u043e\u0432 \u0438 \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u043e\u0432, \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0445 \u043e\u0442\u0442\u0435\u043d\u043a\u043e\u0432"),(0,a.kt)("docviewport",null,(0,a.kt)(x,{colorMatrix:W,dotsPositions:P,type:"matrix",mdxType:"ColorMatrix"}),(0,a.kt)(x,{colorMatrix:X,dotsPositions:Z,mdxType:"ColorMatrix"}),(0,a.kt)(x,{colorMatrix:G,dotsPositions:Z,mdxType:"ColorMatrix"}),(0,a.kt)(x,{colorMatrix:O,dotsPositions:Z,mdxType:"ColorMatrix"}),(0,a.kt)(x,{colorMatrix:V,dotsPositions:Z,mdxType:"ColorMatrix"}),(0,a.kt)(x,{colorMatrix:z,dotsPositions:Z,mdxType:"ColorMatrix"}),(0,a.kt)(x,{colorMatrix:H,dotsPositions:Z,mb:0,mdxType:"ColorMatrix"})),(0,a.kt)("divider",{marginTop:128,marginBottom:0}),(0,a.kt)("crutch",null)))}oe.isMDXComponent=!0},8222:e=>{class t{constructor(e="",t="",o=0,l=10){this.setColorGradient=(o,l)=>{e=a(o),t=a(l)},this.setMidpoint=(e,t)=>{o=e,l=t},this.getColor=o=>{if(o)return"#"+r(o,e.substring(0,2),t.substring(0,2))+r(o,e.substring(2,4),t.substring(2,4))+r(o,e.substring(4,6),t.substring(4,6))};const r=(e,t,r)=>{e<o?e=o:e>l&&(e=l);const a=l-o,i=parseInt(t,16),n=(parseInt(r,16)-i)/a,c=Math.round(n*(e-o)+i);return c<16?"0"+c.toString(16):c.toString(16)},a=e=>e.substring(e.length-6,e.length)}}e.exports=class{constructor(e="",o=10,l=["",""],r=[]){const a=a=>{if(a.length<2)throw new Error(`setColorGradient should have more than ${a.length} color`);{const i=o/(a.length-1),n=new t,c=0,p=0+i;n.setColorGradient(a[0],a[1]),n.setMidpoint(c,p),e=[n],r=[{lower:c,upper:p}];for(let o=1;o<a.length-1;o++){const l=new t,n=0+i*o,c=0+i*(o+1);l.setColorGradient(a[o],a[o+1]),l.setMidpoint(n,c),e[o]=l,r[o]={lower:n,upper:c}}l=a}};this.setColorGradient=(...e)=>(a(e),this),this.getColors=()=>{const t=[];for(let l=0;l<r.length;l++){const a=r[l],i=0===a.lower?1:Math.ceil(a.lower),n=a.upper===o?a.upper+1:Math.ceil(a.upper);for(let o=i;o<n;o++)t.push(e[l].getColor(o))}return t},this.getColor=t=>{if(isNaN(t))throw new TypeError("getColor should be a number");if(t<=0)throw new TypeError(`getColor should be greater than ${t}`);{const l=t+1,r=(o-0)/e.length,a=Math.min(Math.floor((Math.max(t,0)-0)/r),e.length-1);return e[a].getColor(l)}},this.setMidpoint=e=>{if(isNaN(e)||!(e>=0))throw e<=0?new RangeError(`midPoint should be greater than ${e}`):new RangeError("midPoint should be a number");return o=e,a(l),this}}}},2821:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});const l="a-f\\d",r=`#?[${l}]{3}[${l}]?`,a=`#?[${l}]{6}([${l}]{2})?`,i=new RegExp(`[^#${l}]`,"gi"),n=new RegExp(`^${r}$|^${a}$`,"i");function c(e,t={}){if("string"!=typeof e||i.test(e)||!n.test(e))throw new TypeError("Expected a valid hex string");let o=1;8===(e=e.replace(/^#/,"")).length&&(o=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(o=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const l=Number.parseInt(e,16),r=l>>16,a=l>>8&255,c=255&l,p="number"==typeof t.alpha?t.alpha:o;if("array"===t.format)return[r,a,c,p];if("css"===t.format){return`rgb(${r} ${a} ${c}${1===p?"":` / ${Number((100*p).toFixed(2))}%`})`}return{red:r,green:a,blue:c,alpha:p}}},5908:e=>{"use strict";e.exports=JSON.parse('{"VO":{"o":{"DG":{"transparent":{"value":"rgba(0, 0, 0, 0)","type":"color"},"black":{"value":"#000000","type":"color"},"white":{"value":"#ffffff","type":"color"},"blue-700":{"value":"#0060FF","type":"color"},"blue-600":{"value":"#146DFF","type":"color"},"blue-500":{"value":"#3D86FF","type":"color"},"blue-400":{"value":"#7AACFF","type":"color"},"blue-300":{"value":"#ADCCFF","type":"color"},"blue-200":{"value":"#D6E6FF","type":"color"},"blue-100":{"value":"#EBF2FF","type":"color"},"purple-700":{"value":"#6020E0","type":"color"},"purple-600":{"value":"#6D32E2","type":"color"},"purple-500":{"value":"#8656E7","type":"color"},"purple-400":{"value":"#AC8BEF","type":"color"},"purple-300":{"value":"#CCB8F5","type":"color"},"purple-200":{"value":"#E6DBFA","type":"color"},"purple-100":{"value":"#F2EDFD","type":"color"},"neutral-700":{"value":"#0A0A0A","type":"color"},"neutral-600":{"value":"#141414","type":"color"},"neutral-500":{"value":"#292929","type":"color"},"neutral-400":{"value":"#858585","type":"color"},"neutral-300":{"value":"#E0E0E0","type":"color"},"neutral-200":{"value":"#F5F5F5","type":"color"},"neutral-100":{"value":"#FFFFFF","type":"color"},"indigo-700":{"value":"#4020E0","type":"color"},"indigo-600":{"value":"#4F32E2","type":"color"},"indigo-500":{"value":"#6E56E7","type":"color"},"indigo-400":{"value":"#9C8BEF","type":"color"},"indigo-300":{"value":"#C2B8F5","type":"color"},"indigo-200":{"value":"#E0DBFA","type":"color"},"indigo-100":{"value":"#F0EDFD","type":"color"},"green-700":{"value":"#00C060","type":"color"},"green-600":{"value":"#14C56D","type":"color"},"green-500":{"value":"#3DCF86","type":"color"},"green-400":{"value":"#7ADEAC","type":"color"},"green-300":{"value":"#ADEBCC","type":"color"},"green-200":{"value":"#D6F5E6","type":"color"},"green-100":{"value":"#EBFAF2","type":"color"},"yellow-700":{"value":"#FFA020","type":"color"},"yellow-600":{"value":"#FFA832","type":"color"},"yellow-500":{"value":"#FFB756","type":"color"},"yellow-400":{"value":"#FFCE8B","type":"color"},"yellow-300":{"value":"#FFE1B8","type":"color"},"yellow-200":{"value":"#FFF0DB","type":"color"},"yellow-100":{"value":"#FFF7ED","type":"color"},"red-700":{"value":"#FF6040","type":"color"},"red-600":{"value":"#FF6D4F","type":"color"},"red-500":{"value":"#FF866E","type":"color"},"red-400":{"value":"#FFAC9C","type":"color"},"red-300":{"value":"#FFCCC2","type":"color"},"red-200":{"value":"#FFE6E0","type":"color"},"red-100":{"value":"#FFF2F0","type":"color"}},"$_":{"transparent":{"value":"rgba(0, 0, 0, 0)","type":"color"},"black":{"value":"rgba(0, 0, 0, 1)","type":"color"},"white":{"value":"rgba(255, 255, 255, 1)","type":"color"},"accent-1-700":{"value":"#0060FF","type":"color"},"accent-1-600":{"value":"#146DFF","type":"color"},"accent-1-500":{"value":"#3D86FF","type":"color"},"accent-1-400":{"value":"#7AACFF","type":"color"},"accent-1-300":{"value":"#ADCCFF","type":"color"},"accent-1-200":{"value":"#D6E6FF","type":"color"},"accent-1-100":{"value":"#EBF2FF","type":"color"},"accent-2-700":{"value":"#6020E0","type":"color"},"accent-2-600":{"value":"#6D32E2","type":"color"},"accent-2-500":{"value":"#8656E7","type":"color"},"accent-2-400":{"value":"#AC8BEF","type":"color"},"accent-2-300":{"value":"#CCB8F5","type":"color"},"accent-2-200":{"value":"#E6DBFA","type":"color"},"accent-2-100":{"value":"#F2EDFD","type":"color"},"neutral-700":{"value":"#0A0A0A","type":"color"},"neutral-600":{"value":"#141414","type":"color"},"neutral-500":{"value":"#292929","type":"color"},"neutral-400":{"value":"#858585","type":"color"},"neutral-300":{"value":"#E0E0E0","type":"color"},"neutral-200":{"value":"#F5F5F5","type":"color"},"neutral-100":{"value":"#FFFFFF","type":"color"},"informative-700":{"value":"#4020E0","type":"color"},"informative-600":{"value":"#4F32E2","type":"color"},"informative-500":{"value":"#6E56E7","type":"color"},"informative-400":{"value":"#9C8BEF","type":"color"},"informative-300":{"value":"#C2B8F5","type":"color"},"informative-200":{"value":"#E0DBFA","type":"color"},"informative-100":{"value":"#F0EDFD","type":"color"},"positive-700":{"value":"#00C060","type":"color"},"positive-600":{"value":"#14C56D","type":"color"},"positive-500":{"value":"#3DCF86","type":"color"},"positive-400":{"value":"#7ADEAC","type":"color"},"positive-300":{"value":"#ADEBCC","type":"color"},"positive-200":{"value":"#D6F5E6","type":"color"},"positive-100":{"value":"#EBFAF2","type":"color"},"attention-700":{"value":"#FFA020","type":"color"},"attention-600":{"value":"#FFA832","type":"color"},"attention-500":{"value":"#FFB756","type":"color"},"attention-400":{"value":"#FFCE8B","type":"color"},"attention-300":{"value":"#FFE1B8","type":"color"},"attention-200":{"value":"#FFF0DB","type":"color"},"attention-100":{"value":"#FFF7ED","type":"color"},"negative-700":{"value":"#FF6040","type":"color"},"negative-600":{"value":"#FF6D4F","type":"color"},"negative-500":{"value":"#FF866E","type":"color"},"negative-400":{"value":"#FFAC9C","type":"color"},"negative-300":{"value":"#FFCCC2","type":"color"},"negative-200":{"value":"#FFE6E0","type":"color"},"negative-100":{"value":"#FFF2F0","type":"color"}},"s6":{"xl":{"value":"32px","type":"borderWidth"},"l":{"value":"16px","type":"borderWidth"},"m":{"value":"12px","type":"borderWidth"},"s":{"value":"8px","type":"borderWidth"},"xs":{"value":"4px","type":"borderWidth"},"none":{"value":"0px","type":"borderWidth"}},"qP":{"xl":{"value":"32px","type":"borderWidth"},"l":{"value":"16px","type":"borderWidth"},"m":{"value":"8px","type":"borderWidth"},"s":{"value":"4px","type":"borderWidth"},"xs":{"value":"2px","type":"borderWidth"},"none":{"value":"0px","type":"borderWidth"}},"SE":{"solid":{"value":"solid","type":"borderStyle"},"dash":{"value":"dashed","type":"borderStyle"}},"Oh":{"100%":{"value":"100%","type":"opacity"},"90%":{"value":"90%","type":"opacity"},"80%":{"value":"80%","type":"opacity"},"70%":{"value":"70%","type":"opacity"},"60%":{"value":"60%","type":"opacity"},"50%":{"value":"50%","type":"opacity"},"40%":{"value":"40%","type":"opacity"},"30%":{"value":"30%","type":"opacity"},"20%":{"value":"20%","type":"opacity"},"10%":{"value":"10%","type":"opacity"},"0%":{"value":"0%","type":"opacity"}}}}}')}}]);