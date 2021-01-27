(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{621:function(e,r,a){"use strict";a.r(r);var s=a(42),t=Object(s.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_3-2-把庞大的-npm-script-拆到单独文件中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-把庞大的-npm-script-拆到单独文件中"}},[e._v("#")]),e._v(" 3.2 把庞大的 npm script 拆到单独文件中")]),e._v(" "),a("p",[e._v("当 npm script 不断累积、膨胀的时候，全部放在 package.json 里面可能并不是个好主意，因为这样会导致 package.json 糟乱，可读性降低。")]),e._v(" "),a("p",[e._v("借助 "),a("a",{attrs:{href:"https://github.com/testdouble/scripty",target:"_blank",rel:"noopener noreferrer"}},[e._v("scripty"),a("OutboundLink")],1),e._v(" 我们可以将 npm script 剥离到单独的文件中，从而把复杂性隔到单独的模块里面，让代码整体看起来更加清晰。")]),e._v(" "),a("p",[e._v("示例项目中的覆盖率相关的 npm script 占据了很大的篇幅，如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  "scripts": {\n    "cover": "nyc --reporter=html npm test",\n    "cover:cleanup": "rimraf coverage && rimraf .nyc_output",\n    "cover:archive": "cross-var \\"make-dir coverage_archive/$npm_package_version && cpr coverage/* coverage_archive/$npm_package_version -o\\"",\n    "cover:serve": "cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n    "cover:open": "cross-var opn http://localhost:$npm_package_config_port",\n    "precover": "npm run cover:cleanup",\n    "postcover": "npm-run-all cover:archive --parallel cover:serve cover:open"\n  },\n\n')])])]),a("p",[e._v("如果要隔离复杂性，我们可以考虑从 cover 相关的 script 入手，具体操作步骤如下：")]),e._v(" "),a("h3",{attrs:{id:"_1-安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装依赖"}},[e._v("#")]),e._v(" 1. 安装依赖")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i scripty -D\n# npm install scripty --save-dev\n# yarn add scripty -D\n\n")])])]),a("h3",{attrs:{id:"_2-准备目录和文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备目录和文件"}},[e._v("#")]),e._v(" 2. 准备目录和文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir -p scripts/cover\n\n")])])]),a("p",[e._v("先创建两层的目录，因为我们计划把 cover 脚本写成多个，方便单独去执行，这里命名为 scripts 是 scripty 默认的，实际上是可以自定义的。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("touch scripts/cover.sh\ntouch scripts/cover/serve.sh\ntouch scripts/cover/open.sh\n\n")])])]),a("p",[e._v("然后创建空白的脚本文件，因为有了单独的脚本，我们可以把原来的 precover、cover、postcover、cover:archive、cover:cleanup 合并到一个文件中。")]),e._v(" "),a("p",[e._v("按照 scripty 的默认约定，npm script 命令和上面各文件的对应关系如下：")]),e._v(" "),a("p",[e._v("命令")]),e._v(" "),a("p",[e._v("文件")]),e._v(" "),a("p",[e._v("备注")]),e._v(" "),a("p",[e._v("cover")]),e._v(" "),a("p",[e._v("scripts/cover.sh")]),e._v(" "),a("p",[e._v("内含 precover、postcover 的逻辑")]),e._v(" "),a("p",[e._v("cover:serve")]),e._v(" "),a("p",[e._v("scripts/cover/serve.sh")]),e._v(" "),a("p",[e._v("启动服务")]),e._v(" "),a("p",[e._v("cover:open")]),e._v(" "),a("p",[e._v("scripts/cover/open.sh")]),e._v(" "),a("p",[e._v("打开预览")]),e._v(" "),a("p",[a("strong",[e._v("特别注意的是，给所有脚本增加可执行权限是必须的，否则 scripty 执行时会报错")]),e._v("，我们可以给所有的脚本增加可执行权限：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chmod -R a+x scripts/**/*.sh\n\n")])])]),a("h3",{attrs:{id:"_3-修改-scripty-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改-scripty-脚本"}},[e._v("#")]),e._v(" 3. 修改 scripty 脚本")]),e._v(" "),a("p",[e._v("准备好目录和文件之后，接下来需要给脚本填充内容，脚本内容如下（因为脚本使用的是 bash，所以直接忽略了跨平台兼容的处理，跨平台兼容脚本最好使用 Node.js 编写，下节会介绍）：")]),e._v(" "),a("p",[a("code",[e._v("scripts/cover.sh")]),e._v(" 内容如下（cleanup --\x3e cover --\x3e archive --\x3e preview）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#!/usr/bin/env bash\n\n# remove old coverage reports\nrimraf coverage && rimraf .nyc_output\n\n# run test and collect new coverage\nnyc --reporter=html npm run test\n\n# achive coverage report by version\nmkdir -p coverage_archive/$npm_package_version\ncp -r coverage/* coverage_archive/$npm_package_version\n\n# open coverage report for preview\nnpm-run-all --parallel cover:serve cover:open\n\n")])])]),a("p",[a("code",[e._v("scripts/cover/serve.sh")]),e._v(" 内容如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#!/usr/bin/env bash\n\nhttp-server coverage_archive/$npm_package_version -p $npm_package_config_port\n\n")])])]),a("p",[a("code",[e._v("scripts/cover/open.sh")]),e._v(" 内容如下（这里有个 sleep，是为了确保文件系统写入完成）：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#!/usr/bin/env bash\n\nsleep 1\nopn http://localhost:$npm_package_config_port\n\n")])])]),a("p",[e._v("细心的同学可能注意到了，在 shell 脚本里面是可以随意使用 npm 的内置变量和自定义变量的。")]),e._v(" "),a("h3",{attrs:{id:"_4-修改-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改-package-json"}},[e._v("#")]),e._v(" 4. 修改 package.json")]),e._v(" "),a("p",[e._v("主要改动是清理 cover:* 命令，接入 scripty，具体的 diff 如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('   "scripts": {\n     "test": "cross-env NODE_ENV=test mocha tests/",\n-    "cover": "nyc --reporter=html npm test",\n-    "cover:cleanup": "rimraf coverage && rimraf .nyc_output",\n-    "cover:archive": "cross-var \\"make-dir coverage_archive/$npm_package_version && cpr coverage/* coverage_archive/$npm_package_version -o\\"",\n-    "cover:serve": "cross-var http-server coverage_archive/$npm_package_version -p $npm_package_config_port",\n-    "cover:open": "cross-var opn http://localhost:$npm_package_config_port",\n-    "precover": "npm run cover:cleanup",\n-    "postcover": "npm-run-all cover:archive --parallel cover:serve cover:open"\n+    "cover": "scripty",\n+    "cover:serve": "scripty",\n+    "cover:open": "scripty"\n   },\n\n')])])]),a("p",[e._v("这里我们只保留了 cover、cover:serve、cover:open 等 3 个命令，让它们都指向 scripty，调用哪个脚本都由 scripty 来处理。")]),e._v(" "),a("h3",{attrs:{id:"_5-实际测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-实际测试"}},[e._v("#")]),e._v(" 5. 实际测试")]),e._v(" "),a("p",[e._v("修改完毕之后，重新运行 npm run cover，不出意外的话，我们能得到和原来完全相同的结果，仔细观察运行的日志，会发现在代码执行前有段额外的输出，如下图中红色框中的内容，scripty 在实际执行的时候会把执行的命令内容打印出来，方便调试：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/7/1602e70a1b4df91b?w=874&h=711&f=png&s=94680",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"高级技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级技巧"}},[e._v("#")]),e._v(" 高级技巧")]),e._v(" "),a("p",[e._v("scripty 比上面演示的要更强大，也支持通配符运行、脚本并行等特性、静默模式，如果有需求可以阅读官方的 "),a("a",{attrs:{href:"https://github.com/testdouble/scripty#advanced-usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("README.md"),a("OutboundLink")],1),e._v("，毕竟咱们已经入门了，不是么？")]),e._v(" "),a("hr"),e._v(" "),a("blockquote",[a("p",[e._v("本节用到的代码见 "),a("a",{attrs:{href:"https://github.com/wangshijun/automated-workflow-with-npm-script/tree/07-manage-complexity-using-scripty",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v("，想边看边动手练习的同学可以拉下来自己改，注意切换到正确的分支 "),a("code",[e._v("07-manage-complexity-using-scripty")]),e._v("。")])]),e._v(" "),a("hr")])}),[],!1,null,null,null);r.default=t.exports}}]);