(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(4),r=n.n(s),c=(n(14),n(15),n(2)),o=n(5),l=n(6),m=n(1),u=n(8),h=n(7),d=function(e){return i.a.createElement("div",{className:"timebox"},i.a.createElement("h3",{id:e.type+"-label"},e.type," length"),i.a.createElement("p",{id:e.type+"-length"},e.length),i.a.createElement("button",{id:e.type+"-decrement",onClick:function(){return e.adjustLength(e.type,"decrement")}},"decrement"),i.a.createElement("button",{id:e.type+"-increment",onClick:function(){return e.adjustLength(e.type,"increment")}},"increment"))},f=function(e){var t=Math.floor(e/60);t<10&&(t="0"+t);var n=e%60;return n<10&&(n="0"+n),"".concat(t,":").concat(n)},p=function(e){return i.a.createElement("div",null,i.a.createElement("h2",{id:"timer-label"},"time left of "+e.timerType),i.a.createElement("p",{id:"time-left"},f(e.timeLeft)),i.a.createElement("button",{onClick:function(){return e.timerControl()},id:"start_stop"},e.isPaused?"start":"stop"),i.a.createElement("button",{onClick:function(){return e.reset()},id:"reset"},"reset"))},L=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={sessionLength:25,breakLength:5,timerType:"session",timeLeft:1500,isPaused:!0,timerID:null},a.adjustLength=a.adjustLength.bind(Object(m.a)(a)),a.timerControl=a.timerControl.bind(Object(m.a)(a)),a.reset=a.reset.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"timerControl",value:function(){var e=this;if(this.state.isPaused){var t=setInterval((function(){if(0===e.state.timeLeft){var t="session"===e.state.timerType?"break":"session";e.setState((function(e){return{timerType:t,timeLeft:60*e["".concat(t,"Length")]}}))}else e.setState((function(e){return{timeLeft:e.timeLeft-1}}))}),1e3);this.setState({timerID:t,isPaused:!1})}else clearInterval(this.state.timerID),this.setState({isPaused:!0})}},{key:"adjustLength",value:function(e,t){if(this.state.isPaused&&(1!==this.state["".concat(e,"Length")]||"decrement"!==t)&&60!==this.state["".concat(e,"Length")]){var n="increment"===t?1:-1;this.setState((function(t){var a;return a={},Object(c.a)(a,"".concat(e,"Length"),t["".concat(e,"Length")]+n),Object(c.a)(a,"timeLeft",t.timerType===e?60*(t["".concat(e,"Length")]+n):t.timeLeft),a}))}}},{key:"reset",value:function(){clearInterval(this.state.timerID),this.setState({sessionLength:25,breakLength:5,timerType:"session",timeLeft:1500,isPaused:!0,timerID:null})}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("h1",null,"Pomodoro Clock"),i.a.createElement("div",{className:"timeboxes"},i.a.createElement(d,{length:this.state.sessionLength,type:"session",adjustLength:this.adjustLength}),i.a.createElement(d,{length:this.state.breakLength,type:"break",adjustLength:this.adjustLength})),i.a.createElement(p,{timerType:this.state.timerType,timeLeft:this.state.timeLeft,isPaused:this.state.isPaused,timerControl:this.timerControl,reset:this.reset}))}}]),n}(i.a.Component));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.6009e553.chunk.js.map