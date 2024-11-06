import{j as i}from"./jsx-runtime-CexXSJP5.js";import{r as c,a as ne}from"./index-BP8_t0zE.js";import{f as v}from"./index-C_FWhylE.js";import{I as le}from"./index-7LHaLcEk.js";import{B as j}from"./index-Vh-YQJgc.js";import{u as X}from"./useTheme-BftFWEi_.js";import{a as C,g as b,s as d,m as Y,u as y,c as m,b as D}from"./DefaultPropsProvider-rwmAEQu1.js";import{B as ce,M as pe,F as de}from"./Modal-CWk5BusT.js";import{d as g}from"./createTheme-CqZGC_jp.js";import{P as _}from"./Paper-Dttu9lh4.js";import{u as ue}from"./useId-BFAM3bkQ.js";import{T as me}from"./Typography-DMsrTNIk.js";import{I as ge}from"./IconButton-CFXK2w6F.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DNEJENby.js";import"./DefaultPropsProvider-Dy2CNy1G.js";import"./TransitionGroupContext-D9QyA7sv.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./defaultTheme-BrM7dZF7.js";import"./useTheme-B9r_F_9_.js";import"./useThemeWithoutDefault-BZvuYM5q.js";import"./utils-BGsdn-pT.js";import"./index-DJkmxc1E.js";import"./useSlot-BbE1Yxmg.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-C4wF-kDt.js";import"./GlobalStyles-h6RkopZQ.js";function fe(t){return b("MuiDialog",t)}const w=C("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),z=c.createContext({}),xe=d(ce,{name:"MuiDialog",slot:"Backdrop",overrides:(t,e)=>e.backdrop})({zIndex:-1}),he=t=>{const{classes:e,scroll:o,maxWidth:r,fullWidth:n,fullScreen:a}=t,l={root:["root"],container:["container",`scroll${g(o)}`],paper:["paper",`paperScroll${g(o)}`,`paperWidth${g(String(r))}`,n&&"paperFullWidth",a&&"paperFullScreen"]};return D(l,fe,e)},ve=d(pe,{name:"MuiDialog",slot:"Root",overridesResolver:(t,e)=>e.root})({"@media print":{position:"absolute !important"}}),Ce=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.container,e[`scroll${g(o.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),be=d(_,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`scrollPaper${g(o.scroll)}`],e[`paperWidth${g(String(o.maxWidth))}`],o.fullWidth&&e.paperFullWidth,o.fullScreen&&e.paperFullScreen]}})(Y(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:e})=>!e.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${w.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(e=>e!=="xs").map(e=>({props:{maxWidth:e},style:{maxWidth:`${t.breakpoints.values[e]}${t.breakpoints.unit}`,[`&.${w.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[e]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:e})=>e.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:e})=>e.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${w.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),ye=c.forwardRef(function(e,o){const r=y({props:e,name:"MuiDialog"}),n=X(),a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":s,BackdropComponent:p,BackdropProps:k,children:J,className:K,disableEscapeKeyDown:B=!1,fullScreen:V=!1,fullWidth:G=!1,maxWidth:Q="sm",onBackdropClick:R,onClick:$,onClose:S,open:P,PaperComponent:Z=_,PaperProps:A={},scroll:ee="paper",TransitionComponent:te=de,transitionDuration:L=a,TransitionProps:oe,...ie}=r,f={...r,disableEscapeKeyDown:B,fullScreen:V,fullWidth:G,maxWidth:Q,scroll:ee},T=he(f),M=c.useRef(),re=u=>{M.current=u.target===u.currentTarget},ae=u=>{$&&$(u),M.current&&(M.current=null,R&&R(u),S&&S(u,"backdropClick"))},W=ue(s),se=c.useMemo(()=>({titleId:W}),[W]);return i.jsx(ve,{className:m(T.root,K),closeAfterTransition:!0,components:{Backdrop:xe},componentsProps:{backdrop:{transitionDuration:L,as:p,...k}},disableEscapeKeyDown:B,onClose:S,open:P,ref:o,onClick:ae,ownerState:f,...ie,children:i.jsx(te,{appear:!0,in:P,timeout:L,role:"presentation",...oe,children:i.jsx(Ce,{className:m(T.container),onMouseDown:re,ownerState:f,children:i.jsx(be,{as:Z,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":W,...A,className:m(T.paper,A.className),ownerState:f,children:i.jsx(z.Provider,{value:se,children:J})})})})})});function De(t){return b("MuiDialogActions",t)}C("MuiDialogActions",["root","spacing"]);const ke=t=>{const{classes:e,disableSpacing:o}=t;return D({root:["root",!o&&"spacing"]},De,e)},Se=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,!o.disableSpacing&&e.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:t})=>!t.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Te=c.forwardRef(function(e,o){const r=y({props:e,name:"MuiDialogActions"}),{className:n,disableSpacing:a=!1,...l}=r,s={...r,disableSpacing:a},p=ke(s);return i.jsx(Se,{className:m(p.root,n),ownerState:s,ref:o,...l})});function Me(t){return b("MuiDialogContent",t)}C("MuiDialogContent",["root","dividers"]);function We(t){return b("MuiDialogTitle",t)}const we=C("MuiDialogTitle",["root"]),je=t=>{const{classes:e,dividers:o}=t;return D({root:["root",o&&"dividers"]},Me,e)},qe=d("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.dividers&&e.dividers]}})(Y(({theme:t})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:e})=>e.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:e})=>!e.dividers,style:{[`.${we.root} + &`]:{paddingTop:0}}}]}))),Be=c.forwardRef(function(e,o){const r=y({props:e,name:"MuiDialogContent"}),{className:n,dividers:a=!1,...l}=r,s={...r,dividers:a},p=je(s);return i.jsx(qe,{className:m(p.root,n),ownerState:s,ref:o,...l})}),Re=t=>{const{classes:e}=t;return D({root:["root"]},We,e)},$e=d(me,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Pe=c.forwardRef(function(e,o){const r=y({props:e,name:"MuiDialogTitle"}),{className:n,id:a,...l}=r,s=r,p=Re(s),{titleId:k=a}=c.useContext(z);return i.jsx($e,{component:"h2",className:m(p.root,n),ownerState:s,ref:o,variant:"h6",id:a??k,...l})});function q({title:t,handleClose:e,handleConfirm:o,content:r,open:n,confirmButtonText:a,cancelButtonText:l}){const s=X();return i.jsxs(ye,{open:n,onClose:e,PaperProps:{sx:{backgroundColor:s.palette.background.default}},children:[i.jsx(Pe,{children:t}),i.jsx(ge,{"aria-label":"close","data-testid":"close-button",onClick:e,sx:()=>({position:"absolute",right:8,top:8}),children:i.jsx(le,{color:s.palette.primary.dark,name:"mdiClose"})}),i.jsx(Be,{children:r}),i.jsxs(Te,{children:[l&&i.jsx(j,{color:"primary",variant:"outlined",onClick:e,label:l}),a&&i.jsx(j,{color:"primary",variant:"contained",onClick:o,label:a})]})]})}q.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{title:{required:!0,tsType:{name:"string"},description:""},handleClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},content:{required:!0,tsType:{name:"JSX.Element"},description:""},confirmButtonText:{required:!1,tsType:{name:"string"},description:""},cancelButtonText:{required:!1,tsType:{name:"string"},description:""}}};const pt={title:"Components/Modal",component:q,parameters:{layout:"centered"},tags:["autodocs"],args:{}},H=t=>{const[e,o]=ne.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(j,{variant:"contained",color:"primary",onClick:()=>o(!0),label:"Abrir modal"}),i.jsx(q,{...t,open:e,handleClose:()=>o(!1)})]})},x={args:{title:"Confirmar ou cancelar?",open:!0,content:i.jsx("div",{id:"dialog-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto tempore, numquam expedita commodi, voluptatum cum reiciendis consectetur sapiente aliquam eius soluta et, ipsum quae beatae itaque delectus vitae! Eligendi."}),confirmButtonText:"Confirmar",cancelButtonText:"Cancelar",handleClose:v(),handleConfirm:v()},render:H},h={args:{title:"Sem ações",open:!0,content:i.jsx("div",{id:"dialog-description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto tempore, numquam expedita commodi, voluptatum cum reiciendis consectetur sapiente aliquam eius soluta et, ipsum quae beatae itaque delectus vitae! Eligendi."}),handleClose:v(),handleConfirm:v()},render:H};var N,I,F;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: "Confirmar ou cancelar?",
    open: true,
    content: <div id="dialog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        architecto tempore, numquam expedita commodi, voluptatum cum reiciendis
        consectetur sapiente aliquam eius soluta et, ipsum quae beatae itaque
        delectus vitae! Eligendi.
      </div>,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    handleClose: fn(),
    handleConfirm: fn()
  },
  render: Template
}`,...(F=(I=x.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var U,E,O;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: "Sem ações",
    open: true,
    content: <div id="dialog-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        architecto tempore, numquam expedita commodi, voluptatum cum reiciendis
        consectetur sapiente aliquam eius soluta et, ipsum quae beatae itaque
        delectus vitae! Eligendi.
      </div>,
    handleClose: fn(),
    handleConfirm: fn()
  },
  render: Template
}`,...(O=(E=h.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const dt=["WithActions","WithoutActions"];export{x as WithActions,h as WithoutActions,dt as __namedExportsOrder,pt as default};