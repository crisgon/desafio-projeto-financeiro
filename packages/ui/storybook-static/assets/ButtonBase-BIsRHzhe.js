var Dt=Object.defineProperty;var Lt=(t,e,n)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>Lt(t,typeof e!="symbol"?e+"":e,n);import{r as u,R as K}from"./index-CTjT7uj6.js";import{b as y,a as pt,s as Q,u as ft,g as vt,d as Nt}from"./createSimplePaletteValueFilter-DjLhmI3d.js";import{j}from"./jsx-runtime-Cw0GR0a5.js";import{k as tt}from"./DefaultPropsProvider-OD4Xdyjs.js";import{_ as jt}from"./extends-CF3RwP-h.js";import{_ as kt,a as $t}from"./assertThisInitialized-C1KLUksq.js";const Ft=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Ut(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function G(t){const e=u.useRef(t);return Ft(()=>{e.current=t}),u.useRef((...n)=>(0,e.current)(...n)).current}function at(...t){return u.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{Ut(n,e)})},t)}const ut={};function dt(t,e){const n=u.useRef(ut);return n.current===ut&&(n.current=t(e)),n}const zt=[];function Ot(t){u.useEffect(t,zt)}class et{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new et}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function At(){const t=dt(et.create).current;return Ot(t.disposeEffect),t}function lt(t){try{return t.matches(":focus-visible")}catch{}return!1}function Yt(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.includes(a))continue;n[a]=t[a]}return n}const ct=K.createContext(null);function nt(t,e){var n=function(r){return e&&u.isValidElement(r)?e(r):r},a=Object.create(null);return t&&u.Children.map(t,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function Xt(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var a=Object.create(null),o=[];for(var r in t)r in e?o.length&&(a[r]=o,o=[]):o.push(r);var i,p={};for(var l in e){if(a[l])for(i=0;i<a[l].length;i++){var f=a[l][i];p[a[l][i]]=n(f)}p[l]=n(l)}for(i=0;i<o.length;i++)p[o[i]]=n(o[i]);return p}function N(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Kt(t,e){return nt(t.children,function(n){return u.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:N(n,"appear",t),enter:N(n,"enter",t),exit:N(n,"exit",t)})})}function Wt(t,e,n){var a=nt(t.children),o=Xt(e,a);return Object.keys(o).forEach(function(r){var i=o[r];if(u.isValidElement(i)){var p=r in e,l=r in a,f=e[r],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?o[r]=u.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:N(i,"exit",t),enter:N(i,"enter",t)}):!l&&p&&!d?o[r]=u.cloneElement(i,{in:!1}):l&&p&&u.isValidElement(f)&&(o[r]=u.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:N(i,"exit",t),enter:N(i,"enter",t)}))}}),o}var Ht=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},_t={component:"div",childFactory:function(e){return e}},ot=function(t){kt(e,t);function e(a,o){var r;r=t.call(this,a,o)||this;var i=r.handleExited.bind($t(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,r){var i=r.children,p=r.handleExited,l=r.firstRender;return{children:l?Kt(o,p):Wt(o,i,p),firstRender:!1}},n.handleExited=function(o,r){var i=nt(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var l=jt({},p.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,p=Yt(o,["component","childFactory"]),l=this.state.contextValue,f=Ht(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,r===null?K.createElement(ct.Provider,{value:l},f):K.createElement(ct.Provider,{value:l},K.createElement(r,p,f))},e}(K.Component);ot.propTypes={};ot.defaultProps=_t;class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=dt(q.create).current,[n,a]=u.useState(!1);return e.shouldMount=n,e.setShouldMount=a,u.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=qt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Gt(){return q.use()}function qt(){let t,e;const n=new Promise((a,o)=>{t=a,e=o});return n.resolve=t,n.reject=e,n}function Zt(t){const{className:e,classes:n,pulsate:a=!1,rippleX:o,rippleY:r,rippleSize:i,in:p,onExited:l,timeout:f}=t,[d,M]=u.useState(!1),g=y(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),V={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},h=y(n.child,d&&n.childLeaving,a&&n.childPulsate);return!p&&!d&&M(!0),u.useEffect(()=>{if(!p&&l!=null){const S=setTimeout(l,f);return()=>{clearTimeout(S)}}},[l,p,f]),j.jsx("span",{className:g,style:V,children:j.jsx("span",{className:h})})}const m=pt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Jt=80,Qt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,te=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,ee=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,ne=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),oe=Q(Zt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Qt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${te};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ee};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,re=u.forwardRef(function(e,n){const a=ft({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...p}=a,[l,f]=u.useState([]),d=u.useRef(0),M=u.useRef(null);u.useEffect(()=>{M.current&&(M.current(),M.current=null)},[l]);const g=u.useRef(!1),V=At(),h=u.useRef(null),S=u.useRef(null),x=u.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:F,rippleSize:D,cb:U}=c;f(E=>[...E,j.jsx(oe,{classes:{ripple:y(r.ripple,m.ripple),rippleVisible:y(r.rippleVisible,m.rippleVisible),ripplePulsate:y(r.ripplePulsate,m.ripplePulsate),child:y(r.child,m.child),childLeaving:y(r.childLeaving,m.childLeaving),childPulsate:y(r.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:F,rippleSize:D},d.current)]),d.current+=1,M.current=U},[r]),k=u.useCallback((c={},R={},b=()=>{})=>{const{pulsate:F=!1,center:D=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const E=U?null:S.current,I=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,C,B;if(D||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)w=Math.round(I.width/2),C=Math.round(I.height/2);else{const{clientX:z,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;w=Math.round(z-I.left),C=Math.round(L-I.top)}if(D)B=Math.sqrt((2*I.width**2+I.height**2)/3),B%2===0&&(B+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,L=Math.max(Math.abs((E?E.clientHeight:0)-C),C)*2+2;B=Math.sqrt(z**2+L**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{x({pulsate:F,rippleX:w,rippleY:C,rippleSize:B,cb:b})},V.start(Jt,()=>{h.current&&(h.current(),h.current=null)})):x({pulsate:F,rippleX:w,rippleY:C,rippleSize:B,cb:b})},[o,x,V]),W=u.useCallback(()=>{k({},{pulsate:!0})},[k]),$=u.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,V.start(0,()=>{$(c,R)});return}h.current=null,f(b=>b.length>0?b.slice(1):b),M.current=R},[V]);return u.useImperativeHandle(n,()=>({pulsate:W,start:k,stop:$}),[W,k,$]),j.jsx(ne,{className:y(m.root,r.root,i),ref:S,...p,children:j.jsx(ot,{component:null,exit:!0,children:l})})});function ie(t){return vt("MuiButtonBase",t)}const se=pt("MuiButtonBase",["root","disabled","focusVisible"]),ae=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:o}=t,i=Nt({root:["root",e&&"disabled",n&&"focusVisible"]},ie,o);return n&&a&&(i.root+=` ${a}`),i},ue=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${se.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),be=u.forwardRef(function(e,n){const a=ft({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:V,LinkComponent:h="a",onBlur:S,onClick:x,onContextMenu:k,onDragLeave:W,onFocus:$,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:F,onMouseLeave:D,onMouseUp:U,onTouchEnd:E,onTouchMove:I,onTouchStart:w,tabIndex:C=0,TouchRippleProps:B,touchRippleRef:z,type:L,...O}=a,A=u.useRef(null),T=Gt(),ht=at(T.ref,z),[v,H]=u.useState(!1);f&&v&&H(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const mt=T.shouldMount&&!d&&!f;u.useEffect(()=>{v&&g&&!d&&T.pulsate()},[d,g,v,T]);function P(s,it,St=M){return G(st=>(it&&it(st),St||T[s](st),!0))}const gt=P("start",F),bt=P("stop",k),Mt=P("stop",W),Rt=P("stop",U),Et=P("stop",s=>{v&&s.preventDefault(),D&&D(s)}),yt=P("start",w),xt=P("stop",E),Ct=P("stop",I),Tt=P("stop",s=>{lt(s.target)||H(!1),S&&S(s)},!1),Pt=G(s=>{A.current||(A.current=s.currentTarget),lt(s.target)&&(H(!0),c&&c(s)),$&&$(s)}),Z=()=>{const s=A.current;return l&&l!=="button"&&!(s.tagName==="A"&&s.href)},Vt=G(s=>{g&&!s.repeat&&v&&s.key===" "&&T.stop(s,()=>{T.start(s)}),s.target===s.currentTarget&&Z()&&s.key===" "&&s.preventDefault(),R&&R(s),s.target===s.currentTarget&&Z()&&s.key==="Enter"&&!f&&(s.preventDefault(),x&&x(s))}),It=G(s=>{g&&s.key===" "&&v&&!s.defaultPrevented&&T.stop(s,()=>{T.pulsate(s)}),b&&b(s),x&&s.target===s.currentTarget&&Z()&&s.key===" "&&!s.defaultPrevented&&x(s)});let _=l;_==="button"&&(O.href||O.to)&&(_=h);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const wt=at(n,A),rt={...a,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:M,focusRipple:g,tabIndex:C,focusVisible:v},Bt=ae(rt);return j.jsxs(ue,{as:_,className:y(Bt.root,p),ownerState:rt,onBlur:Tt,onClick:x,onContextMenu:bt,onFocus:Pt,onKeyDown:Vt,onKeyUp:It,onMouseDown:gt,onMouseLeave:Et,onMouseUp:Rt,onDragLeave:Mt,onTouchEnd:xt,onTouchMove:Ct,onTouchStart:yt,ref:wt,tabIndex:f?-1:C,type:L,...Y,...O,children:[i,mt?j.jsx(re,{ref:ht,center:r,...B}):null]})});export{be as B,ct as T,Yt as _,G as a,At as b,Ft as c,Ut as s,at as u};
