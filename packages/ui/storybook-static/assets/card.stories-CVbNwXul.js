import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{u as b}from"./useTheme-DkuhYGYZ.js";import{r as j}from"./index-CTjT7uj6.js";import{a as N,g as k,s as q,u as M,b as U,d as _}from"./createSimplePaletteValueFilter-DjLhmI3d.js";import{P as E}from"./Paper-bLK4GLdR.js";import{T as W}from"./Typography-LvAjslsb.js";import"./defaultTheme-ovmlWFOD.js";import"./createTheme-Bw4lXqAl.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-OD4Xdyjs.js";import"./index-X213BPyK.js";import"./GlobalStyles-QZrgFmhW.js";function B(a){return k("MuiCard",a)}N("MuiCard",["root"]);const I=a=>{const{classes:r}=a;return _({root:["root"]},B,r)},O=q(E,{name:"MuiCard",slot:"Root",overridesResolver:(a,r)=>r.root})({overflow:"hidden"}),$=j.forwardRef(function(r,t){const s=M({props:r,name:"MuiCard"}),{className:e,raised:o=!1,...R}=s,p={...s,raised:o},v=I(p);return l.jsx(O,{className:U(v.root,e),elevation:o?8:void 0,ref:t,ownerState:p,...R})});function P({sx:a,title:r,children:t,type:s}){const e=b(),o={default:{backgroundColor:e.palette.common.white},primary:{backgroundColor:e.palette.primary.dark,color:e.palette.common.white},secondary:{backgroundColor:e.palette.grey[400],color:e.palette.grey[300]}};return l.jsxs($,{sx:{padding:e.spacing("large"),boxShadow:"none",borderRadius:e.spacing("small"),...o[s],...a},children:[r&&l.jsx(W,{variant:"h1",children:r}),t]})}P.__docgenInfo={description:"",methods:[],displayName:"Card",props:{sx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!0,tsType:{name:"union",raw:'"default" | "primary" | "secondary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""}}};const Z={title:"Components/Card",component:P,parameters:{layout:"centered"},tags:["autodocs"],args:{sx:{width:"690px",height:"400px"}}},i={args:{title:"Default Card",children:"This is a Default card",type:"default"}},n={args:{children:"This is a Default card without title",type:"default"}},c={args:{title:"Primary Card",children:"This is a Primary card",type:"primary"}},d={args:{title:"Secondary Card",children:"This is a Secondary card",type:"secondary"}};var m,u,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Default Card",
    children: "This is a Default card",
    type: "default"
  }
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "This is a Default card without title",
    type: "default"
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,T,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: "Primary Card",
    children: "This is a Primary card",
    type: "primary"
  }
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,w,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Secondary Card",
    children: "This is a Secondary card",
    type: "secondary"
  }
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const ee=["Default","DefaultWithoutTitle","Primary","Secondary"];export{i as Default,n as DefaultWithoutTitle,c as Primary,d as Secondary,ee as __namedExportsOrder,Z as default};
