import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{I as l}from"./index-D5a0x8HH.js";import{u as d}from"./useTheme-BMTtUCFl.js";import{I as p}from"./IconButton-giMi80PP.js";function c({icon:o,iconColor:r,iconSize:s,variant:e="default",disabled:i=!1,onClick:u,...t}){const n=d(),m=e==="default"?20:30;return a.jsx(p,{...t,onClick:u,disabled:i,sx:{padding:e==="dark"?"0px !important":"8px !important",backgroundColor:e==="default"?n.palette.action.active:"transparent",...t.sx},children:a.jsx(l,{name:o,color:r||n.palette.common.white,size:s||m})})}c.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:'IconProps["name"]',raw:'IconProps["name"]'},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},iconSize:{required:!1,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "dark"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["MUIIconButtonProps"]};export{c as I};
