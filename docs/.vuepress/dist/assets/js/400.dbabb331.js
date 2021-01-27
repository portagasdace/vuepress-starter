(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{755:function(e,t,c){"use strict";c.r(t);var a=c(42),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("h1",{attrs:{id:"批量异步更新策略及-nexttick-原理"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#批量异步更新策略及-nexttick-原理"}},[e._v("#")]),e._v(" 批量异步更新策略及 nextTick 原理")]),e._v(" "),c("h2",{attrs:{id:"为什么要异步更新"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#为什么要异步更新"}},[e._v("#")]),e._v(" 为什么要异步更新")]),e._v(" "),c("p",[e._v("通过前面几个章节我们介绍，相信大家已经明白了 Vue.js 是如何在我们修改 "),c("code",[e._v("data")]),e._v(" 中的数据后修改视图了。简单回顾一下，这里面其实就是一个“"),c("code",[e._v("setter -> Dep -> Watcher -> patch -> 视图")]),e._v("”的过程。")]),e._v(" "),c("p",[e._v("假设我们有如下这么一种情况。")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v('<template>\n  <div>\n    <div>{{number}}</div>\n    <div @click="handleClick">click</div>\n  </div>\n</template>\n\n')])])]),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("export default {\n    data () {\n        return {\n            number: 0\n        };\n    },\n    methods: {\n        handleClick () {\n            for(let i = 0; i < 1000; i++) {\n                this.number++;\n            }\n        }\n    }\n}\n\n")])])]),c("p",[e._v("当我们按下 click 按钮的时候，"),c("code",[e._v("number")]),e._v(" 会被循环增加1000次。")]),e._v(" "),c("p",[e._v("那么按照之前的理解，每次 "),c("code",[e._v("number")]),e._v(" 被 +1 的时候，都会触发 "),c("code",[e._v("number")]),e._v(" 的 "),c("code",[e._v("setter")]),e._v(" 方法，从而根据上面的流程一直跑下来最后修改真实 DOM。那么在这个过程中，DOM 会被更新 1000 次！太可怕了。")]),e._v(" "),c("p",[e._v("Vue.js 肯定不会以如此低效的方法来处理。Vue.js在默认情况下，每次触发某个数据的 "),c("code",[e._v("setter")]),e._v(" 方法后，对应的 "),c("code",[e._v("Watcher")]),e._v(" 对象其实会被 "),c("code",[e._v("push")]),e._v(" 进一个队列 "),c("code",[e._v("queue")]),e._v(" 中，在下一个 tick 的时候将这个队列 "),c("code",[e._v("queue")]),e._v(" 全部拿出来 "),c("code",[e._v("run")]),e._v("（ "),c("code",[e._v("Watcher")]),e._v(" 对象的一个方法，用来触发 "),c("code",[e._v("patch")]),e._v(" 操作） 一遍。")]),e._v(" "),c("p",[c("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/24/161285d6b2d9e6bd?w=350&h=404&f=png&s=16724",alt:""}})]),e._v(" "),c("p",[e._v("那么什么是下一个 tick 呢？")]),e._v(" "),c("h2",{attrs:{id:"nexttick"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[e._v("#")]),e._v(" nextTick")]),e._v(" "),c("p",[e._v("Vue.js 实现了一个 "),c("code",[e._v("nextTick")]),e._v(" 函数，传入一个 "),c("code",[e._v("cb")]),e._v(" ，这个 "),c("code",[e._v("cb")]),e._v(" 会被存储到一个队列中，在下一个 tick 时触发队列中的所有 "),c("code",[e._v("cb")]),e._v(" 事件。")]),e._v(" "),c("p",[e._v("因为目前浏览器平台并没有实现 "),c("code",[e._v("nextTick")]),e._v(" 方法，所以 Vue.js 源码中分别用 "),c("code",[e._v("Promise")]),e._v("、"),c("code",[e._v("setTimeout")]),e._v("、"),c("code",[e._v("setImmediate")]),e._v(" 等方式在 microtask（或是task）中创建一个事件，目的是在当前调用栈执行完毕以后（不一定立即）才会去执行这个事件。")]),e._v(" "),c("p",[e._v("笔者用 "),c("code",[e._v("setTimeout")]),e._v(" 来模拟这个方法，当然，真实的源码中会更加复杂，笔者在小册中只讲原理，有兴趣了解源码中 "),c("code",[e._v("nextTick")]),e._v(" 的具体实现的同学可以参考"),c("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js#L90",target:"_blank",rel:"noopener noreferrer"}},[e._v("next-tick"),c("OutboundLink")],1),e._v("。")]),e._v(" "),c("p",[e._v("首先定义一个 "),c("code",[e._v("callbacks")]),e._v(" 数组用来存储 "),c("code",[e._v("nextTick")]),e._v("，在下一个 tick 处理这些回调函数之前，所有的 "),c("code",[e._v("cb")]),e._v(" 都会被存在这个 "),c("code",[e._v("callbacks")]),e._v(" 数组中。"),c("code",[e._v("pending")]),e._v(" 是一个标记位，代表一个等待的状态。")]),e._v(" "),c("p",[c("code",[e._v("setTimeout")]),e._v(" 会在 task 中创建一个事件 "),c("code",[e._v("flushCallbacks")]),e._v(" ，"),c("code",[e._v("flushCallbacks")]),e._v(" 则会在执行时将 "),c("code",[e._v("callbacks")]),e._v(" 中的所有 "),c("code",[e._v("cb")]),e._v(" 依次执行。")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("let callbacks = [];\nlet pending = false;\n\nfunction nextTick (cb) {\n    callbacks.push(cb);\n\n    if (!pending) {\n        pending = true;\n        setTimeout(flushCallbacks, 0);\n    }\n}\n\nfunction flushCallbacks () {\n    pending = false;\n    const copies = callbacks.slice(0);\n    callbacks.length = 0;\n    for (let i = 0; i < copies.length; i++) {\n        copies[i]();\n    }\n}\n\n")])])]),c("h2",{attrs:{id:"再写-watcher"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#再写-watcher"}},[e._v("#")]),e._v(" 再写 Watcher")]),e._v(" "),c("p",[e._v("第一个例子中，当我们将 "),c("code",[e._v("number")]),e._v(" 增加 1000 次时，先将对应的 "),c("code",[e._v("Watcher")]),e._v(" 对象给 "),c("code",[e._v("push")]),e._v(" 进一个队列 "),c("code",[e._v("queue")]),e._v(" 中去，等下一个 tick 的时候再去执行，这样做是对的。但是有没有发现，另一个问题出现了？")]),e._v(" "),c("p",[e._v("因为 "),c("code",[e._v("number")]),e._v(" 执行 ++ 操作以后对应的 "),c("code",[e._v("Watcher")]),e._v(" 对象都是同一个，我们并不需要在下一个 tick 的时候执行 1000 个同样的 "),c("code",[e._v("Watcher")]),e._v(" 对象去修改界面，而是只需要执行一个 "),c("code",[e._v("Watcher")]),e._v(" 对象，使其将界面上的 0 变成 1000 即可。")]),e._v(" "),c("p",[e._v("那么，我们就需要执行一个过滤的操作，同一个的 "),c("code",[e._v("Watcher")]),e._v(" 在同一个 tick 的时候应该只被执行一次，也就是说队列 "),c("code",[e._v("queue")]),e._v(" 中不应该出现重复的 "),c("code",[e._v("Watcher")]),e._v(" 对象。")]),e._v(" "),c("p",[e._v("那么我们给 "),c("code",[e._v("Watcher")]),e._v(" 对象起个名字吧～用 "),c("code",[e._v("id")]),e._v(" 来标记每一个 "),c("code",[e._v("Watcher")]),e._v(" 对象，让他们看起来“不太一样”。")]),e._v(" "),c("p",[e._v("实现 "),c("code",[e._v("update")]),e._v(" 方法，在修改数据后由 "),c("code",[e._v("Dep")]),e._v(" 来调用， 而 "),c("code",[e._v("run")]),e._v(" 方法才是真正的触发 "),c("code",[e._v("patch")]),e._v(" 更新视图的方法。")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("let uid = 0;\n\nclass Watcher {\n    constructor () {\n        this.id = ++uid;\n    }\n\n    update () {\n        console.log('watch' + this.id + ' update');\n        queueWatcher(this);\n    }\n\n    run () {\n        console.log('watch' + this.id + '视图更新啦～');\n    }\n}\n\n")])])]),c("h2",{attrs:{id:"queuewatcher"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#queuewatcher"}},[e._v("#")]),e._v(" queueWatcher")]),e._v(" "),c("p",[e._v("不知道大家注意到了没有？笔者已经将 "),c("code",[e._v("Watcher")]),e._v(" 的 "),c("code",[e._v("update")]),e._v(" 中的实现改成了")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("queueWatcher(this);\n\n")])])]),c("p",[e._v("将 "),c("code",[e._v("Watcher")]),e._v(" 对象自身传递给 "),c("code",[e._v("queueWatcher")]),e._v(" 方法。")]),e._v(" "),c("p",[e._v("我们来实现一下 "),c("code",[e._v("queueWatcher")]),e._v(" 方法。")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("let has = {};\nlet queue = [];\nlet waiting = false;\n\nfunction queueWatcher(watcher) {\n    const id = watcher.id;\n    if (has[id] == null) {\n        has[id] = true;\n        queue.push(watcher);\n\n        if (!waiting) {\n            waiting = true;\n            nextTick(flushSchedulerQueue);\n        }\n    }\n}\n\n")])])]),c("p",[e._v("我们使用一个叫做 "),c("code",[e._v("has")]),e._v(" 的 map，里面存放 id -> true ( false ) 的形式，用来判断是否已经存在相同的 "),c("code",[e._v("Watcher")]),e._v(" 对象 （这样比每次都去遍历 "),c("code",[e._v("queue")]),e._v(" 效率上会高很多）。")]),e._v(" "),c("p",[e._v("如果目前队列 "),c("code",[e._v("queue")]),e._v(" 中还没有这个 "),c("code",[e._v("Watcher")]),e._v(" 对象，则该对象会被 "),c("code",[e._v("push")]),e._v(" 进队列 "),c("code",[e._v("queue")]),e._v(" 中去。")]),e._v(" "),c("p",[c("code",[e._v("waiting")]),e._v(" 是一个标记位，标记是否已经向 "),c("code",[e._v("nextTick")]),e._v(" 传递了 "),c("code",[e._v("flushSchedulerQueue")]),e._v(" 方法，在下一个 tick 的时候执行 "),c("code",[e._v("flushSchedulerQueue")]),e._v(" 方法来 flush 队列 "),c("code",[e._v("queue")]),e._v("，执行它里面的所有 "),c("code",[e._v("Watcher")]),e._v(" 对象的 "),c("code",[e._v("run")]),e._v(" 方法。")]),e._v(" "),c("h2",{attrs:{id:"flushschedulerqueue"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#flushschedulerqueue"}},[e._v("#")]),e._v(" flushSchedulerQueue")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("function flushSchedulerQueue () {\n    let watcher, id;\n\n    for (index = 0; index < queue.length; index++) {\n        watcher = queue[index];\n        id = watcher.id;\n        has[id] = null;\n        watcher.run();\n    }\n\n    waiting  = false;\n}\n\n")])])]),c("h2",{attrs:{id:"举个例子"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#举个例子"}},[e._v("#")]),e._v(" 举个例子")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("let watch1 = new Watcher();\nlet watch2 = new Watcher();\n\nwatch1.update();\nwatch1.update();\nwatch2.update();\n\n")])])]),c("p",[e._v("我们现在 new 了两个 "),c("code",[e._v("Watcher")]),e._v(" 对象，因为修改了 "),c("code",[e._v("data")]),e._v(" 的数据，所以我们模拟触发了两次 "),c("code",[e._v("watch1")]),e._v(" 的 "),c("code",[e._v("update")]),e._v(" 以及 一次 "),c("code",[e._v("watch2")]),e._v(" 的 "),c("code",[e._v("update")]),e._v("。")]),e._v(" "),c("p",[e._v("假设没有批量异步更新策略的话，理论上应该执行 "),c("code",[e._v("Watcher")]),e._v(" 对象的 "),c("code",[e._v("run")]),e._v("，那么会打印。")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("watch1 update\nwatch1视图更新啦～\nwatch1 update\nwatch1视图更新啦～\nwatch2 update\nwatch2视图更新啦～\n\n")])])]),c("p",[e._v("实际上则执行")]),e._v(" "),c("div",{staticClass:"language- extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[e._v("watch1 update\nwatch1 update\nwatch2 update\nwatch1视图更新啦～\nwatch2视图更新啦～\n\n")])])]),c("p",[e._v("这就是异步更新策略的效果，相同的 "),c("code",[e._v("Watcher")]),e._v(" 对象会在这个过程中被剔除，在下一个 tick 的时候去更新视图，从而达到对我们第一个例子的优化。")]),e._v(" "),c("p",[e._v("我们再回过头聊一下第一个例子， "),c("code",[e._v("number")]),e._v(" 会被不停地进行 "),c("code",[e._v("++")]),e._v(" 操作，不断地触发它对应的 "),c("code",[e._v("Dep")]),e._v(" 中的 "),c("code",[e._v("Watcher")]),e._v(" 对象的 "),c("code",[e._v("update")]),e._v(" 方法。然后最终 "),c("code",[e._v("queue")]),e._v(" 中因为对相同 "),c("code",[e._v("id")]),e._v(" 的 "),c("code",[e._v("Watcher")]),e._v(" 对象进行了筛选，从而 "),c("code",[e._v("queue")]),e._v(" 中实际上只会存在一个 "),c("code",[e._v("number")]),e._v(" 对应的 "),c("code",[e._v("Watcher")]),e._v(" 对象。在下一个 tick 的时候（此时 "),c("code",[e._v("number")]),e._v(" 已经变成了 1000），触发 "),c("code",[e._v("Watcher")]),e._v(" 对象的 "),c("code",[e._v("run")]),e._v(" 方法来更新视图，将视图上的 "),c("code",[e._v("number")]),e._v(" 从 0 直接变成 1000。")]),e._v(" "),c("p",[e._v("到这里，批量异步更新策略及 nextTick 原理已经讲完了，接下来让我们学习一下 Vuex 状态管理的工作原理。")]),e._v(" "),c("p",[e._v("注：本节代码参考"),c("a",{attrs:{href:"https://github.com/answershuto/VueDemo/blob/master/%E3%80%8A%E6%89%B9%E9%87%8F%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E7%AD%96%E7%95%A5%E5%8F%8A%20nextTick%20%E5%8E%9F%E7%90%86%E3%80%8B.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("《批量异步更新策略及 nextTick 原理》"),c("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);t.default=v.exports}}]);