(this["webpackJsonpslider-card-app"]=this["webpackJsonpslider-card-app"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),o=(n(10),n(2)),s=(n(11),n(3),n(0));n(13);n.p,n(14);n(15);var u=[],x={};function d(t,e,n,c,r,a){var i=l(t,e,n,c),s=Object(o.a)(i,2),u=s[0],x=s[1],d=l(t,e,r,a),p=Object(o.a)(d,2),b=function(t,e,n,c){return t*n+e*c}(u,x,p[0],p[1]);return Math.acos(b)*(180/Math.PI)}function p(t,e,n,c,r,a){var i=[];return i.push("M"+t),i.push(e),i.push("A"),i.push(n),i.push(n),i.push(0),i.push(c),i.push(1),i.push(r),i.push(a),i.join(" ")}function l(t,e,n,c){var r=b(t,e,n,c);return[(n-t)/r,(c-e)/r]}function b(t,e,n,c){var r=Math.min(t,n),a=Math.min(e,c),i=Math.max(t,n),o=Math.max(e,c);return Math.sqrt((i-r)*(i-r)+(o-a)*(o-a))}var h=function(t){var e=Object(c.useState)({x:0,y:0}),n=Object(o.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(!1),h=Object(o.a)(i,2),j=h[0],f=h[1],y=t.padding||5,v=t.strokeColor||"grey",O=t.strokeWidth||5,g=t.progressColor||"blue",M=t.progressWidth||10,k=t.base||300,m=t.vertical||120,C=t.knobColor||"green",S=t.knobRadius||30,w=t.minValue||0,N=t.maxValue||100,W=t.onChange?t.onChange:function(t){},B=1===(x=function(t,e,n,c){var r=n/2,a=t-r,i=e,s=t+r,u=e,x=t,d=e-c,p=r>c?0:1,h=function(t,e,n,c){return[(t+n)/2,(e+c)/2]}(a,i,x,d),j=Object(o.a)(h,2),f=j[0],y=j[1],v=l(a,i,f,y),O=Object(o.a)(v,2),g=O[0],M=O[1],k=g,m=function(t,e,n,c,r,a,i,o){var s=(t-n)*(a-o)-(e-c)*(r-i);if(0===s)return!1;var u=((t-r)*(a-o)-(e-a)*(r-i))/s,x=-((t-n)*(e-a)-(e-c)*(t-r))/s;if(u>0&&u<1&&x>0&&x<1)return[t+u*(n-t),e+u*(c-e)];return!1}(t,e+1e4,x,d,f,y,g=f+(g=5e3*-M),M=y+(M=5e3*k)),C=m||[x,d],S=Object(o.a)(C,2),w=S[0],N=S[1],W=b(x,d,w,N);return{x1:a,y1:i,x2:s,y2:u,radius:W,dir:p,bx:t,by:e,cx:w,cy:N,base:n,vertical:c}}(k/2,m,k,m)).dir?2*x.radius:k;B+=2*y+2*S;var q=m+2*S+2*y,z=1===x.dir?(2*x.radius-k+2*S+y)/2:S,A=S+y,D=Object(c.useState)({x:x.x1+z,y:x.y1+A}),I=Object(o.a)(D,2),J=I[0],L=I[1];return Object(s.jsx)("div",{className:"arc-slider",onMouseDown:function(t){f(!0)},onMouseMove:function(t){t.preventDefault();var e=t.currentTarget.getBoundingClientRect(),n=t.clientX-e.left,c=t.clientY-e.top;a({x:n,y:c}),j&&L(function(t,e,n,c,r,a,i,s,u){var p=l(t,e,s,u),b=Object(o.a)(p,2),h=b[0],j=b[1];h*=i,j*=i;var f=h+=t,y=i*i-(f-t)*(f-t),v=(e<(j+=e)?-1:1)*Math.sqrt(y)-e;(v=-v)>a&&(f<r&&(f=n,v=c),f>r&&(f=x.x2+z,v=x.y2+A));var O=d(r,a,n,c,f,v),g=Math.trunc(function(t,e,n,c,r){t<e&&(t=e);t>n&&(t=n);return c+(r-c)*(t-e)/(n-e)}(O,0,180,w,N));return W(g),function(t,e,n,c){d(x.cx,x.cy,t,e,n,c),d(t,e,x.cx,x.cy,n,c)}(n,c,f,v),{x:f,y:v}}(x.cx+z,x.cy+A,x.x1+z,x.y1+A,x.bx+z,x.by+A,x.radius,n,c))},onMouseUp:function(t){f(!1)},children:Object(s.jsx)("div",{className:"arc-slider__wrapper",children:Object(s.jsxs)("svg",{width:"".concat(B,"px"),height:"".concat(q,"px"),viewBox:"0 0 ".concat(B," ").concat(q),style:{padding:"".concat(y,"px"),boxSizing:"border-box"},children:[u,Object(s.jsx)("line",{x1:x.cx+z,y1:x.cy+A,x2:r.x,y2:r.y}),Object(s.jsx)("path",{style:{strokeLinecap:"round",strokeWidth:"".concat(O,"px"),stroke:"".concat(v),fill:"none"},d:p(z+x.x1,x.y1+A,x.radius,x.dir,z+x.x2,x.y2+A)}),Object(s.jsx)("path",{style:{strokeLinecap:"round",strokeWidth:"".concat(M,"px"),stroke:"".concat(g),fill:"none"},d:p(z+x.x1,x.y1+A,x.radius,x.dir,J.x,J.y)}),Object(s.jsx)("circle",{r:S,cx:J.x,cy:J.y,style:{fill:C,cursor:"pointer"}})]})})})};var j=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"vc",children:[Object(s.jsx)("span",{style:{fontSize:"45px"},children:n}),Object(s.jsx)(h,{onChange:function(t){r(t)}})]})})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.26a9f4a9.chunk.js.map