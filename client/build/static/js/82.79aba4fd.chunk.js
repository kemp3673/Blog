"use strict";(self.webpackChunkbooking=self.webpackChunkbooking||[]).push([[82],{4082:function(e,t,n){n.r(t);var a=n(4165),r=n(5861),i=n(9439),s=n(2791),l=n(4569),c=n.n(l),o=n(7689),u=n(6770),d=n.n(u),p=(n(6009),n(184));t.default=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],l=t[1],u=(0,s.useState)(""),h=(0,i.Z)(u,2),m=h[0],x=h[1],b=(0,s.useState)(""),f=(0,i.Z)(b,2),g=f[0],v=f[1],j=(0,s.useState)(""),w=(0,i.Z)(j,2),k=w[0],_=w[1],y=(0,s.useState)([]),N=(0,i.Z)(y,2),Z=N[0],C=N[1],S=(0,s.useState)(null),F=(0,i.Z)(S,2),P=F[0],T=F[1],D=(0,o.TH)(),L=new URLSearchParams(D.search).get("edit");(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t,n,r,i,s,o,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!L){e.next=14;break}return l(!0),e.next=5,c().get("/api/blogs/".concat(L));case 5:t=e.sent,n=t.data,r=n[0],i=r.title,s=r.description,o=r.content,u=r.main_image,console.log("data: ",n[0]),x(i),v(s),_(o),C(u),T("/uploads/".concat(u));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var U=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("title",m),t.append("description",g),t.append("content",k),t.append("main_image",Z),t.append("user_id",1),e.prev=6,e.next=9,c().patch("/api/auth/blogs/".concat(L),t,{headers:{"Content-Type":"multipart/form-data"}});case 9:window.location.href="/blog",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("title",m),t.append("description",g),t.append("content",k),t.append("main_image",Z),t.append("user_id",1),e.prev=6,e.next=9,c().post("/api/auth/blogs/write",t,{headers:{"Content-Type":"multipart/form-data"}});case 9:window.location.href="/blog",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(){return e.apply(this,arguments)}}(),V=function(){window.location.href="/blog"};return(0,p.jsx)("div",{className:"writeblog_container",children:(0,p.jsxs)("div",{className:"writeblog_inner",children:[(0,p.jsxs)("div",{className:"writeblog_content",children:[(0,p.jsxs)("div",{className:"writeblog_Title_Sum",children:[(0,p.jsx)("label",{htmlFor:"summary",children:"Title"}),(0,p.jsx)("input",{type:"text",value:m,onChange:function(e){return x(e.target.value)},maxLength:"255"})]}),(0,p.jsxs)("div",{className:"writeblog_Title_Sum",children:[(0,p.jsx)("label",{htmlFor:"summary",children:"Summary"}),(0,p.jsx)("textarea",{className:"writeblog_summary",type:"text",value:g,onChange:function(e){return v(e.target.value)},maxLength:"1000"})]}),(0,p.jsx)("div",{className:"editor_container",children:(0,p.jsx)(d(),{className:"editor",theme:"snow",value:k,modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","code-block"],["clean"]],clipboard:{matchVisual:!1}},formats:["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","code-block"],bounds:".app",onChange:function(e){return _(e)}})})]}),(0,p.jsx)("div",{className:"writeblog_menu",children:(0,p.jsxs)("div",{className:"writeblog_menu_item",children:[(0,p.jsx)("h1",{children:"Publish"}),n?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Status: "})," Posted"]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Visibility: "})," Public"]})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Status: "})," Draft"]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("b",{children:"Visibility: "})," Private"]})]}),(0,p.jsx)("input",{type:"file",id:"file",accept:"image/*",style:{display:"none"},onChange:function(e){var t=e.target.files[0];if(t){C(t);var n=new FileReader;n.onloadend=function(){T(n.result)},n.readAsDataURL(t)}}}),(0,p.jsx)("label",{className:"file_upload",htmlFor:"file",children:"Upload Image"}),(0,p.jsx)("div",{className:"uploaded_images",children:P?(0,p.jsx)("img",{style:{maxHeight:"100px",maxWidth:"100px"},src:P,alt:"uploaded"}):null}),(0,p.jsx)("div",{className:"write_buttons",children:n?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:"write_button",onClick:V,children:"Cancel"}),(0,p.jsx)("button",{className:"write_button",onClick:U,children:"Update"})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:"write_button",onClick:V,children:"Cancel"}),(0,p.jsx)("button",{className:"write_button",onClick:R,children:"Post"})]})})]})})]})})}}}]);
//# sourceMappingURL=82.79aba4fd.chunk.js.map