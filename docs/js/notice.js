(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notice"],{1583:function(t,o,n){"use strict";n.r(o);var i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("r-page",[n("section",{staticClass:"notify-page"},[n("r-h",{attrs:{title:"基础用法",tag:"h2"}},[n("section",{staticClass:"notify-btn-wrapper"},[n("v-button",{staticClass:"notify-btn",on:{click:t.handleAutoHideClick}},[t._v("自动关闭")]),n("v-button",{staticClass:"notify-btn",attrs:{type:"primary"},on:{click:t.handleKeepShowClick}},[t._v("一直显示")])],1)]),n("r-h",{attrs:{title:"自定义弹出位置",tag:"h2"}},[n("section",{staticClass:"notify-btn-wrapper"},[n("v-button",{staticClass:"notify-btn",on:{click:t.handleTopRightClick}},[t._v("右上角")]),n("v-button",{staticClass:"notify-btn",on:{click:t.handleBottomRightClick}},[t._v("右下角")]),n("v-button",{staticClass:"notify-btn",on:{click:t.handleTopLeftClick}},[t._v("左上角")]),n("v-button",{staticClass:"notify-btn",on:{click:t.handleBottomLeftClick}},[t._v("左下角")])],1)]),n("r-h",{attrs:{title:"自定义按钮",tag:"h2"}},[n("section",{staticClass:"notify-btn-wrapper"},[n("v-button",{staticClass:"notify-btn",on:{click:t.handleShowCloseBtnClick}},[t._v("显示关闭按钮")]),n("v-button",{staticClass:"notify-btn",on:{click:t.handleshowConfirmBtnClick}},[t._v("显示确定按钮")]),n("v-button",{staticClass:"notify-btn",on:{click:t.handleshowCloseConfirmBtnClick}},[t._v("显示确定关闭按钮")]),n("v-button",{staticClass:"notify-btn",on:{click:t.handleHideAllBtnClick}},[t._v("不显示按钮")]),n("v-button",{staticClass:"notify-btn",on:{click:t.handleCustomConfirmTextBtnClick}},[t._v("自定义确定文本")])],1)])],1)])},s=[],e={methods:{handleAutoHideClick:function(){this.$notify({title:"自动隐藏标题",content:"this is content this is content this is content",showConfirm:!0,position:"top-right"}).then((function(t){console.log("auto-hide: "),console.log(t),console.log("\n")}))},handleKeepShowClick:function(){this.$notify({title:"一直显示标题",content:"this is content this is content this is content",showConfirm:!0,duration:0,position:"top-right"}).then((function(t){console.log("keep-show: "),console.log(t),console.log("\n")}))},handleTopRightClick:function(){this.$notify({title:"右上角标题",content:"this is content this is content this is content",showConfirm:!0,position:"top-right"}).then((function(t){console.log("top-right: "),console.log(t),console.log("\n")}))},handleBottomRightClick:function(){this.$notify({title:"右下角标题",content:"this is content this is content this is content",showConfirm:!0,position:"bottom-right"}).then((function(t){console.log("bottom-right: "),console.log(t),console.log("\n")}))},handleTopLeftClick:function(){this.$notify({title:"左上角标题",content:"this is content this is content this is content",showConfirm:!0,position:"top-left"}).then((function(t){console.log("top-left: "),console.log(t),console.log("\n")}))},handleBottomLeftClick:function(){this.$notify({title:"左下角标题",content:"this is content this is content this is content",showConfirm:!0,position:"bottom-left"}).then((function(t){console.log("bottom-left: "),console.log(t),console.log("\n")}))},handleShowCloseBtnClick:function(){this.$notify({title:"显示关闭按钮标题",content:"this is content this is content this is content",position:"top-right"}).then((function(t){console.log("show close button: "),console.log(t),console.log("\n")}))},handleshowConfirmBtnClick:function(){this.$notify({title:"显示确认按钮标题",content:"this is content this is content this is content",showConfirm:!0,showClose:!1,position:"top-right"}).then((function(t){console.log("show confirm button: "),console.log(t),console.log("\n")}))},handleshowCloseConfirmBtnClick:function(){this.$notify({title:"显示确认关闭按钮标题",content:"this is content this is content this is content",showConfirm:!0,position:"top-right"}).then((function(t){console.log("show confirm&close button: "),console.log(t),console.log("\n")}))},handleHideAllBtnClick:function(){this.$notify({title:"不显示按钮标题",content:"this is content this is content this is content",showConfirm:!1,showClose:!1,position:"top-right"}).then((function(t){console.log("hide all button: "),console.log(t),console.log("\n")}))},handleCustomConfirmTextBtnClick:function(){this.$notify({title:"自定义确认按钮文本标题",content:"this is content this is content this is content",showConfirm:!0,showClose:!1,confirmText:"康什么，快点我",position:"top-right"}).then((function(t){console.log("custom confirm text button: "),console.log(t),console.log("\n")}))}}},c=e,l=(n("5020"),n("2877")),h=Object(l["a"])(c,i,s,!1,null,null,null);o["default"]=h.exports},5020:function(t,o,n){"use strict";var i=n("b483"),s=n.n(i);s.a},b483:function(t,o,n){}}]);
//# sourceMappingURL=notice.js.map