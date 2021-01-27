(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{738:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"开发指南篇-2-学会编写可复用性模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发指南篇-2-学会编写可复用性模块"}},[t._v("#")]),t._v(" 开发指南篇 2：学会编写可复用性模块")]),t._v(" "),e("p",[t._v("在生活中，重复的机械劳动会消耗我们的时间和精力，提高生产成本，降低工作效率。同样，在代码世界中，编写重复的代码会导致代码的冗余，页面性能的下降以及后期维护成本的增加。由此可见将重复的事情复用起来是提高生产效率、降低维护成本的不二之选。")]),t._v(" "),e("p",[t._v("在 Vue 项目中，每一个页面都可以看作是由大大小小的模块构成的，即便是一行代码、一个函数、一个组件都可以看作是一个个自由的模块。那么提高代码的复用性的关键便在于编写可复用的模块，也就是编写可复用的代码、函数和组件等。")]),t._v(" "),e("h2",{attrs:{id:"一个简单的例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的例子"}},[t._v("#")]),t._v(" 一个简单的例子")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let person = [];\n\nfor (let i = 0; i < data.obj.items.length; i++) {\n    person.push({\n        name: data.obj.items[i].name,\n        age: data.obj.items[i].age\n    });\n}\n\n")])])]),e("p",[t._v("不知道上方代码给你的第一印象是什么？总之给我的印象是糟糕的，因为出现了重复性的代码片段 "),e("code",[t._v("data.obj.items")]),t._v("，可能这样的代码在我们团队开发中随处可见，这也说明了重复编码现象其实无处不在。")]),t._v(" "),e("p",[t._v("面对自己编写的代码，我们应该保持一颗去重的心，发现重复的地方就相当于找到了可以复用的模块。在不复用的情况下，上述代码一旦需要修改变量 "),e("code",[t._v("items")]),t._v(" 为 "),e("code",[t._v("lists")]),t._v("，那么我们就得修改 3 处地方，不知不觉就增加了维护成本。而到时候往往修改你代码的人并不是你自己，所以对自己好点，对他人也会好点。复用后的代码如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let person = [];\nlet values = data.obj.items;\n\nfor (let i = 0; i < values.length; i++) {\n    person.push({\n        name: values[i].name,\n        age: values[i].age\n    });\n}\n\n")])])]),e("p",[t._v("我们通过将 data.obj.items 的值赋值给变量 values 来实现了复用，此时修改 "),e("code",[t._v("items")]),t._v(" 为 "),e("code",[t._v("lists")]),t._v(" 的话我们只需修改一处地方即可，不管是维护成本还是代码可读性上，复用的优势都显而易见。")]),t._v(" "),e("h2",{attrs:{id:"封装成一个函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装成一个函数"}},[t._v("#")]),t._v(" 封装成一个函数")]),t._v(" "),e("p",[t._v("除了使用变量的赋值缓存使用来解决数据的重复读取外，我们在开发过程中重复性更多的也许是功能点的重复，比如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<tempalte>\n    <div>\n        <input type="text" v-model="str1">\n        <input type="text" v-model="str2">\n        <div>{{ str1.slice(1).toUpperCase() }}</div>\n        <div>{{ str2.slice(1).toUpperCase() }}</div>\n    </div>\n</template>\n\n')])])]),e("p",[t._v("上述代码的重复功能点在于截取输入框中第二个字符开始到最后的值并把它们转化成大写字母，像这样很简单的操作虽然重复使用也不会出现太大的问题，但是如果是代码量较多的操作呢？重复书写相同功能的代码是一种不经过大脑思考的行为，我们需要对其进行优化，这里我们可以把功能点封装成一个函数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export default {\n    methods: {\n        sliceUpperCase(val) {\n            return val.slice(1).toUpperCase()\n        }\n    }\n}\n\n")])])]),e("p",[t._v("如此我们只要在用到该方法的地方调用即可，将值传入其中并返回新值。当然像在双花括号插值和 v-bind 表达式中重复的功能点我们可以封装成过滤器比较合适：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 单文件组件注册过滤器\nfilters: {\n    sliceUpperCase(val) {\n        return val.slice(1).toUpperCase()\n    }\n}\n\n// 全局注册过滤器\nVue.filter('sliceUpperCase', function (val) {\n    return val.slice(1).toUpperCase()\n})\n\n")])])]),e("p",[t._v("然后在 html 中使用“管道”符进行过滤：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<div>{{ str1 | toUpperCase }}</div>\n<div>{{ str2 | toUpperCase }}</div>\n\n")])])]),e("p",[t._v("这样我们就把重复的功能性代码封装成了函数，而不管是过滤器还是正常的方法封装，其本质都是函数的封装。")]),t._v(" "),e("h2",{attrs:{id:"封装成一个组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装成一个组件"}},[t._v("#")]),t._v(" 封装成一个组件")]),t._v(" "),e("p",[t._v("相比较于函数的封装，规模更大一点的便是组件的封装，组件包含了模板、脚本以及样式的代码，在实际开发中组件的使用频率也是非常大的，我们项目中的每一个页面其实都可以看作是一个父组件，其可以包含很多子组件，子组件通过接收父组件的值来渲染页面，父组件通过响应子组件的回调来触发事件。")]),t._v(" "),e("p",[t._v("封装一个组件主要包含两种方式，一种是最常见的整体封装，用户通过改变数据源来呈现不同的页面状态，代码结构不可定制化。例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div>\n    <my-component data="我是父组件传入子组件的数据"></my-component>\n</div>\n\n')])])]),e("p",[t._v("另一种便是自定义封装，也就是插槽(slot)，我们可以开放一部分槽位给父组件，使其能够进行一定程度的定制化，例如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div>\n    <my-component data="我是父组件传入子组件的数据">\n        <template slot="customize">\n            <span>这是定制化的数据</span>\n        </template>\n    </my-component>\n</div>\n\n')])])]),e("p",[t._v("在 myComponent 组件中我们便可以接收对应的 slot：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div class="container">\n    <span>{{ data }}</span>\n    <slot name="customize"></slot>\n<div>\n\n')])])]),e("p",[t._v('这里我们通过定义 slot 标签的 name 值为 customize 来接收父组件在使用该组件时在 template 标签上定义的 slot="customize" 中的代码，不同父组件可以定制不同的 slot 代码来实现差异化的插槽。最终渲染出来的代码如下：')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div>\n    <div class="container">\n        <span>我是父组件传入子组件的数据</span>\n        <span>这是定制化的数据</span>\n    </div>\n</div>\n\n')])])]),e("p",[t._v("这样我们就完成了一个小型组件的封装，将共用代码封装到组件中去，页面需要引入的时候直接使用 import 并进行相应注册即可，当然你也可以进行全局的引入：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import myComponent from '../myComponent.vue'\n\n// 全局\nVue.component('my-component', myComponent)\n\n")])])]),e("h2",{attrs:{id:"封装成一个插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封装成一个插件"}},[t._v("#")]),t._v(" 封装成一个插件")]),t._v(" "),e("p",[t._v("在某些情况下，我们封装的内容可能不需要使用者对其内部代码结构进行了解，其只需要熟悉我们提供出来的相应方法和 api 即可，这需要我们更系统性的将公用部分逻辑封装成插件，来为项目添加全局功能，比如常见的 loading 功能、弹框功能等。")]),t._v(" "),e("p",[t._v("Vue 提供给了我们一个 install 方法来编写插件，使用该方法中的第一个 Vue 构造器参数可以为项目添加全局方法、资源、选项等。比如我们可以给组件添加一个简单的全局调用方法来实现插件的编写：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/* toast.js */\nimport ToastComponent from './toast.vue' // 引入组件\n\nlet $vm\n\nexport default {    \n    install(Vue, options) {\n        \n        // 判断实例是否存在\n        if (!$vm) {            \n            const ToastPlugin = Vue.extend(ToastComponent); // 创建一个“扩展实例构造器”\n            \n            // 创建 $vm 实例\n            $vm = new ToastPlugin({                \n                el: document.createElement('div')  // 声明挂载元素          \n            });            \n            \n            document.body.appendChild($vm.$el); // 把 toast 组件的 DOM 添加到 body 里\n        } \n        \n        // 给 toast 设置自定义文案和时间\n        let toast = (text, duration) => {\n            $vm.text = text;\n            $vm.duration = duration;\n            \n            // 在指定 duration 之后让 toast 消失\n            setTimeout(() => {\n                $vm.isShow = false;  \n            }, $vm.duration);\n        }\n        \n        // 判断 Vue.$toast 是否存在\n        if (!Vue.$toast) {            \n            Vue.$toast = toast;        \n        }        \n        \n        Vue.prototype.$toast = Vue.$toast; // 全局添加 $toast 事件\n    }\n}\n\n")])])]),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/1/166cb0b518f4c53c?w=855&h=285&f=jpeg&s=28471",alt:""}})]),t._v(" "),e("p",[t._v("成功编写完插件的 JS 脚本后，我们在入口文件中需要通过 Vue.use() 来注册一下该插件：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import Toast from '@/widgets/toast/toast.js'\n\nVue.use(Toast); // 注册 Toast\n\n")])])]),e("p",[t._v("最后我们在需要调用它的地方直接传入配置项使用即可，比如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("this.$toast('Hello World', 2000);\n\n")])])]),e("p",[t._v("当然你也可以不使用 install 方法来编写插件，直接采用导出一个封装好的实例方法并将其挂载到 Vue 的原型链上来实现相同的功能。")]),t._v(" "),e("p",[t._v("更详细的编写插件和实例的方法可以参考我之前写的一篇文章："),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/Aqgh7Dkialhm9v8U0wBuqg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 插件编写与实战"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"结语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),e("p",[t._v("本文讲解了编写可复用性模块的常见方法，通过出现了重复代码 -> 封装成一个变量 -> 封装成一个函数 -> 封装成一个组件 -> 封装成一个插件，一步步将重复代码进行分析和复用。而与重复代码做斗争是一个持久性的过程，我们需要时刻保持一种“强迫症”的心态去整理复用项目中的重复代码，做好编码的严谨和自律。")]),t._v(" "),e("h2",{attrs:{id:"思考-作业"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思考-作业"}},[t._v("#")]),t._v(" 思考 & 作业")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在 Vue 中如何添加全局自定义指令？")])]),t._v(" "),e("li",[e("p",[t._v("在 vue 路由切换时如何全局隐藏某个插件？比如文中的 toast")])]),t._v(" "),e("li",[e("p",[t._v("如何实现一个表单验证插件？需要运用到哪些知识？")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);