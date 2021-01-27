(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{683:function(n,e,t){"use strict";t.r(e);var o=t(42),s=Object(o.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"组件-codespliting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件-codespliting"}},[n._v("#")]),n._v(" 组件 CodeSpliting")]),n._v(" "),t("p",[n._v("目前所有的组件已经开发完成，在打包之前，我们可以对组件进行代码分割，达到组件懒加载的效果，这也是性能优化的一个手段，因为没必要在一开始加载所有组件，尤其在应用特别复杂、组件规模非常庞大的时候，这样可以大幅提升首屏加载速度。")]),n._v(" "),t("p",[n._v("在路由代码中:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('import React from \'react\';\nimport {Redirect} from "react-router-dom";\nimport Home from \'../application/Home\';\nconst RecommendComponent = lazy (() => import ("../application/Recommend/"));\nconst SingersComponent = lazy (() => import ("../application/Singers/"));\nconst RankComponent = lazy (() => import ("../application/Rank/"));\nconst AlbumComponent = lazy (() => import ("../application/Album/"));\nconst SingerComponent = lazy (() => import ("./../application/Singer/"));\nconst SearchComponent = lazy (() => import ("./../application/Search/"));\n\nconst SuspenseComponent = Component => props => {\n  return (\n    <Suspense fallback={null}>\n      <Component {...props}></Component>\n    </Suspense>\n  )\n}\nexport default [\n  {\n    path: "/",\n    component: Home,\n    routes: [\n      {\n        path: "/",\n        exact: true,\n        render: () => (\n          <Redirect to={"/recommend"}/>\n        )\n      },\n      {\n        path: "/recommend/",\n        component: SuspenseComponent (RecommendComponent),\n        routes: [\n          {\n            path: "/recommend/:id",\n            component: SuspenseComponent (AlbumComponent)\n          }\n        ]\n      },\n      {\n        path: "/singers",\n        component: SuspenseComponent (SingersComponent),\n        routes: [\n          {\n            path: \'/singers/:id\',\n            component: SuspenseComponent (SingerComponent)\n          }\n        ]\n      },\n      {\n        path: "/rank/",\n        component: SuspenseComponent (RankComponent),\n        key: "rank",\n        routes: [\n          {\n            path: "/rank/:id",\n            component: SuspenseComponent (AlbumComponent)\n          }\n        ]\n      },\n      {\n        path: "/album/:id",\n        exact: true,\n        key: "album",\n        component: SuspenseComponent (AlbumComponent)\n      },\n      {\n        path: "/search",\n        exact: true,\n        key: "search",\n        component: SuspenseComponent (SearchComponent)\n      }\n    ]\n  }\n]\n\n')])])]),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[n._v("#")]),n._v(" 部署")]),n._v(" "),t("p",[n._v("如果想要部署，直接执行:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("npm run build\n\n")])])]),t("p",[n._v("现在打包会生成 build 目录。")]),n._v(" "),t("p",[n._v("然后写这样一段代码:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 项目根目录下\n// 相应的 express 和 compression 要装好\nvar express = require ('express')\nvar compression = require ('compression')\n// 端口可以自己定义\nvar port = process.env.PORT || 8010;\nvar app = express ()\n// 开启 gzip 压缩\napp.use (compression ())\napp.use (express.static ('./build'))\nmodule.exports = app.listen (port, function (err) {\n  if (err) {\n    console.log (err)\n    return\n  }\n  console.log ('Listening at http://localhost:' + port + '\\n')\n})\n\n")])])]),t("p",[n._v("利用 express 服务部署到线上。")]),n._v(" "),t("p",[n._v("在服务器上运行：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("node server.js\n\n")])])]),t("p",[n._v("这样就可以通过在外网进行访问了。不过终端关闭后服务会停止，这时我们可以利用 PM2 管理工具，首先")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("npm install pm2 \n\n")])])]),t("p",[n._v("然后通过一条命令就能轻松地启动服务:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("pm2 start ./server.js\n\n")])])]),t("p",[n._v("现在终端关闭后也能正常地访问了。")]),n._v(" "),t("h2",{attrs:{id:"未来规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未来规划"}},[n._v("#")]),n._v(" 未来规划")]),n._v(" "),t("p",[n._v("如果能够一直学习到这里，那恭喜你，跟我一起完完整整地做完了这个项目。非常感谢大家的陪伴，也希望这个小册能成为你新的起点，在技术的道路上日益精进。")]),n._v(" "),t("p",[n._v("回过头梳理一下，我们写了近"),t("code",[n._v("6000行代码")]),n._v("，封装了"),t("code",[n._v("13个UI基础组件")]),n._v("，"),t("code",[n._v("12个应用组件")]),n._v("，完成了"),t("code",[n._v("七大模块")]),n._v("，可以说是实打实的项目经验，绝非简简单单的demo项目可以相比。更重要的是，我们践行了React中数据Immutable的思想，将性能优化由理论展开了实践，并在大大小小的组件封装过程中潜移默化地让大家体会react hooks的各种应用场景，可以说对React技术栈的同学是一个很好的巩固，对于之前掌握其他技术栈的同学也是一次新鲜的经历。")]),n._v(" "),t("p",[n._v("对于未来的规划，我觉得就小册而言，我就尽力地长期维护，起码在短期内不会推出新的小册了，如果有任何问题欢迎大家与我反馈，我会尽力保证小册质量，尽量给大家更多的帮助。并且，在之后也会不定期地推出彩蛋，敬请大家关注！")]),n._v(" "),t("p",[n._v("长风破浪会有时，直挂云帆济沧海。大家加油！")])])}),[],!1,null,null,null);e.default=s.exports}}]);