import{f as Se}from"./index-C_FWhylE.js";import{j as u}from"./jsx-runtime-CexXSJP5.js";import{r as S}from"./index-BP8_t0zE.js";import{u as we}from"./useTheme-BftFWEi_.js";import{S as ze}from"./Stack-wWGY8ugz.js";import{F as X,f as ke,a as Le}from"./FormLabel-C6Yrhqcg.js";import{a as H,g as M,s as j,m as Y,u as N,c as $,b as O,r as Re}from"./DefaultPropsProvider-rwmAEQu1.js";import{u as I}from"./useSlot-BbE1Yxmg.js";import{u as qe}from"./useId-BFAM3bkQ.js";import{u as Z,f as ee}from"./utils-COE3nwzZ.js";import{d as V}from"./createTheme-CqZGC_jp.js";import{S as He,I as Me,F as je,O as Ne}from"./Select-fBAL715O.js";import"./defaultTheme-BrM7dZF7.js";import"./useTheme-B9r_F_9_.js";import"./useThemeWithoutDefault-BZvuYM5q.js";import"./useThemeProps-BuFHRHkj.js";import"./DefaultPropsProvider-Dy2CNy1G.js";import"./index-C4wF-kDt.js";import"./GlobalStyles-h6RkopZQ.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./extends-CF3RwP-h.js";import"./TransitionGroupContext-D9QyA7sv.js";import"./Menu-C0tedJCX.js";import"./index-C2uSig5i.js";import"./Modal-CWk5BusT.js";import"./utils-BGsdn-pT.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DJkmxc1E.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Dttu9lh4.js";import"./Grow-fpH0K1pH.js";import"./ListContext-DtWgkhRh.js";import"./createSvgIcon-BNgDpfth.js";function $e(t){return M("MuiFormHelperText",t)}const B=H("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var G;const Oe=t=>{const{classes:e,contained:r,size:o,disabled:n,error:i,filled:s,focused:m,required:l}=t,p={root:["root",n&&"disabled",i&&"error",o&&`size${V(o)}`,r&&"contained",m&&"focused",s&&"filled",l&&"required"]};return O(p,$e,e)},Ve=j("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.size&&e[`size${V(r.size)}`],r.contained&&e.contained,r.filled&&e.filled]}})(Y(({theme:t})=>({color:(t.vars||t).palette.text.secondary,...t.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${B.disabled}`]:{color:(t.vars||t).palette.text.disabled},[`&.${B.error}`]:{color:(t.vars||t).palette.error.main},variants:[{props:{size:"small"},style:{marginTop:4}},{props:({ownerState:e})=>e.contained,style:{marginLeft:14,marginRight:14}}]}))),Ee=S.forwardRef(function(e,r){const o=N({props:e,name:"MuiFormHelperText"}),{children:n,className:i,component:s="p",disabled:m,error:l,filled:p,focused:a,margin:c,required:x,variant:h,...f}=o,w=Z(),d=ee({props:o,muiFormControl:w,states:["variant","size","disabled","error","filled","focused","required"]}),y={...o,component:s,contained:d.variant==="filled"||d.variant==="outlined",variant:d.variant,size:d.size,disabled:d.disabled,error:d.error,filled:d.filled,focused:d.focused,required:d.required};delete y.ownerState;const z=Oe(y);return u.jsx(Ve,{as:s,className:$(z.root,i),ref:r,...f,ownerState:y,children:n===" "?G||(G=u.jsx("span",{className:"notranslate",children:"​"})):n})});function Ue(t){return M("MuiInputLabel",t)}H("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const Ae=t=>{const{classes:e,formControl:r,size:o,shrink:n,disableAnimation:i,variant:s,required:m}=t,l={root:["root",r&&"formControl",!i&&"animated",n&&"shrink",o&&o!=="normal"&&`size${V(o)}`,s],asterisk:[m&&"asterisk"]},p=O(l,Ue,e);return{...e,...p}},We=j(X,{shouldForwardProp:t=>Re(t)||t==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${ke.asterisk}`]:e.asterisk},e.root,r.formControl&&e.formControl,r.size==="small"&&e.sizeSmall,r.shrink&&e.shrink,!r.disableAnimation&&e.animated,r.focused&&e.focused,e[r.variant]]}})(Y(({theme:t})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",variants:[{props:({ownerState:e})=>e.formControl,style:{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"}},{props:{size:"small"},style:{transform:"translate(0, 17px) scale(1)"}},{props:({ownerState:e})=>e.shrink,style:{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"}},{props:({ownerState:e})=>!e.disableAnimation,style:{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})}},{props:{variant:"filled"},style:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"filled",size:"small"},style:{transform:"translate(12px, 13px) scale(1)"}},{props:({variant:e,ownerState:r})=>e==="filled"&&r.shrink,style:{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"}},{props:({variant:e,ownerState:r,size:o})=>e==="filled"&&r.shrink&&o==="small",style:{transform:"translate(12px, 4px) scale(0.75)"}},{props:{variant:"outlined"},style:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"}},{props:{variant:"outlined",size:"small"},style:{transform:"translate(14px, 9px) scale(1)"}},{props:({variant:e,ownerState:r})=>e==="outlined"&&r.shrink,style:{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}}]}))),De=S.forwardRef(function(e,r){const o=N({name:"MuiInputLabel",props:e}),{disableAnimation:n=!1,margin:i,shrink:s,variant:m,className:l,...p}=o,a=Z();let c=s;typeof c>"u"&&a&&(c=a.filled||a.focused||a.adornedStart);const x=ee({props:o,muiFormControl:a,states:["size","variant","required","focused"]}),h={...o,disableAnimation:n,formControl:a,shrink:c,size:x.size,variant:x.variant,required:x.required,focused:x.focused},f=Ae(h);return u.jsx(We,{"data-shrink":c,ref:r,className:$(f.root,l),...p,ownerState:h,classes:f})});function _e(t){return M("MuiTextField",t)}H("MuiTextField",["root"]);const Be={standard:Me,filled:je,outlined:Ne},Ge=t=>{const{classes:e}=t;return O({root:["root"]},_e,e)},Je=j(Le,{name:"MuiTextField",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Ke=S.forwardRef(function(e,r){const o=N({props:e,name:"MuiTextField"}),{autoComplete:n,autoFocus:i=!1,children:s,className:m,color:l="primary",defaultValue:p,disabled:a=!1,error:c=!1,FormHelperTextProps:x,fullWidth:h=!1,helperText:f,id:w,InputLabelProps:d,inputProps:y,InputProps:z,inputRef:re,label:T,maxRows:oe,minRows:se,multiline:E=!1,name:ne,onBlur:ae,onChange:ie,onFocus:le,placeholder:pe,required:U=!1,rows:de,select:k=!1,SelectProps:L,slots:A={},slotProps:ue={},type:me,value:W,variant:F="outlined",...ce}=o,b={...o,autoFocus:i,color:l,disabled:a,error:c,fullWidth:h,multiline:E,required:U,select:k,variant:F},fe=Ge(b),g=qe(w),R=f&&g?`${g}-helper-text`:void 0,D=T&&g?`${g}-label`:void 0,xe=Be[F],v={slots:A,slotProps:{input:z,inputLabel:d,htmlInput:y,formHelperText:x,select:L,...ue}},C={},q=v.slotProps.inputLabel;F==="outlined"&&(q&&typeof q.shrink<"u"&&(C.notched=q.shrink),C.label=T),k&&((!L||!L.native)&&(C.id=void 0),C["aria-describedby"]=void 0);const[he,be]=I("input",{elementType:xe,externalForwardedProps:v,additionalProps:C,ownerState:b}),[ge,ve]=I("inputLabel",{elementType:De,externalForwardedProps:v,ownerState:b}),[ye,Te]=I("htmlInput",{elementType:"input",externalForwardedProps:v,ownerState:b}),[Ce,Ie]=I("formHelperText",{elementType:Ee,externalForwardedProps:v,ownerState:b}),[Fe,Pe]=I("select",{elementType:He,externalForwardedProps:v,ownerState:b}),_=u.jsx(he,{"aria-describedby":R,autoComplete:n,autoFocus:i,defaultValue:p,fullWidth:h,multiline:E,name:ne,rows:de,maxRows:oe,minRows:se,type:me,value:W,id:g,inputRef:re,onBlur:ae,onChange:ie,onFocus:le,placeholder:pe,inputProps:Te,slots:{input:A.htmlInput?ye:void 0},...be});return u.jsxs(Je,{className:$(fe.root,m),disabled:a,error:c,fullWidth:h,ref:r,required:U,color:l,variant:F,ownerState:b,...ce,children:[T!=null&&T!==""&&u.jsx(ge,{htmlFor:g,id:D,...ve,children:T}),k?u.jsx(Fe,{"aria-describedby":R,id:g,labelId:D,value:W,input:_,...Pe,children:s}):_,f&&u.jsx(Ce,{id:R,...Ie,children:f})]})});function Qe(t){return new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(t)/100)}function te({label:t,defaultValue:e,onChange:r,sx:o}){const[n,i]=S.useState(e),s=we(),m=l=>{const p=l.target.value.replace(/[^\d]/g,""),a=Qe(p);i(a),r(p)};return u.jsxs(ze,{spacing:"16px",width:"250px",sx:o,children:[t&&u.jsx(X,{sx:{color:s.palette.grey[300]},children:t}),u.jsx(Ke,{value:n,onChange:m,sx:{"& .MuiOutlinedInput-root":{background:s.palette.common.white,borderRadius:"8px","&.Mui-focused fieldset":{borderColor:s.palette.primary.main}}},InputProps:{inputProps:{style:{textAlign:"center"}}}})]})}te.__docgenInfo={description:"",methods:[],displayName:"CurrencyInput",props:{label:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""}}};const Lt={title:"Components/CurrencyInput",component:te,parameters:{layout:"centered"},tags:["autodocs"],args:{}},P={args:{label:"Valor",defaultValue:"0,00",onChange:Se()}};var J,K,Q;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: "Valor",
    defaultValue: "0,00",
    onChange: fn()
  }
}`,...(Q=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Rt=["Default"];export{P as Default,Rt as __namedExportsOrder,Lt as default};
