(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{203:function(e,t,o){var content=o(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(68).default)("6759f5ab",content,!0,{sourceMap:!1})},211:function(e,t,o){var n=o(212);o(37);var c,r=o(213);e.exports={loadBaseBlocks:(c=n(regeneratorRuntime.mark((function e(){var t,o,i,n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["CubeBlocks","CubeBlocks_Armor","CubeBlocks_Armor_2","CubeBlocks_Automation","CubeBlocks_Communications","CubeBlocks_Control","CubeBlocks_DecorativePack","CubeBlocks_DecorativePack2","CubeBlocks_Doors","CubeBlocks_Economy","CubeBlocks_Energy","CubeBlocks_Extras","CubeBlocks_Frostbite","CubeBlocks_Gravity","CubeBlocks_Interiors","CubeBlocks_LCDPanels","CubeBlocks_Lights","CubeBlocks_Logistics","CubeBlocks_Mechanical","CubeBlocks_Medical","CubeBlocks_Production","CubeBlocks_ScrapRacePack","CubeBlocks_SparksOfTheFuturePack","CubeBlocks_Symbols","CubeBlocks_Thrusters","CubeBlocks_Tools","CubeBlocks_Utility","CubeBlocks_Warfare1","CubeBlocks_Weapons","CubeBlocks_Wheels","CubeBlocks_Windows"],o=[],i=0;case 3:if(!(i<t.length)){e.next=17;break}return e.next=6,fetch("https://organom.github.io/secalculator_nuxt/CubeBlocks/".concat(t[i],".sbc"),{mode:"no-cors"});case 6:return n=e.sent,e.next=9,n.text();case 9:return c=e.sent,e.next=12,r.parse(c,{attributeNamePrefix:"@_",ignoreAttributes:!1,ignoreNameSpace:!1});case 12:(l=e.sent).Definitions&&o.push(l.Definitions.CubeBlocks.Definition);case 14:i++,e.next=3;break;case 17:return e.abrupt("return",o.flat());case 18:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})}},223:function(e,t,o){"use strict";o(203)},224:function(e,t,o){var n=o(67)(!1);n.push([e.i,'.container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),e.exports=n},227:function(e,t,o){"use strict";o.r(t);var n=o(101),c=o(2),r=(o(37),o(45),o(208),o(26),o(14),o(27),o(46),o(211)),l={name:"index",asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var o,c,l,C,i,k,m,_,f,B,h,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$http,0!==(o=e.store).state.base.blocks.length){t.next=10;break}return t.next=4,r.loadBaseBlocks();case 4:for(c=t.sent,l=c.map((function(e){return e.Components.Component})).flat(),C=Object(n.a)(new Set(l.map((function(e){return e["@_Subtype"]})))),o.commit("base/setComponents",C.map((function(e){return{Code:e,DisplayName:e.replace(/([A-Z])/g," $1")}}))),i=0;i<c.length;i++){if(m={},Array.isArray(c[i].Components.Component))for(_=0;_<c[i].Components.Component.length;_++)f=c[i].Components.Component[_]["@_Subtype"],B=c[i].Components.Component[_]["@_Count"],m[f]=+(m[f]||0)+ +B;else h=c[i].Components.Component["@_Subtype"],d=c[i].Components.Component["@_Count"],m[h]=+d;c[i].ParsedComponents=m,c[i].ParsedDescription=null===(k=c[i].Description)||void 0===k?void 0:k.replace("Description_","")}o.commit("base/setBlocks",c);case 10:return t.abrupt("return",{});case 11:case"end":return t.stop()}}),t)})))()},computed:{baseBlocks:function(){return this.$store.state.base.blocks},baseComponents:function(){return this.$store.state.base.components}},methods:{goToBlocks:function(){return this.$router.push("/blocks")},goToComponents:function(){return this.$router.push("/components")},goToGitHub:function(){return window.location="https://github.com/organom/secalculator"}}},C=(o(223),o(53)),component=Object(C.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"container"},[o("div",[o("h1",{staticClass:"title"},[e._v("\n      secalculator\n    ")]),e._v(" "),o("h2",{staticClass:"subtitle"},[e._v("\n      Space Engineers calculator\n    ")]),e._v(" "),o("div",{staticClass:"links"},[o("button",{staticClass:"button--grey",on:{click:e.goToBlocks}},[e._v("Blocks")]),e._v(" "),o("button",{staticClass:"button--grey",on:{click:e.goToComponents}},[e._v("Components")]),e._v(" "),o("button",{staticClass:"button--grey",on:{click:e.goToGitHub}},[e._v("GitHub")])]),e._v(" "),o("h2",[e._v(" ")]),e._v(" "),o("div",[e._v("Total Blocks loaded: "+e._s(this.baseBlocks.length))]),e._v(" "),o("div",[e._v("Total Components loaded: "+e._s(this.baseComponents.length))])])])}),[],!1,null,null,null);t.default=component.exports}}]);