(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(3),r=n.n(a),i=(n(15),n(4)),s=n(5),d=n(6),b=n(10),l=n(9),u=n(7),j=n.n(u),h=n(0),f=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:j.a.section,children:[Object(h.jsx)("h2",{children:t}),n]})},O=n(8),v=n.n(O),g=function(e){var t=e.options,n=e.onFeedback;return Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)("button",{type:"button","data-action":e,onClick:n,className:v.a.button,children:e},e)}))})},p=function(e){var t=e.good,n=e.neutral,c=e.bad,o=e.total,a=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good : ",t]}),Object(h.jsxs)("p",{children:["Neutral : ",n]}),Object(h.jsxs)("p",{children:["Bad : ",c]}),Object(h.jsxs)("p",{children:["Total : ",o]}),Object(h.jsxs)("p",{children:["Positive Feedback: ",a,"%"]})]})};var k=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},x=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0},e.onFeedbackRefresh=function(t){var n=t.target.dataset.action;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.onTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.onPositive=function(){return e.onTotalFeedback()?Math.round(e.state.good/e.onTotalFeedback()*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(g,{options:["good","neutral","bad"],onFeedback:this.onFeedbackRefresh})}),Object(h.jsx)(f,{title:"Statistics",children:this.onTotalFeedback()?Object(h.jsx)(p,{good:t,neutral:n,bad:c,total:this.onTotalFeedback(),positivePercentage:this.onPositive()}):Object(h.jsx)(k,{message:"No feedback given",children:")"})})]})}}]),n}(c.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),F()},7:function(e,t,n){e.exports={section:"Section_section__2CMlw"}},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__1T85V"}}},[[17,1,2]]]);
//# sourceMappingURL=main.80a26a94.chunk.js.map