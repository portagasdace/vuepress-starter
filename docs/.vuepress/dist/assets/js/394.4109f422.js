(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{749:function(t,e,v){"use strict";v.r(e);var a=v(42),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"vue-js-运行机制全局概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-运行机制全局概览"}},[t._v("#")]),t._v(" Vue.js 运行机制全局概览")]),t._v(" "),v("h2",{attrs:{id:"全局概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全局概览"}},[t._v("#")]),t._v(" 全局概览")]),t._v(" "),v("p",[t._v("这一节笔者将为大家介绍一下 Vue.js 内部的整个流程，希望能让大家对全局有一个整体的印象，然后我们再来逐个模块进行讲解。从来没有了解过 Vue.js 实现的同学可能会对一些内容感到疑惑，这是很正常的，这一节的目的主要是为了让大家对整个流程有一个大概的认识，算是一个概览预备的过程，当把整本小册认真读完以后，再来阅读这一节，相信会有收获的。")]),t._v(" "),v("p",[t._v("首先我们来看一下笔者画的内部流程图。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606e7eaa2a664e8?w=1752&h=1216&f=png&s=190985",alt:""}})]),t._v(" "),v("p",[t._v("大家第一次看到这个图一定是一头雾水的，没有关系，我们来逐个讲一下这些模块的作用以及调用关系。相信讲完之后大家对Vue.js内部运行机制会有一个大概的认识。")]),t._v(" "),v("h2",{attrs:{id:"初始化及挂载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化及挂载"}},[t._v("#")]),t._v(" 初始化及挂载")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606e8abbababbe6?w=828&h=336&f=png&s=24213",alt:""}})]),t._v(" "),v("p",[t._v("在 "),v("code",[t._v("new Vue()")]),t._v(" 之后。 Vue 会调用 "),v("code",[t._v("_init")]),t._v(" 函数进行初始化，也就是这里的 "),v("code",[t._v("init")]),t._v(" 过程，它会初始化生命周期、事件、 props、 methods、 data、 computed 与 watch 等。其中最重要的是通过 "),v("code",[t._v("Object.defineProperty")]),t._v(" 设置 "),v("code",[t._v("setter")]),t._v(" 与 "),v("code",[t._v("getter")]),t._v(" 函数，用来实现「"),v("strong",[t._v("响应式")]),t._v("」以及「"),v("strong",[t._v("依赖收集")]),t._v("」，后面会详细讲到，这里只要有一个印象即可。")]),t._v(" "),v("p",[t._v("初始化之后调用 "),v("code",[t._v("$mount")]),t._v(" 会挂载组件，如果是运行时编译，即不存在 render function 但是存在 template 的情况，需要进行「"),v("strong",[t._v("编译")]),t._v("」步骤。")]),t._v(" "),v("h2",{attrs:{id:"编译"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),v("p",[t._v("compile编译可以分成 "),v("code",[t._v("parse")]),t._v("、"),v("code",[t._v("optimize")]),t._v(" 与 "),v("code",[t._v("generate")]),t._v(" 三个阶段，最终需要得到 render function。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606ec3d306ab28f?w=824&h=496&f=png&s=37271",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"parse"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#parse"}},[t._v("#")]),t._v(" parse")]),t._v(" "),v("p",[v("code",[t._v("parse")]),t._v(" 会用正则等方式解析 template 模板中的指令、class、style等数据，形成AST。")]),t._v(" "),v("h3",{attrs:{id:"optimize"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#optimize"}},[t._v("#")]),t._v(" optimize")]),t._v(" "),v("p",[v("code",[t._v("optimize")]),t._v(" 的主要作用是标记 static 静态节点，这是 Vue 在编译过程中的一处优化，后面当 "),v("code",[t._v("update")]),t._v(" 更新界面时，会有一个 "),v("code",[t._v("patch")]),t._v(" 的过程， diff 算法会直接跳过静态节点，从而减少了比较的过程，优化了 "),v("code",[t._v("patch")]),t._v(" 的性能。")]),t._v(" "),v("h3",{attrs:{id:"generate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[t._v("#")]),t._v(" generate")]),t._v(" "),v("p",[v("code",[t._v("generate")]),t._v(" 是将 AST 转化成 render function 字符串的过程，得到结果是 render 的字符串以及 staticRenderFns 字符串。")]),t._v(" "),v("p",[t._v("在经历过 "),v("code",[t._v("parse")]),t._v("、"),v("code",[t._v("optimize")]),t._v(" 与 "),v("code",[t._v("generate")]),t._v(" 这三个阶段以后，组件中就会存在渲染 VNode 所需的 render function 了。")]),t._v(" "),v("h2",{attrs:{id:"响应式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应式"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),v("p",[t._v("接下来也就是 Vue.js 响应式核心部分。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606edad5ca9e23d?w=1460&h=728&f=png&s=131217",alt:""}})]),t._v(" "),v("p",[t._v("这里的 "),v("code",[t._v("getter")]),t._v(" 跟 "),v("code",[t._v("setter")]),t._v(" 已经在之前介绍过了，在 "),v("code",[t._v("init")]),t._v(" 的时候通过 "),v("code",[t._v("Object.defineProperty")]),t._v(" 进行了绑定，它使得当被设置的对象被读取的时候会执行 "),v("code",[t._v("getter")]),t._v(" 函数，而在当被赋值的时候会执行 "),v("code",[t._v("setter")]),t._v(" 函数。")]),t._v(" "),v("p",[t._v("当 render function 被渲染的时候，因为会读取所需对象的值，所以会触发 "),v("code",[t._v("getter")]),t._v(" 函数进行「"),v("strong",[t._v("依赖收集")]),t._v("」，「"),v("strong",[t._v("依赖收集")]),t._v("」的目的是将观察者 Watcher 对象存放到当前闭包中的订阅者 Dep 的 subs 中。形成如下所示的这样一个关系。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/21/160770b2a77e084e?w=520&h=245&f=png&s=14372",alt:""}})]),t._v(" "),v("p",[t._v("在修改对象的值的时候，会触发对应的 "),v("code",[t._v("setter")]),t._v("， "),v("code",[t._v("setter")]),t._v(" 通知之前「"),v("strong",[t._v("依赖收集")]),t._v("」得到的 Dep 中的每一个 Watcher，告诉它们自己的值改变了，需要重新渲染视图。这时候这些 Watcher 就会开始调用 "),v("code",[t._v("update")]),t._v(" 来更新视图，当然这中间还有一个 "),v("code",[t._v("patch")]),t._v(" 的过程以及使用队列来异步更新的策略，这个我们后面再讲。")]),t._v(" "),v("h2",{attrs:{id:"virtual-dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),v("p",[t._v("我们知道，render function 会被转化成 VNode 节点。Virtual DOM 其实就是一棵以 JavaScript 对象（ VNode 节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实 DOM 的抽象。最终可以通过一系列操作使这棵树映射到真实环境上。由于 Virtual DOM 是以 JavaScript 对象为基础而不依赖真实平台环境，所以使它具有了跨平台的能力，比如说浏览器平台、Weex、Node 等。")]),t._v(" "),v("p",[t._v("比如说下面这样一个例子：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("{\n    tag: 'div',                 /*说明这是一个div标签*/\n    children: [                 /*存放该标签的子节点*/\n        {\n            tag: 'a',           /*说明这是一个a标签*/\n            text: 'click me'    /*标签的内容*/\n        }\n    ]\n}\n\n")])])]),v("p",[t._v("渲染后可以得到")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("<div>\n    <a>click me</a>\n</div>\n\n")])])]),v("p",[t._v("这只是一个简单的例子，实际上的节点有更多的属性来标志节点，比如 isStatic （代表是否为静态节点）、 isComment （代表是否为注释节点）等。")]),t._v(" "),v("h2",{attrs:{id:"更新视图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新视图"}},[t._v("#")]),t._v(" 更新视图")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/21/1607715c316d4922?w=731&h=339&f=png&s=38351",alt:""}})]),t._v(" "),v("p",[t._v("前面我们说到，在修改一个对象值的时候，会通过 "),v("code",[t._v("setter -> Watcher -> update")]),t._v(" 的流程来修改对应的视图，那么最终是如何更新视图的呢？")]),t._v(" "),v("p",[t._v("当数据变化后，执行 render function 就可以得到一个新的 VNode 节点，我们如果想要得到新的视图，最简单粗暴的方法就是直接解析这个新的 VNode 节点，然后用 "),v("code",[t._v("innerHTML")]),t._v(" 直接全部渲染到真实 DOM 中。但是其实我们只对其中的一小块内容进行了修改，这样做似乎有些「"),v("strong",[t._v("浪费")]),t._v("」。")]),t._v(" "),v("p",[t._v("那么我们为什么不能只修改那些「改变了的地方」呢？这个时候就要介绍我们的「"),v("strong",[v("code",[t._v("patch")])]),t._v("」了。我们会将新的 VNode 与旧的 VNode 一起传入 "),v("code",[t._v("patch")]),t._v(" 进行比较，经过 diff 算法得出它们的「"),v("strong",[t._v("差异")]),t._v("」。最后我们只需要将这些「"),v("strong",[t._v("差异")]),t._v("」的对应 DOM 进行修改即可。")]),t._v(" "),v("h2",{attrs:{id:"再看全局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#再看全局"}},[t._v("#")]),t._v(" 再看全局")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606e7eaa2a664e8?w=1752&h=1216&f=png&s=190985",alt:""}})]),t._v(" "),v("p",[t._v("回过头再来看看这张图，是不是大脑中已经有一个大概的脉络了呢？")]),t._v(" "),v("p",[v("strong",[t._v("那么，让我们继续学习每一个模块吧!")])])])}),[],!1,null,null,null);e.default=_.exports}}]);