"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[623],{1607:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(1413),r=t(5987),c=(t(2791),t(184)),l=["label","color","className"];function a(e){var n=e.label,t=e.color,a=e.className,s=void 0===a?"":a,o=(0,r.Z)(e,l);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",(0,i.Z)((0,i.Z)({className:"px-2 py-0.5 bg-".concat(t," text-sm rounded-full ").concat(s)},o),{},{children:(0,c.jsx)("span",{children:n})}))})}},5212:function(e,n,t){var i=t(1413),r=t(5987),c=t(2791),l=t(2007),a=t.n(l),s=t(6907),o=t(184),d=["children","title","meta"],u=(0,c.forwardRef)((function(e,n){var t=e.children,c=e.title,l=void 0===c?"":c,a=e.meta,u=(0,r.Z)(e,d);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ql,{children:[(0,o.jsx)("title",{children:"".concat(l," | fanticket")}),a]}),(0,o.jsx)("div",(0,i.Z)((0,i.Z)({ref:n},u),{},{children:t}))]})}));u.propTypes={children:a().node.isRequired,title:a().string,meta:a().node},n.Z=u},821:function(e,n,t){t.d(n,{Z:function(){return g}});var i,r=t(9439),c=t(168),l=t(2791),a=t(7689),s=t(2711),o=t(9953),d=t(7691),u=t(647),x=t(7834),f=t(1539),m=t(2654),v=t(2821),h=t(362),p=t(184),b=d.default.div(i||(i=(0,c.Z)(["\n    border-radius: 1rem;\n    width: 100%;\n    border: 1px;\n    border-style: solid;\n    border-color: transparent;\n    padding: 4px 1rem;\n    display: inline-flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n    position: relative;\n    background: linear-gradient(#1c1c1c, #1c1c1c) padding-box, linear-gradient(to bottom, #828282, #323232) border-box;\n    input::placeholder {\n        color: #828282;\n        font-size: 16px;\n    }\n"])));function g(e){var n=e.small,t=void 0!==n&&n,i=e.handleSelected,c=(0,a.s0)(),d=(0,f.Z)().t,g=(0,x.Z)().isAuthenticated,j=(0,u.v9)((function(e){return e.event})).events,y=(0,l.useState)(!1),N=(0,r.Z)(y,2),w=N[0],Z=N[1],k=(0,l.useState)(""),M=(0,r.Z)(k,2),E=M[0],C=M[1],_=(0,l.useState)([]),z=(0,r.Z)(_,2),D=z[0],T=z[1];return(0,l.useEffect)((function(){E&&""!==E&&(w||Z(!0),T(null===j||void 0===j?void 0:j.filter((function(e){return e.name.toLowerCase().includes(E.trim())||e.place.toLowerCase().includes(E.trim())}))))}),[E]),(0,l.useEffect)((function(){(0,u.WI)((0,h.Uw)())}),[]),(0,p.jsxs)("div",{className:"w-full relative",children:[(0,p.jsxs)(b,{children:[(0,p.jsx)(s.JO,{icon:"ri:search-line",color:"#828282",width:24}),(0,p.jsx)("input",{value:E,onChange:function(e){return C(e.target.value.toLowerCase())},className:"input border-none flex-1 ".concat(t?"input-sm":""," "),"aria-label":"search-input",placeholder:d("title.search")}),(0,p.jsx)("button",{className:"btn btn-circle btn-sm bg-transparent border-none","aria-label":"search-products",children:(0,p.jsx)(s.JO,{icon:"ic:outline-filter-list",color:"#99A1A3",width:24})})]}),E&&""!==E&&w&&(0,p.jsx)("div",{className:"absolute z-40 top-20 w-full left-0 rounded-lg -mt-3",children:(0,p.jsx)(v.Z,{children:(0,p.jsx)(o.Z,{style:{maxHeight:"40vh"},children:(0,p.jsxs)("div",{className:"flex w-full justify-center flex-col p-4 gap-2",children:[(0,p.jsx)("label",{className:"text-stone-400 text-lg",children:d("title.search_result")}),0===(null===D||void 0===D?void 0:D.length)&&(0,p.jsxs)("div",{className:"flex flex-col justify-center items-center p-4 gap-4",children:[(0,p.jsx)("label",{className:"text-xl",children:d("message.not_found_event")}),(0,p.jsx)("button",{className:"btn btn-primary capitalize",onClick:function(){g&&c("/event/add")},children:!g&&(0,p.jsx)("label",{htmlFor:"auth-modal-check",className:"cursor-pointer",children:d("action.register_event")})||(0,p.jsx)("label",{className:"cursor-pointer",children:d("action.register_event")})})]}),null===D||void 0===D?void 0:D.map((function(e,n){return(0,p.jsx)("div",{className:"flex justify-between p-2 w-full hover:bg-secondary cursor-pointer rounded-lg",children:(0,p.jsxs)("div",{className:"flex gap-2 items-center cursor-pointer w-full",onClick:function(){return n=e,void(i?(i(n),Z(!1)):c("/event/".concat(n._id,"/basic")));var n},children:[(0,p.jsx)(s.JO,{icon:"arcticons:eventyayattendee",width:24}),(0,p.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,p.jsx)("h6",{className:"text-lg",children:e.name}),(0,p.jsxs)("h6",{className:"text-primary",children:[e.containsTime?(0,m.zM)(e.dateTime):(0,m.gC)(e.dateTime),",\xa0",e.place]})]})]})},n)}))]})})})})]})}},2821:function(e,n,t){t.d(n,{Z:function(){return s},i:function(){return o}});var i,r=t(168),c=t(7691),l=t(184),a=c.default.div(i||(i=(0,r.Z)(["\n    border-radius: 16px;\n    width: 100%;\n    cursor: pointer;\n    border: 1px;\n    border-style: solid;\n    border-color: transparent;\n\n    display: inline-flex;\n    justify-content: space-between;\n    position: relative;\n    background: linear-gradient(#1c1c1c, #1c1c1c) padding-box, linear-gradient(to bottom, #828282, #323232) border-box;\n"])));function s(e){return(0,l.jsx)(a,{className:null===e||void 0===e?void 0:e.className,children:(0,l.jsx)("div",{className:"w-full ".concat((null===e||void 0===e?void 0:e.isMessage)&&"bg-primary/30"," rounded-xl ").concat((null===e||void 0===e?void 0:e.hoverEvent)&&"hover:bg-primary/20"," "),onClick:null===e||void 0===e?void 0:e.onClick,children:e.children})})}var o=function(e){var n=e.cls,t=void 0===n?"":n;return(0,l.jsx)("div",{className:"divider overflow-hidden ".concat(t),style:{height:1}})}},9242:function(e,n,t){t.d(n,{Z:function(){return s}});var i,r=t(168),c=t(7691),l=t(184),a=c.default.div(i||(i=(0,r.Z)(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    position: relative;\n    &:before {\n        content: '';\n        background-image: linear-gradient(0deg, #1c1c1c 24.45%, rgba(28, 28, 28, 0) 84.89%),\n            ",";\n\n        z-index: -1;\n        position: absolute;\n        background-size: cover;\n        background-repeat: no-repeat;\n        -webkit-filter: grayscale(100%) blur(17.5px);\n        filter: grayscale(100%) blur(17.5px);\n        background-position: center;\n        width: 100%;\n        height: 100%;\n    }\n"])),(function(e){return e.cover||'url("/images/background/main-banner-bg.jpg")'}));function s(e){return(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(a,{className:"pt-40",children:e.children})})}},1623:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var i=t(9439),r=t(2791),c=t(7689),l=t(3197),a=t(1539),s=t(9615),o=t(2654),d=t(5212),u=t(9242),x=t(821),f=t(2821),m=t(1607),v=t(184);function h(){var e=(0,a.Z)().t,n=(0,c.s0)(),t=(0,r.useState)([]),h=(0,i.Z)(t,2),p=h[0],b=h[1];return(0,r.useEffect)((function(){s.Z.get(l.Xz.getMyTicket).then((function(e){200===e.status&&b(e.data.data)}))}),[]),(0,v.jsx)(d.Z,{title:e("title.tickets"),children:(0,v.jsx)(u.Z,{children:(0,v.jsxs)("div",{className:"container p-4 mb-8",children:[(0,v.jsxs)("div",{className:"w-full justify-center flex flex-col mb-12",children:[(0,v.jsx)("h4",{className:"text-4xl md:text-[64px]",children:e("title.tickets")}),(0,v.jsx)("p",{className:"text-stone-400 mt-4",children:e("description.".concat(p.length?"my_tickets":"empty_ticket"))})]}),(0,v.jsxs)("div",{className:"flex flex-col gap-4 w-full mb-8",children:[0===p.length&&(0,v.jsx)("div",{className:"max-w-2xl mb-4",children:(0,v.jsx)(x.Z,{})}),(0,v.jsx)("div",{className:"flex flex-col gap-4 w-full mb-8",children:(0,v.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:p.map((function(t,i){return(0,v.jsx)(f.Z,{onClick:function(){return n("/ticket/list/".concat(t._id),{state:{type:"my-ticket"}})},className:"flex px-6 p-[19px] justify-between bg-base-200 rounded-xl cursor-pointer hover:bg-secondary/50",children:(0,v.jsxs)("div",{className:"flex gap-6",children:[(0,v.jsx)("img",{src:"".concat(l.E0,"uploads/ticket_avatar/default-ticket.svg"),className:"w-16 h-20 rounded-xl ",alt:""}),(0,v.jsxs)("div",{className:"flex items-stretch justify-between flex-col w-full",children:[(0,v.jsx)("label",{className:"text-[19px] capitalize ".concat(t.removed&&"text-stone-400"),children:null===t||void 0===t?void 0:t.name}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{className:"text-sm text-stone-400",children:(0,o.UX)(null===t||void 0===t?void 0:t.dateTime)}),(0,v.jsx)("br",{}),(0,v.jsxs)("div",{className:"flex justify-between",children:[(0,v.jsx)("span",{className:"text-base text-stone-400",children:"".concat(null===t||void 0===t?void 0:t.place,", ").concat(null===t||void 0===t?void 0:t.location.city.name," ").concat(null===t||void 0===t?void 0:t.location.city.countryCode," ")}),t.removed&&(0,v.jsx)(m.Z,{label:e("label.removed"),color:"red-500"})]})]})]})]})},i)}))})})]})]})})})}},2654:function(e,n,t){t.d(n,{DY:function(){return s},UX:function(){return o},gC:function(){return l},uW:function(){return c},xD:function(){return d},zM:function(){return a}});var i=t(9158),r=t(5939);function c(e){return e.containsTime?a(e.dateTime):l(e.dateTime)}function l(e){return(0,i.Z)(new Date(e),"dd MMM yyyy")}function a(e){return(0,i.Z)(new Date(e),"dd MMM yyyy HH:mm")}function s(e){try{return(0,r.Z)(new Date(e),{addSuffix:!0})}catch(n){return"Invaild Date"}}function o(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{return n?(0,i.Z)(new Date(e),"EEEE dd, MMMM, yyyy p"):(0,i.Z)(new Date(e),"EEEE dd, MMMM, yyyy")}catch(t){return"".concat(e)}}function d(e){try{return(0,i.Z)(new Date(e),"MMM, dd EEE")}catch(n){return"".concat(e)}}}}]);
//# sourceMappingURL=623.41695b50.chunk.js.map