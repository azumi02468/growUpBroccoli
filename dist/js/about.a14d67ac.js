(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0758":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"voiceMode"},[i("h1",[t._v("ヴォイスモード")]),t._v(" 開発中 ")])}],r=i("2877"),l={},o=Object(r["a"])(l,n,c,!1,null,null,null);e["default"]=o.exports},"1e13":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"FuriFuri"},[i("h1",[t._v("フリフリモード")]),t._v(" 開発中 ")])}],r=i("2877"),l={},o=Object(r["a"])(l,n,c,!1,null,null,null);e["default"]=o.exports},"372b":function(t,e,i){},"6b6b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"clickMode"},[i("h1",[t._v("クリックモード")]),i("div",[t._v("10秒間で出来るだけ多くクリックして、ブロッコリーを成長させましょう。")]),i("button",{on:{click:t.startGame}},[t._v("ゲームスタート")]),t.gameFlg?i("div",[i("div",{attrs:{id:"time"}},[t._v("残り時間："+t._s(t.countDown)+"秒")]),i("div",{attrs:{id:"playground"},on:{click:t.growUp}},[i("div",[t._v("この枠内をクリックしてください。")]),i("img",{style:{width:t.getBroccoliStyle,height:t.getBroccoliStyle},attrs:{id:"broccoli",src:"broccoli.png",alt:"画像が見つかりません"}})])]):t._e(),t.finishFlg?i("div",[i("div",[t._v("ゲーム終了！")]),i("div",[t._v("クリックした回数："+t._s(t.broccoli))]),i("div",[t._v("評価コメント:"+t._s(t.evaluation))])]):t._e()])},c=[],r={name:"clickMode",data:function(){return{gameFlg:!1,finishFlg:!1,broccoli:0,timer:null,countDown:10,evaluation:""}},computed:{getBroccoliStyle:function(){return 10*this.broccoli+"px"}},methods:{startGame:function(){this.gameFlg=!0;var t=this;this.timer=setInterval((function(){t.countDown--,0===t.countDown&&(clearInterval(t.timer),t.finishFlg=!0,t.evaluation=l(t.broccoli))}),1e3)},growUp:function(){this.finishFlg||this.broccoli++}}},l=function(t){var e="",i=" by Broccoli";return e=t<=10?"遅すぎ、もっと頑張れ":t<=20?"やる気あんの？":t<=30?"しっかりせなあかん":t<=40?"まだまだだね":t<=50?"少しはやるようだな":t<=60?"な、なんだと":"あなたには敵いません",e+i},o=r,a=(i("f5a4"),i("2877")),s=Object(a["a"])(o,n,c,!1,null,"3d95d888",null);e["default"]=s.exports},a122:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flickMode"},[i("h1",[t._v("フリックモード")]),t._v(" 開発中 ")])}],r=i("2877"),l={},o=Object(r["a"])(l,n,c,!1,null,null,null);e["default"]=o.exports},f5a4:function(t,e,i){"use strict";var n=i("372b"),c=i.n(n);c.a}}]);
//# sourceMappingURL=about.a14d67ac.js.map