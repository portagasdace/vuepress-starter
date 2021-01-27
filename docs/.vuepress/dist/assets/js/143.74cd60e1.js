(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{498:function(t,e,n){"use strict";n.r(e);var a=n(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"及时通讯"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#及时通讯"}},[t._v("#")]),t._v(" 及时通讯")]),t._v(" "),n("p",[t._v("如今几乎所有的软件产品中都加入了社交的功能。即时通信是非常重要而又常用的一个技术点。H5之前大家一般用Flash之类的技术，完成通信，至今很多网站的客服系统还是用这个做的。 但H5出来之后你懂的，让通信一下子变得很简单。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708acd8657180ca?w=951&h=679&f=png&s=51708",alt:""}})]),t._v(" "),n("p",[t._v("WebSocket是HTML5最新提出的规范，虽然主流浏览器都已经支持，但仍然可能有不兼容的情况，为了兼容所有浏览器，给程序员提供一致的编程体验，SocketIO将 WebSocket、AJAX和其它的通信方式全部封装成了统一的通信接口，也就是说，我们在使用SocketIO时，不用担心兼容问题，底层会自动选用最佳的通信方式。因此说，WebSocket是SocketIO的一个子集。今天我们就用 socket.io来实现一下简单的聊天应用。")]),t._v(" "),n("h2",{attrs:{id:"socket-io"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#socket-io"}},[t._v("#")]),t._v(" Socket.IO")]),t._v(" "),n("p",[n("strong",[t._v("Socket.IO")]),t._v(" 是一个基于 Node.js 的实时应用程序框架，在即时通讯、通知与消息推送，实时分析等场景中有较为广泛的应用。")]),t._v(" "),n("p",[t._v("WebSocket 的产生源于 Web 开发中日益增长的实时通信需求，对比基于 http 的轮询方式，它大大节省了网络带宽，同时也降低了服务器的性能消耗； "),n("a",{attrs:{href:"https://socket.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("socket.io"),n("OutboundLink")],1),t._v(" 支持 websocket、polling 两种数据传输方式以兼容浏览器不支持 WebSocket 场景下的通信需求。")]),t._v(" "),n("p",[t._v("框架提供了 "),n("a",{attrs:{href:"https://github.com/eggjs/egg-socket.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-socket.io"),n("OutboundLink")],1),t._v(" 插件，增加了以下开发规约：")]),t._v(" "),n("ul",[n("li",[t._v("namespace: 通过配置的方式定义 namespace（命名空间）")]),t._v(" "),n("li",[t._v("middleware: 对每一次 socket 连接的建立/断开、每一次消息/数据传递进行预处理")]),t._v(" "),n("li",[t._v("controller: 响应 socket.io 的 event 事件")]),t._v(" "),n("li",[t._v("router: 统一了 socket.io 的 event 与 框架路由的处理配置方式")])]),t._v(" "),n("h2",{attrs:{id:"安装-egg-socket-io"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-egg-socket-io"}},[t._v("#")]),t._v(" 安装 egg-socket.io")]),t._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ npm i egg-socket.io --save\n\n")])])]),n("p",[n("strong",[t._v("开启插件：")])]),t._v(" "),n("p",[n("code",[t._v("config/plugin.js")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("io: {\n   enable: true,\n   package: 'egg-socket.io',\n}\n\n")])])]),n("h3",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),n("p",[n("code",[t._v("config/config.default.ts")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("config.io = {\n    init: { }, // 传递给engine.io\n    namespace: {\n      '/': {\n        connectionMiddleware: [],\n        packetMiddleware: [],\n      },\n      '/example': {\n        connectionMiddleware: [],\n        packetMiddleware: [],\n      },\n    },\n  };\n\n")])])]),n("blockquote",[n("p",[t._v("命名空间为 "),n("code",[t._v("/")]),t._v(" 与 "),n("code",[t._v("/example")]),t._v(", 不是 "),n("code",[t._v("example")])])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/eggjs/egg-socket.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-socket.io"),n("OutboundLink")],1),t._v(" 内置了 "),n("code",[t._v("socket.io-redis")]),t._v("，在 cluster 模式下，使用 redis 可以较为简单的实现 clients/rooms 等信息共享：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" config.io = {\n   ...\n    redis: {\n      host: '127.0.0.1',\n      port: 6379,\n      auth_pass: '',\n      db: 0,\n    },\n  };\n\n")])])]),n("blockquote",[n("p",[t._v("开启 "),n("code",[t._v("redis")]),t._v(" 后，程序在启动时会尝试连接到 redis 服务器 此处 "),n("code",[t._v("redis")]),t._v(" 仅用于存储连接实例信息，参见 "),n("a",{attrs:{href:"https://socket.io/docs/server-api/#server-adapter-value",target:"_blank",rel:"noopener noreferrer"}},[t._v("#server.adapter"),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 如果项目中同时使用了 "),n("code",[t._v("egg-redis")]),t._v("， 请单独配置，不可共用。")]),t._v(" "),n("h3",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),n("p",[t._v("框架是以 Cluster 方式启动的，而 socket.io 协议实现需要 sticky 特性支持，否则在多进程模式下无法正常工作。")]),t._v(" "),n("p",[t._v("由于 "),n("a",{attrs:{href:"https://socket.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("socket.io"),n("OutboundLink")],1),t._v(" 的设计，在多进程中服务器必须在 "),n("code",[t._v("sticky")]),t._v(" 模式下工作，故需要给 startCluster 传递 sticky 参数。")]),t._v(" "),n("p",[t._v("修改 "),n("code",[t._v("package.json")]),t._v(" 中 "),n("code",[t._v("npm scripts")]),t._v(" 脚本：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n  "scripts": {\n    "dev": "egg-bin dev --sticky",\n    "start": "egg-scripts start --sticky"\n  }\n}\n\n')])])]),n("p",[n("strong",[t._v("Nginx 配置")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('location / {\n  proxy_set_header Upgrade $http_upgrade;\n  proxy_set_header Connection "upgrade";\n  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n  proxy_set_header Host $host;\n  proxy_pass   http://127.0.0.1:7001;\n\n  # http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_bind\n  # proxy_bind       $remote_addr transparent;\n}\n\n')])])]),n("h2",{attrs:{id:"使用-egg-socket-io"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-egg-socket-io"}},[t._v("#")]),t._v(" 使用 egg-socket.io")]),t._v(" "),n("p",[t._v("开启 "),n("a",{attrs:{href:"https://github.com/eggjs/egg-socket.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-socket.io"),n("OutboundLink")],1),t._v(" 的项目目录结构如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("xxxx\n├── app\n│   ├── extend\n│   │   └── helper.js\n│   ├── io\n│   │   ├── controller\n│   │   │   └── default.js\n│   │   └── middleware\n│   │       ├── connection.js\n│   │       └── packet.js\n│   └── router.js\n├── config\n└── package.json\n\n")])])]),n("blockquote",[n("p",[t._v("注意：对应的文件都在 app/io 目录下")])]),t._v(" "),n("h3",{attrs:{id:"middleware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),n("p",[t._v("中间件有如下两种场景：")]),t._v(" "),n("ul",[n("li",[t._v("Connection")]),t._v(" "),n("li",[t._v("Packet")])]),t._v(" "),n("p",[t._v("其配置于各个命名空间下，根据上述两种场景分别发生作用。")]),t._v(" "),n("p",[n("strong",[t._v("注意：")])]),t._v(" "),n("p",[t._v("如果我们启用了框架中间件，则会发现项目中有以下目录：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("app/middleware")]),t._v("：框架中间件")]),t._v(" "),n("li",[n("code",[t._v("app/io/middleware")]),t._v("：插件中间件")])]),t._v(" "),n("p",[t._v("区别：")]),t._v(" "),n("ul",[n("li",[t._v("框架中间件基于 http 模型设计，处理 http 请求。")]),t._v(" "),n("li",[t._v("插件中间件基于 socket 模型设计，处理 socket.io 请求。")])]),t._v(" "),n("p",[t._v("虽然框架通过插件尽量统一了它们的风格，但务必注意，它们的使用场景是不一样的。")]),t._v(" "),n("h4",{attrs:{id:"connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" Connection")]),t._v(" "),n("p",[t._v("在每一个客户端连接或者退出时发生作用，故而我们通常在这一步进行授权认证，对认证失败的客户端做出相应的处理：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// app/io/middleware/connection.ts\nimport { Context, Application } from 'egg';\n\nexport default function ConnectionMiddleware(_options: any, _app: Application) {\n  return async (ctx: Context, next: any) => {\n   ctx.socket.emit('res', 'connected!');\n    await next();\n    // 断开连接时执行。\n    console.log('disconnection!');\n  };\n}\n\n")])])]),n("p",[t._v("踢出用户示例：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const tick = (id, msg) => {\n  logger.debug('#tick', id, msg);\n  socket.emit(id, msg);\n  app.io.of('/').adapter.remoteDisconnect(id, true, err => {\n    logger.error(err);\n  });\n};\n\n")])])]),n("p",[t._v("同时，针对当前的连接也可以简单处理：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// app/io/middleware/connection.ts\nimport { Context, Application } from 'egg';\n\nexport default function ConnectionMiddleware(_options: any, _app: Application) {\n  return async (ctx: Context, next: any) => {\n    if (true) {\n      ctx.socket.disconnect();\n      return;\n    }\n    await next();\n    console.log('断开!');\n  };\n}\n\n")])])]),n("h4",{attrs:{id:"packet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#packet"}},[t._v("#")]),t._v(" Packet")]),t._v(" "),n("p",[t._v("作用于每一个数据包（每一条消息）；在生产环境中，通常用于对消息做预处理，又或者是对加密消息的解密等操作：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// app/io/middleware/packet.ts\nimport { Context, Application } from 'egg';\n\nexport default function ConnectionMiddleware(_options: any, _app: Application) {\n  return async (ctx: Context, next: any) => {\n    ctx.socket.emit('res', '收到数据包!');\n    console.log('packet:', this.packet);\n    await next();\n  };\n}\n\n")])])]),n("h3",{attrs:{id:"controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),n("p",[t._v("Controller 对客户端发送的 event 进行处理；由于其继承于 "),n("code",[t._v("egg.Contoller")]),t._v(", 拥有如下成员对象:")]),t._v(" "),n("ul",[n("li",[t._v("ctx")]),t._v(" "),n("li",[t._v("app")]),t._v(" "),n("li",[t._v("service")]),t._v(" "),n("li",[t._v("config")]),t._v(" "),n("li",[t._v("logger")])]),t._v(" "),n("blockquote",[n("p",[t._v("详情参考 "),n("a",{attrs:{href:"https://eggjs.org/zh-cn/basics/controller.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Controller"),n("OutboundLink")],1),t._v(" 文档")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// app/io/controller/default.ts\n\nimport { Controller } from 'egg';\n\nexport default class NspController extends Controller {\n  async ping() {\n    const { ctx, app } = this;\n    const message = ctx.args[0];\n    await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);\n  }\n}\n\n")])])]),n("h3",{attrs:{id:"router"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#router"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://github.com/push-over/egg-example/blob/master/app/router.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Router"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("路由负责将 socket 连接的不同 events 分发到对应的 controller，框架统一了其使用方式")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { Application } from 'egg';\n\nexport default (app: Application) => {\n  const { router, controller, io } = app;\n\n  router.get('/', controller.home.index);\n  \n  // tslint:disable-next-line: no-string-literal\n  io.of('/').route('server', io.controller.['home'].server);\n};\n\n")])])]),n("p",[n("strong",[t._v("注意：")])]),t._v(" "),n("p",[t._v("nsp 有如下的系统事件:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("disconnecting")]),t._v(" 断开连接。")]),t._v(" "),n("li",[n("code",[t._v("disconnect")]),t._v(" 连接已断开。")]),t._v(" "),n("li",[n("code",[t._v("error")]),t._v(" 发生了错误。")])]),t._v(" "),n("h3",{attrs:{id:"namespace-room"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namespace-room"}},[t._v("#")]),t._v(" Namespace/Room")]),t._v(" "),n("h4",{attrs:{id:"namespace-nsp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namespace-nsp"}},[t._v("#")]),t._v(" Namespace (nsp)")]),t._v(" "),n("p",[t._v('namespace 通常意味分配到不同的接入点或者路径，如果客户端没有指定 nsp，则默认分配到 "/" 这个默认的命名空间。')]),t._v(" "),n("p",[t._v("在 socket.io 中我们通过 "),n("code",[t._v("of")]),t._v(" 来划分命名空间；鉴于 nsp 通常是预定义且相对固定的存在，框架将其进行了封装，采用配置的方式来划分不同的命名空间。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const nsp = io.of('/my-namespace');\nnsp.on('connection', function(socket){\n  console.log('someone connected');\n});\nnsp.emit('hi', 'everyone!');\n\n// egg\nconfig.io = {\n    init: { },\n    namespace: {\n      '/': {\n        connectionMiddleware: [ 'auth' ],\n        packetMiddleware: [],\n      },\n    },\n};\n\n")])])]),n("h4",{attrs:{id:"room"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#room"}},[t._v("#")]),t._v(" Room")]),t._v(" "),n("p",[t._v("room 存在于 nsp 中，通过 join/leave 方法来加入或者离开; 框架中使用方法相同；")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const room = 'default_room';\n\nimport { Context, Application } from 'egg';\n\nexport default function AuthMiddleware(_options: any, _app: Application) {\n  return async (ctx: Context, next: any) => {\n    ctx.socket.join(room);\n    ctx.app.io.of('/').to(room).emit('online', { msg: 'welcome', id: ctx.socket.id });\n    await next();\n    console.log('断开');\n  };\n}\n\n")])])]),n("p",[n("strong",[t._v("注意：")]),t._v(" 每一个 socket 连接都会拥有一个随机且不可预测的唯一 id "),n("code",[t._v("Socket#id")]),t._v("，并且会自动加入到以这个 "),n("code",[t._v("id")]),t._v(" 命名的 room 中。")]),t._v(" "),n("h2",{attrs:{id:"实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),n("p",[t._v("这里我们使用 "),n("a",{attrs:{href:"https://github.com/eggjs/egg-socket.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-socket.io"),n("OutboundLink")],1),t._v(" 来做一个支持聊天的小例子。")]),t._v(" "),n("h3",{attrs:{id:"客户端-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端-client"}},[t._v("#")]),t._v(" 客户端 "),n("a",{attrs:{href:"https://github.com/push-over/egg-example/blob/master/app/view/socket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("client"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("UI 相关的内容我就不带大家一步步写了，大家可以拉取源码进行实践，在这我们通过 "),n("code",[t._v("window.socket")]),t._v("调用即可。")]),t._v(" "),n("p",[t._v("具体的样子如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708acecf41f1aef?w=1270&h=718&f=png&s=74491",alt:""}})]),t._v(" "),n("p",[t._v("既然我们基于 socket.io 那我们的客户端也需要使用scoket.io 才能完成和服务器端的通信。首先我们引入 socket.io 和 vue 的 CDN。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n...\n\n<body>\n  <div id="app">\n \t...\n  </div>\n  <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"><\/script>\n  <script src="https://cdn.bootcss.com/socket.io/2.3.0/socket.io.js"><\/script>\n</body>\n</html>\n\n')])])]),n("p",[t._v("我们先来了解一个知识点：")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("socket.emit")]),t._v(" 表示发送了一个 "),n("code",[t._v("action")]),t._v(" 命令")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("socket.on")]),t._v(" 表示接收一个 "),n("code",[t._v("action")]),t._v(" 命令")])])]),t._v(" "),n("p",[t._v("接下来我们来完成我们客户端的代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<script>\n  const app = new Vue({\n    el: '#app',\n    data: {\n      user: null,\t// 用户\n      userList: [],\t// 用户列表\n      messageList: [], // 消息列表\n      search: '',\t   // search user\n      target: '群聊',\t  // 目标\n      text: '',\t\t// 文本消息\n      tipsList: [],\t// 消息提示\n    },\n     mounted() {\n      const _this = this\n      // 请注意我们在调用 io() 时没有指定任何 URL，因为它默认将尝试连接到提供当前页面的主机。\n      const socket = io('/', {\n        // 实际使用中可以在这里传递参数\n        query: {\n          room: 'demo'\n        },\n        transports: ['websocket']\n      });\n      socket.on('connect', () => {\n        const id = socket.id;\n        log('#connect,', id, socket);\n        // 监听自身 id 以实现通讯\n        socket.on(id, msg => {\n          log('#receive,', msg);\n        });\n      });\n      // 接收在线用户信息\n      socket.on('online', msg => {\n        log('#online,', msg);\n      });\n      // 系统事件\n      socket.on('disconnect', msg => {\n        console.log('服务器异常，已与服务器失去联系！', msg)\n      });\n      socket.on('disconnecting', () => {\n        console.log('断开连接！', msg)\n      });\n      socket.on('error', () => {\n        console.log('未知错误！')\n      });\n      window.socket = socket;\n    }\n  })\n<\/script>\n\n")])])]),n("p",[t._v("接下来我们来完善发送消息：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<script>\n    ...\n    inputing(e) {\n        const _this = this\n        // 在这里我们是使用 Enter 发送的\n        if (e.keyCode === 13 && _this.text.trim().length) {\n          // exchange  就是socket.io 的路由\n          // 传给服务器端一个要通讯的目标 (target)\n          window.socket.emit('exchange', {\n            target: _this.target,\n            payload: {\n              msg: _this.text,\n            },\n          });\n          // 添加到消息列表\n          _this.messages(_this.target, true, _this.text)\n          _this.text = ''\n        }\n      }\n    ...\n<\/script>\n\n")])])]),n("p",[t._v("发送消息我们完成了，那接收消息呢？ 接收消息也很简单，我们来看代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<script>\n    ...\n     socket.on('connect', () => {\n        const id = socket.id;\n        _this.user = id\n        // 接收通讯目标的消息\n        socket.on(id, msg => {\n          const { data, meta } = msg\n          const date = new Date(meta.timestamp)\n          // 添加到消息列表\n          _this.messages(meta.client, false, data.payload.msg, date)\n          if (!_this.tipsList.includes(meta.client)) _this.tipsList.push(meta.client)\n       });\n    ...\n<\/script>\n\n")])])]),n("p",[t._v("是不是发现 socket.io 仅用简短的代码就完成了一个聊天案例啊")]),t._v(" "),n("h3",{attrs:{id:"服务端-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务端-server"}},[t._v("#")]),t._v(" 服务端 server")]),t._v(" "),n("h4",{attrs:{id:"扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),n("p",[t._v("框架扩展用于封装数据格式")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// {app_root}/app/extend/helper.ts\n\nexport default {\n  parseMsg(action: string, payload = {}, metadata = {}) {\n    const meta = Object.assign({}, {\n      timestamp: Date.now(),\n    }, metadata);\n\n    return {\n      meta,\n      data: {\n        action,\n        payload,\n      },\n    };\n  },\n};\n\n\n")])])]),n("h4",{attrs:{id:"中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/eggjs/egg-socket.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("egg-socket.io"),n("OutboundLink")],1),t._v(" 中间件负责 socket 连接的处理，我们建立一个 "),n("code",[t._v("auth")]),t._v(" 中间件，来做一些用户加入和离开的操作：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const PREFIX = 'room';\n\nimport { Context, Application } from 'egg';\n\nexport default function AuthMiddleware(_options: any, _app: Application) {\n  return async (ctx: Context, next: any) => {\n    const { app, socket, logger, helper } = ctx;\n    const id = socket.id;\n    const nsp = app.io.of('/');\n    const query = socket.handshake.query;\n\n    const { room } = query;\n    const rooms = [ room ];\n\n    const tick = (id: any, msg: {} | undefined) => {\n      // 踢出用户前发送消息\n      socket.emit(id, helper.parseMsg('deny', msg));\n      // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件\n      // tslint:disable-next-line: no-string-literal\n      nsp['adapter'].remoteDisconnect(id, true, (err: any) => {\n        logger.error(err);\n      });\n    };\n\t\n    // 检查房间是否存在，不存在则踢出用户\n    const hasRoom = await app.redis.get(`${PREFIX}:${room}`);\n\n    if (!hasRoom) {\n      tick(id, {\n        type: '已删除',\n        message: '删除，房间已删除.',\n      });\n      return;\n    }\n\t\n    // 用户加入\n    socket.join(room);\n\t\n    // 在线列表\n    // tslint:disable-next-line: no-string-literal\n    nsp['adapter'].clients(rooms, (_err: any, clients: any) => {\n      // 更新在线用户列表\n      // tslint:disable-next-line: no-string-literal\n      nsp['to'](room).emit('online', {\n        clients,\n        action: '加入',\n        target: '参加者',\n        message: `用户(${id})已加入.`,\n      });\n    });\n\n    await next();\n\n    // tslint:disable-next-line: no-string-literal\n    nsp['adapter'].clients(rooms, (_err: any, clients: any) => {\n      // 更新在线用户列表\n      // tslint:disable-next-line: no-string-literal\n      nsp['to'](room).emit('online', {\n        clients,\n        action: '离开',\n        target: '参加者',\n        message: `用户(${id})已离开.`,\n      });\n    });\n  };\n}\n\n")])])]),n("h4",{attrs:{id:"控制器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制器"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),n("p",[t._v("通信，通过 "),n("code",[t._v("exchange")]),t._v(" 进行数据交换")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { Controller } from 'egg';\n\nexport default class NspController extends Controller {\n  async exchange() {\n    const { ctx, app } = this;\n    const nsp = app.io.of('/');\n    // 客户端传递的消息\n    const message = ctx.args[0] || {};\n    const socket = ctx.socket;\n    const client = socket.id;\n\n    try {\n      const { target, payload } = message;\n      if (!target) return;\n      const msg = ctx.helper.parseMsg('exchange', payload, { client, target });\n      // 判断是群聊还是私聊\n      if (target === '群聊') {\n        // 广播：发送给不包括自己的所有人\n        socket.broadcast.emit(target, msg);\n      } else {\n        // tslint:disable-next-line: no-string-literal\n        nsp['emit'](target, msg);\n        // socket.emit(target, msg);\n      }\n    } catch (error) {\n      app.logger.error(error);\n    }\n  }\n}\n\n\n")])])]),n("h4",{attrs:{id:"路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),n("p",[t._v("建立 "),n("code",[t._v("socket.io")]),t._v(" 路由进行测试：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import { Application } from 'egg';\n\nexport default (app: Application) => {\n  const { router, controller, io } = app;\n\n  // tslint:disable-next-line: no-string-literal\n  io.of('/').route('exchange', io.controller[ 'nsp' ].exchange);\n};\n\n")])])]),n("p",[t._v("多开几个 tab 页面，并测试发送消息：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/2/28/1708ace7e3af1591?w=1890&h=823&f=png&s=82818",alt:""}})]),t._v(" "),n("p",[t._v("大家有没有感觉使用 "),n("code",[t._v("socket.io")]),t._v(" 只用简短的代码就实现了一个简易的聊天应用呢，有没有感觉很方便。当然 socket.io 还有很多 api，大家有兴趣可以去研究研究该怎么样优化我们这个案例。")]),t._v(" "),n("h2",{attrs:{id:"课外练习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#课外练习"}},[t._v("#")]),t._v(" 课外练习")]),t._v(" "),n("p",[t._v("下面是一些可以做的优化：")]),t._v(" "),n("ul",[n("li",[t._v("当用户连接和断开连接时广播消息")]),t._v(" "),n("li",[t._v("添加昵称")]),t._v(" "),n("li",[t._v("添加 “{用户} 正在输入” 功能")]),t._v(" "),n("li",[t._v("显示在线用户")]),t._v(" "),n("li",[t._v("添加发送表情包")]),t._v(" "),n("li",[t._v("添加发送语音")])]),t._v(" "),n("p",[t._v("...")])])}),[],!1,null,null,null);e.default=s.exports}}]);