import{f as z}from"./index-C_FWhylE.js";import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{u as Me,d as D,a as Oe}from"./TransitionGroupContext-D9QyA7sv.js";import{u as _,e as J}from"./useSlot-BbE1Yxmg.js";import{u as Te}from"./useTheme-BftFWEi_.js";import{a as F,g as U,s as E,m as q,u as X,c as ge,b as G}from"./DefaultPropsProvider-rwmAEQu1.js";import{d as w,n as K,o as Z,p as Le}from"./createTheme-CqZGC_jp.js";import{u as je,G as Ie}from"./Grow-fpH0K1pH.js";import{g as Pe,o as W}from"./utils-BGsdn-pT.js";import{P as ve}from"./Paper-Dttu9lh4.js";import{c as N}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as R}from"./createSvgIcon-BNgDpfth.js";import{I as ze}from"./IconButton-CFXK2w6F.js";import"./defaultTheme-BrM7dZF7.js";import"./useTheme-B9r_F_9_.js";import"./useThemeWithoutDefault-BZvuYM5q.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-Dy2CNy1G.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DJkmxc1E.js";import"./ButtonBase-DNEJENby.js";import"./assertThisInitialized-B9jnkVVz.js";function $e(e){return U("MuiAlert",e)}const Y=F("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),He=R(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Be=R(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),We=R(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Ne=R(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),De=R(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Fe=e=>{const{variant:t,color:o,severity:n,classes:a}=e,u={root:["root",`color${w(o||n)}`,`${t}${w(o||n)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return G(u,$e,a)},Ue=E(ve,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${w(o.color||o.severity)}`]]}})(q(({theme:e})=>{const t=e.palette.mode==="light"?K:Z,o=e.palette.mode==="light"?Z:K;return{...e.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(e.palette).filter(N(["light"])).map(([n])=>({props:{colorSeverity:n,variant:"standard"},style:{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:o(e.palette[n].light,.9),[`& .${Y.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}}})),...Object.entries(e.palette).filter(N(["light"])).map(([n])=>({props:{colorSeverity:n,variant:"outlined"},style:{color:e.vars?e.vars.palette.Alert[`${n}Color`]:t(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${Y.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}}})),...Object.entries(e.palette).filter(N(["dark"])).map(([n])=>({props:{colorSeverity:n,variant:"filled"},style:{fontWeight:e.typography.fontWeightMedium,...e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText(e.palette[n].main)}}}))]}})),qe=E("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Xe=E("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Q=E("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ee={success:s.jsx(He,{fontSize:"inherit"}),warning:s.jsx(Be,{fontSize:"inherit"}),error:s.jsx(We,{fontSize:"inherit"}),info:s.jsx(Ne,{fontSize:"inherit"})},Ge=m.forwardRef(function(t,o){const n=X({props:t,name:"MuiAlert"}),{action:a,children:u,className:C,closeText:d="Close",color:g,components:v={},componentsProps:h={},icon:f,iconMapping:b=ee,onClose:x,role:c="alert",severity:l="success",slotProps:y={},slots:r={},variant:i="standard",...p}=n,S={...n,color:g,severity:l,variant:i,colorSeverity:g||l},k=Fe(S),$={slots:{closeButton:v.CloseButton,closeIcon:v.CloseIcon,...r},slotProps:{...h,...y}},[A,M]=_("closeButton",{elementType:ze,externalForwardedProps:$,ownerState:S}),[O,T]=_("closeIcon",{elementType:De,externalForwardedProps:$,ownerState:S});return s.jsxs(Ue,{role:c,elevation:0,ownerState:S,className:ge(k.root,C),ref:o,...p,children:[f!==!1?s.jsx(qe,{ownerState:S,className:k.icon,children:f||b[l]||ee[l]}):null,s.jsx(Xe,{ownerState:S,className:k.message,children:u}),a!=null?s.jsx(Q,{ownerState:S,className:k.action,children:a}):null,a==null&&x?s.jsx(Q,{ownerState:S,className:k.action,children:s.jsx(A,{size:"small","aria-label":d,title:d,color:"inherit",onClick:x,...M,children:s.jsx(O,{fontSize:"small",...T})})}):null]})});function te(e){return e.substring(2).toLowerCase()}function Ve(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function _e(e){const{children:t,disableReactTree:o=!1,mouseEvent:n="onClick",onClickAway:a,touchEvent:u="onTouchEnd"}=e,C=m.useRef(!1),d=m.useRef(null),g=m.useRef(!1),v=m.useRef(!1);m.useEffect(()=>(setTimeout(()=>{g.current=!0},0),()=>{g.current=!1}),[]);const h=Me(Pe(t),d),f=D(c=>{const l=v.current;v.current=!1;const y=W(d.current);if(!g.current||!d.current||"clientX"in c&&Ve(c,y))return;if(C.current){C.current=!1;return}let r;c.composedPath?r=c.composedPath().includes(d.current):r=!y.documentElement.contains(c.target)||d.current.contains(c.target),!r&&(o||!l)&&a(c)}),b=c=>l=>{v.current=!0;const y=t.props[c];y&&y(l)},x={ref:h};return u!==!1&&(x[u]=b(u)),m.useEffect(()=>{if(u!==!1){const c=te(u),l=W(d.current),y=()=>{C.current=!0};return l.addEventListener(c,f),l.addEventListener("touchmove",y),()=>{l.removeEventListener(c,f),l.removeEventListener("touchmove",y)}}},[f,u]),n!==!1&&(x[n]=b(n)),m.useEffect(()=>{if(n!==!1){const c=te(n),l=W(d.current);return l.addEventListener(c,f),()=>{l.removeEventListener(c,f)}}},[f,n]),s.jsx(m.Fragment,{children:m.cloneElement(t,x)})}function Je(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:n,open:a,resumeHideDuration:u}=e,C=Oe();m.useEffect(()=>{if(!a)return;function r(i){i.defaultPrevented||i.key==="Escape"&&(n==null||n(i,"escapeKeyDown"))}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[a,n]);const d=D((r,i)=>{n==null||n(r,i)}),g=D(r=>{!n||r==null||C.start(r,()=>{d(null,"timeout")})});m.useEffect(()=>(a&&g(t),C.clear),[a,t,g,C]);const v=r=>{n==null||n(r,"clickaway")},h=C.clear,f=m.useCallback(()=>{t!=null&&g(u??t*.5)},[t,u,g]),b=r=>i=>{const p=r.onBlur;p==null||p(i),f()},x=r=>i=>{const p=r.onFocus;p==null||p(i),h()},c=r=>i=>{const p=r.onMouseEnter;p==null||p(i),h()},l=r=>i=>{const p=r.onMouseLeave;p==null||p(i),f()};return m.useEffect(()=>{if(!o&&a)return window.addEventListener("focus",f),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",f),window.removeEventListener("blur",h)}},[o,a,f,h]),{getRootProps:(r={})=>{const i={...J(e),...J(r)};return{role:"presentation",...r,...i,onBlur:b(i),onFocus:x(i),onMouseEnter:c(i),onMouseLeave:l(i)}},onClickAway:v}}function Ke(e){return U("MuiSnackbarContent",e)}F("MuiSnackbarContent",["root","message","action"]);const Ze=e=>{const{classes:t}=e;return G({root:["root"],action:["action"],message:["message"]},Ke,t)},Ye=E(ve,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(q(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,o=Le(e.palette.background.default,t);return{...e.typography.body2,color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Qe=E("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),et=E("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),tt=m.forwardRef(function(t,o){const n=X({props:t,name:"MuiSnackbarContent"}),{action:a,className:u,message:C,role:d="alert",...g}=n,v=n,h=Ze(v);return s.jsxs(Ye,{role:d,square:!0,elevation:6,className:ge(h.root,u),ownerState:v,ref:o,...g,children:[s.jsx(Qe,{className:h.message,ownerState:v,children:C}),a?s.jsx(et,{className:h.action,ownerState:v,children:a}):null]})});function nt(e){return U("MuiSnackbar",e)}F("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ot=e=>{const{classes:t,anchorOrigin:o}=e,n={root:["root",`anchorOrigin${w(o.vertical)}${w(o.horizontal)}`]};return G(n,nt,t)},ne=E("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`anchorOrigin${w(o.anchorOrigin.vertical)}${w(o.anchorOrigin.horizontal)}`]]}})(q(({theme:e})=>({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[e.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[e.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[e.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[e.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[e.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),rt=m.forwardRef(function(t,o){const n=X({props:t,name:"MuiSnackbar"}),a=Te(),u={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{action:C,anchorOrigin:{vertical:d,horizontal:g}={vertical:"bottom",horizontal:"left"},autoHideDuration:v=null,children:h,className:f,ClickAwayListenerProps:b,ContentProps:x,disableWindowBlurListener:c=!1,message:l,onBlur:y,onClose:r,onFocus:i,onMouseEnter:p,onMouseLeave:S,open:k,resumeHideDuration:$,TransitionComponent:A=Ie,transitionDuration:M=u,TransitionProps:{onEnter:O,onExited:T,...Ce}={},...ye}=n,H={...n,anchorOrigin:{vertical:d,horizontal:g},autoHideDuration:v,disableWindowBlurListener:c,TransitionComponent:A,transitionDuration:M},xe=ot(H),{getRootProps:Se,onClickAway:be}=Je({...H}),[ke,V]=m.useState(!0),Ee=je({elementType:ne,getSlotProps:Se,externalForwardedProps:ye,ownerState:H,additionalProps:{ref:o},className:[xe.root,f]}),we=B=>{V(!0),T&&T(B)},Re=(B,Ae)=>{V(!1),O&&O(B,Ae)};return!k&&ke?null:s.jsx(_e,{onClickAway:be,...b,children:s.jsx(ne,{...Ee,children:s.jsx(A,{appear:!0,in:k,timeout:M,direction:d==="top"?"down":"up",onEnter:Re,onExited:we,...Ce,children:h||s.jsx(tt,{message:l,action:C,...x})})})})});function he({handleClose:e,isOpen:t,type:o,content:n,anchorOrigin:a}){return s.jsx(rt,{open:t,autoHideDuration:6e3,onClose:e,anchorOrigin:a??{vertical:"top",horizontal:"center"},children:s.jsx(Ge,{onClose:e,severity:o,variant:"filled",sx:{width:"100%"},children:n})})}he.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | JSX.Element",elements:[{name:"string"},{name:"JSX.Element"}]},description:""},type:{required:!0,tsType:{name:"union",raw:'"info" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:""},handleClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchorOrigin:{required:!1,tsType:{name:"SnackbarOrigin"},description:""}}};const Mt={title:"Components/Toast",component:he,tags:["autodocs"]},L={args:{isOpen:!0,content:"This is an info toast",type:"info",handleClose:z()}},j={args:{isOpen:!0,content:"This is an error toast",type:"error",handleClose:z()}},I={args:{isOpen:!0,content:"This is a warning toast",type:"warning",handleClose:z()}},P={args:{isOpen:!0,content:"This is a success toast",type:"success",handleClose:z()}};var oe,re,se;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    content: "This is an info toast",
    type: "info",
    handleClose: fn()
  }
}`,...(se=(re=L.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ie,ce;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    content: "This is an error toast",
    type: "error",
    handleClose: fn()
  }
}`,...(ce=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,ue,pe;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    content: "This is a warning toast",
    type: "warning",
    handleClose: fn()
  }
}`,...(pe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,fe,me;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    content: "This is a success toast",
    type: "success",
    handleClose: fn()
  }
}`,...(me=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};const Ot=["Info","Error","Warning","Success"];export{j as Error,L as Info,P as Success,I as Warning,Ot as __namedExportsOrder,Mt as default};