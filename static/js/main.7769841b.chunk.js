(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/bell-sound.deedd54a.mp3"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(4),r=n.n(i),o=(n(15),n(2)),c=n(5),l=n(6),m=n(1),u=n(9),d=n(8),h=function(e){return s.a.createElement("div",{className:"timebox"},s.a.createElement("h3",{className:"section-heading",id:e.type+"-label"},e.type," length"),s.a.createElement("button",{className:"rounded-pill",id:e.type+"-decrement",onClick:function(){return e.adjustLength(e.type,"decrement")}},"decrement"),s.a.createElement("button",{className:"rounded-pill",id:e.type+"-increment",onClick:function(){return e.adjustLength(e.type,"increment")}},"increment"),s.a.createElement("p",{className:"session-length-display",id:e.type+"-length"},e.length))},p=function(e){var t=Math.floor(e/60);t<10&&(t="0"+t);var n=e%60;return n<10&&(n="0"+n),"".concat(t,":").concat(n)},f=function(e){return s.a.createElement("div",{class:"timer"},s.a.createElement("button",{className:"rounded-pill",onClick:function(){return e.timerControl()},id:"start_stop"},e.isPaused?"start":"stop"),s.a.createElement("button",{className:"rounded-pill",onClick:function(){return e.reset()},id:"reset"},"reset"),s.a.createElement("h2",{className:"section-heading",id:"timer-label"},"time left of "+e.timerType),s.a.createElement("p",{className:"timer-display",id:"time-left"},p(e.timeLeft)))},g=function(e){return s.a.createElement("div",{className:"filler",style:{width:"".concat(e.percentage,"%")}})},L=function(e){return s.a.createElement("div",{className:"progress-bar"},s.a.createElement(g,{percentage:e.percentage}))},b=(n(16),n(7)),y=n.n(b),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={sessionLength:25,breakLength:5,timerType:"session",timeLeft:1500,isPaused:!0,timerID:null},a.adjustLength=a.adjustLength.bind(Object(m.a)(a)),a.timerControl=a.timerControl.bind(Object(m.a)(a)),a.controlAudio=a.controlAudio.bind(Object(m.a)(a)),a.reset=a.reset.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"timerControl",value:function(){var e=this;if(this.state.isPaused){var t=setInterval((function(){if(0===e.state.timeLeft){e.controlAudio("play");var t="session"===e.state.timerType?"break":"session";e.setState((function(e){return{timerType:t,timeLeft:60*e["".concat(t,"Length")]}}))}else e.setState((function(e){return{timeLeft:e.timeLeft-1}}));document.title=E(e.state.timeLeft)+" - Pomodoro Clock"}),1e3);this.setState({timerID:t,isPaused:!1})}else document.title="Pomodoro Clock",clearInterval(this.state.timerID),this.setState({isPaused:!0})}},{key:"adjustLength",value:function(e,t){if(this.state.isPaused&&(1!==this.state["".concat(e,"Length")]||"decrement"!==t)&&60!==this.state["".concat(e,"Length")]){var n="increment"===t?1:-1;this.setState((function(t){var a;return a={},Object(o.a)(a,"".concat(e,"Length"),t["".concat(e,"Length")]+n),Object(o.a)(a,"timeLeft",t.timerType===e?60*(t["".concat(e,"Length")]+n):t.timeLeft),a}))}}},{key:"controlAudio",value:function(e){var t=document.getElementById("beep");"play"===e?t.play():(t.pause(),t.currentTime=0)}},{key:"reset",value:function(){this.controlAudio("stop"),clearInterval(this.state.timerID),this.setState({sessionLength:25,breakLength:5,timerType:"session",timeLeft:1500,isPaused:!0,timerID:null})}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("h1",{id:"logo"},"Pomodoro Clock"),s.a.createElement("div",{className:"timeboxes"},s.a.createElement(h,{length:this.state.sessionLength,type:"session",adjustLength:this.adjustLength}),s.a.createElement(h,{length:this.state.breakLength,type:"break",adjustLength:this.adjustLength})),s.a.createElement(f,{timerType:this.state.timerType,timeLeft:this.state.timeLeft,isPaused:this.state.isPaused,timerControl:this.timerControl,reset:this.reset}),s.a.createElement(L,{percentage:"session"===this.state.timerType?this.state.timeLeft/(60*this.state.sessionLength)*100:this.state.timeLeft/(60*this.state.breakLength)*100}),s.a.createElement("audio",{id:"beep"},s.a.createElement("source",{src:y.a})))}}]),n}(s.a.Component),E=function(e){var t=Math.floor(e/60);t<10&&(t="0"+t);var n=e%60;return n<10&&(n="0"+n),"".concat(t,":").concat(n)};r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7769841b.chunk.js.map