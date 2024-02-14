"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[419],{1509:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(9439),s=t(2711),a=t(2791),l=t(184);function c(e){var n=(0,a.useState)(!1),t=(0,i.Z)(n,2),c=t[0],r=t[1],o=e.detail,d=e.hideLine;return(0,l.jsxs)("div",{className:"flex flex-col w-full",children:[(0,l.jsxs)("div",{className:"flex justify-between gap-1 p-2 cursor-pointer",onClick:function(){r(!c)},children:[(0,l.jsx)("div",{className:"text-[19px] ".concat(o&&"text-stone-400"),children:e.title}),(0,l.jsx)("button",{className:"text-primary btn btn-primary bg-primary/30 border-primary/30 hover:bg-primary/50 btn-circle btn-sm",children:!c&&(0,l.jsx)(s.JO,{icon:"ic:baseline-keyboard-arrow-down",width:32})||(0,l.jsx)(s.JO,{icon:"ic:baseline-keyboard-arrow-up",width:32})})]}),(0,l.jsx)("div",{className:"flex flex-col overflow-hidden ".concat(c?"h-full":"hidden"),children:e.children}),!d&&(0,l.jsx)("hr",{className:"border-t-1 border-stone-600 mt-".concat(o?2:6)})]})}},5212:function(e,n,t){var i=t(1413),s=t(5987),a=t(2791),l=t(2007),c=t.n(l),r=t(6907),o=t(184),d=["children","title","meta"],u=(0,a.forwardRef)((function(e,n){var t=e.children,a=e.title,l=void 0===a?"":a,c=e.meta,u=(0,s.Z)(e,d);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.ql,{children:[(0,o.jsx)("title",{children:"".concat(l," | fanticket")}),c]}),(0,o.jsx)("div",(0,i.Z)((0,i.Z)({ref:n},u),{},{children:t}))]})}));u.propTypes={children:c().node.isRequired,title:c().string,meta:c().node},n.Z=u},4367:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(9439),s=t(2711),a=t(2791),l=t(184);function c(e){var n=e.current,t=void 0===n?0:n,c=e.max,r=void 0===c?10:c,o=e.min,d=void 0===o?0:o,u=e.size,x=void 0===u?"lg":u,m=e.onChanged,f=e.disabled,v=(0,a.useState)(t),h=(0,i.Z)(v,2),p=h[0],j=h[1];return(0,l.jsxs)("div",{className:"flex gap-1 items-center px-2",children:[(0,l.jsx)("button",{className:"btn btn-primary bg-primary/30 border-primary/30 hover:bg-primary/50 btn-circle btn-sm ".concat("sm"===x?"w-8 h-8":"w-12 h-12"),onClick:function(){d<p&&(j(p-1),m(p-1))},disabled:f,children:(0,l.jsx)(s.JO,{className:"text-primary text-".concat("sm"===x?"":"3","xl"),icon:"ic:round-minus"})}),(0,l.jsx)("span",{className:"w-12 text-[".concat("sm"===x?"19":"28","px] text-center"),children:p}),(0,l.jsx)("button",{className:"btn btn-primary bg-primary/30 border-primary/30 hover:bg-primary/50 btn-circle btn-sm ".concat("sm"===x?"w-8 h-8":"w-12 h-12"),onClick:function(){r>p&&(j(p+1),m(p+1))},disabled:f,children:(0,l.jsx)(s.JO,{className:"text-primary text-".concat("sm"===x?"":"3","xl"),icon:"ic:outline-plus"})})]})}},7601:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(184);function s(){return(0,i.jsxs)("div",{className:"w-full flex flex-col sm:flex-row gap-4 items-center sm:items-start animate-pulse",children:[(0,i.jsx)("div",{className:"rounded-xl aspect-5/3 max-w-xs overflow-hidden w-60 h-36 bg-base-200"}),(0,i.jsxs)("div",{className:"p-2 flex flex-col gap-2",children:[(0,i.jsx)("div",{className:" mb-4 h-7 w-56 bg-base-200 rounded-xl"}),(0,i.jsx)("div",{className:" h-5 w-60 bg-base-200  rounded-xl"}),(0,i.jsx)("div",{className:" h-5 w-56 bg-base-200  rounded-xl"})]})]})}},2821:function(e,n,t){t.d(n,{Z:function(){return r},i:function(){return o}});var i,s=t(168),a=t(7691),l=t(184),c=a.default.div(i||(i=(0,s.Z)(["\n    border-radius: 16px;\n    width: 100%;\n    cursor: pointer;\n    border: 1px;\n    border-style: solid;\n    border-color: transparent;\n\n    display: inline-flex;\n    justify-content: space-between;\n    position: relative;\n    background: linear-gradient(#1c1c1c, #1c1c1c) padding-box, linear-gradient(to bottom, #828282, #323232) border-box;\n"])));function r(e){return(0,l.jsx)(c,{className:null===e||void 0===e?void 0:e.className,children:(0,l.jsx)("div",{className:"w-full ".concat((null===e||void 0===e?void 0:e.isMessage)&&"bg-primary/30"," rounded-xl ").concat((null===e||void 0===e?void 0:e.hoverEvent)&&"hover:bg-primary/20"," "),onClick:null===e||void 0===e?void 0:e.onClick,children:e.children})})}var o=function(e){var n=e.cls,t=void 0===n?"":n;return(0,l.jsx)("div",{className:"divider overflow-hidden ".concat(t),style:{height:1}})}},9242:function(e,n,t){t.d(n,{Z:function(){return r}});var i,s=t(168),a=t(7691),l=t(184),c=a.default.div(i||(i=(0,s.Z)(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n    position: relative;\n    &:before {\n        content: '';\n        background-image: linear-gradient(0deg, #1c1c1c 24.45%, rgba(28, 28, 28, 0) 84.89%),\n            ",";\n\n        z-index: -1;\n        position: absolute;\n        background-size: cover;\n        background-repeat: no-repeat;\n        -webkit-filter: grayscale(100%) blur(17.5px);\n        filter: grayscale(100%) blur(17.5px);\n        background-position: center;\n        width: 100%;\n        height: 100%;\n    }\n"])),(function(e){return e.cover||'url("/images/background/main-banner-bg.jpg")'}));function r(e){return(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(c,{className:"pt-40",children:e.children})})}},419:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(3433),s=t(9439),a=t(2791),l=t(7689),c=t(7087),r=t(2711),o=t(5985),d=t(7834),u=t(1539),x=t(3197),m=t(9615),f=t(7870),v=t(2654),h=t(2038),p=t(647),j=t(1087),b=t(1509),g=t(184);function y(){return(0,g.jsxs)("div",{className:"flex w-full flex-col gap-2 mb-8 container",children:[(0,g.jsx)("div",{className:"text-2xl mb-8",children:"Frequently asked questions"}),(0,g.jsxs)("div",{className:"grid grid-cols-2 gap-8",children:[(0,g.jsx)(b.Z,{title:"Is buying tickets with Fanticket safe?",children:(0,g.jsx)("div",{className:"flex flex-col p-2 text-sm text-stone-400",children:"Yes, Fanticket does everything to ensure a safe transaction. To keep it safe we check uploaded e-tickets and sellers in multiple ways."})}),(0,g.jsx)(b.Z,{title:"Is buying tickets with Fanticket safe?",children:(0,g.jsx)("div",{className:"flex flex-col p-2 text-sm text-stone-400",children:"Yes, Fanticket does everything to ensure a safe transaction. To keep it safe we check uploaded e-tickets and sellers in multiple ways."})}),(0,g.jsx)(b.Z,{title:"Is buying tickets with Fanticket safe?",children:(0,g.jsx)("div",{className:"flex flex-col p-2 text-sm text-stone-400",children:"Yes, Fanticket does everything to ensure a safe transaction. To keep it safe we check uploaded e-tickets and sellers in multiple ways."})}),(0,g.jsx)(b.Z,{title:"Is buying tickets with Fanticket safe?",children:(0,g.jsx)("div",{className:"flex flex-col p-2 text-sm text-stone-400",children:"Yes, Fanticket does everything to ensure a safe transaction. To keep it safe we check uploaded e-tickets and sellers in multiple ways."})}),(0,g.jsx)(b.Z,{title:"Is buying tickets with Fanticket safe?",children:(0,g.jsx)("div",{className:"flex flex-col p-2 text-sm text-stone-400",children:"Yes, Fanticket does everything to ensure a safe transaction. To keep it safe we check uploaded e-tickets and sellers in multiple ways."})}),(0,g.jsx)(b.Z,{title:"Is buying tickets with Fanticket safe?",children:(0,g.jsx)("div",{className:"flex flex-col p-2 text-sm text-stone-400",children:"Yes, Fanticket does everything to ensure a safe transaction. To keep it safe we check uploaded e-tickets and sellers in multiple ways."})})]}),(0,g.jsx)("div",{className:"w-full text-center md:w-1/2 md:text-left mb-8",children:(0,g.jsxs)("p",{className:"text-stone-400",children:["We created a comprehensive help section with frequently asked questions. Cannot find your answer there? Our customer support is happy to help you! ",(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),(0,g.jsx)(j.rU,{href:"#",className:"text-primary underline",children:"Ajuda e contato"})]})})]})}var N=t(1597),w=t(7364),k=t(2821);function Z(e){var n=e.ticket,t=e.onClose,i=e.onSend,l=(0,u.Z)().t,c=(0,a.useState)(1),r=(0,s.Z)(c,2),o=r[0],d=r[1],x=(0,a.useState)(""),m=(0,s.Z)(x,2),v=m[0],h=m[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("input",{type:"checkbox",id:"discuss-price-modal",className:"modal-toggle"}),(0,g.jsx)("div",{className:"modal",children:(0,g.jsxs)(w.j,{className:"modal-box backdrop-blur-lg",children:[(0,g.jsxs)("div",{className:"mb-2",children:[(0,g.jsx)("label",{htmlFor:"discuss-price-modal",className:"btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0",children:"\u2715"}),(0,g.jsx)("h3",{className:"font-bold text-lg",children:l("title.modal.discuss_price")})]}),(0,g.jsx)("hr",{className:"-mx-5 border-stone-500"}),(0,g.jsxs)("div",{className:"flex flex-col gap-4 p-2 mb-4",children:[(0,g.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,g.jsxs)("label",{className:"text-stone-400",children:["Original : ",(0,f.FK)(null===n||void 0===n?void 0:n.originPrice)]}),(0,g.jsxs)("label",{className:"text-stone-400",children:["Client Budget: ",(0,f.FK)(null===n||void 0===n?void 0:n.sellPrice)]})]}),(0,g.jsxs)("div",{className:"flex justify-between gap-2 sm:items-center flex-col sm:flex-row items-start",children:[(0,g.jsx)("span",{className:"text-stone-400",children:"Your Price : "}),(0,g.jsx)("div",{children:(0,g.jsx)(k.Z,{children:(0,g.jsx)("div",{className:"px-1 w-full flex",children:(0,g.jsx)("input",{type:"number",min:1,className:"input text-right",value:o,onChange:function(e){return d(e.target.value)}})})})})]}),(0,g.jsx)("span",{className:"text-stone-400 -mb-2",children:"Description "}),(0,g.jsx)(k.Z,{children:(0,g.jsx)("div",{className:"p-2 w-full flex",children:(0,g.jsx)("textarea",{className:"textarea w-full",rows:3,value:v,onChange:function(e){return h(e.target.value)}})})})]}),(0,g.jsxs)("div",{className:"flex justify-between gap-2 p-2",children:[(0,g.jsx)("button",{className:"btn btn-primary px-8 capitalize btn-outline",onClick:function(){return t("cancel")},children:l("action.cancel")}),(0,g.jsx)("button",{className:"btn btn-primary px-8 capitalize",disabled:!v||o<1,onClick:function(){i({ticketId:null===n||void 0===n?void 0:n._id,content:v,price:o})},children:l("action.continue")})]})]})})]})}var C=t(5212),S=t(4367),I=t(9242),F=t(7601);function M(){var e=(0,l.UO)().id,n=(0,d.Z)().user,t=(0,p.v9)((function(e){return e.cart})).cart,j=(0,l.s0)(),b=(0,a.useState)(),w=(0,s.Z)(b,2),M=w[0],E=w[1],T=(0,u.Z)().t,q=(0,a.useState)(),z=(0,s.Z)(q,2),O=z[0],D=z[1],_=(0,d.Z)().isAuthenticated,P=(0,a.useState)(null),A=(0,s.Z)(P,2),J=A[0],L=A[1],Y=(0,a.useState)(!1),U=(0,s.Z)(Y,2),R=U[0],B=U[1],K=(0,a.useState)(!1),W=(0,s.Z)(K,2),X=W[0],H=W[1],V=(0,a.useState)(null),$=(0,s.Z)(V,2),G=$[0],Q=$[1],ee=(0,a.useState)(0),ne=(0,s.Z)(ee,2),te=ne[0],ie=ne[1],se=(0,a.useState)(),ae=(0,s.Z)(se,2),le=ae[0],ce=ae[1];(0,a.useEffect)((function(){B(!0),m.Z.get("".concat(x.vp.getTicketDetail,"/").concat(e)).then((function(n){var t=n.data.data.ticket;if(t){var i;E(null===t||void 0===t?void 0:t.event);var s=null===t||void 0===t||null===(i=t.event)||void 0===i?void 0:i.types.filter((function(e){return e.typeId===(null===t||void 0===t?void 0:t.eventTypeId)}))[0];Q(s)}var a=n.data.data.uploader;D(t),L(a),m.Z.get("".concat(x.U7.getPriceRequest,"/").concat(e)).then((function(e){var n,t=e.status,i=e.data;200===t?i.data&&ce(!0):o.Am.error(null===(n=i.message)||void 0===n?void 0:n.toString())}))})).finally((function(){B(!1)}))}),[e]),(0,a.useEffect)((function(){_||document.querySelector("#auth-modal-check").click()}),[_]);var re=null===t||void 0===t?void 0:t.find((function(n){return n._id===e}));return(0,g.jsxs)(C.Z,{title:"Buy Ticket",children:[(0,g.jsx)(I.Z,{children:(0,g.jsx)("div",{className:"container p-4 mb-8",children:(0,g.jsxs)("div",{className:"flex w-full flex-col gap-8",children:[R&&(0,g.jsx)(F.Z,{}),!R&&M&&(0,g.jsx)(N.Z,{event:M}),O&&M&&(0,g.jsx)("div",{className:"w-full flex flex-col gap-8",children:(0,g.jsxs)("div",{className:"flex w-full gap-4 items-center",children:[(0,g.jsx)("button",{onClick:function(){return j(-1)},className:"rounded-lg border-primary/30 p-2 btn-sm text-primary hover:bg-primary/50 btn btn-primary bg-primary/30 w-[48px] h-[48px]",children:(0,g.jsx)(r.JO,{icon:"la:undo",className:"text-[20px]"})}),(0,g.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,g.jsxs)("h5",{className:"text-[28px] leading-9",children:[null===O||void 0===O?void 0:O.count," Ingresso - ",null===G||void 0===G?void 0:G.name]}),(0,g.jsxs)("h6",{className:"text-stone-400 text-[14px] leading-[18px]",children:[(0,v.UX)(null===O||void 0===O?void 0:O.dateTime)," ",(0,g.jsx)("br",{})]})]})]})})]})})}),(0,g.jsx)("div",{className:"container p-4",children:(0,g.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,g.jsx)(k.Z,{children:(0,g.jsxs)("div",{className:"w-full flex p-6 flex-col gap-4",children:[(0,g.jsxs)("div",{className:"flex justify-between gap-4 flex-col lg:flex-row mb-4",children:[(0,g.jsx)(S.Z,{max:null===O||void 0===O?void 0:O.count,onChanged:function(e){ie(e)},disabled:re||"sold"===(null===O||void 0===O?void 0:O.status)||(null===n||void 0===n?void 0:n._id)===(null===O||void 0===O?void 0:O.uploader)}),(0,g.jsxs)("div",{className:"flex-1 flex-col gap-1",children:[(0,g.jsxs)("div",{className:"flex gap-2 text-[28px] items-center",children:[(0,g.jsxs)("h5",{children:["R",(0,f.e_)(null===O||void 0===O?void 0:O.originPrice)," "]}),(0,g.jsx)(r.JO,{icon:"mdi:information-variant-circle",className:"text-primary w-6 h-6"})]}),(0,g.jsx)("h6",{className:"text-stone-400  text-[14px]",children:T("description.origin_price",{price:(0,f.e_)(null===O||void 0===O?void 0:O.sellPrice)})})]}),(0,g.jsxs)("div",{className:"flex-1 flex gap-1 justify-end items-center",children:[(null===O||void 0===O?void 0:O.changablePrice)&&(!le||null===le)&&(0,g.jsx)("button",{className:"btn btn-primary px-8 py-4 h-auto text-[19px] rounded-2xl capitalize btn-sm ".concat(X?"loading":""),onClick:function(){document.querySelector("#discuss-price-modal").click()},children:T("action.discuss_price")}),(null===O||void 0===O?void 0:O.changablePrice)&&le&&(0,g.jsx)("button",{className:"btn btn-primary px-8 py-4 h-auto text-[19px] rounded-2xl capitalize btn-sm ".concat(X?"loading":""),onClick:function(){j("/conversation/list")},children:T("action.go_conversation")}),(0,g.jsx)("button",{className:"btn btn-primary px-8 py-4 h-auto text-[19px] rounded-2xl capitalize btn-sm ".concat(X?"loading":""),disabled:te!==(null===O||void 0===O?void 0:O.count)||re,onClick:function(){O.uploader=J,H(!0),m.Z.put(x.vp.cart,{ticketId:e}).then((function(e){200===e.status&&((0,p.WI)((0,h.E)([].concat((0,i.Z)(t),[O]))),j("/cart")),H(!1)})).catch((function(e){var n=e.message;o.Am.error(n.toString())})).finally((function(){H(!1)}))},children:T("action.compare")})]})]}),(0,g.jsx)("div",{className:"flex w-full",children:(0,g.jsx)(k.Z,{children:(0,g.jsxs)("div",{className:"p-4 flex gap-4 items-center",children:[(0,g.jsx)("div",{className:"avatar",children:(0,g.jsx)("div",{className:"rounded-full h-[50px] w-[50px]",children:(0,g.jsx)(c.LazyLoadImage,{src:"".concat(x.E0).concat(null===O||void 0===O?void 0:O.avatar),alt:""})})}),(0,g.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,g.jsx)("h5",{className:"text-[19px]",children:"Informa\xe7\xe3o adicional do bilhete"}),(null===O||void 0===O?void 0:O.requireAccount)&&(0,g.jsxs)("h6",{className:"text-primary",children:["* ",null===O||void 0===O?void 0:O.requireAccountDetail," ",(0,g.jsx)("br",{})]}),(0,g.jsx)("h6",{className:"text-stone-400 text-[14px]",children:"Ingresso LOTE 4"}),(null===O||void 0===O?void 0:O.buyAccount)&&(0,g.jsxs)("h6",{className:"text-stone-400",children:["Buyer Account: ",null===O||void 0===O?void 0:O.buyAccount]})]})]})})}),(0,g.jsx)(k.Z,{isMessage:!0,children:(0,g.jsxs)("div",{className:"w-full flex p-4 gap-2",children:[(0,g.jsx)("div",{className:"text-primary",children:(0,g.jsx)(r.JO,{icon:"mdi:information-variant-circle",className:"w-6 h-6"})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h5",{className:"text-[19px]",children:" Conta do ingresso necess\xe1ria"}),(0,g.jsx)("h6",{className:"text-stone-400 text-[14px]",children:"Para poder acessar isso, voc\xea precisa ter uma conta de ingresso"})]})]})})]})}),(0,g.jsxs)("div",{className:"flex flex-col gap-2 flex-1",children:[(0,g.jsx)(k.Z,{children:(0,g.jsxs)("div",{className:"w-full flex gap-2 p-4 items-center",children:[(0,g.jsx)("div",{className:"avatar",children:(0,g.jsx)("div",{className:"rounded-full h-[50px] w-[50px]",children:(0,g.jsx)(c.LazyLoadImage,{src:"".concat(x.E0).concat(null===J||void 0===J?void 0:J.avatar),alt:""})})}),(0,g.jsxs)("div",{className:"flex flex-col gap-1 min-w-[300px]",children:[(0,g.jsx)("h5",{className:"text-[19px] capitalize",children:null===J||void 0===J?void 0:J.fullName}),(0,g.jsxs)("div",{className:"text-stone-400 flex gap-1 text-[14px] items-center",children:[(0,g.jsx)(r.JO,{icon:null!==J&&void 0!==J&&J.phoneVerification?"material-symbols:verified-user-rounded":"ic:baseline-not-interested",className:"w-4 h-4 ".concat(null!==J&&void 0!==J&&J.phoneVerification?"text-success":"text-error")}),T("label.verified_phone")]})]})]})}),(0,g.jsx)(k.Z,{children:(0,g.jsx)("div",{className:"w-full flex gap-2 py-4 px-6 justify-center min-w-[300px]",children:(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("h5",{className:"text-[19px] mb-4",children:"FanSecurity"}),(0,g.jsxs)("div",{className:"flex gap-[57px]",children:[(0,g.jsx)("h6",{className:"text-stone-400 text-[14px]",children:"Trocaremos o ingresso original por um novo para 100% de seguran\xe7a."}),(0,g.jsx)("div",{className:"flex items-center",children:(0,g.jsx)("div",{className:"bg-success/50 flex gap-1 items-center rounded-full w-[70px] h-[70px] justify-center",children:(0,g.jsx)(r.JO,{icon:"ic:outline-verified-user",width:32,className:"color-[#3ec200]"})})})]})]})})})]})]})}),(0,g.jsx)("div",{className:"container p-4",children:(0,g.jsx)(y,{})}),(null===O||void 0===O?void 0:O.changablePrice)&&(0,g.jsx)(Z,{onSend:function(e){var n=e.ticketId,t=e.price,i=e.content;document.querySelector("#discuss-price-modal").click(),H(!0),m.Z.post(x.U7.sendPriceRequest,{ticketId:n,price:t,content:i}).then((function(e){200===e.status&&ce(!0)})).catch((function(e){})).finally((function(){H(!1)}))},ticket:O,onClose:function(){document.querySelector("#discuss-price-modal").click()}})]})}},1597:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(1539),s=t(7087),a=t(3197),l=t(2654),c=t(184);function r(e){var n=e.event,t=e.location,r=(0,i.Z)().t;return(0,c.jsxs)("div",{className:"w-full flex flex-col sm:flex-row gap-8 items-center sm:items-start",children:[(0,c.jsx)("div",{className:"rounded-xl aspect-5/3 overflow-hidden  w-96",children:(0,c.jsx)(s.LazyLoadImage,{src:"".concat(a.E0).concat(null===n||void 0===n?void 0:n.cover),alt:"event-image",effect:"blur"})}),(0,c.jsxs)("div",{className:"h-[222px] relative",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h4",{className:"text-5xl mb-2 leading-[70px]",children:null===n||void 0===n?void 0:n.name}),(0,c.jsx)("p",{className:"leading-8",children:(0,l.UX)((null===n||void 0===n?void 0:n.dateTime)||(null===n||void 0===n?void 0:n.start))}),(0,c.jsx)("p",{className:"leading-8 mb-4",children:"".concat(null===n||void 0===n?void 0:n.place," ").concat(null===t||void 0===t?void 0:t.city.name,", ").concat(null===t||void 0===t?void 0:t.state.name,", ").concat(null===t||void 0===t?void 0:t.country.name)})]}),(0,c.jsx)("button",{className:"btn btn-primary btn-outline px-8 py-3.5 text-[19px] font-normal leading-6 capitalize absolute bottom-0 rounded-2xl h-auto border-2",children:r("title.save_event")})]})]})}},7870:function(e,n,t){t.d(n,{FK:function(){return l},e_:function(){return a},v1:function(){return c}});var i=t(6098),s=t.n(i);function a(e){return s()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function l(e){return s()(e).format()}function c(e){return s()(e).format("0.00a").replace(".00","")}},2654:function(e,n,t){t.d(n,{DY:function(){return r},UX:function(){return o},gC:function(){return l},uW:function(){return a},xD:function(){return d},zM:function(){return c}});var i=t(9158),s=t(5939);function a(e){return e.containsTime?c(e.dateTime):l(e.dateTime)}function l(e){return(0,i.Z)(new Date(e),"dd MMM yyyy")}function c(e){return(0,i.Z)(new Date(e),"dd MMM yyyy HH:mm")}function r(e){try{return(0,s.Z)(new Date(e),{addSuffix:!0})}catch(n){return"Invaild Date"}}function o(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];try{return n?(0,i.Z)(new Date(e),"EEEE dd, MMMM, yyyy p"):(0,i.Z)(new Date(e),"EEEE dd, MMMM, yyyy")}catch(t){return"".concat(e)}}function d(e){try{return(0,i.Z)(new Date(e),"MMM, dd EEE")}catch(n){return"".concat(e)}}}}]);
//# sourceMappingURL=419.e582d599.chunk.js.map