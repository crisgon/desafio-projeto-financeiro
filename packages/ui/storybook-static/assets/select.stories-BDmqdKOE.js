import{f as d}from"./index-C_FWhylE.js";import{j as r}from"./jsx-runtime-CexXSJP5.js";import{u as g}from"./useTheme-BftFWEi_.js";import{S as v}from"./Select-fBAL715O.js";import{M as n}from"./MenuItem-CiV9jxe3.js";import"./index-BP8_t0zE.js";import"./defaultTheme-BrM7dZF7.js";import"./createTheme-CqZGC_jp.js";import"./useTheme-B9r_F_9_.js";import"./useThemeWithoutDefault-BZvuYM5q.js";import"./DefaultPropsProvider-rwmAEQu1.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-Dy2CNy1G.js";import"./Menu-C0tedJCX.js";import"./index-C2uSig5i.js";import"./useSlot-BbE1Yxmg.js";import"./TransitionGroupContext-D9QyA7sv.js";import"./Modal-CWk5BusT.js";import"./utils-BGsdn-pT.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DJkmxc1E.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Paper-Dttu9lh4.js";import"./Grow-fpH0K1pH.js";import"./ListContext-DtWgkhRh.js";import"./utils-COE3nwzZ.js";import"./useId-BFAM3bkQ.js";import"./createSvgIcon-BNgDpfth.js";import"./useThemeProps-BuFHRHkj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-C4wF-kDt.js";import"./GlobalStyles-h6RkopZQ.js";import"./ButtonBase-DNEJENby.js";import"./assertThisInitialized-B9jnkVVz.js";function l({value:o,onChange:s,options:p,placeholder:u}){const c=g();return r.jsxs(v,{value:o??"none",defaultValue:"none",onChange:e=>s(e),sx:{maxWidth:"355px"},children:[r.jsx(n,{value:"none",sx:{display:"none"},children:r.jsx("em",{children:u})}),p.map(e=>r.jsx(n,{value:e.value,sx:{"&:hover":{backgroundColor:c.palette.primary.light}},children:e.label},e.value))]})}l.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: SelectChangeEvent) => void",signature:{arguments:[{type:{name:"SelectChangeEvent"},name:"e"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""}}};const U={title:"Components/Select",component:l,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:d()}},t={args:{options:[{value:"1",label:"Câmbio de Moeda"},{value:"2",label:"DOC/TED"},{value:"3",label:"Empréstimo e Financiamento"}],onChange:o=>{console.log(o.target.value)},placeholder:"Selecione o tipo de transação"}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "1",
      label: "Câmbio de Moeda"
    }, {
      value: "2",
      label: "DOC/TED"
    }, {
      value: "3",
      label: "Empréstimo e Financiamento"
    }],
    onChange: e => {
      console.log(e.target.value);
    },
    placeholder: "Selecione o tipo de transação"
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const X=["Select"];export{t as Select,X as __namedExportsOrder,U as default};
