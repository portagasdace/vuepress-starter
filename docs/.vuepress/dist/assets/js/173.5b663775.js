(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{529:function(a,t,e){"use strict";e.r(t);var v=e(42),r=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"第-1-节-基于-javascript-的数据应用开发概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-1-节-基于-javascript-的数据应用开发概述"}},[a._v("#")]),a._v(" 第 1 节 基于 JavaScript 的数据应用开发概述")]),a._v(" "),e("p",[a._v("这本小册的主要目的是让前端工程师和希望能快速实现动态数据应用的数据工作者，学习如何使用 JavaScript 和前端技能来开发具有可用性的数据应用。")]),a._v(" "),e("h2",{attrs:{id:"_1-1-你会学到什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-你会学到什么"}},[a._v("#")]),a._v(" 1.1 你会学到什么？")]),a._v(" "),e("p",[a._v("基于前端技术来开发一个复杂的动态数据应用，需要用到最基本的 JavaScript 常量变量控制、JavaScript 基本数据处理方法、可视化工具、动态数据控制方法等。所以本小册会先从最基本的 JavaScript 数据类型、处理方法讲起，到较为复杂的数据结构，再到逐渐复杂的数据可视化，最后我们将重新定义数据处理，使用前端技能让你的可视化数据应用变得更加灵活。")]),a._v(" "),e("p",[a._v("总体来说，你将会从本小册中学到以下技能点。")]),a._v(" "),e("ul",[e("li",[a._v("JavaScript 对基本数据类型的操作")]),a._v(" "),e("li",[a._v("JavaScript 对复杂数据结构的操作")]),a._v(" "),e("li",[a._v("复杂数据结构的处理技巧")]),a._v(" "),e("li",[a._v("基于 ECharts 可视化工具库对简单数据和复杂数据进行图表绘制")]),a._v(" "),e("li",[a._v("结合 Vue.js 为数据流添加动态处理功能")])]),a._v(" "),e("p",[a._v("对于有 JavaScript 基础的读者来说，可能前面数节你会觉得稍稍有些无趣，但笔者还是希望你能认真地跟着一起学习，因为这些内容可能会改变你对 JavaScript 数据处理的一些既有印象。")]),a._v(" "),e("h2",{attrs:{id:"_1-2-在一切开始之前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-在一切开始之前"}},[a._v("#")]),a._v(" 1.2 在一切开始之前")]),a._v(" "),e("p",[a._v("本小册的全部知识都建立在 JavaScript 语言之上，所以在学习本小册之前，你首先需要准备好 JavaScript 开发环境。虽然说在进行数据可视化和动态数据应用开发的时候，我们必须使用浏览器和网页作为 JavaScript 的运行载体，但是在这之前你也可以选择 Node.js 作为学习 JavaScript 开发的平台。")]),a._v(" "),e("h3",{attrs:{id:"_1-2-1-codepen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-codepen"}},[a._v("#")]),a._v(" 1.2.1 CodePen")]),a._v(" "),e("p",[a._v("当然你也可以选择一些基于网页的即时运行 JavaScript 结果工具来进行学习，这里笔者推荐使用 "),e("a",{attrs:{href:"https://codepen.io/pen/?editors=0012",target:"_blank",rel:"noopener noreferrer"}},[a._v("CodePen"),e("OutboundLink")],1),a._v("。你可以直接在这上面编辑 JavaScript 代码，并实时查看运行结果，也可以将其分享给你的小伙伴。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/7/162a02129a549543?w=2120&h=1422&f=jpeg&s=145011",alt:"CodePen"}})]),a._v(" "),e("p",[a._v("在 CodePen 中可以添加一些第三方 JavaScript 库，点击右上角的 “Settings” 按钮，选择 “JavaScript” 标签页，在下方的 “Add External Scripts/Pens” 你就可以使用第三方 JavaScript 库的地址进行引入。CodePen 也提供了一些比较常用的库以供便捷地引入，比如在本小册中将会使用到的 Lodash 工具库。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/7/162a0212995c3077?w=1436&h=1440&f=jpeg&s=229649",alt:"Xnip2018-03-73_08-48-19"}})]),a._v(" "),e("p",[a._v("当然 CodePen 并不只能运行 JavaScript，它也允许我们直接在上面进行 HTML 和 CSS 的开发，还能实时看到所生成网页的结果。这在我们学习如何进行数据可视化时同样可以派上用场。")]),a._v(" "),e("h3",{attrs:{id:"_1-2-2-单页应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-单页应用"}},[a._v("#")]),a._v(" 1.2.2 单页应用")]),a._v(" "),e("p",[a._v("如果你觉得需要一步到位到进行页面应用开发，那么请跟着笔者一步一步准备你的开发环境。")]),a._v(" "),e("p",[a._v("首先请选择一个你最喜欢的编辑器或 IDE，创建一个空的文件夹并将其命名为 "),e("code",[a._v("js-learning")]),a._v("。在这个文件夹中创建一个 HTML 文件并将其命名为 "),e("code",[a._v("index.html")]),a._v("。将以下内容写入到 "),e("code",[a._v("index.html")]),a._v(" 文件中。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Build a data app</title>\n</head>\n<body>\n  <div id="app"></div>\n  <script src="main.js"><\/script>\n</body>\n</html>\n\n')])])]),e("p",[a._v("然后在这个文件夹中再创建一个 "),e("code",[a._v("main.js")]),a._v(" 文件并输入以下内容。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log('Hello World')\n\n")])])]),e("p",[a._v("保存后，双击 "),e("code",[a._v("index.html")]),a._v(" 并使用你最喜欢的浏览器打开（笔者推荐使用 Google Chrome），按下键盘上的 F12 功能键，在弹出的开发者工具中你就能看到刚才在 "),e("code",[a._v("main.js")]),a._v(" 文件中输出的 "),e("code",[a._v("Hello World")]),a._v("。")]),a._v(" "),e("p",[a._v("此后在本小册的学习中，你就可以通过修改 "),e("code",[a._v("main.js")]),a._v(" 中的代码来动手自己尝试了。")]),a._v(" "),e("h2",{attrs:{id:"_1-3-还是在一切开始之前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-还是在一切开始之前"}},[a._v("#")]),a._v(" 1.3 还是在一切开始之前")]),a._v(" "),e("p",[a._v("本小册的内容比较多且非常需要你一步一步跟着动手尝试，所以笔者建议你最好在空闲时间进行学习，并随时准备好开发环境，而不是单纯地阅读本小册。")]),a._v(" "),e("p",[e("strong",[a._v("Learn by doing，你将会事半功倍。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);