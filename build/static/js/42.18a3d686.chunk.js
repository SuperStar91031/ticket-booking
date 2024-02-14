"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[42],{821:function(e,t,n){n.d(t,{Z:function(){return b}});var l,s=n(9439),i=n(168),c=n(2791),a=n(7689),d=n(2711),r=n(9953),o=n(7691),u=n(647),x=n(7834),v=n(1539),f=n(2654),m=n(2821),h=n(362),p=n(184),j=o.default.div(l||(l=(0,i.Z)(["\n    border-radius: 1rem;\n    width: 100%;\n    border: 1px;\n    border-style: solid;\n    border-color: transparent;\n    padding: 4px 1rem;\n    display: inline-flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 0.5rem;\n    position: relative;\n    background: linear-gradient(#1c1c1c, #1c1c1c) padding-box, linear-gradient(to bottom, #828282, #323232) border-box;\n    input::placeholder {\n        color: #828282;\n        font-size: 16px;\n    }\n"])));function b(e){var t=e.small,n=void 0!==t&&t,l=e.handleSelected,i=(0,a.s0)(),o=(0,v.Z)().t,b=(0,x.Z)().isAuthenticated,g=(0,u.v9)((function(e){return e.event})).events,N=(0,c.useState)(!1),y=(0,s.Z)(N,2),C=y[0],w=y[1],Z=(0,c.useState)(""),S=(0,s.Z)(Z,2),L=S[0],k=S[1],T=(0,c.useState)([]),E=(0,s.Z)(T,2),_=E[0],I=E[1];return(0,c.useEffect)((function(){L&&""!==L&&(C||w(!0),I(null===g||void 0===g?void 0:g.filter((function(e){return e.name.toLowerCase().includes(L.trim())||e.place.toLowerCase().includes(L.trim())}))))}),[L]),(0,c.useEffect)((function(){(0,u.WI)((0,h.Uw)())}),[]),(0,p.jsxs)("div",{className:"w-full relative",children:[(0,p.jsxs)(j,{children:[(0,p.jsx)(d.JO,{icon:"ri:search-line",color:"#828282",width:24}),(0,p.jsx)("input",{value:L,onChange:function(e){return k(e.target.value.toLowerCase())},className:"input border-none flex-1 ".concat(n?"input-sm":""," "),"aria-label":"search-input",placeholder:o("title.search")}),(0,p.jsx)("button",{className:"btn btn-circle btn-sm bg-transparent border-none","aria-label":"search-products",children:(0,p.jsx)(d.JO,{icon:"ic:outline-filter-list",color:"#99A1A3",width:24})})]}),L&&""!==L&&C&&(0,p.jsx)("div",{className:"absolute z-40 top-20 w-full left-0 rounded-lg -mt-3",children:(0,p.jsx)(m.Z,{children:(0,p.jsx)(r.Z,{style:{maxHeight:"40vh"},children:(0,p.jsxs)("div",{className:"flex w-full justify-center flex-col p-4 gap-2",children:[(0,p.jsx)("label",{className:"text-stone-400 text-lg",children:o("title.search_result")}),0===(null===_||void 0===_?void 0:_.length)&&(0,p.jsxs)("div",{className:"flex flex-col justify-center items-center p-4 gap-4",children:[(0,p.jsx)("label",{className:"text-xl",children:o("message.not_found_event")}),(0,p.jsx)("button",{className:"btn btn-primary capitalize",onClick:function(){b&&i("/event/add")},children:!b&&(0,p.jsx)("label",{htmlFor:"auth-modal-check",className:"cursor-pointer",children:o("action.register_event")})||(0,p.jsx)("label",{className:"cursor-pointer",children:o("action.register_event")})})]}),null===_||void 0===_?void 0:_.map((function(e,t){return(0,p.jsx)("div",{className:"flex justify-between p-2 w-full hover:bg-secondary cursor-pointer rounded-lg",children:(0,p.jsxs)("div",{className:"flex gap-2 items-center cursor-pointer w-full",onClick:function(){return t=e,void(l?(l(t),w(!1)):i("/event/".concat(t._id,"/basic")));var t},children:[(0,p.jsx)(d.JO,{icon:"arcticons:eventyayattendee",width:24}),(0,p.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,p.jsx)("h6",{className:"text-lg",children:e.name}),(0,p.jsxs)("h6",{className:"text-primary",children:[e.containsTime?(0,f.zM)(e.dateTime):(0,f.gC)(e.dateTime),",\xa0",e.place]})]})]})},t)}))]})})})})]})}},1042:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(9439),s=n(2791),i=n(7834),c=n(647),a=n(5030),d=n(5212),r=n(9242),o=n(6282),u=n(7311),x=n(6326),v=n(5289),f=n(8788),m=n(7549),h=n(8077),p=n(6267),j=n(184),b=!1;function g(){var e=(0,i.Z)().user,t=(0,c.v9)((function(e){return e.ticket})).saved,n=(0,s.useState)((null===t||void 0===t?void 0:t.ticketSavedStep)||0),g=(0,l.Z)(n,2),N=g[0],y=g[1],C=(0,s.useState)(""),w=(0,l.Z)(C,2),Z=w[0],S=w[1];return(0,s.useEffect)((function(){(0,c.WI)((0,a.jM)())}),[N]),(0,s.useEffect)((function(){t&&(null===t||void 0===t?void 0:t.ticketSavedStep)>=0?(b||y(null===t||void 0===t?void 0:t.ticketSavedStep),b=!0):!t||null!==t&&void 0!==t&&t.ticketSavedStep||y(0)}),[t]),(0,j.jsxs)(d.Z,{title:"Add Ticket",children:[(0,j.jsx)(r.Z,{children:(0,j.jsxs)("div",{className:"container mb-[136px]",children:[0===N&&(0,j.jsx)(u.Z,{setStep:y}),1===N&&(0,j.jsx)(f.Z,{setStep:y}),2===N&&(0,j.jsx)(o.Z,{setStep:y}),3===N&&(0,j.jsx)(x.Z,{setStep:y}),4===N&&(0,j.jsx)(v.Z,{setStep:y}),5===N&&(0,j.jsx)(m.Z,{setID:S,setStep:y}),6===N&&(0,j.jsx)(p.Z,{id:Z,setStep:y})]})}),(0,j.jsx)(h.Z,{user:e,isAdditionalPhone:!0})]})}},7311:function(e,t,n){n.d(t,{Z:function(){return b}});var l=n(1413),s=n(9439),i=n(2791),c=n(5985),a=n(3197),d=n(9615),r=n(647),o=n(7834),u=n(1539),x=n(2711),v=n(2654),f=n(184);function m(e){var t=e.event,n=e.handleDiscardEvent;return(0,f.jsxs)("div",{className:"flex px-2 md:px-6 p-4 justify-between bg-secondary rounded-xl ksdEjn event-active-bg",children:[(0,f.jsx)("div",{className:"flex gap-2 h-full items-center",children:(0,f.jsxs)("div",{className:"flex items-stretch justify-between flex-col gap-1",children:[(0,f.jsxs)("label",{className:"flex text-2xl gap-2 items-center capitalize",children:[t.name,(0,f.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M4.20766 13.7146L2.05491 13.2449C1.8592 13.2058 1.70264 13.1045 1.58521 12.9412C1.46779 12.7783 1.42213 12.5991 1.44822 12.4034L1.6635 10.1919L0.195705 8.50883C0.0652351 8.36532 0 8.19571 0 8C0 7.80429 0.0652351 7.63468 0.195705 7.49117L1.6635 5.8081L1.44822 3.59663C1.42213 3.40092 1.46779 3.22166 1.58521 3.05883C1.70264 2.89548 1.8592 2.79424 2.05491 2.7551L4.20766 2.2854L5.34276 0.367491C5.44713 0.19788 5.59065 0.0869802 5.77331 0.0347921C5.95597 -0.017396 6.13862 -0.0108725 6.32128 0.0543626L8.35662 0.915466L10.392 0.0543626C10.5746 -0.0108725 10.7573 -0.017396 10.9399 0.0347921C11.1226 0.0869802 11.2661 0.19788 11.3705 0.367491L12.5056 2.2854L14.6583 2.7551C14.854 2.79424 15.0106 2.89548 15.128 3.05883C15.2454 3.22166 15.2911 3.40092 15.265 3.59663L15.0497 5.8081L16.5175 7.49117C16.648 7.63468 16.7132 7.80429 16.7132 8C16.7132 8.19571 16.648 8.36532 16.5175 8.50883L15.0497 10.1919L15.265 12.4034C15.2911 12.5991 15.2454 12.7783 15.128 12.9412C15.0106 13.1045 14.854 13.2058 14.6583 13.2449L12.5056 13.7146L11.3705 15.6325C11.2661 15.8021 11.1226 15.913 10.9399 15.9652C10.7573 16.0174 10.5746 16.0109 10.392 15.9456L8.35662 15.0845L6.32128 15.9456C6.13862 16.0109 5.95597 16.0174 5.77331 15.9652C5.59065 15.913 5.44713 15.8021 5.34276 15.6325L4.20766 13.7146ZM6.98668 10.231C7.1302 10.3746 7.31286 10.4463 7.53466 10.4463C7.75646 10.4463 7.93911 10.3746 8.08263 10.231L11.4096 6.90405C11.5662 6.74749 11.6445 6.56144 11.6445 6.3459C11.6445 6.13088 11.5662 5.94509 11.4096 5.78853C11.2531 5.63197 11.0673 5.55368 10.8523 5.55368C10.6367 5.55368 10.4507 5.63197 10.2941 5.78853L7.53466 8.54797L6.39957 7.43245C6.243 7.28894 6.05721 7.22031 5.8422 7.22657C5.62666 7.23336 5.44713 7.30851 5.30362 7.45202C5.1601 7.59554 5.08834 7.7782 5.08834 8C5.08834 8.2218 5.1601 8.40446 5.30362 8.54797L6.98668 10.231Z",fill:"#F2B705"})})]}),(0,f.jsxs)("div",{className:"text-[#99A1A3] text-sm",children:[(0,f.jsx)("span",{children:(0,v.uW)(t)}),(0,f.jsx)("span",{children:" \u2022 "}),(0,f.jsxs)("span",{children:[" ",t.place]})]})]})}),(0,f.jsx)("div",{className:"flex flex-col justify-center",children:(0,f.jsx)("button",{className:"btn  btn-circle btn-ghost btn-sm",onClick:n,children:(0,f.jsx)(x.JO,{icon:"iconoir:cancel",className:"text-[#E9ECF4]",width:20})})})]})}var h=n(2821);function p(e){var t=e.eventType,n=e.handleSelectType,s=e.handleCancelType,i=e.defaultChecked,c=void 0!==i&&i;return(0,f.jsx)(h.Z,{className:"px-2 md:px-6 p-4  justify-between bg-base-200 rounded-xl ksdEjn event-item".concat(c?" event-active-bg":""),children:(0,f.jsxs)("div",{className:"flex",children:[(0,f.jsx)("div",{className:"flex gap-2 h-full items-center w-full",onClick:n,children:(0,f.jsxs)("div",{className:"flex items-stretch justify-between flex-col",children:[(0,f.jsx)("label",{className:"text-xl",children:t.name}),(0,f.jsx)("div",{children:(0,f.jsx)("span",{className:"text-stone-400",children:(0,v.uW)((0,l.Z)((0,l.Z)({},t),{},{containsTime:!0}))})})]})}),c&&(0,f.jsx)("div",{className:"flex flex-col justify-center",children:(0,f.jsx)("button",{className:"btn  btn-circle btn-ghost btn-sm",onClick:s,children:(0,f.jsx)(x.JO,{icon:"iconoir:cancel",className:"text-[#E9ECF4]",width:20})})})]})})}var j=n(821);function b(e){var t,n=e.setStep,x=e.mode,v=void 0===x?"sell":x,h=e.handleChangeEvent,b=void 0===h?function(){}:h,g=(0,o.Z)().user,N=(0,r.v9)((function(e){return e.ticket})).saved,y=(0,u.Z)().t,C=(0,i.useState)(null),w=(0,s.Z)(C,2),Z=w[0],S=w[1],L=(0,i.useState)(!0),k=(0,s.Z)(L,2),T=k[0],E=k[1],_=(0,i.useState)(!1),I=(0,s.Z)(_,2),A=I[0],z=I[1],D=function(e,t,n){S("select"===n?(0,l.Z)((0,l.Z)({},Z),{},{eventTypeId:e,selectedDate:t}):(0,l.Z)((0,l.Z)({},Z),{},{eventTypeId:"",selectedDate:""})),E("select"!==n)};return(0,i.useEffect)((function(){if(N&&null!==N&&"sell"===v){var e=null===N||void 0===N?void 0:N.event;S((0,l.Z)((0,l.Z)({},e),{},{eventTypeId:null===N||void 0===N?void 0:N.eventTypeId,selectedDate:null===N||void 0===N?void 0:N.dateTime})),E(!1)}}),[N,v]),(0,i.useEffect)((function(){Z&&"buy"===v&&E(!1)}),[Z,v]),(0,f.jsxs)("div",{className:"flex flex-col gap-4 justify-center items-start px-2",children:[(0,f.jsxs)("div",{className:"flex flex-col gap-4 mb-12 w-full",children:[(0,f.jsx)("h3",{className:"text-4xl md:text-[64px]",children:y("title.select_event")}),(0,f.jsxs)("div",{className:"w-full md:w-1/2",children:["sell"===v&&(0,f.jsx)("p",{className:"text-stone-400",children:y("description.select_event",{fullName:null===g||void 0===g?void 0:g.fullName})}),"buy"===v&&(0,f.jsx)("p",{className:"text-stone-400",children:y("description.select_event_buy",{fullName:null===g||void 0===g?void 0:g.fullName})})]})]}),!Z&&(0,f.jsx)("div",{className:"w-full md:w-1/2 flex flex-col gap-4",children:(0,f.jsx)(j.Z,{handleSelected:function(e){return function(e){S(e)}(e)}})}),Z&&(0,f.jsx)("div",{className:"flex flex-col gap-8 w-full grid grid-cols-1 md:grid-cols-2 mb-12",children:(0,f.jsx)(m,{event:Z,handleDiscardEvent:function(){Z&&(S(null),"buy"===v&&E(!0))}})}),Z&&"sell"===v&&(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsx)("div",{className:"grid md:grid-cols-2 mb-8",children:(0,f.jsxs)("div",{className:"flex flex-col gap-2 ",children:[(0,f.jsx)("h3",{className:"text-[28px]",children:y("title.select_event_type")}),(0,f.jsx)("p",{className:"text-stone-400",children:y("description.select_event_type")})]})}),(0,f.jsx)("div",{className:"grid md:grid-cols-2 gap-8",children:null===Z||void 0===Z||null===(t=Z.types)||void 0===t?void 0:t.map((function(e,t){return(0,f.jsx)(p,{defaultChecked:(null===e||void 0===e?void 0:e.typeId)===(null===Z||void 0===Z?void 0:Z.eventTypeId),eventType:e,handleSelectType:function(){return D(e.typeId,null===e||void 0===e?void 0:e.dateTime,"select")},handleCancelType:function(){return D(e.typeId,null===e||void 0===e?void 0:e.dateTime,"cancel")}},t)}))})]}),Z&&(0,f.jsx)("div",{className:"flex flex-col gap-8 justify-center items-end w-full",children:(0,f.jsxs)("div",{className:"max-w-2xl w-full mb-8",children:[(0,f.jsx)("div",{className:"h-6"}),(0,f.jsx)("div",{className:"w-full flex justify-end",children:(0,f.jsx)("button",{disabled:T,className:"btn btn-primary px-4 md:px-8 capitalize py-2 md:py-4 rounded-2xl text-base md:text-[19px] h-auto ".concat(A&&"loading"),onClick:function(){z(!0),"sell"===v&&d.Z.post(a.vp.saveTicketEvent,{eventId:null===Z||void 0===Z?void 0:Z._id,typeId:null===Z||void 0===Z?void 0:Z.eventTypeId}).then((function(e){200===e.status&&(E(!0),n(1))})).catch((function(e){var t=e.message;c.Am.error(t.toString())})).finally((function(){z(!1)})),"buy"===v&&b(Z)},children:y("action.continue")})})]})})]})}}}]);
//# sourceMappingURL=42.18a3d686.chunk.js.map