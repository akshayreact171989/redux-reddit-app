(this["webpackJsonpredux-reddit-app"]=this["webpackJsonpredux-reddit-app"]||[]).push([[0],{38:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADjklEQVR4Ae3BX2iVZQDH8d85Wxub++eSDIqQ1p+rLFIWIV1Vhhdi2J+rRUE3XbSl68JglNs5tNmKYsNiVCTV1AJxkBR0EWgUShAWKG2VdjFcm5uz1RQ22r5JhPS87zln57zP88698Hw+kud5nud5nud5niPcwpP0MMRJxrjMAgtcZoyTDNHNE9ykktCp5UKKB+jjV5Yywpvcr6LQCVoOrGYXZyjFCO3UqSC6uEJxo5HXmCWKGTLUKQ+6+JfiRJpWprFxnmdJKYQM/1F8uJMTuHCUdTKQ4SrFhae5hCszPK6ryPA/igNl9OPaq6R0BVkMco9KhihkjP20spkmGqmgjFqaeJAdfMIEhQxSTpYAuUYFX5DPJH1sUF6k2MQAf5HPT4TILdIcJrdRWqlSEWigg4sUSW7xFrnM0U21SsD1vMsiRZBLPEUuw6xXBDzEGEuSO9zOLGGHqFFE3MhxliBXSPMtYW+TlgWqOEJBcoXnCHtH1uimILlBA1MEHSItS2RZgtwgS9AwNbJEliXJBeqYwTTHelkiSxHkAjsJ6pYlMhRFLjCMaZRqWSFDkWSP+whqkxUyFE32eB3TJFWyQBclkD1OY+qTBbooiWyxlqANiowuSiRbbMM0psjopGSyxW5M+xURnUQgWxzE1KpI6CQS2eI4ps1KFs5ialKyMI2pUcnCJUwVShb+xFShZOEcpkYlC8OYmpQsfIPpESULH2BqU7LwEqYDSha2YvpdyUIDC5g2Kln4HlO/YsJ7mI7JBXowTVGtGFDPLKYX5QJ3EfSCYkAHQU1ygx8wnWOVHKOBKUzH5AptBO2RY/QT1CJXqGYS0zx3yyE2sYBplAq5QwdBI9TIEVZzhqDn5RJ1jBN0mLQcoIwvCfqNSrlFC2EDskaKjwjbJvc4StgAaVmgnH2EHVEcWMdFwoaoVUTU8zlhE6xVPHiUXH7mHkXARn4hbJEtig97yGWeXlapBNTSy9/ksktxIsWH5DZGO9UqAjXsZILc3lfcKOcz8pliL82klAcpmtnLNPkMklb8KOdjCpngU3awhdtYQyXXUc8dPEw7BxinkH2UaXmQohfXXtHy4jH+wJVptmv5cStf48JX3KxrgxTPcB4b47To2qKB3Vwgigt0UKuVgBraOUUpTtFKrVYW7uUNfmSRwk7TQ7NWLtawnZcZ5DvOMskc80wzygkOkmUrN8jzPM/zPM/zPM+RfwD/UtiuqjXRWQAAAABJRU5ErkJggg=="},42:function(e,t,n){e.exports=n(60)},47:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"clickAnimation",(function(){return D})),n.d(a,"starsAppear",(function(){return P})),n.d(a,"zoomIn",(function(){return J})),n.d(a,"imageContainerLoading",(function(){return L})),n.d(a,"fadeInLeftBig",(function(){return M})),n.d(a,"fadeInRightBig",(function(){return X})),n.d(a,"shutterOutHorizontal",(function(){return K})),n.d(a,"shutterOutHorizontalReverse",(function(){return Q})),n.d(a,"tada",(function(){return V})),n.d(a,"heartBeat",(function(){return q})),n.d(a,"click",(function(){return Y})),n.d(a,"jumpCardClick",(function(){return G})),n.d(a,"clickSingleOption",(function(){return Z})),n.d(a,"clickMultipleOptionSelected",(function(){return $})),n.d(a,"clickMultipleOptionUnselected",(function(){return ee}));var r=n(0),i=n.n(r),o=n(14),c=n.n(o),s=(n(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(7),u=n(5),p=n(8),f=n(9),m=n(10),h=n(21),g=n(16),b=n(33),x=n(34),j=n(2),O=n(35),w=n.n(O),v="REQUEST_POSTS",y="RECEIVE_POSTS",k="SELECT_SUBREDDIT",S="INVALIDATE_SUBREDDIT";function C(e){return function(t){return t(function(e){return{type:v,subreddit:e}}(e)),w()("https://www.reddit.com/r/".concat(e,".json")).then((function(e){return e.json()})).then((function(n){return t(function(e,t){return{type:y,subreddit:e,posts:t.data.children.map((function(e){return e.data})),receivedAt:Date.now()}}(e,n))}))}}function E(e){return function(t,n){if(function(e,t){var n=e.postsBySubreddit[t];return!n||!n.isFetching&&n.didInvalidate}(n(),e))return t(C(e))}}var A=Object(g.c)({postsBySubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case y:case v:return Object.assign({},e,Object(j.a)({},t.subreddit,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,didInvalidate:!1,items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object.assign({},e,{didInvalidate:!0});case v:return Object.assign({},e,{isFetching:!0,didInvalidate:!1});case y:return Object.assign({},e,{isFetching:!1,didInvalidate:!1,items:t.posts,lastUpdated:t.receivedAt});default:return e}}({isFetching:!1,didInvalidate:!1,items:[]},t)));default:return e}},selectedSubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reactjs",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.subreddit;default:return e}}}),U=Object(x.createLogger)();var W,B,I,R=n(3),N=n(68),_=n(69),z=Object(_.a)({picker:{display:"flex",justifyContent:"center"},picker__Container:{display:"flex",justifyContent:"center","& select":{borderRadius:"4px",padding:"8px 12px",letterSpacing:.5,backgroundColor:"#2f67e3",fontSize:"20px",border:"0.5px solid white",color:"white",width:"max-content","& option":{textAlign:"center",fontSize:20,background:"rgba(0, 0, 0, 0.3)",color:"#fff !important",textShadow:"0 1px 0 rgba(0, 0, 0, 0.4)","&:selected":{color:"white"}}}},optionContainer:{minWidth:200,color:"black !important"}}),T=n(4),F=n(20),H=n(11),D={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.95)"},"100%":{transform:"scale(1)"}},P={"0%":{opacity:0},"100%":{opacity:1}},J={"0%":{opacity:0,transform:"scale(0)"},"100%":{opacity:1,transform:"scale(1)"}},L={"0%":{backgroundColor:"#DCDCDC"},"50%":{backgroundColor:"#D0D0D0"},"100%":{backgroundColor:"#B0B0B0"}},M={from:{opacity:0,transform:"translate3d(-100%, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}},X={from:{opacity:0,transform:"translate3d(100%, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}},K={from:{left:"50%",right:"50%"},to:{left:"0",right:"0"}},Q={from:{left:"0",right:"0"},to:{left:"50%",right:"50%"}},V={from:{transform:"scale3d(1, 1, 1)"},"10%,20%":{transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},"30%,50%,70%,90%":{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},"40%,60%,80%":{transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},to:{transform:"scale3d(1, 1, 1)"}},q={"0%":{transform:"scale(1)"},"14%":{transform:"scale(1.1)"},"28%":{transform:"scale(1)"},"42%":{transform:"scale(1.1)"},"70%":{transform:"scale(1)"}},Y={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.95)"},"100%":{transform:"scale(1)"}},G={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}},Z={"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.975)"},"100%":{transform:"scale(1)"}},$={"0%":{backgroundSize:"0px 0px",backgroundPositionX:"calc(100% - 12px)"},"100%":{backgroundSize:"24px 24px",backgroundPositionX:"100%"}},ee={"0%":{backgroundSize:"0px 0px",backgroundPositionX:"calc(100% - 12px)"},"100%":{backgroundSize:"24px 24px",backgroundPositionX:"100%"}},te=["xs","sm","md","lg","xl"],ne={xs:0,sm:600,md:960,lg:1280,xl:1920},ae=function(e){return{fontFamily:e}},re=(ae("'ProximaNova-Regular', sans-serif"),ae("'ProximaNova-RegularCondensed', sans-serif"),ae("'AvenirNextCondensed-Bold', sans-serif"),ae("'Roboto-Regular', sans-serif"),function(e,t){return t?"@media only screen and (max-width: ".concat(t,"px) and (min-width: ").concat(e,"px)"):"@media only screen and (min-width: ".concat(e,"px)")}),ie=function(){return re(ne.md)},oe=function(){return re(ne.lg)},ce=["flex-start","center","flex-end","stretch","baseline"],se=["stretch","center","flex-start","flex-end","space-between","space-around"],le=["row","row-reverse","column","column-reverse"],de=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40],ue=["flex-start","center","flex-end","space-between","space-around","space-evenly"],pe=["nowrap","wrap","wrap-reverse"],fe=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],me={width:"100%",display:"flex",flexWrap:"wrap",boxSizing:"border-box"},he={margin:"0",boxSizing:"border-box"},ge=function(e){return"direction-xs-".concat(e)},be=function(e){return"wrap-xs-".concat(e)},xe=function(e){return"align-items-xs-".concat(e)},je=function(e){return"align-content-xs-".concat(e)},Oe=function(e){return"justify-content-xs-".concat(e)},we=function(e){return"spacing-xs-".concat(e)},ve=function(e,t){return"grid-".concat(t,"-").concat(e)},ye=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.container,n=e.item,a=e.children,i=e.className,o=e.xs,c=e.sm,s=e.md,l=e.lg,d=e.xl,u=e.spacing,p=e.justify,f=e.alignContent,m=e.alignItems,h=e.wrap,g=e.direction,b=e.classes,x=e.gridRef,j=Object(T.a)(e,["container","item","children","className","xs","sm","md","lg","xl","spacing","justify","alignContent","alignItems","wrap","direction","classes","gridRef"]);if(t){var O=["grid-container"];return i&&O.push(i),u&&O.push(b[we(u)]),p&&O.push(b[Oe(p)]),f&&O.push(b[je(f)]),m&&O.push(b[xe(m)]),h&&O.push(b[be(h)]),g&&O.push(b[ge(g)]),r.createElement("div",Object.assign({className:O.join(" "),ref:x},j)," ",a," ")}if(n){var w=["grid-item"];return i&&w.push(i),o&&w.push(b[ve(o,"xs")]),c&&w.push(b[ve(c,"sm")]),s&&w.push(b[ve(s,"md")]),l&&w.push(b[ve(l,"lg")]),d&&w.push(b[ve(d,"xl")]),r.createElement("div",Object.assign({className:Object(F.values)(w).join(" "),ref:x},j)," ",a," ")}throw"grid should be either container or item"}}]),t}(r.Component),ke=function(){var e,t=le.reduce((function(e,t){return Object(H.a)({},e,Object(j.a)({},ge(t),{flexDirection:t}))}),{}),n=pe.reduce((function(e,t){return Object(H.a)({},e,Object(j.a)({},be(t),{flexWrap:t}))}),{}),a=ce.reduce((function(e,t){return Object(H.a)({},e,Object(j.a)({},xe(t),{alignItems:t}))}),{}),r=se.reduce((function(e,t){return Object(H.a)({},e,Object(j.a)({},je(t),{alignContent:t}))}),{}),i=ue.reduce((function(e,t){return Object(H.a)({},e,Object(j.a)({},Oe(t),{justifyContent:t}))}),{}),o=de.reduce((function(e,t){var n=we(t),a=Object(j.a)({},n,Object(j.a)({width:"calc(100% + ".concat(t,"px)"),margin:"-".concat(t/2,"px")},"&>.grid-item",{padding:"".concat(t/2,"px")}));return Object(H.a)({},e,{},a)}),{}),c=te.reduce((function(e,t){var n=fe.reduce((function(e,n){if("number"===typeof n){var a=n/12*100;return Object(H.a)({},e,Object(j.a)({},ve(n,t),{flexGrow:0,maxWidth:"".concat(a,"%"),flexBasis:"".concat(a,"%")}))}return"auto"===n?Object(H.a)({},e,Object(j.a)({},ve(n,t),{flexGrow:0,maxWidth:"none",flexBasis:"auto"})):Object(H.a)({},e,Object(j.a)({},ve(n,t),{flexGrow:1,maxWidth:"none",flexBasis:"auto"}))}),{}),a=ne[t];return a&&(n=Object(j.a)({},re(a),n)),Object(H.a)({},e,{},n)}),{});return Object(H.a)({"@global":(e={},Object(j.a)(e,".grid-container",Object(H.a)({},me)),Object(j.a)(e,".grid-item",he),e),zeroMinWidth:{minWidth:0}},t,{},n,{},a,{},r,{},i,{},o,{},c)}(),Se=Object(N.a)(ke)(ye),Ce=n(39),Ee=(Object(Ce.a)(),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.options,i=e.classes;return r.createElement(Se,{container:!0,spacing:16,className:i.picker},r.createElement(Se,{item:!0,xs:12},r.createElement("h1",null,t)),r.createElement(Se,{item:!0,xs:12,className:i.picker__Container},r.createElement("select",{onChange:function(e){return n(e.target.value)},value:t},a.map((function(e){return r.createElement("option",{value:e,key:e},e)})))))}}]),t}(r.Component)),Ae=Object(N.a)(z)(Ee),Ue=Object(_.a)({"@global":{"@keyframes imageContainerLoading":Object(H.a)({},L)},posts:Object(j.a)({marginTop:4},ie(),{marginTop:16}),posts__gridItem:(W={padding:"8px 4px !important"},Object(j.a)(W,ie(),{padding:"8px !important"}),Object(j.a)(W,oe(),{padding:"12px !important"}),W),postContainer:{display:"flex",position:"relative",alignContent:"center",boxShadow:"0 0 4px #ffffff85",backgroundColor:"rgba(255,255,255,0.8)",border:"0.5px solid white",cursor:"pointer",flexWrap:"wrap",textAlign:"center",color:"black",borderRadius:8,transition:"all .1s ease-in-out","&:hover":{transform:"scale(1.04)",boxShadow:"0px 0px 6px white"},"& img":{width:"100%",height:"100%",borderRadius:"8px 0px 0px 8px"}},postContainer__imgAnimation:{animation:"imageContainerLoading 2s ease-in-out infinite",borderRadius:"8px 0px 0px 8px",position:"absolute",width:"100%",height:"100%",zIndex:1},postContainer__img:{zIndex:10},post__heading:(B={fontSize:16,width:"100%",height:"100%",fontFamily:"'Open Sans', sans-serif",padding:8,textAlign:"center",margin:"0 !important"},Object(j.a)(B,ie(),{fontSize:18}),Object(j.a)(B,oe(),{fontSize:20}),B),post__headingText:{color:"black !important",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",lineHeight:1.5}}),We=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;e.posts;return r.createElement(Se,{container:!0,spacing:16,className:t.posts},this.props.posts.map((function(e,n){return r.createElement(Se,{item:!0,xs:12,sm:6,md:6,lg:4,xl:3,className:t.posts__gridItem},r.createElement(Se,{container:!0,spacing:0,className:t.postContainer,onClick:function(){return window.open(e.url,"_blank")}},r.createElement(Se,{item:!0,xs:4,className:t.postContainer__img},r.createElement("img",{src:"https://source.unsplash.com/200x200/?".concat(e.title)})),r.createElement(Se,{item:!0,xs:4,className:t.postContainer__imgAnimation}),r.createElement(Se,{item:!0,xs:8,className:t.post__heading},r.createElement("div",{key:n,style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.createElement("p",{className:t.post__headingText},Object(F.capitalize)(e.title))))))})))}}]),t}(r.Component),Be=Object(N.a)(Ue)(We),Ie=Object(_.a)({asyncApp:{textAlign:"left",color:"#282828",width:"100%",margin:"auto",fontFamily:"'Open Sans', sans-serif !important",padding:"8px","& h1":(I={textAlign:"center",color:"white",textTransform:"uppercase",padding:"12px 8px",letterSpacing:12,fontSize:24},Object(j.a)(I,ie(),{fontSize:30}),Object(j.a)(I,oe(),{fontSize:36}),Object(j.a)(I,"fontWeight",900),Object(j.a)(I,"margin","0"),I),"& h2":Object(j.a)({fontSize:16,width:"100%",color:"white",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,height:"56px",WebkitBoxOrient:"vertical",lineHeight:1.5,textAlign:"center",margin:"12px"},ie(),{fontSize:18})},headerContainer:{display:"flex",flexWrap:"wrap",color:"white",justifyContent:"center"},asyncApp__subHeading:{display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center",color:"white"},subHeading__text:{color:"white",display:"flex",alignItems:"center"},buttonContainer:{border:"0.5px solid white",fontFamily:"'Open Sans', sans-serif !important",letterSpacing:1.5,fontWeight:700,backgroundColor:"#E80000"},asyncApp__refreshIcon:{height:32,width:32,marginLeft:8,cursor:"pointer",transition:"all .2s ease-in-out","&:hover":{transform:"scale(1.25)"}}}),Re=n(38),Ne=n.n(Re),_e=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleRefreshClick=n.handleRefreshClick.bind(Object(R.a)(n)),n.state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.dispatch)(E(e.selectedSubreddit))}},{key:"componentDidUpdate",value:function(e){if(this.props.selectedSubreddit!==e.selectedSubreddit){var t=this.props;(0,t.dispatch)(E(t.selectedSubreddit))}}},{key:"handleChange",value:function(e){this.props.dispatch({type:k,subreddit:e}),this.props.dispatch(E(e))}},{key:"handleRefreshClick",value:function(e){e.preventDefault();var t=this.props,n=t.dispatch,a=t.selectedSubreddit;n({type:S,subreddit:a}),n(E(a))}},{key:"render",value:function(){var e=this.props,t=e.selectedSubreddit,n=e.posts,a=e.isFetching,i=e.lastUpdated,o=e.classes;return r.createElement(Se,{container:!0,spacing:16,className:o.asyncApp},r.createElement(Se,{item:!0,xs:12,className:o.headerContainer},r.createElement(Ae,{value:t,onChange:this.handleChange,options:["ReactJS","Frontend","Reduxjs","Photography"]})),r.createElement(Se,{item:!0,xs:12,className:o.asyncApp__subHeading},i&&r.createElement("div",{className:o.subHeading__text},"Last updated at ",(new Date).toLocaleTimeString(),"."," ",!a&&r.createElement("img",{src:Ne.a,onClick:this.handleRefreshClick,className:o.asyncApp__refreshIcon}))),a&&0===n.length&&r.createElement("h2",null,"Loading..."),!a&&0===n.length&&r.createElement("h2",null,"Empty."),n.length>0&&r.createElement(Se,{item:!0,xs:12,style:{opacity:a?.5:1}},r.createElement(Be,{posts:n})))}}]),t}(r.Component),ze=Object(N.a)(Ie)(_e);var Te=Object(h.b)((function(e){var t=e.selectedSubreddit,n=e.postsBySubreddit,a=e.classes,r=n[t]||{isFetching:!0,items:[]},i=r.isFetching,o=r.lastUpdated;return{selectedSubreddit:t,posts:r.items,isFetching:i,lastUpdated:o,classes:a}}))(ze),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(g.d)(A,e,Object(g.a)(b.a,U))}(),He=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,{store:Fe},i.a.createElement(Te,null))}}]),t}(r.Component);c.a.render(i.a.createElement(He,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/redux-reddit-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/redux-reddit-app","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}(),Notification.requestPermission((function(e){console.log("Notification permission status:",e)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.a2364ecf.chunk.js.map