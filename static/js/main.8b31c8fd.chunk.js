(this.webpackJsonpbrickbreaker=this.webpackJsonpbrickbreaker||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(8),i=n.n(a),c=(n(14),n(1)),l=n(2),s=n(4),p=n(3),u=n(5),f=(n(15),n(6));function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(f.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(p.a)(e).call(this,t))).state={},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.left,n=t.top;return r.a.createElement("div",{style:b({},{width:"20px",height:"20px",background:"radial-gradient(white, #9198e5)",borderRadius:"50%",position:"absolute"},{left:e,top:n})})}}]),e}(o.Component);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(f.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(p.a)(e).call(this,t))).state={},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.left,n=t.top;return r.a.createElement("div",null,r.a.createElement("div",{style:O({},{width:"65px",height:"10px",backgroundColor:"Tan",position:"absolute"},{top:n,left:e})}))}}]),e}(o.Component),m=(n(16),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(p.a)(e).call(this,t))).state={xLeft:""},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("touchstart",(function(e){t.setState({xLeft:e.touches[0].pageX})}),!1),document.addEventListener("touchmove",(function(e){t.state.xLeft>=0&&t.state.xLeft<=400&&t.setState({xLeft:e.touches[0].pageX})}),!1)}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"600px",margin:"0 auto",position:"relative"}},r.a.createElement("div",{className:"TabBarre",style:{left:"".concat(this.state.xLeft,"px")}}))}}]),e}(o.Component)),j=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(p.a)(e).call(this,t))).generateIfCollideX=function(t,e){return n.state.pointTop+19>e&&n.state.pointTop<e+9&&n.state.pointLeft+20>t&&n.state.pointLeft<t+65},n.generateIfCollideY=function(t,e){return n.state.pointTop+20>e&&n.state.pointTop<e+10&&n.state.pointLeft+19>t&&n.state.pointLeft<t+64},n.checkIfCollideX=function(){return n.state.brickWall.filter((function(t){return!0===n.generateIfCollideX(t.left,t.top)})).map((function(t){return n.generateIfCollideX(t.left,t.top)})).join("||")},n.checkIfCollideY=function(){return n.state.brickWall.filter((function(t){return!0===n.generateIfCollideY(t.left,t.top)})).map((function(t){return n.generateIfCollideY(t.left,t.top)})).join("||")},n.MoovingBallX=function(){n.state.goRight?n.setState({pointLeft:n.state.pointLeft+=n.state.xSpeed}):n.state.goRight||n.setState({pointLeft:n.state.pointLeft-=n.state.xSpeed}),(n.state.pointLeft>355||n.state.pointLeft<0||n.checkIfCollideX())&&n.setState({goRight:!n.state.goRight}),setTimeout(n.MoovingBallX,1)},n.MoovingBallY=function(){n.state.goDown?n.setState({pointTop:n.state.pointTop+=n.state.ySpeed}):n.state.goDown||n.setState({pointTop:n.state.pointTop-=n.state.ySpeed}),(n.state.pointTop>587||n.state.pointTop<0||n.checkIfCollideY())&&n.setState({goDown:!n.state.goDown}),setTimeout(n.MoovingBallY,1)},n.getBrickWall=function(){for(var t=[],e=0;e<6;e++)for(var n=0;n<5;n++)t.push({top:20*e,left:75*n});return t},n.state={pointLeft:20,pointTop:587,goRight:!0,goDown:!1,xSpeed:1,ySpeed:1,brickWall:n.getBrickWall()},n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.MoovingBallX(),this.MoovingBallY()}},{key:"render",value:function(){var t=this.state,e=t.pointLeft,n=t.pointTop;return r.a.createElement("div",{className:"Game"},r.a.createElement("div",{style:{position:"relative",height:"600px",width:"375",top:"67px"}},this.state.brickWall.map((function(t){return r.a.createElement(v,{top:t.top,left:t.left})})),r.a.createElement(d,{left:e,top:n}),r.a.createElement(m,null)))}}]),e}(o.Component);n(17);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8b31c8fd.chunk.js.map