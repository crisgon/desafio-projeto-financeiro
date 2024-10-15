import{u as V,_ as ct,T as Q,b as lt}from"./ButtonBase-BIsRHzhe.js";import{r as y,R as A}from"./index-CTjT7uj6.js";import{j as H}from"./jsx-runtime-Cw0GR0a5.js";import{b as X,g as ut,a as ft,s as pt,m as dt,u as mt,d as ht}from"./createSimplePaletteValueFilter-DjLhmI3d.js";import{c as _}from"./createTheme-Bw4lXqAl.js";import{u as Et}from"./useTheme-DkuhYGYZ.js";import{_ as gt}from"./assertThisInitialized-C1KLUksq.js";import{f as U}from"./index-vZN_Bsf0.js";function jt(t){return t&&t.ownerDocument||document}function vt(t){return typeof t=="string"}function Y(t,s,o){return t===void 0||vt(t)?s:{...s,ownerState:{...s.ownerState,...o}}}function yt(t,s=[]){if(t===void 0)return{};const o={};return Object.keys(t).filter(i=>i.match(/^on[A-Z]/)&&typeof t[i]=="function"&&!s.includes(i)).forEach(i=>{o[i]=t[i]}),o}function Z(t){if(t===void 0)return{};const s={};return Object.keys(t).filter(o=>!(o.match(/^on[A-Z]/)&&typeof t[o]=="function")).forEach(o=>{s[o]=t[o]}),s}function P(t){const{getSlotProps:s,additionalProps:o,externalSlotProps:i,externalForwardedProps:e,className:n}=t;if(!s){const E=X(o==null?void 0:o.className,n,e==null?void 0:e.className,i==null?void 0:i.className),m={...o==null?void 0:o.style,...e==null?void 0:e.style,...i==null?void 0:i.style},u={...o,...e,...i};return E.length>0&&(u.className=E),Object.keys(m).length>0&&(u.style=m),{props:u,internalRef:void 0}}const r=yt({...e,...i}),a=Z(i),l=Z(e),c=s(r),f=X(c==null?void 0:c.className,o==null?void 0:o.className,n,e==null?void 0:e.className,i==null?void 0:i.className),p={...c==null?void 0:c.style,...o==null?void 0:o.style,...e==null?void 0:e.style,...i==null?void 0:i.style},h={...c,...o,...l,...a};return f.length>0&&(h.className=f),Object.keys(p).length>0&&(h.style=p),{props:h,internalRef:c.ref}}function tt(t,s,o){return typeof t=="function"?t(s,o):t}function At(t){var p;const{elementType:s,externalSlotProps:o,ownerState:i,skipResolvingSlotProps:e=!1,...n}=t,r=e?{}:tt(o,i),{props:a,internalRef:l}=P({...n,externalSlotProps:r}),c=V(l,r==null?void 0:r.ref,(p=t.additionalProps)==null?void 0:p.ref);return Y(s,{...a,ref:c},i)}function St(t){var s;return parseInt(y.version,10)>=19?(s=t.props)==null?void 0:s.ref:t==null?void 0:t.ref}function xt(t){return ut("MuiSvgIcon",t)}ft("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Tt=t=>{const{color:s,fontSize:o,classes:i}=t,e={root:["root",s!=="inherit"&&`color${_(s)}`,`fontSize${_(o)}`]};return ht(e,xt,i)},Nt=pt("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,o.color!=="inherit"&&s[`color${_(o.color)}`],s[`fontSize${_(o.fontSize)}`]]}})(dt(({theme:t})=>{var s,o,i,e,n,r,a,l,c,f,p,h,E,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(e=(s=t.transitions)==null?void 0:s.create)==null?void 0:e.call(s,"fill",{duration:(i=(o=(t.vars??t).transitions)==null?void 0:o.duration)==null?void 0:i.shorter}),variants:[{props:u=>!u.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((r=(n=t.typography)==null?void 0:n.pxToRem)==null?void 0:r.call(n,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((l=(a=t.typography)==null?void 0:a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((f=(c=t.typography)==null?void 0:c.pxToRem)==null?void 0:f.call(c,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,u])=>u&&u.main).map(([u])=>{var g,x;return{props:{color:u},style:{color:(x=(g=(t.vars??t).palette)==null?void 0:g[u])==null?void 0:x.main}}}),{props:{color:"action"},style:{color:(h=(p=(t.vars??t).palette)==null?void 0:p.action)==null?void 0:h.active}},{props:{color:"disabled"},style:{color:(m=(E=(t.vars??t).palette)==null?void 0:E.action)==null?void 0:m.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),G=y.forwardRef(function(s,o){const i=mt({props:s,name:"MuiSvgIcon"}),{children:e,className:n,color:r="inherit",component:a="svg",fontSize:l="medium",htmlColor:c,inheritViewBox:f=!1,titleAccess:p,viewBox:h="0 0 24 24",...E}=i,m=y.isValidElement(e)&&e.type==="svg",u={...i,color:r,component:a,fontSize:l,instanceFontSize:s.fontSize,inheritViewBox:f,viewBox:h,hasSvgAsChild:m},g={};f||(g.viewBox=h);const x=Tt(u);return H.jsxs(Nt,{as:a,className:X(x.root,n),focusable:"false",color:c,"aria-hidden":p?void 0:!0,role:p?"img":void 0,ref:o,...g,...E,...m&&e.props,ownerState:u,children:[m?e.props.children:e,p?H.jsx("title",{children:p}):null]})});G&&(G.muiName="SvgIcon");function Ut(t,s){function o(i,e){return H.jsx(G,{"data-testid":`${s}Icon`,ref:e,...i,children:t})}return o.muiName=G.muiName,y.memo(y.forwardRef(o))}const K={disabled:!1};var Ct=function(s){return s.scrollTop},M="unmounted",O="exited",k="entering",w="entered",B="exiting",S=function(t){gt(s,t);function s(i,e){var n;n=t.call(this,i,e)||this;var r=e,a=r&&!r.isMounting?i.enter:i.appear,l;return n.appearStatus=null,i.in?a?(l=O,n.appearStatus=k):l=w:i.unmountOnExit||i.mountOnEnter?l=M:l=O,n.state={status:l},n.nextCallback=null,n}s.getDerivedStateFromProps=function(e,n){var r=e.in;return r&&n.status===M?{status:O}:null};var o=s.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var n=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==k&&r!==w&&(n=k):(r===k||r===w)&&(n=B)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e=this.props.timeout,n,r,a;return n=r=a=e,e!=null&&typeof e!="number"&&(n=e.exit,r=e.enter,a=e.appear!==void 0?e.appear:r),{exit:n,enter:r,appear:a}},o.updateStatus=function(e,n){if(e===void 0&&(e=!1),n!==null)if(this.cancelNextCallback(),n===k){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:U.findDOMNode(this);r&&Ct(r)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===O&&this.setState({status:M})},o.performEnter=function(e){var n=this,r=this.props.enter,a=this.context?this.context.isMounting:e,l=this.props.nodeRef?[a]:[U.findDOMNode(this),a],c=l[0],f=l[1],p=this.getTimeouts(),h=a?p.appear:p.enter;if(!e&&!r||K.disabled){this.safeSetState({status:w},function(){n.props.onEntered(c)});return}this.props.onEnter(c,f),this.safeSetState({status:k},function(){n.props.onEntering(c,f),n.onTransitionEnd(h,function(){n.safeSetState({status:w},function(){n.props.onEntered(c,f)})})})},o.performExit=function(){var e=this,n=this.props.exit,r=this.getTimeouts(),a=this.props.nodeRef?void 0:U.findDOMNode(this);if(!n||K.disabled){this.safeSetState({status:O},function(){e.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:B},function(){e.props.onExiting(a),e.onTransitionEnd(r.exit,function(){e.safeSetState({status:O},function(){e.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},o.setNextCallback=function(e){var n=this,r=!0;return this.nextCallback=function(a){r&&(r=!1,n.nextCallback=null,e(a))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},o.onTransitionEnd=function(e,n){this.setNextCallback(n);var r=this.props.nodeRef?this.props.nodeRef.current:U.findDOMNode(this),a=e==null&&!this.props.addEndListener;if(!r||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],c=l[0],f=l[1];this.props.addEndListener(c,f)}e!=null&&setTimeout(this.nextCallback,e)},o.render=function(){var e=this.state.status;if(e===M)return null;var n=this.props,r=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=ct(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return A.createElement(Q.Provider,{value:null},typeof r=="function"?r(e,a):A.cloneElement(A.Children.only(r),a))},s}(A.Component);S.contextType=Q;S.propTypes={};function I(){}S.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:I,onEntering:I,onEntered:I,onExit:I,onExiting:I,onExited:I};S.UNMOUNTED=M;S.EXITED=O;S.ENTERING=k;S.ENTERED=w;S.EXITING=B;const Rt=t=>t.scrollTop;function q(t,s){const{timeout:o,easing:i,style:e={}}=t;return{duration:e.transitionDuration??(typeof o=="number"?o:o[s.mode]||0),easing:e.transitionTimingFunction??(typeof i=="object"?i[s.mode]:i),delay:e.transitionDelay}}function Ht(t,s){const{className:o,elementType:i,ownerState:e,externalForwardedProps:n,getSlotOwnerState:r,internalForwardedProps:a,...l}=s,{component:c,slots:f={[t]:void 0},slotProps:p={[t]:void 0},...h}=n,E=f[t]||i,m=tt(p[t],e),{props:{component:u,...g},internalRef:x}=P({className:o,...l,externalForwardedProps:t==="root"?h:void 0,externalSlotProps:m}),$=V(x,m==null?void 0:m.ref,s.ref),D=r?r(g):{},T={...e,...D},b=t==="root"?u||c:u,L=Y(E,{...t==="root"&&!c&&!f[t]&&a,...t!=="root"&&!f[t]&&a,...g,...b&&{as:b},ref:$},T);return Object.keys(D).forEach(N=>{delete L[N]}),[E,L]}function F(t){return`scale(${t}, ${t**2})`}const bt={entering:{opacity:1,transform:F(1)},entered:{opacity:1,transform:"none"}},W=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),J=y.forwardRef(function(s,o){const{addEndListener:i,appear:e=!0,children:n,easing:r,in:a,onEnter:l,onEntered:c,onEntering:f,onExit:p,onExited:h,onExiting:E,style:m,timeout:u="auto",TransitionComponent:g=S,...x}=s,$=lt(),D=y.useRef(),T=Et(),b=y.useRef(null),L=V(b,St(n),o),N=d=>C=>{if(d){const R=b.current;C===void 0?d(R):d(R,C)}},et=N(f),nt=N((d,C)=>{Rt(d);const{duration:R,delay:j,easing:v}=q({style:m,timeout:u,easing:r},{mode:"enter"});let z;u==="auto"?(z=T.transitions.getAutoHeightDuration(d.clientHeight),D.current=z):z=R,d.style.transition=[T.transitions.create("opacity",{duration:z,delay:j}),T.transitions.create("transform",{duration:W?z:z*.666,delay:j,easing:v})].join(","),l&&l(d,C)}),ot=N(c),it=N(E),st=N(d=>{const{duration:C,delay:R,easing:j}=q({style:m,timeout:u,easing:r},{mode:"exit"});let v;u==="auto"?(v=T.transitions.getAutoHeightDuration(d.clientHeight),D.current=v):v=C,d.style.transition=[T.transitions.create("opacity",{duration:v,delay:R}),T.transitions.create("transform",{duration:W?v:v*.666,delay:W?R:R||v*.333,easing:j})].join(","),d.style.opacity=0,d.style.transform=F(.75),p&&p(d)}),rt=N(h),at=d=>{u==="auto"&&$.start(D.current||0,d),i&&i(b.current,d)};return H.jsx(g,{appear:e,in:a,nodeRef:b,onEnter:nt,onEntered:ot,onEntering:et,onExit:st,onExited:rt,onExiting:it,addEndListener:at,timeout:u==="auto"?null:u,...x,children:(d,C)=>y.cloneElement(n,{style:{opacity:0,transform:F(.75),visibility:d==="exited"&&!a?"hidden":void 0,...bt[d],...m,...n.props.style},ref:L,...C})})});J&&(J.muiSupportAuto=!0);export{J as G,S as T,At as a,q as b,Ut as c,yt as e,St as g,jt as o,Rt as r,Ht as u};
