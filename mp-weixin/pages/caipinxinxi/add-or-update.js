(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinxinxi/add-or-update"],{5955:function(e,t,i){"use strict";(function(e){i("f0b1"),i("921b");n(i("66fd"));var t=n(i("ff1c"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},7993:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i,n,a,r,u){try{var c=e[r](u),o=c.value}catch(s){return void i(s)}c.done?t(o):Promise.resolve(o).then(n,a)}function u(e){return function(){var t=this,i=arguments;return new Promise((function(n,a){var u=e.apply(t,i);function c(e){r(u,n,a,c,o,"next",e)}function o(e){r(u,n,a,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("feef"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{ruleForm:{caipinbianhao:this.getUUID(),caipinmingcheng:"",caixi:"",tupian:"",shuliang:"",danjia:"",kouweipianhao:"",jianjie:""},caixiOptions:[],caixiIndex:0,user:{},ro:{caipinbianhao:!1,caipinmingcheng:!1,caixi:!1,tupian:!1,shuliang:!1,danjia:!1,kouweipianhao:!1,jianjie:!1}}},components:{wPicker:c},computed:{},onLoad:function(){var t=u(n.default.mark((function t(i){var a,r,u,c;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,this.$api.session(a);case 3:return r=t.sent,this.user=r.data,t.next=7,this.$api.option("caixi","caixi",{});case 7:if(r=t.sent,this.caixiOptions=r.data,this.ruleForm.userid=e.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!i.id){t.next=17;break}return this.ruleForm.id=i.id,t.next=15,this.$api.info("caipinxinxi",this.ruleForm.id);case 15:r=t.sent,this.ruleForm=r.data;case 17:if(!i.cross){t.next=56;break}u=e.getStorageSync("crossObj"),t.t0=n.default.keys(u);case 20:if((t.t1=t.t0()).done){t.next=56;break}if(c=t.t1.value,"caipinbianhao"!=c){t.next=26;break}return this.ruleForm.caipinbianhao=u[c],this.ro.caipinbianhao=!0,t.abrupt("continue",20);case 26:if("caipinmingcheng"!=c){t.next=30;break}return this.ruleForm.caipinmingcheng=u[c],this.ro.caipinmingcheng=!0,t.abrupt("continue",20);case 30:if("caixi"!=c){t.next=34;break}return this.ruleForm.caixi=u[c],this.ro.caixi=!0,t.abrupt("continue",20);case 34:if("tupian"!=c){t.next=38;break}return this.ruleForm.tupian=u[c],this.ro.tupian=!0,t.abrupt("continue",20);case 38:if("shuliang"!=c){t.next=42;break}return this.ruleForm.shuliang=u[c],this.ro.shuliang=!0,t.abrupt("continue",20);case 42:if("danjia"!=c){t.next=46;break}return this.ruleForm.danjia=u[c],this.ro.danjia=!0,t.abrupt("continue",20);case 46:if("kouweipianhao"!=c){t.next=50;break}return this.ruleForm.kouweipianhao=u[c],this.ro.kouweipianhao=!0,t.abrupt("continue",20);case 50:if("jianjie"!=c){t.next=54;break}return this.ruleForm.jianjie=u[c],this.ro.jianjie=!0,t.abrupt("continue",20);case 54:t.next=20;break;case 56:this.styleChange();case 57:case"end":return t.stop()}}),t,this)})));function i(e){return t.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},caixiChange:function(e){this.caixiIndex=e.target.value,this.ruleForm.caixi=this.caixiOptions[this.caixiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.tupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){e.next=3;break}return this.$utils.msg("数量应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.danjia||this.$validate.isIntNumer(this.ruleForm.danjia)){e.next=6;break}return this.$utils.msg("单价应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("caipinxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("caipinxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(i,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,i("543d")["default"])},"90bb":function(e,t,i){},"9e1e":function(e,t,i){"use strict";var n=i("90bb"),a=i.n(n);a.a},"9f9e":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))},ca1c:function(e,t,i){"use strict";i.r(t);var n=i("7993"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},ff1c:function(e,t,i){"use strict";i.r(t);var n=i("9f9e"),a=i("ca1c");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("9e1e");var u,c=i("f0c5"),o=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1cafad46",null,!1,n["a"],u);t["default"]=o.exports}},[["5955","common/runtime","common/vendor"]]]);