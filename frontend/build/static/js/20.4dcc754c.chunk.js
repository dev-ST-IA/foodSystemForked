(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[20],{181:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return O}));var r=t(3),a=t(2),i=t(33),s=t(5),o=t.n(s),c=t(7),u=t(6),l=t(1),p=t(8),d=t(10),f=t(32),x=function(){var n=Object(c.a)(o.a.mark((function n(e){var t,r,a,i,s,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.setIsSuccessfullySend,r=e.setIsRequesLoading,a=e.history,r(!0),i={id:localStorage.getItem("toConfirmUser")},n.prev=3,n.next=6,Object(f.c)("/api/auth/confirmation",i);case 6:s=n.sent,c=s.response,r(!1),200===c.status&&(t(!0),localStorage.removeItem("toConfirmUser"),setTimeout((function(){t(!1),a.push("/menu")}),3e3)),500===c.status&&alert("Error en el servidor, vuelva a interntar"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(e){return n.apply(this,arguments)}}();function b(){var n=Object(d.a)().setIsSuccessfullySend,e=Object(p.g)(),t=Object(l.useState)(!1),r=Object(u.a)(t,2),a=r[0],i=r[1];return{isRequesLoading:a,sendConfirmationEmail:function(){var t=Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x({setIsRequesLoading:i,setIsSuccessfullySend:n,history:e});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}var h,m,g=t(0),j=a.b.section(h||(h=Object(r.a)([" \nmin-height: 100vh ;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\npadding: 15px;\n    padding-top: 58px;\n"]))),v=a.b.article(m||(m=Object(r.a)([' \nmargin: 30px 0;\n    width: 450px;\n    background: #171717;\n    padding: 20px;\n    color: white;\n    padding-bottom: 25px;\n    justify-self: center;\n    border: 3px solid #fcba1c;\n    box-shadow: 1px 1px 17px #1111112b;\n    display: flex;\n    flex-direction: column;\n& > h4 {\n  text-align:center;\n  font-size:22px;\n      color: #fcba1c;\n}\n& > button {\n    justify-self: center;\n    padding: 8px;\n    margin: 20px auto;\n    outline: none;\n    font-family: "Oswald", sans-serif;\nfont-size: 16px;\n    border-radius: 5px;\n    border: 2px solid #111111a8;\n    background:#fcba1c;\n    box-shadow: inset 0 0 6px #272727a6;\n    cursor: pointer;\ntransition: all 0.6s;\n\n    &:hover {\n    transform: scale(1.05);\n}\n}\n& > span {\nfont-size: 50px;\n    text-align: center;\n    text-shadow: 0 0 50px #fcba1c;\n    margin-bottom: 20px;\n}\n& > ',"{\n  margin:0 auto;\n  margin-top:20px;\n}\n"])),i.a);function O(){var n=b.isRequesLoading,e=b.sendConfirmationEmail;return Object(g.jsx)(j,{children:Object(g.jsxs)(v,{children:[Object(g.jsx)("span",{children:"\ud83d\udcec"}),Object(g.jsx)("h4",{children:"Tu cuenta necesita ser verificada"}),Object(g.jsx)("p",{children:"Para poder gestionar su cuenta en la aplicaci\xf3n es necesario que verifique su correo electronico. Al precionar el siguiente bot\xf3n, un mensaje le ser\xe1 enviado a su email con un link de verificaci\xf3n v\xe1lido por 24hs."}),n&&Object(g.jsx)(i.a,{small:!0}),Object(g.jsx)("button",{onClick:function(){return e()},children:"Enviar Correo"})]})})}}}]);
//# sourceMappingURL=20.4dcc754c.chunk.js.map