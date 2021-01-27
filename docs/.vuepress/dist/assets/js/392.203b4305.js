(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{748:function(e,t,a){"use strict";a.r(t);var n=a(42),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"构建实战篇-3-多页路由与模板解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建实战篇-3-多页路由与模板解析"}},[e._v("#")]),e._v(" 构建实战篇 3：多页路由与模板解析")]),e._v(" "),a("p",[e._v("上篇文章中我们成功打包并输出了多页文件，而构建一个多页应用能够让我们进一步了解项目配置的可拓展性，可以对学习 Vue 和 webpack 起到强化训练的效果，本文将在此基础上主要针对多页路由及模板的配置进行系列的介绍。")]),e._v(" "),a("h2",{attrs:{id:"路由配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由配置"}},[e._v("#")]),e._v(" 路由配置")]),e._v(" "),a("h3",{attrs:{id:"_1-跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-跳转"}},[e._v("#")]),e._v(" 1. 跳转")]),e._v(" "),a("p",[e._v("在配置路由前，首先我们要明确一点就是，多页应用中的每个单页都是相互隔离的，即如果你想从 page1 下的路由跳到 page2 下的路由，你无法使用 vue-router 中的方法进行跳转，需要使用原生方法："),a("code",[e._v("location.href")]),e._v(" 或 "),a("code",[e._v("location.replace")]),e._v("。")]),e._v(" "),a("p",[e._v("此外为了能够清晰的分辨路由属于哪个单页，我们应该给每个单页路由添加前缀，比如：")]),e._v(" "),a("ul",[a("li",[e._v("index 单页：/vue/")]),e._v(" "),a("li",[e._v("page1 单页：/vue/page1/")]),e._v(" "),a("li",[e._v("page2 单页：/vue/page2/")])]),e._v(" "),a("p",[e._v("其中 /vue/ 为项目的二级目录，其后的目录代表路由属于哪个单页。因此我们每个单页的路由配置可以像这样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* page1 单页路由配置 */\n\nimport Vue from 'vue'\nimport Router from 'vue-router'\n\n// 首页\nconst Home = (resolve => {\n    require.ensure(['../views/home.vue'], () => {\n        resolve(require('../views/home.vue'))\n    })\n})\n\nVue.use(Router)\n\nlet base = `${process.env.BASE_URL}` + 'page1'; // 添加单页前缀\n\nexport default new Router({\n    mode: 'history',\n    base: base,\n    routes: [\n        {\n            path: '/',\n            name: 'home',\n            component: Home\n        },\n    ]\n})\n\n")])])]),a("p",[e._v("我们通过设置路由的 base 值来为每个单页添加路由前缀，如果是 index 单页我们无需拼接路由前缀，直接跳转至二级目录即可。")]),e._v(" "),a("p",[e._v("那么在单页间跳转的地方，我们可以这样写：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<template>\n  <div id="app">\n    <div id="nav">\n      <a @click="goFn(\'\')">Index</a> |\n      <a @click="goFn(\'page1\')">Page1</a> |\n      <a @click="goFn(\'page2\')">Page2</a> |\n    </div>\n    <router-view/>\n  </div>\n</template>\n\n<script>\nexport default {\n    methods: {\n        goFn(name) {\n            location.href = `${process.env.BASE_URL}` + name\n        }\n    }\n}\n<\/script>\n\n')])])]),a("p",[e._v("但是为了保持和 Vue 路由跳转同样的风格，我可以对单页之间的跳转做一下封装，实现一个 "),a("code",[e._v("Navigator")]),e._v(" 类，类的代码可以查看本文最后的示例，封装完成后我们可以将跳转方法修改为：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("this.$openRouter({\n    name: name, // 跳转地址\n    query: {\n        text: 'hello' // 可以进行参数传递\n    },\n})\n\n")])])]),a("p",[e._v("使用上述 "),a("code",[e._v("$openRouter")]),e._v(" 方法我们还需要一个前提条件，便是将其绑定到 Vue 的原型链上，我们在所有单页的入口文件中添加：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import { Navigator } from '../../common' // 引入 Navigator\n\nVue.prototype.$openRouter = Navigator.openRouter; // 添加至 Vue 原型链\n\n")])])]),a("p",[e._v("至此我们已经能够成功模仿 vue-router 进行单页间的跳转，但是需要注意的是因为其本质使用的是 location 跳转，所以必然会产生浏览器的刷新与重载。")]),e._v(" "),a("h3",{attrs:{id:"_2-重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-重定向"}},[e._v("#")]),e._v(" 2. 重定向")]),e._v(" "),a("p",[e._v("当我们完成上述路由跳转的功能后，可以在本地服务器上来进行一下测试，你会发现 Index 首页可以正常打开，但是跳转 Page1、Page2 却仍然处于 Index 父组件下，这是因为浏览器认为你所要跳转的页面还是在 Index 根路由下，同时又没有匹配到 Index 单页中对应的路由。这时候我们服务器需要做一次重定向，将下方路由指向对应的 html 文件即可：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/vue/page1 -> /vue/page1.html\n/vue/page2 -> /vue/page2.html\n\n")])])]),a("p",[e._v("在 vue.config.js 中，我们需要对 devServer 进行配置，添加 "),a("code",[e._v("historyApiFallback")]),e._v(" 配置项，该配置项主要用于解决 HTML5 History API 产生的问题，比如其 rewrites 选项用于重写路由：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* vue.config.js */\n\nlet baseUrl = '/vue/';\n\nmodule.exports = {\n    ...\n    \n    devServer: {\n        historyApiFallback: {\n            rewrites: [\n                { from: new RegExp(baseUrl + 'page1'), to: baseUrl + 'page1.html' },\n                { from: new RegExp(baseUrl + 'page2'), to: baseUrl + 'page2.html' },\n            ]\n        }\n    }\n    \n    ...\n}\n\n")])])]),a("p",[e._v("上方我们通过 rewrites 匹配正则表达式的方式将 "),a("code",[e._v("/vue/page1")]),e._v(" 这样的路由替换为访问服务器下正确 html 文件的形式，如此不同单页间便可以进行正确跳转和访问了。最后需要注意的是如果你的应用发布到正式服务器上，你同样需要让服务器或者中间层作出合理解析，参考："),a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML5 History 模式 # 后端配置例子"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("而更多关于 historyApiFallback 的信息可以访问："),a("a",{attrs:{href:"https://github.com/bripkens/connect-history-api-fallback",target:"_blank",rel:"noopener noreferrer"}},[e._v("connect-history-api-fallback"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"模板配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板配置"}},[e._v("#")]),e._v(" 模板配置")]),e._v(" "),a("p",[e._v("上篇文章我们已经介绍了关于多模板的读取和配置，在配置 html-webpack-plugin 的时候我们提到了自定义配置，这里我将结合模板渲染的功能来进行统一介绍。")]),e._v(" "),a("h3",{attrs:{id:"_1-模板渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-模板渲染"}},[e._v("#")]),e._v(" 1. 模板渲染")]),e._v(" "),a("p",[e._v("这里所说的模板渲染是在我们的 html 模板文件中使用 html-webpack-plugin 提供的 "),a("a",{attrs:{href:"https://github.com/jaketrent/html-webpack-template/blob/86f285d5c790a6c15263f5cc50fd666d51f974fd/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("default template"),a("OutboundLink")],1),e._v(" 语法进行模板编写，比如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width,initial-scale=1.0">\n    <title>模板</title>\n    <% for (var chunk in htmlWebpackPlugin.files.css) { %>\n        <% if(htmlWebpackPlugin.files.css[chunk]) {%>\n            <link href="<%= htmlWebpackPlugin.files.css[chunk] %>" rel="stylesheet" />\n        <%}%>\n    <% } %>\n  </head>\n  <body>\n    <div id="app"></div>\n    \x3c!-- built files will be auto injected --\x3e\n\n    <% for (var chunk in htmlWebpackPlugin.files.js) { %>\n        <% if(htmlWebpackPlugin.files.js[chunk]) {%>\n            <script type="text/javascript" src="<%= htmlWebpackPlugin.files.js[chunk] %>"><\/script>\n        <%}%>\n    <% } %>\n  </body>\n</html>\n\n')])])]),a("p",[e._v("以上我们使用模板语法手动获取并遍历 htmlWebpackPlugin 打包后的文件并生成到模板中，其中的 "),a("code",[e._v("htmlWebpackPlugin")]),e._v(" 变量是模板提供的可访问变量，其有以下特定数据：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"htmlWebpackPlugin": {\n    "files": {\n        "css": [ "main.css" ],\n        "js": [ "assets/head_bundle.js", "assets/main_bundle.js"],\n        "chunks": {\n            "head": {\n                "entry": "assets/head_bundle.js",\n                "css": [ "main.css" ]\n            },\n            "main": {\n                "entry": "assets/main_bundle.js",\n                "css": []\n            },\n        }\n    }\n}\n\n')])])]),a("p",[e._v("我们通过 "),a("code",[e._v("htmlWebpackPlugin.files")]),e._v(" 可以获取打包输出的 js 及 css 文件路径，包括入口文件路径等。")]),e._v(" "),a("p",[e._v("需要注意的是如果你在模板中编写了插入对应 js 及 css 的语法，你需要设置 "),a("code",[e._v("inject")]),e._v(" 的值为 false 来关闭资源的自动注入：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* utils.js */\n...\n\nlet conf = {\n    entry: filePath, // page 的入口\n    template: filePath, // 模板路径\n    filename: filename + '.html', // 生成 html 的文件名\n    chunks: ['manifest', 'vendor',  filename],\n    inject: false, // 关闭资源自动注入\n}\n\n...\n\n")])])]),a("p",[e._v("否则在页面会引入两次资源，如下图所示：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/3/164fb7b172500b55?w=560&h=512&f=png&s=135647",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_2-自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-自定义配置"}},[e._v("#")]),e._v(" 2. 自定义配置")]),e._v(" "),a("p",[e._v("在模板渲染中，我们只能够使用 htmlWebpackPlugin 内部的一些属性和方法来进行模板的定制化开发，那么如果遇到需要根据不同环境来引入不同资源，同时不同模板间的配置还可能不一样的需求情况的话，我们使用自定义配置会比较方便。比如我们需要在生产环境模板中引入第三方统计脚本：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/* vue.config.js */\n\nmodule.exports = {\n    ...\n    \n    pages: utils.setPages({\n        addScript() {\n            if (process.env.NODE_ENV === 'production') {\n                return `\n                    <script src=\"https://s95.cnzz.com/z_stat.php?id=xxx&web_id=xxx\" language=\"JavaScript\"><\/script>\n                `\n            }\n\n            return ''\n        }\n    }),\n    \n    ...\n}\n\n")])])]),a("p",[e._v("然后在页面模板中通过 "),a("code",[e._v("htmlWebpackPlugin.options")]),e._v(" 获取自定义配置对象并进行输出：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<% if(htmlWebpackPlugin.options.addScript){ %>\n    <%= htmlWebpackPlugin.options.addScript() %>\n<%}%>\n\n")])])]),a("p",[e._v("同时你也可以针对个别模板进行配置，比如我想只在 Index 单页中添加统计脚本，在 Page1 单页中添加其他脚本，那么你可以给 addScript 传入标识符来进行判断输出，比如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<% if(htmlWebpackPlugin.options.addScript){ %>\n    <%= htmlWebpackPlugin.options.addScript('index') %>\n<%}%>\n\n")])])]),a("p",[e._v("同时为 addScript 方法添加参数 from：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("addScript(from) {\n    if (process.env.NODE_ENV === 'production') {\n        let url = \"https://xxx\";\n    \n        if (from === 'index') {\n            url = \"https://s95.cnzz.com/z_stat.php?id=xxx&web_id=xxx\";\n        }\n        \n        return `\n            <script src=${url} language=\"JavaScript\"><\/script>\n        `\n    }\n\n    return ''\n}\n\n")])])]),a("p",[e._v("这样我们就完成了自定义配置中的模板渲染功能。当然根据实际项目需求你的自定义配置项可能会更加复杂和灵活。")]),e._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),a("p",[e._v("通过 2 小节的学习，相信大家对 Vue 多页应用的构建已经有所了解。本文在第 1 节的基础上重点介绍了多页路由及模板的配置，阐述了其与单页应用的不同之处，同时针对模板自定义配置的使用场景给出了简单的实例，希望大家在了解的基础上将下方的实例代码作为参考，进行相应的实战。")]),e._v(" "),a("p",[e._v("本案例代码地址："),a("a",{attrs:{href:"https://github.com/luozhihao/vue-project-code/tree/master/multi-page-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("multi-page-project"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"思考-作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考-作业"}},[e._v("#")]),e._v(" 思考 & 作业")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("多页应用中各自的 "),a("code",[e._v("Vuex Store")]),e._v(" 信息能实现共享吗？")])]),e._v(" "),a("li",[a("p",[e._v("html-webpack-plugin 如何解析非 .html 的模板，比如 .hbs，应该如何配置？")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);