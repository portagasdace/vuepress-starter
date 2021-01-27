(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{501:function(e,n,t){"use strict";t.r(n);var a=t(42),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"温习异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#温习异步"}},[e._v("#")]),e._v(" 温习异步")]),e._v(" "),t("p",[e._v("我们知道 "),t("code",[e._v("Javascript")]),e._v(" 语言的执行环境是 "),t("strong",[e._v("单线程")]),e._v("。也就是指一次只能完成一件任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务。")]),e._v(" "),t("p",[e._v("在开始之前请大家思考下，我们在前面的环节中大量使用了 async/await，那么它究竟是什么？")]),e._v(" "),t("h2",{attrs:{id:"什么是异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是异步"}},[e._v("#")]),e._v(" 什么是异步？")]),e._v(" "),t("p",[e._v("异步指的是每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。这种模式虽然实现起来比较简单，执行环境相对单纯，但是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段 Javascript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。")]),e._v(" "),t("h2",{attrs:{id:"回调实现异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回调实现异步"}},[e._v("#")]),e._v(" 回调实现异步")]),e._v(" "),t("p",[e._v("小明在看电视，但他肚子饿了。同步的做法是先吃饭后看电视。异步的做法是一边吃饭一边看电视。实现异步的本质是回调，我们使用 "),t("code",[e._v("nodejs")]),e._v(" 的 "),t("code",[e._v("fs")]),e._v(" 这个 "),t("code",[e._v("API")]),e._v(" 接口来看一下异步与同步的区别：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const fs = require('fs')\n\n// 读取文件\nlet txt1 = fs.readFileSync('./key.txt')\nconsole.log(txt1.toString(), '1')\n\nlet txt2 = fs.readFile('./key.txt', (err, txt3) => {\n  console.log(txt3.toString(), '2')\n})\n\nconsole.log(txt2, '3')\n\n")])])]),t("p",[e._v("运行结果如下， "),t("code",[e._v("readFileSync")]),e._v(" 是一个同步方法，所以当我们打印 "),t("code",[e._v("txt1")]),e._v(" 的时候立刻有返回值。而当我们打印 "),t("code",[e._v("txt2")]),e._v(" 的时候可以看到返回值是一个 "),t("code",[e._v("undefined")]),e._v("，这说明没有返回值，而数据在 "),t("code",[e._v("txt3")]),e._v(" 的回调里打印出来的。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ad4b563b6c09?w=637&h=139&f=png&s=12215",alt:""}})]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("NodeJs")]),e._v(" 中这种 API 太多了，异步是不能直接返回值的，当我们的项目大时又或者随着项目的不断迭代，久而久之嵌套就会越来越多，这个时候代码是你不愿意去维护也没法维护的，这还牵扯出来一个比较好听的名字，叫回调地狱，我们后面再讲该如何优化。")]),e._v(" "),t("h3",{attrs:{id:"异步函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步函数"}},[e._v("#")]),e._v(" 异步函数")]),e._v(" "),t("p",[e._v("我们来动手创建一个异步函数，在这里我们来通过 "),t("code",[e._v("setTimeout")]),e._v(" 来模拟异步任务， setTimeout 也是回调，这种回调错误不好处理，默认第一个参数为错误，如果有第一个参数，则说明发生了错误，那么我们就要进行相应的处理。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function asynchronous(text, fn) {\n  setTimeout(() => {\n    fn(null, '-' + text + '-')\n  }, 3000)\n}\n\nasynchronous('hello nodejs', (err, text) => {\n  if(err) console.log(err)\n  console.log(text)\n})\n\n// 3s  hello nodejs\n\n")])])]),t("h2",{attrs:{id:"事件实现异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件实现异步"}},[e._v("#")]),e._v(" 事件实现异步")]),e._v(" "),t("p",[e._v("事件这个词汇相信大家都不陌生，在学习编程的道路上大家或多或少都接触过前端。在浏览器和页面交互时有各种事件，我们用的比较多的就是点击事件，比如当用户点击某个 HTML 元素时执行一段代码。而在 NodeJs 中，也有一个 "),t("code",[e._v("events")]),e._v(" 的事件模块，事件的本质就是发布订阅设计模式。之所以能异步，还是因为回调。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("class Evente {\n    private map: any = {}\n\t\n    // 监听器\n    public on(name: string, fn: Function) {\n        if (this.map[name]) {\n            this.map[name].push(fn)\n            return this\n        }\n        this.map[name] = [fn]\n        return this\n      }\n\t\n    // 发射器\n    public emit(name: string, ...args: any[]) {\n        if (this.map[name]) {\n            this.map[name].forEach((fn: Function) => {\n                fn(...args)\n            })\n        }\n        return this\n    }\n}\n\n")])])]),t("p",[e._v("我们以 "),t("code",[e._v("name")]),e._v(" 作为 "),t("code",[e._v("key")]),e._v(" 放到 "),t("code",[e._v("map")]),e._v(" 里，也就是事件名称。当触发 emit 方法的时候，获得对应的回调进行调用：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const evente = new Evente()\n\nevente.on('click', (error: string, result: any) => {\n    if (error) return console.log(`error: ${error}`)\n    console.log(`result: ${result}`)\n})\n.emit('click', '执行错误！')\n.emit('click', null, '执行成功!')\n\n")])])]),t("p",[t("code",[e._v("NodeJs")]),e._v(" 里不少模块都是基于事件模块构建的，因为事件的里面还是有回调，对于处理错误而言，还是把第一个参数作为错误传递。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ad4ef7018b71?w=683&h=100&f=png&s=11157",alt:""}})]),e._v(" "),t("p",[e._v("我们来使用事件模式重新完成我们一开始的例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const evente = new Evente()\n\nevente.on('readFile', (error: string, result: any) => {\n    if (error) return console.log(`error: ${error}`)\n    console.log(`result: ${result}`)\n})\nfs.readFile('./key.txt', (err: any, data: any) => {\n    evente.emit('readFile', err, data)\n})\n\n")])])]),t("p",[e._v("好像变的更麻烦了一样，对于简单的异步我们没有必要使用事件来完成异步，在这里只是为大家做演示。")]),e._v(" "),t("h2",{attrs:{id:"观察者模式实现异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式实现异步"}},[e._v("#")]),e._v(" 观察者模式实现异步")]),e._v(" "),t("p",[e._v("观察者模式或者说订阅模式，它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function observableCreate(fn: Function) {\n    let ret = false\n    return ({\n        next,\n        complete,\n        error,\n    }: any) => {\n        // 通知：传递给观察者的实际数据\n        function nextFn(...args: any[]) {\n            if (ret) return\n            next(...args)\n        }\n        // 通知：按理来说这步不会发送任何值\n        function completeFn(...args: any[]) {\n            complete(...args)\n            ret = true\n        }\n        // 通知：发送一个错误或异常\n        function errorFn(...args: any[]) {\n            error(...args)\n        }\n        fn({\n            next: nextFn, complete: completeFn, error: errorFn\n        })\n        return () => (ret = true)\n    }\n}\n\n")])])]),t("p",[e._v("当订阅下面代码中的 Observable 的时候会立即(同步地)推送值"),t("code",[e._v("1")]),e._v("、"),t("code",[e._v("2")]),e._v("、"),t("code",[e._v("3")]),e._v("，然后1秒后会推送值"),t("code",[e._v("4")]),e._v("、"),t("code",[e._v("5")]),e._v("，再然后是完成流，因为 "),t("code",[e._v("complete")]),e._v(" 调用之后，把 "),t("code",[e._v("ret")]),e._v(" 设置为 "),t("code",[e._v("true")]),e._v("，"),t("code",[e._v("complate")]),e._v(" 的字面意思就是完成，完成了之后 "),t("code",[e._v("next")]),e._v(" 就不会再生效了，有错误的时候用 "),t("code",[e._v("error")]),e._v(" 发出即可。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const observerable = observableCreate((observer: any) => {\n    try {\n        observer.next(1)\n        observer.next(2)\n        observer.next(3)\n        setTimeout(() => {\n            observer.next(4)\n            observer.complete('完成！')\n        }, 1000)\n    }catch(err) {\n        observer.error(err)  // 如果捕获到异常会发送一个错误\n    }\n})\n\n")])])]),t("p",[e._v("要调用 "),t("code",[e._v("observerable")]),e._v(" 并看到这些值，我们需要_订阅_ "),t("code",[e._v("observerable")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const subject  = {\n    next: (value: any) => console.log(value, 'next'),\n    complete: (value: any) => console.log(value, 'complate'),\n    error: (value: any) => console.log(value, 'error')\n}\n\nconst unsubscribe = observerable(subject)\n\n")])])]),t("h2",{attrs:{id:"primise-实现异步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#primise-实现异步"}},[e._v("#")]),e._v(" Primise 实现异步")]),e._v(" "),t("p",[t("code",[e._v("Primise")]),e._v(" 是 "),t("code",[e._v("ES6")]),e._v(" 的新特性，为了处理异步而生，本质还是回调。只不过 "),t("code",[e._v("Promise")]),e._v(" 比传统的回调和事件更合理且更强大。"),t("code",[e._v("ES6")]),e._v(" 将其写入了语言标准，统一了用法，所以我们通常会使用 "),t("code",[e._v("Promise")]),e._v(" 来实现异步编程。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Promise 接受一个函数作为参数，该函数的两个参数分别的是 resolve：成功，reject：失败\nconst promise = new Promise((resolve, reject) => {\n  if (/* 条件满足 */) return resolve(result)\n   reject(error)\n})\n\n")])])]),t("p",[t("code",[e._v("Promise")]),e._v(" 实例生成后，可用"),t("code",[e._v("then")]),e._v(" 和 "),t("code",[e._v("catch")]),e._v(" 方法分别指定两种状态回调参数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("promise.then(console.log)\n.catch(console.log)\n\n")])])]),t("h2",{attrs:{id:"async-await-大杀器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async-await-大杀器"}},[e._v("#")]),e._v(" async/await 大杀器")]),e._v(" "),t("p",[e._v("相信大家也注意到了我们在实战环节中，都是使用的 "),t("code",[e._v("async/await")]),e._v(" , "),t("code",[e._v("ES7")]),e._v(" 标准引入了 "),t("code",[e._v("async")]),e._v(" 函数，使得异步操作变得更加方便，"),t("code",[e._v("async")]),e._v(" 其实本质是Generator函数的语法糖。"),t("code",[e._v("async/await")]),e._v(" 应该是目前最简单的异步解决方案了，我们先来看个例子：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const sleep = (time: number) => {\n    return new Promise(function (resolve: any, reject: any) {\n        setTimeout(() => {\n            resolve();\n        }, time);\n    })\n};\n\nconst start = async() => {\n    console.log('start');\n    await sleep(3000);\n    console.log('end');\n};\n\nstart();\n\n")])])]),t("p",[t("code",[e._v("async")]),e._v(" 表示 是一个异步函数，"),t("code",[e._v("await")]),e._v(" 只能用在这个函数里面。await 表示在这里等待 "),t("code",[e._v("Promise")]),e._v(" 返回结果了，再继续执行。await 后面跟着的应该是一个 "),t("code",[e._v("Promise")]),e._v(" 对象。")]),e._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),t("p",[e._v("本篇主要是带大家复习了一下异步知识，以及几种实现异步的方式。")])])}),[],!1,null,null,null);n.default=r.exports}}]);