(this.webpackJsonpbreakout=this.webpackJsonpbreakout||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(5),a=n.n(o),c=(n(13),n(2)),u=n(1),s=n(3),l=function(e){return Object(s.a)(Array(e).keys())},h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t[Math.floor(Math.random()*t.length)]},d=function(e,t){return window.addEventListener(e,t),function(){return window.removeEventListener(e,t)}},f=function(){return Math.floor(3*Math.random())},v=function(e,t){return l(e).map((function(){return l(t).map(f)}))},p=[{lives:5,paddleWidth:3.5,speed:1,blocks:v(3,6)},{lives:4,paddleWidth:3,speed:1.4,blocks:v(4,7)},{lives:3,paddleWidth:2.5,speed:1.8,blocks:v(5,8)},{lives:3,paddleWidth:2,speed:2.2,blocks:v(6,9)}],y=n(6),m=n(7),w=function(){function e(t,n){Object(y.a)(this,e),this.x=t,this.y=n}return Object(m.a)(e,[{key:"scaleBy",value:function(t){return new e(this.x*t,this.y*t)}},{key:"length",value:function(){return Math.hypot(this.x,this.y)}},{key:"add",value:function(t){var n=t.x,r=t.y;return new e(this.x+n,this.y+r)}},{key:"normalize",value:function(){return this.scaleBy(1/this.length())}},{key:"subtract",value:function(t){var n=t.x,r=t.y;return new e(this.x-n,this.y-r)}},{key:"dotProduct",value:function(e){var t=e.x,n=e.y;return this.x*t+this.y*n}},{key:"projectOn",value:function(t){var n=this.dotProduct(t)/t.length();return new e(n*t.x,n*t.y)}},{key:"reflect",value:function(e){return this.subtract(this.projectOn(e).scaleBy(2))}},{key:"rotate",value:function(t){var n=function(e){return e*Math.PI/180}(t),r=Math.cos(n),i=Math.sin(n);return new e(this.x*r-this.y*i,this.x*i+this.y*r)}},{key:"crossProduct",value:function(e){var t=e.x,n=e.y;return this.x*n-t*this.y}},{key:"angleBetween",value:function(e){return 180*Math.atan2(this.crossProduct(e),this.dotProduct(e))/Math.PI}}]),e}();function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O,j="LEFT",k="RIGHT",E=new w(0,1),x=new w(-1,0),P=new w(1,0),D=new w(0,-1),z=x.add(D).normalize(),I=P.add(D).normalize(),T=function(e,t,n){var r=t-1/3;return{paddle:{position:new w((e-n)/2,r),width:n,height:1/3},ball:{center:new w(t/2,r-.4),radius:.2,direction:h(z,I)}}},M=function(e){var t,n=e.lives,r=e.paddleWidth,i=e.speed,o=e.blocks,a=o[0].length,c=a,u=(c-c*(1/3)-o.length*(1/3))/2,l=o.map((function(e,t){return e.map((function(e,n){return{density:e,position:new w(n,u+t*(1/3)),width:1,height:1/3}}))}));return g({size:{width:a,height:c},blocks:(t=l,t.reduce((function(e,t){return[].concat(Object(s.a)(e),Object(s.a)(t))}),[]))},T(a,c,r),{lives:n,speed:i})},B=function(e,t,n,r){return e>=n&&e<=r||t>=n&&t<=r},N=function(e,t,n){var r=e.size,i=e.speed,o=e.lives,a=.005*n*i,c=function(e,t,n,r){if(!r)return e;var i=r===j?x:P,o=e.position.add(i.scaleBy(n)).x,a=function(t){return g({},e,{position:new w(t,e.position.y)})};return o+e.width>t.width?a(t.width-e.width):a(o)}(e.paddle,r,a,t),u=e.ball.radius,s=e.ball.direction,l=e.ball.center.add(s.scaleBy(a)),h=l.y+u;if(h>r.height)return g({},e,{},T(r.width,r.height,c.width),{lives:o-1});var d=function(t){return g({},e,{paddle:c,ball:g({},e.ball,{},t)})},f=function(e){var t=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,r=e.angleBetween(t),i=90-n;if(r<0){if(r>-n)return e.rotate(-n);if(r<-i)return e.rotate(-i)}else{if(r<n)return e.rotate(n);if(r>i)return e.rotate(i)}return t}(e,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,n=function(){return Math.random()*t-t/2},r=new w(n(),n());return e.add(r).normalize()}(s.reflect(e)));return d({direction:t})},v=l.x-u,p=l.x+u,y=l.y-u,m=c.position.x,b=m+c.width,O=c.position.y;if(Math.abs(D.angleBetween(s))>90&&h>=O&&p>=m&&v<=b)return f(D);if(y<=0)return f(E);if(v<=0)return f(P);if(p>=r.width)return f(x);var k,z,I=e.blocks.find((function(e){var t=e.position,n=e.width,r=e.height;return B(y,h,t.y,t.y+r)&&B(v,p,t.x,t.x+n)}));if(I){var M=I.density-1,N=g({},I,{density:M}),S=M<0?(k=e.blocks,z=I,k.filter((function(e){return e!==z}))):function(e,t,n){return e.map((function(e){return e===t?n:e}))}(e.blocks,I,N);return g({},f(function(){var e=I.position.y,t=e+I.height,n=I.position.x;if(y>e-u&&h<t+u){if(v<n)return x;if(p>n+I.width)return P}return y>e?E:y<=e?D:void 0}()),{blocks:S})}return d({center:l})},S=function(e){var t=e.level,n=e.unit;return i.a.createElement("text",{x:n,y:2*n,fontSize:n,className:"level"},"LEVEL: ",t," ")},W=function(e){var t=e.lives,n=e.containerWidth,r=e.unit,o=2*r;return l(t).map((function(e){return i.a.createElement("rect",{className:"life",rx:r/4,height:r,width:o,y:r,x:n-r-o*(e+1)-r/2*e,key:e})}))},L=l(3).map((function(e){return"rgba(26, 188, 156, ".concat(1/(3-e),")")})),R=function(e){var t=e.x,n=e.y,r=e.width,o=e.height,a=e.density;return i.a.createElement("rect",{className:"block",fill:L[a],x:t,y:n,width:r,height:o})},V=function(e){var t=e.x,n=e.y,r=e.width,o=e.height;return i.a.createElement("rect",{className:"paddle",x:t,y:n,width:r,height:o})},A=function(e){var t=e.x,n=e.y,r=e.radius;return i.a.createElement("circle",{className:"ball",cx:t,cy:n,r:r})};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={LEFT:[65,37],RIGHT:[68,39]},_=function(e,t){var n=e.width/t.width,r=e.height/t.height,i=Math.min(n,r);return{projectDistance:function(e){return e*i},projectVector:function(e){return e.scaleBy(i)}}},F=function(e){var t=function(){var e=localStorage.getItem("level");return e?parseInt(e,10):0}(),n=M(p[t]),r=_(e,n.size);return{level:t,game:n,containerSize:e,projectDistance:r.projectDistance,projectVector:r.projectVector,time:Date.now(),stopTime:void 0,movement:void 0}},K="CONTAINER_SIZE_CHANGE",J="KEY_DOWN",Y="KEY_UP",U="TICK",Z=(O={},Object(u.a)(O,K,(function(e,t){return G({},e,{containerSize:t},_(t,e.game.size))})),Object(u.a)(O,J,(function(e,t){return H.LEFT.includes(t)?G({},e,{movement:j}):H.RIGHT.includes(t)?G({},e,{movement:k}):e})),Object(u.a)(O,Y,(function(e,t){var n=G({},e,{movement:void 0});return 32===t?e.stopTime?G({},n,{stopTime:void 0,time:e.time+Date.now()-e.stopTime}):G({},n,{stopTime:Date.now()}):n})),Object(u.a)(O,U,(function(e){if(e.stopTime)return e;var t=Date.now(),n=N(e.game,e.movement,t-e.time),r=G({},e,{time:t});if(n.lives<1)return G({},r,{game:M(p[e.level])});if(n.blocks.length<1){var i=e.level===p.length?e.level:e.level+1;localStorage.setItem("level",i);var o=M(p[e.level]);return G({},r,{level:i,game:o},_(e.containerSize,o.size))}return G({},r,{game:n})})),O),$=function(e,t){var n=t.type,r=t.payload,i=Z[n];return i?i(e,r):e},q=function(e){var t=Object(r.useReducer)($,e,F),n=Object(c.a)(t,2),o=n[0],a=n[1],u=function(e,t){return a({type:e,payload:t})},s=o.projectDistance,l=o.projectVector,h=o.level,f=o.game,v=f.blocks,p=f.paddle,y=f.ball,m=f.size,w=m.width,b=m.height,g=f.lives;Object(r.useEffect)((function(){return u(K,e)}),[e]),Object(r.useEffect)((function(){var e=setInterval((function(){return u(U)}),1e3/60),t=d("keydown",(function(e){var t=e.which;return u(J,t)})),n=d("keyup",(function(e){var t=e.which;return u(Y,t)}));return function(){clearInterval(e),t(),n()}}),[]);var O=s(w),j=s(y.radius);return i.a.createElement("svg",{width:O,height:s(b),className:"scene"},i.a.createElement(S,{unit:j,level:h+1}),i.a.createElement(W,{lives:g,containerWidth:O,unit:j}),v.map((function(e){var t=e.density,n=e.position,r=e.width,o=e.height;return i.a.createElement(R,Object.assign({density:t,key:"".concat(n.x,"-").concat(n.y),width:s(r),height:s(o)},l(n)))})),i.a.createElement(V,Object.assign({width:s(p.width),height:s(p.height)},l(p.position))),i.a.createElement(A,Object.assign({},l(y.center),{radius:j})))},Q=function(){var e=Object(r.useRef)(),t=Object(r.useState)(),n=Object(c.a)(t,2),o=n[0],a=n[1];return Object(r.useEffect)((function(){var t=function(){var t=e.current.getBoundingClientRect(),n=t.width,r=t.height;a({width:n,height:r})},n=d("resize",t);return t(),n}),[]),i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"scene-container",ref:e},o&&i.a.createElement(q,{width:o.width,height:o.height})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9f24024c.chunk.js.map